import { Button, Card, Comment, Form, Input, List, message } from 'antd';
import Layout from '@/pages/layout';
import React, { useEffect, useState } from 'react';
import { CreateComment, GetCommentList } from '@/service';
import moment from 'moment';
import { CommentItem } from '@/interface/global';

const { TextArea } = Input;

const CommentPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [list, setList] = useState<any[]>([]);
  const handleComment = async (values: { author: string; content: string }) => {
    setLoading(true);
    console.log(values);
    // @ts-ignore
    const { code } = await CreateComment(values);
    if (code === 200) {
      message.success('留言成功');
      getList();
    }
    setLoading(false);
  };

  const getList = async () => {
    const { data } = await GetCommentList();
    setList([...data]);
  };
  useEffect(() => {
    getList();
  }, []);
  const RenderForm = (
    <Form labelCol={{ span: 3 }} wrapperCol={{ span: 21 }} onFinish={handleComment}>
      <Form.Item
        label="少侠尊称"
        name="author"
        rules={[{ required: true, message: '请输入少侠的尊称' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="少侠的邮箱"
        name="email"
        rules={[
          { required: true, message: '请输入少侠的邮箱' },
          {
            pattern: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
            message: '请输入正确的邮箱',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="少侠想要说的话"
        name="content"
        rules={[{ required: true, message: '请输入少侠想要说的话' }]}
      >
        <TextArea rows={3} />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 3, span: 16 }}>
        <Button type="primary" loading={loading} htmlType="submit">
          留言
        </Button>
      </Form.Item>
    </Form>
  );
  return (
    <Layout title={<div className="intro">留言板</div>}>
      <Card>
        {RenderForm}
        <List
          className="comment-list"
          header={`${list.length} replies`}
          itemLayout="horizontal"
          dataSource={list}
          renderItem={(item: CommentItem) => (
            <li key={item.id}>
              <Comment
                // actions={item.actions}
                author={item.author}
                avatar="https://joeschmoe.io/api/v1/random"
                content={item.content}
                datetime={moment(item.createdAt).fromNow()}
              />
            </li>
          )}
        />
      </Card>
    </Layout>
  );
};

export default CommentPage;
