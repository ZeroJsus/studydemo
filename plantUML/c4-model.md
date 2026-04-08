<!--
 * @Description: insert description
 * @Author: yangrongxin
 * @Date: 2026-03-31 16:44:24
 * @LastEditors: yangrongxin
 * @LastEditTime: 2026-04-02 16:58:30
-->
# c4 model 的实现

## demo1

各类组件的呈现

```plantuml
@startuml
' !include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Container.puml

!include <C4/C4_Container>

title C4 model 组件

' 展示对应的提示 - 颜色代表什么类型的模块
LAYOUT_WITH_LEGEND()

Person(user1, "用户1", "用户描述")
Person_Ext(user2, "用户2", "用户描述")

System(usercenter, "UserCenter", "用户中心")
System_Ext(usersign, "UserSign", "用户注册中心")
Container(management, "Management", "管理服务", "提供用户管理服务")

System_Boundary(usercenter_boundary, "用户中心") {
  Container_Ext(usercenter_management, "Management", "管理服务", "提供用户管理服务")
}

Rel(user1, usercenter_management, "管理", "123")

@enduml
```