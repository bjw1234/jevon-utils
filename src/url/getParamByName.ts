/**
 * 获取URL中的参数
 * @param name 参数key
 * @param url 传递的URL，如果为空则取 `window.location.href`
 * @returns 返回`key`对应的值
 * 
 * ```js
 * import { getParamByName } from 'jevon-utils'
 * 
 * const url = 'www.baidu.com?c=aa'
 * getParamByName('c') // => 'aa'
 * ```
 */
export const getParamByName = (name: string, url?: string): string => {
  if (!url) url = window.location.href
  name = name.replace(/[\[\]]/g, "\\$&")
  const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url)
  if (!results) return null
  if (!results[2]) return ''
  return decodeURIComponent(results[2].replace(/\+/g, " "))
}
