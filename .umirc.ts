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
  // styleLoader: {
  //   esModule: false,
  // },
});
