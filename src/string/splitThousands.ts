
/**
 * 加了千分符的字符串(可包含小数位)
 * @param 字符串格式的数字
 * 
 * 
 * ```js
 * import { splitThousands } from 'jevon-utils'
 * 
 * const number = '2880.25'
 * splitThousands(number) // '2,880.25'
 * ```
 */
export const splitThousands = (number: string): string => {
  let decimal = ''
  let str = number
  if (!number) return ''
  if (number.includes('.')) { // 包含小数位
    [str, decimal] = number.split('.')
  }
  const re = /(?=(?!\b)(\d{3})+$)/g
  if (!decimal)
    return str.replace(re, ',')

  return `${str.replace(re, ',')}.${decimal}`
}
