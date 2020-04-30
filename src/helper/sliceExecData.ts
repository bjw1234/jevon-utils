interface IExecFunc {
  (data: Array<any>): Promise<any>
}

interface ICallbackFunc {
  (data: any, length: number): void
}

/**
 * 对输入的数据(数组)进行分片执行
 * 适用范围，接口对请求的数据有长度限制
 * 
 * @param data 数据源（会被切分传递给 `promiseFunc` 去执行）
 * @param len 分片长度（传递给 `promiseFunc` 的数据长度）
 * @param duration 执行间隔（执行一次 `promiseFunc` 的时间间隔）
 * @param promiseFunc 执行函数
 * @param callback 每次执行的结果(结果，剩余长度)
 */
export const sliceExecData = async (data: Array<any>, len: number, duration: number, promiseFunc: IExecFunc, callback: ICallbackFunc) => {
  if (!data) return;
  if (data.length < len) {
    const res = await promiseFunc(data)
    callback(res, 0)
    return
  }
  // 休眠函数
  const sleep = (time: number) => {
    return new Promise((resolve) => {
      setTimeout(resolve, time)
    })
  }
  // 分片
  const source = data.slice() // 数据源
  let isContinueRun = true // 异常标记位
  while (source.length > 0 && isContinueRun) {
    try {
      const curData = source.splice(0, len)
      const res = await promiseFunc(curData)
      await sleep(duration) // 休眠
      callback(res, source.length)
    } catch {
      callback(null, 0)
      isContinueRun = false
    }
  }
}
