/*
 * @Description: 其他非js资源的引用方法
 * @Author: yangrongxin
 * @Date: 2025-01-24 09:41:25
 * @LastEditors: yangrongxin
 * @LastEditTime: 2025-01-24 09:58:25
 */
import address from './address.json' with { type: 'json' }
import platform from './platform.css' with { type: 'css' }
// 加载不存在的资源的时候报错，整个模块的资源不会被加载。
// import platform from './platform.json' with { type: 'json' }

address.forEach(_item => {
  console.log('I`m plan to visit with', _item.name)
})

console.log('_address_', address)
// 返回一个 CSSStyleSheet 对象
console.log('_platform_', platform)