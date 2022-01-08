import React from 'react';
import styles from '../../index.module.less';
import Icon from '@/components/Icon';

const HomeNav = () => {
  return (
    <div className={styles['nav-container']}>
      <div className={styles.nav}>
        <div className={`${styles['nav-item']} ${styles.active}`}>
          <Icon type="iconzuixin" />
          <span>最新</span>
        </div>
        <div className={styles['nav-item']}>
          <Icon type="iconjhot" />
          <span>最热</span>
        </div>
      </div>
    </div>
  );
};

export default HomeNav;
