import React, {useEffect, useState} from 'react';
import {GetArticleInfo} from '../../../service';
import Layout from "@/pages/layout";
import './index.less';
import MdEditor from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';
import {useParams} from 'umi';

// Register plugins if required
// MdEditor.use(YOUR_PLUGINS_HERE);

export default function ArticleInfo() {
  const [markdown, setMarkdown] = useState('');
  const {id}: { id: string } = useParams();
  useEffect(() => {
    GetArticleInfo(id).then((res) => {
      setMarkdown(res.data.content);
    });
  }, []);
  return (
    <Layout><MdEditor style={{minHeight: '500px'}} modelValue={markdown} previewOnly/>
    </Layout>
  );
}
