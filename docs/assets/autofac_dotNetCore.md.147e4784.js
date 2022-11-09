import{_ as s,c as n,o as a,a as l}from"./app.a103cde2.js";const i=JSON.parse('{"title":"Net 6","description":"","frontmatter":{},"headers":[{"level":2,"title":"Program.cs \u4E2D\u8FDB\u884C\u914D\u7F6E","slug":"program-cs-\u4E2D\u8FDB\u884C\u914D\u7F6E"},{"level":2,"title":"ApiModule \u6A21\u5757\u5316\u914D\u7F6E\u3001\u5E76\u5B9E\u73B0\u5BB9\u5668\u7684\u529F\u80FD","slug":"apimodule-\u6A21\u5757\u5316\u914D\u7F6E\u3001\u5E76\u5B9E\u73B0\u5BB9\u5668\u7684\u529F\u80FD"},{"level":2,"title":"\u6807\u6CE8\u63A5\u53E3\uFF1A","slug":"\u6807\u6CE8\u63A5\u53E3\uFF1A"},{"level":2,"title":"Resolve","slug":"resolve"}],"relativePath":"autofac/dotNetCore.md"}'),p={name:"autofac/dotNetCore.md"},o=l(`<h1 id="net-6" tabindex="-1">Net 6 <a class="header-anchor" href="#net-6" aria-hidden="true">#</a></h1><p>\u5F15\u5165\u5305\uFF1A</p><ul><li>Autofac\uFF1A<code>Autofac.Extensions.DependencyInjection</code></li><li>DependencyModel\uFF1A<code>Microsoft.Extensions.DependencyModel</code></li></ul><h2 id="program-cs-\u4E2D\u8FDB\u884C\u914D\u7F6E" tabindex="-1">Program.cs \u4E2D\u8FDB\u884C\u914D\u7F6E <a class="header-anchor" href="#program-cs-\u4E2D\u8FDB\u884C\u914D\u7F6E" aria-hidden="true">#</a></h2><div class="language-C#"><button class="copy"></button><span class="lang">C#</span><pre><code><span class="line"><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">builder</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> WebApplication</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">CreateBuilder</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">args</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">builder</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Host</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">UseServiceProviderFactory</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">AutofacServiceProviderFactory</span><span style="color:#89DDFF;">())</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">ConfigureContainer</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">ContainerBuilder</span><span style="color:#89DDFF;">&gt;(</span><span style="color:#FFCB6B;">container</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">//\u65B9\u5F0F\u4E00\uFF1A\u6A21\u7EC4\u5316</span></span>
<span class="line"><span style="color:#A6ACCD;">        container</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">RegisterModule</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">ApiModule</span><span style="color:#89DDFF;">&gt;();</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">//\u65B9\u5F0F\u4E8C\uFF1A\u6307\u5B9A\u5177\u4F53\u4F9D\u8D56\u5173\u7CFB</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// container.RegisterType&lt;UserService&gt;().As&lt;IUserService&gt;().InstancePerLifetimeScope();</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">\u2026\u2026</span></span>
<span class="line"><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">app</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> builder</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Build</span><span style="color:#89DDFF;">();</span></span>
<span class="line"></span></code></pre></div><h2 id="apimodule-\u6A21\u5757\u5316\u914D\u7F6E\u3001\u5E76\u5B9E\u73B0\u5BB9\u5668\u7684\u529F\u80FD" tabindex="-1">ApiModule \u6A21\u5757\u5316\u914D\u7F6E\u3001\u5E76\u5B9E\u73B0\u5BB9\u5668\u7684\u529F\u80FD <a class="header-anchor" href="#apimodule-\u6A21\u5757\u5316\u914D\u7F6E\u3001\u5E76\u5B9E\u73B0\u5BB9\u5668\u7684\u529F\u80FD" aria-hidden="true">#</a></h2><div class="language-C#"><button class="copy"></button><span class="lang">C#</span><pre><code><span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> System.Reflection</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> System.Runtime.Loader</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> Autofac</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> Microsoft.Extensions.DependencyModel</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> WebApplication1.Service</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">namespace</span><span style="color:#A6ACCD;"> WebApplication1</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Extentions</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ApiModule</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Autofac</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">Module</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#C792EA;">protected</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">override</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Load</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">ContainerBuilder</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">builder</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#676E95;">// \u83B7\u53D6\u6240\u6709\u521B\u5EFA\u7684\u9879\u76EELib</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">libs</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> DependencyContext</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Default</span></span>
<span class="line"><span style="color:#A6ACCD;">               </span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">CompileLibraries</span></span>
<span class="line"><span style="color:#A6ACCD;">               </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Where</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">x</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Serviceable </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> x</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Type </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">project</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">ToList</span><span style="color:#89DDFF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#676E95;">// \u5C06lib\u8F6C\u6210Assembly</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#FFCB6B;">List</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Assembly</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">assemblies</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">new</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">foreach</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">lib</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> libs</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">               assemblies</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Add</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">AssemblyLoadContext</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Default</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">LoadFromAssemblyName</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">AssemblyName</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">lib</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Name</span><span style="color:#89DDFF;">)));</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#676E95;">// \u53CD\u5C04\u83B7\u53D6\u5176\u4E2D\u6240\u6709\u7684\u88AB\u63A5\u53E3\u4FEE\u9970\u7684\u7C7B\u578B\uFF0C\u5E76\u533A\u5206\u751F\u547D\u5468\u671F</span></span>
<span class="line"><span style="color:#A6ACCD;">          builder</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">RegisterAssemblyTypes</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">assemblies</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">ToArray</span><span style="color:#89DDFF;">())</span></span>
<span class="line"><span style="color:#A6ACCD;">               </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Where</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">t</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> t</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">IsAssignableTo</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">IDependency</span><span style="color:#89DDFF;">&gt;()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">t</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">IsAbstract</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">               </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">AsSelf</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">               </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">AsImplementedInterfaces</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">               </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">InstancePerLifetimeScope</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">               </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">PropertiesAutowired</span><span style="color:#89DDFF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">          builder</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">RegisterType</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">WorkService</span><span style="color:#89DDFF;">&gt;().</span><span style="color:#82AAFF;">Named</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">IWorkService</span><span style="color:#89DDFF;">&gt;(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">work1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">               </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">InstancePerMatchingLifetimeScope</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">my-request</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">          builder</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">RegisterType</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">WorkService2</span><span style="color:#89DDFF;">&gt;().</span><span style="color:#82AAFF;">Named</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">IWorkService</span><span style="color:#89DDFF;">&gt;(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">work2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">               </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">InstancePerMatchingLifetimeScope</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">my-request2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#676E95;">// \u53CD\u5C04\u83B7\u53D6\u5176\u4E2D\u6240\u6709\u7684\u88AB\u63A5\u53E3\u4FEE\u9970\u7684\u7C7B\u578B\uFF0C\u5E76\u533A\u5206\u751F\u547D\u5468\u671F</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#676E95;">// builder.RegisterAssemblyTypes(assemblies.ToArray())</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#676E95;">//     .Where(t =&gt; t.IsAssignableTo&lt;IocTagScope&gt;() &amp;&amp; !t.IsAbstract)</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#676E95;">//     .AsSelf()</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#676E95;">//     .AsImplementedInterfaces()</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#676E95;">//     .InstancePerLifetimeScope()</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#676E95;">//     .PropertiesAutowired();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#676E95;">// builder.RegisterAssemblyTypes(assemblies.ToArray())</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#676E95;">//     .Where(t =&gt; t.IsAssignableTo&lt;IocTagSington&gt;() &amp;&amp; !t.IsAbstract)</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#676E95;">//     .AsSelf()</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#676E95;">//     .AsImplementedInterfaces()</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#676E95;">//     .SingleInstance()</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#676E95;">//     .PropertiesAutowired();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#676E95;">// builder.RegisterAssemblyTypes(assemblies.ToArray())</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#676E95;">//     .Where(t =&gt; t.IsAssignableTo&lt;IocTagTransient&gt;() &amp;&amp; !t.IsAbstract)</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#676E95;">//     .AsSelf()</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#676E95;">//     .AsImplementedInterfaces()</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#676E95;">//     .PropertiesAutowired();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#676E95;">// builder.RegisterAssemblyTypes(assemblies.ToArray())</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#676E95;">//     .Where(t =&gt; t.IsAssignableTo&lt;ControllerBase&gt;() &amp;&amp; !t.IsAbstract)</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#676E95;">//     .AsSelf()</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#676E95;">//     .PropertiesAutowired();</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u6807\u6CE8\u63A5\u53E3\uFF1A" tabindex="-1">\u6807\u6CE8\u63A5\u53E3\uFF1A <a class="header-anchor" href="#\u6807\u6CE8\u63A5\u53E3\uFF1A" aria-hidden="true">#</a></h2><div class="language-C#"><button class="copy"></button><span class="lang">C#</span><pre><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">IUserService</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">IDependency</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">GetUserName</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="resolve" tabindex="-1">Resolve <a class="header-anchor" href="#resolve" aria-hidden="true">#</a></h2><div class="language-C#"><button class="copy"></button><span class="lang">C#</span><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#FFCB6B;">HttpGet</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">Name</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">GetWeatherForecast</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">IEnumerable</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">WeatherForecast</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Get</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        _logger</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">LogInformation</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        _userService</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">GetUserName</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">IWorkService</span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">_workServiceS0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">s0</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">_scope</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">BeginLifetimeScope</span><span style="color:#89DDFF;">())</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">s</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">s0</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">BeginLifetimeScope</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">my-request</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">))</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                _workServiceS0</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">  s</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">ResolveNamed</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">IWorkService</span><span style="color:#89DDFF;">&gt;(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">work1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">                _workServiceS0</span><span style="color:#89DDFF;">?.</span><span style="color:#82AAFF;">BeginWork</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">IWorkService</span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">_workServiceSS</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">IWorkService</span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">_workServiceSS2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">s</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">_scope</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">BeginLifetimeScope</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">my-request2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">))</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            _workService</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">  s</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">ResolveNamed</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">IWorkService</span><span style="color:#89DDFF;">&gt;(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">work2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">            _workService</span><span style="color:#89DDFF;">?.</span><span style="color:#82AAFF;">BeginWork</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;">//_componentContext\u7684\u751F\u547D\u5468\u671F\u4E2D\u6CA1\u6709work2</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;">// var workService = _componentContext.ResolveNamed&lt;IWorkService&gt;(&quot;work2&quot;);</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;">// workService?.BeginWork();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;">//\u76F8\u540C\u4F5C\u7528\u57DF\u4E0B\u7684\u89E3\u6790\u5B9E\u4F8B\u662F\u4E00\u4E2A</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ss</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">BeginLifetimeScope</span><span style="color:#89DDFF;">())</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                _workServiceSS2</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">  ss</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">ResolveNamed</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">IWorkService</span><span style="color:#89DDFF;">&gt;(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">work2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">                _workServiceSS2</span><span style="color:#89DDFF;">?.</span><span style="color:#82AAFF;">BeginWork</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;">//\u4E0D\u540C\u4F5C\u7528\u57DF\u4E0B\u7684\u89E3\u6790\u5B9E\u4F8B\u4E0D\u540C</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ss</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">BeginLifetimeScope</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">my-request</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">))</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                _workServiceSS</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">  ss</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">ResolveNamed</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">IWorkService</span><span style="color:#89DDFF;">&gt;(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">work1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">                _workServiceSS</span><span style="color:#89DDFF;">?.</span><span style="color:#82AAFF;">BeginWork</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        _workService</span><span style="color:#89DDFF;">?.</span><span style="color:#82AAFF;">BeginWork</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">resolveNamed</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> _componentContext</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Resolve</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">UserService</span><span style="color:#89DDFF;">&gt;();</span></span>
<span class="line"><span style="color:#A6ACCD;">        resolveNamed</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">GetUserName</span><span style="color:#89DDFF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">//InstancePerLifetimeScope\u89E3\u6790\u5B9E\u4F8B\u662F\u4E00\u4E2A</span></span>
<span class="line"><span style="color:#A6ACCD;">        Console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">WriteLine</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">$&quot;</span><span style="color:#C3E88D;">userservice=</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">_userService</span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;">resolveNamed</span><span style="color:#89DDFF;">}&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">//\u4E0D\u540C\u4F5C\u7528\u57DF\u4E0B\u7684\u89E3\u6790\u5B9E\u4F8B\u4E0D\u540C</span></span>
<span class="line"><span style="color:#A6ACCD;">        Console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">WriteLine</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">$&quot;</span><span style="color:#C3E88D;">workservice=</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">_workServiceS0</span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;">_workServiceSS</span><span style="color:#89DDFF;">}&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">//\u76F8\u540C\u4F5C\u7528\u57DF\u4E0B\u7684\u89E3\u6790\u5B9E\u4F8B\u662F\u4E00\u4E2A</span></span>
<span class="line"><span style="color:#A6ACCD;">        Console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">WriteLine</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">$&quot;</span><span style="color:#C3E88D;">workservice2=</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">_workService</span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;">_workServiceSS2</span><span style="color:#89DDFF;">}&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> Enumerable</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Range</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">Select</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">index</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">WeatherForecast</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                Date </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> DateTime</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Now</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">AddDays</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">index</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                TemperatureC </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Random</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Shared</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Next</span><span style="color:#89DDFF;">(-</span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">55</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                Summary </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Summaries</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">Random</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Shared</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Next</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">Summaries</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Length</span><span style="color:#89DDFF;">)]</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">ToArray</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,11),e=[o];function c(t,r,F,D,y,A){return a(),n("div",null,e)}const d=s(p,[["render",c]]);export{i as __pageData,d as default};
