import Layout from '../layout';
import HomeNav from './components/home-nav';
import styles from './index.module.less';
import { Row, Col } from 'antd';
import ArticleCard from '@/components/ArticleCard';
import { useEffect, useState } from 'react';
import { GetArticlePage } from '@/service';

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
      <div className={styles.content}>
        <HomeNav />
        <div className={styles.container}>
          <Row gutter={24}>
            {articleList.map((item) => {
              return (
                <Col span={4} key={item.id}>
                  {' '}
                  <ArticleCard {...item} key={item.id} />
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </Layout>
  );
}
