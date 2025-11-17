/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeShiki from '@shikijs/rehype';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';
import { visit } from 'unist-util-visit';
import type { Root, Element } from 'hast';
import rehypeTailwindInjector from './rehype-tailwind-injector.js';

const outDir = path.resolve('src/generated');
const inputDir = path.resolve('source/post');

interface DocMetadata {
  title: string;
  description?: string;
  cover?: string;
  date?: string;
  updated?: string;
  tags?: string[];
  category?: string[];
  draft?: boolean;
  toc?: boolean;
  order?: number;
  headings: Heading[];
  path: string;
  relativePath: string;
  frontMatter: Record<string, any>; // 保留原始所有字段
}

// 标题接口
interface Heading {
  level: number;
  text: string;
  id: string;
}

// 目录树节点接口
interface CatalogNode {
  name: string;
  path?: string;
  type: 'folder' | 'file';
  children?: CatalogNode[];
  metadata?: DocMetadata;
}

// 提取标题的插件
/**
 * 提取文档标题的函数工厂
 * @returns 返回一个处理函数，该函数接收一个 Markdown 树结构并提取所有标题
 */
function extractHeadings() {
  // 用于存储所有提取到的标题的数组
  const headings: Heading[] = [];

  // 返回一个处理函数，该函数接收一个 Markdown 树结构 (Root 类型)
  return (tree: Root) => {
    // 遍历树中的所有节点，处理元素类型的节点
    visit(tree, 'element', (node: Element) => {
      // 检查是否为 h1, h2 或 h3 标题元素
      if (['h1', 'h2', 'h3'].includes(node.tagName)) {
        // 从标签名中提取标题级别 (h1 -> 1, h2 -> 2, etc.)
        const level = parseInt(node.tagName.charAt(1));
        // 提取标题文本内容
        const text = extractText(node);
        // 根据标题文本生成唯一 ID
        const id = generateId(text);

        // 为标题添加 id 属性
        node.properties = node.properties || {};
        node.properties.id = id;

        headings.push({ level, text, id });
      }
    });

    return headings;
  };
}

// 从节点中提取纯文本
function extractText(node: any): string {
  let text = '';

  if (node.type === 'text') {
    text += node.value;
  }

  if (node.children) {
    for (const child of node.children) {
      text += extractText(child);
    }
  }

  return text;
}

// 生成标题 ID
function generateId(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s\u4e00-\u9fa5]/g, '') // 保留中文、英文和空格
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

// 生成 TSX 文件
async function generateTSX(
  filePath: string,
  outPath: string,
  relativePath: string,
  categories: string[],
): Promise<DocMetadata> {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { content, data: frontMatter } = matter(fileContent);

    // 提取标题
    let headings: Heading[] = [];

    // 使用 unified 处理器链
    const result = await unified()
      .use(remarkParse)
      .use(remarkGfm)
      // MDAST -> HAST
      .use(remarkRehype)
      // 提取文档标题的函数工厂
      .use(() => (tree: Root) => {
        headings = extractHeadings()(tree);
      })
      // 使用代码语法高亮主题
      .use(rehypeShiki, {
        inline: false,
        themes: {
          light: 'synthwave-84',
          dark: 'synthwave-84',
        },
      })
      // HAST (注入 Tailwind)
      .use(rehypeTailwindInjector)
      // HAST -> HTML 字符串
      .use(rehypeStringify)
      // 处理目标 MD 内容
      .process(content);

    // 获取 HTML 字符串
    const htmlString = String(result.value);

    // 获取标题数据
    if (frontMatter?.title === undefined) {
      throw new Error(`路径-${filePath}-文件标题未定义,请完善标题后再运行脚本`);
    }
    const title: string = frontMatter.title;

    // 创建元数据
    const metadata: DocMetadata = {
      title,
      path: outPath.replace(/\\/g, '/'),
      relativePath: relativePath.replace(/\\/g, '/'),
      category: categories,
      headings,
      frontMatter,
    };

    // 生成 TSX 内容
    const tsxContent = `
/**
 * @description: 这是一个自动生成的文件,请不要轻易修改它.
 * @source: ${filePath.replace(/\\/g, '/')}
 * @script: scripts/md-to-tsx
 */

import React from 'react';

export const metadata = ${JSON.stringify(metadata, null, 2)};

const MarkdownComponent: React.FC = () => {
  // 渲染 Markdown 内容，使用 dangerouslySetInnerHTML
  return (
    <div
      className="markdown-content-wrapper prose prose-slate dark:prose-invert max-w-none"
      dangerouslySetInnerHTML={{ __html: ${JSON.stringify(htmlString)} }}
    />
  );
};

export default MarkdownComponent;
`;

    // 确保输出目录存在
    const outputDir = path.dirname(outPath);
    fs.mkdirSync(outputDir, { recursive: true });

    // 写入 TSX 文件
    fs.writeFileSync(outPath, tsxContent, 'utf8');
    console.log(`✅ Generated: ${outPath}`);

    return metadata;
  } catch (error) {
    console.error(`❌ Failed to process file: ${filePath}`, error);
    throw error;
  }
}

// 递归处理 Markdown 文件并保留文件夹结构
async function processMarkdownFilesRecursive(
  currentInputDir: string,
  currentOutputDir: string,
  baseInputDir: string = inputDir,
  baseOutputDir: string = outDir,
  catalogTree: CatalogNode[] = [],
  categories: string[] = [],
): Promise<CatalogNode[]> {
  try {
    const items = fs.readdirSync(currentInputDir, { withFileTypes: true });

    for (const item of items) {
      const inputPath = path.join(currentInputDir, item.name);
      const outputPath = path.join(currentOutputDir, item.name);

      if (item.isDirectory()) {
        // 处理文件夹
        const folderNode: CatalogNode = {
          name: item.name,
          type: 'folder',
          children: [],
        };

        // 递归处理子文件夹
        await processMarkdownFilesRecursive(inputPath, outputPath, baseInputDir, baseOutputDir, folderNode.children!, [
          ...categories,
          item.name,
        ]);

        // 只有当文件夹有内容时才添加到目录树
        if (folderNode.children!.length > 0) {
          catalogTree.push(folderNode);
        }
      } else if (item.isFile() && item.name.endsWith('.md')) {
        // 处理 Markdown 文件
        const outputFilePath = outputPath.replace('.md', '.tsx');
        const relativePath = path.relative(baseInputDir, inputPath);

        // 生成 TSX 并获取元数据
        const metadata = await generateTSX(inputPath, outputFilePath, relativePath, categories);

        // 添加文件节点到目录树
        const fileNode: CatalogNode = {
          name: item.name.replace('.md', ''),
          path: relativePath.replace(/\\/g, '/').replace('.md', ''),
          type: 'file',
          metadata,
        };

        catalogTree.push(fileNode);
      }
    }

    return catalogTree;
  } catch (error) {
    console.error('Error processing Markdown files:', error);
    return catalogTree;
  }
}

// 生成目录数据文件
function generateCatalogData(catalogTree: CatalogNode[]) {
  const catalogDataPath = path.join(outDir, 'catalog-data.ts');

  const content = `
/**
 * @description: 自动生成的目录数据文件
 * @script: scripts/md-to-tsx
 */

export interface Heading {
  level: number;
  text: string;
  id: string;
}

export interface DocMetadata {
  title: string;
  path: string;
  relativePath: string;
  category: string[];
  headings: Heading[];
  frontMatter: any;
}

export interface CatalogNode {
  name: string;
  path?: string;
  type: 'folder' | 'file';
  children?: CatalogNode[];
  metadata?: DocMetadata;
}

export const catalogData: CatalogNode[] = ${JSON.stringify(catalogTree, null, 2)};

export default catalogData;
`;

  fs.writeFileSync(catalogDataPath, content, 'utf8');
  console.log(`✅ Generated catalog data: ${catalogDataPath}`);
}

// 主函数
export async function generateMarkdownEnhanced() {
  // 确保输出目录存在
  fs.mkdirSync(outDir, { recursive: true });

  // 递归处理所有 Markdown 文件
  const catalogTree = await processMarkdownFilesRecursive(inputDir, outDir);

  // 生成目录数据
  generateCatalogData(catalogTree);

  console.log('✨ All Markdown files processed successfully with catalog data.');
}
