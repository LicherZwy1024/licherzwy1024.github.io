import{_ as s,c as n,o as a,a as l}from"./app.8196305f.js";const i=JSON.parse('{"title":"C#\u4E2D\u7684\u95ED\u5305","description":"","frontmatter":{},"headers":[{"level":2,"title":"1. \u95ED\u5305\u7684\u542B\u4E49","slug":"_1-\u95ED\u5305\u7684\u542B\u4E49"},{"level":2,"title":"2.\u5728\u4EE3\u7801\u4E2D\u5B9E\u73B0","slug":"_2-\u5728\u4EE3\u7801\u4E2D\u5B9E\u73B0"},{"level":3,"title":"\u4E00\u4E2A\u7B80\u5355\u7684 C#\u4F8B\u5B50\u6765\u7406\u89E3:\u8FD9\u4E2A\u59D4\u6258 internalAdd \u5C31\u662F\u4E00\u4E2A\u95ED\u5305\uFF0C\u5F15\u7528\u4E86\u5916\u90E8\u51FD\u6570 GetClosureFunction \u4F5C\u7528\u57DF\u4E2D\u7684\u53D8\u91CF val","slug":"\u4E00\u4E2A\u7B80\u5355\u7684-c-\u4F8B\u5B50\u6765\u7406\u89E3-\u8FD9\u4E2A\u59D4\u6258-internaladd-\u5C31\u662F\u4E00\u4E2A\u95ED\u5305\uFF0C\u5F15\u7528\u4E86\u5916\u90E8\u51FD\u6570-getclosurefunction-\u4F5C\u7528\u57DF\u4E2D\u7684\u53D8\u91CF-val"},{"level":3,"title":"\u4E3A\u4E86\u589E\u52A0\u53EF\u8BFB\u6027\uFF0C\u4E0B\u9762\u7684\u4EE3\u7801\u5BF9\u7F16\u8BD1\u5668\u751F\u6210\u7684\u540D\u5B57\u8FDB\u884C\u4FEE\u6539\uFF0C\u5E76\u5BF9\u4EE3\u7801\u8FDB\u884C\u4E86\u9002\u5F53\u7684\u6574\u7406\u3002","slug":"\u4E3A\u4E86\u589E\u52A0\u53EF\u8BFB\u6027\uFF0C\u4E0B\u9762\u7684\u4EE3\u7801\u5BF9\u7F16\u8BD1\u5668\u751F\u6210\u7684\u540D\u5B57\u8FDB\u884C\u4FEE\u6539\uFF0C\u5E76\u5BF9\u4EE3\u7801\u8FDB\u884C\u4E86\u9002\u5F53\u7684\u6574\u7406\u3002"},{"level":2,"title":"3.C#7 \u5BF9\u4E8E\u4E0D\u4F5C\u4E3A\u8FD4\u56DE\u503C\u7684\u95ED\u5305\u7684\u4F18\u5316:","slug":"_3-c-7-\u5BF9\u4E8E\u4E0D\u4F5C\u4E3A\u8FD4\u56DE\u503C\u7684\u95ED\u5305\u7684\u4F18\u5316"}],"relativePath":"dotNet/closureFunction.md"}'),p={name:"dotNet/closureFunction.md"},o=l(`<h1 id="c-\u4E2D\u7684\u95ED\u5305" tabindex="-1">C#\u4E2D\u7684\u95ED\u5305 <a class="header-anchor" href="#c-\u4E2D\u7684\u95ED\u5305" aria-hidden="true">#</a></h1><h2 id="_1-\u95ED\u5305\u7684\u542B\u4E49" tabindex="-1">1. \u95ED\u5305\u7684\u542B\u4E49 <a class="header-anchor" href="#_1-\u95ED\u5305\u7684\u542B\u4E49" aria-hidden="true">#</a></h2><p>\u95ED\u5305\u662F\u6307\u6709\u6743\u8BBF\u95EE\u53E6\u4E00\u4E2A\u51FD\u6570\u4F5C\u7528\u57DF\u4E2D\u7684\u53D8\u91CF\u7684\u51FD\u6570\u3002</p><p>\u6CE8\u610F\uFF0C\u95ED\u5305\u8FD9\u4E2A\u8BCD\u672C\u8EAB\u6307\u7684\u662F\u4E00\u79CD\u51FD\u6570\u3002\u800C\u521B\u5EFA\u8FD9\u79CD\u7279\u6B8A\u51FD\u6570\u7684\u4E00\u79CD\u5E38\u89C1\u65B9\u5F0F\u662F\u5728\u4E00\u4E2A\u51FD\u6570\u4E2D\u521B\u5EFA\u53E6\u4E00\u4E2A\u51FD\u6570\u3002</p><h2 id="_2-\u5728\u4EE3\u7801\u4E2D\u5B9E\u73B0" tabindex="-1">2.\u5728\u4EE3\u7801\u4E2D\u5B9E\u73B0 <a class="header-anchor" href="#_2-\u5728\u4EE3\u7801\u4E2D\u5B9E\u73B0" aria-hidden="true">#</a></h2><h3 id="\u4E00\u4E2A\u7B80\u5355\u7684-c-\u4F8B\u5B50\u6765\u7406\u89E3-\u8FD9\u4E2A\u59D4\u6258-internaladd-\u5C31\u662F\u4E00\u4E2A\u95ED\u5305\uFF0C\u5F15\u7528\u4E86\u5916\u90E8\u51FD\u6570-getclosurefunction-\u4F5C\u7528\u57DF\u4E2D\u7684\u53D8\u91CF-val" tabindex="-1">\u4E00\u4E2A\u7B80\u5355\u7684 C#\u4F8B\u5B50\u6765\u7406\u89E3:\u8FD9\u4E2A\u59D4\u6258 <code>internalAdd</code> \u5C31\u662F\u4E00\u4E2A\u95ED\u5305\uFF0C\u5F15\u7528\u4E86\u5916\u90E8\u51FD\u6570 GetClosureFunction \u4F5C\u7528\u57DF\u4E2D\u7684\u53D8\u91CF val <a class="header-anchor" href="#\u4E00\u4E2A\u7B80\u5355\u7684-c-\u4F8B\u5B50\u6765\u7406\u89E3-\u8FD9\u4E2A\u59D4\u6258-internaladd-\u5C31\u662F\u4E00\u4E2A\u95ED\u5305\uFF0C\u5F15\u7528\u4E86\u5916\u90E8\u51FD\u6570-getclosurefunction-\u4F5C\u7528\u57DF\u4E2D\u7684\u53D8\u91CF-val" aria-hidden="true">#</a></h3><div class="language-C#"><button class="copy"></button><span class="lang">C#</span><pre><code><span class="line"><span style="color:#F78C6C;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Program</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Main</span><span style="color:#89DDFF;">(string[]</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">args</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;">//1.\u6267\u884CGetClosureFunction\u51FD\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">        Console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">WriteLine</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">GetClosureFunction</span><span style="color:#89DDFF;">()(</span><span style="color:#F78C6C;">30</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Func</span><span style="color:#89DDFF;">&lt;int,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">int&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">GetClosureFunction</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">val</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">Func</span><span style="color:#89DDFF;">&lt;int,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">int&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">internalAdd</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">x</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> val</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// 2.\u8F93\u51FA20 =10+10</span></span>
<span class="line"><span style="color:#A6ACCD;">        Console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">WriteLine</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">internalAdd</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        val </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">30</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// 2.\u8F93\u51FA40 =30+10</span></span>
<span class="line"><span style="color:#A6ACCD;">        Console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">WriteLine</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">internalAdd</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> internalAdd</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u5148\u8BB2\u8F93\u51FA\u7ED3\u679C\uFF1A<strong>20</strong>,<strong>40</strong>,<strong>60</strong>\u3002\u524D\u4E24\u4E2A\u7ED3\u679C\u503C\u90FD\u53EF\u4EE5\u5BB9\u6613\u7684\u7406\u89E3\uFF0C\u90A3\u4E48\u6700\u540E\u4E00\u4E2A 60 \u662F\u600E\u4E48\u6765\u7684\u5462?</p><p><strong>\u5206\u6790</strong>\uFF1A<code>GetClosureFunction</code> \u5C06 <code>internalAdd</code> \u8FD4\u56DE\u81F3\u5916\u90E8\uFF0C\u4EE5 <strong>30</strong> \u4F5C\u4E3A\u53C2\u6570\uFF0C\u53BB\u6267\u884C\u5F97\u5230\u7684\u7ED3\u679C\u662F 60\u3002\u4F46\u662F\u533F\u540D\u51FD\u6570 <code>internalAdd</code> \u7684\u751F\u547D\u5468\u671F\u672C\u5E94\u8BE5\u5728 <code>GetClosureFunction</code>\u6267\u884C\u5B8C\u6BD5\u540E\u5C31\u7ED3\u675F\u4E86\u3002\u4E3A\u4EC0\u4E48\u8FD8\u4F1A\u5BF9\u4E4B\u540E\u7684\u7ED3\u679C\u4EA7\u751F\u5F71\u54CD\u5462?</p><h3 id="\u4E3A\u4E86\u589E\u52A0\u53EF\u8BFB\u6027\uFF0C\u4E0B\u9762\u7684\u4EE3\u7801\u5BF9\u7F16\u8BD1\u5668\u751F\u6210\u7684\u540D\u5B57\u8FDB\u884C\u4FEE\u6539\uFF0C\u5E76\u5BF9\u4EE3\u7801\u8FDB\u884C\u4E86\u9002\u5F53\u7684\u6574\u7406\u3002" tabindex="-1">\u4E3A\u4E86\u589E\u52A0\u53EF\u8BFB\u6027\uFF0C\u4E0B\u9762\u7684\u4EE3\u7801\u5BF9\u7F16\u8BD1\u5668\u751F\u6210\u7684\u540D\u5B57\u8FDB\u884C\u4FEE\u6539\uFF0C\u5E76\u5BF9\u4EE3\u7801\u8FDB\u884C\u4E86\u9002\u5F53\u7684\u6574\u7406\u3002 <a class="header-anchor" href="#\u4E3A\u4E86\u589E\u52A0\u53EF\u8BFB\u6027\uFF0C\u4E0B\u9762\u7684\u4EE3\u7801\u5BF9\u7F16\u8BD1\u5668\u751F\u6210\u7684\u540D\u5B57\u8FDB\u884C\u4FEE\u6539\uFF0C\u5E76\u5BF9\u4EE3\u7801\u8FDB\u884C\u4E86\u9002\u5F53\u7684\u6574\u7406\u3002" aria-hidden="true">#</a></h3><p>\u7F16\u8BD1\u5668\u521B\u5EFA\u4E86\u4E00\u4E2A\u533F\u540D\u7C7B\uFF08\u5982\u679C\u4E0D\u9700\u8981\u521B\u5EFA\u95ED\u5305\uFF0C\u533F\u540D\u51FD\u6570\u53EA\u4F1A\u662F\u4E0E<code>GetClosureFunction</code> \u751F\u5B58\u5728\u540C\u4E00\u4E2A\u7C7B\u4E2D\uFF0C\u5E76\u4E14\u59D4\u6258\u5B9E\u4F8B\u4F1A\u88AB\u7F13\u5B58\uFF0C\u5E76\u5728 <code>GetClosureFunction</code> \u4E2D\u521B\u5EFA\u4E86\u5B83\u5B9E\u4F8B\u3002<strong>\u5C40\u90E8\u53D8\u91CF\u5B9E\u9645\u4E0A\u662F\u4F5C\u4E3A\u533F\u540D\u7C7B\u4E2D\u7684\u5B57\u6BB5\u5B58\u5728\u7684</strong>\u3002</p><p>\u7ECF\u6574\u7406\u7684\u53CD\u7F16\u8BD1\u4EE3\u7801:</p><div class="language-C#"><button class="copy"></button><span class="lang">C#</span><pre><code><span class="line"><span style="color:#F78C6C;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Program</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">sealed</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">DisplayClass</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;">//\u5C40\u90E8\u53D8\u91CF\u5B9E\u9645\u4E0A\u662F\u4F5C\u4E3A\u533F\u540D\u7C7B\u4E2D\u7684\u5B57\u6BB5\u5B58\u5728</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">val</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">AnonymousFunction</span><span style="color:#89DDFF;">(int</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">x</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">this</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">val</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Main</span><span style="color:#89DDFF;">(string[]</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">args</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        Console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">WriteLine</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">GetClosureFunction</span><span style="color:#89DDFF;">()(</span><span style="color:#F78C6C;">30</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Func</span><span style="color:#89DDFF;">&lt;int,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">int&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">GetClosureFunction</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">DisplayClass</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">displayClass</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">DisplayClass</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">        displayClass</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">val </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">Func</span><span style="color:#89DDFF;">&lt;int,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">int&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">internalAdd</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> displayClass</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">AnonymousFunction</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        Console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">WriteLine</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">internalAdd</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        displayClass</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">val </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">30</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        Console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">WriteLine</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">internalAdd</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> internalAdd</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="_3-c-7-\u5BF9\u4E8E\u4E0D\u4F5C\u4E3A\u8FD4\u56DE\u503C\u7684\u95ED\u5305\u7684\u4F18\u5316" tabindex="-1">3.C#7 \u5BF9\u4E8E\u4E0D\u4F5C\u4E3A\u8FD4\u56DE\u503C\u7684\u95ED\u5305\u7684\u4F18\u5316: <a class="header-anchor" href="#_3-c-7-\u5BF9\u4E8E\u4E0D\u4F5C\u4E3A\u8FD4\u56DE\u503C\u7684\u95ED\u5305\u7684\u4F18\u5316" aria-hidden="true">#</a></h2><p><strong>\u5F53 internalAdd \u4E0D\u9700\u8981\u88AB\u8FD4\u56DE</strong>,\u5229\u7528\u672C\u5730\u51FD\u6570\u8FDB\u884C\u4F18\u5316</p><div class="language-C#"><button class="copy"></button><span class="lang">C#</span><pre><code><span class="line"><span style="color:#F78C6C;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Program</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Main</span><span style="color:#89DDFF;">(string[]</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">args</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">GetClosureFunction</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">val</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">InternalAdd</span><span style="color:#89DDFF;">(int</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">x</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> val</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        Console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">WriteLine</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">InternalAdd</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        val </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">30</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        Console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">WriteLine</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">InternalAdd</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u7ECF\u6574\u7406\u7684\u53CD\u7F16\u8BD1\u4EE3\u7801:</p><div class="language-C#"><button class="copy"></button><span class="lang">C#</span><pre><code><span class="line"><span style="color:#676E95;">// \u53D8\u5316\u70B91\uFF1A\u7531\u539F\u6765\u7684class\u6539\u4E3A\u4E86struct</span></span>
<span class="line"><span style="color:#F78C6C;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">DisplayClass</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">val</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">AnonymousFunction</span><span style="color:#89DDFF;">(int</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">x</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">this</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">val</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">GetClosureFunction</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">DisplayClass</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">displayClass</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">DisplayClass</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">    displayClass</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">val </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u53D8\u5316\u70B92\uFF1A\u4E0D\u518D\u6784\u5EFA\u59D4\u6258\u5B9E\u4F8B\uFF0C\u76F4\u63A5\u8C03\u7528\u503C\u7C7B\u578B\u7684\u5B9E\u4F8B\u65B9\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;">    Console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">WriteLine</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">displayClass</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">AnonymousFunction</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    displayClass</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">val </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">30</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    Console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">WriteLine</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">displayClass</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">AnonymousFunction</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u4E0A\u8FF0\u8FD9\u4E24\u70B9\u53D8\u5316\u5728\u4E00\u5B9A\u7A0B\u5EA6\u4E0A\u80FD\u591F\u5E26\u6765\u6027\u80FD\u7684\u63D0\u5347\uFF0C\u76EE\u524D\u7684\u7406\u89E3\u662F\uFF0C\u7528\u7ED3\u6784\u4F53\u4EE3\u66FF\u7C7B\uFF0C\u7ED3\u6784\u4F53\u5B9E\u4F8B\u80FD\u591F\u5728\u65B9\u6CD5\u8DD1\u5B8C\u540E\u5C31\u7ACB\u5373\u91CA\u653E\uFF0C\u4E0D\u9700\u8981\u7B49\u5F85\u5783\u573E\u56DE\u6536\uFF0C\u6240\u4EE5\u5728\u5B98\u65B9\u7684\u63A8\u8350\u4E2D\uFF0C\u5982\u679C\u59D4\u6258\u7684\u4F7F\u7528\u4E0D\u662F\u5FC5\u8981\u7684\uFF0C\u66F4\u63A8\u8350\u4F7F\u7528\u672C\u5730\u51FD\u6570\u800C\u975E\u533F\u540D\u51FD\u6570\u3002</p>`,19),e=[o];function c(t,r,F,D,C,y){return a(),n("div",null,e)}const d=s(p,[["render",c]]);export{i as __pageData,d as default};
