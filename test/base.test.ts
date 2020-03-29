import { deepClone } from '../src/index'

describe('测试基础函数', () => {
  test('deepClone({ name: \'43\' })', () => {
    expect(deepClone({ name: '43' })).toStrictEqual({ name: '43' });
  });
  test('deepClone({ name: \'bjw\', children: [4, 5] })', () => {
    expect(deepClone({ name: 'bjw', children: [4, 5] })).toStrictEqual({ name: 'bjw', children: [4, 5] })
  });
})