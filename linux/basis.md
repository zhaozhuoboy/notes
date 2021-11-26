---
sidebarDepth: 2
tag:
  - article
  - linux
createTime: '2021-11-11 10:22:34'
---

# 基础知识

## 基础

### 发行版本

- RedHat
- Fedora
- CentOS
- Ubuntu   操作界面系统

切换到终端模式

输入 `init 3` 切换到全屏命令行界面

命令行符号  $ 是普通用户     # 是超级管理员用户

普通用户切换到 root 用户

`su - root`

`exit` 退出登录

### 终端

1. 图形终端   在操作系统中的终端软件
2. 命令行终端    黑屏界面
3. 远程终端      使用 SSH VNC 登录远程服务器

### 常见目录介绍

```
/                         根目录
/root                     root 用户的家目录
/home/username            普通用户的家目录
/etc                      配置文件目录
/bin                      命令目录
/sbin                     管理命令目录
/usr/bin/usr/sbin         系统预装的其他命令

```

#### 关机命令  `init 0`

### 帮助命令

- man
- help
- info

man 是 manual 的缩写。

### help 帮助

内部命令使用 help 帮助

`help cd`

外部命令使用 help 帮助

`ls --help`

使用 `type` 区分命令是内部命令还是外部命令


## 文件管理

`pwd` 显示当前的目录名称

`cd` 更改当前的操作目录

`ls` 查看当前目录下的文件

`ls` 的常用参数

```
-l    长格式显示文件
-a    显示隐藏文件
-r    逆序显示
-t    按时间顺序显示
-R    递归显示
```

`ls -l -r` 按文件名逆向显示文件，默认是按文件名排序，可以使用 `-t` 选项按时间顺序显示。 linux 中多个参数可以简写。比如 `ls -lr` 不需要每个选项都加 -

`cd` 切换当前目录

`cd -` 可以回到上一次访问过的目录

### 创建和删除目录

#### 创建目录

`mkdir` 建立一个空目录

`mkdir /a`    在根目录创建一个 a 目录

`mkdir ./a`    . 是当前目录  ./  可以省略    mkdir a

`mkdir b c d`   创建多个目录

**目录已存在，会创建失败**

**创建多级目录**

`mkdir /a`

`mkdir /a/b`

常用参数 **-p** 建立多级目录

`mkdir -p /a/b/c/d/e/f/g`

`ls /a`

`ls -R /a ` **递归查看多级目录，-R 参数要放到前边**

#### 删除目录

`rmdir` 只能删除空白目录，目录下有任何内容都不能删除

`rmdir /a`  会提示失败

__*rm 删除非空目录*__

`rm -r`  删除目录

`rm -r /a`   会提示是否进入目录确认，会一层一层的进入

::: danger 注意
`rm -r -f`  不显示提示直接删除，具有危险性，一定要反复确认参数
:::

### 复制和移动目录

#### 复制文件/目录

**使用方法**

`cp 源目录 目的目录`

`cp -r /root/a /tmp`    把 root 下的 a 目录复制到 /tmp 临时目录中，cp 单独使用时只能复制文件，要复制目录需要增加  -r

**创建文件 touch**

`touch /filea`   在根目录创建一个名为 filea 的文件

`cp /filea /tmp`   将文件复制到 tmp 下

- -v 选项，显示复制过程
- -p 选项，复制后的文件，文件的时间和主人所属用户组都会发生变化，加 -p 选项保留所有信息

#### 移动/重命名 文件

**使用方法**

`mv 源文件(目录)  目标文件(目录)`

`mv /fileb /filec`      将根目录中的fileb 文件重命名为 filec

`mv /filec /tmp`       将根目录中的 filec 移动到 /tmp 文件夹中

`mv /tmp/filec /filed`      移动并重命名

#### 移动目录

1. 首先创建一个目录

`mkdir /dirc`

2. 移动目录

`mv /dirc /tmp`

#### 通配符

- *匹配所有目录或者文件
- ?匹配一个字符 

1. 先创建几个文件名相似的文件 `touch filea fileb filec`
2. 在创建目录名相似的目录 mkdir `dira dirb dirc -p `  创建多个目录  -p 忽略错误提示

`cp file* /tmp`   复制 以file开头的文件

3. 再创建几个文件 `touch fileaa fileab fileabc`

`cp file? /tmp` 问号代表只匹配一个字符，只会把 filea fileb filec 复制到目标位置 

### 查看文本命令

`cat` 文本内容显示到终端

`head`  查看文件开头  默认显示文件开头10行, `head -4 filea`   只显示开头4行

`tail`  查看文件结尾     默认显示文件结尾10行, `tail -4 filea`   只显示结尾4行

常用参数 `-f`  文件内容更新后，显示信息同步更新。常用于查看日志文件

`wc`   统计文件内容信息

`wc -l filea`  查看文件有多少行

其他查看文件命令 `more` `less`

### 打包与解包

打包命令是 `tar`   压缩命令是 `gzip` 和 `bzip2`，经常使用的扩展名是 .tar.gz    .tar.bz2    .tgz .tbz2

`tar` 打包命令

常用参数
- `-c` 打包
- `-x` 解包
- `-f` 指定操作类型为文件

#### 打包

使用方法：

tar cf 打包的文件名 需要打包的目录

`tar cf /tmp/etc-backup.tar /etc`

查看打包的文件信息

`ls -lh /tmp/etc-backup.tar`      h选项是将文件大小展示成可读的 M G 为单位

#### 解包

`tar xf /tmp/etc-backup.tar -C /root`   解包到指定目录


### 压缩与解压缩

可以单独使用 gzip  bzip2 进行压缩和解压缩, tar 命令已经把压缩命令继承进去

#### 压缩

增加 `z` 选项进行 打包压缩

`tar czf /tmp/etc-backup.tar.gz /etc`

**为了方便其他人看到文件名时知道已经进行了压缩所以会使用双扩展名形式  .tar.gz 使用了 gzip 格式压缩**

`tar cjf /tmp/etc-backup.tar.bz2 /etc`

**gzip 与 bzip2 区别**

bzip2 压缩比例更高，需要时间更长。

查看打包信息

`ls -lh /tmp/etc-backup.tar*`

对比两者压缩大小

#### 解压缩

`tar zxf /tmp/etc-backup.tar.gz -C /root`

`tar jxf /tmp/etc-backup.tar.bz2`

