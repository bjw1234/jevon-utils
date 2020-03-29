import { getParamByName } from '../src/index';

describe('测试URL', () => {
  const url = 'www.baidu.com?a=1&b=test';

  test(`${url} getParamByName('a', url) 返回1`, () => {
    expect(getParamByName('a', url)).toBe('1');
  });

  test(`${url} getParamByName('b', url) 返回test`, () => {
    expect(getParamByName('b', url)).toBe('test');
  });
})
