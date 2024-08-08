![](https://pic.imgdb.cn/item/64cde48a1ddac507ccdd6be8.png)

# 日常-05：了解linux

> `难度系数：普通`
>
> **你使用过哪些操作系统？windows.linux,android,macos······**

## 什么是Linux

`linux`是一款开源的类`unix`操作系统,`lunux`英文解释为`linux is not unix`,`linux`是由`Linus`受`unix`和`minix`思想启发用C语言写的，`linus`只是写了`linux`的内核，后来，无数人对`linux`进行了维护和扩展，`githug`上显示的贡献者![](https://pic.imgdb.cn/item/64cddc6b1ddac507ccc8d0d6.png)



## 安装Linux

要想了解linux，肯定要安装一个Linux玩玩，推荐以下方式安装⚙️⚙️⚙️

* [安装 WSL | Microsoft Docs](https://docs.microsoft.com/zh-cn/windows/wsl/install)(可以搭配vscode,比较好用)
* 使用[VMware Workstation Player | VMware | CN](https://www.vmware.com/cn/products/workstation-player.html)安装虚拟机
* 购买服务器，腾讯云，阿里云，华为云等等（有学生优惠:blush:）

## 学习Linux

### 什么是终端

终端是与计算机系统相连的一种输入，输出设备，通常离计算机较远，是一种人与计算机交互的接口。

早期的终端是一种叫做电传打字机的东西，在早期，计算机是比较大型的，有一整个书柜那么大，一个计算机对应一个用户是比较浪费的，为了提高计算机的使用效率，`unix`之父设计了一个能够支持多用户进行操作的操作系统，也就是`unix`，实现一台计算机供给多个用户使用。当时，用户是通过电传打字机（有键盘和纸带）来与计算机进行交互，用户通过键盘向计算机输入，计算机把信息输出到纸带上。

![陪伴我们走过五十年的键盘](https://pic.imgdb.cn/item/64c4a2511ddac507cc001eb3.jpg)

​																												（电传打字机）

现在的终端：现在已经人手一台计算机，以一台台式机为例，终端输入设备有鼠标，键盘:keyboard:，麦克风:microphone:；终端输出设备有显示器:tv:，扬声器:loudspeaker:。

但是，我们现在所说的终端一般不是指物理终端，而是指虚拟终端（终端模拟器），在`windows`下`win+R`,输入`cmd`打开终端，在`Linux`中`Ctrl+Alt+t`打开终端，`Ctrl+d`关闭终端。

我们可以在终端模拟器上输入命令，然后终端模拟器会输出信息。

![image-20240715144956167](https://pic.imgdb.cn/item/64c4a22b1ddac507ccffdd04.jpg)

​																									（Linux下的终端）

### 什么是shell(壳)🤔

> **在计算机科学中，shell俗称”壳“（区别于“核“，Linux内核）。**
>
> **简单来说shell就是一个将用户或应用程序输入的命令翻译成Linux内核理解的语言交给linux内核处理，然后将Linux内核的执行结果返还给应用程序或用户的程序。**

shell是一种用C语言写的程序，是用户使用Linux的桥梁，shell既是一种命令语言（也就是我们平时使用的Linux命令），也是一种程序设计语言（shell脚本）。

shell 指 “提供给使用者使用界面” 的软件，即 Command Interpreter - 命令解析器。shell 接收用户或者其他应用程序的命令，然后将这些命令转化成内核能够理解的语言并传递给内核，内核执行命令完成后，再将执行结果返回给用户或者应用程序。

 shell 是包裹在操作系统 外层 的一道程序，负责外界与 Linux “内核” 的交互，但它隐藏了操作系统底层的具体细节，就像是 Linux 内核的一个 “外壳”，所以 shell（壳）的名称也由此而来。

shell不止一种，历史长河中有许多种shell

* Bourne shell(简称sh):第一个shell
* C shell（简称csh):由于语法和C语言类似得名
* Bourne Again Shell（bash):对sh的增强版

Linux默认使用的是bash,只要我们学会使用bash，就能快乐地使用任何一个Linux发行版:blush:

### 终端和shell的关联和区别

终端是人机交互的一个接口，提供一个界面给我们输入命令，然后把命令交给shell。

shell会翻译命令，然后交给Linux内核，然后再把内核的执行结果交给终端，终端再显示出来。

当我们打开终端时，shell也会启动，操作系统会将终端和shell关联起来，我们在终端输入命令，shell负责解析命令。

### 学会用命令行

在windows中，大家都是用图形化的界面进行交互，在Linux也可以使用图形化的界面进行交互，但是，当你是远程链接的时候，使用图形化的界面就比较复杂，所以使用命令行进行交互是十分有必要的，这也有助于我们学习Linux:smile:.

* [40个最常用的Linux命令行大全 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/420247468)

* [45 个常用Linux 命令，让你轻松玩转Linux！ - Maple~ - 博客园 (cnblogs.com)](https://www.cnblogs.com/kuangtf/articles/16353162.html)

* 这些命令也不需要完全记下来，用多了就会了，不会的可以查。

* 了解一下”一切皆文件“的Linux思想以及Linux的文件系统层次

  [【计算机学习的第 0 课】2. 文件系统层次标准(FHS)_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1aY41187vg/?spm_id_from=333.999.0.0&vd_source=eaf1f6e0ac8871345d54cff94e445d4f)

* 了解一下文件权限🤔，并尝试修改

* 如何安装软件，使用apt或者yum

### 如何在终端写程序

在Linux中，也可以像在Windows中一样下载各种IDE写程序，但是在终端中如何写程序呢，下面以c语言为例，简单介绍一下

**step1  创建.c文件**

```
linux > touch test.c
```

**step2 编辑**

在IDE中，集成了IDE给我们使用，那么我们在终端中使用什么编辑器呢，推荐使用`vim`,`neovim`等等

以`vim`为例，首先，我们要下载vim

```
linux > sudo apt install vim
```

然后用`vim`打开`test.c`

```
linux > vim test.c
```

然后编辑写程序✏️，`vim`和我们平常的编辑器有点不一样，比较难上手，使用熟练了可以提高效率:muscle:。

* [Linux vi/vim | 菜鸟教程 (runoob.com)](https://www.runoob.com/linux/linux-vim.html)
* [编辑器 (Vim) · the missing semester of your cs education (missing-semester-cn.github.io)](https://missing-semester-cn.github.io/2020/editors/)

**step3 编译**

当我们写完了一个简单的`test.c`后，我们需要手动进行编译等工作（不像IDE那样用鼠标点几下就可以运行了）

我们需要下载`gcc`（c编译器）

```
linux > sudo apt install gcc
```

 进行编译等工作，把源文件变成可执行文件

```
linux > gcc test.c
```

默认生成的可执行文件名是`a.out`,你也可以指定生成的文件名，`gcc`还有一些参数选项,有兴趣可以上网查看:mag:

最后运行程序

```
linux > ./a.out
```





## 提交方式

不用提交





## 出题者Q&A方式

QQ：239148349

邮箱：LLP_PLL@outlook.com