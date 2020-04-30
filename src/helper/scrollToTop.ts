/**
 * 平滑滚动到页面顶部
 * 
 * ```js
 * import { scrollToTop } from 'jevon-utils'
 * 
 * scrollToTop() // 平滑回到页面顶部
 * ```
 */
export const scrollToTop = (): void => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  if (scrollTop > 0) {
    window.requestAnimationFrame(scrollToTop)
    window.scrollTo(0, scrollTop - scrollTop / 8)
  }
}
