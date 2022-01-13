import React from 'react';
import BaseHeader from '../../components/BaseHeader';
import BaseFooter from '@/components/BaseFooter';
import BaseBanner from '@/components/BaseBanner';
import SnowBg from '@/components/SnowBg';
import './index.less';

export default function Layout(props: any) {
  const {
    children,
    color = '#dad0d6',
    title = <div className="intro">山海亦有归期的博客</div>,
    ImgUrl = 'https://res.cloudinary.com/zhullyb/image/upload/v1/2021/10/25/559a0a5f4a462ce4aad7209ec4a2fe04.jpg',
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
