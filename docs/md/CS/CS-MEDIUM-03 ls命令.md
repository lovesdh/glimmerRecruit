![标题](./img/CS.PNG)

# CS-MEDIUM-03 实验：Linux命令行实现

## 题目要求

本题硬性要求**在Linux系统下**完成，我们不希望完成到本题的同学出现**完成招新题但电脑中没有Linux系统**的戏剧性情况。

> 关于Linux使用与编程环境的搭建，此处不再赘述，你也可以将配环境的过程记录在本题的文档里。

## 命令行介绍

不同于Mac、Windows等系统方便的图像化操作界面，Linux系统下的操作主要依靠终端实现。

Linux终端的操作主要依赖于各类命令，它们的功能包括但不限于文件管理、文档编辑、文件传输、磁盘管理、磁盘维护、网络通讯等内容。



## 文件路径

我们操作文件时候需要知道文件路径，就是系统下文件存放的位置。

通常文件路径分为两种：绝对路径和相对路径

#### 绝对路径(Absolute Path)

以Windows为例：

从盘符(表示硬盘分区的字符)开始的路径，以“\”作为开始。如:d:\\AA\\BB\\my.txt，像这种直接指明了文件所在的盘符和所在具体位置的完整路径，即为绝对路径。

#### 相对路径(Relative Path)

以当前所在的文件夹为开始的路径为相对路径

规则：

```Plain
 .      ->表示的是当前文件夹
        ..     ->表示的是上一级的文件夹
        /XXX   ->下一级叫做XXX的文件夹
```

## 命令的使用流程——以ls命令为例

ls的全称是:list directory contents

它的使用方法是，在命令行中输入：

```Bash
ls 文件路径
```

并敲击回车。

命令用于显示指定工作目录下之内容（列出目前工作目录所含的文件及子目录)。

如果不写文件夹路径的，默认展示的是`./`即当前所位于的文件目录。

还有其他辅助的命令参数：

```Bash
-a 显示所有文件及目录 (. 开头的隐藏文件也会列出)
-d 只列出目录（不递归列出目录内的文件）。
-l 以长格式显示文件和目录信息，包括权限、所有者、大小、创建时间等。
-r 倒序显示文件和目录。
-t 将按照修改时间排序，最新的文件在最前面。
-A 同 -a ，但不列出 "." (目前目录) 及 ".." (父目录)
-F 在列出的文件名称后加一符号；例如可执行档则加 "*", 目录则加 "/"
-R 递归显示目录中的所有文件和子目录。
```

如

```Bash
ls -a 文件夹路径
```

对比：

使用 ls的效果：

```Bash
ATC1   ATC3   cf10   cf12   cf14   cf16   cf18   cf2    cf3    cf5    cf7    cf9    lutece test2
ATC2   cf1    cf11   cf13   cf15   cf17   cf19   cf20   cf4    cf6    cf8    luogu  test1
```

使用ls -a 的效果：

```Bash
.         .DS_Store ATC1      ATC3      cf10      cf12      cf14      cf16      cf18      cf2       cf3       cf5       cf7       cf9       lutece    test2
..        .vscode   ATC2      cf1       cf11      cf13      cf15      cf17      cf19      cf20      cf4       cf6       cf8       luogu     test1
```

## 随之而来的挑战

实际上，命令行提供了功能强大的各类操作指令，帮助我们在非图像化的操作系统下实现各类功能。而我们今天的真正任务，就要尝试去揭开“黑匣子”，将功能函数实现出来。

下面，我将给出文件`myls.c`。（未实现辅助命令函数)

```c
#include <stdio.h>  
#include <dirent.h>  
#include <sys/stat.h>  
#include <string.h>  
#include <stdlib.h>  
#include <sys/types.h> // 可能不是必需的，但符合POSIX标准  
#include <time.h>
/*
    输出文件信息
*/
void print_file_info(const char *name, struct stat *statbuf) {  
    printf("%s\t", name);  //文件名
    printf("%ld\t", statbuf->st_size); // 文件大小  
    printf("%o\t", statbuf->st_mode & 0777); // 文件权限（仅显示最后三位）  
    // 最后修改时间  
    char timebuf[80];  
    strftime(timebuf, sizeof(timebuf), "%Y-%m-%d %H:%M", localtime(&statbuf->st_mtime));  
    printf("%s\n", timebuf);  
}  
/*
    文件路径信息的处理
*/  
void list_directory(const char *path) {  
    DIR *dir;  
    struct dirent *entry;  
    struct stat statbuf;  
  
    if (!(dir = opendir(path))) {  
        perror("opendir");  
        exit(EXIT_FAILURE);  
    }  
  
    while ((entry = readdir(dir)) != NULL) {  
        char full_path[1024];  
        snprintf(full_path, sizeof(full_path), "%s/%s", path, entry->d_name);  
  
        if (stat(full_path, &statbuf) == -1) {  
            perror("stat");  
            continue;  
        }  
  
        print_file_info(entry->d_name, &statbuf);  
    }  
    closedir(dir);  
}  
/*
    程序的主函数部分
*/
int main(int argc, char *argv[]) {  
    if (argc < 2) {  
        list_directory("."); // 默认列出当前目录  
    } else {  
        for (int i = 1; i < argc; i++) {  
            list_directory(argv[i]);  
        }  
    }  
  
    return 0;  
}
```

请你在Linux系统下编译并尝试运行这一程序，并将其与原生ls命令相比较，将你的运行过程与运行结果记录在你的文档中。

我们将借助上述程序了解如何从陌生的程序中学习知识。下面我会列举出一些问题供学习参考。

1. 上述程序的头文件你见过哪些，没见过哪些？
2. 程序的运行从哪个地方开始？
3. 哪些函数是自定义函数，哪些是库函数？这些库函数分别属于哪些库？
4. argc，*argv[]作为主函数的运行参数，它们的含义是什么？是在哪里输入的？
5. 有哪些语法/语句段/函数是你不理解/不清楚的？如何借助资料与工具了解它们的含义？

>  研学过程中可能还会有许多问题需要你解决，举出的这些也只是冰山一角，但是当你看懂这个程序，你就已经对“磁盘管理”这一概念有了更深的认识，你可以尽可能详细地刻画出你对于这个程序从懵懵懂懂到了如指掌的学习过程，由此来显示你的学习能力。

## 举一反三

请你结合对上述的知识点以及对程序的研究成果，使用C语言完成对pwd命令（print work directory，命令用于显示工作目录）的实现，并将程序保存并命名为`mypwd.c`。如果实现结果令你满意，请附上运行成功的结果，如果实现效果不佳，请说明你遇到的问题和完成程度。

> 提示：实现这一功能需要用到上述学习中提到的哪些库函数？该怎样获取到路径信息？如何进行正确的输出？



> 本题出题人：
>
> 奶绿丶（单艺豪） QQ：3073494764；
>
> 郑祯宇 QQ：2720355805