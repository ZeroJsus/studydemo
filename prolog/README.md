<!--
 * @Description: insert description
 * @Author: yangrongxin
 * @Date: 2024-09-12 15:32:29
 * @LastEditors: yangrongxin
 * @LastEditTime: 2024-09-12 15:39:31
-->
# 安装运行 prolog
mac11 不支持使用 prolog 进行安装

# 使用docker 进行安装
docker run -it swipl # 在当前终端执行 swipl
docker run -it -v $(pwd):/prolog swipl # 在终端执行 swipl 并且挂载文件
  ?- working_directory(_, '/prolog'). # 将当面的工作目录切换到 挂载的目录
  ?- [fileName]. # 然后使用对应的文件名称 就可以完成加载
  ?- ['/prolog/fileName.pl']. # 如果不切换工作目录 可以直接指定对应的目录文件进行执行 