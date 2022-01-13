import React from 'react';
import BaseHeader from '../../components/BaseHeader';
import BaseFooter from '@/components/BaseFooter';
import BaseBanner from '@/components/BaseBanner';
import SnowBg from '@/components/SnowBg';
import './index.less';

export default function Layout(props: any) {
  const {
    children,
    color = '#837971',
    title = <div className="intro">山海亦有归期的博客</div>,
    ImgUrl = 'http://gujiwuqing-1258770926.cos.ap-shanghai.myqcloud.com/8bb658e4c5aaa124e3f37069c047735c.jpg53873c57-3a01-475c-a0c6-bf5162f7a690',
  } = props;
  return (
    <div>
      <SnowBg color={color} />
      <BaseHeader />
      <BaseBanner title={title} ImgUrl={ImgUrl} />
      <div className="layout">{children}</div>
      <BaseFooter />
    </div>
  );
}
