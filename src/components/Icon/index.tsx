import { createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1688507_puyl242ton.js',
});

const Icon = ({ type, size = 32 }: { type: string; size?: number }) => {
  return <IconFont type={type} style={{ fontSize: `${size}px` }} />;
};

export default Icon;
