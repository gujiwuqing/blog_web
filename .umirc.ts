import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/home' },
    { path: '/article', component: '@/pages/article/info' },
  ],
  fastRefresh: {},
  mfsu: {},
});
