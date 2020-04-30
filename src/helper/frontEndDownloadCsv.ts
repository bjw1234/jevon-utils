
/**
 * 前端构造数据并下载为CSV文件
 * @param header 生成的CSV表头
 * @param content 生成的CSV的内容体
 * @returns 无返回值
 * 
 * ```js
 * import { frontEndDownloadCsv } from 'jevon-utils'
 * 
 * const header = ['ID','name']
 * const content = [['1','lemon'],['2','lara']
 * frontEndDownloadCsv(header, content)
 * ```
 */
export const frontEndDownloadCsv = (header: Array<string>, content: Array<Array<any>>) => {
  if (!header || !content) {
    return
  }
  let context = ""
  context = `${header.join(',')}\n`
  for (let i = 0; i < content.length; i += 1) {
    const item = content[i]
    context += `${item.join(',')}\n`
  }
  downLoadHelper(context)
}

/**
 * 将CSV字符串生成文件并下载
 * @param response CSV字符串
 */
export const downLoadHelper = (response: string): void => {
  const blob = new Blob([`\uFEFF${response}`], { type: 'text/csv charset=UTF-8' })
  const blobUrl = window.URL.createObjectURL(blob)
  const a = document.createElement('a')
  const filename = `download-${new Date().getTime()}.csv`
  a.href = blobUrl
  a.download = filename
  a.click()
  a.remove()
  window.URL.revokeObjectURL(blobUrl)
}
