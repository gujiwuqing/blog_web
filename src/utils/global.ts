import dayjs from 'dayjs';
import useTypewriter from 'react-typewriter-hook';

export function getTime(value: string) {
  return dayjs(value).format('YYYY-MM-DD HH:mm');
}

export function getDate(value: string) {
  return dayjs(value).format('YYYY-MM-DD');
}

export const getTimes = () => {
  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;
  const years = days * 365;
  const today = new Date();
  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth() + 1;
  const todayDate = today.getDate();
  const todayHour = today.getHours();
  const todayMinute = today.getMinutes();
  const todaySecond = today.getSeconds();
  const t1 = Date.UTC(2020, 10, 18); // 北京时间2016-12-1 00:00:00
  const t2 = Date.UTC(todayYear, todayMonth, todayDate, todayHour, todayMinute, todaySecond);
  const diff = t2 - t1;
  const diffYears = Math.floor(diff / years);
  const diffDays = Math.floor(diff / days - diffYears * 365);
  const diffHours = Math.floor((diff - (diffYears * 365 + diffDays) * days) / hours);
  const diffMinutes = Math.floor(
    (diff - (diffYears * 365 + diffDays) * days - diffHours * hours) / minutes,
  );
  const diffSeconds = Math.floor(
    (diff - (diffYears * 365 + diffDays) * days - diffHours * hours - diffMinutes * minutes) /
      seconds,
  );
  const time =
    diffYears > 0
      ? ` 已运行${diffYears} 年 ${diffDays} 天 ${diffHours} 小时 ${diffMinutes} 分钟 ${diffSeconds} 秒`
      : ` 已运行${diffDays} 天 ${diffHours} 小时 ${diffMinutes} 分钟 ${diffSeconds} 秒`;
  return time;
};

export function MagicWriter(word: string) {
  const typing = useTypewriter(word);
  return typing;
}

export const getTagColor = () => {
  const colors = [
    'magenta',
    'red',
    'volcano',
    'orange',
    'gold',
    'lime',
    'green',
    'cyan',
    'blue',
    'geekblue',
    'purple',
  ];
  const num = Math.floor(Math.random() * 10 + 1);
  return colors[num];
};

export const getArchiveList = (data: any[]) => {
  const list = data.map((item) => {
    return { ...item, year: dayjs(item.createdAt).year() };
  });
  return list.reduce((acc, obj) => {
    const key = obj.year;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
};

/**
 * 基础防抖
 *
 * @param event 目标事件
 * @param delay 延迟时间
 * @returns function
 */
export const debounce = (event: () => void, delay = 100) => {
  let timer: any = -1;

  return () => {
    clearTimeout(timer);
    timer = setTimeout(event, delay);
  };
};
