/**
 * 获取Cookie，注意只能用于浏览器环境
 * @param name cookie的名称
 * 
 * ```js
 * import { getCookie } from 'jevon-utils'
 * 
 * const name = getCookie('name')
 * console.log(name) // test
 * ```
 */
export const getCookie = (name: string): any => {
  return document.cookie.match(
    new RegExp('(^' + name + '| ' + name + ')=([^;]*)')
  ) == null
    ? ''
    : RegExp.$2
}
