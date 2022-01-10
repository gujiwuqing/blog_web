import React, { useEffect, useState } from 'react';
import { GetArticleInfo } from '../../../service';
import Layout from '@/pages/layout';
import './index.less';
import MdEditor from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';
import { useParams } from 'umi';
import ArtilceMenu from './ArticleMenu';
import { ArticleItem } from '@/interface/global';
import { getTime } from '@/utils/global';

export default function ArticleInfo() {
  const [markdown, setMarkdown] = useState('');
  const [info, setInfo] = useState<ArticleItem>({
    id: '',
    title: '',
    cover: '',
    createdAt: '',
    tags: [],
  });
  const { id }: { id: string } = useParams();
  useEffect(() => {
    getArticleInfo();
  }, []);

  const getArticleInfo = async () => {
    const { data } = await GetArticleInfo(id);
    setInfo({ ...data });
    setMarkdown(data.content);
  };
  useEffect(() => {
    document.getElementsByClassName('header')[0].className = 'header bg';
    document.getElementsByClassName('nav')[0].className = 'article-nav  nav';
    window.onscroll = function () {
      const { scrollTop } = document.documentElement;
      if (scrollTop > 30) {
        document.getElementsByClassName('header')[0].className = 'fixed-header header';
        document.getElementsByClassName('nav')[0].className = 'positon-nav nav';
        // setFlag(true);
      } else {
        document.getElementsByClassName('header')[0].className = 'header bg';
        document.getElementsByClassName('nav')[0].className = 'article-nav  nav';
        // setFlag(false);
      }
    };
  });
  return (
    <Layout>
      {/* <div className="article-header" style={{ background: `url(${logoSrc})` }}> */}
      <div className="article-header bg">
        <div className="article-header-title">{info.title}</div>
        <div className="article-header-date">{getTime(info?.createdAt as string)}</div>
      </div>
      <div className="article-info">
        <ArtilceMenu content={markdown} />
        <MdEditor
          style={{ minHeight: '500px', padding: '0 24px' }}
          modelValue={markdown}
          previewOnly
        />
        <div style={{ width: 300 }} />
      </div>
    </Layout>
  );
}
