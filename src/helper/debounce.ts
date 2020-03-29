/**
 * 防抖函数
 * 多次调用小于 `wait` 值，就会被转化为一次调用
 * 
 * @param func 被包装的函数 
 * @param wait 间隔 `wait` 值 
 * @param immediate 是否立即执行 
 * @returns 被包装的函数
 */
export const debounce = (func: Function, wait: number, immediate: boolean): Function => {
  let timer: NodeJS.Timeout | null,
      context: any,
      args: any;

  // 定时器
  let later = function () {
    return setTimeout(() => {
      timer = null;
      if (!immediate) {
        func.apply(context, args);
      }
    }, wait);
  }

  return function (...params) {
    if (!timer) {
      timer = later();

      // immediate 为 true，则立即执行
      // 否则 缓存上下文 和 参数
      if (immediate) {
        func.apply(this, params);
      } else {
        context = this;
        args = params;
      }
    } else {
      clearTimeout(timer);
      timer = later();
    }
  }
}
