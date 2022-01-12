import React, { useEffect, useState } from 'react';
import ArticleList from '@/components/ArticleList';
import { useParams } from 'umi';
import Layout from '@/pages/layout';
import { Card } from 'antd';
import { GetArticleListById } from '@/service';
import { ArticleItem } from '@/interface/global';
import styles from '@/pages/archive/index.module.less';

const TagList = () => {
  const { id }: any = useParams();
  const [list, setList] = useState<ArticleItem[]>([]);
  const [title, setTitle] = useState('');
  useEffect(() => {
    GetArticleListById(id).then((res) => {
      const {
        data: { articles, name },
      } = res;
      setList([...articles]);
      setTitle(name);
    });
  }, [id]);
  console.log(id);
  return (
    <Layout title={<div className="intro">{title}</div>}>
      <Card>
        <div className={styles['archive-count']}>共计 {list.length | 0}篇文章</div>
        {list.length > 0 ? (
          <ArticleList data={list} />
        ) : (
          <div style={{ textAlign: 'center', fontSize: 18 }}>很抱歉，该分类下暂无文章</div>
        )}
      </Card>
    </Layout>
  );
};

export default TagList;
