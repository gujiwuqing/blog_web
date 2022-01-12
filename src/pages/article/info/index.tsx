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
  // const { scrollTop } = document.documentElement;
  // useEffect(() => {
  //   document.getElementsByClassName('nav')[0].className = 'article-nav  nav';
  //   window.onscroll = function () {
  //     if (scrollTop > 360) {
  //       document.getElementsByClassName('nav')[0].className = 'positon-nav nav';
  //     } else {
  //       document.getElementsByClassName('nav')[0].className = 'article-nav  nav';
  //     }
  //   };
  // }, [scrollTop]);
  return (
    <Layout
      title={
        <>
          <div className="intro">
            <div> {info.title}</div>
            <div style={{ fontSize: 14, textAlign: 'center' }}>
              {getTime(info?.createdAt as string)}
            </div>
          </div>
        </>
      }
    >
      <div className="article-info">
        <ArtilceMenu content={markdown} />
        <MdEditor
          style={{ minHeight: '500px', padding: '0 24px', borderRadius: ' 24px' }}
          modelValue={markdown}
          previewOnly
        />
        <div style={{ width: 300 }} />
      </div>
    </Layout>
  );
}
