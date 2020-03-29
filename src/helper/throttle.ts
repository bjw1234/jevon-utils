/**
 * 节流函数
 * 多次执行，转化为每隔 `wait` 时间调用一次
 * 
 * @param func 被包装的函数 
 * @param wait 间隔 `wait` 值 
 * @param immediate 是否立即执行 
 */
export const throttle = (func: Function, wait: number, immediate: boolean): Function => {
  let timer: NodeJS.Timeout | null, context: any;
  return function (...args) {
    context = this;
    if (!timer) {
      timer = setTimeout(function () {
        timer = null;
        if (!immediate) {
          func.apply(context, args);
        }
      }, wait);
      if (immediate) {
        func.apply(context, args);
      }
    }
  }
}