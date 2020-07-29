# mac安装nvm

## 下载报错
```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```
::: danger ERROR
Failed to connect to raw.githubusercontent.com port 443: Connection refused
::: 

## 报错原因
域名的 DNS 解析被污染，导致DNS 解析过程无法通过域名取得正确的IP地址。

## 解决报错
- 打开 [https://www.ipaddress.com/](https://www.ipaddress.com/) 输入访问不了的域名
- 查询之后可以获得正确的 IP 地址
- 在本机的 host 文件中添加对应域名和IP

```js
199.232.68.133 raw.githubusercontent.com
199.232.68.133 user-images.githubusercontent.com
199.232.68.133 avatars2.githubusercontent.com
199.232.68.133 avatars1.githubusercontent.com
```

## nvm使用

```sh
# 如果命令行输入 `nvm` 提示找不到命令, 需要添加如下内容到 `~/.zshrc `文件
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

source ~/.zshrc 

# 安装并使用最新稳定版
nvm install stable

# 查看长期支持版
nvm ls-remote --lts   

nvm current

# 设置默认版本
nvm alias default 12
```

