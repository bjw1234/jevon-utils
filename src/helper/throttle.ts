/**
 * 节流函数，适用场景，文本框输入变化，发起异步请求，对请求的间隔进行限制
 * 多次执行，转化为每隔 `wait` 时间调用一次
 * 
 * @param func 被包装的函数 
 * @param wait 间隔 `wait` 值 
 * @param immediate 是否立即执行 
 * @returns 返回被包装的函数
 * 
 * ```js
 * import { throttle } from 'jevon-utils'
 * 
 * const log = (text) => {
 *   console.log(text)
 * }
 * 
 * const logger = throttle(log, 2000, true)
 * 
 * logger('hello1')
 * logger('hello2')
 * // 只有 hello1 被输出
 * ```
 */
export const throttle = (func: Function, wait: number, immediate: boolean): Function => {
  let timer: NodeJS.Timeout | null, context: any;
  return function (...args) {
    context = this;
    if (!timer) {
      timer = setTimeout(function () {
        timer = null
        if (!immediate) {
          func.apply(context, args)
        }
      }, wait)
      if (immediate) {
        func.apply(context, args)
      }
    }
  }
}