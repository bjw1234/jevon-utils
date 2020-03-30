# 安装

```bash
npm i jevon-utils --save
```

# 使用

```js
import { deepClone } from 'jevon-utils';

const obj = { 
  name: 'tom', 
  children: [1, 2, 3, 4] 
}
const cloneObj = deepClone(obj);
```




