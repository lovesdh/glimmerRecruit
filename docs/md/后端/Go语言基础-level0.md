![Web后端](https://pic.imgdb.cn/item/64fdbcf1661c6c8e543bdfd9.png)
# Go语言基础-level0

> `难度系数`：简单
>
> 本文档同时适用于微光工作室后端go语言方向招新与光点计划语言基础，旨在让同学们对go语言形成初步的印象，能使用go语言完成一些开发任务。

![Google](https://golang.google.cn/images/go_core_data_case_study.png)

## Why Golang?

> It’s because “go domain” has been registered by Walt Disney and so Go creators couldn’t use it. 
> So, they have decided to use golang for the domain name. Then the rest came.
>
> Also, it’s harder to search things on search engines just using the word Go. Although, Rob Pike is against this idea but I disagree. Most of the time, for the correct results you need to search for golang.

为什么叫golang？因为go.org被注册了，也不贵才1698万，所以只能用golang.org啦（

## Why Go?

正经的说，Go是一门非常有意思的计算机语言。官方的一段定义比较凝练，直接看英文版吧：

> Go is a concurrent open source programming language developed at Google. Combines native compilation and static types with a lightweight dynamic feel. Fast, fun, and productive.

嗯哼，有没有get到google的点？下面再来几个case learning，应该就能总结出这个问题的答案了。

### Case 1

Lumine是个心浮气躁的小姑娘。她刚向工作室的YEWPO爷爷请教了C语言，学习了C的基本语法，觉得自己已经成为了Legendary Grand Master of C。于是她又去学习了python，顿时觉得C的语法实在是麻烦至极。可是她并不适应python的动态性和较低的运行效率，要是有一门语言能够兼顾python一样的简单语法和开发效率、C一样的静态特性和运行效率就好了。

### Case 2

Lumine听说Java有严谨的设计风格和标准化的面向对象设计，于是又去学习了Java。但是一个简单的echo程序就把她劝退了：

```java
import java.util.Scanner;
public class EchoProgram {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("请输入内容：");
        String input = scanner.nextLine();
        System.out.println("您输入的内容是：" + input);
        scanner.close();
    }
}
```

编写时要会包、类、方法、对象、实例...一大堆概念，要区分哪些对象是类型、实例、接口还是枚举，运行的时候还要使用什么Java虚拟机，实在是太麻烦了。但是Lumine又想玩java的自动内存管理和动态运行时机制，要是有心智负担更小、又是编译型、又能自动管理内存的语言该多好。

### Case 3

2022年招新题说到Lumine和Cloud Retainer要开发一个游戏叫Minecraft。可是她们俩的代码风格不同，连缩进风格都不一样，要是能找一个统一代码规范、自动解决格式问题的语言就好了。而且，她们写出的游戏永远都是一核爆满多核围观，语言使用并发麻烦又低效，要是能有语言在语句层次上支持一种高效并发就好了，说不定可以给架构的实现一些崭新的思路？

---

### # Task 1.

结合互联网信息以及上面三个cases，你认为golang的定位是怎么样的？

## Just GO!

下面，我们就简单学习一下golang的语法，实现下面的小任务吧：

### # Task 2.

> 实现一个叫reverse的程序，实现将多个命令行参数按倒序输出。需完成编译并以可执行文件的方式运行。
>
> 例如：./reverse a1 b2 c3
>
> 输出：c3 b2 a1

你可能需要学习：

- Go语言基本语法
- Go语言开发环境的配置
- Go语言IDE和编译器用法等

完成要求：

- 实现要求的程序，在题解中附上代码和编译、运行效果截图
- 附上你的解决思路、遇到的问题等

Tips：

- [Go 语言之旅 (go-zh.org)](https://tour.go-zh.org/welcome/1)
- [前言 · Go语言圣经 (studygolang.com)](https://books.studygolang.com/gopl-zh/)
- [JetBrains GoLand：不只是 Go IDE](https://www.jetbrains.com/zh-cn/go/)

## Yet Another Minecraft Problem

### #Task 3.

Lumine正在玩Minecraft，她开了一个 $n \times n$ 的方阵，现在她有 $m$ 个火把，分别放在 $(x_1, y_1) \sim (x_m, y_m)$  的位置，没有光并且没放东西的地方会生成怪物。请问在这个方阵中有几个点会生成怪物？

P.S. 火把的照亮范围是：

```
    |暗|暗| 光 |暗|暗|
    |暗|光| 光 |光|暗|
    |光|光|火把|光|光|
    |暗|光| 光 |光|暗|
    |暗|暗| 光 |暗|暗|
```

输入格式：

输入共 $m + 1$ 行。 
第一行为 $n, m$。 
第 $2$ 到第 $m + 1$ 行分别是火把的位置 $x_i, y_i$。 

注：数据保证，$1 \le n \le 100$，$1 \leq m \leq 25$。题目改编自洛谷。

---

回答要求：

- 编写程序，正确处理输入并输出答案。
- 在题解中带上你的代码，附上思路和遇到的问题等。
- 除了切片之外，试试其他的内置数据容器，比如map，了解下基本用法。

Tips：

- 本题旨在让你熟悉用golang去解决一些问题，熟悉切片/数组的使用。
- 如果你觉得比较困难，可以搜索多维数组相关例题，进行一定的了解和练习。
- 在Go语言中，切片和数组不是一种东西，如何理解它们？
- 你的实现方法够优雅吗？能否进行一些修改使你的代码更加简洁优雅？

拓展问题：

- 你了解go的指针吗？go的指针和C语言的指针有什么不同？

---

### 本题题解要求

- 认真完成每个问题下的回答要求，记录你的做题过程，遇到的问题和解决方法等，配以必要的截图和说明；
- 用自己的理解回答问题，可以不完全理解知识点，但一定不要照抄网上资料，不得抄袭代码。

### 需要掌握的知识点

- go语言基础

### Tip

- 善用搜索引擎

### 本题提交方式

>  收件邮箱：glimmer401@outlook.com 
>
>  主题格式： 学号-姓名-考核-后端-go-01
>
>  主题示例：2024090901012-张三-考核-后端-go-01

### 出题者联系方式

> tk_sky
>
> QQ：2071594767
>
> 邮箱：linhanyuan_km@163.com