/**
 * 生成随机头像
 * 
 * @param size 生成头像大小
 * @param s 头像中的字符
 */
export const gen_text_img = (size, s: string): string => {
  if (s.length > 1) {
    s = s.slice(-1); // 字符串默认取最后一个字符
  }
  const colors = [
    "rgb(239,150,26)", 'rgb(255,58,201)', "rgb(111,75,255)", "rgb(36,174,34)", "rgb(80,80,80)"
  ];
  let cvs = document.createElement("canvas");
  cvs.setAttribute('width', size[0]);
  cvs.setAttribute('height', size[1]);
  let ctx = cvs.getContext("2d");
  ctx.fillStyle = colors[Math.floor(Math.random() * (colors.length))];
  ctx.fillRect(0, 0, size[0], size[1]);
  ctx.fillStyle = 'rgb(255,255,255)';
  ctx.font = size[0] * 0.6 + "px Arial";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  ctx.fillText(s, size[0] / 2, size[1] / 2);

  return cvs.toDataURL('image/jpeg', 1);
}