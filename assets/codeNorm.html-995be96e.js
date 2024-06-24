import{_ as t,r as b,o as i,c as n,d as r,e,b as p,a as o,f as s}from"./app-fced2a8f.js";const c={},d={class:"hint-container info"},l=r("p",{class:"hint-container-title"},"相关信息",-1),h={href:"https://blog.csdn.net/weixin_53244569/article/details/122087653",target:"_blank",rel:"noopener noreferrer"},u=s('<h2 id="命名风格" tabindex="-1"><a class="header-anchor" href="#命名风格" aria-hidden="true">#</a> 命名风格</h2><p>代码命名不能以下划线或者$开头或者结尾</p><p>代码命名不能以中文拼音或者中文拼音与英文混合方式</p><p>类名使用UpperCamCamelCase风格，但DO、PO、DTO、VO、BO等除外</p><p>方法名、参数名、变量名统一使用lowerCamelCase，必须遵守驼峰命名</p><p>常量名全部大写，单词间用下划线隔开</p><p>抽象类必须以Abstract或者Base开头，异常类必须以Exception结尾，测试 类以测试的类的名称开头Test结尾</p><p>类型与中括号紧挨相连标示数组</p><p>POJO类中布尔类型变量不要加is前缀</p><p>包名统一小写，点分隔符有且有一个自然语义单词</p><p>避免在父子类和不同代码块中采用相同变量名</p><p>避免不规范的缩写命名</p><p>在对元素命名时用完整单词组合表达其意</p><p>常量和变量命名时，表示类型放在词尾，如：idList、TERMINATED_TREAD_COUNT</p><p>接口、类、方法、模块使用设计模式，命名时要体现具体模式</p><p>接口类中的方法和属性不要加任何修饰符，并加上有效的javadoc。</p><p>接口和实现类的命名规则：</p><p>对于service和dao类，实现类必须用Impl结尾；<br> 如果是形容能力的接口名称，取对应的形容词为接口名 AbstractTranslator实现 Translatable接口<br> 枚举类名加Enum后缀，枚举成员名称全大写，单词间用下划线隔开</p><p>各层命名规范：<br> A) Service/DAO层命名规约<br> 1.获取单个对象的方法用get做前缀<br> 2.获取多个对象的方法用list做前缀，如：listObjects<br> 3.获取统计值的方法用count做前缀<br> 4.插入方法用save/insert做前缀<br> 5.删除方法用delete/remove做前缀<br> 6.修改方法用update做前缀<br> B）领域模型命名规范<br> 1.数据对象：xxxDO, xxx为数据库表名<br> 2.数据传输对象：xxxDTO,xxx为业务模型相关名称<br> 3.展示对象：xxxVO，xxx一般为网页名称<br> 4.POJO是对DO、DTO、VO、BO的统称，禁止xxxPOJO</p><h2 id="常量定义" tabindex="-1"><a class="header-anchor" href="#常量定义" aria-hidden="true">#</a> 常量定义</h2><ol><li>代码中禁止出现魔法值</li><li>在Long类型中赋值，数值后使用大写L</li><li>不要在一个常量类中维护所有常量，要根据功能分开维护<br> 1<br> 2<br> 3<br> 常量的复用层次：<br> 1.跨应用：放在二方库中，通常在constant目录下<br> 2.应用内：放在一方库中，通常在constant目录下<br> 3.子工程内：放在当前子工程constant目录下<br> 4.包内共享常量：当前包下单独的constant目录下<br> 5.类内共享常量：直接在类内部private static final定义<br> 如果变量值只在固定的范围内变化，用enum类型定义</li></ol><h2 id="代码规范" tabindex="-1"><a class="header-anchor" href="#代码规范" aria-hidden="true">#</a> 代码规范</h2><p>如果大括号代码为空直接’{}’,大括号内有代码则：左大括号左侧不换行，右侧换行；右大括号右侧换行，左侧如果不跟else等代码换行，否则不换行<br> 小括号和字符之间不能有空格，括号内字符和运算符之间有空格 如：if (a == b)<br> if、for、while、do、switch与括号之间必须有空格<br> 任何二目、三目运算符前后必须有空格<br> 采用4个空格，禁止使用tab<br> 注释的双斜线和内容要有空格<br> 强制类型转换时，右括号与强制转换值之间不用空格<br> 单行字符不超过120个，超过要换行<br> 方法在定义和传参时，必须要加空格<br> IDE的text file encoding 设置为UTF-8；IDE中 文件的换行符使用Unix格式<br> 单个方法尽量不超过80行<br> 不同逻辑、不同语义、不同业务之间的代码插入一个空行分隔符</p><h2 id="oop规范" tabindex="-1"><a class="header-anchor" href="#oop规范" aria-hidden="true">#</a> OOP规范</h2><p>不用一个类型的对象引用来访问静态方法和静态属性，直接类名访问即可</p><p>所有覆写方法，必须加@Override注解</p><p>相同业务含义，相同参数类型才能使用java可变参数</p><p>外部依赖或者二方库依赖的接口，不能修改方法签名。接口过时必须用@Deprecated 注解，并说明新接口或者新服务是什么</p><p>不能使用过时的类或者方法</p><p>Object的equals方法容易抛出空指针，应使用常量或者确定值的对象来调用equals</p><p>所有整型包装类之间的值比较都用equals 方法比较</p><p>浮点数之间的等值判断，基本类型不能用==，包装类不能用equals。</p><p>解决方案：(1) 指定一个误差范围，两个浮点数的差值在此范围之内，则认为是相等的。</p><p>​ (2) 使用BigDecimal来定义值，再进行浮点数的运算操作。</p><p>定义DO类时，属性类型要数据库字段类型相匹配</p><p>防止精度丢失，禁止使用BigDecimal(double)方式将double对象转换成BigDecimal。建议使用BigDecimal的valueOf方法</p><p>基本类型和包装类型的使用标准</p><p>所有POJO的属性必须用包装类型<br> RPC方法的参数和返回值必须使用包装类型<br> 所有局部变量使用基本变量<br> 所有POJO 不要对其属性设置默认值</p><p>序列化类新增时不要修改其serialVersionUID字段</p><p>构造方法里禁止加任何业务处理逻辑，有要加在init()</p><p>POJO类必须要写toString方法</p><p>禁止在POJO类中对属性xxx 同时存在isXxx()和getXxx()</p><p>使用索引访问用String的split方法得到数组时，需要对最后一个分隔符有无内容做检查</p><p>一个类有多个构造方法或者多个同名方法，要按照顺序来。</p><p>类中的方法顺序 ：共有方法-&gt; 私有方法 -&gt; get/set</p><p>setter方法中参数名称和成员变量名称一致，不要在getter和setter方法中加业务逻辑</p><p>循环体内用StringBuilder的append方法进行扩展</p><p>final可以修饰类，方法，变量。</p><p>慎用Object的clone方法</p><p>类成员与方法访问控制从严</p><p>​ 1） 如果不允许外部直接通过new来创建对象，那么构造方法必须是private。</p><p>​ 2） 工具类不允许有public或default构造方法。</p><p>​ 3） 类非static成员变量并且与子类共享，必须是protected。</p><p>​ 4） 类非static成员变量并且仅在本类使用，必须是private。</p><p>​ 5） 类static成员变量如果仅在本类使用，必须是private。</p><p>​ 6） 若是static成员变量，考虑是否为final。</p><p>​ 7） 类成员方法只供类内部调用，必须是private。</p><p>​ 8） 类成员方法只对继承类公开，那么限制为protected。</p><h2 id="集合处理" tabindex="-1"><a class="header-anchor" href="#集合处理" aria-hidden="true">#</a> 集合处理</h2><p>hashCode和equals 的处理遵循以下规则：<br> 1）只要覆写equals ，就必须要覆写hashCode<br> 2）因为Set存储的是不重复的对象，依据hashCode和equals进行判断，所以Set存储的对象必须覆写这两个方法。<br> 3）如果自定义对象作为Map的键，那么必须覆写hashCode和equals。<br> ArrayList的subList结果不能强转ArrayList。<br> 使用map的keySet()、values()、entrySet()方法返回对象后不可以对其进行添加元素的操作<br> Collections类返回的对象，如：emptyList()/singletonList()等都是immutablelist不可对其进行添加或者删除元素的操作<br> 在subList场景中，高度注意对原集合元素的增加或删除，均会导致子列表的遍历、增加、删除产生ConcurrentModificationException 异常<br> 使用集合转数组的方法，必须使用集合的toArray(T[] array)，传入的是类型完全一致、长度为0的空数组<br> 在使用Collection接口任何实现类的addAll()方法时，一定要对输入的集合做NEP判断<br> 使用工具类Arrays.asList()把数组转换成集合时，不能使用其修改集合相关的方法，它的add/remove/clear方法会抛出UnsupportedOperationException异常<br> 说明：asList的返回对象是一个Arrays内部类，并没有实现集合的修改方法。Arrays.asList体现的是适配器模式，只是转换接口，后台的数据仍是数组。<br> 泛型通配符&lt;? extends T&gt;来接收返回的数据，此写法的泛型集合不能使用add方法，而&lt;? super T&gt;不能使用get方法，作为接口调用赋值时易出错<br> 在无泛型限制定义的集合赋值给泛型限制的集合时，在使用集合元素时，需要进行instanceof判断，避免抛出ClassCastException异常<br> 不要在foreach循环里进行元素的remove/add操作。remove元素请使用Iterator方式，如果并发操作，需要对Iterator对象加锁<br> 在JDK7 版本及以上，Comparator 实现类要满足如下三个条件，不然Arrays.sort，Collections.sort 会抛IllegalArgumentException 异常。<br> 说明：三个条件如下<br> 1） x，y 的比较结果和y，x 的比较结果相反。<br> 2） x&gt;y，y&gt;z，则x&gt;z。<br> 3） x=y，则x，z 比较结果和y，z 比较结果相同。<br> 集合泛型定义时，在JDK7 及以上，使用diamond 语法或全省略。<br> 集合初始化时，指定集合初始值大小。<br> 使用entrySet 遍历Map 类集合KV，而不是keySet 方式进行遍历<br> 高度注意Map类集合K/V能不能存储null值的情况，如下表格：</p><p>合理利用好集合的有序性(sort)和稳定性(order)，避免集合的无序性(unsort)和不稳定性(unorder)带来的负面影响。<br> 利用Set元素唯一的特性，可以快速对一个集合进行去重操作，避免使用List的contains方法进行遍历、对比、去重操作</p><h2 id="并发处理" tabindex="-1"><a class="header-anchor" href="#并发处理" aria-hidden="true">#</a> 并发处理</h2><p>获取单例对象需要保证线程安全，其中的方法也要保证线程安全。<br> 创建线程或线程池时请指定有意义的线程名称，方便出错时回溯。<br> 线程资源必须通过线程池提供，不允许在应用中自行显式创建线程<br> 线程池不允许使用Executors去创建，而是通过ThreadPoolExecutor的方式，这样的处理方式让写的同学更加明确线程池的运行规则，规避资源耗尽的风险<br> SimpleDateFormat 是线程不安全的类，一般不要定义为static变量，如果定义为static，必须加锁，或者使用DateUtils工具类。<br> 必须回收自定义的ThreadLocal变量，尤其在线程池场景下，线程经常会被复用，如果不清理自定义的 ThreadLocal变量，可能会影响后续业务逻辑和造成内存泄露等问题。尽量在代理中使用try-finally块进行回收<br> 高并发时，同步调用应该去考量锁的性能损耗。能用无锁数据结构，就不要用锁；能锁区块，就不要锁整个方法体；能用对象锁，就不要用类锁<br> 对多个资源、数据库表、对象同时加锁时，需要保持一致的加锁顺序，否则可能会造成死锁。<br> 在使用阻塞等待获取锁的方式中，必须在try代码块之外，并且在加锁方法与try代码块之间没有任何可能抛出异常的方法调用，避免加锁成功后，在finally中无法解锁。<br> 在使用尝试机制来获取锁的方式中，进入业务代码块之前，必须先判断当前线程是否持有锁。锁的释放规则与锁的阻塞等待方式相同<br> 并发修改同一记录时，避免更新丢失，需要加锁。要么在应用层加锁，要么在缓存加锁，要么在数据库层使用乐观锁，使用version作为更新依据<br> 多线程并行处理定时任务时，Timer运行多个TimeTask时，只要其中之一没有捕获抛出的异常，其它任务便会自动终止运行，如果在处理定时任务时使用ScheduledExecutorService则没有这个问题<br> 资金相关的金融敏感信息，使用悲观锁策略<br> 使用CountDownLatch进行异步转同步操作，每个线程退出前必须调用countDown方法，线程执行代码注意catch异常，确保countDown方法被执行到，避免主线程无法执行至await方法，直到超时才返回结果<br> 避免Random实例被多线程使用，虽然共享该实例是线程安全的，但会因竞争同一seed 导致的性能下降<br> 在并发场景下，通过双重检查锁（double-checked locking）实现延迟初始化的优化问题隐患(可参考 The “Double-Checked Locking is Broken” Declaration)，推荐解决方案中较为简单一种（适用于JDK5及以上版本），将目标属性声明为 volatile型<br> volatile解决多线程内存不可见问题。对于一写多读，是可以解决变量同步问题，但是如果多写，同样无法解决线程安全问题。<br> HashMap在容量不够进行resize时由于高并发可能出现死链，导致CPU飙升，在开发过程中可以使用其它数据结构或加锁来规避此风险<br> ThreadLocal对象使用static修饰，ThreadLocal无法解决共享对象的更新问题</p><h2 id="控制语句" tabindex="-1"><a class="header-anchor" href="#控制语句" aria-hidden="true">#</a> 控制语句</h2><p>在一个switch块内，每个case要么通过continue/break/return等来终止，要么注释说明程序将继续执行到哪一个case为止；在一个switch块内，都必须包含一个default语句并且放在最后，即使它什么代码也没有<br> 当switch括号内的变量类型为String并且此变量为外部参数时，必须先进行null判断<br> 在if/else/for/while/do语句中必须使用大括号<br> 在高并发场景中，避免使用”等于”判断作为中断或退出的条件<br> 表达异常的分支时，少用if-else方式<br> 除常用方法（如getXxx/isXxx）等外，不要在条件判断中执行其它复杂的语句，将复杂逻辑判断的结果赋值给一个有意义的布尔变量名，以提高可读性<br> 不要在其它表达式（尤其是条件表达式）中，插入赋值语句<br> 循环体中的语句要考量性能，以下操作尽量移至循环体外处理，如定义对象、变量、获取数据库连接，进行不必要的try-catch操作（这个try-catch是否可以移至循环体外）。<br> 避免采用取反逻辑运算符<br> 接口入参保护，这种场景常见的是用作批量操作的接口<br> 下列情形，需要进行参数校验：<br> 1） 调用频次低的方法。<br> 2） 执行时间开销很大的方法。此情形中，参数校验时间几乎可以忽略不计，但如果因为参数错误导致 中间执行回退，或者错误，那得不偿失。<br> 3） 需要极高稳定性和可用性的方法。<br> 4） 对外提供的开放接口，不管是RPC/API/HTTP接口。<br> 5） 敏感权限入口。<br> 下列情形，不需要进行参数校验：<br> 1） 极有可能被循环调用的方法。但在方法说明里必须注明外部参数检查要求。<br> 2） 底层调用频度比较高的方法。毕竟是像纯净水过滤的最后一道，参数错误不太可能到底层才会暴露问题。一般DAO层与Service层都在同一个应用中，部署在同一台服务器中，所以DAO的参数校验，可以省略。<br> 3） 被声明成private只会被自己代码所调用的方法，如果能够确定调用方法的代码传入参数已经做过检查或者肯定不会有问题，此时可以不校验参数。</p><h2 id="注释规范" tabindex="-1"><a class="header-anchor" href="#注释规范" aria-hidden="true">#</a> 注释规范</h2><p>类、类属性、类方法的注释必须使用Javadoc规范，使用/<em>内容/格式，不得使用// xxx方式<br> 所有的抽象方法（包括接口中的方法）必须要用Javadoc注释、除了返回值、参数、异常说明外，还必须指出该方法做什么事情，实现什么功能<br> 所有的类都必须添加创建者和创建日期<br> 方法内部单行注释，在被注释语句上方另起一行，使用//注释。方法内部多行注释使用/</em> */注释，注意与代码对齐<br> 所有的枚举类型字段必须要有注释，说明每个数据项的用途<br> 与其“半吊子”英文来注释，不如用中文注释把问题说清楚。专有名词与关键字保持英文原文即可。<br> 代码修改的同时，注释也要进行相应的修改，尤其是参数、返回值、异常、核心逻辑等的修改<br> 谨慎注释掉代码。在上方详细说明，而不是简单地注释掉。如果无用，则删除。<br> 对于注释的要求：第一、能够准确反映设计思想和代码逻辑；第二、能够描述业务含义，使别的程序员能够迅速了解到代码背后的信息。完全没有注释的大段代码对于阅读者形同天书，注释是给自己看的，即使隔很长时间，也能清晰理解当时的思路；注释也是给继任者看的，使其能够快速接替自己的工作。<br> 好的命名、代码结构是自解释的，注释力求精简准确、表达到位。避免出现注释的一个极端：过多过滥的注释，代码的逻辑一旦修改，修改注释是相当大的负担<br> 特殊注释标记，请注明标记人与标记时间。注意及时处理这些标记，通过标记扫描，经常清理此类标记。线上故障有时候就是来源于这些标记处的代码</p><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><p>在使用正则表达式时，利用好其预编译功能，可以有效加快正则匹配速度<br> velocity调用POJO类的属性时，直接使用属性名取值即可，模板引擎会自动按规范调用POJO的getXxx()，如果是boolean基本数据类型变量（boolean命名不需要加is前缀），会自动调用isXxx()方法<br> 后台输送给页面的变量必须加$!{var}——中间的感叹号<br> 注意 Math.random() 这个方法返回是double类型，注意取值的范围 0≤x&lt;1（能够取到零值，注意除零异常），如果想获取整数类型的随机数，不要将x放大10的若干倍然后取整，直接使用Random对象的nextInt或者nextLong方法<br> 获取当前毫秒数System.currentTimeMillis(); 而不是new Date().getTime();<br> 日期格式化时，传入pattern中表示年份统一使用小写的y<br> 不要在视图模板中加入任何复杂的逻辑<br> 任何数据结构的构造或初始化，都应指定大小，避免数据结构无限增长吃光内存<br> 及时清理不再使用的代码段或配置信息</p><h2 id="异常日志" tabindex="-1"><a class="header-anchor" href="#异常日志" aria-hidden="true">#</a> 异常日志</h2><h3 id="异常处理" tabindex="-1"><a class="header-anchor" href="#异常处理" aria-hidden="true">#</a> 异常处理</h3><p>java类库中定义的可以通过预检查方式规避的RuntimeException异常不应该通过catch方式处理。如NullPointException、IndexOutOfBoundsException。<br> 异常不要用作流程控制、条件控制。<br> catch是要分清是稳定代码和非稳定代码，对于非稳定代码catch尽可能的按照异常类型分类。<br> 捕获异常一定要做处理，如果不想处理就抛给上层调用者。<br> 有try块放在事务中，catch异常后如果需要回滚事务，一定要注意手动回滚事务。<br> finally块中必须对资源对象、流对象进行关闭，有异常也要catch。<br> 不要在finally块中使用return<br> 捕获的异常要和抛的异常匹配或者捕获的异常是抛异常的父类<br> 在调用RPC、二方包、或动态生成类的相关方法时，捕获异常一定要用Throwable类拦截<br> 方法的返回值可以是null，但是必须要说明什么情况返回null<br> 防止NEP：<br> 返回类型是基本类型 ，return包装类型的对象。<br> 数据库查询的结果可能是null<br> 集合里的元素即时isNotEmpty，取出来的元素也可能是null<br> 远程调用返回对象时，必须要进行判空处理<br> 对于Session中的数据要进行判空处理<br> 级联调用有可能产生空指针<br> 定义时区分unchecked / checked 异常，避免直接抛出new RuntimeException()，更不允许抛出Exception或者Throwable，应使用有业务含义的自定义异常。推荐业界已定义过的自定义异常，如：DAOException / ServiceException等<br> 对于公司外的http/api开放接口必须使用“错误码”；而应用内部推荐异常抛出；跨应用间RPC调用优先考虑使用Result方式，封装isSuccess()方法、“错误码”、“错误简短信息”<br> 避免出现重复的代码（Don’t Repeat Yourself），即DRY原则</p><h3 id="日志规约" tabindex="-1"><a class="header-anchor" href="#日志规约" aria-hidden="true">#</a> 日志规约</h3><p>应用中不可直接使用日志系统（Log4j、Logback）中的API，而应依赖使用日志框架 SLF4J中的API，使用门面模式的日志框架，有利于维护和各个类的日志处理方式统一<br> 所有日志文件至少保存15天，因为有些异常具备以“周”为频次发生的特点。网络运行状态、安全相关信息、系统监测、管理后台操作、用户敏感操作需要留存相关的网络日志不少于6个月<br> 应用中的扩展日志（如打点、临时监控、访问日志等）命名方式：appName_logType_logName.log。logType:日志类型，如stats/monitor/access等；logName:日志描述。这种命名的好处：通过文件名就可知道日志文件属于什么应用，什么类型，什么目的，也有利于归类查找<br> 在日志输出时，字符串变量之间的拼接使用占位符的方式<br> 对于trace/debug/info级别的日志输出，必须进行日志级别的开关判断<br> 避免重复打印日志，浪费磁盘空间，务必在log4j.xml中设置additivity=false<br> 异常信息应该包括两类信息：案发现场信息和异常堆栈信息。如果不处理，那么通过关键字throws往上抛出<br> 谨慎地记录日志。生产环境禁止输出debug日志；有选择地输出info日志；如果使用warn来记录刚上线时的业务行为信息，一定要注意日志输出量的问题，避免把服务器磁盘撑爆，并记得及时删除这些观察日志<br> 可以使用warn日志级别来记录用户输入参数错误的情况，避免用户投诉时，无所适从。如非必要，请不要在此场景打出error级别，避免频繁报警<br> 尽量用英文来描述日志错误信息，如果日志中的错误信息用英文描述不清楚的话使用中文描述即可，否则容易产生歧义。【强制】国际化团队或海外部署的服务器由于字符集问题，使用全英文来注释和描述日志错误信息</p><h2 id="单元测试" tabindex="-1"><a class="header-anchor" href="#单元测试" aria-hidden="true">#</a> 单元测试</h2><p>好的单元测试必须遵守AIR原则<br> 单元测试应该是全自动执行的，并且非交互式的。测试用例通常是被定期执行的，执行过程必须完全自动化才有意义。输出结果需要人工检查的测试不是一个好的单元测试。单元测试中不准使用System.out来进行人肉验证，必须使用assert来验证<br> 保持单元测试的独立性。为了保证单元测试稳定可靠且便于维护，单元测试用例之间决不能互相调用，也不能依赖执行的先后次序<br> 单元测试是可以重复执行的，不能受到外界环境的影响<br> 对于单元测试，要保证测试粒度足够小，有助于精确定位问题。单测粒度至多是类级别，一般是方法级别<br> 核心业务、核心应用、核心模块的增量代码确保单元测试通过<br> 单元测试代码必须写在如下工程目录：src/test/java，不允许写在业务代码目录下<br> 单元测试的基本目标：语句覆盖率达到70%；核心模块的语句覆盖率和分支覆盖率都要达到100%<br> 编写单元测试代码遵守BCDE原则，以保证被测试模块的交付质量<br> 对于数据库相关的查询，更新，删除等操作，不能假设数据库里的数据是存在的，或者直接操作数据库把数据插入进去，请使用程序插入或者导入数据的方式来准备数据<br> 和数据库相关的单元测试，可以设定自动回滚机制，不给数据库造成脏数据。或者对单元测试产生的数据有明确的前后缀标识<br> 对于不可测的代码在适当的时机做必要的重构，使代码变得可测，避免为了达到测试要求而书写不规范测试代码<br> 在设计评审阶段，开发人员需要和测试人员一起确定单元测试范围，单元测试最好覆盖所有测试用例<br> 单元测试作为一种质量保障手段，在项目提测前完成单元测试，不建议项目发布后补充单元测试用例<br> 为了更方便地进行单元测试，业务代码应避免以下情况： 1.构造方法中做的事情过多。 2. 存在过多的全局变量和静态方法。 3. 存在过多的外部依赖。 4. 存在过多的条件语句<br> 那是测试同学干的事情。本文是开发手册，凡是本文内容都是与开发同学强相关的。 1. 单元测试代码是多余的。系统的整体功能与各单元部件的测试正常与否是强相关的。 2. 单元测试代码不需要维护。一年半载后，那么单元测试几乎处于废弃状态。 3. 单元测试与线上故障没有辩证关系。好的单元测试能够最大限度地规避线上故障</p><h2 id="安全规约" tabindex="-1"><a class="header-anchor" href="#安全规约" aria-hidden="true">#</a> 安全规约</h2><p>隶属于用户个人的页面或者功能必须进行权限控制校验<br> 用户敏感数据禁止直接展示，必须对展示数据进行脱敏<br> 用户输入的SQL参数严格使用参数绑定或者METADATA字段值限定，防止SQL注入，禁止字符串拼接SQL访问数据库<br> 用户请求传入的任何参数必须做有效性验证<br> 禁止向HTML页面输出未经安全过滤或未正确转义的用户数据<br> 表单、AJAX提交必须执行CSRF安全验证<br> 在使用平台资源，譬如短信、邮件、电话、下单、支付，必须实现正确的防重放的机制，如数量限制、疲劳度控制、验证码校验，避免被滥刷而导致资损<br> 发贴、评论、发送即时消息等用户生成内容的场景必须实现防刷、文本内容违禁词过滤等风控策略</p><h2 id="mysql数据库" tabindex="-1"><a class="header-anchor" href="#mysql数据库" aria-hidden="true">#</a> Mysql数据库</h2><h3 id="建表规约" tabindex="-1"><a class="header-anchor" href="#建表规约" aria-hidden="true">#</a> 建表规约</h3><p>表达是与否概念的字段，必须使用is_xxx的方式命名，数据类型是unsigned tinyint（1表示是，0表示否）<br> 表名、字段名必须使用小写字母或数字，禁止出现数字开头，禁止两个下划线中间只出现数字。数据库字段名的修改代价很大，因为无法进行预发布，所以字段名称需要慎重考虑<br> 表名不使用复数名词<br> 禁用保留字，如desc、range、match、delayed等，请参考MySQL官方保留字<br> 主键索引名为pk_字段名；唯一索引名为uk_字段名；普通索引名则为idx_字段名<br> 小数类型为decimal，禁止使用float和double<br> 如果存储的字符串长度几乎相等，使用char定长字符串类型<br> varchar是可变长字符串，不预先分配存储空间，长度不要超过5000，如果存储长度大于此值，定义字段类型为text，独立出来一张表，用主键来对应，避免影响其它字段索引效率<br> 表必备三字段：id, create_time, update_time<br> 表的命名最好是遵循“业务名称_表的作用”<br> 库名与应用名称尽量一致<br> 字段允许适当冗余，以提高查询性能，但必须考虑数据一致。冗余字段应遵循： 1） 不是频繁修改的字段。 2） 不是varchar超长字段，更不能是text字段。3） 不是唯一索引的字段。<br> 如果修改字段含义或对字段表示的状态追加时，需要及时更新字段注释<br> 单表行数超过500万行或者单表容量超过2GB，才推荐进行分库分表<br> 合适的字符存储长度，不但节约数据库表空间、节约索引存储，更重要的是提升检索速度</p><h2 id="索引规约" tabindex="-1"><a class="header-anchor" href="#索引规约" aria-hidden="true">#</a> 索引规约</h2><p>业务上具有唯一特性的字段，即使是多个字段的组合，也必须建成唯一索引<br> 超过三个表禁止join。需要join的字段，数据类型必须绝对一致；多表关联查询时，保证被关联的字段需要有索引<br> 在varchar字段上建立索引时，必须指定索引长度，没必要对全字段建立索引，根据实际文本区分度决定索引长度即可<br> 页面搜索严禁左模糊或者全模糊，如果需要请走搜索引擎来解决<br> 如果有order by的场景，请注意利用索引的有序性。order by 最后的字段是组合索引的一部分，并且放在索引组合顺序的最后，避免出现file_sort的情况，影响查询性能<br> 利用覆盖索引来进行查询操作，避免回表<br> 利用延迟关联或者子查询优化超多分页场景<br> SQL性能优化的目标：至少要达到 range 级别，要求是ref级别，如果可以是consts最好<br> 建组合索引的时候，区分度最高的在最左边<br> 防止因字段类型不同造成的隐式转换，导致索引失效<br> 创建索引时避免有如下极端误解： 1） 宁滥勿缺。认为一个查询就需要建一个索引。 2） 宁缺勿滥。认为索引会消耗空间、严重拖慢记录的更新以及行的新增速度。 3） 抵制惟一索引。认为业务的惟一性一律需要在应用层通过“先查后插”方式解决。</p><h2 id="sql语句" tabindex="-1"><a class="header-anchor" href="#sql语句" aria-hidden="true">#</a> SQL语句</h2><p>不要使用count(列名)或count(常量)来替代count()，count()是SQL92定义的标准统计行数的语法，跟数据库无关，跟NULL和非NULL无关<br> count(distinct col) 计算该列除NULL之外的不重复行数，注意 count(distinct col1, col2) 如果其中一列全为NULL，那么即使另一列有不同的值，也返回为0<br> 当某一列的值全是NULL时，count(col)的返回结果为0，但sum(col)的返回结果为NULL，因此使用sum()时需注意NPE问题<br> 使用ISNULL()来判断是否为NULL值<br> 代码中写分页查询逻辑时，若count为0应直接返回，避免执行后面的分页语句<br> 不得使用外键与级联，一切外键概念必须在应用层解决<br> 禁止使用存储过程，存储过程难以调试和扩展，更没有移植性<br> 数据订正（特别是删除、修改记录操作）时，要先select，避免出现误删除，确认无误才能执行更新语句<br> in操作能避免则避免，若实在避免不了，需要仔细评估in后边的集合元素数量，控制在1000个之内<br> 如果有国际化需要，所有的字符存储与表示，均以utf-8编码，注意字符统计函数的区别<br> TRUNCATE TABLE 比 DELETE 速度快，且使用的系统和事务日志资源少，但TRUNCATE无事务且不触发trigger，有可能造成事故，故不建议在开发代码中使用此语句</p><h2 id="orm映射" tabindex="-1"><a class="header-anchor" href="#orm映射" aria-hidden="true">#</a> ORM映射</h2><p>在表查询中，一律不要使用 * 作为查询的字段列表，需要哪些字段必须明确写明<br> POJO类的布尔属性不能加is，而数据库字段必须加is_，要求在resultMap中进行字段与属性之间的映射<br> 不要用resultClass当返回参数，即使所有类属性名与数据库字段一一对应，也需要定义；反过来，每一个表也必然有一个POJO类与之对应<br> sql.xml配置参数使用：#{}，#param# 不要使用${} 此种方式容易出现SQL注入<br> iBATIS自带的queryForList(String statementName,int start,int size)不推荐使用<br> 不允许直接拿HashMap与Hashtable作为查询结果集的输出<br> 更新数据表记录时，必须同时更新记录对应的gmt_modified字段值为当前时间<br> 不要写一个大而全的数据更新接口。传入为POJO类，不管是不是自己的目标更新字段，都进行update table set c1=value1,c2=value2,c3=value3; 这是不对的。执行SQL时，不要更新无改动的字段，一是易出错；二是效率低；三是增加binlog存储<br> @Transactional事务不要滥用。事务会影响数据库的QPS，另外使用事务的地方需要考虑各方面的回滚方案，包括缓存回滚、搜索引擎回滚、消息补偿、统计修正等<br> 中的compareValue是与属性值对比的常量，一般是数字，表示相等时带上此条件；表示不为空且不为null时执行；表示不为null值时执行</p><h2 id="工程结构" tabindex="-1"><a class="header-anchor" href="#工程结构" aria-hidden="true">#</a> 工程结构</h2><h3 id="应用分层" tabindex="-1"><a class="header-anchor" href="#应用分层" aria-hidden="true">#</a> 应用分层</h3><p>图中默认上层依赖于下层，箭头关系表示可直接依赖，如：开放接口层可以依赖于Web层，也可以直接依赖于Service层，依此类推</p><p>• 开放接口层：可直接封装Service方法暴露成RPC接口；通过Web封装成http接口；进行网关安全控制、流量控制等。<br> • 终端显示层：各个端的模板渲染并执行显示的层。当前主要是velocity渲染，JS渲染，JSP渲染，移动端展示等。<br> • Web层：主要是对访问控制进行转发，各类基本参数校验，或者不复用的业务简单处理等。<br> • Service层：相对具体的业务逻辑服务层。<br> • Manager层：通用业务处理层，它有如下特征： 1） 对第三方平台封装的层，预处理返回结果及转化异常信息。 2） 对Service层通用能力的下沉，如缓存方案、中间件通用处理。 3） 与DAO层交互，对多个DAO的组合复用。<br> • DAO层：数据访问层，与底层MySQL、Oracle、Hbase等进行数据交互。<br> • 外部接口或第三方平台：包括其它部门RPC开放接口，基础平台，其它公司的HTTP接口。</p><p>2.（分层异常处理规约）在DAO层，产生的异常类型有很多，无法用细粒度的异常进行catch，使用catch(Exception e)方式，并throw new DAOException(e)，不需要打印日志，因为日志在Manager/Service层一定需要捕获并打印到日志文件中去，如果同台服务器再打日志，浪费性能和存储。在Service层出现异常时，必须记录出错日志到磁盘，尽可能带上参数信息，相当于保护案发现场。如果Manager层与Service同机部署，日志方式与DAO层处理一致，如果是单独部署，则采用与Service一致的处理方式。Web层绝不应该继续往上抛异常，因为已经处于顶层，如果意识到这个异常将导致页面无法正常渲染，那么就应该直接跳转到友好错误页面，加上用户容易理解的错误提示信息。开放接口层要将异常处理成错误码和错误信息方式返回。</p><p>• DO（Data Object）：此对象与数据库表结构一一对应，通过DAO层向上传输数据源对象。<br> • DTO（Data Transfer Object）：数据传输对象，Service或Manager向外传输的对象。<br> • BO（Business Object）：业务对象，由Service层输出的封装业务逻辑的对象。<br> • AO（Application Object）：应用对象，在Web层与Service层之间抽象的复用对象模型，极为贴近展示层，复用度不高。<br> • VO（View Object）：显示层对象，通常是Web向模板渲染引擎层传输的对象。<br> • Query：数据查询对象，各层接收上层的查询请求。注意超过2个参数的查询封装，禁止使用Map类来传输。</p><h2 id="二方库依赖" tabindex="-1"><a class="header-anchor" href="#二方库依赖" aria-hidden="true">#</a> 二方库依赖</h2><p>定义GAV遵从以下规则：<br> 1） GroupID格式：com.{公司/BU }.业务线 [.子业务线]，最多4级。 说明：{公司/BU} 例如：alibaba/taobao/tmall/aliexpress等BU一级；子业务线可选。 正例：com.taobao.jstorm 或 com.alibaba.dubbo.register</p><p>2） ArtifactID格式：产品线名-模块名。语义不重复不遗漏，先到中央仓库去查证一下。 正例：dubbo-client / fastjson-api / jstorm-tool</p><p>3） Version：详细规定参考下方</p><p>二方库版本号命名方式：主版本号.次版本号.修订号<br> 1）主版本号：产品方向改变，或者大规模API不兼容，或者架构不兼容升级。</p><p>2） 次版本号：保持相对兼容性，增加主要功能特性，影响范围极小的API不兼容修改。</p><p>3） 修订号：保持完全兼容性，修复BUG、新增次要功能特性等。</p><p>线上应用不要依赖SNAPSHOT版本（安全包除外）</p><p>二方库的新增或升级，保持除功能点之外的其它jar包仲裁结果不变。如果有改变，必须明确评估和验证</p><p>二方库里可以定义枚举类型，参数可以使用枚举类型，但是接口返回值不允许使用枚举类型或者包含枚举类型的POJO对象</p><p>依赖于一个二方库群时，必须定义一个统一的版本变量，避免版本号不一致</p><p>禁止在子项目的pom依赖中出现相同的GroupId，相同的ArtifactId，但是不同的Version</p><p>底层基础技术框架、核心数据管理平台、或近硬件端系统谨慎引入第三方实现</p><p>所有pom文件中的依赖声明放在语句块中，所有版本仲裁放在语句块中</p><p>二方库不要有配置项，最低限度不要再增加配置项</p><p>为避免应用二方库的依赖冲突问题，二方库发布者应当遵循以下原则：</p><p>1）精简可控原则。移除一切不必要的API和依赖，只包含 Service API、必要的领域模型对象、Utils类、常量、枚举等。如果依赖其它二方库，尽量是provided引入，让二方库使用者去依赖具体版本号；无log具体实现，只依赖日志框架。</p><p>2）稳定可追溯原则。每个版本的变化应该被记录，二方库由谁维护，源码在哪里，都需要能方便查到。除非用户主动升级版本，否则公共二方库的行为不应该发生变化。</p><p>服务器<br> 高并发服务器建议调小TCP协议的time_wait超时时间<br> 调大服务器所支持的最大文件句柄数（File Descriptor，简写为fd）<br> 给JVM环境参数设置-XX:+HeapDumpOnOutOfMemoryError参数，让JVM碰到OOM场景时输出dump信息<br> 在线上生产环境，JVM的Xms和Xmx设置一样大小的内存容量，避免在GC 后调整堆大小带来的压力<br> 服务器内部重定向使用forward；外部重定向地址使用URL拼装工具类来生成，否则会带来URL维护不一致的问题和潜在的安全风险</p><h2 id="设计规约" tabindex="-1"><a class="header-anchor" href="#设计规约" aria-hidden="true">#</a> 设计规约</h2><p>存储方案和底层数据结构的设计获得评审一致通过，并沉淀成为文档<br> 在需求分析阶段，如果与系统交互的User超过一类并且相关的User Case超过5个，使用用例图来表达更加清晰的结构化需求<br> 如果某个业务对象的状态超过3个，使用状态图来表达并且明确状态变化的各个触发条件<br> 如果系统中某个功能的调用链路上的涉及对象超过3个，使用时序图来表达并且明确各调用环节的输入与输出<br> 如果系统中模型类超过5个，并且存在复杂的依赖关系，使用类图来表达并且明确类之间的关系<br> 如果系统中超过2个对象之间存在协作关系，并且需要表示复杂的处理流程，使用活动图来表示<br> 需求分析与系统设计在考虑主干功能的同时，需要充分评估异常流程与业务边界<br> 类在设计与实现时要符合单一原则<br> 谨慎使用继承的方式来进行扩展，优先使用聚合/组合的方式来实现<br> 系统设计时，根据依赖倒置原则，尽量依赖抽象类与接口，有利于扩展与维护<br> 系统设计时，注意对扩展开放，对修改闭合<br> 系统设计阶段，共性业务或公共行为抽取出来公共模块、公共配置、公共类、公共方法等，避免出现重复代码或重复配置的情况<br> 避免如下误解：敏捷开发 = 讲故事 + 编码 + 发布<br> 系统设计主要目的是明确需求、理顺逻辑、后期维护，次要目的用于指导编码<br> 设计的本质就是识别和表达系统难点，找到系统的变化点，并隔离变化点<br> 系统架构设计的目的：<br> 1.确定系统边界。确定系统在技术层面上的做与不做。<br> 2.确定系统内模块之间的关系。确定模块之间的依赖关系及模块的宏观输入与输出。<br> 3.确定指导后续设计与演化的原则。使后续的子系统或模块设计在规定的框架内继续演化。<br> 4.确定非功能性需求。非功能性需求是指安全性、可用性、可扩展性等<br> 在做无障碍产品设计时，需要考虑到：<br> 所有可交互的控件元素必须能被tab键聚焦，并且焦点顺序需符合自然操作逻辑。<br> 2.用于登陆校验和请求拦截的验证码均需提供图形验证以外的其它方式。<br> 3.自定义的控件类型需明确交互方式。</p>',114);function x(m,O){const a=b("ExternalLinkIcon");return i(),n("div",null,[r("div",d,[l,r("p",null,[e("转自CSDN博主"),r("a",h,[e("「望山」"),p(a)])])]),o(" more "),u])}const g=t(c,[["render",x],["__file","codeNorm.html.vue"]]);export{g as default};
