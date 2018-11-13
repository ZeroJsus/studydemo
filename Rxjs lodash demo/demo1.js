var Rx = require('rxjs/Rx');

function $$(item) {
  return document.querySelectorAll(item).length != 1
    ? document.querySelectorAll(item)
    : document.querySelectorAll(item)[0];
}

// 可观察对象的设置以及订阅可观察对象的事件
let btn = $$('button');
// 订阅事件直接触发
// Rx.Observable.fromEvent(btn, 'click').subscribe(()=>{console.log('click')})
// 订阅事件计算count值
// Rx.Observable.fromEvent(btn, 'click').scan(count => count + 1, 0).subscribe(()=>{console.log('click')})
// 控制事件的防止抖动 在一秒中只能点击一次
// Rx.Observable
//   .fromEvent(btn, 'click')
//   .throttleTime(1000).scan(count => count + 1, 0)
//   .subscribe(count => {console.log(`Clicked ${count} times`)})
// map获取值
// Rx.Observable.fromEvent(btn, 'click').throttleTime(1000)
//   .map(event => event.clientX)
//   .scan((count, clientX) => count + clientX, 0)
//   .subscribe(count => {console.log(count)})