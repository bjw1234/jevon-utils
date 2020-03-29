/**
 * 将 byte 数据转化为不同单位的值
 * @param bytes 字节值 
 * @returns 带单位的字符串
 */
export const readablizeBytes = (bytes: number): string => {
  if (bytes && bytes !== 0) {
    const s: string[] = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];
    const e: number = Math.floor(Math.log(bytes) / Math.log(1024));
    return (bytes / (1024 ** Math.floor(e))).toFixed(2) + s[e];
  }
  return '0';
}