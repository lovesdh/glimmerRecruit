![标题](./img/CS.PNG)

# CS-Hard-01  Dynamic Memory Allocation

## 前言

​	在计算机科学中，内存管理的重要性不言而喻，一个好的内存管理系统就能在资源有限的内存空间极大地提高程序的性能。而与固定不变的静态内存不同，动态内存具有更高的灵活性与效率，能够处理各种复杂的情形。

​	此时的你一定对malloc函数的使用了如指掌，当你想要为你的链表添加一个节点时,你会很自然的打出：`Node* newNode = (Node*)malloc(sizeof(Node));`。可你有没有思考过好奇过，malloc的内部到底进行了怎样的操作？它是如何分配内存的？它从哪里分配来的内存？free释放了内存会怎样？free只需要一个指针作为参数，它是怎么知道要释放多大的内存？这些问题无不需要你去理解动态内存分配的底层原理。

​	本题将带你从简单了解Linux的内存架构开始，逐步引导你从基础概念开始直到实现一个具有现实功能的动态内存分配器，实现包括如`malloc`、`calloc`、`realloc`和`free`等分配函数。

准备好了么？

## part0 项目前置知识

> 一切问题从概念学习开始

### 任务

- 了解linux的**虚拟内存**结构尤其是其中**堆区域**的构成（如下图），简单理解**物理内存**与**虚拟内存**的概念还有关系和区别

  ![QQ_1723120212954](./img/图1.jpg)

- 了解有关**动态内存分配器**的各种概念：

  - 区分**显式**与**隐式**分配器

  - 何为**有效荷载**

  - 何为**内部**与**外部**碎片

  - 要求**吞吐量**和**内存利用率**

  - 它如何解决了前言中的一些问题？

    ………………………………………………

### 提示

- 提供两个链接供简单了解：
  - [4.1 为什么要有虚拟内存？ | 小林coding (xiaolincoding.com)](https://xiaolincoding.com/os/3_memory/vmem.html)(主要4.1，4.2)
  - [Malloc教程 (danluu.com)](https://danluu.com/malloc-tutorial/)(最简易的分配器)
- 着重学习**显式**分配器，这是你将实现的目标
- 关注尤其是**加粗名词**的概念(后文同理，将不再提示)

### 要求

- 将任务中问题用你自己的语言描述讲解，可配图

## part1 从隐式空闲链表看起

>好像不简单诶

### 任务

![QQ_1723120212954](./img/图2.png)



![QQ_1723120212954](./img/图3.jpg)

​	我们采用上图的隐式空闲链表形式，它将堆中的内存块按地址顺序串成一个链表，头部和尾部都存储表示块的大小，且头部的末位表示该块的分配状态，脚部的末位表示前块的分配状态。每个块由单字(part 1中**单字**为**四字节**,**双字**为**八字节**)大小的头部和尾部与**有效荷载**构成。

```c
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <string.h>

#define ALIGNMENT 8  // 双字对齐
#define ALIGN(size) (((size) + (ALIGNMENT-1)) & ~(ALIGNMENT-1)) // 对齐到ALIGNMENT的倍数


#define WSIZE       4  // 头部或尾部的字节数
#define DSIZE       8  // 双字大小
#define CHUNKSIZE  (1<<12)  // 扩展堆时的默认大小
#define MINBLOCK (DSIZE + 2*WSIZE)  // 最小块大小

#define MAX(x, y)  ((x) > (y) ? (x) : (y))  // 返回最大值

#define PACK_ALLOC(val, alloc)  ((size) | (alloc))  // 将 size 和 allocated bit 合并为一个字

#define GET(p)        (*(unsigned int *)(p))  // 读地址p处的一个字
#define PUT(p, val)   (*(unsigned int *)(p) = (val))  // 向地址p处写一个字

#define GET_SIZE(p)   (GET(p) & ~0x07)  // 获取块的大小
#define GET_ALLOC(p)  (GET(p) & 0x1)  // 获取分配标志

#define HDRP(bp)     ((char*)(bp) - WSIZE)  // 获取头部指针(bp是一个块的有效荷载的起始地址)
#define FTRP(bp)     ((char*)(bp) + GET_SIZE(HDRP(bp)) - DSIZE)  // 获取尾部指针

#define NEXT_BLKP(bp)    ((char*)(bp) + GET_SIZE((char*)(bp) - WSIZE))  // 获取下一个块的指针
#define PREV_BLKP(bp)    ((char*)(bp) - GET_SIZE((char*)(bp) - DSIZE))  // 获取前一个块的指针

/* 堆管理接口 */
static void* heap_listp;  // 堆的开始指针

#define VERBOSE 0  // 默认不输出调试信息
#ifdef DEBUG
#define VERBOSE 1  // 在调试模式下启用调试信息输出
#endif


/**
 * @brief 初始化内存分配器
 * 
 * @return 成功时返回 0，失败时返回 -1
 */
int mm_init(void)
{
    // 初始化堆
    if ((heap_listp = sbrk(4*WSIZE)) == (void*)-1)
        return -1;
    11
    // 初始化空闲链表
    PUT(heap_listp, 0); 
    PUT(heap_listp + 1*WSIZE, PACK(8, 1));
    PUT(heap_listp + 2*WSIZE, PACK(8, 1));
    PUT(heap_listp, PACK(0, 1));
    heap_listp += (2*WSIZE);

    // 扩展堆
    if (extend_heap(CHUNKSIZE) == NULL)
        return -1;

    return 0;
}

/**
 * @brief 打印当前堆块的状态信息。
 *
 * 根据传入的 verbose 参数决定是否打印堆块信息。此函数用于调试，
 * 以检查堆内存布局、块大小及其分配状态。
 *
 * @param verbose  控制是否打印输出。当 verbose 为 1 时打印信息，为 0 时不打印。
 * @param func     表示调用此函数的上下文或函数名称，用于输出中标识当前的操作阶段。
 */
static void print_heap_blocks(int verbose, const char* func) {
    if (!verbose) return;  // 如果不需要输出调试信息，则直接返回

    char *curbp = (char *)heap_listp;

    printf("\n=========================== %s ===========================\n", func);

    while (GET_SIZE(HDRP(curbp)) > 0) {
        printf("Address: %p\n", curbp);
        printf("Size: %d\n", GET_SIZE(HDRP(curbp)));
        printf("Allocated: %d\n", GET_ALLOC(HDRP(curbp)));
        printf("\n");
        curbp = NEXT_BLKP(curbp);
    }

    printf("Address: %p\n", curbp); // Should point to the end of the heap
    printf("Size: 0\n");
    printf("Allocated: 1\n");
    printf("=========================== %s ===========================\n", func);
}


/**
 * @brief 扩展堆的大小以适应请求的内存。
 * 
 * 这个函数通过调用 sbrk 来扩展堆的大小。扩展的大小会被调整为CHUNKSIZE的整数倍，以便更好地管理堆内存。
 * 
 * @param size 需要扩展的内存大小（以字节为单位）。
 * 
 * @note 初始调用mm_init时扩展一个CHUNKSIZE
 * @return 扩展后的内存块的指针，如果扩展失败则返回 NULL。
 */
static void *extend_heap(size_t size) {}


/**
 * @brief 在堆中查找合适的空闲块。
 * 
 * 这个函数遍历堆中的所有块，寻找一个大小足够且未分配的空闲块。
 * 
 * @param size 需要分配的内存块的大小（以字节为单位）。
 * 
 * @return 找到的合适的空闲块的指针，如果没有找到则返回 `NULL`。
 */
static void *find_fit(size_t size) {}


/**
 * @brief 将内存块分配给用户。
 * 
 * 这个函数会根据请求的大小 asize(对齐后的size) 将一个内存块分配给用户。如果分配的块剩余的空间足够大，则将剩余的空间保留为一个新的空闲块。否则，将整个块都分配出去。
 * 
 * @param bp 指向要分配的内存块的指针。
 * @param asize 需要分配的内存块的大小（以字节为单位）。
 */
static void place(char *bp, size_t asize) {}


/**
 * @brief 分配一个指定大小的内存块。
 * 
 * 这个函数会根据请求的内存大小size来分配内存。如果请求的大小为零，则返回 NULL。首先，函数尝试从空闲块列表中找到一个合适的块，如果找到，则进行分配。如果没有找到合适的块，则会扩展堆的大小，并再次尝试分配内存。
 * 
 * @param size 需要分配的内存大小（以字节为单位）。
 * 
 * @return 指向分配的内存块的指针，如果分配失败则返回 `NULL`。
 */
void *mm_malloc(size_t size) {}


/**
 * @brief 合并相邻的空闲块。
 * 
 * 这个函数检查指定块 bp 的前后相邻块的分配状态。如果相邻的块为空闲块，则将这些块合并成一个更大的空闲块，并更新其头部和尾部。函数会返回合并后的空闲块的指针。
 * 
 * @param bp 指向要进行合并操作的内存块的指针。
 * 
 * @return 合并后的空闲块的指针。
 */
static void *coalesce(void *bp) {}


/**
 * @brief 释放一个已分配的内存块。
 * 
 * 这个函数将指定的内存块 ptr 标记为未分配，并尝试将其与相邻的空闲块合并。
 * 
 * @param ptr 指向要释放的内存块的指针。
 */
void mm_free(void *ptr) {}


//测试用例
int main() {
    
    if (mm_init() == -1) {
        printf("Memory manager initialization failed.\n");
        return -1;
    }
  
    void *p1 = mm_malloc(8000);
    void *p2 = mm_malloc(200);
    void *p3 = mm_malloc(50);

    mm_free(p2);

    void *p4 = mm_malloc(150);

    mm_free(p1);
    mm_free(p3);    
    mm_free(p4);

    return 0;
}

```

### 提示

- 仔细阅读理解已经提供的**注释**内容
- 多利用**调试模式**观察堆的变化

### 要求

- 不要更改已经给出的内容
- 请启用调试模式并在`mm_free`和`mm_malloc`函数中加入`print_heap_blocks`使其能正确运行测试用例输出内容
- 用给定测试用例输出正确的结果(还可以用更多测试检验自己的结果)
- 提交.c文件以及运行结果图

## part2 打造你的内存分配器

>真正挑战的开始了	

​	你已经实现了一个简易的隐式空闲链表分配器，但在隐式空闲链表方案中，块分配时间复杂度与堆中块的总数呈线性关系。为了进行改善，我们本次在该part中主要设计和实现一种由**双向链表**组织的**显式空闲链表**方案。

### 任务

#### 描述

##### 1. **块的格式**

![QQ_1723120212954](./img/图4.jpg)

下面详细说明一下分配块和空闲块的格式：

- 分配块：
  - 由头部+有效荷载+可选填充组成
    - 头部为一个字(64bit)
    - 头部还存储了块的大小
    - 头部的0位表示是否分配，0表示未分配（空闲块），1表示已分配（分配块）
    - 头部的1位表示了**前块**是否分配，0表示未分配（空闲块），1表示已分配（分配块）‘
- 空闲块：
  - 由头部+前驱+后继+其余空闲部分+脚部组成
    - 头部与分配块同理
    - 前驱和后继记录了链式相链的前一个和后一个空闲块的地址



##### 2. **宏定义**

|        **宏**         |                  含义                   |
| :-------------------: | :-------------------------------------: |
|         WSIZE         |                  字长                   |
|         DSIZE         |                 双字长                  |
|       CHUNKSIZE       |         内存分配器扩容最小单元          |
|         PACK          |      块大小和分配位结合返回一个值       |
|       GET / PUT       |       对指针p指向的位置取值/赋值        |
|      HDRP / FTRP      |        返回bp指向块的头/脚部指针        |
| PREV_BLKP / NEXT_BLKP |        返回与bp相邻的上一/下一块        |
|  GET_PRED / GET_SUCC  | 返回与空闲块bp相连的上一个/下一个空闲块 |

```c
#define ALIGNMENT 16
#define ALIGN(size) (((size) + (ALIGNMENT-1)) & ~(ALIGNMENT-1))

#define WSIZE 8 
#define DSIZE 16
#define CHUNKSIZE (1 << 12) 
#define MIN_BLK_SIZE (2 * DSIZE)

#define MAX(x, y) ((x) > (y) ? (x) : (y))

#define PACK(size, prev_alloc, alloc) ((size) & ~(1<<1) | (prev_alloc << 1) & ~(1)
| (alloc))
#define PACK_PREV_ALLOC(val, prev_alloc) ((val) & ~(1<<1) | (prev_alloc << 1))
#define PACK_ALLOC(val, alloc) ((val) | (alloc))

#define GET(p) (*(unsigned long *)(p))
#define PUT(p, val) (*(unsigned long *)(p) = (val))

#define GET_SIZE(p) (GET(p) & ~0x7)
#define GET_ALLOC(p) (GET(p) & 0x1)

#define HDRP(bp) ((char *)(bp) - WSIZE)
#define FTRP(bp) ((char *)(bp) + GET_SIZE(HDRP(bp)) - DSIZE)

#define GET_PRED(bp) (GET(bp))
#define SET_PRED(bp, val) (PUT(bp, val))
#define GET_SUCC(bp) (GET(bp + WSIZE))
#define SET_SUCC(bp, val) (PUT(bp + WSIZE, val))

#define NEXT_BLKP(bp) ((char *)(bp) + GET_SIZE(((char *)(bp) - WSIZE)))
#define PREV_BLKP(bp) ((char *)(bp) - GET_SIZE(((char *)(bp) - DSIZE)))
```

##### 3. 堆的延伸方式

|   全局变量    |                  含义                  |
| :-----------: | :------------------------------------: |
| mem_start_brk |       记录内存块的第一个字节地址       |
|  heap_listp   |          记录序言块的开始位置          |
|  free_listp   |       指向堆中的第一个空闲内存块       |
|    mem_brk    | 记录已分配内存的最后一个字节的末尾地址 |
| mem_max_addr  |      记录当前内存块的最大可用地址      |

![QQ_1723120212954](./img/图5.jpg)

![QQ_1723120212954](./img/图6.png)

![QQ_1723120212954](./img/图7.png)

- 首先通过定义函数` void mm_init(void)`初始化，利用`sbrk()`获取5mb内存块，并更改全局变量
- 然后定义函数`void *mem_sbrk(int incr)`模拟堆的增长
  - 如果加上incr之后` mem_brk `的值超过了当前的` mem_max_addr `，则证明**堆1**不够用了，需要再次调用` sbrk() `来增加**堆1**的大小，并修改相关变量，然后增加` mem_brk `。如果没有超过，就直接给`mem_brk`增加一个incr，增加**堆2**，即分配堆2
  - 返回新分配空间的基址

##### 4. 空闲链表管理

- 访问：利用空闲块的地址`bp`结合宏定义访问前块和后块
- 增删：定义`static void delete_from_free_list(void *bp);`移除bp位置的空闲块；定义`static void add_to_free_list(void *bp);`用**头插法**将空闲块插入空闲链表中

##### 5. 分配策略

​	当我们调用 `malloc()` 发出一个内存分配请求时，分配器首先需要搜索堆中的内存块找到一个足够大的空闲块并返回。具体选择哪一个内存块由分配策略决定。主要有两种：

- **首次适配**：从头开始搜索链表，找到第一个大小合适的空闲内存块便返回。
- **最佳适配**：搜索整个链表，返回满足需求的最小的空闲块。

​	你需要实现` find_fit_first() `和` find_fit_best() `两个函数。从名字就可以看出，两个函数分别按照首次适配和最佳适配策略查找合适的空闲块。函数输入为申请空间大小 ，返回值为分配块的地址。（不需要对块内的具体数据进行更改）

#### 代码文件

```c
//头文件
#include <stdio.h>
#include <stdlib.h>
#include <assert.h>
#include <unistd.h>
#include <string.h>

//宏定义
#define WSIZE 8 
#define DSIZE 16 
#define CHUNKSIZE (1 << 12) 
#define MAX_HEAP (5 * (1 << 20))
#define MIN_BLK_SIZE (2 * DSIZE)

#define MAX(x, y) ((x) > (y) ? (x) : (y))

#define PACK(size, prev_alloc, alloc) ((size) & ~(1<<1) | (prev_alloc << 1) & ~(1)
| (alloc))
#define PACK_PREV_ALLOC(val, prev_alloc) ((val) & ~(1<<1) | (prev_alloc << 1))
#define PACK_ALLOC(val, alloc) ((val) | (alloc))

#define GET(p) (*(unsigned long *)(p))
#define PUT(p, val) (*(unsigned long *)(p) = (val))

#define GET_SIZE(p) (GET(p) & ~0x7)
#define GET_ALLOC(p) (GET(p) & 0x1)

#define HDRP(bp) ((char *)(bp) - WSIZE)
#define FTRP(bp) ((char *)(bp) + GET_SIZE(HDRP(bp)) - DSIZE)

#define GET_PRED(bp) (GET(bp))
#define SET_PRED(bp, val) (PUT(bp, val))
#define GET_SUCC(bp) (GET(bp + WSIZE))
#define SET_SUCC(bp, val) (PUT(bp + WSIZE, val))

#define NEXT_BLKP(bp) ((char *)(bp) + GET_SIZE(((char *)(bp) - WSIZE)))
#define PREV_BLKP(bp) ((char *)(bp) - GET_SIZE(((char *)(bp) - DSIZE)))

//全局定义
static void* heap_listp;    
static void* free_listp; 
static void* mem_start_brk;
static void* mem_brk;
static void* mem_max_addr;

#define VERBOSE 0  // 默认不输出调试信息
#ifdef DEBUG
#define VERBOSE 1  // 在调试模式下启用调试信息输出
#endif


//同part1的调试模式
static void print_heap_blocks(int verbose, const char* func) {
    if (verbose) {
        char *curbp = (char *)heap_listp;
        printf("\n=========================== %s ===========================\n", func);

        while (GET_SIZE(HDRP(curbp)) > 0) {
            printf("Address: %p\n", curbp);
            printf("Size: %lu\n", GET_SIZE(HDRP(curbp)));
            printf("Allocated: %lu\n", GET_ALLOC(HDRP(curbp)));
            printf("\n");
            curbp = NEXT_BLKP(curbp);
        }

        printf("Address: %p\n", curbp); // Should point to the end of the heap
        printf("Size: 0\n");
        printf("Allocated: 1\n");
        printf("=========================== %s ===========================\n", func);
    }
}

/**
 * @brief 初始化内存分配器。
 * 
 * 实现上文堆的衍生方式中指定的初始化，初始化全局变量，分好堆1堆2
 */
int mm_init(void);


/**
 * @brief 增加程序的数据空间。
 * 
 * @param incr 要增加的字节数。
 * 
 * @return 扩展后的内存起始地址；如果扩展失败，则返回 (void *)-1。
 * 
 * 实现上文堆的衍生方式中的功能
 */
void *mm_sbrk(int incr);


/**
 * @brief 扩展堆空间。
 * 
 * @param words 要扩展的字数。
 * 
 * @return 返回新扩展区域的起始地址；如果扩展失败，则返回 NULL。
 * 
 * extend_heap函数是对mem_sbrk的一层封装，接收的参数是要分配的字数
 * 在堆初始化以及malloc找不到合适内存块时使用
 * 它首先对请求大小进行地址对齐，然后调用mem_sbrk获取空间
 */
static void *extend_heap(size_t words);

/**
 * @brief 查找适合分配的空闲块（首次适应）。
 * 
 * @param asize 请求的块大小（以字节为单位）。
 * 
 * @return 返回找到的适合的空闲块的指针；如果没有找到合适的空闲块，则返回 NULL。
 * 
 * 该函数在空闲链表中查找第一个合适的块，以满足请求的大小。
 */
static void *find_fit_first(size_t asize);

//类似find_fit_first
static void *find_fit_best(size_t asize);


    
/**
 * @brief 将指定的块放置到分配状态。
 * 
 * @param bp 要分配的块的起始地址。
 * @param asize 请求的块大小（以字节为单位）。
 * 
 * 该函数将指定的块标记为已分配，并更新块的大小信息。
 */
static void place(void* bp, size_t asize);
    
/**
 * @brief 合并相邻的空闲块。
 * 
 * @param bp 要合并的块的起始地址。
 * 
 * @return 合并后的块的起始地址。
 * 
 * 该函数合并当前块与其相邻的空闲块，以减少内存碎片并增加大块的可用内存。
 */
static void* coalesce(void* bp);
    
/**
 * @brief 从空闲链表中移除指定的空闲块。
 * 
 * @param bp 要移除的空闲块的起始地址。
 * 
 * 该函数将指定的空闲块从空闲链表中移除，以便将其标记为已分配。
 */
static void delete_from_free_list(void *bp);

/**
 * @brief 将指定的空闲块插入到空闲链表中。
 * 
 * @param bp 要插入的空闲块的起始地址。
 * 
 * 该函数用头插法将指定的空闲块插入到空闲链表中，以便将其标记为可用的空闲块。
 */
static void add_to_free_list(void *bp);

/**
 * @brief 分配内存块。
 * 
 * @param size 请求的内存块大小（以字节为单位）。该大小包括块头和块尾所需的空间。
 * 
 * @return 返回分配的内存块的起始地址；如果分配失败，则返回 NULL。
 * 
 * 该函数根据请求的大小在堆中查找适合的空闲块，如果找到合适的块则分配该块，并返回其起始地址。如果没有足够的空间，则可能会扩展堆或返回 NULL。
 */
void *mm_malloc(size_t size);
    
/**
 * @brief 释放内存块。
 * 
 * @param bp 要释放的内存块的起始地址。
 * 
 * 该函数将指定的内存块标记为已释放，并尝试将其合并到相邻的空闲块中，以减少内存碎片。
 */
void mm_free(void *bp);

/**
 * @brief 重新分配内存块。
 * 
 * @param ptr 指向要重新分配的内存块的起始地址。如果 ptr 为 NULL，则相当于调用 mm_malloc。
 * @param size 请求的新内存块大小（以字节为单位）。该大小包括块头和块尾所需的空间。
 * 
 * @return 返回重新分配的内存块的起始地址；如果重新分配失败，则返回 NULL。
 * 
 * 该函数调整指定内存块的大小。如果新的大小大于原始大小，会在堆中分配新的内存块，并将原始数据复制到新内存块中。如果新的大小小于原始大小，则会截断原始数据。原始内存块的内容在重新分配之前被保留。
 */
void *mm_realloc(void *ptr, size_t size);

//测试用例
int main() {
    if (mm_init() == -1) {
        printf("Memory manager initialization failed.\n");
        return -1;
    }

    void *p1 = mm_malloc(8000);
    void *p2 = mm_malloc(200);
    void *p3 = mm_malloc(50);

    mm_free(p2);

    void *p4 = mm_malloc(150);

    mm_free(p1);
    mm_free(p3);    
    mm_free(p4);
   
    return 0;
}
```

### 提示

- 理解part2能更好的让你完成本part的内容

### 要求

- 与part1同理，启用调试模式运行测试用例

- 用给定测试用例输出正确的结果(还可以用更多测试检验自己的结果)
- 提交.c文件并以及运行结果图

## part3 你需要更多测试

> 轻舟已过万重山

​	恭喜你，终于来到最后一步了，你的动态内存分配器即将大功告成了，现在是最后一步了——测试。想要检测动态内存分配器的性能，就需要大量的测试。

### 任务

- 修改代码文件，添加可以计算内存分配率的功能(更多可选：分配时间，吞吐率等)
- 对比两种分配策略**首次**适配和**最佳**适配的测试结果
- 对你的分配器进行大规模测试

### 提示

- 提供一种可选的测试方式：定义一个指针数组并分配随机大小的字符串再随机释放，不断分配释放检测性能
- 了解`srand`和`rand`等函数，随机化测试

- 了解如何编写`bash`脚本文件，高效运行测试文件
- 了解`makefile`如何导出你的malloc的动态链接库，简化调用

### 要求

- 描述测试思路，用图片提交测试结果

## 需要提交的内容及要求

README文件，包含做题过程与个人思路

做题中的C语言文件与运行截图

其他相关佐证个人学习能力与求解过程的证明材料

## 本题提交方式

提交Github含有本题题解的url仓库链接

> 出题人联系方式:
>
> Bgmgm1(QQ:993170182)
