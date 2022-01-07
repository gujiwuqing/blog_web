import styles from './index.less';
import BaseHeader from '../components/BaseHeader';

export default function IndexPage() {
  return (
    <div>
      <BaseHeader />
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
}
