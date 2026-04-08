# 类图的实现

一般用于 L4的code图，但是由于是静态图，不能很好的体现业务，所以需要配合其他图一起使用。

## demo1

基础语法

```plantuml
@startuml

abstract abstract抽象
abstract class "abstract class抽象类"
annotation annotation注解
class class类
class class_stereo <<stereotype>>
entity entity实体
enum enum枚举
exception exception异常
interface interface接口
metaclass metaclass元类
' 定义一套用于实现的方法
protocol protocol协议
stereotype stereotype元类型
' 用于支持 C语言 或者 Rust 的相同类型 进行的设计
struct struct结构

@enduml
```

## demo2

实现一个 protocol

```plantuml
@startuml
' 定义一个用于控制设备的协议
protocol DeviceControlProtocol {
    + connect()
    + authenticate(pwd: String)
    + sendData(data: byte[])
    + disconnect()
}

' 表示 TcpDevice 实现了这个协议
class TcpDevice {
    + connect()
    + authenticate(pwd: String)
    + sendData(data: byte[])
    + disconnect()
}
TcpDevice .|> DeviceControlProtocol
@enduml
```


## demo3

类之间的关系实现

.. 代表虚线，-- 代表实线，> 代表实心箭头，|> 代表空心箭头，* 代表菱形，O 代表空心菱形。

```plantuml
@startuml
' 继承，箭头指向父元素。 空心实线
Class01 --|> Class02: 扩展/继承/泛化
' 实现 空心虚线
Class03 <|.. Class04: 实现

' 组合，部分指向整体。实心菱形
Class05 *-- Class06: 强关联关系
' 聚合，部分指向整体。空心菱形
Class07 o-- Class08: 弱关联关系

newpage

' 依赖是使用关系，箭头指向依赖的类。实心虚线
Class09 ..> Class10: 依赖
' 依赖性？
Class11 --> Class12: 依赖性
' 关联关系，一对多，一对一，多对多这种。直线
Class13 -- Class14: 关联关系
' 表示一对多的关联关系 > 可以在线上增加一个方向箭头
Class15 "1" -- "*" Class16: 关联关系 >
@enduml
```

## demo4

给类增加方法名称

```plantuml
@startuml

class Dummy {
  String data
  void methods()
}

class Flight {
  flightNumber : Integer
  departureTime : Date 
}

class Dummy1 {
  {field} A field (despite parentheses)
  {method} Some method
}

' 两种方法的声明方式不能复用
' Wallet: addBalance(amount: int)
' Wallet: balance int
@enduml
```

```plantuml
@startuml

Wallet: addBalance(amount: int)
Wallet: balance int

@enduml
```

## demo5

增加一个泛型

```plantuml
@startuml

class Foo<? extends Element> {
  int size()
}

@enduml
```

## demo6

增加一个包的概念。如果一个结构包装了一个类，那么这个结构多半是作为包进行使用的。

```plantuml
@startuml

' 增加一个包的背景色
package "Classic Collections" #DDDDDD {
  Object <|-- ArrayList
}

' 一个多层级的包
package net.sourceforge.plantuml {
  Object <|-- Demo1
  Demo1 *- Demo2
}

' 一个多层级的包，并且每个包中都有对应的类元素
package bd {
  class Config
  package user {
    class User
    package manage {
      class Manage
    }
  }
}

@enduml
```