import { DislikeOutlined, LikeOutlined, ReadOutlined } from '@ant-design/icons';
import ProCard from '@ant-design/pro-card';
import { Tag } from 'antd';
import dayjs from 'dayjs';
import React from 'react';
import { useHistory } from 'umi';
import styles from './index.module.less';

interface ArticleCardPros {
  id: string;
  title: string;
  cover?: string;
  createdAt?: string;
  tags?: any[];
}

const ArticleCard = ({
  id,
  title,
  cover = 'https://t7.baidu.com/it/u=1956604245,3662848045&fm=193&f=GIF',
  createdAt,
  tags = [],
}: ArticleCardPros) => {
  const history = useHistory();
  return (
    <ProCard
      // title={title}
      className={styles.card}
      actions={[
        <ReadOutlined key="setting" />,
        <LikeOutlined key="ellipsis" />,
        <DislikeOutlined key="edit" />,
      ]}
      onClick={() => {
        history.push(`/article/${id}`);
      }}
    >
      <img src={cover} alt="" className={styles.img} />
      <div>
        <h3>{title}</h3>
        <div>{dayjs(createdAt).format('YYYY-MM-DD HH:mm')}</div>
        <div>
          {tags.map((item) => {
            return <Tag>{item.name}</Tag>;
          })}
        </div>
      </div>
    </ProCard>
  );
};

export default ArticleCard;
