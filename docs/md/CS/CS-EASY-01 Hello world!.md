![标题](./img/CS.PNG)

# CS-EASY-01 Hello world!

> "你好，世界！"

## 简单题总述

在“计算机系统”方向的简单题部分，你需要做以下的准备：

- 学习过“日常基础”的Linux操作部分
- 在个人电脑上拥有Linux系统（wsl、虚拟机等）
- 在Linux系统上拥有ide软件（vim、vscode，这不是必要的，但是入门时使用这类软件可以节省较多时间）
- 对C语言有过了解或者抱有较高的兴趣

计算机系统方向提交总述：

- 对于每一个题目，你需要提交包含：
  - 一份回答该小节问题的文字说明文件，要求使用Markdown语言进行排版
  - 题目中要求提供的可执行程序或代码文件
- 每一题请提交对应的github的url链接。

准备万全，下面，让我们开始进行吧。

## 计算机语言

计算机语言（Computer Language）指用于人与计算机之间通讯的语言。计算机语言是人与计算机之间传递信息的媒介。计算机系统最大特征是指令通过一种语言传达给机器。为了使电子计算机进行各种工作，就需要有一套用以编写计算机程序的数字、字符和语法规划，由这些字符和语法规则组成计算机各种指令（或各种语句）。这些就是计算机能接受的语言。具体而言，计算机语言可以大致分为“机器语言”、“汇编语言”、“高级语言”。而通过编译技术，就可以让容易编写的高级语言变成容易让机器理解的二进制程序。你可以通过自学了解计算机和计算机语言的发展史，对先人的理解可以帮助你树立一个更好的计算机视角。

##  第一个程序

创建一个新的文件hello.c,输入以下内容

```c
#include <stdio.h>

int main() {
    printf("Hello, world!");
    return 0;
}
```

并在终端中输入`gcc hello.c`编译这个程序，并尝试运行由此生成的exe文件，你会得到以下结果：

`Hello, world!`

那么，**程序当中的每一行究竟是什么含义呢？**

请参考资料自主进行C语言的**基础语法学习**,在学习掌握包括但不限于基础程序结构、库的调用、变量声明及使用、循环结构（for、while）、分支结构（if、if...else）等。了解什么是“面向过程编程“和”面向对象编程“。回答下列问题：

1. 高级计算机语言与低级计算机语言，各有什么优劣，你更喜欢哪一类计算机语言？
2. 尝试解读`hello.c`中每一行的内容。
3. 删去该程序的哪一行不会影响运行结果？
4. int类型是计算机存储什么元素的方式？为什么main函数要使用int进行声明/定义？
5. 请调整上述程序的内容，使其输出内容改为`Hello gilmmer!`并附上运行截图

## 基础语法运用

接下来，让我们进行基础语法的学习验收部分~

情景如下：

小明是一个黑客大神（大嘘），他喜欢采用最朴素的盗号方式——“验证码发我一下”。

现在，小明想要编写一个程序，实现“盗号自动化”具体要求为：

1. 运行程序后仅输出一遍`Show me your code,please.`，然后等待用户输入一串数字，以回车结束。

2. 如果输入的内容为6位数字，则程序输出`I am super hacker!`并结束程序。

3. 如果输入的内容不足或多于六位，则程序输出`Fake code!`并要求用户重新输入直至验证码为六位数字。

以下是粗心的小明写出的C语言程序源代码，请你修改其中的内容使其能够满足他的需求，助力他成为超级黑客！

```c
#include <cstdio>

int mian() {
    short code;
    for(true){
		printf("Show me your code,please.")；
        scanf("%d",code);
        if(code >= 100000 || code <= 999999)printf("I am super hacker!");
        return 0;
        else printf(Fake code!);
    }
    return 0;
}
```

## 课后题

在说明文档之外，请提交一份C语言代码，要求编译后的程序实现**输入两个整数m,n，输出它们的最大公约数。其中0<m,n<2^31**。



> 本题出题人：奶绿丶（单艺豪） QQ：3073494764