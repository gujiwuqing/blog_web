import React, { useEffect, useState } from 'react';
import { GetArticleInfo } from '../../../service';
import './index.less';
import MdEditor from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';

// Register plugins if required
// MdEditor.use(YOUR_PLUGINS_HERE);

export default function ArticleInfo() {
  const [markdown, setMarkdown] = useState('');
  useEffect(() => {
    GetArticleInfo('1').then((res) => {
      setMarkdown(res.data.content);
    });
  }, []);
  return <MdEditor style={{ minHeight: '500px' }} modelValue={markdown} previewOnly />;
}
