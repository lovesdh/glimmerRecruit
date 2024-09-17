import {
  defineConfig
} from 'vitepress';
import markdownItKatex from 'markdown-it-katex';





const customElements = [
  'math',
  'maction',
  'maligngroup',
  'malignmark',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mi',
  'mlongdiv',
  'mmultiscripts',
  'mn',
  'mo',
  'mover',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'ms',
  'mscarries',
  'mscarry',
  'mscarries',
  'msgroup',
  'mstack',
  'mlongdiv',
  'msline',
  'mstack',
  'mspace',
  'msqrt',
  'msrow',
  'mstack',
  'mstack',
  'mstyle',
  'msub',
  'msup',
  'msubsup',
  'mtable',
  'mtd',
  'mtext',
  'mtr',
  'munder',
  'munderover',
  'semantics',
  'math',
  'mi',
  'mn',
  'mo',
  'ms',
  'mspace',
  'mtext',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'msqrt',
  'mstyle',
  'mmultiscripts',
  'mover',
  'mprescripts',
  'msub',
  'msubsup',
  'msup',
  'munder',
  'munderover',
  'none',
  'maligngroup',
  'malignmark',
  'mtable',
  'mtd',
  'mtr',
  'mlongdiv',
  'mscarries',
  'mscarry',
  'msgroup',
  'msline',
  'msrow',
  'mstack',
  'maction',
  'semantics',
  'annotation',
  'annotation-xml',
  'mjx-container',
  'mjx-assistive-mml',
];


// https://vitepress.dev/reference/site-config
export default defineConfig({

  markdown: {
    config: (md) => {
      md.use(markdownItKatex)
    }
  },
  // 由于vitepress编译生成静态html文件时，无法识别插件生成的特殊标签，故需在编译时进行处理，将特殊标签定位自定义标签，防止编译报错
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => customElements.includes(tag)
      }
    }
  },

  head: [
    ['link', {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css',
      crossorigin: ''
    }],
    [
      'link',
      {
        rel: 'icon',
        href: '/image/favicon.png'
      },
    ],
  ],
  
  lang: 'zh-CN',
  title: '2024招新',
  build: {
    rollupOptions: {
      external: ['axios'],
    },
  },

  themeConfig: {
    siteTitle: '微光工作室',
    logo: '/image/favicon.png',
    // https://vitepress.dev/reference/default-theme-config

    //导航栏
    nav: [{
        text: '招新说明',
        link: '/md/招新说明.md',
      },
      {
        text: '日常基础',
        activeMatch: '/md/日常基础/',
        items: [{
            text: '日常-01：什么是计算机？',
            link: '/md/日常基础/日常-01：什么是计算机？.md'
          },
          {
            text: '日常-02：markdown',
            link: '/md/日常基础/日常-02：markdown.md'
          },
          {
            text: '日常-03：数据的表示',
            link: '/md/日常基础/日常-03：数据的表示.md'
          },
          {
            text: '日常-04：IDE编程前的准备',
            link: '/md/日常基础/日常-04：IDE编程前的准备.md'
          },
          {
            text: '日常-05：了解linux',
            link: '/md/日常基础/日常-05：了解linux.md'
          },
          {
            text: '日常-06：代码管理',
            link: '/md/日常基础/日常-06：代码管理.md'
          },
          {
            text: '日常-07：loafer想打派(网络)',
            link: '/md/日常基础/日常-07：loafer想打派(网络).md'
          },
        ]
      },
      {
        text: '计算机系统',
        items: [{
            text: '计算机系统简介',
            link: '/md/计算机系统/',
          },
          {
            text: '计算机系统基础',
            items: [{
                text: 'CS-EASY-01 Hello world!',
                link: '/md/计算机系统/CS-EASY-01 Hello world!.md'
              },
              {
                text: 'CS-EASY-02 基础数据结构',
                link: '/md/计算机系统/CS-EASY-02 基础数据结构.md'
              },
              {
                text: 'CS-EASY-03 内存模型',
                link: '/md/计算机系统/CS-EASY-03 内存模型.md'
              },
            ]
          },
          {
            text: '计算机系统进阶',
            items: [{
              text: 'CS-MEDIUM-01 大数运算',
              link: '/md/计算机系统/CS-MEDIUM-01 大数运算.md'
            },
            {
              text: 'CS-MEDIUM-02 定点数精确运算',
              link: '/md/计算机系统/CS-MEDIUM-02 定点数精确运算.md'
            },
          ]
          },
        ]
      },
      {
        text: '前端',
        items: [{
            text: '前端简介',
            link: '/md/前端/',
          },
          {
            text: 'T1-寻找微光娘-网页html元素修改',
            link: '/md/前端/T1-寻找微光娘-网页html元素修改.md'
          },
          {
            text: 'T2-搜集微光娘足迹-网站在你电脑里存了什么呢',
            link: '/md/前端/T2-搜集微光娘足迹-网站在你电脑里存了什么呢.md'
          },
          {
            text: 'T3-开辟找到微光娘的道路-CSS',
            link: '/md/前端/T3-开辟找到微光娘的道路-CSS.md'
          },
          {
            text: 'T4-通往微光娘的最后一扇门——JavaScript',
            link: '/md/前端/T4-通往微光娘的最后一扇门——JavaScript.md'
          },
          {
            text: 'T5-总算见到你了，微光娘——制作blog',
            link: '/md/前端/T5-总算见到你了，微光娘——制作blog.md'
          },
        ]
      },
      {
        text: '后端',
        items: [{
            text: '后端简介',
            link: '/md/后端/',
          },
          {
            text: 'JAVA',
            items: [{
                text: 'Java01-环境搭建',
                link: '/md/后端/Java01-环境搭建.md'
              },
              {
                text: 'Java02-程序基本结构',
                link: '/md/后端/Java02-程序基本结构.md'
              },
              {
                text: 'Java03-数据类型与运算-数据类型与运算',
                link: '/md/后端/Java03-数据类型与运算.md'
              },
              {
                text: 'Java04-流程控制',
                link: '/md/后端/Java04-流程控制.md'
              },
              {
                text: 'Java05-面向对象',
                link: '/md/后端/Java05-面向对象.md'
              },
              {
                text: 'Java06-面向对象进阶',
                link: '/md/后端/Java06-面向对象进阶.md'
              },
              {
                text: 'Java07-异常处理',
                link: '/md/后端/Java07-异常处理.md'
              },
            ]
          },
        ]
      },
      {
        text: '机器学习',
        items: [{
            text: '机器学习简介',
            link: '/md/机器学习/',
          },
          {
            text: '机器学习方向-0：基础题',
            link: '/md/机器学习/0.基础题.md'
          },
          {
            text: '机器学习方向-01：基础知识',
            link: '/md/机器学习/1.基础知识.md'
          },
          {
            text: '机器学习方向-02：线性回归——梯度下降法的实践',
            link: '/md/机器学习/2.线性回归——梯度下降法的实践'
          },
          {
            text: '机器学习方向-03：自动微分的计算图实现',
            link: '/md/机器学习/3.自动微分的计算图实现'
          },
          {
            text: '机器学习方向-04：多层感知机(MLP)实践',
            link: '/md/机器学习/4.多层感知机(MLP)实践'
          }
        ]
      },
    ],

    //侧边栏
    sidebar: {
      '/md/日常基础/': [{
        text: '日常基础',
        items: [{
            text: '日常-01：什么是计算机？',
            link: '/md/日常基础/日常-01：什么是计算机？.md'
          },
          {
            text: '日常-02：markdown',
            link: '/md/日常基础/日常-02：markdown.md'
          },
          {
            text: '日常-03：数据的表示',
            link: '/md/日常基础/日常-03：数据的表示.md'
          },
          {
            text: '日常-04：IDE编程前的准备',
            link: '/md/日常基础/日常-04：IDE编程前的准备.md'
          },
          {
            text: '日常-05：了解linux',
            link: '/md/日常基础/日常-05：了解linux.md'
          },
          {
            text: '日常-06：代码管理',
            link: '/md/日常基础/日常-06：代码管理.md'
          },
          {
            text: '日常-07：loafer想打派(网络)',
            link: '/md/日常基础/日常-07：loafer想打派(网络)'
          },
        ]
      }],

      '/md/计算机系统/': [{
        text: '计算机系统',
        items: [{
            text: '计算机系统简介',
            link: '/md/计算机系统/',
          },
          {
            text: '计算机系统基础',
            items: [{
                text: 'CS-EASY-01 Hello world!',
                link: '/md/计算机系统/CS-EASY-01 Hello world!.md'
              },
              {
                text: 'CS-EASY-02 基础数据结构',
                link: '/md/计算机系统/CS-EASY-02 基础数据结构.md'
              },
              {
                text: 'CS-EASY-03 内存模型',
                link: '/md/计算机系统/CS-EASY-03 内存模型.md'
              },
            ]
          },
          {
            text: '计算机系统进阶',
            items: [
              {
                text: 'CS-MEDIUM-01 大数运算',
                link: '/md/计算机系统/CS-MEDIUM-01 大数运算.md'
              },
              {
                text: 'CS-MEDIUM-02 定点数精确运算',
                link: '/md/计算机系统/CS-MEDIUM-02 定点数精确运算.md'
              },
            ]
          },
        ]
      }],

      '/md/前端/': [{
        text: '前端',
        link: '/md/前端/',
        items: [{
            text: 'T1-寻找微光娘-网页html元素修改',
            link: '/md/前端/T1-寻找微光娘-网页html元素修改.md'
          },
          {
            text: 'T2-搜集微光娘足迹-网站在你电脑里存了什么呢',
            link: '/md/前端/T2-搜集微光娘足迹-网站在你电脑里存了什么呢.md'
          },
          {
            text: 'T3-开辟找到微光娘的道路-CSS',
            link: '/md/前端/T3-开辟找到微光娘的道路-CSS.md'
          },
          {
            text: 'T4-通往微光娘的最后一扇门——JavaScript',
            link: '/md/前端/T4-通往微光娘的最后一扇门——JavaScript.md'
          },
          {
            text: 'T5-总算见到你了，微光娘——制作blog',
            link: '/md/前端/T5-总算见到你了，微光娘——制作blog.md'
          }
        ]
      }],

      '/md/后端/': [{
        text: '后端',

        items: [{
            text: '后端简介',
            link: '/md/后端/',
          },
          {
            text: 'JAVA',
            items: [{
                text: 'Java01-环境搭建',
                link: '/md/后端/Java01-环境搭建.md'
              },
              {
                text: 'Java02-程序基本结构',
                link: '/md/后端/Java02-程序基本结构.md'
              },
              {
                text: 'Java03-数据类型与运算-数据类型与运算',
                link: '/md/后端/Java03-数据类型与运算.md'
              },
              {
                text: 'Java04-流程控制',
                link: '/md/后端/Java04-流程控制.md'
              },
              {
                text: 'Java05-面向对象',
                link: '/md/后端/Java05-面向对象.md'
              },
              {
                text: 'Java06-面向对象进阶',
                link: '/md/后端/Java06-面向对象进阶.md'
              },
              {
                text: 'Java07-异常处理',
                link: '/md/后端/Java07-异常处理.md'
              },
            ]
          },
        ]
      }],

      '/md/机器学习/': [{
        text: '机器学习',
        link: '/md/机器学习/',
        items: [{
            text: '机器学习方向：简介',
            link: '/md/机器学习/index.md'
          },{
            text: '机器学习方向-00：基础题',
            link: '/md/机器学习/0.基础题.md'
          },
          {
            text: '机器学习方向-01：基础知识',
            link: '/md/机器学习/1.基础知识.md'
          },
          {
            text: '机器学习方向-02：线性回归——梯度下降法的实践',
            link: '/md/机器学习/2.线性回归——梯度下降法的实践'
          },
          {
            text: '机器学习方向-03：自动微分的计算图实现',
            link: '/md/机器学习/3.自动微分的计算图实现'
          },
          {
            text: '机器学习方向-04：多层感知机(MLP)实践',
            link: '/md/机器学习/4.多层感知机(MLP)实践'
          }
        ]
      }],
    },
    //标记
    socialLinks:[
      { icon:'slack',link:'https://www.4399.com/' },
    ]

  },
}, )
