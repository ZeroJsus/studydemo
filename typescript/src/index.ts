/*
 * @Description: insert description
 * @Author: yangrongxin
 * @Date: 2025-02-07 10:09:22
 * @LastEditors: yangrongxin
 * @LastEditTime: 2025-02-18 16:59:22
 */
/**
 * 
 * src/index.ts:1:5 - error TS2451: Cannot redeclare block-scoped variable 'name'.
 * 1 let name = "hello world";
 *       ~~~~
 * node_modules/.pnpm/typescript@5.7.3/node_modules/typescript/lib/lib.dom.d.ts:27986:15
 *  27986 declare const name: void;
 *                      ~~~~
 *  'name' was also declared here.
 *  Found 1 error in src/index.ts:1
 */
// 在name中 已经定义了 window.name 存在两个name 变量产生了冲突
// let name = "hello world";
// import {
//   chunk
// } from 'lodash'  

import getUserNames from "./test";
import {
  basePic
} from './const.js'
// import {
//   debounce
// } from 'lodash'

// console.log('debounce', debounce)

import lodash from 'lodash'

console.log('lodash', lodash)

// console.log('name', name);
// const arr = chunk(['a', 'b', 'c', 'd'], 2)

// console.log('arr', arr)

if (
  typeof getUserNames === 'function'
) {
  getUserNames();
}
console.log('this is index.ts file', basePic)