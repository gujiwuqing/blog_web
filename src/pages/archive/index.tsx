import React, { useEffect, useState } from 'react';
import Layout from '@/pages/layout';
import { GetArticleList } from '@/service';
import { getArchiveList, getTime } from '@/utils/global';
import { Card } from 'antd';
import styles from './index.module.less';
import { history } from 'umi';
import { ArticleItem } from '@/interface/global';

const Archive = () => {
  const [articleList, setArticleList] = useState<any>({});
  const [count, setCount] = useState(0);
  useEffect(() => {
    GetArticleList().then((res) => {
      const {
        data: { list, total },
      } = res;
      setArticleList(getArchiveList(list));
      setCount(total);
    });
  }, []);
  return (
    <Layout
      color="#c79b6b"
      title={<div className="intro">归档</div>}
      ImgUrl="https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g6/M00/0B/06/ChMkKmFuI7yIYoMgAFY3_5PxvGIAAUuPgLMBTsAVjgX890.jpg"
    >
      <Card className={styles.archive}>
        <div className={styles['archive-count']}>共计 {count} 篇文章</div>
        {Object.keys(articleList).map((key: string) => {
          return (
            <div>
              <div className={styles['archive-title']}>{key}</div>
              <div>
                {articleList[key].map((article: ArticleItem) => {
                  return (
                    <div
                      key={article.id}
                      className={styles['archive-item']}
                      onClick={() => {
                        history.push(`/article/${article.id}`);
                      }}
                    >
                      <div>{article.title}</div>
                      <div>{getTime(article.createdAt as string)}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </Card>
    </Layout>
  );
};

export default Archive;
