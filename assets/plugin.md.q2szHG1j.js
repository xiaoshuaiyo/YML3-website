import{_ as a,o as s,c as n,R as p}from"./chunks/framework.tsv_73ZG.js";const _=JSON.parse('{"title":"插件开发","description":"","frontmatter":{},"headers":[],"relativePath":"plugin.md","filePath":"plugin.md"}'),e={name:"plugin.md"},t=p(`<h1 id="插件开发" tabindex="-1">插件开发 <a class="header-anchor" href="#插件开发" aria-label="Permalink to &quot;插件开发&quot;">​</a></h1><h2 id="单页面插件开发" tabindex="-1">单页面插件开发 <a class="header-anchor" href="#单页面插件开发" aria-label="Permalink to &quot;单页面插件开发&quot;">​</a></h2><h3 id="_1-首先先在根目录下plugin文件夹里创建一个文件夹-你的插件-。" tabindex="-1">1.首先先在根目录下Plugin文件夹里创建一个文件夹（你的插件）。 <a class="header-anchor" href="#_1-首先先在根目录下plugin文件夹里创建一个文件夹-你的插件-。" aria-label="Permalink to &quot;1.首先先在根目录下Plugin文件夹里创建一个文件夹（你的插件）。&quot;">​</a></h3><h3 id="_2-让yml3识别插件。" tabindex="-1">2.让YML3识别插件。 <a class="header-anchor" href="#_2-让yml3识别插件。" aria-label="Permalink to &quot;2.让YML3识别插件。&quot;">​</a></h3><p>（1）在你的插件文件夹里创建一个名为plugin的json文件。（这是每个插件必须的配置文件）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>[</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>&quot;plugin name&quot;: &quot;你插件的名称&quot;,</span></span>
<span class="line"><span>&quot;plugin author&quot;: &quot;插件作者&quot;,</span></span>
<span class="line"><span>&quot;version&quot;: &quot;版本号&quot;,</span></span>
<span class="line"><span>&quot;icon&quot;: &quot;在插件页面中展示图标（path）&quot;,</span></span>
<span class="line"><span>&quot;state&quot;: &quot;插件状态（一般填写off，除非你想让插件自动开启）&quot;,</span></span>
<span class="line"><span>&quot;from name&quot;: &quot;你插件的界面逻辑类&quot;,</span></span>
<span class="line"><span>&quot;interface name&quot;: &quot;侧边栏显示名称&quot;,</span></span>
<span class="line"><span>&quot;interface icon&quot;: &quot;侧边栏显示图标（只能为FluentIcon流畅图标库内）&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>]</span></span></code></pre></div><p>（2）新建ui文件。 在你的插件文件夹里新建一个.py文件。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import qfluentwidgets</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class “随便写个不能重复”(object):</span></span>
<span class="line"><span>    def setupUi(self, UI):</span></span>
<span class="line"><span>        UI.setObjectName(&quot;这里随便取一个不能冲突&quot;)</span></span>
<span class="line"><span>        Label = qfluentwidgets.LargeTitleLabel(UI)</span></span>
<span class="line"><span>        Label.setText(&quot;测试&quot;)</span></span></code></pre></div><p>（3）新建插件入口.py文件。</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>插件入口文件必须和插件文件夹名相同</p></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>from PyQt5.QtWidgets import QWidget</span></span>
<span class="line"><span></span></span>
<span class="line"><span>from .“你刚才新建的UI文件” import “Ui类”</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>class “这里写你刚才设置的from name”(QWidget, UI):</span></span>
<span class="line"><span>    def __init__(self, parent=None):</span></span>
<span class="line"><span>        super().__init__(parent=parent)</span></span>
<span class="line"><span>        self.setupUi(self)“底下可以写逻辑”</span></span></code></pre></div><p>（4）打包。 很好！你先现在已经制作好了一个单页面插件，你只需要把文件夹压缩成zip再把后缀改为.yml3即可</p>`,12),l=[t];function i(o,c,u,r,d,h){return s(),n("div",null,l)}const g=a(e,[["render",i]]);export{_ as __pageData,g as default};
