// 将print 消息发送给字符串 让字符串打印消息
"hi ho, Io" print

// clone Object 对象把克隆后的值 创建一个Hello的对象 :符号代表现在是一个创造的操作
Hello := Object clone
// 给hello对象的 创建一个desc的槽 并且赋值
Hello desc := "take you to place"

// 给一个未创建的属性 赋值一个数据会报错
/**
 * Exception: Slot nonexitingSlot not found. Must define slot using := operator before updating.
  ---------
  message 'updateSlot' in 'Command Line' on line 1
 */
// Hello nonexitSlot = "undefinedInfo"

// 给对象发送指令 获取对应槽的内容
Hello desc
// 获取一个对象的类型
Hello type
// 获取一个对象所有的槽
Hello slotNames

// 给一个类型 发送克隆的指令 得到一个对象
yes := Hello clone
// 给一个对象 同样可以发送 克隆的指令 得到一个对象
no := yes clone

// 定义一个方法
method("hellow" println)

// 把方法 创建到一个类型的插槽中去
Hello hello := method("hellow" println)
// 让这个类型 克隆出来的对象 获取这个插槽的内容 若对象本身没有这个插槽 会向上查找
yes hello

// 查看一下对应插槽的内容
yes getSlot("hello")
// 查看一下原型上的内容
yes proto

// 查看主命名空间 可以看到当前内存中 声明了哪些对象
Lobby