/*
 * @Description: insert description
 * @Author: yangrongxin
 * @Date: 2025-02-07 11:08:35
 * @LastEditors: yangrongxin
 * @LastEditTime: 2025-02-18 15:44:48
 */

interface ISystemTheme {
  themeColor?: "dart" | "light"
}

const systemColor: ISystemTheme['themeColor'] = undefined;

console.log('systemColor', systemColor)

const getUserNames = async () => {
  let userName = 'zhangsan';
  console.log('userName', userName)  
  return userName;
}

const str = "Hello!";
for (const s of str) {
  console.log(s);
}

const invokeFunc = (
  _funName: string
) => {
  console.log('invoke', _funName)  
}

const sayHello = (
  _hello: string
): string => {
  if (
    _hello === 'hello'
  ) {
    return _hello
  } else {
    console.log('hello world')
    return 'no hello'
  }
}

sayHello('hello world');

const person: any = {}

invokeFunc(person.name)

class testClass {
  name: string;

  constructor() {
    this.name = 'hello world'
  }
  
  getTestName() {
    return function() {
      return this.name + '123'
    }
  }
}

try {
  throw undefined;
} catch (e: unknown) {
  console.log('e', e)
}

const score: number = 6;
switch(score) {
  case 0: console.log('event');
  case 1: console.log('odd'); break;
}

// noUncheckedIndexedAccess
interface EnvironmentVars {
  NAME: string;
  OS: string;
  // 声明当前接口中 其他的未定义的类型 也是 string 类型
  [propName: string]: string;
}

declare const env: EnvironmentVars;
const sysName = env.NAME;
const os = env.OS;
// 触发接口中的额外声明 类型为string 
// 打开配置 noUncheckedIndexedAccess 后 ts会给变量增加一个 undefined 的类型
const nodeEnv = env["NODE_ENV"];

class Album {
  setup() {
    console.log('download')
  }
}

class SharedAlbum extends Album {
  override setup() {
    console.log('download album')
  }
}

// 需要es6的语法
// const arr = [1,2,3,4]
// arr.find(_fi => _fi > 1);
// export {
//   await getUserNames
// }

function verifyGender(gender: string) {
  if (
    gender === '男'
  ) {
    {
      verify: true
    }
  }
}

function fn(n: number) {
  if (
    n > 5
  ) {
    return true
  } else {
    return false
  }
  // 此处代码属于无法访问的代码
  return true
}

export default await getUserNames;