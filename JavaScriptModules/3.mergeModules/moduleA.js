function helloA() {
  console.log('hello it`s module A')
}

// 导出的功能模块必须带名称 不然会报错
// Uncaught SyntaxError: The requested module './module.js' does not provide an export named 'helloA' (at index.js:2:3)
export default helloA;

// export {
//   helloA
// }

