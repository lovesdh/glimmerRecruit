import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.e90f0c97.js";const d=JSON.parse('{"title":"CS-EASY-03 内存模型","description":"","frontmatter":{},"headers":[],"relativePath":"md/计算机系统/CS-EASY-03 内存模型.md","filePath":"md/计算机系统/CS-EASY-03 内存模型.md"}'),p={name:"md/计算机系统/CS-EASY-03 内存模型.md"},o=l(`<p><img src="https://pic.imgdb.cn/item/64c4a2881ddac507cc007975.png" alt=""></p><h1 id="c-basis-03-神秘密文" tabindex="-1"><strong>CS-EASY-03 内存模型</strong> <a class="header-anchor" href="#c-basis-03-神秘密文" aria-label="Permalink to &quot;**CS-EASY-03 内存模型**&quot;">​</a></h1><blockquote><p>由于loafer招新摸鱼，受到了微光神秘人的惩罚！神秘人修改了他的笔记本电脑，留下一张便条，上面写道：“要想拿到电脑密码，先解开这段神秘密文 <strong>（见群文件“神秘密文.glimmer”）</strong> 吧！”。可是loafer实在是太菜了，好心的你能帮帮他吗？</p></blockquote><p><strong>该题相关文件请看招新群群文件夹“CS-EASY-03 内存模型”。</strong></p><h2 id="part-1-密文之钥" tabindex="-1">Part 1 密文之钥 <a class="header-anchor" href="#part-1-密文之钥" aria-label="Permalink to &quot;Part 1 密文之钥&quot;">​</a></h2><p>正当你们愁眉苦脸时，神秘人又给你们发了一条消息，内容如下：</p><blockquote><p>loafer,没想到你这么菜，那我只好给你一些提示了。</p><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span></span>
<span class="line"><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3</span></span>
<span class="line"><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3</span></span>
<span class="line"><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">4</span></span>
<span class="line"><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#F97583;">..</span><span style="color:#E1E4E8;">.</span></span>
<span class="line"><span style="color:#E1E4E8;">(详细请见群文件</span><span style="color:#9ECBFF;">&quot;密文之钥.txt&quot;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span></span>
<span class="line"><span style="color:#005CC5;">2</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3</span></span>
<span class="line"><span style="color:#005CC5;">3</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#005CC5;">2</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3</span></span>
<span class="line"><span style="color:#005CC5;">3</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">4</span></span>
<span class="line"><span style="color:#005CC5;">2</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#D73A49;">..</span><span style="color:#24292E;">.</span></span>
<span class="line"><span style="color:#24292E;">(详细请见群文件</span><span style="color:#032F62;">&quot;密文之钥.txt&quot;</span><span style="color:#24292E;">)</span></span></code></pre></div><p>这是解开那段密文的密钥，不过需要根据我的规则对其进行操作才能得到真正的信息。 规则如下：</p><ul><li><p>实现链表的创建，在链表的头部或者尾部插入节点， 节点删除，遍历打印等基本功能。</p></li><li><p>密文中，每行第一个数字代表链表操作类型。</p><ul><li>1 x y 为从链表头部先插入y，再插入x。</li><li>2 x y 为从链表尾部先插入x，再插入y。</li><li>3 x 为删除链表从头到尾数第x个节点。</li></ul></li><li><p>按照顺序依次执行每一步操作，最后从前往后遍历打印整个链表，最后得到字符串就是真正的密钥。</p></li></ul><p>提示放这了，要是还解不开，那你就别想再玩电脑了！</p></blockquote><p>然而现在的你可能并不是很懂什么是链表，但是没有关系，loafer会帮助你理解它的。</p><h3 id="step-1-内存与指针" tabindex="-1">step 1 内存与指针 <a class="header-anchor" href="#step-1-内存与指针" aria-label="Permalink to &quot;step 1 内存与指针&quot;">​</a></h3><p>要理解链表，首先我们先来了解什么是内存和指针。</p><p>一个由C/C++编译的程序占用的内存分为栈区(stack)，堆区(heap)，全局区(static)等区域，内存的不同区储存的数据的种类也不相同。</p><p>每一个变量都有一个内存位置，每一个内存位置都定义了可使用 <strong>&amp;</strong> 运算符访问的地址，它表示了在内存中的一个地址，指针变量就是存放内存地址的变量。</p><p>请深入了解内存与指针，完成下面的任务。</p><h4 id="task" tabindex="-1">task <a class="header-anchor" href="#task" aria-label="Permalink to &quot;task&quot;">​</a></h4><ol><li>请问运行Test 函数会有什么样的结果？为什么函数<code>GetMemory1</code>和函数<code>GetMemory2</code>会导致不同的结果？</li></ol><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">char*</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">GetMemory1</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;">) </span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">char</span><span style="color:#E1E4E8;"> p</span><span style="color:#F97583;">[]</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;hello world</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">char*</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">GetMemory2</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;">) </span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;hello world</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Test</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;">) </span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">char</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">str1 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">str2 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        str1 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">GetMemory1</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        str2 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">GetMemory2</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(str1);</span></span>
<span class="line"><span style="color:#E1E4E8;">    	</span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;---------</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(str2);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">char*</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">GetMemory1</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">void</span><span style="color:#24292E;">) </span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">char</span><span style="color:#24292E;"> p</span><span style="color:#D73A49;">[]</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;hello world</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> p;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">char*</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">GetMemory2</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">void</span><span style="color:#24292E;">) </span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;hello world</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Test</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">void</span><span style="color:#24292E;">) </span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">char</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">str1 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">str2 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        str1 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">GetMemory1</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">        str2 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">GetMemory2</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(str1);</span></span>
<span class="line"><span style="color:#24292E;">    	</span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;---------</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(str2);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><ol start="2"><li>进行了如下修改后，请问此时再运行Test函数又会有什么样的结果？为什么会出现这种问题？</li></ol><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">GetMemory</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">char*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">p</span><span style="color:#E1E4E8;">) </span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">        p </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">char*</span><span style="color:#E1E4E8;">)</span><span style="color:#B392F0;">malloc</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Test</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;">) </span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">char*</span><span style="color:#E1E4E8;"> str </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">GetMemory</span><span style="color:#E1E4E8;">(str);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">strcpy</span><span style="color:#E1E4E8;">(str, </span><span style="color:#9ECBFF;">&quot;hello world</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(str);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">GetMemory</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">char*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">p</span><span style="color:#24292E;">) </span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">        p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">char*</span><span style="color:#24292E;">)</span><span style="color:#6F42C1;">malloc</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">100</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Test</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">void</span><span style="color:#24292E;">) </span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">char*</span><span style="color:#24292E;"> str </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">GetMemory</span><span style="color:#24292E;">(str);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">strcpy</span><span style="color:#24292E;">(str, </span><span style="color:#032F62;">&quot;hello world</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(str);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>3.下面的函数<code>GetMemory1</code>和函数<code>GetMemory2</code>有什么区别？哪一个是正确的？为什么？</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">char*</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">GetMemory1</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;">) </span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">char</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">p</span><span style="color:#E1E4E8;">[</span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">char*</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">GetMemory2</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;">) </span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#F97583;">char</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">p </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">char*</span><span style="color:#E1E4E8;">)</span><span style="color:#B392F0;">malloc</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Test</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;">) </span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">char</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">str1 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">str2 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        str1 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">GetMemory1</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        str2 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">GetMemory2</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">strcpy</span><span style="color:#E1E4E8;">(str1, </span><span style="color:#9ECBFF;">&quot;hello world</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">strcpy</span><span style="color:#E1E4E8;">(str2, </span><span style="color:#9ECBFF;">&quot;hello world</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(str1);</span></span>
<span class="line"><span style="color:#E1E4E8;">    	</span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;---------</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(str2);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">char*</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">GetMemory1</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">void</span><span style="color:#24292E;">) </span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">char</span><span style="color:#24292E;"> </span><span style="color:#E36209;">p</span><span style="color:#24292E;">[</span><span style="color:#005CC5;">100</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> p;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">char*</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">GetMemory2</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">void</span><span style="color:#24292E;">) </span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#D73A49;">char</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">char*</span><span style="color:#24292E;">)</span><span style="color:#6F42C1;">malloc</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">100</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> p;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Test</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">void</span><span style="color:#24292E;">) </span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">char</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">str1 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">str2 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        str1 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">GetMemory1</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">        str2 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">GetMemory2</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">strcpy</span><span style="color:#24292E;">(str1, </span><span style="color:#032F62;">&quot;hello world</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">strcpy</span><span style="color:#24292E;">(str2, </span><span style="color:#032F62;">&quot;hello world</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(str1);</span></span>
<span class="line"><span style="color:#24292E;">    	</span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;---------</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(str2);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>提交对第一、第二，第三三步运行结果的分析。</p><h3 id="step-2-链表的实现" tabindex="-1">step 2 链表的实现 <a class="header-anchor" href="#step-2-链表的实现" aria-label="Permalink to &quot;step 2 链表的实现&quot;">​</a></h3><p>我们先来看看链表的实现原理。</p><p>链表一般由多个节点组成，每个节点包括数据域和指针域两个部分，数据域里包含了你需要的信息，指针域储存了下一个节点的地址。</p><p>指针域的存在使得在链表的任何一个节点，都可以沿着指针域依次访问下去，犹如链条一般。</p><p><img src="https://pic.imgdb.cn/item/64d6af0a1ddac507ccfabab8.jpg" alt="img"></p><p>利用搜索引擎详细学习链表相关知识后完成下面的任务。</p><h4 id="task-1" tabindex="-1">task <a class="header-anchor" href="#task-1" aria-label="Permalink to &quot;task&quot;">​</a></h4><p>实现链表的创建，在链表的头部或者尾部插入节点， 节点删除，遍历打印等基本功能。</p><p>提交正确编写可执行代码及运行截图，给出必要的注释说明。</p><h3 id="step-3-获取密钥" tabindex="-1">step 3 获取密钥 <a class="header-anchor" href="#step-3-获取密钥" aria-label="Permalink to &quot;step 3 获取密钥&quot;">​</a></h3><p>现在修改你编写的链表代码，输入密文之钥中的数据，得到真正的密钥吧。</p><h4 id="task-2" tabindex="-1">task <a class="header-anchor" href="#task-2" aria-label="Permalink to &quot;task&quot;">​</a></h4><ul><li>提交修改后的代码及运行截图。</li><li>提交真正的密钥。</li></ul><h3 id="温馨提示" tabindex="-1">温馨提示 <a class="header-anchor" href="#温馨提示" aria-label="Permalink to &quot;温馨提示&quot;">​</a></h3><ul><li>请不要颅内模拟一遍后直接将答案打印出来。</li><li>请使用链表数据结构实现。</li><li>请获取答案后不要提前剧透给其他同级。</li><li>如果实在弄不出来可以私聊出题人获取真正的密钥，但不要透露给其他人。</li></ul><h2 id="part-2-破解密文" tabindex="-1">Part 2 破解密文 <a class="header-anchor" href="#part-2-破解密文" aria-label="Permalink to &quot;Part 2 破解密文&quot;">​</a></h2><p>当你们得到了真正的密钥，却发现是一串古怪的数字，这个时候神秘人又发来了消息：</p><blockquote><p>可以嘛，没想到你们这么快就破解了密钥。</p><p>作为奖赏就把这三条线索给你们吧。</p><ol><li>神秘密文本质上是一串字符。</li><li>密钥中的数字与栈的操作有关。</li></ol><ul><li>1表示入栈操作，即将神秘密文中的一个字符入栈。</li><li>2表示出栈操作。</li><li>3表示出栈并打印出该字符。</li><li>每次入栈时，入栈的字符都是上一次入栈字符的下一位。</li></ul></blockquote><p>这时，你又犯迷糊了，栈又是啥？这串字符又该如何输入程序？</p><h3 id="step-1-文件操作" tabindex="-1">step 1 文件操作 <a class="header-anchor" href="#step-1-文件操作" aria-label="Permalink to &quot;step 1 文件操作&quot;">​</a></h3><p>在实际运用中，我们常常需要读取外部文件，或者将结果输出到外部，这时，我们就需要用到文件操作，同时，在实现文件批处理时，文件操作也是必要的。</p><p>请了解fopen，freopen，FILE等文件操作相关关键字的含义，并完成密文的读取任务。</p><h4 id="task-3" tabindex="-1">task <a class="header-anchor" href="#task-3" aria-label="Permalink to &quot;task&quot;">​</a></h4><p>提交能够读取密文的代码和密文内容。</p><h3 id="step-2-实现栈" tabindex="-1">step 2 实现栈 <a class="header-anchor" href="#step-2-实现栈" aria-label="Permalink to &quot;step 2 实现栈&quot;">​</a></h3><p>我们来认识一下同样被广泛应用的栈结构。 栈是一种限制操作的线性表，是一个 LIFO 数据结构。 通常，插入操作在栈中被称作入栈 push 。添加元素时，总是在堆栈的末尾添加一个新元素。但是，删除操作，退栈 pop ，将始终删除队列中相对于它的最后一个元素。 在这种被称为 LIFO 数据结构中，将<code>首先处理添加到队列</code>中的<code>最新元素</code>。</p><p><img src="https://pic.imgdb.cn/item/64d6b8c11ddac507cc12c440.jpg" alt="img"></p><p>接下来，请你实现栈的创建，入栈，出栈的功能，并利用你编写的栈和密钥破解出密文中隐藏的信息。</p><h4 id="task-4" tabindex="-1">task <a class="header-anchor" href="#task-4" aria-label="Permalink to &quot;task&quot;">​</a></h4><p>提交正确的可执行的代码和密文中隐藏的信息。</p><h3 id="温馨提示-1" tabindex="-1">温馨提示 <a class="header-anchor" href="#温馨提示-1" aria-label="Permalink to &quot;温馨提示&quot;">​</a></h3><ul><li>虽然可以通过改拓展名等方式获取密文中的字符串，但是还是请用文件操作的请示读取。</li><li>获取密文中的字符串中，不要颅内模拟得到密文中隐藏的信息。</li><li>请获取答案后，不要提前剧透给其他同级。</li><li>所有代码都会跑一遍检验是否符合要求，所以代码一定好好打。</li><li>最后的结果是有明确意义的，如果你的结果没有任何意义可以思考一下自己是不是哪一步出错了。</li></ul><h2 id="拓展" tabindex="-1">拓展 <a class="header-anchor" href="#拓展" aria-label="Permalink to &quot;拓展&quot;">​</a></h2><p>本题仅对文件操作中的读取和数据结构中的链表、栈进行了考察，其他文件操作和数据结构可自行学习。</p><h2 id="题目要求" tabindex="-1">题目要求 <a class="header-anchor" href="#题目要求" aria-label="Permalink to &quot;题目要求&quot;">​</a></h2><ul><li>正确的可执行的代码</li><li>回答题目中的问题时，表达自己的想法</li><li>以文字和截图的形式记录你的完整做题过程</li><li>请提交PDF文档</li></ul><h2 id="需要掌握的知识点" tabindex="-1">需要掌握的知识点 <a class="header-anchor" href="#需要掌握的知识点" aria-label="Permalink to &quot;需要掌握的知识点&quot;">​</a></h2><ul><li>内存与指针</li><li>文件操作</li><li>基础数据结构</li></ul><h2 id="tips" tabindex="-1">tips <a class="header-anchor" href="#tips" aria-label="Permalink to &quot;tips&quot;">​</a></h2><ul><li>善用搜索引擎</li></ul><h2 id="本题提交方式" tabindex="-1"><strong>本题提交方式</strong> <a class="header-anchor" href="#本题提交方式" aria-label="Permalink to &quot;**本题提交方式**&quot;">​</a></h2><blockquote><p>收件邮箱：glimmer401<a href="https://antio2.github.io/Glimmer-Recruit/outlook.com" target="_blank" rel="noreferrer">@outlook.com</a></p><p>主题格式： 学号-姓名-考核-Cbasis-03</p><p>主题示例：2024090901012-张三-考核-Cbasis-03</p></blockquote><h2 id="出题人联系方式" tabindex="-1"><strong>出题人联系方式</strong> <a class="header-anchor" href="#出题人联系方式" aria-label="Permalink to &quot;**出题人联系方式**&quot;">​</a></h2><blockquote><p>loafer</p><p>QQ：251492435</p><p>邮箱：<a href="mailto:loafer_e@qq.com" target="_blank" rel="noreferrer">loafer_e@qq.com</a></p></blockquote>`,65),e=[o];function t(r,c,E,y,i,F){return a(),n("div",null,e)}const u=s(p,[["render",t]]);export{d as __pageData,u as default};
