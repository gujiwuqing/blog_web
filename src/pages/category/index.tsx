import React, { useEffect, useState } from 'react';
import Layout from '@/pages/layout';
import { Card, Tag } from 'antd';
import { GetCategoryList } from '@/service';
import { getTagColor } from '@/utils/global';
import { history } from 'umi';

const TagPage = () => {
  const [categoryList, setCategoryList] = useState<any[]>([]);
  useEffect(() => {
    GetCategoryList().then((res) => {
      const { data } = res;
      setCategoryList([...data]);
    });
  }, []);
  return (
    <Layout title={<div className="intro">分类</div>}>
      <Card>
        {categoryList.map((item) => {
          return (
            <Tag
              key={item.id}
              color={getTagColor()}
              style={{ marginRight: 24, fontSize: 20, padding: 10, cursor: 'pointer' }}
              onClick={() => {
                history.push(`/category/${item.id}`);
              }}
            >
              {item.name}
            </Tag>
          );
        })}
      </Card>
    </Layout>
  );
};

export default TagPage;
