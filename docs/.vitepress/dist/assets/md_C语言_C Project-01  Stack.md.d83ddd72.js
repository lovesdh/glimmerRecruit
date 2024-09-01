import{_ as n,o as l,c as p,a as s,Q as a,k as o}from"./chunks/framework.e90f0c97.js";const h=JSON.parse('{"title":"C Project-01  Stack","description":"","frontmatter":{},"headers":[],"relativePath":"md/C语言/C Project-01  Stack.md","filePath":"md/C语言/C Project-01  Stack.md"}'),e={name:"md/C语言/C Project-01  Stack.md"},c=a(`<img src="https://pic.imgdb.cn/item/64fdc2b6661c6c8e543d9600.png" alt="C.png"><h1 id="c-project-01-stack" tabindex="-1"><strong>C Project-01 Stack</strong> <a class="header-anchor" href="#c-project-01-stack" aria-label="Permalink to &quot;**C Project-01  Stack**&quot;">​</a></h1><blockquote><p>难度系数：简单</p><p>接下来你将正式开始实现计算器，这一部分主要是实现栈和使用栈，请你再开始做题之前阅读关于栈的知识。</p></blockquote><h2 id="part1-stack" tabindex="-1"><strong>Part1 Stack</strong> <a class="header-anchor" href="#part1-stack" aria-label="Permalink to &quot;**Part1 Stack**&quot;">​</a></h2><p>栈是一种简单有非常重要的数据结构。如图所示，栈是一种后进先出的数据结构，不管是进栈操作还是出栈 操作，都是对栈顶元素的操作。因此，当操作一个栈的时候，必须知道栈顶的位置。同时，也应该知道栈底的地址，即栈在内存中的开始地址。</p><img src="https://pic.imgdb.cn/item/64fdd972661c6c8e5441bd37.jpg" alt="XZE\`$]TD\`}@WWN)~FK4[)GX_tmb.jpg"><h3 id="任务" tabindex="-1">任务 <a class="header-anchor" href="#任务" aria-label="Permalink to &quot;任务&quot;">​</a></h3><p>在此次项目中，我们使用基于动态数组实现的栈。</p><p>为此你需要实现栈的定义和以下操作函数：</p><div class="language-C vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">C</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//栈的定义</span></span>
<span class="line"><span style="color:#F97583;">typedef</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">struct</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    StackElem</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> pBase;</span></span>
<span class="line"><span style="color:#E1E4E8;">    StackElem</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> pTop;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> size;</span></span>
<span class="line"><span style="color:#E1E4E8;">} Stack;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">*对栈进行初始化</span></span>
<span class="line"><span style="color:#6A737D;">*-init函数对栈做初始化操作，也就是为栈的成员变量赋初值。参</span></span>
<span class="line"><span style="color:#6A737D;">*数pStack是指向栈的指针。如果初始化成功，返回OK；如果失败，返</span></span>
<span class="line"><span style="color:#6A737D;">*回ERROR。在为栈的成员变量pBase和pTop赋初值之前，需要为栈元素分配</span></span>
<span class="line"><span style="color:#6A737D;">*内存空间。</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"><span style="color:#E1E4E8;">Status </span><span style="color:#B392F0;">init_stack</span><span style="color:#E1E4E8;">(Stack</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">pStack</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">*释放栈元素的内存</span></span>
<span class="line"><span style="color:#6A737D;">*-free函数释放栈元素的内存。参数pStack是指向栈的指针</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">stack_free</span><span style="color:#E1E4E8;">(Stack </span><span style="color:#F97583;">*</span><span style="color:#FFAB70;">pStack</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">*清空栈</span></span>
<span class="line"><span style="color:#6A737D;">*-clear函数把pStack指向的栈中的数据元素清空。要清空栈内的数据元</span></span>
<span class="line"><span style="color:#6A737D;">素，其实并不需要真的把那些数据删除，只要把栈顶指针移到栈底即可。</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">stack_clear</span><span style="color:#E1E4E8;">(Stack </span><span style="color:#F97583;">*</span><span style="color:#FFAB70;">pStack</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">*判断栈是否为空</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"><span style="color:#E1E4E8;">Bool </span><span style="color:#B392F0;">is_empty</span><span style="color:#E1E4E8;">(Stack</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">pStack</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">*求栈的长度</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">stack_length</span><span style="color:#E1E4E8;">(Stack </span><span style="color:#F97583;">*</span><span style="color:#FFAB70;">pStack</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">*取栈顶元素</span></span>
<span class="line"><span style="color:#6A737D;">*-get_top函数读取栈顶元素。参数pStack是栈指针，pElem是数据元素指</span></span>
<span class="line"><span style="color:#6A737D;">*针，读取的栈顶元素存入*pElem 中。如果成功，返回OK；如果失败，返</span></span>
<span class="line"><span style="color:#6A737D;">*回ERROR。这个函数不改变栈顶指针的值。</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"><span style="color:#E1E4E8;">Status </span><span style="color:#B392F0;">stack_get_top</span><span style="color:#E1E4E8;">(Stack </span><span style="color:#FFAB70;">pStack</span><span style="color:#E1E4E8;">,StackElem </span><span style="color:#FFAB70;">pElem</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">*入栈</span></span>
<span class="line"><span style="color:#6A737D;">*-push函数把pElem指向的数据元素压入pStack指向的栈。如果成功，返</span></span>
<span class="line"><span style="color:#6A737D;">*回OK；如果失败，返回ERROR。</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"><span style="color:#E1E4E8;">Status </span><span style="color:#B392F0;">stack_push</span><span style="color:#E1E4E8;">(Stack </span><span style="color:#F97583;">*</span><span style="color:#FFAB70;">pStack</span><span style="color:#E1E4E8;">,StackElem </span><span style="color:#F97583;">*</span><span style="color:#FFAB70;">pElem</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">*出栈</span></span>
<span class="line"><span style="color:#6A737D;">*-pop函数弹出栈顶元素，pStack是栈指针，弹出的元素存入pElem指向的</span></span>
<span class="line"><span style="color:#6A737D;">*内存中。如果成功，返回OK；如果失败，返回ERROR。</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"><span style="color:#E1E4E8;">Status </span><span style="color:#B392F0;">stack_pop</span><span style="color:#E1E4E8;">(Stack </span><span style="color:#FFAB70;">pStack</span><span style="color:#E1E4E8;">,StackElem </span><span style="color:#FFAB70;">pElem</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">*遍历栈</span></span>
<span class="line"><span style="color:#6A737D;">*-traverse函数遍历由pStack所指向的栈，对栈中的每个数据元素执</span></span>
<span class="line"><span style="color:#6A737D;">*行visit操作。如果成功，返回OK；如果失败，返回ERROR。其中visit是</span></span>
<span class="line"><span style="color:#6A737D;">*函数指针，它的参数是数据元素的指针，返回值是Status类型的。</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"><span style="color:#E1E4E8;">Status </span><span style="color:#B392F0;">stack_traverse</span><span style="color:#E1E4E8;">(Stack </span><span style="color:#F97583;">*</span><span style="color:#FFAB70;">pStack</span><span style="color:#E1E4E8;">,</span><span style="color:#B392F0;">Status</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#FFAB70;">visit</span><span style="color:#E1E4E8;">)());</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//栈的定义</span></span>
<span class="line"><span style="color:#D73A49;">typedef</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">struct</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    StackElem</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> pBase;</span></span>
<span class="line"><span style="color:#24292E;">    StackElem</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> pTop;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> size;</span></span>
<span class="line"><span style="color:#24292E;">} Stack;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">*对栈进行初始化</span></span>
<span class="line"><span style="color:#6A737D;">*-init函数对栈做初始化操作，也就是为栈的成员变量赋初值。参</span></span>
<span class="line"><span style="color:#6A737D;">*数pStack是指向栈的指针。如果初始化成功，返回OK；如果失败，返</span></span>
<span class="line"><span style="color:#6A737D;">*回ERROR。在为栈的成员变量pBase和pTop赋初值之前，需要为栈元素分配</span></span>
<span class="line"><span style="color:#6A737D;">*内存空间。</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"><span style="color:#24292E;">Status </span><span style="color:#6F42C1;">init_stack</span><span style="color:#24292E;">(Stack</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">pStack</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">*释放栈元素的内存</span></span>
<span class="line"><span style="color:#6A737D;">*-free函数释放栈元素的内存。参数pStack是指向栈的指针</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">stack_free</span><span style="color:#24292E;">(Stack </span><span style="color:#D73A49;">*</span><span style="color:#E36209;">pStack</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">*清空栈</span></span>
<span class="line"><span style="color:#6A737D;">*-clear函数把pStack指向的栈中的数据元素清空。要清空栈内的数据元</span></span>
<span class="line"><span style="color:#6A737D;">素，其实并不需要真的把那些数据删除，只要把栈顶指针移到栈底即可。</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">stack_clear</span><span style="color:#24292E;">(Stack </span><span style="color:#D73A49;">*</span><span style="color:#E36209;">pStack</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">*判断栈是否为空</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"><span style="color:#24292E;">Bool </span><span style="color:#6F42C1;">is_empty</span><span style="color:#24292E;">(Stack</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">pStack</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">*求栈的长度</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">stack_length</span><span style="color:#24292E;">(Stack </span><span style="color:#D73A49;">*</span><span style="color:#E36209;">pStack</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">*取栈顶元素</span></span>
<span class="line"><span style="color:#6A737D;">*-get_top函数读取栈顶元素。参数pStack是栈指针，pElem是数据元素指</span></span>
<span class="line"><span style="color:#6A737D;">*针，读取的栈顶元素存入*pElem 中。如果成功，返回OK；如果失败，返</span></span>
<span class="line"><span style="color:#6A737D;">*回ERROR。这个函数不改变栈顶指针的值。</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"><span style="color:#24292E;">Status </span><span style="color:#6F42C1;">stack_get_top</span><span style="color:#24292E;">(Stack </span><span style="color:#E36209;">pStack</span><span style="color:#24292E;">,StackElem </span><span style="color:#E36209;">pElem</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">*入栈</span></span>
<span class="line"><span style="color:#6A737D;">*-push函数把pElem指向的数据元素压入pStack指向的栈。如果成功，返</span></span>
<span class="line"><span style="color:#6A737D;">*回OK；如果失败，返回ERROR。</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"><span style="color:#24292E;">Status </span><span style="color:#6F42C1;">stack_push</span><span style="color:#24292E;">(Stack </span><span style="color:#D73A49;">*</span><span style="color:#E36209;">pStack</span><span style="color:#24292E;">,StackElem </span><span style="color:#D73A49;">*</span><span style="color:#E36209;">pElem</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">*出栈</span></span>
<span class="line"><span style="color:#6A737D;">*-pop函数弹出栈顶元素，pStack是栈指针，弹出的元素存入pElem指向的</span></span>
<span class="line"><span style="color:#6A737D;">*内存中。如果成功，返回OK；如果失败，返回ERROR。</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"><span style="color:#24292E;">Status </span><span style="color:#6F42C1;">stack_pop</span><span style="color:#24292E;">(Stack </span><span style="color:#E36209;">pStack</span><span style="color:#24292E;">,StackElem </span><span style="color:#E36209;">pElem</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">*遍历栈</span></span>
<span class="line"><span style="color:#6A737D;">*-traverse函数遍历由pStack所指向的栈，对栈中的每个数据元素执</span></span>
<span class="line"><span style="color:#6A737D;">*行visit操作。如果成功，返回OK；如果失败，返回ERROR。其中visit是</span></span>
<span class="line"><span style="color:#6A737D;">*函数指针，它的参数是数据元素的指针，返回值是Status类型的。</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"><span style="color:#24292E;">Status </span><span style="color:#6F42C1;">stack_traverse</span><span style="color:#24292E;">(Stack </span><span style="color:#D73A49;">*</span><span style="color:#E36209;">pStack</span><span style="color:#24292E;">,</span><span style="color:#6F42C1;">Status</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#E36209;">visit</span><span style="color:#24292E;">)());</span></span></code></pre></div><h3 id="思考" tabindex="-1">思考 <a class="header-anchor" href="#思考" aria-label="Permalink to &quot;思考&quot;">​</a></h3><p>或许你会发现在之后实现计算器过程中用不到这么多的栈操作函数，但是为什么要定义这么多操作函数呢？其实这是基于软件工程的思想（大家也都是软件工程师），当我们实现一个类（Stack）我们必须定义所有相关的接口，因为我们不知道这些类的用户会使用什么操作。这种思想使得程序易于扩展（当我们想为程序增加其他功能时，不必去修改底层代码，而是直接调用接口）。</p><h3 id="提示" tabindex="-1">提示 <a class="header-anchor" href="#提示" aria-label="Permalink to &quot;提示&quot;">​</a></h3><ul><li>使用枚举表示状态</li><li><a href="https://blog.csdn.net/u011436427/article/details/94734290" target="_blank" rel="noreferrer">函数指针</a>的使用</li><li>多文件构建</li></ul><h2 id="part2-中缀表达式转后缀" tabindex="-1"><strong>Part2 中缀表达式转后缀</strong> <a class="header-anchor" href="#part2-中缀表达式转后缀" aria-label="Permalink to &quot;**Part2 中缀表达式转后缀**&quot;">​</a></h2><blockquote><p>例如a + b，表示将a 和b 相加，我们称这种表达式为中缀表达式。虽然中缀表达式看起来十分自然，但是计算机处理起来并不方 便。1929 年，波兰数学家Lukasiewicz 提出一种把运算符放在两个操作数前 面的表示法，例如+ab，表示做加法操作，两个操作数是a和b。我们称这 种表达式为前缀表达式，又称波兰式。如果把运算符写在两个操作数的后 面，例如ab+，那么就得到一种后缀表达式，又称逆波兰式。</p></blockquote><h4 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h4><p>输入：</p>`,18),t=o("p",null,"输出：",-1),r=a('<h3 id="任务-1" tabindex="-1"><strong>任务</strong> <a class="header-anchor" href="#任务-1" aria-label="Permalink to &quot;**任务**&quot;">​</a></h3><ul><li>了解中缀、前缀和后缀表达式</li><li>使用你在之前实现的栈，实现中缀表达式转换为后缀表达式</li><li>支持加减乘除运算（带括号）</li></ul><h2 id="题目要求" tabindex="-1"><strong>题目要求</strong> <a class="header-anchor" href="#题目要求" aria-label="Permalink to &quot;**题目要求**&quot;">​</a></h2><ul><li>正确的可执行的代码</li><li>在linux环境下编写并测试</li><li>回答上面的思考题</li><li>回答题目中的问题时，表达自己的想法</li><li>良好的代码习惯（加分项）</li><li>代码运行的截图（输入中缀表达式，输出正确的后缀表达式）</li><li>请提交PDF文档</li></ul><h2 id="本题提交方式" tabindex="-1"><strong>本题提交方式</strong> <a class="header-anchor" href="#本题提交方式" aria-label="Permalink to &quot;**本题提交方式**&quot;">​</a></h2><blockquote><p>收件邮箱：<a href="mailto:glimmer401@outlook.com" target="_blank" rel="noreferrer">glimmer401@outlook.com</a></p><p>主题格式： 学号-姓名-考核-C-01</p><p>主题示例：2024090101012-张三-考核-Cproject-01</p></blockquote><h2 id="出题人联系方式" tabindex="-1"><strong>出题人联系方式</strong> <a class="header-anchor" href="#出题人联系方式" aria-label="Permalink to &quot;**出题人联系方式**&quot;">​</a></h2><blockquote><p>QQ：3193552916</p><p>邮箱：<a href="mailto:3193552916@qq.com" target="_blank" rel="noreferrer">3193552916@qq.com</a></p></blockquote>',8);function i(y,E,A,k,D,S){return l(),p("div",null,[c,s(" a + (b ∗ c − d)/e "),t,s(" a b c ∗ d − e / + "),r])}const u=n(e,[["render",i]]);export{h as __pageData,u as default};
