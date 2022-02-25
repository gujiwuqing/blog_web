import React, { useEffect, useState } from 'react';
import icon from '../../../public/beian.png';
import { getTimes } from '@/utils/global';

const CmsFooter = () => {
  const [date, setDate] = useState<string>(getTimes());
  useEffect(() => {
    const time = getTimes();
    const timer = setTimeout(() => {
      setDate(time);
    }, 1000);
    return () => clearTimeout(timer);
  }, [date]);
  return (
    <>
      <div className="footer">
        <p>欢迎来到山海亦有归期的博客</p>
        <p>{date}</p>
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
        <div>
          <span id="busuanzi_container_site_pv" style={{ color: '#fff' }}>
            本站总访问量
            <span id="busuanzi_value_site_pv" style={{ color: '#fff' }} />次
          </span>
        </div>
      </div>
    </>
  );
};

export default CmsFooter;
