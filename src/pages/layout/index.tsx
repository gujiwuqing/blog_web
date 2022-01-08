import React from 'react';
import BaseHeader from '../../components/BaseHeader';
import './index.less';

export default function Layout({ children }: any) {
  return (
    <div>
      <BaseHeader />
      <div style={{ padding: 24 }}>{children}</div>
    </div>
  );
}
