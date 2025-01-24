/*
 * @Description: insert description
 * @Author: yangrongxin
 * @Date: 2025-01-24 10:03:24
 * @LastEditors: yangrongxin
 * @LastEditTime: 2025-01-24 10:19:59
 */

// 错误的用法 默认导出不支持从指定文件中进行引用
// export default helloA from './moduleA.js'


export {
  helloA
} from './moduleA.js';
export {
  helloB
} from './moduleB.js';

// export * from './moduleA.js'
// export * from './moduleB.js'