# 基础的输入输出
puts 'hello world'
language = 'Ruby'
puts "hello #language"
puts "hello #{language}"
language = 'my Ruby'
puts "hello #{language}"

# 纯面向对象的实现
puts 123.class
puts 'zhangsan'.class
# puts 4.methods

# 条件判断
puts 'x != 4' unless x == 4
puts 'x == 4' if x == 4

x = x + 1 while x < 10
puts x
x = x - 1 until x == 1
puts x

# 注意 除了 nil 和 false 其他的都是true
puts 'this is true' if 0
puts 'this is true' if false
puts 'this is true' if nil

# 带有类型检查，两个不同类型的对象 会报错
# 4 + 'four'

# 动态类型 只有在执行代码的时候才进行检查
# def add_them_up
#   4 + 'four'
# end
# add_them_up

# 鸭子类型
i = 0
puts i
a = ['100', 100.0]
puts a
while i < 2
  puts a[i].to_i
  i = i + 1
end