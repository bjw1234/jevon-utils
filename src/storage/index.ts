/**
 * 封装操作 localStorage 的 api
 * get、set、has、getAll等
 */
const store: any = {
  version: '1.0.1',
  storage: window.localStorage,
  session: {
    storage: window.sessionStorage
  }
}

// 操作store的api
const api = {
  set(key, val) {
    if (this.disabled) {
      return false
    }
    if (val === undefined || val === '' || val === null) {
      return this.remove(key)
    }
    this.storage.setItem(key, this.serialize(val))
    return val
  },
  get(key, val) {
    if (this.disabled) {
      return false
    }
    let result = this.storage.getItem(key)
    if (!result) {
      return val
    }
    return this.deSerialize(result)
  },
  getAll() {
    if (this.disabled) {
      return false
    }
    let ret = {}
    for (let key in this.storage) {
      if (this.storage.hasOwnProperty(key)) {
        ret[key] = this.get(key)
      }
    }
    return ret
  },
  remove(key) {
    if (this.disabled) {
      return false
    }
    this.storage.removeItem(key)
  },
  removeAll() {
    if (this.disabled) {
      return false
    }
    this.storage.clear()
  },
  forEach(cb) {
    if (this.disabled) {
      return false
    }
    for (let key in this.storage) {
      if (this.storage.hasOwnProperty(key)) {
        cb && cb(key, this.get(key))
      }
    }
  },
  has(key) {
    if (this.disabled) {
      return false
    }
    return undefined !== this.get(key)
  },
  serialize(val) {
    try {
      return JSON.stringify(val) || undefined
    } catch (e) {
      return undefined
    }
  },
  deSerialize(val) {
    if (typeof val !== 'string') {
      return undefined
    }
    try {
      return JSON.parse(val) || undefined
    } catch (e) {
      return val
    }
  }
}

// 扩展store对象
Object.assign(store, api)
Object.assign(store.session, api)

// 浏览器能力检测
try {
  let testKey = 'test_key'
  store.set(testKey, testKey)
  if (store.get(testKey) !== testKey) {
    store.disabled = true
  }
  store.remove(testKey)
} catch (e) {
  store.disabled = true
}

export {
  store
} 
