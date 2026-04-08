<!--
 * @Description: insert description
 * @Author: yangrongxin
 * @Date: 2026-04-01 09:35:58
 * @LastEditors: yangrongxin
 * @LastEditTime: 2026-04-08 09:44:08
-->
# 用例图的实现

## demo1

用例的呈现

```plantuml
@startuml

 
@enduml
```

## demo2

外部参与者的实现

```plantuml
@startuml

:First Actor:
:Another\nActor: as actor2
actor Woman3
actor :Last Actor: as Person1

@enduml
```

## demo3

用例中的多文本描述实现

使用 --(从上往下链接) 或者 -(从左往右链接) 来链接角色与用例

```plantuml
@startuml

actor :Actor:
actor :Actor2:

usecase UC1 as "You can use
several lines to define your usecase.
You can also use separators.
--
Several separators are possible.
==
And you can add titles:
..Conclusion..
This allows large description."

Actor --> UC1 : Use
Actor2 -> UC1 : Use

@enduml
```

## demo4

包的实现

```plantuml
@startuml
skinparam actorStyle awesome

actor :寿险侧-寿险客户: as customer 
actor :北大侧-北大药师: as apothecary
actor :北大侧-北大供应链运营(运营): as bdManage
actor :第三方-药房运营人员(药品供应商): as operation
usecase (用药申请-寿险) as medical
package 本期内容 {
  usecase (供应链派单-家医) as sendOrders
  usecase (处理供应链工单-家医) as supplyChain
}
usecase (药方审方-互医) as medicineReview

customer --> (medical)
bdManage --> (supplyChain)
bdManage --> (sendOrders)
operation --> (supplyChain)
apothecary --> (medicineReview)
@enduml
```


## demo5

继承关系实现 B 继承 <|-- A 实现。

注释通过 note xxx of xxx: content，来给指定的元素增加注释。

```plantuml
@startuml

actor :first:
actor :second:

usecase 购物 as shop
usecase 收费 as pay

second <|-- first
note right of second: second 是 继承 first 进行的实现
pay <|-- shop
note "pay 是继承于 shop 的实现" as n1
(pay) ... n1
n1 ... shop

@enduml
```

## demo6

使用 ..> 或者 <.. 来实现虚线，一样是 . 表示水平关系，.. 表示垂直关系。

```plantuml
@startuml

customer -> (shopping)
(payment) <. (shopping): <<include>>
(payment) ..> (wepay): <<extend>>
(payment) ..> (alipay): <<extend>>

@enduml
```

