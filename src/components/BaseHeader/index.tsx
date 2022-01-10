import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined } from '@ant-design/icons';
import { useState } from 'react';
import styles from './index.module.less';
import {useHistory} from 'umi'

const BaseHeader = () => {
  const history  = useHistory()
  const [current, setCurrent] = useState('mail');
  const handleClick = (e:any) => {
    setCurrent(e.key);
    history.push(e.key)
  };
  const RenderMenu = () => (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="/" icon={<MailOutlined />}>
        首页
      </Menu.Item>
      <Menu.Item key="tag" icon={<AppstoreOutlined />}>
        标签
      </Menu.Item>
      <Menu.Item key="pigeonhole" icon={<AppstoreOutlined />}>
        归档
      </Menu.Item>
      <Menu.Item key="link" icon={<AppstoreOutlined />}>
        友联
      </Menu.Item>
      <Menu.Item key="about" icon={<AppstoreOutlined />}>
        关于我
      </Menu.Item>
    </Menu>
  );
  return (
    <div className={styles.menu}>
      <div className={styles['menu-title']}>孤寂无情</div>
      {RenderMenu()}
    </div>
  );
};

export default BaseHeader;
