import React from 'react';
import BaseHeader from '../../components/BaseHeader';

export default function Layout({ children }: any) {
  return (
    <div>
      <BaseHeader />
      <div>{children}</div>
    </div>
  );
}
