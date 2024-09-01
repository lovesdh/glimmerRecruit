<img src="https://pic.imgdb.cn/item/64fdc2b6661c6c8e543d9600.png" alt="C.png">

# **C Project-01  Stack**

> 难度系数：简单
>
> 接下来你将正式开始实现计算器，这一部分主要是实现栈和使用栈，请你再开始做题之前阅读关于栈的知识。

## **Part1 Stack**

栈是一种简单有非常重要的数据结构。如图所示，栈是一种后进先出的数据结构，不管是进栈操作还是出栈 操作，都是对栈顶元素的操作。因此，当操作一个栈的时候，必须知道栈顶的位置。同时，也应该知道栈底的地址，即栈在内存中的开始地址。

<img src="https://pic.imgdb.cn/item/64fdd972661c6c8e5441bd37.jpg" alt="XZE`$]TD`}@WWN)~FK4[)GX_tmb.jpg">

### 任务

在此次项目中，我们使用基于动态数组实现的栈。

为此你需要实现栈的定义和以下操作函数：

```C
//栈的定义
typedef struct {
    StackElem* pBase;
    StackElem* pTop;
    int size;
} Stack;

/**
*对栈进行初始化
*-init函数对栈做初始化操作，也就是为栈的成员变量赋初值。参
*数pStack是指向栈的指针。如果初始化成功，返回OK；如果失败，返
*回ERROR。在为栈的成员变量pBase和pTop赋初值之前，需要为栈元素分配
*内存空间。
*/
Status init_stack(Stack* pStack);

/**
*释放栈元素的内存
*-free函数释放栈元素的内存。参数pStack是指向栈的指针
*/
void stack_free(Stack *pStack);
/**
*清空栈
*-clear函数把pStack指向的栈中的数据元素清空。要清空栈内的数据元
素，其实并不需要真的把那些数据删除，只要把栈顶指针移到栈底即可。
*/
void stack_clear(Stack *pStack);

/**
*判断栈是否为空
*/
Bool is_empty(Stack* pStack);

/**
*求栈的长度
*/
int stack_length(Stack *pStack);

/**
*取栈顶元素
*-get_top函数读取栈顶元素。参数pStack是栈指针，pElem是数据元素指
*针，读取的栈顶元素存入*pElem 中。如果成功，返回OK；如果失败，返
*回ERROR。这个函数不改变栈顶指针的值。
*/
Status stack_get_top(Stack pStack,StackElem pElem);

/**
*入栈
*-push函数把pElem指向的数据元素压入pStack指向的栈。如果成功，返
*回OK；如果失败，返回ERROR。
*/
Status stack_push(Stack *pStack,StackElem *pElem);

/**
*出栈
*-pop函数弹出栈顶元素，pStack是栈指针，弹出的元素存入pElem指向的
*内存中。如果成功，返回OK；如果失败，返回ERROR。
*/
Status stack_pop(Stack pStack,StackElem pElem);

/**
*遍历栈
*-traverse函数遍历由pStack所指向的栈，对栈中的每个数据元素执
*行visit操作。如果成功，返回OK；如果失败，返回ERROR。其中visit是
*函数指针，它的参数是数据元素的指针，返回值是Status类型的。
*/
Status stack_traverse(Stack *pStack,Status (*visit)());
```

### 思考

或许你会发现在之后实现计算器过程中用不到这么多的栈操作函数，但是为什么要定义这么多操作函数呢？其实这是基于软件工程的思想（大家也都是软件工程师），当我们实现一个类（Stack）我们必须定义所有相关的接口，因为我们不知道这些类的用户会使用什么操作。这种思想使得程序易于扩展（当我们想为程序增加其他功能时，不必去修改底层代码，而是直接调用接口）。

### 提示

- 使用枚举表示状态
- [函数指针](https://blog.csdn.net/u011436427/article/details/94734290)的使用
- 多文件构建

## **Part2 中缀表达式转后缀**

> 例如a + b，表示将a 和b 相加，我们称这种表达式为中缀表达式。虽然中缀表达式看起来十分自然，但是计算机处理起来并不方 便。1929 年，波兰数学家Lukasiewicz 提出一种把运算符放在两个操作数前 面的表示法，例如+ab，表示做加法操作，两个操作数是a和b。我们称这 种表达式为前缀表达式，又称波兰式。如果把运算符写在两个操作数的后 面，例如ab+，那么就得到一种后缀表达式，又称逆波兰式。

#### 示例

输入：
$$a + (b ∗ c − d)/e$$ 

输出：
$$a b c ∗ d − e / +$$

### **任务**

- 了解中缀、前缀和后缀表达式
- 使用你在之前实现的栈，实现中缀表达式转换为后缀表达式
- 支持加减乘除运算（带括号）

## **题目要求**

- 正确的可执行的代码
- 在linux环境下编写并测试
- 回答上面的思考题
- 回答题目中的问题时，表达自己的想法
- 良好的代码习惯（加分项）
- 代码运行的截图（输入中缀表达式，输出正确的后缀表达式）
- 请提交PDF文档

## **本题提交方式**

> 收件邮箱：[glimmer401@outlook.com](mailto:glimmer401@outlook.com)
>
> 主题格式： 学号-姓名-考核-C-01
>
> 主题示例：2024090101012-张三-考核-Cproject-01

## **出题人联系方式**

> QQ：3193552916
>
> 邮箱：[3193552916@qq.com](mailto:3193552916@qq.com)