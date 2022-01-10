import { List, Space } from 'antd';
import { LikeOutlined, ReadOutlined, StarOutlined } from '@ant-design/icons';
import React from 'react';
import { history } from 'umi';
import './index.less';

const IconText = ({ icon, text }: { icon: any; text: string }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

interface ArticleItem {
  id: string;
  title: string;
  summary: string;
  loveCount: string;
  readCount: string;
}

interface HomeArticleProps {
  list: ArticleItem[];
}

const HomeArticle = ({ list }: HomeArticleProps) => {
  return (
    <List
      itemLayout="vertical"
      size="large"
      className="article-container"
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 6,
      }}
      dataSource={list}
      renderItem={(item) => (
        <List.Item
          className="article-item"
          key={item.id}
          onClick={() => {
            history.push(`article/${item.id}`);
          }}
          actions={[
            <IconText icon={StarOutlined} text={item.loveCount} key="list-vertical-star-o" />,
            <IconText icon={LikeOutlined} text={item.loveCount} key="list-vertical-like-o" />,
            <IconText icon={ReadOutlined} text={item.readCount} key="list-vertical-message" />,
          ]}
          extra={
            <img
              width={272}
              alt="logo"
              src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
            />
          }
        >
          <List.Item.Meta title={<a>{item.title}</a>} />
          {item.summary}
        </List.Item>
      )}
    />
  );
};

export default HomeArticle;
