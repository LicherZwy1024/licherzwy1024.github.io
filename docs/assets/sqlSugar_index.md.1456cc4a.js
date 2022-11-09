import{_ as s,c as n,o as a,a as p}from"./app.a103cde2.js";const i=JSON.parse('{"title":"\u4F7F\u7528 SqlSugar \u5E76\u6CE8\u5165 Repository","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u9879\u76EE\u7ED3\u6784","slug":"\u9879\u76EE\u7ED3\u6784"},{"level":2,"title":"Repository","slug":"repository"},{"level":2,"title":"Service","slug":"service"},{"level":2,"title":"\u8C03\u7528","slug":"\u8C03\u7528"}],"relativePath":"sqlSugar/index.md"}'),o={name:"sqlSugar/index.md"},l=p(`<h1 id="\u4F7F\u7528-sqlsugar-\u5E76\u6CE8\u5165-repository" tabindex="-1">\u4F7F\u7528 SqlSugar \u5E76\u6CE8\u5165 Repository <a class="header-anchor" href="#\u4F7F\u7528-sqlsugar-\u5E76\u6CE8\u5165-repository" aria-hidden="true">#</a></h1><h2 id="\u9879\u76EE\u7ED3\u6784" tabindex="-1">\u9879\u76EE\u7ED3\u6784 <a class="header-anchor" href="#\u9879\u76EE\u7ED3\u6784" aria-hidden="true">#</a></h2><ul><li><p>\u4F7F\u7528 Repository-&gt;Service-&gt;Controller \u7684\u6A21\u5F0F</p></li><li><p>\u5EFA\u7ACB\u4ED3\u50A8\u6CDB\u578B\u57FA\u7C7B <code>Repository&lt;T&gt;</code></p></li></ul><div class="language-C#"><button class="copy"></button><span class="lang">C#</span><pre><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Repository</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">SimpleClient</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">where</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">class</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">new</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Repository</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">ISqlSugarClient</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">context</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">base</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> //\u9ED8\u8BA4\u503C\u7B49\u4E8Enull\u4E0D\u80FD\u5C11</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        Context </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> App</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">GetService</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">ISqlSugarClient</span><span style="color:#89DDFF;">&gt;();</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">//\u7528\u624B\u52A8\u83B7\u53D6\u65B9\u5F0F\u652F\u6301\u5207\u6362\u4ED3\u50A8</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="repository" tabindex="-1">Repository <a class="header-anchor" href="#repository" aria-hidden="true">#</a></h2><p>\u5047\u5982\u6211\u4EEC\u7684\u8981\u9488\u5BF9<code>V_Config_Company</code>\u8FD9\u4E2A\u8868\u505A\u4ED3\u50A8\u529F\u80FD</p><ol><li>\u5EFA\u7ACB V_Config_Company \u7684\u4ED3\u50A8\u63A5\u53E3<code>IVConfigCompanyRepository</code>\u7528\u4E8E\u63A5\u53E3\u6CE8\u5165: \u8FD9\u91CC\u8981\u7EE7\u627F SqlSugar \u7684<code>ISimpleClient&lt;V_Config_Company&gt;</code>\u7528\u6765\u5B9E\u73B0\u57FA\u672C\u7684\u589E\u5220\u6539\u67E5\u65B9\u6CD5,<code>IScoped</code>\u8868\u793A\u8BA9 Furion \u6846\u67B6\u5E2E\u52A9\u6CE8\u5165\uFF0C\u5F53\u7136\u4F60\u4E5F\u53EF\u4EE5\u81EA\u884C <code>services.AddScoped&lt;IVConfigConpanyRepository, VConfigConpanyRepository&gt;();</code></li></ol><div class="language-C#"><button class="copy"></button><span class="lang">C#</span><pre><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">IVConfigCompanyRepository</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">ISimpleClient</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">V_Config_Company</span><span style="color:#89DDFF;">&gt;,</span><span style="color:#FFCB6B;">IScoped</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">//\u8FD9\u91CC\u53EF\u4EE5\u5B9A\u4E49\u4E00\u4E9B\u975E\u901A\u7528\u65B9\u6CD5\u3002\u3002\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">Task</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">V_Config_Company</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">GetOne</span><span style="color:#89DDFF;">(string</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">paymentAccout</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><ol start="2"><li>\u5EFA\u7ACB <code>VConfigCompanyRepository</code>\u7C7B\u5E76\u7EE7\u627F\u4ED3\u50A8\u6CDB\u578B\u57FA\u7C7B<code>Repository&lt;T&gt;</code>\u548C<code>IVConfigCompanyRepository</code>,\u5B9E\u73B0\u5B9A\u4E49\u7684\u975E\u901A\u7528\u65B9\u6CD5</li></ol><div class="language-C#"><button class="copy"></button><span class="lang">C#</span><pre><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">VConfigCompanyRepository</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">Repository</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">V_Config_Company</span><span style="color:#89DDFF;">&gt;,</span><span style="color:#FFCB6B;">IVConfigCompanyRepository</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">//\u5B9E\u73B0\u5B9A\u4E49\u7684\u975E\u901A\u7528\u65B9\u6CD5\u3002\u3002\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Task</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">V_Config_Company</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">GetOne</span><span style="color:#89DDFF;">(string</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">paymentAccout</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">await</span><span style="color:#A6ACCD;"> Context</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">AsTenant</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">GetConnectionWithAttr</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">V_Config_Company</span><span style="color:#89DDFF;">&gt;()</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Ado</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Context</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Queryable</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">V_Config_Company</span><span style="color:#89DDFF;">&gt;().</span><span style="color:#82AAFF;">Where</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">v</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> v</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">App_OrderNo </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> paymentAccout</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">FirstAsync</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="service" tabindex="-1">Service <a class="header-anchor" href="#service" aria-hidden="true">#</a></h2><ol><li>\u5EFA\u7ACB Service \u63A5\u53E3<code>IVConfigCompanyService</code></li></ol><div class="language-C#"><button class="copy"></button><span class="lang">C#</span><pre><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">IVConfigCompanyService</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">IScoped</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">Task</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">V_Config_Company</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">GetOne</span><span style="color:#89DDFF;">(string</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">paymentAccout</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><ol start="2"><li>\u5EFA\u7ACB Service<code>VConfigCompanyService</code>\u5E76\u7EE7\u627F IVConfigCompanyService</li></ol><div class="language-C#"><button class="copy"></button><span class="lang">C#</span><pre><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">VConfigCompanyService</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Repository</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">V_Config_Company</span><span style="color:#89DDFF;">&gt;,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">IVConfigCompanyService</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">readonly</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">IVConfigCompanyRepository</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">_ivConfigCompanyRepository</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">VConfigCompanyService</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">IVConfigCompanyRepository</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ivConfigCompanyRepository</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        _ivConfigCompanyRepository </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> ivConfigCompanyRepository</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Task</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">V_Config_Company</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">GetOne</span><span style="color:#89DDFF;">(string</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">paymentAccout</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">await</span><span style="color:#A6ACCD;"> _ivConfigCompanyRepository</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">GetOne</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">paymentAccout</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u8C03\u7528" tabindex="-1">\u8C03\u7528 <a class="header-anchor" href="#\u8C03\u7528" aria-hidden="true">#</a></h2><p>\u5728 Furion \u6846\u67B6\u4E2D\u4F7F\u7528:<code>CatService</code>\u662F\u4E00\u4E2A ApiController,\u901A\u8FC7\u6784\u9020\u51FD\u6570\u6CE8\u5165\u63A5\u53E3<code>IVConfigCompanyService</code>,\u5177\u4F53\u7684\u4F9D\u8D56\u5B9E\u73B0\u4EA4\u7ED9 IOC \u5BB9\u5668</p><div class="language-C#"><button class="copy"></button><span class="lang">C#</span><pre><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CatService</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ICatService</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ITransient</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">readonly</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ILogger</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">CatService</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">_logger</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">readonly</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">IVConfigCompanyService</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">_vConfigCompanyService</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">CatService</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">ILogger</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">CatService</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">logger</span><span style="color:#89DDFF;">,</span><span style="color:#FFCB6B;">IVConfigCompanyService</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">vConfigCompanyService</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        _logger </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> logger</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        _vConfigCompanyService </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> vConfigCompanyService</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Task</span><span style="color:#89DDFF;">&lt;string&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">GetReceivableStore</span><span style="color:#89DDFF;">(string</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">paymentAccount</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">//\u4F7F\u7528</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">vConfigCompany</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">await</span><span style="color:#A6ACCD;"> _vConfigCompanyService</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">GetOne</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">paymentAccount</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">viewDeptInfoVatstore</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">await</span><span style="color:#A6ACCD;"> viewDeptInfoVatStoreService</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">GetOne</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">vConfigCompany</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Store_NO</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> viewDeptInfoVatstore</span><span style="color:#89DDFF;">?.</span><span style="color:#A6ACCD;">DEPT_NO</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,18),e=[l];function t(c,r,C,y,F,D){return a(),n("div",null,e)}const B=s(o,[["render",t]]);export{i as __pageData,B as default};
