# 定义事实 -- 使用终端加载对应的文件
likes(wallace, cheese).
likes(grommit, cheese).
likes(wendolene, cheese).

friend(X, Y) :- \+(X = Y), likes(X, Z), likes(Y, Z).