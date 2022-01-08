import Layout from '../layout';
import HomeNav from "./components/home-nav";
import styles from "./index.module.less";

export default function IndexPage() {
  return (
    <Layout>
      <div className={styles.content}>
        <HomeNav/>
        <h1>Page index</h1>
      </div>
    </Layout>
  );
}
