/**
 * 平滑滚动到页面顶部
 */
export const scrollToTop = (speed: number = 8): void => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / speed);
  }
}
