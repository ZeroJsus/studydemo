var Rx = require('rxjs/Rx');

function $$(item) {
  return document.querySelectorAll(item).length != 1
    ? document.querySelectorAll(item)
    : document.querySelectorAll(item)[0];
}

// 可观察对象的设置以及订阅可观察对象的事件
let btn = $$('button');


/* 一个基本得可订阅对象得创建以及订阅得过程 */
// 定义一个可观察对象 （创建）
// var observable = Rx.Observable.create(function (observer) {
// 	// 定义可观察对象的（执行）
// 	observer.next(1);
// 	observer.next(2);
// 	observer.next(3);

// 	try {

// 	} catch (e){
// 		observer.error(e)
// 	}

// 	// 进入微执行队列
// 	setTimeout(() => {
// 		// 完成对象观察得方法
// 		observer.complete();
// 		observer.next(4);
// 	}, 1000)
// })

// // 订阅这个可观察对象 （订阅）
// console.log('just before subscribe')
// observable.subscribe({
// 	// 每次触发一次next方法调用得函数 类似es6 generator
// 	next: x => console.log('got value ' + x),
// 	// 在观察一个对象得时候发生错误 需要在观察者对象中定义error方法
// 	error: err => console.error('somthing wrong occurred： ' + err),
// 	// 完成对一个对象得观察
// 	complete: () => console.log('done')
// })
// console.log('just after subscribe')

// var observable = Rx.Observable.from([10, 20, 30])
// var subscription = observable.subscribe(x => console.log(x));
// console.log(subscription)
// subscription.unsubscribe();
// console.log(subscription)

/* 使用后续传递风格CPS 来使项目代码变成等待然后之后执行 */
// var person = {}
// var bank = {
// 	funds: 0,
// 	receiveDepositFrom: function(person) {
// 		person.funds = 0;
// 	}
// };
// console.log(person.funds);
// (function work(callback) {
// 	setTimeout(()=>{
// 		callback(100)
// 	}, 1000)
// 	console.log('执行CPS前')
// })(function (amount) {
// 	person.funds = amount;
// 	console.log(person.funds);
// 	bank.receiveDepositFrom(person)
// 	console.log(person.funds);
// 	console.log('执行CPS')
// })


var observable = Rx.Observable.interval(1000);
var subscription = observable.subscribe(x => console.log(x));
subscription.unsubscribe();