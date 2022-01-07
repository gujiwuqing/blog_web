import React, { useEffect, useState } from 'react';
import { GetArticleInfo } from '../../../service';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
// import style manually
import 'react-markdown-editor-lite/lib/index.css';
import './index.less';

// Register plugins if required
// MdEditor.use(YOUR_PLUGINS_HERE);

// Initialize a markdown parser
const mdParser = new MarkdownIt(/* Markdown-it options */);

export default function ArticleInfo() {
  const [markdown, setMarkdown] = useState('');
  useEffect(() => {
    GetArticleInfo('1').then((res) => {
      setMarkdown(res.data.content);
    });
  }, []);
  return (
    <MdEditor
      style={{ minHeight: '500px' }}
      renderHTML={(text) => mdParser.render(text)}
      value={markdown}
      readOnly
      config={{ view: { menu: false, md: false, html: true } }}
    />
  );
}
