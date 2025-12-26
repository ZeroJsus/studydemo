"use strict";
/*
 * @Description: insert description
 * @Author: yangrongxin
 * @Date: 2025-02-07 10:09:22
 * @LastEditors: yangrongxin
 * @LastEditTime: 2025-02-13 11:17:08
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var test_1 = __importDefault(require("./test"));
var const_js_1 = require("./const.js");
// console.log('name', name);
// const arr = chunk(['a', 'b', 'c', 'd'], 2)
// console.log('arr', arr)
if (typeof test_1.default === 'function') {
    (0, test_1.default)();
}
console.log('this is index.ts file', const_js_1.basePic);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7R0FNRztBQUNIOzs7Ozs7Ozs7O0dBVUc7QUFDSCw0Q0FBNEM7QUFDNUMsNEJBQTRCO0FBQzVCLFdBQVc7QUFDWCxVQUFVO0FBQ1Ysa0JBQWtCOzs7OztBQUVsQixnREFBa0M7QUFDbEMsdUNBRW1CO0FBRW5CLDZCQUE2QjtBQUM3Qiw2Q0FBNkM7QUFFN0MsMEJBQTBCO0FBRTFCLElBQ0UsT0FBTyxjQUFZLEtBQUssVUFBVSxFQUNsQyxDQUFDO0lBQ0QsSUFBQSxjQUFZLEdBQUUsQ0FBQztBQUNqQixDQUFDO0FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsRUFBRSxrQkFBTyxDQUFDLENBQUEifQ==