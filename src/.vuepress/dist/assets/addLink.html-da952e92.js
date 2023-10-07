const s=JSON.parse('{"key":"v-58c86a2b","path":"/about/site/addLink.html","title":"添加仓库","lang":"zh-CN","frontmatter":{"title":"添加仓库","icon":"addWarehouse","date":"2023-03-28T00:00:00.000Z","breadcrumb":false,"article":false,"description":"添加已有仓库类别数据 例如在工具分类下添加新工具 在 src\\\\.vuepress\\\\data\\\\tool.ts 文件中添加json import { LinkData } from \\"./friendData\\"; export const tool: LinkData[] = [ { name: \\"Smallpdf\\", desc: \\"利用我们的PDF工具集来处理数字文档，并无缝地简化您的工作流程。\\", ico: \\"https://s.smallpdf.com/static/e42e3ce3bd662d323c57.svg\\", link: \\"https://smallpdf.com/cn\\", }, //新增的json数据 { name: \\"json工具\\", desc: \\"网站部分工具是站长整合网上已有工具、开源包等，并全部遵循原有协议发布，著作权归属原作者或是团队。\\", ico: \\"https://www.bejson.com/static/bejson/img/qq/bejson-q.png\\", link: \\"https://www.bejson.com/\\", }, ]; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;","head":[["meta",{"property":"og:url","content":"https://boxsir.gitee.io/about/site/addLink.html"}],["meta",{"property":"og:site_name","content":"盒子小屋"}],["meta",{"property":"og:title","content":"添加仓库"}],["meta",{"property":"og:description","content":"添加已有仓库类别数据 例如在工具分类下添加新工具 在 src\\\\.vuepress\\\\data\\\\tool.ts 文件中添加json import { LinkData } from \\"./friendData\\"; export const tool: LinkData[] = [ { name: \\"Smallpdf\\", desc: \\"利用我们的PDF工具集来处理数字文档，并无缝地简化您的工作流程。\\", ico: \\"https://s.smallpdf.com/static/e42e3ce3bd662d323c57.svg\\", link: \\"https://smallpdf.com/cn\\", }, //新增的json数据 { name: \\"json工具\\", desc: \\"网站部分工具是站长整合网上已有工具、开源包等，并全部遵循原有协议发布，著作权归属原作者或是团队。\\", ico: \\"https://www.bejson.com/static/bejson/img/qq/bejson-q.png\\", link: \\"https://www.bejson.com/\\", }, ]; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-28T03:21:00.000Z"}],["meta",{"property":"article:author","content":"盒子先生"}],["meta",{"property":"article:published_time","content":"2023-03-28T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-28T03:21:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"添加仓库\\",\\"description\\":\\"添加已有仓库类别数据 例如在工具分类下添加新工具 在 src\\\\\\\\.vuepress\\\\\\\\data\\\\\\\\tool.ts 文件中添加json import { LinkData } from \\\\\\"./friendData\\\\\\"; export const tool: LinkData[] = [ { name: \\\\\\"Smallpdf\\\\\\", desc: \\\\\\"利用我们的PDF工具集来处理数字文档，并无缝地简化您的工作流程。\\\\\\", ico: \\\\\\"https://s.smallpdf.com/static/e42e3ce3bd662d323c57.svg\\\\\\", link: \\\\\\"https://smallpdf.com/cn\\\\\\", }, //新增的json数据 { name: \\\\\\"json工具\\\\\\", desc: \\\\\\"网站部分工具是站长整合网上已有工具、开源包等，并全部遵循原有协议发布，著作权归属原作者或是团队。\\\\\\", ico: \\\\\\"https://www.bejson.com/static/bejson/img/qq/bejson-q.png\\\\\\", link: \\\\\\"https://www.bejson.com/\\\\\\", }, ]; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\"}"]]},"headers":[{"level":2,"title":"添加已有仓库类别数据","slug":"添加已有仓库类别数据","link":"#添加已有仓库类别数据","children":[]},{"level":2,"title":"添加已有仓库类别下的子分类","slug":"添加已有仓库类别下的子分类","link":"#添加已有仓库类别下的子分类","children":[]},{"level":2,"title":"创建新仓库类别并添加数据","slug":"创建新仓库类别并添加数据","link":"#创建新仓库类别并添加数据","children":[]}],"git":{"createdTime":1695871260000,"updatedTime":1695871260000,"contributors":[{"name":"Mr.Box","email":"1796535192@qq.com","commits":1}]},"readingTime":{"minutes":2.66,"words":798},"filePathRelative":"about/site/addLink.md","localizedDate":"2023年3月28日","excerpt":"<h2> 添加已有仓库类别数据</h2>\\n<p>例如在<strong>工具</strong>分类下添加新工具</p>\\n<p>在 <code>src\\\\.vuepress\\\\data\\\\tool.ts</code> 文件中添加json</p>\\n<div class=\\"language-typescript line-numbers-mode\\" data-ext=\\"ts\\"><pre class=\\"shiki one-dark-pro\\" style=\\"background-color: #282c34\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color: #C678DD\\">import</span><span style=\\"color: #ABB2BF\\"> { </span><span style=\\"color: #E06C75\\">LinkData</span><span style=\\"color: #ABB2BF\\"> } </span><span style=\\"color: #C678DD\\">from</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #98C379\\">\\"./friendData\\"</span><span style=\\"color: #ABB2BF\\">;</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">export</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">const</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">tool</span><span style=\\"color: #ABB2BF\\">: </span><span style=\\"color: #E5C07B\\">LinkData</span><span style=\\"color: #ABB2BF\\">[] </span><span style=\\"color: #56B6C2\\">=</span><span style=\\"color: #ABB2BF\\"> [</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  {</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    </span><span style=\\"color: #E06C75\\">name</span><span style=\\"color: #ABB2BF\\">: </span><span style=\\"color: #98C379\\">\\"Smallpdf\\"</span><span style=\\"color: #ABB2BF\\">,</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    </span><span style=\\"color: #E06C75\\">desc</span><span style=\\"color: #ABB2BF\\">: </span><span style=\\"color: #98C379\\">\\"利用我们的PDF工具集来处理数字文档，并无缝地简化您的工作流程。\\"</span><span style=\\"color: #ABB2BF\\">,</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    </span><span style=\\"color: #E06C75\\">ico</span><span style=\\"color: #ABB2BF\\">: </span><span style=\\"color: #98C379\\">\\"https://s.smallpdf.com/static/e42e3ce3bd662d323c57.svg\\"</span><span style=\\"color: #ABB2BF\\">,</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    </span><span style=\\"color: #E06C75\\">link</span><span style=\\"color: #ABB2BF\\">: </span><span style=\\"color: #98C379\\">\\"https://smallpdf.com/cn\\"</span><span style=\\"color: #ABB2BF\\">,</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  },</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  </span><span style=\\"color: #7F848E; font-style: italic\\">//新增的json数据</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  {</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    </span><span style=\\"color: #E06C75\\">name</span><span style=\\"color: #ABB2BF\\">: </span><span style=\\"color: #98C379\\">\\"json工具\\"</span><span style=\\"color: #ABB2BF\\">,</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    </span><span style=\\"color: #E06C75\\">desc</span><span style=\\"color: #ABB2BF\\">: </span><span style=\\"color: #98C379\\">\\"网站部分工具是站长整合网上已有工具、开源包等，并全部遵循原有协议发布，著作权归属原作者或是团队。\\"</span><span style=\\"color: #ABB2BF\\">,</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    </span><span style=\\"color: #E06C75\\">ico</span><span style=\\"color: #ABB2BF\\">: </span><span style=\\"color: #98C379\\">\\"https://www.bejson.com/static/bejson/img/qq/bejson-q.png\\"</span><span style=\\"color: #ABB2BF\\">,</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    </span><span style=\\"color: #E06C75\\">link</span><span style=\\"color: #ABB2BF\\">: </span><span style=\\"color: #98C379\\">\\"https://www.bejson.com/\\"</span><span style=\\"color: #ABB2BF\\">,</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  },</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">];</span></span>\\n<span class=\\"line\\"></span></code></pre><div class=\\"highlight-lines\\"><br><br><br><br><br><br><br><br><br><br><div class=\\"highlight-line\\">&nbsp;</div><div class=\\"highlight-line\\">&nbsp;</div><div class=\\"highlight-line\\">&nbsp;</div><div class=\\"highlight-line\\">&nbsp;</div><div class=\\"highlight-line\\">&nbsp;</div><div class=\\"highlight-line\\">&nbsp;</div><br></div><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{s as data};
