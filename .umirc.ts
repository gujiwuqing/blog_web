import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/home' },
    { path: '/article/:id', component: '@/pages/article/info' },
    { path: '/link', component: '@/pages/link' },
    { path: '/tag', component: '@/pages/tag' },
    { path: '/archive', component: '@/pages/archive' },
    { path: '/about', component: '@/pages/about' },
  ],
  fastRefresh: {},
  mfsu: {},
});
