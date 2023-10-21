![Web后端](https://pic.imgdb.cn/item/64fdbcf1661c6c8e543bdfd9.png)
# Java03 - 异常、网络#

>提醒：学习了上一题的封装等等概念，请你在本题尽可能注意自己的代码的结构条理哦！


## Part1 异常 ##
欢迎来到Java的第三题，如果你是一道一道题目做过来的，那么一定要祝贺你，真的很厉害！

一路走来的你一定也很多次地有过程序 *“报错”* 的经历吧。你有没有仔细观察过出错时的提示呢？请用下面这个简单的程序引发错误：

```Java
public class TestException{
    public static int div(int a, int b){
        return a/b;
    }
    public static void main(String[] args){
        int a = div(10, 0); //用0作除数的错误
    }
}
```

运行后发生了什么？

### Task1 ###
请你学习Java异常的概念，并完成下面的几个要求。
>1.请运行上述程序，将控制台中的运行结果的截图附在题解上，观察其中包含什么信息<br/>
>2.学习try/catch语句，处理上述代码的异常，并将代码附上<br/>
>3.看看下面的图，了解一下异常的类型，了解一下Error和Exception的不同。

![Throwable](https://pic.imgdb.cn/item/64fdb9b9661c6c8e543b79f5.jpg)

-------

### Task2 ###
实际上，你可以让自己的类继承Exception类，从而创建自定义异常。
请你自己编写一个自定义异常MyException，让div方法在除数是0时抛出MyException。
>了解throw关键字的用法<br/>
>完成上述要求，附上各部分代码，可以把遇到的问题和解决过程也记录下来。

---------

## Part2 IO流与文件 ##
你应该听说过，计算机中的一切数据都是以二进制的形式存储的，所有的文件等等都是可以用一串二进制这序列表示出来的。你有没有想过，文件在电脑里被复制、从一个设备传输至另一个设备是怎么发生的？

### Task3 ###
了解一下什么是**流**，什么是InputStream/OutputStream类，并在完成下面的任务的过程中掌握其基本用法。
>请你编写代码，实现将下面给出的类的对象保存到一个文件里和从文件里读取出的功能。（会用到FileInputStream/FileOutputStream，ObjectInputStream/ObjectOutputStream）将代码附在题解上

```Java
//类示例
public class Message implements Serializable {//为什么要继承这个接口？
    int a;
    double b;
    String c;
    Message m;

    public Message(int a, double b, String c, Message m) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.m = m;
    }

    @Override
    public String toString() {
        return "Message{" +
                "a=" + a +
                ", b=" + b +
                ", c='" + c + '\'' +
                ", m=" + m +
                '}';
    }
}
```
```Java
Message message = new Message(10,2.0, "abc", new Message(2, 1.2, "sakj", null));//具体对象示例
```
---------
## Part3 Socket ##
网络贯穿生活的方方面面，学习后端也需要了解网络的知识。这个部分我们先来简单地学习一下Socket编程。

### Task4 ###
了解TCP/IP协议是什么<br/>
Java中有一个叫做InetAddress的类，可以获取指定主机的信息。<br/>
尝试运行以下代码,理解主机名、域名和ip的联系与不同

```Java

import java.net.InetAddress;

public class Inet {
    public static void main(String[] args) throws Exception{
        InetAddress address = InetAddress.getLocalHost();
        System.out.println(address);
        address=InetAddress.getByName("glimmer.space");
        System.out.println(address);
    }
}
```
通过URL，我们可以获取各种网络上的资源。<br/>
Java提供了java.net.URL类，通过它，我们可以研究URL构造。<br/>
尝试运行以下代码，分析URL包含了哪些信息。

```Java

import java.net.MalformedURLException;
import java.net.URL;

public class LookURL {

    public static void main(String[] args)  {
            try {
                URL url = new URL("https://www.bilibili.com/video/BV1nU4y1i7Lt?share_source=copy_web");
                System.out.println(url.getProtocol());
                System.out.println(url.getAuthority());
                System.out.println(url.getFile());
                System.out.println(url.getHost());
                System.out.println(url.getPath());
                System.out.println(url.getPort());
                System.out.println(url.getDefaultPort());
                System.out.println(url.getQuery());
                System.out.println(url.getRef());
            } catch (MalformedURLException e) {
                throw new RuntimeException(e);
            }
    }
}
```
---------
### Task5 ###

请你学习如何创建Socket对象并建立连接，学习Socket的IO方法，并通过客户端-服务器结构编写一个程序。实现客户端和服务器互相发送文本信息并读取。有兴趣的话也可尝试将之前的对象或者电脑上的各种文件进行收发。

>记录下你在做题过程中遇到的问题和解决过程<br/>
>把代码附在题解上
--------
### Task6 ###
在Task3的代码中曾经出现了一个“@”符号，你注意到了吗？有没有想一想那是什么？

请你自行了解一下Java的注解，大概了解其功能，以备后面题目需要（本题可以不作答）

# 本题提交方式 #
    收件邮箱：glimmer401@outlook.com
    主题格式： 学号-姓名-考核-Java-03
    主题示例：2023090901012-张三-考核-Java-03

# 出题者联系方式 #
QQ：602599288