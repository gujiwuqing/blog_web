// 颜色对象
export function getColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const color = `rgba(${  r  },${  g  },${  b  },0.8)`;
  return {
    background: color,
    color: '#fff',
  };
}

export function getBgColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const color = `rgba(${  r  },${  g  },${  b  },0.8)`;
  const r1 = Math.floor(Math.random() * 255);
  const g1 = Math.floor(Math.random() * 255);
  const b1 = Math.floor(Math.random() * 255);
  const color1 = `rgba(${  r1  },${  g1  },${  b1  },0.8)`;
  return {
    background: `linear-gradient(to right, ${color}  0%,${color1} 100%)`,
  };
}
