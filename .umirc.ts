import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/home' },
    { path: '/article/:id', component: '@/pages/article/info' },
    { path: '/link', component: '@/pages/link' },
    { path: '/about', component: '@/pages/about' },
  ],
  fastRefresh: {},
  mfsu: {},
});
