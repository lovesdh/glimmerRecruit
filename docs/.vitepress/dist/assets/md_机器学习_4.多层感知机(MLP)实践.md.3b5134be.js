import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.e90f0c97.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"md/机器学习/4.多层感知机(MLP)实践.md","filePath":"md/机器学习/4.多层感知机(MLP)实践.md"}'),l={name:"md/机器学习/4.多层感知机(MLP)实践.md"},p=e(`<h2 id="_4-多层感知机-mlp-实践" tabindex="-1">4.多层感知机(MLP)实践 <a class="header-anchor" href="#_4-多层感知机-mlp-实践" aria-label="Permalink to &quot;4.多层感知机(MLP)实践&quot;">​</a></h2><div class="language-Plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Plain</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">难度</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">难度</span></span></code></pre></div><blockquote><p>：中等</p></blockquote><p>在完成本节的任务2后，相信你对于线性回归与梯度下降法有了一定的认识。在本题中，我们将会针对多层感知机进行一次实现。多层感知器（英語：Multilayer Perceptron，缩写：MLP）是一种很基本的历史悠久神经网络，其在深度学习领域中的应用是极为普遍的，被极多的模型采用而作为其基本架构的一部分。这里你需要针对多层感知机做一些具体的实现：</p><h3 id="知识准备" tabindex="-1">知识准备 <a class="header-anchor" href="#知识准备" aria-label="Permalink to &quot;知识准备&quot;">​</a></h3><ul><li>MLP 是一个结构简单的模型，查阅相关文献，对 MLP 的计算过程与原理做出自己的理解</li></ul><p>可以参考李沐和吴恩达的网课视频进行学习。同时，也建议阅读《深度学习(deeplearning)》（花书）的第六章节的部分内容，以获得一个较为完整的认识。</p><p>阅读文献后你需要掌握的概念</p><ul><li>什么是微积分的链式法则？</li><li>反向传播是什么？是怎样实现的？</li><li>什么是激活函数，有哪些基本种类，作用如何？</li></ul><h3 id="进行实践" tabindex="-1">进行实践 <a class="header-anchor" href="#进行实践" aria-label="Permalink to &quot;进行实践&quot;">​</a></h3><p>在本题中，我们将逐步实现一个分类任务，其具体实现主要有以下的流程（这也是绝大多数深度学习任务的基本流程）</p><ol><li>数据集加载</li><li>数据预处理与数据集的划分</li><li>搭建网络架构</li><li>设计 train 函数，对模型进行训练，完成参数更新</li><li>设计 test 函数，在不同的参数指标下对模型训练效果进行评估</li></ol><p>我们此次的任务是一个有趣的分类任务：研究者搜集了大量大学生生活情况相关的数据（其中包括学生的课堂出勤率、父母的职业、所处地区的GDP、失业率等）。我们需要做的就是对于不同学生的条件进行分析，从而对于学生是否能够顺利毕业做出预测（分类）</p><p>这里是有关该数据集的具体介绍，有兴趣的同学们可以简要阅读一下</p><p><a href="https://archive.ics.uci.edu/dataset/697/predict+students+dropout+and+academic+success" target="_blank" rel="noreferrer">https://archive.ics.uci.edu/dataset/697/predict+students+dropout+and+academic+success</a></p><p>这里数据集已经被上载到 GitHub 仓库中的 dataset 文件中，仓库链接：<a href="https://github.com/Heinz217/Glimmer-Recruit" target="_blank" rel="noreferrer">https://github.com/Heinz217/Glimmer-Recruit</a>。需要大家自行按照合适的比例划分训练集和测试集。</p><h4 id="本任务主要需要的库" tabindex="-1"><strong>本任务主要需要的库：</strong> <a class="header-anchor" href="#本任务主要需要的库" aria-label="Permalink to &quot;**本任务主要需要的库：**&quot;">​</a></h4><div class="language-Plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Plain</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import torch</span></span>
<span class="line"><span style="color:#e1e4e8;">import torch.nn as nn</span></span>
<span class="line"><span style="color:#e1e4e8;">import torch.optim as optim</span></span>
<span class="line"><span style="color:#e1e4e8;">from torch.utils.data import Dataset, DataLoader</span></span>
<span class="line"><span style="color:#e1e4e8;">import pandas as pd</span></span>
<span class="line"><span style="color:#e1e4e8;">import numpy as np</span></span>
<span class="line"><span style="color:#e1e4e8;">import matplotlib as plt</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import torch</span></span>
<span class="line"><span style="color:#24292e;">import torch.nn as nn</span></span>
<span class="line"><span style="color:#24292e;">import torch.optim as optim</span></span>
<span class="line"><span style="color:#24292e;">from torch.utils.data import Dataset, DataLoader</span></span>
<span class="line"><span style="color:#24292e;">import pandas as pd</span></span>
<span class="line"><span style="color:#24292e;">import numpy as np</span></span>
<span class="line"><span style="color:#24292e;">import matplotlib as plt</span></span></code></pre></div><h4 id="数据加载与预处理" tabindex="-1">数据加载与预处理： <a class="header-anchor" href="#数据加载与预处理" aria-label="Permalink to &quot;数据加载与预处理：&quot;">​</a></h4><p>在这里，建议首先利用pandas对文件进行阅读，随后针对数据做归一化等操作，使得神经网络可以正常接收数据，并能够使得数据发挥其最大的作用</p><h4 id="mlp模型定义" tabindex="-1">MLP模型定义： <a class="header-anchor" href="#mlp模型定义" aria-label="Permalink to &quot;MLP模型定义：&quot;">​</a></h4><p>这里我们需要完成__init__()与forward()，从而实现模型的搭建：</p><div class="language-Plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Plain</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">class MLP(nn.Module):</span></span>
<span class="line"><span style="color:#e1e4e8;">    def __init__(self, ...... ):</span></span>
<span class="line"><span style="color:#e1e4e8;">        super(MLP, self).__init__()</span></span>
<span class="line"><span style="color:#e1e4e8;">​</span></span>
<span class="line"><span style="color:#e1e4e8;">​</span></span>
<span class="line"><span style="color:#e1e4e8;">    def forward(self, x):</span></span>
<span class="line"><span style="color:#e1e4e8;">​</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">class MLP(nn.Module):</span></span>
<span class="line"><span style="color:#24292e;">    def __init__(self, ...... ):</span></span>
<span class="line"><span style="color:#24292e;">        super(MLP, self).__init__()</span></span>
<span class="line"><span style="color:#24292e;">​</span></span>
<span class="line"><span style="color:#24292e;">​</span></span>
<span class="line"><span style="color:#24292e;">    def forward(self, x):</span></span>
<span class="line"><span style="color:#24292e;">​</span></span></code></pre></div><h4 id="train函数与test函数的构建" tabindex="-1">train函数与test函数的构建： <a class="header-anchor" href="#train函数与test函数的构建" aria-label="Permalink to &quot;train函数与test函数的构建：&quot;">​</a></h4><p>这里需要大家进行手动搭建。值得注意的一点是，相比于train函数，test函数并不需要进行梯度的更新。</p><h4 id="其他" tabindex="-1">其他： <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他：&quot;">​</a></h4><p>在训练过程中，十分推荐大家利用 matplotlib 库将训练的 loss 图像画出来</p><h3 id="思考" tabindex="-1">思考： <a class="header-anchor" href="#思考" aria-label="Permalink to &quot;思考：&quot;">​</a></h3><ol><li>本任务中，数据预处理的方式有什么？预处理又有什么具体作用？</li><li>本任务中，你使用了什么损失函数，又使用了怎样的优化器？它们的具体算法是怎样的？</li><li>关于MLP模型，是否可以尝试一下进行正向传播与反向传播的手动推导？</li><li>过拟合是什么？欠拟合又是什么？在你的任务中有没有出现类似的问题呢？这又该怎样解决？</li></ol><h3 id="需要提交部分" tabindex="-1">需要提交部分： <a class="header-anchor" href="#需要提交部分" aria-label="Permalink to &quot;需要提交部分：&quot;">​</a></h3><ol><li>上述完整的可运行代码，做好相关注释</li><li>关于此题实现的简要笔记与感想（包括：遇到了什么问题？又是怎样解决的？）</li><li>（拓展）在该任务中，相信大多数同学的模型评价指标都是准确率(accuracy)。那么，是否可以用其他评价指标进行模型评估呢？这些评估指标的侧重点又在哪里？</li></ol><h3 id="拓展" tabindex="-1">拓展 <a class="header-anchor" href="#拓展" aria-label="Permalink to &quot;拓展&quot;">​</a></h3><p>在第三题，我们实现了可自动微分的计算图，现在，让我们在此计算图的基础上实现其他算子与组件，以此来搭建一个简单的多层感知机。</p><p>在完成拓展之前，请确保您已经掌握了激活函数、损失函数、优化器的概念，并对上面这些的几种常见实例有了解。</p><p>下面我们分别来实现这些不同的组件：</p><ul><li>线性层Linear的实现 $$\\mathrm{Linear}$$即多层感知机每一线性层的实现，它主要完成$$\\mathrm{W * X+b}$$的计算</li></ul><div class="language-Plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Plain</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">class Linear:</span></span>
<span class="line"><span style="color:#e1e4e8;">    def __init__(self, ...):</span></span>
<span class="line"><span style="color:#e1e4e8;">        self.weight = ...</span></span>
<span class="line"><span style="color:#e1e4e8;">        self.bias = ...</span></span>
<span class="line"><span style="color:#e1e4e8;">        ...</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    def forward(self, ...):</span></span>
<span class="line"><span style="color:#e1e4e8;">        ...</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">class Linear:</span></span>
<span class="line"><span style="color:#24292e;">    def __init__(self, ...):</span></span>
<span class="line"><span style="color:#24292e;">        self.weight = ...</span></span>
<span class="line"><span style="color:#24292e;">        self.bias = ...</span></span>
<span class="line"><span style="color:#24292e;">        ...</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    def forward(self, ...):</span></span>
<span class="line"><span style="color:#24292e;">        ...</span></span></code></pre></div><p>对于线性层的实现，您需要考虑如下内容：</p><ul><li>线性层的权重(weight)和偏置(bias)如何初始化</li><li>线性层在初始化时需要定义哪些参数</li><li>激活函数 activation 的实现</li></ul><p>以sigmoid为例：</p><div class="language-Plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Plain</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">class Sigmoid:</span></span>
<span class="line"><span style="color:#e1e4e8;">    def __init__(self, ...):</span></span>
<span class="line"><span style="color:#e1e4e8;">        ...</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    def forward(self, ...):</span></span>
<span class="line"><span style="color:#e1e4e8;">        ...</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">class Sigmoid:</span></span>
<span class="line"><span style="color:#24292e;">    def __init__(self, ...):</span></span>
<span class="line"><span style="color:#24292e;">        ...</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    def forward(self, ...):</span></span>
<span class="line"><span style="color:#24292e;">        ...</span></span></code></pre></div><ul><li>损失函数loss的实现</li></ul><p>以MSELoss为例：</p><div class="language-Plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Plain</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">class MSELoss:</span></span>
<span class="line"><span style="color:#e1e4e8;">    def __init__(self, ...):</span></span>
<span class="line"><span style="color:#e1e4e8;">        ...</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    def forward(self, ...):</span></span>
<span class="line"><span style="color:#e1e4e8;">        ...</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">class MSELoss:</span></span>
<span class="line"><span style="color:#24292e;">    def __init__(self, ...):</span></span>
<span class="line"><span style="color:#24292e;">        ...</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    def forward(self, ...):</span></span>
<span class="line"><span style="color:#24292e;">        ...</span></span></code></pre></div><ul><li>优化算法 optimizer 的实现</li></ul><p>以SGD为例：</p><div class="language-Plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Plain</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">class SGD:</span></span>
<span class="line"><span style="color:#e1e4e8;">    def __init__(self, params, ...):</span></span>
<span class="line"><span style="color:#e1e4e8;">        ...</span></span>
<span class="line"><span style="color:#e1e4e8;">    def step(self):</span></span>
<span class="line"><span style="color:#e1e4e8;">        ...</span></span>
<span class="line"><span style="color:#e1e4e8;">    def zero_grad(self):</span></span>
<span class="line"><span style="color:#e1e4e8;">        ...</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">class SGD:</span></span>
<span class="line"><span style="color:#24292e;">    def __init__(self, params, ...):</span></span>
<span class="line"><span style="color:#24292e;">        ...</span></span>
<span class="line"><span style="color:#24292e;">    def step(self):</span></span>
<span class="line"><span style="color:#24292e;">        ...</span></span>
<span class="line"><span style="color:#24292e;">    def zero_grad(self):</span></span>
<span class="line"><span style="color:#24292e;">        ...</span></span></code></pre></div><p>对于该模块的实现，您需要考虑以下内容：</p><ul><li>SGD初始化所需参数params是什么params从我们实现的这些组件中的哪个组件中的什么成员变量来作为输入？</li><li>方法step和zero\\_grad的作用是什么？</li></ul><p>实现完成上述组件后，让我们用这些组件来实现本题的MLP任务，您的代码类似下面这样：</p><div class="language-Plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Plain</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">net = Linear(...)</span></span>
<span class="line"><span style="color:#e1e4e8;">loss = MSELoss()</span></span>
<span class="line"><span style="color:#e1e4e8;">optimizer = Adam(...)</span></span>
<span class="line"><span style="color:#e1e4e8;">​</span></span>
<span class="line"><span style="color:#e1e4e8;">for epoch in range(num_epochs):</span></span>
<span class="line"><span style="color:#e1e4e8;">    for X, y in ...:</span></span>
<span class="line"><span style="color:#e1e4e8;">        optimizer.zero_grad()</span></span>
<span class="line"><span style="color:#e1e4e8;">        l = loss(net(X), y)</span></span>
<span class="line"><span style="color:#e1e4e8;">        l.backward()</span></span>
<span class="line"><span style="color:#e1e4e8;">        optimizer.step()</span></span>
<span class="line"><span style="color:#e1e4e8;">        ...</span></span>
<span class="line"><span style="color:#e1e4e8;">    ...</span></span>
<span class="line"><span style="color:#e1e4e8;">...</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">net = Linear(...)</span></span>
<span class="line"><span style="color:#24292e;">loss = MSELoss()</span></span>
<span class="line"><span style="color:#24292e;">optimizer = Adam(...)</span></span>
<span class="line"><span style="color:#24292e;">​</span></span>
<span class="line"><span style="color:#24292e;">for epoch in range(num_epochs):</span></span>
<span class="line"><span style="color:#24292e;">    for X, y in ...:</span></span>
<span class="line"><span style="color:#24292e;">        optimizer.zero_grad()</span></span>
<span class="line"><span style="color:#24292e;">        l = loss(net(X), y)</span></span>
<span class="line"><span style="color:#24292e;">        l.backward()</span></span>
<span class="line"><span style="color:#24292e;">        optimizer.step()</span></span>
<span class="line"><span style="color:#24292e;">        ...</span></span>
<span class="line"><span style="color:#24292e;">    ...</span></span>
<span class="line"><span style="color:#24292e;">...</span></span></code></pre></div><p>注意：使用您自己写的组件来完成本题的MLP任务时，即完成本拓展题时，您所搭建的多层感知机只需有<strong>一个线性层</strong>即可。也就是说，本拓展题不注重您使用您自己的组件完成该任务的准确率，只需证明使用您的组件完成该任务能够正常执行梯度下降、减小损失值即可。（搭建多个线性层还需编写类似于Pytorch中的nn.module的Module类，过于复杂，故不作进一步要求）</p><h3 id="提交方式" tabindex="-1">提交方式 <a class="header-anchor" href="#提交方式" aria-label="Permalink to &quot;提交方式&quot;">​</a></h3><p>将题目中要求的提交的总结内容利用 Markdowm 格式进行编辑，并存为 PDF 文件。将其与你的源代码一起提交至邮箱：<a href="mailto:gimmerml@163.com" target="_blank" rel="noreferrer">gimmerml@163.com</a></p><p>文件名要求：姓名-学号-中档题04.pdf 或 姓名-学号-中档题04.py （若有）</p><h3 id="出题人" tabindex="-1">出题人： <a class="header-anchor" href="#出题人" aria-label="Permalink to &quot;出题人：&quot;">​</a></h3><p>Jason（学长）</p><p>QQ: 2725411278</p><p><strong>本题拓展</strong>：</p><p>Khalil（学长）</p><p>QQ: 2053296645</p>`,61),o=[p];function i(t,c,r,d,h,y){return a(),n("div",null,o)}const _=s(l,[["render",i]]);export{m as __pageData,_ as default};
