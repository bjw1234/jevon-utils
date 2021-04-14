
/**
 * 数组降维
 * 
 * @param arr 数组
 */
export const flattenDeep = (arr: any[] | any) => {
  if (!Array.isArray(arr))
    return [arr]
  return arr.reduce((prev, cur) => {
    return [...prev, ...flattenDeep(cur)]
  }, [])
}
