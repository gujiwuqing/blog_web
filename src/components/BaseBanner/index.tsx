import React, { ReactNode } from 'react';
import './index.less';

interface BaseBannerProps {
  ImgUrl?: string;
  title?: ReactNode;
}

const BaseBanner = ({
  ImgUrl = 'http://gujiwuqing-1258770926.cos.ap-shanghai.myqcloud.com/8bb658e4c5aaa124e3f37069c047735c.jpg53873c57-3a01-475c-a0c6-bf5162f7a690',
  title = `山海亦有归期的博客`,
}: BaseBannerProps) => {
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${ImgUrl})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
      }}
    >
      {title}
    </div>
  );
};

export default BaseBanner;
