import React, { ReactNode } from 'react';
import './index.less';

interface BaseBannerProps {
  ImgUrl?: string;
  title?: ReactNode;
}

const BaseBanner = ({
  ImgUrl = 'https://res.cloudinary.com/zhullyb/image/upload/v1/2021/10/25/559a0a5f4a462ce4aad7209ec4a2fe04.jpg',
  title = `剑谱第一页,心中无女人,拔剑自然神`,
}: BaseBannerProps) => {
  return (
    <div className="banner" style={{ background: `url(${ImgUrl}) 50% 100% no-repeat` }}>
      {title}
    </div>
  );
};

export default BaseBanner;
