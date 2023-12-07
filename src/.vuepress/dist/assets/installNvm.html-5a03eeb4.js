import{_ as l,r as e,o,c as p,d as s,e as r,b as t,f as n}from"./app-c8673e61.js";const c="/assets/1-1fc8da72.jpg",i="/assets/2-7a82aa19.png",d="/assets/3-975b0d6e.png",B="/assets/4-2d59c420.png",y="/assets/5-07344c91.png",v="/assets/6-96303ad7.png",m="/assets/7-4eb47835.png",F="/assets/8-0244fd03.png",b="/assets/9-4ef0927f.png",A="/assets/10-a2eb4bd8.png",u={},h=n('<h2 id="什么是nvm" tabindex="-1"><a class="header-anchor" href="#什么是nvm" aria-hidden="true">#</a> 什么是nvm</h2><p>nvm（Node Version Manager）是一款用于管理 Node.js 版本的工具，可以轻松地在一个系统中切换和安装多个 Node.js 版本。使用 nvm 可以让你轻松地升级或降级 Node.js 版本，也可以在同一台机器上同时使用多个版本的 Node.js。</p><h2 id="下载及安装配置" tabindex="-1"><a class="header-anchor" href="#下载及安装配置" aria-hidden="true">#</a> 下载及安装配置</h2><h3 id="下载" tabindex="-1"><a class="header-anchor" href="#下载" aria-hidden="true">#</a> 下载</h3>',4),g={href:"https://github.com/coreybutler/nvm-windows/releases",target:"_blank",rel:"noopener noreferrer"},_=s("br",null,null,-1),f=s("img",{src:c,alt:"",loading:"lazy"},null,-1),C=n('<h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><p>接受协议<br><img src="'+i+'" alt="" loading="lazy"><br> 注意这里：默认安装到C盘，之后就不用配置环境变量了）<br><img src="'+d+'" alt="" loading="lazy"><br><img src="'+B+'" alt="" loading="lazy"><br><img src="'+y+'" alt="" loading="lazy"><br> 完成可以以下方式检测<br><img src="'+v+'" alt="" loading="lazy"><br> 如果安装到D盘，则需要配置相对应的环境，如图：（输入相对应的文件位置）<br><img src="'+m+'" alt="" loading="lazy"><br><img src="'+F+'" alt="" loading="lazy"></p><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h3><p>找到nvm文件位置，点开settings.txt<br><img src="'+b+`" alt="" loading="lazy"><br> 然后在它后面输入以下代码：（这是配置镜像源）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">node_mirror: https://npm.taobao.org/mirrors/node/</span></span>
<span class="line"><span style="color:#abb2bf;">npm_mirror: https://npm.taobao.org/mirrors/npm/</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+A+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="使用nvm" tabindex="-1"><a class="header-anchor" href="#使用nvm" aria-hidden="true">#</a> 使用nvm</h2><p>1.先卸载之前的node.js</p><p>2.在刚刚的nvm文件位置打开cmd</p><p>3.输入以下代码查看nvm可安装的node版本</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">nvm</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">ls</span><span style="color:#ABB2BF;">                      </span><span style="color:#98C379;">//</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">看安装的所有node.js的版本</span></span>
<span class="line"><span style="color:#61AFEF;">nvm</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">list</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">available</span><span style="color:#ABB2BF;">          </span><span style="color:#98C379;">//</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">查显示可以安装的所有node.js的版本</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>4.安装所对应的版本。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">nvm</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">install</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">版本号</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">//</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">例如：nvm</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">install</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">14.19</span><span style="color:#98C379;">.0</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>5.切换到安装的版本</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">nvm</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">use</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">版本号</span><span style="color:#ABB2BF;">           </span><span style="color:#98C379;">//</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">切换到使用指定的nodejs版本</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>6.检测是否切换完成，新开一个cmd</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">node</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">-v</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="nvm常用命令" tabindex="-1"><a class="header-anchor" href="#nvm常用命令" aria-hidden="true">#</a> nvm常用命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">nvm</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">list</span><span style="color:#ABB2BF;"> </span><span style="color:#7F848E;font-style:italic;">## 查看已经安装的版本</span></span>
<span class="line"><span style="color:#61AFEF;">nvm</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">list</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">installed</span><span style="color:#ABB2BF;"> </span><span style="color:#7F848E;font-style:italic;">## 查看已经安装的版本</span></span>
<span class="line"><span style="color:#61AFEF;">nvm</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">list</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">available</span><span style="color:#ABB2BF;"> </span><span style="color:#7F848E;font-style:italic;">## 查看网络可以安装的版本</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#61AFEF;">nvm</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">install</span><span style="color:#ABB2BF;"> </span><span style="color:#7F848E;font-style:italic;">## 安装最新版本nvm</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#61AFEF;">nvm</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">use</span><span style="color:#ABB2BF;"> &lt;</span><span style="color:#98C379;">versio</span><span style="color:#ABB2BF;">n&gt; </span><span style="color:#7F848E;font-style:italic;">## 切换使用指定的版本node</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#61AFEF;">nvm</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">ls</span><span style="color:#ABB2BF;"> </span><span style="color:#7F848E;font-style:italic;">## 列出所有版本</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#61AFEF;">nvm</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">current</span><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">## 显示当前版本</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#61AFEF;">nvm</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">alias</span><span style="color:#ABB2BF;"> &lt;</span><span style="color:#98C379;">nam</span><span style="color:#ABB2BF;">e&gt; &lt;</span><span style="color:#98C379;">versio</span><span style="color:#ABB2BF;">n&gt; </span><span style="color:#7F848E;font-style:italic;">## 给不同的版本号添加别名</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#61AFEF;">nvm</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">unalias</span><span style="color:#ABB2BF;"> &lt;</span><span style="color:#98C379;">nam</span><span style="color:#ABB2BF;">e&gt; </span><span style="color:#7F848E;font-style:italic;">## 删除已定义的别名</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#61AFEF;">nvm</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">reinstall-packages</span><span style="color:#ABB2BF;"> &lt;</span><span style="color:#98C379;">versio</span><span style="color:#ABB2BF;">n&gt; </span><span style="color:#7F848E;font-style:italic;">## 在当前版本node环境下，重新全局安装指定版本号的npm包</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#61AFEF;">nvm</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">on</span><span style="color:#ABB2BF;">     </span><span style="color:#7F848E;font-style:italic;">## 打开nodejs控制</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#61AFEF;">nvm</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">off</span><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">## 关闭nodejs控制</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#61AFEF;">nvm</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">proxy</span><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">## 查看设置与代理</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#61AFEF;">nvm</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">node_mirror</span><span style="color:#ABB2BF;"> [url] </span><span style="color:#7F848E;font-style:italic;">## 设置或者查看setting.txt中的node_mirror，如果不设置的默认是 https://nodejs.org/dist/</span></span>
<span class="line"><span style="color:#61AFEF;">nvm</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">npm_mirror</span><span style="color:#ABB2BF;"> [url] </span><span style="color:#7F848E;font-style:italic;">## 设置或者查看setting.txt中的npm_mirror,如果不设置的话默认的是： https://github.com/npm/npm/archive/.</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#61AFEF;">nvm</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">uninstall</span><span style="color:#ABB2BF;"> &lt;</span><span style="color:#98C379;">versio</span><span style="color:#ABB2BF;">n&gt; </span><span style="color:#7F848E;font-style:italic;">## 卸载制定的版本</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#61AFEF;">nvm</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">use</span><span style="color:#ABB2BF;"> [version] [arch] </span><span style="color:#7F848E;font-style:italic;">## 切换制定的node版本和位数</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#61AFEF;">nvm</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">root</span><span style="color:#ABB2BF;"> [path] </span><span style="color:#7F848E;font-style:italic;">## 设置和查看root路径</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#61AFEF;">nvm</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">version</span><span style="color:#ABB2BF;"> </span><span style="color:#7F848E;font-style:italic;">## 查看当前的版本</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19);function E(x,k){const a=e("ExternalLinkIcon");return o(),p("div",null,[h,s("p",null,[s("a",g,[r("https://github.com/coreybutler/nvm-windows/releases"),t(a)]),_,f]),C])}const N=l(u,[["render",E],["__file","installNvm.html.vue"]]);export{N as default};
