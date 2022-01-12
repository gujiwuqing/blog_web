import Layout from '../layout';
import { useEffect, useState } from 'react';
import { GetArticlePage } from '@/service';
import HomeArticle from '@/pages/home/components/home-article';
import styles from './index.module.less'
export default function IndexPage() {
  const [articleList, setArticleList] = useState<any[]>([]);
  useEffect(() => {
    GetArticlePage({}).then((res) => {
      const {
        data: { list },
      } = res;
      setArticleList([...list]);
    });
  }, []);
  return (
    <Layout>
      <div className={styles.container}>
        <HomeArticle list={articleList} />
      </div>
    </Layout>
  );
}
