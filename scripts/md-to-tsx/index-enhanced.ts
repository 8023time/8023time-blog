// eslint-disable-next-line no-console
console.log('增强版脚本开始执行...');
import { generateMarkdownEnhanced } from './compile-markdown-enhanced.ts';

async function main() {
  await generateMarkdownEnhanced();
  // eslint-disable-next-line no-console
  console.log('✨ 所有 Markdown 文件已成功处理，并生成目录数据。');
}

main().catch((error) => {
  console.error('❌ 致命错误：Markdown 转换失败！');
  console.error('详细错误信息:', error);
  process.exit(1);
});
