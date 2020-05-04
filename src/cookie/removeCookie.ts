import { setCookie } from './setCookie'
/**
 * 删除一个cookie
 * @param name cookie的key
 * @returns 无返回值
 * 
 *```js
 * import { removeCookie } from 'jevon-utils'
 * 
 * // 删除cookie
 * removeCookie('name')
 * ```
 */
export const removeCookie = (name: string) => {
  setCookie(name, '1', -1);
}