/**
 * 生成唯一字符串 UUID
 * 
 * ```js
 * import { generateUUID } from 'jevon-utils'
 *
 * const uuid = generateUUID() 
 * console.log(uuid)
 * 
 * // 44e7cfca-11aa-4dbf-9f24-a1371468e6b5
 * ```
 */
export const generateUUID = (): string => {
  let d = new Date().getTime();
  if (typeof window === 'object' && window.performance && typeof window.performance.now === "function") {
    d += window.performance.now(); //use high-precision timer if available
  }
  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (d + Math.random() * 16) % 16 | 0
    d = Math.floor(d / 16)
    return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16)
  })
  return uuid
}
