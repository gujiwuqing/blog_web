import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  title: '山海亦有归期',
  routes: [
    { path: '/', component: '@/pages/home' },
    { path: '/article/:id', component: '@/pages/article/info' },
    { path: '/link', component: '@/pages/link' },
    { path: '/category', component: '@/pages/category' },
    { path: '/category/:id', component: '@/pages/category/list' },
    { path: '/archive', component: '@/pages/archive' },
    { path: '/comment', component: '@/pages/comment' },
    { path: '/about', component: '@/pages/about' },
  ],
  fastRefresh: {},
  ssr: {},
  exportStatic: {},
  // 配置 external
  externals: {
    react: 'window.React',
    'react-dom': 'window.ReactDOM',
  },

  // 引入被 external 库的 scripts
  // 区分 development 和 production，使用不同的产物
  scripts:
    process.env.NODE_ENV === 'development'
      ? [
          'https://unpkg.com/react@17/umd/react.development.js',
          'https://unpkg.com/react-dom@17/umd/react-dom.development.js',
        ]
      : [
          'https://unpkg.com/react@17/umd/react.production.min.js',
          'https://unpkg.com/react-dom@17/umd/react-dom.production.min.js',
        ],
  // styleLoader: {
  //   esModule: false,
  // },
});
