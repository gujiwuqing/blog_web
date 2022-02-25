import React from 'react';
import Layout from '@/pages/layout';
import { Card, Tag } from 'antd';
import { GetCategoryList } from '@/service';
import { history, IGetInitialProps } from 'umi';

const TagPage = ({ categoryList = [] }: any) => {
  return (
    <Layout title={<div className="intro">分类</div>}>
      <Card>
        {categoryList?.map(
          (item: {
            id: React.Key | null | undefined;
            name:
              | boolean
              | React.ReactChild
              | React.ReactFragment
              | React.ReactPortal
              | null
              | undefined;
          }) => {
            return (
              <Tag
                key={item.id}
                // color={isBrowser() ? getTagColor() : '#fff'}
                style={{ marginRight: 24, fontSize: 20, padding: 10, cursor: 'pointer' }}
                onClick={() => {
                  history.push(`/category/${item.id}`);
                }}
              >
                {item.name}
              </Tag>
            );
          },
        )}
      </Card>
    </Layout>
  );
};
TagPage.getInitialProps = (async () => {
  const { data } = await GetCategoryList();
  return Promise.resolve({
    categoryList: data,
  });
}) as IGetInitialProps;
export default TagPage;
