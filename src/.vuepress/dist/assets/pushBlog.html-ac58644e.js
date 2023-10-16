import{_ as r,r as o,o as p,c,e as a,f as s,b as e,w as i,d as l}from"./app-9c0ffe97.js";const d={},h=a("h2",{id:"运行博客",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#运行博客","aria-hidden":"true"},"#"),s(" 运行博客")],-1),B=a("h3",{id:"环境准备",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#环境准备","aria-hidden":"true"},"#"),s(" 环境准备")],-1),y={href:"https://nodejs.org/zh-cn",target:"_blank",rel:"noopener noreferrer"},u={href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"},A=l(`<p>安装 Pnpm，在终端中输入下列命令安装 pnpm:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">corepack</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">enable</span></span>
<span class="line"><span style="color:#61AFEF;">corepack</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">prepare</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">pnpm@latest</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">--activate</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="下载远程仓库" tabindex="-1"><a class="header-anchor" href="#下载远程仓库" aria-hidden="true">#</a> 下载远程仓库</h3><p>在本地仓下执行</p>`,4),F={href:"https://gitee.com/boxsir/boxsir.git",target:"_blank",rel:"noopener noreferrer"},g=l(`<h3 id="运行项目" tabindex="-1"><a class="header-anchor" href="#运行项目" aria-hidden="true">#</a> 运行项目</h3><p>使用 <strong>vscode</strong> 打开项目后在终端执行命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">pnpm</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">install</span><span style="color:#ABB2BF;">   </span><span style="color:#7F848E;font-style:italic;">#下载依赖</span></span>
<span class="line"><span style="color:#61AFEF;">pnpm</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">docs:dev</span><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">#启动开发服务器</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,3),m={href:"http://localhost:8080",target:"_blank",rel:"noopener noreferrer"},b=l(`<h2 id="推送博客" tabindex="-1"><a class="header-anchor" href="#推送博客" aria-hidden="true">#</a> 推送博客</h2><p>项目部署在Gitee Pages服务中 ，访问目录是 <code>src/.vuepress/dist</code> ，所以需要先把项目构建到 <code>dist</code> 文件夹下。</p><p>在终端执行命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">pnpm</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">docs:build</span><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">#构建项目并输出</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>构建完成后通过 <strong>git</strong> 推送到自己的远程仓库</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">add</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">.</span><span style="color:#ABB2BF;">                                 </span><span style="color:#7F848E;font-style:italic;">#添加所有文件到暂存区</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">commit</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">-m</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;first commit&quot;</span><span style="color:#ABB2BF;">              </span><span style="color:#7F848E;font-style:italic;">#提交暂存区内容到本地仓库</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">remote</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">add</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">origin</span><span style="color:#ABB2BF;"> &lt;</span><span style="color:#98C379;">remote-ur</span><span style="color:#ABB2BF;">l&gt;        </span><span style="color:#7F848E;font-style:italic;">#关联到远程仓库（已关联省略这一步）</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">push</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">-u</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">origin</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;master&quot;</span><span style="color:#ABB2BF;">               </span><span style="color:#7F848E;font-style:italic;">#推送到远程maste分支</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="部署博客" tabindex="-1"><a class="header-anchor" href="#部署博客" aria-hidden="true">#</a> 部署博客</h2><p>项目上传成功后，并没有部署完成。</p><p>前往 <strong>gitee&gt;项目仓库&gt;服务&gt;Gitee Pages&gt;更新</strong></p><p>更新完成后，可通过提供的网站地址，访问最新的博客啦🎉</p><h2 id="更新博客" tabindex="-1"><a class="header-anchor" href="#更新博客" aria-hidden="true">#</a> 更新博客 📌</h2>`,11),_=a("li",null,[s("在vscode中更新博客内容后，需要重复 "),a("a",{href:"#%E6%8E%A8%E9%80%81%E5%8D%9A%E5%AE%A2"},"推送博客"),s(" 和 "),a("a",{href:"#%E9%83%A8%E7%BD%B2%E5%8D%9A%E5%AE%A2"},"部署博客"),s(" 中的操作")],-1),v={href:"https://crawler.algolia.com/admin/crawlers/",target:"_blank",rel:"noopener noreferrer"};function f(E,x){const n=o("ExternalLinkIcon"),t=o("RouterLink");return p(),c("div",null,[h,B,a("p",null,[s("安装 "),a("a",y,[s("Node.js"),e(n)])]),a("p",null,[s("安装 "),a("a",u,[s("VSCode"),e(n)])]),A,a("p",null,[s("git clone "),a("a",F,[s("https://gitee.com/boxsir/boxsir.git"),e(n)]),s(" #克隆远程项目")]),g,a("p",null,[s("此时可以在浏览器中访问 "),a("a",m,[s("http://localhost:8080"),e(n)]),s(" 看到项目启动")]),b,a("ul",null,[_,a("li",null,[s("如果希望博客的搜索功能，立即实现对新文章的搜索，需要前往 "),a("a",v,[s("Algolia Crawler"),e(n)]),s(" 来手动重启爬虫，实现对新文章的索引。具体步骤，参考 "),a("strong",null,[s("Algolia搜索>"),e(t,{to:"/about/site/algolia.html#%E6%89%A7%E8%A1%8C%E7%88%AC%E8%99%AB"},{default:i(()=>[s("执行爬虫")]),_:1})])])])])}const C=r(d,[["render",f],["__file","pushBlog.html.vue"]]);export{C as default};