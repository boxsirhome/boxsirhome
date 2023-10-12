const e=JSON.parse('{"key":"v-419c97e6","path":"/item/IoT/ESP32/weatherClock.html","title":"WiFi天气时钟系统设计","lang":"zh-CN","frontmatter":{"icon":null,"date":"2023-09-23T00:00:00.000Z","article":true,"sticky":false,"star":false,"timeline":false,"category":["物联网"],"tag":["ESP32"],"description":"WiFi天气时钟系统设计 1总体结构 本系统通过手机连接ESP32上的WiFi模组，实现对系统的配网和城市选择。通过请求网络API获取实时天气数据。通过NTP服务器连接到高精度的时间源，获取同步的精准的时间信息，并在LCD模块上显示。研究主要包括对电子元器件ESP32主控芯片的控制和开发、调试LCD模块的显示效果和交互、硬件电路设计、开发环境配置、软件程序编写、测试和评估系统的性能等方面。该系统具有简单易用、稳定可靠等特点，可以满足人们对智能家居和智能设备的需求。系统总体结构如图1所示 2系统硬件设计 本系统采用面包板作为设备搭建平台，直接将电子元器件引脚插入面包板插孔中，通过杜邦线将各个电子元器件链接，快速搭建和修改电子电路。省去焊接和拆焊的过程，不需要直接与高电压接触。电路采用跳线连接，可以减少因接触错误而导致的短路和电击的风险，更加快捷的进行系统的分析，原型设计和实验。系统中LCD屏幕与ESP32主板引脚连接如表1所示","head":[["meta",{"property":"og:url","content":"https://boxsir.gitee.io/item/IoT/ESP32/weatherClock.html"}],["meta",{"property":"og:site_name","content":"盒子小屋"}],["meta",{"property":"og:title","content":"WiFi天气时钟系统设计"}],["meta",{"property":"og:description","content":"WiFi天气时钟系统设计 1总体结构 本系统通过手机连接ESP32上的WiFi模组，实现对系统的配网和城市选择。通过请求网络API获取实时天气数据。通过NTP服务器连接到高精度的时间源，获取同步的精准的时间信息，并在LCD模块上显示。研究主要包括对电子元器件ESP32主控芯片的控制和开发、调试LCD模块的显示效果和交互、硬件电路设计、开发环境配置、软件程序编写、测试和评估系统的性能等方面。该系统具有简单易用、稳定可靠等特点，可以满足人们对智能家居和智能设备的需求。系统总体结构如图1所示 2系统硬件设计 本系统采用面包板作为设备搭建平台，直接将电子元器件引脚插入面包板插孔中，通过杜邦线将各个电子元器件链接，快速搭建和修改电子电路。省去焊接和拆焊的过程，不需要直接与高电压接触。电路采用跳线连接，可以减少因接触错误而导致的短路和电击的风险，更加快捷的进行系统的分析，原型设计和实验。系统中LCD屏幕与ESP32主板引脚连接如表1所示"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"盒子先生"}],["meta",{"property":"article:tag","content":"ESP32"}],["meta",{"property":"article:published_time","content":"2023-09-23T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"WiFi天气时钟系统设计\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-09-23T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"盒子先生\\",\\"url\\":\\"https://boxsir.gitee.io\\"}]}"]]},"headers":[{"level":2,"title":"1总体结构","slug":"_1总体结构","link":"#_1总体结构","children":[]},{"level":2,"title":"2系统硬件设计","slug":"_2系统硬件设计","link":"#_2系统硬件设计","children":[{"level":3,"title":"2.1 ESP32芯片","slug":"_2-1-esp32芯片","link":"#_2-1-esp32芯片","children":[]},{"level":3,"title":"2.2 LCD液晶屏","slug":"_2-2-lcd液晶屏","link":"#_2-2-lcd液晶屏","children":[]},{"level":3,"title":"2.3 轻触立式按键","slug":"_2-3-轻触立式按键","link":"#_2-3-轻触立式按键","children":[]}]},{"level":2,"title":"3系统软件设计","slug":"_3系统软件设计","link":"#_3系统软件设计","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":6.35,"words":1905},"filePathRelative":"item/IoT/ESP32/weatherClock.md","localizedDate":"2023年9月23日","excerpt":"<h1> WiFi天气时钟系统设计</h1>\\n<h2> 1总体结构</h2>\\n<p>本系统通过手机连接ESP32上的WiFi模组，实现对系统的配网和城市选择。通过请求网络API获取实时天气数据。通过NTP服务器连接到高精度的时间源，获取同步的精准的时间信息，并在LCD模块上显示。研究主要包括对电子元器件ESP32主控芯片的控制和开发、调试LCD模块的显示效果和交互、硬件电路设计、开发环境配置、软件程序编写、测试和评估系统的性能等方面。该系统具有简单易用、稳定可靠等特点，可以满足人们对智能家居和智能设备的需求。系统总体结构如图1所示</p>\\n<h2> 2系统硬件设计</h2>\\n<p>本系统采用面包板作为设备搭建平台，直接将电子元器件引脚插入面包板插孔中，通过杜邦线将各个电子元器件链接，快速搭建和修改电子电路。省去焊接和拆焊的过程，不需要直接与高电压接触。电路采用跳线连接，可以减少因接触错误而导致的短路和电击的风险，更加快捷的进行系统的分析，原型设计和实验。系统中LCD屏幕与ESP32主板引脚连接如表1所示</p>","autoDesc":true}');export{e as data};
