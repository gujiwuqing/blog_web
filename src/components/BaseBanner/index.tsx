import React, { ReactNode } from 'react';
import './index.less';

interface BaseBannerProps {
  ImgUrl?: string;
  title?: ReactNode;
}

const BaseBanner = ({
  ImgUrl = 'https://res.cloudinary.com/zhullyb/image/upload/v1/2021/10/25/559a0a5f4a462ce4aad7209ec4a2fe04.jpg',
  title = `山海亦有归期的博客`,
}: BaseBannerProps) => {
  return (
    <div
      className="banner"
      style={{
        background: `url(${ImgUrl})  no-repeat`,
        width: '100%',
      }}
    >
      {title}
    </div>
  );
};

export default BaseBanner;
