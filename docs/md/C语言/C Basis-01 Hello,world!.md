<img src="https://pic.imgdb.cn/item/64fdc2b6661c6c8e543d9600.png" alt="C.png">

# C Basis-01 Hello,world!

> 1972年，Brian Kernigham用B语言，在计算机上打印出了世界上第一个"Hello,world!"。

## Part 1 第一个程序

初学编程语言时，第一个程序往往都是`Hello,world!`，那就让我们来自己尝试一下吧！

```C
#include <stdio.h>

int main() {
    printf("Hello, world!");
    return 0;
}
```

### task

- 在自己的IDE中成功运行上面的代码，并提交成功运行的截图。

- 谈谈对头文件和主函数的理解。（ps：可以谈谈为什么主函数有那么多种形式，例如为什么int可以改为void，为什么可以有参数也可以没有参数）

## Part 2 为什么我的代码能运行？

当你写下这段代码时，你有没有想过，计算机是怎么将他们从代码变为一个可执行程序，最后将`Hello,world!`打印在了屏幕上？

请借助搜索引擎完成下面的任务。

### **task**

- 了解什么是编译器，并用自己的语言解释他的作用。
- 画图阐释C语言编译的过程，并**解释在每一步过程中编译器都干了什么**。

## Part 3 试试不一样的编译方式？

直接使用IDE编译运行代码可能不太酷，让我们试试使用gcc编译命令运行代码。

1. 下载并安装gcc编译器（如果已经安装请跳过这一步）。
2. 使用gcc指令成功编译运行代码。

> ps：C不止gcc一个编译器，这里仅用gcc演示编译命令，其他的编译器可自行了解。

### task

- 使用gcc指令编译运行你刚刚写的代码。（可能会出现终端闪一下就消失的情况，这是因为程序运行结束后会自动关闭终端，可以在最后加几条`getchar()`语句避免这种情况）
- 写出几条你了解的**其他gcc编译指令**，并演示他们的用途（结合截图）。

## 题目要求

- 回答题目中的问题时，表达自己的想法。
- 有学习过程中自己的理解。
- 以文字和截图的形式，并用`markdown`的格式记录你的完整做题过程
- 请提交PDF文档

## 需要掌握的知识点

- C语言的头文件（标准库）
- 主函数
- C语言的编译过程
- gcc编译命令的使用

## tips

- 善用搜索引擎
- [gcc编译参数](https://www.runoob.com/w3cnote/gcc-parameter-detail.html)
- [gcc编译器安装教程](https://blog.csdn.net/qq_45601448/article/details/109158588)（不一定参考我这篇，能装上就行）

## 本题提交方式

> 收件邮箱：glimmer401[@outlook.com](https://antio2.github.io/Glimmer-Recruit/outlook.com)
>
> 主题格式： 学号-姓名-考核-Cbasis-01
>
> 主题示例：2024090901012-张三-考核-Cbasis-01

## 出题人联系方式

> loafer
>
> QQ：251492435
>
> 邮箱：loafer_e@qq.com