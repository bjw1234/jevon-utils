
/**
 * 对一个对象进行深拷贝
 * 
 * @param obj 对象类型的参数
 * 
 * ```js
 * import { deepClone } from 'jevon-utils'

 * const obj = { 
 *   name: 'tom', 
 *   children: [1, 2, 3, 4] 
 * }
 * 
 * const cloneObj = deepClone(obj)
 * ```
 */
export function deepClone(obj: object): object {
  if (!obj || typeof obj !== 'object')
    throw new TypeError('params typeError')
  let _obj = obj.constructor === Object ? {} : []
  Object.getOwnPropertyNames(obj).forEach(name => {
    if (typeof obj[name] === 'object') {
      _obj[name] = deepClone(obj[name])
    } else {
      _obj[name] = obj[name]
    }
  });
  return _obj
}
