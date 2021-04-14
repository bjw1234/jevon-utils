import { versionStringCompare } from '../src/index'

// const log = (text) => {
//   console.log(text)
// }

// const logger = throttle(log, 2000, true)

// logger('hello1');
// logger('hello2');

// 只有 hello1 被输出

// console.log(generateUUID())

// const ret = genRandomHeader([90, 90], '好')
// console.log(ret)

// let val = readablizeBytes(1024) // 1024字节
// console.log(val) // 1.00KB
// val = readablizeBytes(10240 * 1000) // 1024字节
// console.log(val) // 9.77MB
// val = readablizeBytes(10240 * 1000 * 1000) // 1024字节
// console.log(val) // 9.54GB

describe('测试基础函数', () => {
  test(`versionStringCompare('1.1.2', '1.1.4')`, () => {
    expect(versionStringCompare('1.1.2', '1.1.4')).toEqual(1)
  });
  test(`versionStringCompare('1.0.2', '1.0.2')`, () => {
    expect(versionStringCompare('1.0.2', '1.0.2')).toEqual(0)
  });
  test(`versionStringCompare('1.0.2', '1.0.2')`, () => {
    expect(versionStringCompare('1.0.2', '1.0.1')).toEqual(-1)
  });
})