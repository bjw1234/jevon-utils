/**
 * 将 byte 数据转化为不同单位的值
 * @param bytes 字节值 
 * @returns 带单位的字符串
 * 
 * ```js
 * import { readablizeBytes } from 'jevon-utils'
 * 
 * let val = readablizeBytes(1024) // 1024字节
 * console.log(val) // 1.00KB
 * val = readablizeBytes(10240 * 1000) // 1024字节
 * console.log(val) // 9.77MB
 * val = readablizeBytes(10240 * 1000 * 1000) // 1024字节
 * console.log(val) // 9.54GB
 * ```
 */
export const readablizeBytes = (bytes: number): string => {
  if (bytes && bytes !== 0) {
    const s: string[] = ['B', 'KB', 'MB', 'GB', 'TB', 'PB']
    const e: number = Math.floor(Math.log(bytes) / Math.log(1024))
    return (bytes / (1024 ** Math.floor(e))).toFixed(2) + s[e]
  }
  return '0'
}