import React from 'react';
import BaseHeader from '../../components/BaseHeader';
import BaseFooter from '@/components/BaseFooter';
import BaseBanner from '@/components/BaseBanner';
import SnowBg from '@/components/SnowBg';
import './index.less';
import { BackTop } from 'antd';

export default function Layout(props: any) {
  const {
    children,
    color = '#837971',
    title = <div className="intro">山海亦有归期的博客</div>,
    ImgUrl = 'https://img.gujiwuqing.top/read.jpg',
  } = props;
  return (
    <div>
      <SnowBg color={color} />
      <BaseHeader />
      <BaseBanner title={title} ImgUrl={ImgUrl} />
      <div className="layout">{children}</div>
      <BaseFooter />
      <BackTop />
    </div>
  );
}
