import{_ as s,c as a,o as n,d as l}from"./app.9a966338.js";const i=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"lxh/server.md"}'),o={name:"lxh/server.md"},p=l(`<ul><li>\u2014 \u67E5\u8BE2\u8BA2\u5355</li></ul><div class="language-sql"><button class="copy"></button><span class="lang">sql</span><pre><code><span class="line"><span style="color:#F78C6C;">select</span><span style="color:#A6ACCD;"> store_id </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u81EA\u63D0\u95E8\u5E97Id</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,area </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u6536\u8D27\u7701\u5E02\u533A</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#F78C6C;">address</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u6536\u8D27\u5730\u5740</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,customer_code </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u5BA2\u6237\u4EE3\u7801</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,</span><span style="color:#89DDFF;">*</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">from</span><span style="color:#A6ACCD;"> dt_orders </span><span style="color:#F78C6C;">where</span><span style="color:#A6ACCD;"> order_no </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">X211225081016639053</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"></span></code></pre></div><ul><li>\u2014 \u6839\u636E\u5BA2\u6237\u4EE3\u7801\u5224\u65AD\u662F\u5426\u56FA\u5B9A\u5F00\u7968</li></ul><div class="language-sql"><button class="copy"></button><span class="lang">sql</span><pre><code><span class="line"><span style="color:#F78C6C;">select</span><span style="color:#A6ACCD;"> TXRGNO </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u662F\u5426\u56FA\u5B9A\u5F00\u7968</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,CUSTST </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u56FA\u5B9A\u5F00\u7968StoreNo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,</span><span style="color:#89DDFF;">*</span></span>
<span class="line"><span style="color:#F78C6C;">from</span><span style="color:#A6ACCD;"> [CNKSSQL02].[LSHM].[dbo].[DBS_CIPNAME0] </span><span style="color:#F78C6C;">where</span><span style="color:#A6ACCD;"> CUNO </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">4176515</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><ul><li>\u2014 \u6839\u636E\u6536\u8D27\u5730\u5740\u7701\u5E02\u533A\u67E5\u627E StoreNo</li></ul><div class="language-sql"><button class="copy"></button><span class="lang">sql</span><pre><code><span class="line"><span style="color:#F78C6C;">select</span><span style="color:#A6ACCD;"> Province </span><span style="color:#89DDFF;">+</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> City </span><span style="color:#89DDFF;">+</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> County </span><span style="color:#F78C6C;">as</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u7701\u5E02\u533A</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,</span><span style="color:#89DDFF;">*</span></span>
<span class="line"><span style="color:#F78C6C;">from</span><span style="color:#A6ACCD;"> dt_Address_VS_Store</span></span>
<span class="line"><span style="color:#F78C6C;">where</span><span style="color:#A6ACCD;"> Province </span><span style="color:#89DDFF;">+</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> City </span><span style="color:#89DDFF;">+</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> County </span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u6C5F\u82CF,\u6DEE\u5B89,\u76F1\u7719\u53BF</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"></span></code></pre></div><ul><li>\u2014 \u67E5\u8BE2 DBS \u8F6C\u5355\u4E2D\u95F4\u8868</li></ul><div class="language-sql"><button class="copy"></button><span class="lang">sql</span><pre><code><span class="line"><span style="color:#F78C6C;">select</span><span style="color:#A6ACCD;"> Store_No,</span><span style="color:#89DDFF;">*</span></span>
<span class="line"><span style="color:#F78C6C;">from</span><span style="color:#A6ACCD;"> LSHMAPPSTAGE.dbo.Stage_Order_Head</span></span>
<span class="line"><span style="color:#F78C6C;">where</span><span style="color:#A6ACCD;"> App_Order_No </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">X211225081016639053</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"></span></code></pre></div><ul><li>\u2014 \u6839\u636E StoreNo \u67E5\u8BE2 POD \u90AE\u7BB1\u3001\u5206\u516C\u53F8\u4EE3\u7801\u3001\u5206\u516C\u53F8\u7701\u4EFD</li></ul><div class="language-sql"><button class="copy"></button><span class="lang">sql</span><pre><code><span class="line"><span style="color:#F78C6C;">select</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">from</span><span style="color:#A6ACCD;"> dt_order_notice</span></span>
<span class="line"><span style="color:#F78C6C;">where</span><span style="color:#A6ACCD;"> StoreNo</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">67</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F78C6C;">select</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">from</span><span style="color:#A6ACCD;"> dt_order_notice </span><span style="color:#F78C6C;">where</span><span style="color:#A6ACCD;"> StoreNo</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">67</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><ul><li>\u2014 <span id="getCsr">\u901A\u8FC7\u5BA2\u6237\u4EE3\u7801\u67E5 CSR \u4FE1\u606F\uFF08\u7B80\u79F0\u3001\u59D3\u540D\u3001\u624B\u673A\u3001\u5206\u516C\u53F8\u3001\u5730\u533A\u7B49\uFF09</span></li></ul><div class="language-sql"><button class="copy"></button><span class="lang">sql</span><pre><code><span class="line"><span style="color:#F78C6C;">select</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">from</span><span style="color:#A6ACCD;"> CNKSSQL02.LSHM.VW_SOSCSR</span></span>
<span class="line"></span></code></pre></div>`,12),e=[p];function c(t,r,D,C,y,F){return n(),a("div",null,e)}const d=s(o,[["render",c]]);export{i as __pageData,d as default};
