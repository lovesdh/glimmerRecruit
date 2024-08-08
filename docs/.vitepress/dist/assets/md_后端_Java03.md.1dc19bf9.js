import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.e90f0c97.js";const d=JSON.parse('{"title":"Java03 - 异常、网络#","description":"","frontmatter":{},"headers":[],"relativePath":"md/后端/Java03.md","filePath":"md/后端/Java03.md"}'),p={name:"md/后端/Java03.md"},o=l(`<p><img src="https://pic.imgdb.cn/item/64fdbcf1661c6c8e543bdfd9.png" alt="Web后端"></p><h1 id="java03-异常、网络" tabindex="-1">Java03 - 异常、网络# <a class="header-anchor" href="#java03-异常、网络" aria-label="Permalink to &quot;Java03 - 异常、网络#&quot;">​</a></h1><blockquote><p>提醒：学习了上一题的封装等等概念，请你在本题尽可能注意自己的代码的结构条理哦！</p></blockquote><h2 id="part1-异常" tabindex="-1">Part1 异常 <a class="header-anchor" href="#part1-异常" aria-label="Permalink to &quot;Part1 异常&quot;">​</a></h2><p>欢迎来到Java的第三题，如果你是一道一道题目做过来的，那么一定要祝贺你，真的很厉害！</p><p>一路走来的你一定也很多次地有过程序 <em>“报错”</em> 的经历吧。你有没有仔细观察过出错时的提示呢？请用下面这个简单的程序引发错误：</p><div class="language-Java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">TestException</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">static</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">div</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> a</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">b;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">static</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">String</span><span style="color:#E1E4E8;">[] </span><span style="color:#FFAB70;">args</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">div</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">//用0作除数的错误</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">TestException</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">static</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">div</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">a</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">b</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> a</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">b;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">static</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">String</span><span style="color:#24292E;">[] </span><span style="color:#E36209;">args</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> a </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">div</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">10</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">//用0作除数的错误</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>运行后发生了什么？</p><h3 id="task1" tabindex="-1">Task1 <a class="header-anchor" href="#task1" aria-label="Permalink to &quot;Task1&quot;">​</a></h3><p>请你学习Java异常的概念，并完成下面的几个要求。</p><blockquote><p>1.请运行上述程序，将控制台中的运行结果的截图附在题解上，观察其中包含什么信息<br> 2.学习try/catch语句，处理上述代码的异常，并将代码附上<br> 3.看看下面的图，了解一下异常的类型，了解一下Error和Exception的不同。</p></blockquote><p><img src="https://pic.imgdb.cn/item/64fdb9b9661c6c8e543b79f5.jpg" alt="Throwable"></p><hr><h3 id="task2" tabindex="-1">Task2 <a class="header-anchor" href="#task2" aria-label="Permalink to &quot;Task2&quot;">​</a></h3><p>实际上，你可以让自己的类继承Exception类，从而创建自定义异常。 请你自己编写一个自定义异常MyException，让div方法在除数是0时抛出MyException。</p><blockquote><p>了解throw关键字的用法<br> 完成上述要求，附上各部分代码，可以把遇到的问题和解决过程也记录下来。</p></blockquote><hr><h2 id="part2-io流与文件" tabindex="-1">Part2 IO流与文件 <a class="header-anchor" href="#part2-io流与文件" aria-label="Permalink to &quot;Part2 IO流与文件&quot;">​</a></h2><p>你应该听说过，计算机中的一切数据都是以二进制的形式存储的，所有的文件等等都是可以用一串二进制这序列表示出来的。你有没有想过，文件在电脑里被复制、从一个设备传输至另一个设备是怎么发生的？</p><h3 id="task3" tabindex="-1">Task3 <a class="header-anchor" href="#task3" aria-label="Permalink to &quot;Task3&quot;">​</a></h3><p>了解一下什么是<strong>流</strong>，什么是InputStream/OutputStream类，并在完成下面的任务的过程中掌握其基本用法。</p><blockquote><p>请你编写代码，实现将下面给出的类的对象保存到一个文件里和从文件里读取出的功能。（会用到FileInputStream/FileOutputStream，ObjectInputStream/ObjectOutputStream）将代码附在题解上</p></blockquote><div class="language-Java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//类示例</span></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Message</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">implements</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Serializable</span><span style="color:#E1E4E8;"> {</span><span style="color:#6A737D;">//为什么要继承这个接口？</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> a;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">double</span><span style="color:#E1E4E8;"> b;</span></span>
<span class="line"><span style="color:#E1E4E8;">    String c;</span></span>
<span class="line"><span style="color:#E1E4E8;">    Message m;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Message</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">double</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">, String </span><span style="color:#FFAB70;">c</span><span style="color:#E1E4E8;">, Message </span><span style="color:#FFAB70;">m</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.a </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> a;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.b </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> b;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.c </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> c;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.m </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> m;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    @</span><span style="color:#F97583;">Override</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> String </span><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;Message{&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#9ECBFF;">&quot;a=&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">+</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#9ECBFF;">&quot;, b=&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> b </span><span style="color:#F97583;">+</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#9ECBFF;">&quot;, c=&#39;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> c </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;</span><span style="color:#79B8FF;">\\&#39;</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#9ECBFF;">&quot;, m=&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> m </span><span style="color:#F97583;">+</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#9ECBFF;">&#39;}&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//类示例</span></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Message</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">implements</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Serializable</span><span style="color:#24292E;"> {</span><span style="color:#6A737D;">//为什么要继承这个接口？</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> a;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">double</span><span style="color:#24292E;"> b;</span></span>
<span class="line"><span style="color:#24292E;">    String c;</span></span>
<span class="line"><span style="color:#24292E;">    Message m;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Message</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">a</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">double</span><span style="color:#24292E;"> </span><span style="color:#E36209;">b</span><span style="color:#24292E;">, String </span><span style="color:#E36209;">c</span><span style="color:#24292E;">, Message </span><span style="color:#E36209;">m</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.a </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> a;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.b </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> b;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.c </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> c;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.m </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> m;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    @</span><span style="color:#D73A49;">Override</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> String </span><span style="color:#6F42C1;">toString</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;Message{&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#032F62;">&quot;a=&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> a </span><span style="color:#D73A49;">+</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#032F62;">&quot;, b=&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> b </span><span style="color:#D73A49;">+</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#032F62;">&quot;, c=&#39;&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> c </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;</span><span style="color:#005CC5;">\\&#39;</span><span style="color:#032F62;">&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#032F62;">&quot;, m=&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> m </span><span style="color:#D73A49;">+</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#032F62;">&#39;}&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language-Java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">Message message </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Message</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">2.0</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;abc&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Message</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1.2</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;sakj&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">));</span><span style="color:#6A737D;">//具体对象示例</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">Message message </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Message</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">10</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">2.0</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;abc&quot;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Message</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1.2</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;sakj&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">));</span><span style="color:#6A737D;">//具体对象示例</span></span></code></pre></div><hr><h2 id="part3-socket" tabindex="-1">Part3 Socket <a class="header-anchor" href="#part3-socket" aria-label="Permalink to &quot;Part3 Socket&quot;">​</a></h2><p>网络贯穿生活的方方面面，学习后端也需要了解网络的知识。这个部分我们先来简单地学习一下Socket编程。</p><h3 id="task4" tabindex="-1">Task4 <a class="header-anchor" href="#task4" aria-label="Permalink to &quot;Task4&quot;">​</a></h3><p>了解TCP/IP协议是什么<br> Java中有一个叫做InetAddress的类，可以获取指定主机的信息。<br> 尝试运行以下代码,理解主机名、域名和ip的联系与不同</p><div class="language-Java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> java.net.InetAddress;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Inet</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">static</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">String</span><span style="color:#E1E4E8;">[] </span><span style="color:#FFAB70;">args</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">throws</span><span style="color:#E1E4E8;"> Exception{</span></span>
<span class="line"><span style="color:#E1E4E8;">        InetAddress address </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> InetAddress.</span><span style="color:#B392F0;">getLocalHost</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        System.out.</span><span style="color:#B392F0;">println</span><span style="color:#E1E4E8;">(address);</span></span>
<span class="line"><span style="color:#E1E4E8;">        address</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">InetAddress.</span><span style="color:#B392F0;">getByName</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;glimmer.space&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        System.out.</span><span style="color:#B392F0;">println</span><span style="color:#E1E4E8;">(address);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> java.net.InetAddress;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Inet</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">static</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">String</span><span style="color:#24292E;">[] </span><span style="color:#E36209;">args</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">throws</span><span style="color:#24292E;"> Exception{</span></span>
<span class="line"><span style="color:#24292E;">        InetAddress address </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> InetAddress.</span><span style="color:#6F42C1;">getLocalHost</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">        System.out.</span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">(address);</span></span>
<span class="line"><span style="color:#24292E;">        address</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">InetAddress.</span><span style="color:#6F42C1;">getByName</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;glimmer.space&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        System.out.</span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">(address);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>通过URL，我们可以获取各种网络上的资源。<br> Java提供了java.net.URL类，通过它，我们可以研究URL构造。<br> 尝试运行以下代码，分析URL包含了哪些信息。</p><div class="language-Java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> java.net.MalformedURLException;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> java.net.URL;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">LookURL</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">static</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">String</span><span style="color:#E1E4E8;">[] </span><span style="color:#FFAB70;">args</span><span style="color:#E1E4E8;">)  {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                URL url </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">URL</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;https://www.bilibili.com/video/BV1nU4y1i7Lt?share_source=copy_web&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">                System.out.</span><span style="color:#B392F0;">println</span><span style="color:#E1E4E8;">(url.</span><span style="color:#B392F0;">getProtocol</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">                System.out.</span><span style="color:#B392F0;">println</span><span style="color:#E1E4E8;">(url.</span><span style="color:#B392F0;">getAuthority</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">                System.out.</span><span style="color:#B392F0;">println</span><span style="color:#E1E4E8;">(url.</span><span style="color:#B392F0;">getFile</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">                System.out.</span><span style="color:#B392F0;">println</span><span style="color:#E1E4E8;">(url.</span><span style="color:#B392F0;">getHost</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">                System.out.</span><span style="color:#B392F0;">println</span><span style="color:#E1E4E8;">(url.</span><span style="color:#B392F0;">getPath</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">                System.out.</span><span style="color:#B392F0;">println</span><span style="color:#E1E4E8;">(url.</span><span style="color:#B392F0;">getPort</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">                System.out.</span><span style="color:#B392F0;">println</span><span style="color:#E1E4E8;">(url.</span><span style="color:#B392F0;">getDefaultPort</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">                System.out.</span><span style="color:#B392F0;">println</span><span style="color:#E1E4E8;">(url.</span><span style="color:#B392F0;">getQuery</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">                System.out.</span><span style="color:#B392F0;">println</span><span style="color:#E1E4E8;">(url.</span><span style="color:#B392F0;">getRef</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">            } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (MalformedURLException </span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">throw</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">RuntimeException</span><span style="color:#E1E4E8;">(e);</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> java.net.MalformedURLException;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> java.net.URL;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">LookURL</span><span style="color:#24292E;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">static</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">String</span><span style="color:#24292E;">[] </span><span style="color:#E36209;">args</span><span style="color:#24292E;">)  {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">try</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                URL url </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">URL</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;https://www.bilibili.com/video/BV1nU4y1i7Lt?share_source=copy_web&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">                System.out.</span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">(url.</span><span style="color:#6F42C1;">getProtocol</span><span style="color:#24292E;">());</span></span>
<span class="line"><span style="color:#24292E;">                System.out.</span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">(url.</span><span style="color:#6F42C1;">getAuthority</span><span style="color:#24292E;">());</span></span>
<span class="line"><span style="color:#24292E;">                System.out.</span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">(url.</span><span style="color:#6F42C1;">getFile</span><span style="color:#24292E;">());</span></span>
<span class="line"><span style="color:#24292E;">                System.out.</span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">(url.</span><span style="color:#6F42C1;">getHost</span><span style="color:#24292E;">());</span></span>
<span class="line"><span style="color:#24292E;">                System.out.</span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">(url.</span><span style="color:#6F42C1;">getPath</span><span style="color:#24292E;">());</span></span>
<span class="line"><span style="color:#24292E;">                System.out.</span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">(url.</span><span style="color:#6F42C1;">getPort</span><span style="color:#24292E;">());</span></span>
<span class="line"><span style="color:#24292E;">                System.out.</span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">(url.</span><span style="color:#6F42C1;">getDefaultPort</span><span style="color:#24292E;">());</span></span>
<span class="line"><span style="color:#24292E;">                System.out.</span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">(url.</span><span style="color:#6F42C1;">getQuery</span><span style="color:#24292E;">());</span></span>
<span class="line"><span style="color:#24292E;">                System.out.</span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">(url.</span><span style="color:#6F42C1;">getRef</span><span style="color:#24292E;">());</span></span>
<span class="line"><span style="color:#24292E;">            } </span><span style="color:#D73A49;">catch</span><span style="color:#24292E;"> (MalformedURLException </span><span style="color:#E36209;">e</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">throw</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">RuntimeException</span><span style="color:#24292E;">(e);</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><hr><h3 id="task5" tabindex="-1">Task5 <a class="header-anchor" href="#task5" aria-label="Permalink to &quot;Task5&quot;">​</a></h3><p>请你学习如何创建Socket对象并建立连接，学习Socket的IO方法，并通过客户端-服务器结构编写一个程序。实现客户端和服务器互相发送文本信息并读取。有兴趣的话也可尝试将之前的对象或者电脑上的各种文件进行收发。</p><blockquote><p>记录下你在做题过程中遇到的问题和解决过程<br> 把代码附在题解上</p></blockquote><hr><h3 id="task6" tabindex="-1">Task6 <a class="header-anchor" href="#task6" aria-label="Permalink to &quot;Task6&quot;">​</a></h3><p>在Task3的代码中曾经出现了一个“@”符号，你注意到了吗？有没有想一想那是什么？</p><p>请你自行了解一下Java的注解，大概了解其功能，以备后面题目需要（本题可以不作答）</p><h1 id="本题提交方式" tabindex="-1">本题提交方式 <a class="header-anchor" href="#本题提交方式" aria-label="Permalink to &quot;本题提交方式&quot;">​</a></h1><pre><code>收件邮箱：glimmer401@outlook.com
主题格式： 学号-姓名-考核-Java-03
主题示例：2024090901012-张三-考核-Java-03
</code></pre><h1 id="出题者联系方式" tabindex="-1">出题者联系方式 <a class="header-anchor" href="#出题者联系方式" aria-label="Permalink to &quot;出题者联系方式&quot;">​</a></h1><p>QQ：602599288</p>`,44),e=[o];function t(c,r,E,y,i,F){return a(),n("div",null,e)}const h=s(p,[["render",t]]);export{d as __pageData,h as default};
