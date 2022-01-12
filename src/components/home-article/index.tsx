import { List, Space, Tag } from 'antd';
import { LikeOutlined, ReadOutlined, StarOutlined } from '@ant-design/icons';
import React from 'react';
import { history } from 'umi';
import { getTagColor } from '@/utils/global';
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
  cover: string;
  summary: string;
  loveCount: number | string;
  readCount: number | string;
  isTop: number;
  tags: any[];
  categorys: any[];
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
      renderItem={(item: ArticleItem) => (
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
          <List.Item.Meta
            title={<a>{item.title}</a>}
            description={
              <>
                {item.isTop == 1 && <Tag color="green">置顶</Tag>}
                {item.tags.map((tag: any) => {
                  return (
                    <Tag key={tag.id} color={getTagColor()}>
                      {tag.name}
                    </Tag>
                  );
                })}
                {item.categorys.map((category: any) => {
                  return (
                    <Tag key={category.id} color={getTagColor()}>
                      {category.name}
                    </Tag>
                  );
                })}
              </>
            }
          />
          {item.summary}
        </List.Item>
      )}
    />
  );
};

export default HomeArticle;
