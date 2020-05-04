/**
 * 设置cookie，注意只能用于浏览器环境
 * @param name cookie名称
 * @param value cookie值
 * @param days 过期时长，单位：天
 * @returns 无返回值
 * 
 * ```js
 * import { setCookie } from 'jevon-utils'
 * 
 * // 设置key为name的cookie，过期时长为7天
 * setCookie('name', 'test', 7)
 * ```
 */
export const setCookie = (name: string, value: string, days: number) => {
  var date = new Date();
  date.setDate(date.getDate() + days);
  document.cookie = name + '=' + value + ';expires=' + date;
}