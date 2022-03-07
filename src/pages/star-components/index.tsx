import React from "react";
import MdEditor from "md-editor-rt";
import Layout from '@/pages/layout';


const StarComponents = ()=>{
  const markdown=`| 类型           | 推荐组件                                                     |
| :------------- | :----------------------------------------------------------- |
| 可视化图表     | [Ant Design Charts](https://charts.ant.design/zh-CN/) [AntV 数据可视化解决方案](https://antv.vision/zh) |
| React Hooks 库 | [ahooks](https://github.com/alibaba/hooks)                   |
| 表单           | [ProForm](https://procomponents.ant.design/components/form) [Formily](https://github.com/alibaba/formily) [react-hook-form](https://github.com/react-hook-form/react-hook-form) [formik](https://github.com/formium/formik) |
| 路由           | [react-router](https://github.com/ReactTraining/react-router) |
| 布局           | [react-grid-layout](https://github.com/react-grid-layout/react-grid-layout) [react-grid-system](https://github.com/sealninja/react-grid-system) [rc-dock](https://github.com/ticlo/rc-dock) |
| 拖拽           | [dnd-kit](https://github.com/clauderic/dnd-kit) [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd/) [react-dnd](https://github.com/gaearon/react-dnd) [react-sortable-hoc](https://github.com/clauderic/react-sortable-hoc) |
| 代码编辑器     | [react-codemirror2](https://github.com/scniro/react-codemirror2) [react-monaco-editor](https://github.com/superRaytin/react-monaco-editor) |
| 富文本编辑器   | [react-quill](https://github.com/zenoamaro/react-quill) [braft-editor](https://github.com/margox/braft-editor) |
| JSON 显示器    | [react-json-view](https://github.com/mac-s-g/react-json-view) |
| 拾色器         | [react-color](http://casesandberg.github.io/react-color/)    |
| 响应式         | [react-responsive](https://github.com/contra/react-responsive) [react-media](https://github.com/ReactTraining/react-media) |
| 复制到剪贴板   | [react-copy-to-clipboard](https://github.com/nkbt/react-copy-to-clipboard) |
| 页面 meta 属性 | [react-helmet](https://github.com/nfl/react-helmet) [react-helmet-async](https://github.com/staylor/react-helmet-async) |
| 图标           | [react-fontawesome](https://github.com/FortAwesome/react-fontawesome) [react-icons](https://github.com/gorangajic/react-icons) |
| 二维码         | [qrcode.react](https://github.com/zpao/qrcode.react)         |
| 顶部进度条     | [nprogress](https://github.com/rstacruz/nprogress)           |
| 应用国际化     | [FormatJS](https://github.com/formatjs/formatjs) [react-i18next](https://react.i18next.com/) |
| 代码高亮       | [react-syntax-highlighter](https://github.com/conorhastings/react-syntax-highlighter) |
| Markdown 渲染  | [react-markdown](https://remarkjs.github.io/react-markdown/) |
| 无限滚动       | [rc-virtual-list](https://github.com/react-component/virtual-list/) [react-infinite-scroll-component](https://github.com/ankeetmaini/react-infinite-scroll-component) |
| 地图           | [react-google-maps](https://github.com/tomchentw/react-google-maps) [google-map-react](https://github.com/istarkov/google-map-react) [react-amap 高德](https://github.com/ElemeFE/react-amap) |
| 视频播放       | [react-player](https://github.com/CookPete/react-player) [video-react](https://github.com/video-react/video-react) [video.js](http://docs.videojs.com/tutorial-react.html) |
| 右键菜单       | [react-contextmenu](https://github.com/vkbansal/react-contextmenu/) [react-contexify](https://github.com/fkhadra/react-contexify) |
| Emoji          | [emoji-mart](https://github.com/missive/emoji-mart)          |
| 分割面板       | [react-split-pane](https://github.com/tomkp/react-split-pane) |
| 图片裁切       | [antd-img-crop](https://github.com/nanxiaobei/antd-img-crop) [react-image-crop](https://github.com/DominicTobias/react-image-crop) |
| 趋势线         | [react-sparklines](https://github.com/borisyankov/react-sparklines) |
| 关键字高亮     | [react-highlight-words](https://github.com/bvaughn/react-highlight-words) |
| 文字轮播       | [react-text-loop-next](https://github.com/samarmohan/react-text-loop-next) [react-fast-marquee](https://github.com/justin-chu/react-fast-marquee) |
| 动画           | [react-move](https://github.com/react-tools/react-move) [Ant Motion](https://motion.ant.design/components/tween-one) [react-spring](https://www.react-spring.io/) |
| 页脚           | [rc-footer](https://github.com/react-component/footer)       |
| 水印           | [WaterMark](https://procomponents.ant.design/components/water-mark) |

## 推荐产品 ✨[#](https://ant.design/docs/react/recommendation-cn#推荐产品-✨)

还有一些常用的前端/设计/产品相关的工具推荐给大家使用。

| 类型         | 推荐产品                                                     |
| :----------- | :----------------------------------------------------------- |
| 文档管理     | [🐦 语雀](https://www.yuque.com/?chInfo=ch_antd)              |
| 图标         | [阿里巴巴矢量图标库](https://www.iconfont.cn/)               |
| Sketch 插件  | [Kitchen](https://kitchen.alipay.com/)                       |
| 在线代码编辑 | [codesandbox](https://codesandbox.io/) [codepen](https://codepen.io/) [stackblitz](https://stackblitz.com/) |
| 图片压缩     | [tinypng](https://tinypng.com/)                              |
| 图表分类查询 | [图之典](http://tuzhidian.com/)                              |`
  return (
    <Layout
      color="#c79b6b"
      title={<div className="intro">归档</div>}
      ImgUrl="https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g6/M00/0B/06/ChMkKmFuI7yIYoMgAFY3_5PxvGIAAUuPgLMBTsAVjgX890.jpg"
    >
    <MdEditor
      style={{ minHeight: '500px', padding: '0 24px', borderRadius: ' 24px' }}
      modelValue={markdown}
      previewOnly
    />
    </Layout>
  )
}

export default StarComponents;
