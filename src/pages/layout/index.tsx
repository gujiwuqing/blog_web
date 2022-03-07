import React from 'react';
import BaseHeader from '../../components/BaseHeader';
import BaseFooter from '@/components/BaseFooter';
import BaseBanner from '@/components/BaseBanner';
import './index.less';
import { BackTop } from 'antd';

export default function Layout(props: any) {
  const {
    children,
    title = <div className="intro">山海亦有归期的博客</div>,
    ImgUrl = 'https://img.gujiwuqing.top/read.jpg',
  } = props;
  return (
    <div>
      <BaseHeader />
      <BaseBanner title={title} ImgUrl={ImgUrl} />
      <div className="layout">{children}</div>
      <BaseFooter />
      <BackTop />
    </div>
  );
}
