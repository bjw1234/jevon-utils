

/**
 * 用于比较两个版本号
 * 
 * 结果为 `1`: 新版本 大于 旧版本
 * 
 * 结果为 `0`: 版本号一致
 * 
 * 结果为 `-1`: 旧版本 大于 新版本
 * 
 * 
 * @param preVersion 旧版本号
 * @param lastVersion 新版本号
 * 
 * ```js
 * import { versionStringCompare } from 'jevon-utils'
 * 
 * versionStringCompare('1.1.2', '1.1.4') === 1
 * versionStringCompare('1.1.2', '1.1.2') === 0
 * versionStringCompare('1.1.2', '1.1.0') === -1
 * ```
 */
export const versionStringCompare = (preVersion = '', lastVersion = ''): number => {
  const sources = preVersion?.split('.')
  const dests = lastVersion?.split('.')
  const maxL = Math.max(sources.length, dests.length)
  let result = 0
  for (let i = 0; i < maxL; i++) {
    const preValue = sources.length > i ? sources[i] : '0'
    const preNum = isNaN(Number(preValue)) ? preValue.charCodeAt(0) : Number(preValue)
    const lastValue = dests.length > i ? dests[i] : '0'
    const lastNum = isNaN(Number(lastValue)) ? lastValue.charCodeAt(0) : Number(lastValue)
    if (preNum < lastNum) {
      result = 1
      break
    } else if (preNum > lastNum) {
      result = -1
      break
    }
  }
  return result
}
