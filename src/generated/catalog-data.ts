
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

export const catalogData: CatalogNode[] = [
  {
    "name": "react",
    "type": "folder",
    "children": [
      {
        "name": "hooks",
        "type": "folder",
        "children": [
          {
            "name": "useId",
            "path": "react/hooks/useId",
            "type": "file",
            "metadata": {
              "title": "useRef",
              "path": "D:/code/dome/JavaScript/react/react_dome/src/generated/react/hooks/useId.tsx",
              "relativePath": "react/hooks/useId.md",
              "category": [
                "react",
                "hooks"
              ],
              "headings": [
                {
                  "level": 1,
                  "text": "useId",
                  "id": "useid"
                },
                {
                  "level": 1,
                  "text": "使用场景",
                  "id": "使用场景"
                },
                {
                  "level": 1,
                  "text": "语法",
                  "id": "语法"
                },
                {
                  "level": 2,
                  "text": "参数",
                  "id": "参数"
                },
                {
                  "level": 2,
                  "text": "返回值",
                  "id": "返回值"
                },
                {
                  "level": 1,
                  "text": "示例",
                  "id": "示例"
                }
              ],
              "frontMatter": {
                "title": "useRef",
                "date": "2020-05-15",
                "draft": false,
                "path": "/blog/react-hook-useRef"
              }
            }
          },
          {
            "name": "useImperativeHandle",
            "path": "react/hooks/useImperativeHandle",
            "type": "file",
            "metadata": {
              "title": "useImperativeHandle",
              "path": "D:/code/dome/JavaScript/react/react_dome/src/generated/react/hooks/useImperativeHandle.tsx",
              "relativePath": "react/hooks/useImperativeHandle.md",
              "category": [
                "react",
                "hooks"
              ],
              "headings": [
                {
                  "level": 1,
                  "text": "useImperativeHandle",
                  "id": "useimperativehandle"
                }
              ],
              "frontMatter": {
                "title": "useImperativeHandle",
                "date": "2020-05-15",
                "draft": false,
                "path": "/blog/react-hook-useRef"
              }
            }
          },
          {
            "name": "useReducer",
            "path": "react/hooks/useReducer",
            "type": "file",
            "metadata": {
              "title": "useReducer",
              "path": "D:/code/dome/JavaScript/react/react_dome/src/generated/react/hooks/useReducer.tsx",
              "relativePath": "react/hooks/useReducer.md",
              "category": [
                "react",
                "hooks"
              ],
              "headings": [
                {
                  "level": 1,
                  "text": "useReducer",
                  "id": "usereducer"
                },
                {
                  "level": 1,
                  "text": "参数",
                  "id": "参数"
                },
                {
                  "level": 1,
                  "text": "返回值",
                  "id": "返回值"
                },
                {
                  "level": 1,
                  "text": "例子",
                  "id": "例子"
                },
                {
                  "level": 1,
                  "text": "总结",
                  "id": "总结"
                },
                {
                  "level": 1,
                  "text": "与 useState 的区别",
                  "id": "与-usestate-的区别"
                }
              ],
              "frontMatter": {
                "title": "useReducer",
                "date": "2020-05-15",
                "draft": false,
                "path": "/blog/react-hook-useReducer"
              }
            }
          },
          {
            "name": "useRef",
            "path": "react/hooks/useRef",
            "type": "file",
            "metadata": {
              "title": "useRef",
              "path": "D:/code/dome/JavaScript/react/react_dome/src/generated/react/hooks/useRef.tsx",
              "relativePath": "react/hooks/useRef.md",
              "category": [
                "react",
                "hooks"
              ],
              "headings": [
                {
                  "level": 1,
                  "text": "useRef",
                  "id": "useref"
                },
                {
                  "level": 1,
                  "text": "语法",
                  "id": "语法"
                },
                {
                  "level": 2,
                  "text": "参数",
                  "id": "参数"
                },
                {
                  "level": 2,
                  "text": "返回值",
                  "id": "返回值"
                },
                {
                  "level": 1,
                  "text": "应用场景",
                  "id": "应用场景"
                },
                {
                  "level": 2,
                  "text": "1. 处理DOM元素",
                  "id": "1-处理dom元素"
                },
                {
                  "level": 2,
                  "text": "2. 保持持久性数据",
                  "id": "2-保持持久性数据"
                },
                {
                  "level": 1,
                  "text": "对比",
                  "id": "对比"
                }
              ],
              "frontMatter": {
                "title": "useRef",
                "date": "2020-05-15",
                "draft": false,
                "path": "/blog/react-hook-useRef"
              }
            }
          },
          {
            "name": "useRef1",
            "path": "react/hooks/useRef1",
            "type": "file",
            "metadata": {
              "title": "useRef",
              "path": "D:/code/dome/JavaScript/react/react_dome/src/generated/react/hooks/useRef1.tsx",
              "relativePath": "react/hooks/useRef1.md",
              "category": [
                "react",
                "hooks"
              ],
              "headings": [
                {
                  "level": 1,
                  "text": "useRef",
                  "id": "useref"
                },
                {
                  "level": 2,
                  "text": "摘自",
                  "id": "摘自"
                },
                {
                  "level": 2,
                  "text": "特点",
                  "id": "特点"
                },
                {
                  "level": 2,
                  "text": "常见使用场景",
                  "id": "常见使用场景"
                },
                {
                  "level": 3,
                  "text": "1. 处理DOM元素",
                  "id": "1-处理dom元素"
                },
                {
                  "level": 3,
                  "text": "2. 存储可变值（不触发渲染）",
                  "id": "2-存储可变值不触发渲染"
                },
                {
                  "level": 3,
                  "text": "3. 保存定时器或副作用相关值",
                  "id": "3-保存定时器或副作用相关值"
                },
                {
                  "level": 2,
                  "text": "对比",
                  "id": "对比"
                }
              ],
              "frontMatter": {
                "title": "useRef",
                "author": "8023time",
                "date": "2025-11-04T00:00:00.000Z"
              }
            }
          },
          {
            "name": "useState",
            "path": "react/hooks/useState",
            "type": "file",
            "metadata": {
              "title": "useState",
              "path": "D:/code/dome/JavaScript/react/react_dome/src/generated/react/hooks/useState.tsx",
              "relativePath": "react/hooks/useState.md",
              "category": [
                "react",
                "hooks"
              ],
              "headings": [
                {
                  "level": 1,
                  "text": "useState",
                  "id": "usestate"
                },
                {
                  "level": 1,
                  "text": "语法",
                  "id": "语法"
                },
                {
                  "level": 2,
                  "text": "参数",
                  "id": "参数"
                },
                {
                  "level": 2,
                  "text": "返回值",
                  "id": "返回值"
                },
                {
                  "level": 2,
                  "text": "setState的两种写法【推荐使用函数式更新】",
                  "id": "setstate的两种写法推荐使用函数式更新"
                },
                {
                  "level": 1,
                  "text": "示例代码",
                  "id": "示例代码"
                },
                {
                  "level": 1,
                  "text": "注意事项",
                  "id": "注意事项"
                },
                {
                  "level": 1,
                  "text": "useState 的更新机制",
                  "id": "usestate-的更新机制"
                },
                {
                  "level": 2,
                  "text": "异步机制",
                  "id": "异步机制"
                },
                {
                  "level": 2,
                  "text": "批量更新",
                  "id": "批量更新"
                },
                {
                  "level": 1,
                  "text": "useState 与对象 / 数组状态",
                  "id": "usestate-与对象-数组状态"
                },
                {
                  "level": 2,
                  "text": "数组",
                  "id": "数组"
                },
                {
                  "level": 2,
                  "text": "对象",
                  "id": "对象"
                }
              ],
              "frontMatter": {
                "title": "useState",
                "date": "2020-05-15",
                "draft": false,
                "path": "/blog/react-hook-useState"
              }
            }
          }
        ]
      }
    ]
  },
  {
    "name": "模板",
    "type": "folder",
    "children": [
      {
        "name": "文件",
        "type": "folder",
        "children": [
          {
            "name": "template",
            "path": "模板/文件/template",
            "type": "file",
            "metadata": {
              "title": "模板文件",
              "path": "D:/code/dome/JavaScript/react/react_dome/src/generated/模板/文件/template.tsx",
              "relativePath": "模板/文件/template.md",
              "category": [
                "模板",
                "文件"
              ],
              "headings": [],
              "frontMatter": {
                "title": "模板文件",
                "description": "一句简短的摘要或SEO描述",
                "author": "8023time",
                "avatar": "/images/avatar.png",
                "email": "example@domain.com",
                "date": "2025-11-10 12:00:00",
                "updated": "2025-11-11 09:00:00",
                "cover": "/images/template-cover.webp",
                "banner": "/images/template-banner.webp",
                "pin": false,
                "readingTime": 5,
                "wordCount": 1200
              }
            }
          },
          {
            "name": "test",
            "path": "模板/文件/test",
            "type": "file",
            "metadata": {
              "title": "Markdown 样式映射全面测试",
              "path": "D:/code/dome/JavaScript/react/react_dome/src/generated/模板/文件/test.tsx",
              "relativePath": "模板/文件/test.md",
              "category": [
                "模板",
                "文件"
              ],
              "headings": [
                {
                  "level": 1,
                  "text": "🧩 H1 标题 - 一级标题测试",
                  "id": "h1-标题-一级标题测试"
                },
                {
                  "level": 2,
                  "text": "⚙️ H2 标题 - 二级标题",
                  "id": "h2-标题-二级标题"
                },
                {
                  "level": 3,
                  "text": "🪶 H3 标题",
                  "id": "h3-标题"
                },
                {
                  "level": 2,
                  "text": "📝 段落与文本样式",
                  "id": "段落与文本样式"
                },
                {
                  "level": 2,
                  "text": "🔗 链接测试",
                  "id": "链接测试"
                },
                {
                  "level": 2,
                  "text": "📋 列表测试",
                  "id": "列表测试"
                },
                {
                  "level": 3,
                  "text": "无序列表",
                  "id": "无序列表"
                },
                {
                  "level": 3,
                  "text": "有序列表",
                  "id": "有序列表"
                },
                {
                  "level": 3,
                  "text": "任务列表",
                  "id": "任务列表"
                },
                {
                  "level": 2,
                  "text": "💬 引用测试",
                  "id": "引用测试"
                },
                {
                  "level": 2,
                  "text": "🧮 表格测试",
                  "id": "表格测试"
                },
                {
                  "level": 2,
                  "text": "💻 代码块测试",
                  "id": "代码块测试"
                },
                {
                  "level": 3,
                  "text": "JavaScript",
                  "id": "javascript"
                },
                {
                  "level": 2,
                  "text": "Footnotes",
                  "id": "footnotes"
                }
              ],
              "frontMatter": {
                "title": "Markdown 样式映射全面测试",
                "author": "8023time",
                "date": "2025-11-04T00:00:00.000Z",
                "description": "测试 rehypeTailwindInjector + Tailwind 样式映射在所有 Markdown 元素下的表现。"
              }
            }
          }
        ]
      }
    ]
  },
  {
    "name": "面试",
    "type": "folder",
    "children": [
      {
        "name": "React",
        "type": "folder",
        "children": [
          {
            "name": "受控组件和非受控组件有什么区别",
            "path": "面试/React/受控组件和非受控组件有什么区别",
            "type": "file",
            "metadata": {
              "title": "受控组件和非受控组件有什么区别",
              "path": "D:/code/dome/JavaScript/react/react_dome/src/generated/面试/React/受控组件和非受控组件有什么区别.tsx",
              "relativePath": "面试/React/受控组件和非受控组件有什么区别.md",
              "category": [
                "面试",
                "React"
              ],
              "headings": [
                {
                  "level": 2,
                  "text": "受控组件和非受控组件有什么区别",
                  "id": "受控组件和非受控组件有什么区别"
                },
                {
                  "level": 3,
                  "text": "1. 数据来源与控制权",
                  "id": "1-数据来源与控制权"
                },
                {
                  "level": 3,
                  "text": "2. 数据流与渲染机制",
                  "id": "2-数据流与渲染机制"
                },
                {
                  "level": 3,
                  "text": "3. 适用场景与业务权衡",
                  "id": "3-适用场景与业务权衡"
                },
                {
                  "level": 3,
                  "text": "4. 成本与风险",
                  "id": "4-成本与风险"
                }
              ],
              "frontMatter": {
                "title": "受控组件和非受控组件有什么区别",
                "date": "2025-11-13T23:00:00.000Z"
              }
            }
          }
        ]
      }
    ]
  }
];

export default catalogData;
