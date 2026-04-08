<!--
 * @Description: 这里存放序列图的plantUML实现
 * @Author: yangrongxin
 * @Date: 2026-03-31 11:17:01
 * @LastEditors: yangrongxin
 * @LastEditTime: 2026-04-07 17:31:53
-->

# 序列图的实现

## demo1

序列图的简单实现。
Alice 向 Bob 发送 Hello，得到 ok 返回。

```plantuml
@startuml
Alice->Bob : Hello
return ok
@enduml
```

## demo2

不同的uml语言之间的复用 - 有问题估计现在已经不被支持了。

```plantuml
@startdef(id=macro_def_id)
Alice -> Bob : hello1
@enddef

@startuml
!includedef macro_def_id
Alice -> Bob : hello2
@enduml
```

## demo3

尝试解析PDCA的流程

```plantuml
@startuml
P -> D : ABSD
return 功能开发完成
D -> C: 功能点回归
return 测试完成发布
C -> A: 发布之后运维
return 发布之后进入运维有问题修复
@enduml
```


## demo4

不使用return来定义返回消息，而使用箭头来进行定义。

```plantuml
@startuml
Alice -> Bob : hello1
Bob --> Alice : ok
@enduml
```

## demo5

声明参与者，声明在序列图上的几种不同类型的参与者

order 属性可以改变参与者的显示顺序

#color 属性可以改变参与者的颜色

create 参与者名称：可以创建一个自定义的参与者，这个创建的参与者需要定义在需要使用它的序列图之前

```plantuml
@startuml
participant Participant as Foo order 2
actor Actor as Foo1 order 1 #yellow
boundary Boundary as Foo2
control Control as Foo3
entity Entity as Foo4
database Database as Foo5
collections Collections as Foo6
queue Queue as Foo7

Foo -> Foo1 : To actor
Foo -> Foo2 : To boundary
Foo -> Foo3 : To control
Foo -> Foo4 : To entity
Foo -> Foo5 : To database
Foo -> Foo6 : To collections
Foo -> Foo7: To queue
create Foo8
Foo -> Foo8 : To children
@enduml
```

## demo6

给自己发消息，不同的方向代表不同的消息呈现。

autonumber 初始值：代表给消息自动加上编号，没有初始值的时候默认从1开始，有初始值的时候从初始值开始。

```plantuml
@startuml
autonumber 15
Alice -> Alice : 这是一个自己调用自己的回调
Alice <- Alice : 这是一个自己调用自己的回调，反方向
@enduml
```


## demo7

标题以及页脚的定义

header 属性可以定义页面的标题

footer 属性可以定义页脚

title 属性可以定义标题

newpage 创建新的页面

```plantuml
@startuml

header Page Header
footer Page %page% of %lastpage%

title Example Title

Alice -> Bob : message 1
Alice -> Bob : message 2

newpage

Alice -> Bob : message 3
Alice -> Bob : message 4

@enduml
```

## demo8

组合消息 - 画个框把内容放在一起。组合消息的作用把放在一起的功能框在一起。

alt/else: alt画框，else展示一个分界线。

opt、loop、par、break、critical 子标签: 生成对应名称的框。

group 框名 [框的子标签名]: 画框同时支持自定义框名。

```plantuml
@startuml
Alice -> Bob: 认证请求
alt 成功情况
Bob -> Alice: 认证接受
else 某种失败情况
Bob -> Alice: 认证失败
group 我自己的标签 [我自己的子标签]
Alice -> Log: 开始记录攻击日志
loop 1000次
Alice -> Bob: DNS 攻击
end
opt 测试opt
Alice -> Log: 测试opt内容
end
par 测试par
Alice -> Log: 测试par内容
end
break 测试break
Alice -> Log: 测试break内容
end
critical 测试critical
Alice -> Log: 测试critical内容
end
Alice -> Log: 结束记录攻击日志
end
else 另一种失败
Bob -> Alice: 请重复
Alice -> Bob: 说明现在的情况
end
@enduml
```

## demo9

note left: 在当前序列的左边增加一个注释

note right: 在当前序列的右边增加一个注释

note over Bob: 在 Bob 的序列图上增加一个注释


```plantuml
@startuml
Alice -> Bob: hello
note left: this is a first note

newpage

Bob -> Alice: ok
note right: this is a second note

newpage

Bob -> Bob: 自己调用一下自己
note over Bob
12321312
这是多行信息的展示
end note
@enduml
```

## demo10

文本使用 \n 进行换行

段落之间使用 ||60|| 或者 ||| 增加间距

使用 autoactivate on 来生成参与者的生命线，会根据你的参与者之前的消息关系自动进行对应的生成。

```plantuml
@startuml

autoactivate on
Alice -> Bob: hello\nthis is a new line\na new line
Bob --> Alice: ok
||60||
Alice -> Bob: hello\nthis is a new line\na new line
|||
Bob --> Alice: ok

@enduml
```

## demo11

软件工程活动的定义

```plantuml
@startuml
participant plan as P order 1
participant do as D order 3
participant check as C order 5
participant action as A order 7

P -> D : 计划完成到编码
D -> C : 编码完成到测试
C -> A : 测试完成到验证

newpage

create Doc order 2
P -> Doc : 文档化及复审
Doc -> D : 基于复审后的文档进行实现
Doc -> A : 实现之后进行演化

newpage

@enduml

```
## demo12

apisix 访问流程

生命线的激活与取消 activate / deactivate + 实体名称

```plantuml
' @startuml

' ' title 访问流程

' ' participant client as C
' ' participant router as R
' ' participant service as S
' ' participant upstream as U

' ' C -> R : 客户端通过链接匹配到路由
' ' R -> S : 路由匹配到对应的服务
' ' S -> U : 服务调用对应的上游后端服务
' ' U --> C : 上游服务返回具体的服务信息



' @enduml

@startuml
title APISIX 请求处理流程（含消费者）

participant "Client" as C
participant "APISIX Gateway" as G
participant "Consumer (身份)" as Con
participant "Upstream Server" as U

== 请求进入与身份识别 ==
C -> G : 发起 HTTP 请求
activate G

G -> G : 1. 匹配 Route (根据 URI、Host 等)
G -> Con : 2. 执行认证插件 (key-auth, jwt, etc.)
activate Con
Con --> G : 3. 返回认证结果 + 消费者ID
deactivate Con

alt 认证失败
    G --> C : 返回 401/403 未授权
else 认证成功
    G -> G : 4. 继承 Consumer 上的插件配置\n(如限流、允许的API范围)
    G -> G : 5. 若关联了 Service，继承其配置
    G -> G : 6. 执行所有适用的插件\n(全局、Route、Service、Consumer)
    G -> G : 7. 根据负载均衡选择 Upstream
    G -> U : 8. 转发请求 (添加 X-Consumer-Username 头)
    activate U
    U --> G : 9. 上游返回响应
    deactivate U
    G -> G : 10. 执行响应阶段插件
    G --> C : 11. 返回最终响应
end
deactivate G

@enduml
```