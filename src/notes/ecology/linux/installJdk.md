---
title: Linux下安装jdk
icon: 
date: 2023-10-10
article: true
sticky: false
star: false
timeline: false
category:
  - 笔记
tag:
  - Linux
  - Java
---

## 一、在/usr/local/目录下创建java目录

```sh
mkdir /usr/local/java
cd /usr/local/java
```
## 二、下载jdk

JDK1.8官网下载地址：https://www.oracle.com/java/technologies/javase/javase8u211-later-archive-downloads.html

放到/usr/local/java目录下，并解压

```sh
tar -zxvf jdk-8u291-linux-x64.tar.gz
```

## 三、设置环境变量

输入命令配置环境变量

```sh
sudo vim /etc/profile
```

在编辑模式下(按i键或者insert键进入编辑模式)，在profile文件的最后加上如下配置： 

```sh
export JAVA_HOME=/usr/local/java/jdk1.8.0_321
export PATH=$JAVA_HOME/bin:$PATH
export CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar
```

按Esc退出编辑模式，再按**Shift + :** 输入**wq** 保存并退出

修改完成后输入命令重新加载配置文件

```sh
source /etc/profile
```

## 四、使用命令查看是否修改安装成功

```sh
java -version
```

## 五、参考文件
<PDF url="/pdf/linux_install_jdk.pdf"/>