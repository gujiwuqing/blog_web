import React from 'react';
import Layout from '@/pages/layout';
import Icon from '@/components/Icon';
import { Card } from 'antd';
import { SoundOutlined } from '@ant-design/icons';
import './index.less';

const About = () => {
  return (
    <Layout
      title={
        <>
          <div className="intro">
            <div style={{ textAlign: 'center' }}>关于我</div>
          </div>
        </>
      }
    >
      <Card className="about">
        <div className="about-2">
          <h2>
            <i className="iconfont icongerenjieshao" />
            <span>个人介绍</span>
          </h2>
          <div className="ntroduction">
            <Icon type="iconnicheng" />
            <span className="label">昵称：</span> <span>孤寂无情</span>
          </div>
          <div className="ntroduction">
            <SoundOutlined style={{ fontSize: 24 }} />
            <span className="label">座右铭：</span>
            <span>身为蝼蚁，当有鸿鹄之志</span>
          </div>
          <div className="ntroduction">
            <Icon type="iconmayun1" />
            <span className="label">码云：</span>https://gitee.com/fwh1998/fwh1998
          </div>
          <div className="ntroduction">
            <Icon type="iconyouxiang" />
            <span className="label">邮箱：</span>15279279713@163.com
          </div>
          <div className="ntroduction">
            <Icon type="icondingdan-" />
            <span className="label">籍贯：</span>江西九江
          </div>
        </div>
        <div className="about-3">
          <p>
            {/* 因为打字机效果会导致这个下雪特效变快 会变得卡顿 */}
            {/* &nbsp;&nbsp;&nbsp;&nbsp; */}
            {/* {MagicWriter( */}
            {/*   '喜欢和热爱撞了个满怀，感觉这辈子很幸运的还是选择了这一行，不过感觉最喜欢的还是敲着自己的代码，听着想听的歌，完成了很多想实现的东西，真的会感到开心，不曾后悔过。说一下我自己吧，平时会比较喜欢折腾各种各样的东西，最近迷上了写博客，迷上了折腾自己的服务器，由于技术有限，只能用宝塔来部署的服务器，可能自己懒，以前喜欢到处问别人，现在会更多的是百度，逐渐黑化，变成百度工程师，我的博客便是这样子，不断百度，不断更新.在辞职后，不断面试，然后发现自己的缺点不断改正，基础比较薄弱，因为不爱学那些个人感觉太枯燥的理论知识，虽然知道我的选择是错误的，可是还是会长期忍不住不想去看，于是又跑来写博客了。只能说，在不断看底层js代码，不断在折腾博客吧', */}
            {/* )} */}
            喜欢和热爱撞了个满怀，感觉这辈子很幸运的还是选择了这一行，不过感觉最喜欢的还是敲着自己的代码，听着想听的歌，完成了很多想实现的东西，真的会感到开心，不曾后悔过。说一下我自己吧，平时会比较喜欢折腾各种各样的东西，最近迷上了写博客，迷上了折腾自己的服务器，由于技术有限，只能用宝塔来部署的服务器，可能自己懒，以前喜欢到处问别人，现在会更多的是百度，逐渐黑化，变成百度工程师，我的博客便是这样子，不断百度，不断更新.在辞职后，不断面试，然后发现自己的缺点不断改正，基础比较薄弱，因为不爱学那些个人感觉太枯燥的理论知识，虽然知道我的选择是错误的，可是还是会长期忍不住不想去看，于是又跑来写博客了。只能说，在不断看底层js代码，不断在折腾博客吧
          </p>
        </div>
        <div style={{ marginBottom: 40 }} />
        <div>
          <h2>剑谱</h2>
          <p> 剑谱秘籍 剑谱乃忘情之人所写，后人想修炼此剑谱定当谨记。</p>
          <p> 欲练此剑谱必要忘却红尘，心中再无半点情爱。 否则就会走火入魔，为爱伤心，为情所困。</p>
          <p> 谨记！谨记！</p>
          <p> 剑谱第一页，忘掉心上人 剑谱第二页，挥剑斩红尘 剑谱第三页，自断痴情魂</p>
          <p> 剑谱第四页，刀刀斩爱神 剑谱第五页，情欲不沾身 剑谱第六页，不做感情人</p>
          <p> 剑谱第七页，女人伤人魂 剑谱第八页，怒斩旧情人 剑谱第九页，挥剑自斩神</p>
          <p> 剑谱第十页，闭关锁心门 剑谱第十一页，怒斩拦路人 剑谱第十二页，抬手灭红尘</p>
          <p> 剑谱最终页，无爱即是神</p>
        </div>
      </Card>
    </Layout>
  );
};

export default About;
