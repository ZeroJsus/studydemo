<!--
 * @Description: insert description
 * @Author: yangrongxin
 * @Date: 2024-09-12 15:32:29
 * @LastEditors: yangrongxin
 * @LastEditTime: 2024-09-17 17:50:49
-->
# 安装运行 erlang
使用docker 安装镜像进行使用

# 运行erlang并且挂载当前的执行目录
docker run -it -v $(pwd):/erlang erlang
挂载后例如basic文件可以使用 c("erlang/basic"). 进行挂载