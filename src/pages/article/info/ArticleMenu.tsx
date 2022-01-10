import React from 'react';
import { Anchor } from 'antd';
// @ts-ignore
import MarkNav from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css';
import './index.less';

const ArtilceMenu = ({ content }: any) => {
  return (
    <div className="nav">
      <Anchor>
        <div className="markNav-title">文章目录</div>
        <MarkNav className="article-menu" source={content} />
      </Anchor>
    </div>
  );
};

export default ArtilceMenu;
