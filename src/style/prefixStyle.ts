/**
 * 得到合适的浏览器前缀，例如：webkit、ms
 */
const vendor = (() => {
  const elementStyle = document.createElement('div').style
  let transformNames = {
    webkit: 'webkitTransform',
    Moz: 'MozTransform',
    O: 'OTransform',
    ms: 'msTransform',
    standard: 'transform'
  }

  for (const key in transformNames) {
    const support = elementStyle[transformNames[key]] !== undefined
    if (support) {
      return key
    }
  }
  return false
})()

/**
 * 给某些CSS样式加浏览器前缀
 * 适用范围：js给某些DOM添加动画
 * 
 * @param style CSS样式
 * @returns 加了浏览器前缀的CSS样式
 * 
 * ```js
 * // 加了合适前缀的CSS属性
 * const TRANSFORM = prefixStyle('transform')
 * // ===> webkitTranform
 * 
 * // 使用该CSS属性
 * this.$refs.image.style[TRANSFORM] = `scale(${scale})`
 * ```
 */
export function prefixStyle(style: string): string {
  if (vendor === false) {
    return style
  }
  if (vendor === 'standard') {
    return style
  }
  let result = vendor + style.charAt(0).toUpperCase() + style.substr(1)
  return result
}
