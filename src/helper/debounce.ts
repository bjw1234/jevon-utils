/**
 * 防抖函数，常用于按钮点击，防止短时间内多次点击
 * 多次调用小于 `wait` 值，就会被转化为一次调用
 * 
 * @param func 被包装的函数 
 * @param wait 间隔 `wait` 值 
 * @param immediate 是否立即执行 
 * @returns 被包装的函数
 * 
 * ```js
 * import { debounce } from 'jevon-utils'
 * 
 * const log = (text) => {
 *   console.log(text)
 * }
 * 
 * const logger = debounce(log, 2000, true)
 * 
 * logger('hello1')
 * logger('hello2')
 * 
 * ```
 */
export const debounce = (func: Function, wait: number, immediate: boolean): Function => {
  let timer: NodeJS.Timeout | null,
    context: any,
    args: any 

  // 定时器
  let later = function () {
    return setTimeout(() => {
      timer = null 
      if (!immediate) {
        func.apply(context, args) 
      }
    }, wait) 
  }

  return function (...params) {
    if (!timer) {
      timer = later() 

      // immediate 为 true，则立即执行
      // 否则 缓存上下文 和 参数
      if (immediate) {
        func.apply(this, params) 
      } else {
        context = this 
        args = params 
      }
    } else {
      clearTimeout(timer) 
      timer = later() 
    }
  }
}
