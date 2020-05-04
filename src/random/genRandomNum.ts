
/**
 * 生成在指定范围内[min, max]的随机值
 * @param max 最大值
 * @param min 最小值
 * @returns 随机值
 * 
 * ```js
 * import { genRandomNum } from 'jevon-utils'
 * 
 * genRandomNum(2, 6) // 3
 * ``` 
 */
export const genRandomNum = (min: number, max: number): number => {
  if (max < min) throw new Error('max must greater or equal to min.')
  return Math.floor(Math.random() * (max - min + 1)) + min
}
