# Docker Network报错
## 报错信息
::: danger ERROR
could not find an available, non-overlapping IPv4 address pool among the defaults to assign to the network
:::

## 解决
- 使用 `docker network ls` 查看network数量, 最多30个自定义网络?
- `docker network prune` 关闭未使用的网络

## 原因
- 待完善