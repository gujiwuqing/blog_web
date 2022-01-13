import Catalog from '@/components/Catalog';
import { ArticleItem } from '@/interface/global';
import Layout from '@/pages/layout';
import { getTime } from '@/utils/global';
import { Affix } from 'antd';
import MdEditor from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';
import React, { useEffect, useState } from 'react';
import { useParams } from 'umi';
import { GetArticleInfo } from '../../../service';
import './index.less';

export default function ArticleInfo() {
  const [markdown, setMarkdown] = useState('');
  const [list, setList] = useState<any[]>([]);
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
        <MdEditor
          style={{ minHeight: '500px', padding: '0 24px', borderRadius: ' 24px' }}
          modelValue={markdown}
          previewOnly
          onGetCatalog={(arr) => {
            setList(arr);
          }}
        />
        <div className="catalog">
          <Affix offsetTop={70}>
            <Catalog heads={list} />
          </Affix>
        </div>
      </div>
    </Layout>
  );
}
