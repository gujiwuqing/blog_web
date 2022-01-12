import React from 'react';
import { ArticleItem } from '@/interface/global';
import styles from '@/pages/archive/index.module.less';
import { history } from '@@/core/history';
import { getTime } from '@/utils/global';

interface ArticleListProps {
  data: ArticleItem[];
}

const ArticleList = ({ data }: ArticleListProps) => {
  return (
    <div>
      {data.map((article: ArticleItem) => {
        return (
          <div
            key={article.id}
            className={styles['archive-item']}
            onClick={() => {
              history.push(`/article/${article.id}`);
            }}
          >
            <div>{article.title}</div>
            <div>{getTime(article.createdAt)}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ArticleList;
