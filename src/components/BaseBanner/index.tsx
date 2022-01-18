import React, { ReactNode } from 'react';
import './index.less';

interface BaseBannerProps {
  ImgUrl?: string;
  title?: ReactNode;
}

const BaseBanner = ({
  ImgUrl = 'http://img.gujiwuqing.top/read.jpg',
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
