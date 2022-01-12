import React, { useState } from 'react';
import { getTimes } from '@/utils/global';
import icon from '../../../public/beian.png';

const CmsFooter = () => {
  const [date, setDate] = useState<string>('');
  getTimes();
  window.setTimeout(() => {
    const time = getTimes();
    setDate(time);
  }, 1000);
  return (
    <>
      <div className="footer">
        <p>{date}</p>
        <p>欢迎来到山海亦有归期的博客</p>

        <div className="beian">
          <a
            target="_blank"
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=36010302000230"
            className="footer-link"
            rel="noreferrer"
          >
            <img src={icon} />
            <p>赣公网安备 36010302000230号</p>
          </a>
        </div>
      </div>
    </>
  );
};

export default CmsFooter;
