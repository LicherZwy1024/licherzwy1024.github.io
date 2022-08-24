import{_ as s,c as a,o as n,a as e}from"./app.e3189a16.js";const l="/docs/images/sqlserver/SSMS-error.png",o="/docs/images/sqlserver/IISCrypto.png",r="/docs/images/sqlserver/IISCrypto2.png",D=JSON.parse('{"title":"MSSQL \u95EE\u9898","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u65E0\u6CD5\u8FDE\u63A5\u6570\u636E\u5E93","slug":"\u65E0\u6CD5\u8FDE\u63A5\u6570\u636E\u5E93"},{"level":3,"title":"\u89E3\u51B3\u529E\u6CD5","slug":"\u89E3\u51B3\u529E\u6CD5"}],"relativePath":"lxh/sql_server.md"}'),p={name:"lxh/sql_server.md"},t=e(`<h1 id="mssql-\u95EE\u9898" tabindex="-1">MSSQL \u95EE\u9898 <a class="header-anchor" href="#mssql-\u95EE\u9898" aria-hidden="true">#</a></h1><h2 id="\u65E0\u6CD5\u8FDE\u63A5\u6570\u636E\u5E93" tabindex="-1">\u65E0\u6CD5\u8FDE\u63A5\u6570\u636E\u5E93 <a class="header-anchor" href="#\u65E0\u6CD5\u8FDE\u63A5\u6570\u636E\u5E93" aria-hidden="true">#</a></h2><ul><li>Windows Server 2012 R2 \u7684\u64CD\u4F5C\u7CFB\u7EDF\u66F4\u65B0\u4E86\u8865\u4E01\uFF0C\u91CD\u542F\u540E Microsoft SQL Server 2016 \u7528\u4E0D\u4E86\uFF0C\u4E0D\u7BA1\u662F\u672C\u5730\u8FD8\u662F\u5BA2\u6237\u7AEF\u8FDE\u63A5\uFF0C\u90FD\u51FA\u73B0\u4EE5\u4E0B\u9519\u8BEF\uFF1A\u5DF2\u6210\u529F\u4E0E\u670D\u52A1\u5668\u5EFA\u7ACB\u8FDE\u63A5\uFF0C\u4F46\u662F\u5728\u767B\u5F55\u8FC7\u7A0B\u4E2D\u53D1\u751F\u9519\u8BEF\u3002 (provider: SSL Provider, error: 0 - \u7BA1\u9053\u7684\u53E6\u4E00\u7AEF\u4E0A\u65E0\u4EFB\u4F55\u8FDB\u7A0B\u3002)\uFF08Microsoft SQL Server\uFF0C\u9519\u8BEF\uFF1A223\uFF09</li></ul><div class="language-sql"><button class="copy"></button><span class="lang">sql</span><pre><code><span class="line"><span style="color:#A6ACCD;">Errors:\u4E2D\u6587\u63D0\u793A : \u8FDE\u63A5\u6570\u636E\u5E93\u8FC7\u7A0B\u4E2D\u53D1\u751F\u9519\u8BEF\uFF0C\u68C0\u67E5\u670D\u52A1\u5668\u662F\u5426\u6B63\u5E38\u8FDE\u63A5\u5B57\u7B26\u4E32\u662F\u5426\u6B63\u786E\uFF0C</span></span>
<span class="line"><span style="color:#A6ACCD;">\u9519\u8BEF\u4FE1\u606F\uFF1AA connection was successfully established </span><span style="color:#F78C6C;">with</span><span style="color:#A6ACCD;"> the </span><span style="color:#F78C6C;">server</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">but </span><span style="color:#F78C6C;">then</span><span style="color:#A6ACCD;"> an error occurred during the </span><span style="color:#F78C6C;">login</span><span style="color:#A6ACCD;"> process.</span></span>
<span class="line"><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">provider</span><span style="color:#A6ACCD;">: </span><span style="color:#F78C6C;">SSL</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">Provider</span><span style="color:#A6ACCD;">, error: </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> \u8FDC\u7A0B\u4E3B\u673A\u5F3A\u8FEB\u5173\u95ED\u4E86\u4E00\u4E2A\u73B0\u6709\u7684\u8FDE\u63A5\u3002).</span></span>
<span class="line"><span style="color:#A6ACCD;">English </span><span style="color:#F78C6C;">Message</span><span style="color:#A6ACCD;"> : Connection </span><span style="color:#F78C6C;">open</span><span style="color:#A6ACCD;"> error . A connection was successfully established </span><span style="color:#F78C6C;">with</span><span style="color:#A6ACCD;"> the </span><span style="color:#F78C6C;">server</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">but </span><span style="color:#F78C6C;">then</span><span style="color:#A6ACCD;"> an error occurred during the </span><span style="color:#F78C6C;">login</span><span style="color:#A6ACCD;"> process.</span></span>
<span class="line"><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">provider</span><span style="color:#A6ACCD;">: </span><span style="color:#F78C6C;">SSL</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">Provider</span><span style="color:#A6ACCD;">, error: </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> \u8FDC\u7A0B\u4E3B\u673A\u5F3A\u8FEB\u5173\u95ED\u4E86\u4E00\u4E2A\u73B0\u6709\u7684\u8FDE\u63A5\u3002)</span></span>
<span class="line"></span></code></pre></div><ul><li>SSMS \u8FDE\u63A5\u5C31\u62A5\u9519 <img src="`+l+'" alt="\u9519\u8BEF\u4FE1\u606F"></li></ul><h3 id="\u89E3\u51B3\u529E\u6CD5" tabindex="-1">\u89E3\u51B3\u529E\u6CD5 <a class="header-anchor" href="#\u89E3\u51B3\u529E\u6CD5" aria-hidden="true">#</a></h3><ul><li><p>\u9F13\u641E\u5F88\u4E45\u6700\u540E\u624D\u53D1\u73B0\u662F Windows update \u641E\u7684\u9B3C\uFF0C\u66F4\u65B0\u5185\u5BB9\u6539\u52A8\u4E86\u7CFB\u7EDF TLS \u548C SSL \u7684\u76F8\u5173\u914D\u7F6E\uFF0C\u867D\u7136\u5378\u8F7D\u4E86\u66F4\u65B0\u7684\u8865\u4E01\u91CD\u542F\uFF0C\u4ECD\u7136\u4E0D\u7BA1\u7528\u3002\u6240\u4EE5\u66F4\u65B0\u4E86\u8865\u4E01\u4E0D\u7528\u5378\u8F7D\u3002</p></li><li><p>\u4FEE\u590D\u6B64\u6545\u969C\u9700\u8981\u7528\u5230 IISCrypto \u5DE5\u5177\u5BF9\u6CE8\u518C\u8868\u7684 TLS \u548C SSL \u76F8\u5173\u503C\u505A\u4FEE\u6539\uFF0C\u767E\u5EA6\u641C\u7D22\u4E0B\u8F7D IISCrypto \u5DE5\u5177\u3002</p></li><li><p>\u6253\u5F00 IISCrypto \u5DE5\u5177\uFF0C\u6309\u622A\u56FE\u6240\u793A\u52FE\u9009 Protocols\u3001Ciphers\u3001Hashes\u3001Key Exchanges\uFF08\u534F\u8BAE\u3001\u5BC6\u7801\u3001\u54C8\u5E0C\u3001\u5BC6\u94A5\u4EA4\u6362\uFF09\u3002\u70B9\u51FB Apply\uFF0C\u5F39\u51FA\u63D0\u793A\u9700\u8981\u91CD\u542F\u624D\u751F\u6548\uFF0C\u70B9\u201C\u786E\u5B9A\u201D\uFF0C\u4E0D\u7528\u7406\u4F1A\u3002 <img src="'+o+'" alt="IISCrypto"></p></li><li><p>\u70B9\u51FB\u201CCipher Suite\u201D\u8FDB\u5165\u5BC6\u7801\u5957\u4EF6\u914D\u7F6E\uFF0C\u5982\u56FE\u3002 \u53D6\u6D88\u8FD9\u4E24\u4E2A\u9009\u9879\uFF1A SSL_CK_RC4_128_WITH_MD5\u3001 SSL_CK_DES_192_EDE3_CBC_WITH_MD5 \u52FE\u9009\u6240\u6709\u4E0E TLS \u76F8\u5173\u7684\uFF0C\u70B9\u51FB Apply\uFF0C\u91CD\u542F\u670D\u52A1\u5668\u4E3B\u673A\uFF0CSQL Server \u670D\u52A1\u53CA SQL Server \u4EE3\u7406\u90FD\u6B63\u5E38\u542F\u52A8\u4E86\uFF0C\u6D4B\u8BD5 SSMS \u672C\u5730\u4E0E\u8FDC\u7A0B\u63A5\u5165\u90FD\u6B63\u5E38\u3002 <img src="'+r+'" alt="IISCrypto"></p></li><li><p>\u8BF7\u786E\u4FDD\u5728 IISCrypto \u4E2D\u6B63\u786E\u52FE\u9009\u622A\u56FE\u6240\u793A\u5BC6\u7801\u3001\u534F\u8BAE\u7B49\u9009\u9879\uFF0C\u5426\u5219\u65E0\u6CD5\u89E3\u51B3\u95EE\u9898\u3002</p></li></ul>',7),c=[t];function C(i,y,A,S,d,_){return n(),a("div",null,c)}const u=s(p,[["render",C]]);export{D as __pageData,u as default};
