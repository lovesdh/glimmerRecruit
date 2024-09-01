import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.e90f0c97.js";const u=JSON.parse('{"title":"Java - 08","description":"","frontmatter":{},"headers":[],"relativePath":"md/后端/Java01.md","filePath":"md/后端/Java01.md"}'),l={name:"md/后端/Java01.md"},o=p(`<h1 id="java-08" tabindex="-1">Java - 08 <a class="header-anchor" href="#java-08" aria-label="Permalink to &quot;Java - 08&quot;">​</a></h1><h2 id="数据结构的简单了解" tabindex="-1">数据结构的简单了解 <a class="header-anchor" href="#数据结构的简单了解" aria-label="Permalink to &quot;数据结构的简单了解&quot;">​</a></h2><p>​ <strong>排序对Java来说是小菜一碟</strong>。你可以使用各种工具来收集和管理你的数据，而不用写你自己的排序算法。Java集合框架（Java Collections Framework）中有一个数据结构应该能适用于你需要做的几乎任何事情。无论你是想要维护一个可以轻松增加元素的列表？想按名字查找列表，还是想要自动去除所有重复元素，都可以用它....</p><hr><h4 id="简单挑战——排序问题" tabindex="-1">简单挑战——排序问题 <a class="header-anchor" href="#简单挑战——排序问题" aria-label="Permalink to &quot;简单挑战——排序问题&quot;">​</a></h4><p>​ 假设你现在是一名负责管理酒吧点唱机的程序员，你的任务是负责将收到的歌曲数据进行排序，其他人会负责将数据封装到一个List中。而你现在有一个模拟类来测试你的代码：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">MockSongs</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">static</span><span style="color:#E1E4E8;"> List&lt;</span><span style="color:#F97583;">String</span><span style="color:#E1E4E8;">&gt; </span><span style="color:#B392F0;">getSongStrings</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#E1E4E8;">        List&lt;</span><span style="color:#F97583;">String</span><span style="color:#E1E4E8;">&gt; songs </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> ArrayList&lt;&gt;();</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//模拟将要处理的列表</span></span>
<span class="line"><span style="color:#E1E4E8;">        songs.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;sunrise&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        songs.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;noprice&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        songs.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;thanks&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        songs.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;$100&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        songs.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;havana&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        songs.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;114514&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> songs;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">MockSongs</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">static</span><span style="color:#24292E;"> List&lt;</span><span style="color:#D73A49;">String</span><span style="color:#24292E;">&gt; </span><span style="color:#6F42C1;">getSongStrings</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">        List&lt;</span><span style="color:#D73A49;">String</span><span style="color:#24292E;">&gt; songs </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> ArrayList&lt;&gt;();</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//模拟将要处理的列表</span></span>
<span class="line"><span style="color:#24292E;">        songs.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;sunrise&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        songs.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;noprice&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        songs.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;thanks&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        songs.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;$100&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        songs.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;havana&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        songs.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;114514&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> songs;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p><strong>你的任务——按照字母顺序对歌曲排序</strong></p><p>​ 嗯哼，看起来有些难，不是么。所以对于初学的同学，这里还有一些tips。</p><p><strong>tip</strong>: 正如前面所说，你其实并不需要实现一个排序算法，我们检查<strong>java.util.List</strong>和<strong>java.util.Collections</strong>的<strong>API</strong></p><p><strong>java.util.List</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">sort(Comparator):根据Comparator指定的顺序对这个列表排序</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">sort(Comparator):根据Comparator指定的顺序对这个列表排序</span></span></code></pre></div><p><strong>java.util.Collections</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">sort(List):根据元素的自然顺序</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">sort(List):根据元素的自然顺序</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">sort(List,Comparator):根据Comparator指定的顺序对指定列表排序</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">sort(List,Comparator):根据Comparator指定的顺序对指定列表排序</span></span></code></pre></div><p>​ 如果对<strong>Comparator</strong>感兴趣，你可以考虑自己重构一个Comparator</p><hr><h4 id="进阶挑战——加入对象" tabindex="-1">进阶挑战——加入对象 <a class="header-anchor" href="#进阶挑战——加入对象" aria-label="Permalink to &quot;进阶挑战——加入对象&quot;">​</a></h4><p>​ 在前面的task中，我们在<strong>List</strong>中加入了<strong>String</strong>作为存储的歌曲名字，现在我们需要加入更多的信息，于是我们引入<strong>Song</strong>对象来存储数据</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">@</span><span style="color:#F97583;">Data</span></span>
<span class="line"><span style="color:#E1E4E8;">@</span><span style="color:#F97583;">AllArgsConstructor</span><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">//这里的注解代表类的构造器（全参）以及所有数据的get和set函数,建议自己写代码实现构造器和get</span></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Song</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">private</span><span style="color:#E1E4E8;"> String title;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">private</span><span style="color:#E1E4E8;"> String artist;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">private</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> bpm;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">@</span><span style="color:#D73A49;">Data</span></span>
<span class="line"><span style="color:#24292E;">@</span><span style="color:#D73A49;">AllArgsConstructor</span><span style="color:#24292E;">	</span><span style="color:#6A737D;">//这里的注解代表类的构造器（全参）以及所有数据的get和set函数,建议自己写代码实现构造器和get</span></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Song</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">private</span><span style="color:#24292E;"> String title;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">private</span><span style="color:#24292E;"> String artist;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">private</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> bpm;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p><em>你可能对@这类的注解感兴趣，如果你有多余的精力，可以去了解一下关于@这类注解的用法和效果，这对你以后做项目会很有帮助</em></p><p>​ 你可以仿造上面的模拟类来构建一个新的模拟类，用于模拟歌曲的数据，我们的要求是列表中包含真正的Song实例，而不是简单的String。</p><p>​ <strong>tips</strong>：注意泛型的使用，为了完成这个任务，你需要了解什么是泛型。这是一个比较复杂的问题，所以推荐你有选择地学习一下以下的博客：<a href="https://www.cnblogs.com/coprince/p/8603492.html" target="_blank" rel="noreferrer">java 泛型详解</a>，<a href="https://blog.csdn.net/weixin_45395059/article/details/126006369" target="_blank" rel="noreferrer">Java 中的泛型</a>。</p><p>​ 在学习的过程中你可能会了解泛型的很多特性和用法，但是对于大多数程序员来说，真正重要的只有其中三点：</p><ol><li>创建一个泛型类（如ArrayList）的实例：创建一个ArrayList的时候，你需要告诉它你希望在这个列表中存放什么样的对象</li><li>泛型类型变量的声明和赋值：多态和泛型类型的结合是怎么实现的，如果你有一个ArrayList&lt; music &gt;引用变量，能把一个ArrayList&lt; Song &gt;赋给它吗？一个ArrayList&lt; game &gt;呢？</li><li>声明和调用接受泛型类型的方法：面对一个泛型方法，你需要了解的它使用泛型的目的，以及使用泛型的意义。这涉及到一些复杂的多态问题，但很不幸的是，这些都是你们以后需要了解的。</li></ol><p>这里只是以List为例了解一下数据结构，实际上我们还经常使用map和set这些抽象数据结构。</p><p>要求：将实现的代码和运行截图推送到GitHub仓库上，此处提交链接:</p><p>出题人QQ：1727448271@qq.com</p>`,28),t=[o];function e(r,c,i,E,y,g){return a(),n("div",null,t)}const h=s(l,[["render",e]]);export{u as __pageData,h as default};
