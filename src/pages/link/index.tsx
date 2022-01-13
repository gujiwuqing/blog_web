import React, { useEffect, useState } from 'react';
import { Card, Col, Image, Row } from 'antd';
import './index.less';
import { getBgColor } from '@/utils/getColor';
import Layout from '@/pages/layout';
import { GetLinkList } from '@/service';

const LinkList = () => {
  const [linklist, setLinkList] = useState([]);
  useEffect(() => {
    GetLinkList({}).then((res) => {
      const {
        data: { list },
      } = res;
      setLinkList(list);
    });
  }, []);

  // const style = { background: '#0092ff', padding: '8px 0' };
  return (
    <Layout
      color="#6f63c1"
      title={<div className="intro">友情链接</div>}
      ImgUrl="https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g6/M00/05/00/ChMkKmEwK5eIPiUBABbc2lVNMOoAATU5QBAn1YAFtzy978.jpg"
    >
      <Card className="link-contaniner">
        <div className="link_title">友链列表</div>
        <Row gutter={[16, 16]}>
          {linklist.map((item: any) => {
            return (
              <Col span={12} key={item._id}>
                <div
                  style={getBgColor()}
                  className="link_item"
                  onClick={() => {
                    window.open(item.friendLink, '_blank');
                  }}
                >
                  <Image src={item.friendAvatar} alt="" width={60} />
                  <div className="link-item_name">
                    <p>{item.friendName}</p>
                    <p>{item.friendDesc}</p>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Card>
    </Layout>
  );
};

export default LinkList;
