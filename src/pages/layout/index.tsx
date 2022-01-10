import React, { useEffect } from 'react';
import BaseHeader from '../../components/BaseHeader';
import BaseFooter from '@/components/BaseFooter';
import './index.less';

export default function Layout({ children }: any) {
  const { scrollTop } = document.documentElement;
  useEffect(() => {
    window.onscroll = function () {
      if (scrollTop > 30) {
        document.getElementsByClassName('header')[0].className = 'fixed-header header';
        // setFlag(true);
      } else {
        document.getElementsByClassName('header')[0].className = 'header';
        // setFlag(false);
      }
    };
  }, [scrollTop]);
  return (
    <div>
      <BaseHeader />
      <div className="layout">{children}</div>
      <BaseFooter />
    </div>
  );
}
