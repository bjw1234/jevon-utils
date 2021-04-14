/**
 * 将IP地址转化一个Number类型的数字
 * 
 * @param ip IP 地址
 */
export const iP2Number = (ip: string): number => {
  let result = 0
  if (!ip) return result
  const ipArr = ip.split('.')
  if (ipArr.length !== 4) return result
  result += parseInt(ipArr[0], 10) * Math.pow(256, 3)
  result += parseInt(ipArr[1], 10) * Math.pow(256, 2)
  result += parseInt(ipArr[2], 10) * Math.pow(256, 1)
  result += parseInt(ipArr[3], 10)
  return (result >>> 0)
}
