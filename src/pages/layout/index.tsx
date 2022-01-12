import React from 'react';
import BaseHeader from '../../components/BaseHeader';
import BaseFooter from '@/components/BaseFooter';
import BaseBanner from '@/components/BaseBanner';
import SnowBg from '@/components/SnowBg';
import './index.less';

export default function Layout(props: any) {
  const { children, title = <div className="intro">剑谱第一页, 心中无女人, 拔剑自然神</div> } =
    props;
  return (
    <div>
      <SnowBg />
      <BaseHeader />
      <BaseBanner title={title} />
      <div className="layout">{children}</div>
      <BaseFooter />
    </div>
  );
}
