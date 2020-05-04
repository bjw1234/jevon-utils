'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * 获取URL中的参数
 * @param name 参数key
 * @param url 传递的URL，如果为空则取 `window.location.href`
 * @returns 返回`key`对应的值
 *
 * ```js
 * import { getParamByName } from 'jevon-utils'
 *
 * const url = 'www.baidu.com?c=aa'
 * getParamByName('c') // => 'aa'
 * ```
 */
var getParamByName = function (name, url) {
    if (!url)
        { url = window.location.href; }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"), results = regex.exec(url);
    if (!results)
        { return null; }
    if (!results[2])
        { return ''; }
    return decodeURIComponent(results[2].replace(/\+/g, " "));
};

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
 * // 会将内容生成`csv`下载到
 * ```
 */
var frontEndDownloadCsv = function (header, content) {
    if (!header || !content) {
        return;
    }
    var context = "";
    context = header.join(',') + "\n";
    for (var i = 0; i < content.length; i += 1) {
        var item = content[i];
        context += item.join(',') + "\n";
    }
    downLoadHelper(context);
};
/**
 * 将CSV字符串生成文件并下载
 * @param response CSV字符串
 */
var downLoadHelper = function (response) {
    var blob = new Blob(["\uFEFF" + response], { type: 'text/csv charset=UTF-8' });
    var blobUrl = window.URL.createObjectURL(blob);
    var a = document.createElement('a');
    var filename = "download-" + new Date().getTime() + ".csv";
    a.href = blobUrl;
    a.download = filename;
    a.click();
    a.remove();
    window.URL.revokeObjectURL(blobUrl);
};

/**
 * 平滑滚动到页面顶部
 * @returns 无返回值
 *
 * ```js
 * import { scrollToTop } from 'jevon-utils'
 *
 * scrollToTop() // 平滑回到页面顶部
 * ```
 */
var scrollToTop = function () {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, scrollTop - scrollTop / 8);
    }
};

/**
 * 防抖函数，常用于按钮点击，防止短时间内多次点击
 * 多次调用小于 `wait` 值，就会被转化为一次调用
 *
 * @param func 被包装的函数
 * @param wait 间隔 `wait` 值
 * @param immediate 是否立即执行
 * @returns 被包装的函数
 *
 * ```js
 * import { debounce } from 'jevon-utils'
 *
 * const log = (text) => {
 *   console.log(text)
 * }
 *
 * const logger = debounce(log, 2000, true)
 *
 * logger('hello1')
 * logger('hello2')
 *
 * ```
 */
var debounce = function (func, wait, immediate) {
    var timer, context, args;
    // 定时器
    var later = function () {
        return setTimeout(function () {
            timer = null;
            if (!immediate) {
                func.apply(context, args);
            }
        }, wait);
    };
    return function () {
        var arguments$1 = arguments;

        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments$1[_i];
        }
        if (!timer) {
            timer = later();
            // immediate 为 true，则立即执行
            // 否则 缓存上下文 和 参数
            if (immediate) {
                func.apply(this, params);
            }
            else {
                context = this;
                args = params;
            }
        }
        else {
            clearTimeout(timer);
            timer = later();
        }
    };
};

/**
 * 将 byte 数据转化为不同单位的值
 * @param bytes 字节值
 * @returns 带单位的字符串
 *
 * ```js
 * import { readablizeBytes } from 'jevon-utils'
 *
 * let val = readablizeBytes(1024) // 1024字节
 * console.log(val) // 1.00KB
 * val = readablizeBytes(10240 * 1000) // 1024字节
 * console.log(val) // 9.77MB
 * val = readablizeBytes(10240 * 1000 * 1000) // 1024字节
 * console.log(val) // 9.54GB
 * ```
 */
var readablizeBytes = function (bytes) {
    if (bytes && bytes !== 0) {
        var s = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];
        var e = Math.floor(Math.log(bytes) / Math.log(1024));
        return (bytes / (Math.pow(1024, Math.floor(e)))).toFixed(2) + s[e];
    }
    return '0';
};

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
var sliceExecData = function (data, len, duration, promiseFunc, callback) { return __awaiter(void 0, void 0, void 0, function () {
    var res, sleep, source, isContinueRun, curData, res, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                if (!data)
                    { return [2 /*return*/]; }
                if (!(data.length < len)) { return [3 /*break*/, 2]; }
                return [4 /*yield*/, promiseFunc(data)];
            case 1:
                res = _b.sent();
                callback(res, 0);
                return [2 /*return*/];
            case 2:
                sleep = function (time) {
                    return new Promise(function (resolve) {
                        setTimeout(resolve, time);
                    });
                };
                source = data.slice() // 数据源
                ;
                isContinueRun = true // 异常标记位
                ;
                _b.label = 3;
            case 3:
                if (!(source.length > 0 && isContinueRun)) { return [3 /*break*/, 9]; }
                _b.label = 4;
            case 4:
                _b.trys.push([4, 7, , 8]);
                curData = source.splice(0, len);
                return [4 /*yield*/, promiseFunc(curData)];
            case 5:
                res = _b.sent();
                return [4 /*yield*/, sleep(duration)]; // 休眠
            case 6:
                _b.sent(); // 休眠
                callback(res, source.length);
                return [3 /*break*/, 8];
            case 7:
                _a = _b.sent();
                callback(null, 0);
                isContinueRun = false;
                return [3 /*break*/, 8];
            case 8: return [3 /*break*/, 3];
            case 9: return [2 /*return*/];
        }
    });
}); };

/**
 * 节流函数，适用场景，文本框输入变化，发起异步请求，对请求的间隔进行限制
 * 多次执行，转化为每隔 `wait` 时间调用一次
 *
 * @param func 被包装的函数
 * @param wait 间隔 `wait` 值
 * @param immediate 是否立即执行
 * @returns 返回被包装的函数
 *
 * ```js
 * import { throttle } from 'jevon-utils'
 *
 * const log = (text) => {
 *   console.log(text)
 * }
 *
 * const logger = throttle(log, 2000, true)
 *
 * logger('hello1')
 * logger('hello2')
 * // 只有 hello1 被输出
 * ```
 */
var throttle = function (func, wait, immediate) {
    var timer, context;
    return function () {
        var arguments$1 = arguments;

        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments$1[_i];
        }
        context = this;
        if (!timer) {
            timer = setTimeout(function () {
                timer = null;
                if (!immediate) {
                    func.apply(context, args);
                }
            }, wait);
            if (immediate) {
                func.apply(context, args);
            }
        }
    };
};

/**
 * 生成随机头像 [注意：这个方法只能用于浏览器环境]
 *
 * @param size 生成头像大小，例如：[90, 90]
 * @param s 头像中的字符，如果是字符串默认取最后一个字符
 * @returns 生成头像的`base64`字符串
 *
 * ```js
 * import { genRandomHeader } from 'jevon-utils'
 *
 * const image = genRandomHeader([90, 90], '李')
 * console.log(image)
 * // "data:image/jpeg;base64,/9j......jGOMY4xjjGOMZ/9k="
 * ```
 */
var genRandomHeader = function (size, s) {
    if (s.length > 1) {
        s = s.slice(-1); // 字符串默认取最后一个字符
    }
    var colors = [
        "rgb(239,150,26)", 'rgb(255,58,201)', "rgb(111,75,255)", "rgb(36,174,34)", "rgb(80,80,80)"
    ];
    if (typeof document === "undefined") {
        throw new Error("genRandomHeader 只能在浏览器环境使用！");
    }
    var cvs = document.createElement("canvas");
    cvs.setAttribute('width', size[0]);
    cvs.setAttribute('height', size[1]);
    var ctx = cvs.getContext("2d");
    ctx.fillStyle = colors[Math.floor(Math.random() * (colors.length))];
    ctx.fillRect(0, 0, size[0], size[1]);
    ctx.fillStyle = 'rgb(255,255,255)';
    ctx.font = size[0] * 0.6 + "px Arial";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.fillText(s, size[0] / 2, size[1] / 2);
    return cvs.toDataURL('image/jpeg', 1);
};

/**
 * 对一个对象进行深拷贝
 *
 * @param obj 对象类型的参数
 * @returns 生成对象的拷贝
 *
 * ```js
 * import { deepClone } from 'jevon-utils'

 * const obj = {
 *   name: 'tom',
 *   children: [1, 2, 3, 4]
 * }
 *
 * const cloneObj = deepClone(obj)
 * ```
 */
function deepClone(obj) {
    if (!obj || typeof obj !== 'object')
        { throw new TypeError('params typeError'); }
    var _obj = obj.constructor === Object ? {} : [];
    Object.getOwnPropertyNames(obj).forEach(function (name) {
        if (typeof obj[name] === 'object') {
            _obj[name] = deepClone(obj[name]);
        }
        else {
            _obj[name] = obj[name];
        }
    });
    return _obj;
}

/**
 * 封装操作 localStorage 的 api
 * get、set、has、getAll等
 */
var store = {
    version: '1.0.1',
    storage: window.localStorage,
    session: {
        storage: window.sessionStorage
    }
};
// 操作store的api
var api = {
    set: function (key, val) {
        if (this.disabled) {
            return false;
        }
        if (val === undefined || val === '' || val === null) {
            return this.remove(key);
        }
        this.storage.setItem(key, this.serialize(val));
        return val;
    },
    get: function (key, val) {
        if (this.disabled) {
            return false;
        }
        var result = this.storage.getItem(key);
        if (!result) {
            return val;
        }
        return this.deSerialize(result);
    },
    getAll: function () {
        if (this.disabled) {
            return false;
        }
        var ret = {};
        for (var key in this.storage) {
            if (this.storage.hasOwnProperty(key)) {
                ret[key] = this.get(key);
            }
        }
        return ret;
    },
    remove: function (key) {
        if (this.disabled) {
            return false;
        }
        this.storage.removeItem(key);
    },
    removeAll: function () {
        if (this.disabled) {
            return false;
        }
        this.storage.clear();
    },
    forEach: function (cb) {
        if (this.disabled) {
            return false;
        }
        for (var key in this.storage) {
            if (this.storage.hasOwnProperty(key)) {
                cb && cb(key, this.get(key));
            }
        }
    },
    has: function (key) {
        if (this.disabled) {
            return false;
        }
        return undefined !== this.get(key);
    },
    serialize: function (val) {
        try {
            return JSON.stringify(val) || undefined;
        }
        catch (e) {
            return undefined;
        }
    },
    deSerialize: function (val) {
        if (typeof val !== 'string') {
            return undefined;
        }
        try {
            return JSON.parse(val) || undefined;
        }
        catch (e) {
            return val;
        }
    }
};
// 扩展store对象
Object.assign(store, api);
Object.assign(store.session, api);
// 浏览器能力检测
try {
    var testKey = 'test_key';
    store.set(testKey, testKey);
    if (store.get(testKey) !== testKey) {
        store.disabled = true;
    }
    store.remove(testKey);
}
catch (e) {
    store.disabled = true;
}

/**
 * 生成唯一字符串 UUID
 * @returns 生成的唯一字符串
 *
 * ```js
 * import { genRandomUUID } from 'jevon-utils'
 *
 * const uuid = genRandomUUID()
 * console.log(uuid)
 *
 * // 44e7cfca-11aa-4dbf-9f24-a1371468e6b5
 * ```
 */
var genRandomUUID = function () {
    var d = new Date().getTime();
    if (typeof window === 'object' && window.performance && typeof window.performance.now === "function") {
        d += window.performance.now(); //use high-precision timer if available
    }
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
};

/**
 * 生成随机颜色
 * @returns 颜色值
 *
 * ```js
 * import { genRandomColor } from 'jevon-utils'
 *
 * genRandomColor() // #720f32
 * ```
 */
var genRandomColor = function () {
    return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6);
};

/**
 * 生成在指定范围内[min, max]的随机值
 * @param max 最大值
 * @param min 最小值
 * @returns 随机值
 *
 * ```js
 * import { genRandomNum } from 'jevon-utils'
 *
 * genRandomNum(2, 6) // 3
 * ```
 */
var genRandomNum = function (min, max) {
    if (max < min)
        { throw new Error('max must greater or equal to min.'); }
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * 获取Cookie，注意只能用于浏览器环境
 * @param name cookie的名称
 * @returns 具体`name`对应的cookie值
 *
 * ```js
 * import { getCookie } from 'jevon-utils'
 *
 * const name = getCookie('name')
 * console.log(name) // test
 * ```
 */
var getCookie = function (name) {
    return document.cookie.match(new RegExp('(^' + name + '| ' + name + ')=([^;]*)')) == null
        ? ''
        : RegExp.$2;
};

/**
 * 设置cookie，注意只能用于浏览器环境
 * @param name cookie名称
 * @param value cookie值
 * @param days 过期时长，单位：天
 * @returns 无返回值
 *
 * ```js
 * import { setCookie } from 'jevon-utils'
 *
 * // 设置key为name的cookie，过期时长为7天
 * setCookie('name', 'test', 7)
 * ```
 */
var setCookie = function (name, value, days) {
    var date = new Date();
    date.setDate(date.getDate() + days);
    document.cookie = name + '=' + value + ';expires=' + date;
};

/**
 * 删除一个cookie
 * @param name cookie的key
 * @returns 无返回值
 *
 *```js
 * import { removeCookie } from 'jevon-utils'
 *
 * // 删除cookie
 * removeCookie('name')
 * ```
 */
var removeCookie = function (name) {
    setCookie(name, '1', -1);
};

/**
 * 得到合适的浏览器前缀，例如：webkit、ms
 */
var vendor = (function () {
    var elementStyle = document.createElement('div').style;
    var transformNames = {
        webkit: 'webkitTransform',
        Moz: 'MozTransform',
        O: 'OTransform',
        ms: 'msTransform',
        standard: 'transform'
    };
    for (var key in transformNames) {
        var support = elementStyle[transformNames[key]] !== undefined;
        if (support) {
            return key;
        }
    }
    return false;
})();
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
function prefixStyle(style) {
    if (vendor === false) {
        return style;
    }
    if (vendor === 'standard') {
        return style;
    }
    var result = vendor + style.charAt(0).toUpperCase() + style.substr(1);
    return result;
}

exports.debounce = debounce;
exports.deepClone = deepClone;
exports.downLoadHelper = downLoadHelper;
exports.frontEndDownloadCsv = frontEndDownloadCsv;
exports.genRandomColor = genRandomColor;
exports.genRandomHeader = genRandomHeader;
exports.genRandomNum = genRandomNum;
exports.genRandomUUID = genRandomUUID;
exports.getCookie = getCookie;
exports.getParamByName = getParamByName;
exports.prefixStyle = prefixStyle;
exports.readablizeBytes = readablizeBytes;
exports.removeCookie = removeCookie;
exports.scrollToTop = scrollToTop;
exports.setCookie = setCookie;
exports.sliceExecData = sliceExecData;
exports.store = store;
exports.throttle = throttle;
