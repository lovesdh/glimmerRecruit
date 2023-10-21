![](https://img1.imgtp.com/2023/09/10/081jz2kT.PNG)

# 机器学习方向-04：大语言模型GPT

> `难度系数`：出题人想磨死大家的难度😅
>
> 如果你已经完成了前三道题，可以移步我们的光点计划 CV 方向体验玩乐一下🤩。如果还学有余力，且拥有比较扎实的深度学习基础🧐，可以再回头完成这道颇具阅读量的题。本题不要求所有任务步都做完，学到哪里算哪里，最后可直接将你学的内容部分提交即可，让我们知道你的学习进度。😘
>
> 😡😡**请确保本题中所有的书面问答都是按照略读完论文后自己的阅读理解完成的，没有原班照抄任何博客或者任何语言模型生成的文字，因为本题呈现的问答都是体验问答，是作为一个练习的部分，我们会更看重在面试上进行的相关提问的回答表现。😡😡**

## 一、前言

GPT，全称“Generative Pre-Training”，即**生成式预训练**，通过在大规模语料库上进行训练，能够学习自然语言的模式和规律，从而实现更好的语言理解，是一种基于 “**Transformer**” 架构的**自回归语言模型**，避免了使用传统的 RNN 模型进行语言序列的学习和生成，有效避免了产生的**梯度消失**的问题。随着 OpenAI 技术团队的逐步研究，GPT 逐渐朝着**由半监督到无监督**、减少**微调**、参数更多、语料库更大、更烧钱、**多模态**的方向发展，其庞大的规模也因此被称为 **LLM（大语言模型）**

![image-20230819195020071](https://img1.imgtp.com/2023/09/10/M0P9TvuW.PNG)

在最新出版的关于 GPT-4 模型的技术报告中，GPT-4 模型已经强大到能够应对一些人类活动中的基础考试并夺得高分

- 在模拟律师资格考试中，成绩排名**前10%左右**
- 在SAT阅读考试中，成绩排名**前7%左右**
- 在SAT数学考试中，排名**前11%左右**
- 在GRE verbal考试中，排名更是冲到了**前1%**

并在多种语言的能力测试上超越了以往的众多大语言模型

<img src="https://img1.imgtp.com/2023/09/10/WZVnxP2b.PNG" alt="image-20230819203350357" style="zoom:80%;" />

随着 GPT 模型在各种**下游任务**上的指标表现优异并能更好回应用户的 **Prompt**，OpenAI 团队也开放给大众使用它们的模型，开发出了比较出名的闭源 ChatGPT 和 GPT4 模型的服务平台，相信读者已经体验或者即将体验到其功能。

<img src="https://img1.imgtp.com/2023/09/10/JXTTrAPn.png" alt="image-20230819203235047" style="zoom: 80%;" />

如此具有魅力和热度的一个模型，接下来我们就来了解它的基本架构以及优化方式吧！

## 二、Transformer

前面提及，GPT 是基于 Transformer 架构拓展出来的模型，其具有的结构在解决 **NLP** 相关任务上被证实比 RNN 模型更加合理和有效。要学习 GPT 首先需要对 Transformer 有深刻的理解。

### 2.1 题目要求|TASK 1

**阅读 Transformer 模型的论文，写出一篇论文总结，把你所学习到的内容记录下来，然后尝试回答相关的提问。**

*Transformer 论文：[https://arxiv.org/pdf/1706.03762v7.pdf](https://arxiv.org/pdf/1706.03762v7.pdf) - Attention Is All You Need*

请在你的总结中包括但不限于以下内容：

1. 介绍 Transformer 中 **Encoder** 和 **Decoder** 的结构
2. **注意力机制**是什么？为什么要使用注意力机制？Transformer 是怎么实现注意力机制的？
3. Transformer 是怎么样进行**位置编码**的？具有什么优缺点
4. 注意并记录数据样本经过各个结构的**维度**变化
5. （拓展）为什么 Transformer 也能被用于被 **CNN** 主导的**计算机视觉**领域？

### 2.2 代码实现（可选）

**在 Github 或者相关的教程网站上，学习相关代码并自己复现跑一跑，根据特定的任务，训练完成后随机选择单个样本作为输入，输出模型给出的结果**

😀这道题不要求必须完成，可以作为想要巩固已学知识的实践练习，如果完成可以在提交文件上附带代码文件和运行截图。😀

## 三、从 GPT 到 GPT-3

完成对基础 Transformer 的学习后，就可以阅读 GPT 系列的论文啦！只要结合搜索引擎和耐心，相信一定能够完成我们给定的任务！😆

### 3.1 题目要求

**略读 GPT，GPT-2，GPT-3 模型的论文，保证你已经理解了重点内容后，尝试回答后续体验问题（作为面试问题的例子）。**

*GPT 论文：[https://cdn.openai.com/research-covers/language-unsupervised/language_understanding_paper.pdf](https://cdn.openai.com/research-covers/language-unsupervised/language_understanding_paper.pdf) - Improving Language Understanding by Generative Pre-Training*

*GPT-2 论文：[https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf](https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf) - Language Models are Unsupervised Multitask Learners*

*GPT-3 论文：[https://arxiv.org/pdf/2005.14165.pdf](https://arxiv.org/pdf/2005.14165.pdf) - Language Models are Few-Shot Learners*

### 3.2 GPT 提问 | Task2

回答以下问题可以帮助你更好学习 GPT 模型：

1. 请介绍 GPT 的模型结构

2. 模型采用怎么样一种训练方式？这种方式有什么弊端？

3. GPT 训练的**目标函数**是什么？简述各计算项的内涵

4. 说明文章中 traversal-style approach 的内容

5. 模型使用的**激活函数**是 **GeLU**，它是将假设服从正态分布 $N(0,1)$ 的输入 $x$ 乘上伯努利分布 $P(X\le x)$，即

   <div align='center'><img  src="https://img1.imgtp.com/2023/09/11/yuYMJ6nK.png" style="zoom: 80%;"/></div>

   函数图像为

   <div align='center'><img src="https://img1.imgtp.com/2023/09/10/5wAzR2K9.png" alt="image-20230819222101040" style="zoom: 50%;" /></div>

   它与普遍使用的 **ReLU** 激活函数有什么共同点和优越点？

### 3.3 GPT-2 提问 | Task3

回答以下问题可以帮助你更好学习 GPT-2 模型：

1. 为什么说 GPT-2 是**无监督学习**的？为什么能进行无监督学习？
2. 如何使用类似 **Prompt** 处理下游任务？
3. 相较于 GPT，GPT-2 在模型结构上有什么改变？为什么要这么做？

### 3.4 GPT-3 提问 | Task4

回答以下问题可以帮助你更好学习 GPT-3 模型：

1. 模型使用了 **Sparse Transformer** 中的模块，请介绍该模块并说明替换的理由。
2. 文章是如何进行语言模型的**元学习**的？
3. 简述该模型的**上下文学习设置**？与微调方式有何不同？
4. 文章是如何优化处理低质量数据集 CommonCrawl 的？

## 四、GPT3.5：InstructGPT | Task5

InstructGPT 是 ChatGPT 的原型版本，两者在训练方式和模型构造上都毫无差异，只是数据的选取具有些许的不同。在之前版本的 LLM 上，明显的缺点就是不能够理解与之沟通的使用客户的意图，即不与用户的指示和期望**对齐（Align）**，从而产生有害的或者繁杂的输出结果。OpenAI 团队通过引入**指示学习**和**人工反馈的强化学习（RLHF）** 来改进这一缺陷。

于是整个训练过程可以分为三步：

```markdown
.....
**Step 1: Collect demonstration data, and train a supervised policy.** Our labelers provide demonstrations of the desired behavior on the input prompt distribution (see Section 3.2 for details on this distribution). We then fine-tune a pretrained GPT-3 model on this data using supervised learning.

**Step 2: Collect comparison data, and train a reward model.** We collect a dataset of comparisons
between model outputs, where labelers indicate which output they prefer for a given input. We then
train a reward model to predict the human-preferred output.

**Step 3: Optimize a policy（即 model） against the reward model using PPO.** We use the output of the
RM as a scalar reward. We fine-tune the supervised policy to optimize this reward using the PPO
algorithm (Schulman et al., 2017).

Steps 2 and 3 can be iterated continuously; more comparison data is collected on the current best
policy, which is used to train a new RM and then a new policy. In practice, most of our comparison
data comes from our supervised policies, with some coming from our PPO policies.
```

摘抄自 *原论文：[https://arxiv.org/pdf/2203.02155.pdf](https://arxiv.org/pdf/2203.02155.pdf) - Training language models to follow instructions with human feedback*

根据上述步骤和自己的理解，推测解答以下问题：

1. 每一个步骤的目的是什么？它们所使用的数据集应该是怎么样的（数据是什么？有无标注？）

2. Step2 所使用的**奖励模型**（**reword model**）的损失函数是 **pairwise ranking loss** 的一种，设定为
   $$
   loss_{RM}=-\frac{1}{C_K^2}E_{(x,y_w,y_l)\sim D}[\log(\sigma(r_\theta(x,y_m)-r_\theta(x,y_l)))]
   $$
   其中 $C_K^2$ 表示从 InstructGPT 产生的 K 个输出中按照它们的重要排序先后选出两个输出 $y_w,y_l$ ，$r_\theta$ 表示奖励分数

   2a. 请问该损失函数的含义是什么？

   2b. K 的取值大小对模型训练的帮助有何关联？（提示：RM 模型的计算开销主要在 $r_\theta$ 上）

   2c. K 为什么还能帮助模型缓解过拟合？

3. Step3 基于 **PPO 算法** 来优化模型，其优化目标为
   $$
   \max_{\phi}E_{(x,y)\sim D_{\pi^{RL}_{\phi}}}[r_\theta(x,y)-\beta\log(\frac{\pi^{RL}_{\phi}(y|x)}{\pi^{SFT}(y|x)})]+\gamma E_{x\sim D_{pretrain}}[\log\pi^{RL}_{\phi}(x)]
   $$
   其中 $\pi^{RL}_{\phi}$ 表示待优化的**政策** （模型），$\pi^{SFT}$ 表示 Step1 产生的模型

   3a. 请问第一项采样的数据集是动态的还是静态的？为什么？

   3b. 含**超参数** $\beta$ 的项本质上是一个 **KL 散度**，它的作用是什么？如何证明？

   3c. 含超参数 $\gamma$ 的项即为原 GPT-3 的损失函数，为什么要在目标函数中添加这一项？

# 五、回答要求

1. 使用 Markdown 文件作答，必要时使用 LateX 语法和流程图解释
2. 答题请按照 Task 标号布局
3. 最后请将答题报告打印成 PDF 文件，如果做了代码题可以将代码与 PDF 文件压缩后上传
4. 不能原封不动地抄袭任何非自己劳动产出的内容

# 六、本题提交&联系方式

>收件邮箱：glimmer401@outlook.com
>
>主题格式：学号-姓名-考核-机器学习-04
>
>主题示例：2023090930001-张三-考核-机器学习-04

>出题人QQ：1370172202
>
>出题人邮箱：1370172202@qq.com