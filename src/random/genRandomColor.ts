/**
 * 生成随机颜色
 * @returns 颜色值 
 * 
 * ```js
 * import { genRandomColor } from 'jevon-utils'
 * 
 * genRandomColor() // #720f32 
 * ```
 */
export const genRandomColor = (): string => {
  return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6);
}