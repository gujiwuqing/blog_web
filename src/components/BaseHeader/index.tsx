import { Menu } from 'antd';
import {
  AppstoreOutlined,
  ContainerOutlined,
  HomeOutlined,
  LinkOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { useState } from 'react';
import styles from './index.module.less';
import { history } from 'umi';
import './index.less';

const BaseHeader = () => {
  const [current, setCurrent] = useState('mail');
  const handleClick = (e: any) => {
    setCurrent(e.key);
    history.push(e.key);
  };
  const RenderMenu = () => (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" className="menu">
      <Menu.Item key="/" icon={<HomeOutlined />}>
        首页
      </Menu.Item>
      <Menu.Item key="/category" icon={<AppstoreOutlined />}>
        分类
      </Menu.Item>
      <Menu.Item key="/archive" icon={<ContainerOutlined />}>
        归档
      </Menu.Item>
      <Menu.Item key="/link" icon={<LinkOutlined />}>
        友联
      </Menu.Item>
      <Menu.Item key="/about" icon={<UserOutlined />}>
        关于我
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="header">
      <div
        className={styles['menu-title']}
        onClick={() => {
          history.push('/');
        }}
      >
        山海亦有归期
      </div>
      {RenderMenu()}
    </div>
  );
};

export default BaseHeader;
