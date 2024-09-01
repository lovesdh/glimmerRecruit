import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.e90f0c97.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"md/机器学习/3.自动微分的计算图实现.md","filePath":"md/机器学习/3.自动微分的计算图实现.md"}'),l={name:"md/机器学习/3.自动微分的计算图实现.md"},p=e(`<h2 id="_3-自动微分的计算图实现" tabindex="-1">3.自动微分的计算图实现 <a class="header-anchor" href="#_3-自动微分的计算图实现" aria-label="Permalink to &quot;3.自动微分的计算图实现&quot;">​</a></h2><div class="language-Plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Plain</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">难度</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">难度</span></span></code></pre></div><blockquote><p>：简单</p></blockquote><p>经过第一题和第二题，想必您已经熟悉了深度学习中的基础概念，在完成本节的任务前，请确保您已经了解了前向传播，反向传播，链式法则等概念。</p><h3 id="知识准备" tabindex="-1">知识准备 <a class="header-anchor" href="#知识准备" aria-label="Permalink to &quot;知识准备&quot;">​</a></h3><ul><li>计算图是深度学习领域非常重要的基础概念，几乎我们现在使用的所有的深度学习框架都是基于计算图构建的，最为流行的TensorFlow和Pytorch就是其中的典型代表。</li><li>深度学习框架中的计算都是用计算图表示的，几乎所有的框架都在计算图的基础上实现了自动微分机制。</li></ul><p>您需要查阅相关资料，回答以下基础问题：</p><ul><li>简述计算图的概念，重点区分“<strong>静态图</strong>”和“<strong>动态图</strong>”两种构图方式。</li><li>阐述<strong>自动微分</strong>的概念、</li></ul><h3 id="进行实践" tabindex="-1">进行实践 <a class="header-anchor" href="#进行实践" aria-label="Permalink to &quot;进行实践&quot;">​</a></h3><p>现在，您应该已经了解了计算图、前向传播、反向传播、自动微分等基础概念，并具有python面向对象编程的能力。现在让我们来实现一个_<strong>可自动微分计算图</strong>_。</p><p>您的计算图应该至少包含以下内容：</p><ul><li><strong>数值节点</strong></li></ul><p>在基于计算图搭建的深度学习框架如Pytorch、TensorFlow中，都定义了一个计算和存储数据的基本单元，如在Pytorch中，是tensor。它也就是每个计算图中的<strong>节点</strong>。为此，我们需要实现定义一个计算和存储数据的基本单元，可以用类来实现它，它的名字自定义，在此我们暂且称为&quot;Tensor&quot;。</p><p>您需要完整地定义并实现这个&quot;Tensor&quot;节点。该节点的具体<strong>数据值</strong>我们可以用numpy.array来表示，也就是说，我们的&quot;Tensor&quot;是通过包装&quot;numpy&quot;实现的。</p><div class="language-Plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Plain</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">class Tensor:</span></span>
<span class="line"><span style="color:#e1e4e8;">    def __init__(self, data, ...):</span></span>
<span class="line"><span style="color:#e1e4e8;">        self.data = np.array(data)</span></span>
<span class="line"><span style="color:#e1e4e8;">        ...</span></span>
<span class="line"><span style="color:#e1e4e8;">​</span></span>
<span class="line"><span style="color:#e1e4e8;">    ...</span></span>
<span class="line"><span style="color:#e1e4e8;">​</span></span>
<span class="line"><span style="color:#e1e4e8;">    def backward(self, ...):</span></span>
<span class="line"><span style="color:#e1e4e8;">        ...</span></span>
<span class="line"><span style="color:#e1e4e8;">    ...</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">class Tensor:</span></span>
<span class="line"><span style="color:#24292e;">    def __init__(self, data, ...):</span></span>
<span class="line"><span style="color:#24292e;">        self.data = np.array(data)</span></span>
<span class="line"><span style="color:#24292e;">        ...</span></span>
<span class="line"><span style="color:#24292e;">​</span></span>
<span class="line"><span style="color:#24292e;">    ...</span></span>
<span class="line"><span style="color:#24292e;">​</span></span>
<span class="line"><span style="color:#24292e;">    def backward(self, ...):</span></span>
<span class="line"><span style="color:#24292e;">        ...</span></span>
<span class="line"><span style="color:#24292e;">    ...</span></span></code></pre></div><p>对于&quot;Tensor&quot;的属性值设置，您至少需要设置完成自动微分所需要的那几个属性值。(可参考Pytorch tensor的定义)</p><p>函数backward()定义了在&quot;Tensor&quot;节点上<strong>实现反向传播的计算</strong>。</p><ul><li><strong>计算</strong></li></ul><p>我们现在定义的&quot;Tensor&quot;是类，实例化后的两个对象之间是不能直接运算的，但是像在Pytorch中两个tensor是可以直接运算的：torch.tensor(a)+torch.tensor(b)。为此，我们需要使用Python魔法方法实现<strong>运算符重载</strong>来定义我们自定义的&quot;Tensor&quot;的相关计算。</p><div class="language-Plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Plain</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">class Tensor:</span></span>
<span class="line"><span style="color:#e1e4e8;">    def __init__(self, ...):</span></span>
<span class="line"><span style="color:#e1e4e8;">        ...</span></span>
<span class="line"><span style="color:#e1e4e8;">    def __add__(self, op2):</span></span>
<span class="line"><span style="color:#e1e4e8;">        return add(self, op2)</span></span>
<span class="line"><span style="color:#e1e4e8;">​</span></span>
<span class="line"><span style="color:#e1e4e8;">    ...</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">class Tensor:</span></span>
<span class="line"><span style="color:#24292e;">    def __init__(self, ...):</span></span>
<span class="line"><span style="color:#24292e;">        ...</span></span>
<span class="line"><span style="color:#24292e;">    def __add__(self, op2):</span></span>
<span class="line"><span style="color:#24292e;">        return add(self, op2)</span></span>
<span class="line"><span style="color:#24292e;">​</span></span>
<span class="line"><span style="color:#24292e;">    ...</span></span></code></pre></div><ul><li><strong>操作符节点</strong></li></ul><p>运算符重载仅仅是使我们实例化&quot;Tensor&quot;对象能够像普通的数值变量一样可以直接进行计算，但是具体的计算实现操作仍需要我们另外定义，在上面的示例代码中，__add__方法内的add才是具体实现“加”操作的地方。实际上，该add就是计算图中的<strong>操作符节点</strong>。</p><p>我们将操作符节点实现为一个类，它继承自数值节点&quot;Tensor&quot;：</p><div class="language-Plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Plain</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">class add(Tensor):</span></span>
<span class="line"><span style="color:#e1e4e8;">    def __init__(self, ...):</span></span>
<span class="line"><span style="color:#e1e4e8;">        ...</span></span>
<span class="line"><span style="color:#e1e4e8;">​</span></span>
<span class="line"><span style="color:#e1e4e8;">    def forward(self, ...):</span></span>
<span class="line"><span style="color:#e1e4e8;">            ...</span></span>
<span class="line"><span style="color:#e1e4e8;">​</span></span>
<span class="line"><span style="color:#e1e4e8;">    def grad_fn(self, ...):</span></span>
<span class="line"><span style="color:#e1e4e8;">        ...</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">class add(Tensor):</span></span>
<span class="line"><span style="color:#24292e;">    def __init__(self, ...):</span></span>
<span class="line"><span style="color:#24292e;">        ...</span></span>
<span class="line"><span style="color:#24292e;">​</span></span>
<span class="line"><span style="color:#24292e;">    def forward(self, ...):</span></span>
<span class="line"><span style="color:#24292e;">            ...</span></span>
<span class="line"><span style="color:#24292e;">​</span></span>
<span class="line"><span style="color:#24292e;">    def grad_fn(self, ...):</span></span>
<span class="line"><span style="color:#24292e;">        ...</span></span></code></pre></div><p>forward()方法实现的是计算图中前向传播时的计算</p><p>grad\\_fn()方法实现的是计算图中反向传播时该操作符节点的计算</p><ul><li><strong>计算图类</strong></li></ul><p>上面我们定义了计算图的节点，现在我们应该实现一个<strong>计算图类</strong>：</p><div class="language-Plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Plain</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">class Graph:</span></span>
<span class="line"><span style="color:#e1e4e8;">    ...</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">class Graph:</span></span>
<span class="line"><span style="color:#24292e;">    ...</span></span></code></pre></div><p>Graph类应该具有哪些方法和属性？请自行完成它的定义和实现。</p><p><strong>最终，使用您实现的可自动微分计算图实现一个具体的计算操作：</strong></p><blockquote><p>Example</p></blockquote><div class="language-Plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Plain</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">x = Tensor(np.random.rand(1), requires_grad=True)</span></span>
<span class="line"><span style="color:#e1e4e8;">y = exp(x) + x</span></span>
<span class="line"><span style="color:#e1e4e8;">z = x * y</span></span>
<span class="line"><span style="color:#e1e4e8;">t = sum(z)</span></span>
<span class="line"><span style="color:#e1e4e8;">t.backward()</span></span>
<span class="line"><span style="color:#e1e4e8;">print(x.grad)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">x = Tensor(np.random.rand(1), requires_grad=True)</span></span>
<span class="line"><span style="color:#24292e;">y = exp(x) + x</span></span>
<span class="line"><span style="color:#24292e;">z = x * y</span></span>
<span class="line"><span style="color:#24292e;">t = sum(z)</span></span>
<span class="line"><span style="color:#24292e;">t.backward()</span></span>
<span class="line"><span style="color:#24292e;">print(x.grad)</span></span></code></pre></div><p>您可以将使用您实现的代码计算出的梯度值与使用如Pytorch计算出的梯度作比较以验证正确性。</p><h3 id="需要提交部分" tabindex="-1">需要提交部分 <a class="header-anchor" href="#需要提交部分" aria-label="Permalink to &quot;需要提交部分&quot;">​</a></h3><ol><li>上述完整的可运行代码，做好相关注释</li><li>最终的使用您实现的可自动微分计算图实现的一个具体的计算操作的运行结果截图</li></ol><h3 id="提交方式" tabindex="-1">提交方式 <a class="header-anchor" href="#提交方式" aria-label="Permalink to &quot;提交方式&quot;">​</a></h3><p>将题目中要求的提交的总结内容（截图等）利用 Markdowm 格式进行编辑，并存为 PDF 文件。将其与你的源代码一起提交至邮箱：<a href="mailto:gimmerml@163.com" target="_blank" rel="noreferrer">gimmerml@163.com</a></p><p>文件名要求：姓名-学号-中档题03.pdf 或 姓名-学号-中档题03.py （若有）</p><h3 id="出题人" tabindex="-1">出题人 <a class="header-anchor" href="#出题人" aria-label="Permalink to &quot;出题人&quot;">​</a></h3><p>Khalil（学长）</p><p>QQ: 2053296645</p>`,42),o=[p];function t(c,r,i,d,y,h){return a(),n("div",null,o)}const g=s(l,[["render",t]]);export{_ as __pageData,g as default};
