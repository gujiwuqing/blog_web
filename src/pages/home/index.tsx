import Layout from '../layout';
import { GetArticlePage } from '@/service';
import HomeArticle from '@/components/home-article';
import styles from './index.module.less';
import { IGetInitialProps } from 'umi';

const Home = (props: any) => {
  return (
    <Layout>
      <div className={styles.container}>
        <HomeArticle list={props.list} />
      </div>
    </Layout>
  );
};
Home.getInitialProps = (async () => {
  const {
    data: { list },
  } = await GetArticlePage({});
  return Promise.resolve({
    list,
  });
}) as IGetInitialProps;

export default Home;
