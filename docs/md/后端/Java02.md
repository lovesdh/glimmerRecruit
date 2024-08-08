![Web后端](https://pic.imgdb.cn/item/64fdbcf1661c6c8e543bdfd9.png)
# Java02 - 语言特性 #
    难度系数：比较简单

## Part1 赛博街机厅 ##
>以下情景仅仅为了帮助理解，并没有什么实际应用价值，也不一定合理。请不要太过纠结:）

好消息！赛博街机厅今天开业啦！为了还原得有仪式感一点，我们要模拟投币的过程。首先准备一些钱币的类，我打算对每种面值的硬币使用不同的类表示，它包含一个面值属性，一个数量属性代表手上有多少枚 和一个使用的方法。我已经写了一个：(假设面值有1、2、5几种)

```Java
public class OneCoin{
    private int face;//面值
    private static int count;
    public int Use(int number){
        if(count >= number){
            count -= number;
            return number * face;
        }
        System.out.println("剩余数量不足！");
        return -1;//约定返回-1代表使用的操作失败了
    }
    public OneCoin(int count){
        this.count = count;
        face = 1;
    }
}
```
但是作为一条懒狗，我实在懒得写三次同样的方法。

有没有什么办法能省些麻烦呢？

### Task1. ###
请你了解下Java中类的继承机制，编写硬币类Coin作为基类，包含上面提到的基本属性和方法，然后再编写三个派生类继承它，记得在它们的构造方法里确定面值。

>回答要求：<br/>
>完成要求并附上代码<br/>
>1.讲讲你是怎么理解继承的？Java为什么要引入继承？<br/>
>2.了解super关键字，讲讲他的作用。<br/>
>3.假如面值2的硬币在赛博世界将要停止流通，调用它的Use方法的时候正常使用的同时还要显示一个相关提示可以怎么做？<br/>
>4.说说重写/重载分别是什么以及它们的作用。按照原来的写法，收硬币的一边也要写和硬币种类一样多的方法（代码在下面），后面如果要改动工作量也会相应很大。<br/>
>5.简单了解一下多态的概念，你能让投币口的方法简化吗？(可以附上代码)<br/>

```Java
public class CoinSlot{ //投币口
    int money = 0;
    public void InsertCoin(OneCoin coin, int number){
        int got_money = coin.Use(number);
        if(got_money > 0){
            System.out.println("收到了"+got_money+"块钱");
            money += got_money;
        }
        else{
            System.out.println("没收到钱");
        }
        //收钱相关操作的举例
    }
    public void InsertCoin(TwoCoin coin, int number){
        ...
    }
    ...
}
```
---------

OK，硬币和投币口都有了，来看看用户使用的情况。

```Java
public static void main(String[] args){
    OneCoin oneCoin = new OneCoin(10);
    Coin coin = new Coin(10);
    CoinSlot coinSlot = new CoinSlot();
    coinSlot.InsertCoin(oneCoin, 2);
    coinSlot.InsertCoin(coin, 2);
}
```
呃，似乎出现了一些不合常理的地方，用户投入了两个既不是1，也不是2或5的“硬币”。常识上来考虑这种东西是不该存在的。
>谁见过抽象的“房子”？见到的只能是具体的平房、楼房等。——叶徐《语言学纲要》

不止是语言学 ~~或者学编程语言也算语言学?~~ ，程序中也会有一些不应该实例化的抽象的东西。

### Task2. ###
请你学习关于抽象类的基本概念，试着阻止上面的这种情况出现。

>回答要求：<br/>
>1.完成要求并附上代码<br/>
>2.讲讲什么是抽象类，它和普通的类有什么区别？有什么作用？<br/>
>3.是否能让一个类继承多个类？<br/>
--------

嗯嗯不错，投币这边还算顺利，我们看看别的功能怎么样了

现在tzy同学正在忙着给街机厅准备游戏，同时老板也在准备游戏机。老板希望tzy的所有游戏类都有start方法和over方法，但是傻乎乎的tzy总是忘记老板的要求。要是中间搞错了之后可能出错就又要增加排除错误的工作量了。

可以请你想办法帮帮tzy同学防止他出错吗？

### Task3. ###
请你学习一下接口的相关知识，给tzy写一个Game接口，规定他必须实现start方法和over方法吧。

>回答要求：<br/>
>1.完成要求并附上代码，再写一个具体的游戏类实现这个接口试试（start和over方法里输出一些文字代表就可以）<br/>
>2.讲讲你对接口的理解，它和抽象类有什么区别和相似之处？<br/>
>3.是否能让一个类继承多个接口？这点上和类有何不同，为什么？<br/>
>4.继承接口的类的实例，如果用instanceof判断其是否属于该接口会得到什么结果？想想这有什么用处。<br/>
>5.有了这个接口的帮助，老板虽然还没有拿到tzy的游戏类却已经完成了游戏机的游玩部分（代码在下方）。请阅读老板的代码并试着理解，再想想接口有什么作用？<br/>

```Java
public class Machine{
    Game game;
    public Machine(Game game){
        this.game = game;
    }
    public void gamestart(){
        if(...)//假设这里是关于是否已经投币等等能否开始游戏的判断
        {
            game.start();
        }
    }
    public void gameover(){
        game.over();
    }
    ...
}
```
---------

## Part2. 宇宙万法的源头 ##
街机厅的准备还要一段时间，这会我们就先探索一下宇宙万法的源头吧（唐突<br/>
看看书上怎么说

>Java人认为，宇宙万类的那个源头是什么？它是Object，所以这个词叫对象……

原来有个Object类是Java所有类的父类，我们定义的每一个类都默认继承自Object类！这样的话，那我就可以利用这点这样改动一下投币口：

```Java
public class CoinSlot{ //投币口
    int money = 0;
    public void InsertCoin(Object coin, int number){
        if(coin instanceof Coin)
        {
            int got_money = coin.Use(number);
            if(got_money > 0){
                System.out.println("收到了"+got_money+"块钱");
                money += got_money;
            }
            else{
                System.out.println("没收到钱");
            }
        }
        else
            System.out.println("这不是硬币");
    }
    ...
}
```

这样投币口就可以投任意的对象并做出不同反应了！

### Task4. ###
嗯……上面给的代码似乎有些问题，请你了解一下Java的类型转换并修改上面的代码。

>回答要求：<br/>
>完成要求并附上代码<br/>
>为什么需要类型转换？类型转换分为哪几种？什么类型间都能转换吗？<br/>
>有时候我们会用到一些诸如toString()、equals()等等方法，它们其实就是Object对象的方法，你可以简单了解一下Object类的方法。<br/>

------
既然不止可以处理硬币了，我就又搞了个游戏券：
```Java
public class Ticket{
    private static int count;
    public int Use(){
        if(count >= number){
            count -= 1;
            return 1;
        }
        System.out.println("剩余数量不足！");
        return -1;
    }
    public OneCoin(int count){
        this.count = count;
    }
}
```
相应增加投币口的代码很简单，这里就不写出了。

现在我想要分别抢制作只能收取硬币的和只能收取游戏券的投币口（指用其它的对象无法通过编译），如果都用同一个CoinSlot类可以实现吗？

### Task5. ###
请了解一下Java泛型，试着修改之前的程序，用泛型实现Task4的效果。然后也完成上述要求。

>回答要求：<br/>
>1.完成要求并附上代码<br/>
>2.什么是泛型方法，什么是泛型类？有些什么用？<br/>
>附加题：你知道Java的List类吗？请尝试学习有关List类以及泛型的通配符的知识，并回答：<br/>
>1.通配符有什么作用？<br/>
>2.什么是有界类型？下面的代码中有两处编译时报错，原因是什么？
<br/>

```Java
import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<? extends Number> t = null;
        t = new ArrayList<Double>();
        t.add(1.0);//明明是Double类型

        List<? super Double> t2;
        t2 = new ArrayList<Number>();
        t2.add(1.0);
        t2.add(1);//明明属于Number
    }
}
```
------
## Part3. 回顾总结 ##
终于，街机厅准备完成了。最后我们写的投币口（在完善后）不但用在街机上，也应用到了赛博售货机、赛博抓娃娃机等等上。可喜可贺，可喜可贺。

现在回顾一下，在上面的过程中我们涉及了继承、封装、多态等等概念

>1.回想一下本题都有哪些地方体现了多态，思考多态和继承的关系，谈谈你对多态机制的理解。<br/>
>2.了解“耦合”、“内聚”、“封装”的概念，结合本题谈谈类的继承、抽象类、接口等都有些什么意义。

-------
# 本题题解要求  #
* 认真完成每个Task下的回答要求，记录你的做题过程，遇到的问题和解决方法等，配以必要的截图和说明；
* 用自己的理解回答问题，可以不完全理解知识点，但一定不要照抄网上资料，不得抄袭代码。

# 本题提交方式 #
    收件邮箱：glimmer401@outlook.com
    主题格式： 学号-姓名-考核-Java-02
    主题示例：2024090901012-张三-考核-Java-02

# 出题者联系方式 #
QQ：602599288