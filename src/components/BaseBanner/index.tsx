import React, {ReactNode} from 'react';

interface BaseBannerProps {
  ImgUrl: string;
  title: ReactNode;
}

const BaseBanner = ({ImgUrl, title}: BaseBannerProps) => {
  return <div>
    <img src={ImgUrl} alt=""/>
    {title}
  </div>;
};

export default BaseBanner;
