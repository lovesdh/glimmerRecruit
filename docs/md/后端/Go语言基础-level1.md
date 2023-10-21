![Web后端](https://pic.imgdb.cn/item/64fdbcf1661c6c8e543bdfd9.png)
# Go语言基础-level1

> `难度系数`：简单
>
> 本文档同时适用于微光工作室后端go语言方向招新与光点计划语言基础，旨在让同学们对go语言形成初步的印象，能使用go语言完成一些开发任务。

![PayPal](https://go.dev/images/go_paypal_case_study_logo.png)

所以学了那么多基础语法，好像Go和其他语言也差不多啊，到底是哪些地方吸引人呢？Lumine知道学习一门语言最好的方式就是学习它的设计思想，而学习设计思想最好的方式当然是学习创始人的语录。那就来点圣人箴言吧！

## Go Proverbs By Rob Pike

### #1. Concurrency Is Not Parallelism

微观地考虑，现代计算机的一个特点就是多核心，现代操作系统的一个特点就是异步；宏观地考虑，我们的宇宙自诞生之初就是多元并行的，更适合用并发的方式去描述它。

这就是我们为什么要学习并发编程的原因。往往，操作并发编程涉及硬件底层支持、操作系统内核机制等复杂耦合，对用户调用和管理具有一定知识门槛和心智负担，且实现相对复杂、性能较差，所以在很长一段时间内代码世界对并发带来的优势并没有实现充分的利用。

而现在我们有了Go。Go语言中定义了关键字`go`，这个非常有意思的关键字能帮助我们启用Go中最重要的特性——goroutine。它用一系列非常有意思的理论（感兴趣的话可以搜索GMP模型）实现了一种轻量级的线程，不仅简单易用，而且性能非常优秀，极大地降低了人们对于并发编程的恐惧，甚至学会了享受它。

回到Rob Pike这句箴言上来。为什么说并发不是并行呢？当然，这是两个不一样的概念，并发只是程序交替执行的一种机制，而并行才是真正不同代码的同时执行。然而真正重要的是，除了概念不同，更要理解概念背后思想的不同。

> Concurrency is a way of structuring your program to make it easier to understand and scalable, and parallelism is simply the execution of multiple goroutines [at the same time].

实现一种更轻量易用的多线程方式，并不仅仅是为了避免一核爆满多核微观的情况。引入更“便宜”的并发，我们可以真正将并发的思想和能力利用起来，重新去架构我们的单线程程序，实现云时代微服务架构更简单、可扩展的需求。

### Task 1.

那就来试试使用goroutine来实现多线程吧。尝试分别不使用并发/使用4个Goroutine并发的方式让程序完成数数操作，从1按顺序输出到100吧。程序框架给你了，简直不要太easy。

```go
package main

var num = 0

func count() { //数数函数都给你写好了，调它就行，你就说贴不贴心
	for num < 100 {
		num++
		println(num)
	}
}

func main() {
    //TODO: 分别使用单线程（不使用并发）、创建4个goroutine的方式完成数数任务

	for {} // 方便观察输出
}
```

> 回答要求：
>
> - 完成上面的任务，分别贴上两种实现方式的代码和输出截图，不引入其他包
> - 多次运行、仔细阅读你的程序的输出，看看输出是不是都是我们期望的那样
> - 为什么会出现这种情况？结合你对并发编程的理解讲讲

你可能需要学习：

- 并发的基本概念，并发编程的基本实现方式
- goroutine的使用方法

Tip:

- [在 Go 中使用并发编程 TuringTuring_InfoQ写作社区](https://zhuanlan.zhihu.com/p/239844778)

### #2. Don’t Communicate by Sharing Memory; Share Memory by Communicating

先不急着解决上一个task你发现的问题，我们看看下一句箴言，这是啥意思？

没错，我们刚刚做的，通过一个全局变量作为被两个goroutine操作的对象，就是Communicate by Sharing Memory。在share memory时，由于并发性，就有可能出现读-写或写-写在效果上同时发生的情况，导致数据被破坏或不同步。事实上，在Task1的例子中，我们需要解决的是一个线程同步的问题，而我们通过引入共享的内存空间，导致同时引入了数据冲突的不确定性因素。

如果我们确实要共享内存，应该怎么做？

### Task 2.

学习golang中sync.Mutex的用法，了解线程同步的一种做法，重新修改Task 1涉及的代码，使之能符合我们最初的期望。

> 回答要求：
>
> - 完成上面的任务，贴上实现的代码和输出截图
>
> - 学习什么是“生产者-消费者”问题。使用信号量或mutex来解决它和各种大型系统的通信和同步问题方便吗？为什么？

你可能需要学习：

- sync.Mutex
- 线程同步的常规方法

Tip：

-  [Go sync.Mutex - 简书 (jianshu.com)](https://www.jianshu.com/p/9e5554617399)

那么为什么Rob让我们Don’t Communicate by Sharing Memory; Share Memory by Communicating？什么叫Share Memory by Communicating？

### Task 3.

学习Go中的channel特性，使用channel来尝试“Share Memory by Communicating”来解决Task1的进程同步问题！

> 回答要求：
>
> - 完成上面的任务，贴上实现的代码和输出截图
>
> - Share Memory by Communicating有什么好处？
>
> - 学习什么是死锁，使用channel也会产生死锁吗？如何避免？
>
> - 另一条Go Proverb 是"Channels orchestrate; mutexes serialize"。你是如何理解的？

你可能需要学习：

- channel的用法
- CSP模型

Tip：

-  [golang 并发编程 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/113507545)

### #3 The Bigger the Interface, the Weaker the Abstraction

什么是接口，什么是抽象？如果你此前学过类似java这样受面向对象理论影响非常深的语言，你可能已经体验了严谨的多态实现和规约。相比于像java这样对面向对象理论的充分实现，go则使用函数式+接口和方法的形式去实现了面向对象的部分特性。

为什么需要抽象性和面向对象？因为世界的本质就是一层层的抽象叠加，我们需要将有关某个逻辑实体的数据和方法组织在一起，从而形成一个独立的对象。通过组合，对象可以实现复用性；通过抽象与封装，可以提取共同特征形成接口，又可以隐藏不必要的内部实现，使代码更接近自然存在，有更好的可维护性和可扩展性。

然而，golang并未选择像Java一样实现全套的面向对象理论。在golang中，没有真正的“class”，也不存在相关的继承等特性。具体来说，golang支持了鸭子式接口和方法两个特性来实现一定的面向对象思想。至于为什么，在工程实践中普遍认为用简单的结构体和函数来实现组合复用和模块化会比复杂的继承和多态关系更有效。下面就动手试试看吧。

### Task 4.

Lumine正在为她的游戏增加氪金商城，有金币Coin和钻石Diamond两种道具。请你帮她实现以下功能：

1. 定义一个接口名为`Item`，其中包含一个方法`GetPrice()`用于获取商品价格（随你定）。
2. 实现金币（`Coin`）和钻石（`Diamond`）结构体，并确保它们都实现了`Item`接口。
3. 在每个结构体中，实现`GetPrice()`方法以返回道具的价格。
4. 创建一批不同的道具。
5. 编写一个函数`CalculateTotalPrice(items []Item)`去循环调用每个道具的GetPrice方法，求出总价格。

> 回答要求：
>
> - 学习go中interface和方法的基本知识，完成上面的任务，贴上实现的代码
>
> - Java中接口的设计不仅需要显示地声明需实现的方法，也要在实现类上显示声明实现的接口。go中的接口设计与这种方式有什么不同？有什么好处？
>
> - 用自己的话谈谈，接口存在的意义是什么？
>

### #4 Errors are Values

error大概是go代码中相比其他语言经常会更多考虑的内容。在很多其他的语言中，错误（errors）往往被表示为异常并使用捕获和异常处理机制来处理。而go中是怎么做的呢？go作为一门开源语言，我们不妨看看它的源代码。

### Task 5.

使用goland IDE或其他方法，查看errors包下有关error定义的代码，理解go中是如何设计error的，并尝试自己定义一种error，在Task 4中`CalculateTotalPrice`函数返回的总价值>648时记录错误提示“have no money error”。

> 回答要求：
>
> - 查阅相关源码，讲讲go中的error是什么样的存在
>
> - 为什么说errors are values？ 
>
> - 和采用单独的异常处理机制（throws, try catch）等实现相比，go为什么要用这种方式实现？



如果你对其他Go Proverbs感兴趣，可以参考[Go Proverbs (go-proverbs.github.io)](https://go-proverbs.github.io/)

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
>  主题格式： 学号-姓名-考核-后端-go-02
>
>  主题示例：2023090901012-张三-考核-后端-go-02

### 出题者联系方式

> tk_sky
>
> QQ：2071594767
>
> 邮箱：linhanyuan_km@163.com

