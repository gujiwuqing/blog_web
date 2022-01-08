import React from 'react';
import {Tag} from 'antd'

interface ArticleCardPros {
  title: string;
  cover: string;
  createdAt: string;
  tags: any[]
}

const ArticleCard = ({
                       title,
                       cover = 'https://img.dzblog.cn/blog/images/1625043943540.png',
                       createdAt,
                       tags = []
                     }: ArticleCardPros) => {
  return (
    <div>
      <img src={cover} alt=""/>
      <div>
        <h3>{title}</h3>
        <div>{createdAt}</div>
        <div>
          {tags.map(item => {
            return <Tag>{item.name}</Tag>
          })}
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
