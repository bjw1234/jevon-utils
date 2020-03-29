/**
 * 获取Cookie
 * @param name cookie的名称
 */
export const getCookie = (name: string): any => {
  return document.cookie.match(
    new RegExp('(^' + name + '| ' + name + ')=([^;]*)')
  ) == null
    ? ''
    : RegExp.$2
}
