﻿
/*************************
* 电子杂志2015年更新日志记录 
**************************
* v804  2015.6.13 视频接口修正
* v803  2015.6.3 修正事件变量写错
* v802   2015.6.2  修正canvas错误
* v801   2015.5.30 修正妙妙学的视频尺寸错误，ios上参数取值问题
* v800   一个变量引起的错误
* v798   2015.5.27 修正一些错误
* v797   修正canvvas类型判断错误，保证ppt的判断最后
* v796   2015.5.26 增加eslint修正错误，修复canvas精灵点击事件
* v795   2015.5.25 修正pixi与ppt动画，去掉pptcavvas，分离domppt文件
* v784   修正普通精灵动画不能运行，由于canvas类型判断引起
* v793   可以正常运行动画，修正精灵动画
* v792   2015.5.24 pixi动画正常运行
* v791   2015.5.23 增加pixi
* v790   ...
* v789   2015.5.20 win打包默认ascii ，mac为utf-8，默认全改utf-8
* v788   2015.5.18 修正文本框
* v787   2016.5.18 修增目录导航错误，epub错误
* 
* v782   2016.4.20 修正injectScript ppt中eval=fuction
* v782   2016.5.15 增加压缩css的测试
* v783   2016.5.16 基于es6的全新代码
* v784   daiceshi
* v785   修正妙妙学手机版地址
* v786   2016.5.28 mac编码客户端有问题，换win打包

* 
* * 2013.7.6
* *      处理ifarme嵌套调用
* *      增加2个全局的常量
* *      GLOBALIFRAME   true/false 是否嵌套
* *      GLOBALCONTEXT  top/window 兼容上下文处理
* *
* * 2013.8.22 重构模块管理器
* *      性能优化
* *
* * APP        应用入手文件,等待页面加载完毕后才执行
* * Config     配置文件
* * Initialize 初始化页面
* * ScriptLoad 脚本加载模块
* * 
* * 对应更新版本号：
* *  v507: 2014.2.24  增加工具栏复选框 , 规范跳转接口传递数据，  seasonId-chapterId
* *  v508: 2014.2.25  更新工具栏规则，复选规则，增加5种跳转类型的接口数据处理
* *                   Action:{"novelID":1,"seasonID":3,"chapterID":9}
* *                   Activity 表中itemArray中的跳转呢  还是seasonId
* *  v516  2014.9.28  content多音轨,不能打断问题修正
*    v530  2014.3.5   翻页Xut.View.MovePage接口越界修正，动画音频管理修正，翻页按钮工具栏修正
*    v540  2014.3.10  修正跳页面比白板的问题，增加widget,页面零件接口
*    v541  2014.3.12  重要性能优化,数据查找,去掉缓存机制
*    v542             重要修复,视觉差与页面创建不同步问题
*    v542             按钮层级问题修正
*    v543   2014.3.14 修正动画文本框音频,增加屏幕自适应，修正文本框滑动带动页面
*    v544   2014.3.18 修正自动任务延时500毫秒，出现的溢出问题
*    v544.  2014.3.18 修复精灵动画翻页没有停止的问题，增加辅助对象接口
*    v545   2014.3.20 增加java多语言功能,修正预先出现动画显示与隐藏
*    v545   2014.3.25 预文本动作修复,合并显示隐藏条
*    v546   2014.3.26 修正场景回调,增加多事件处理
*    v547   2014.3.37 代码优化
*    v548   2014.3.28 增加酷读返回按钮
*    v549   2014.3.29 重置大量接口,修复音频管理
*    v550   2014.3.31 修正4.4安卓数据库错误
*    v551   2014.4.2  重构代码结构
*    v552   2014.4.4  重构代码，修复动画内存，还有音频问题待解决
*    v553   2014.4.8  音频修正，增加音轨实例
*    v554   2014.4.9  修正跳转页面BUG _hammerEvent事件销毁
*    v555   2014.4.10 修正hammer实例引用内存问题，增加svgwidget接口文件
*    v556   2014.4.11 优化数据库读  取
*    v557   2014.4.12 统一def结构，修正多线程
*    v558   2014.4.14 修复557数据查询BUG
*    v559   2014.4.16 细化管理控制，修正滑动BUG
*    v560   2014.4.17 自动动作10秒修正BUG 修复
*    v561   2014.4.18 读酷加载自动音频BUG,增加新的定义
*    v562   2014.4.18 修正多事件行为.
*    v563   2014.4.19 修正读酷视频不能加载问题
*    v564   2014.4.19 修正动画音频删除BUG，导致溢出
*    v565   2014.4.21 细化3D平移效果，抽象视觉page的处理接口
*    v566   2014.4.23 图片删除内存优化，读库上关闭杂志场景销毁内存优化
*    v567   2014.4.25 增加novel precode 预处理, 增加内部事件$watch处理,修复动画接口调用
*    v568   2014.4.26 修正注入动画的content脚本 调用错误的问题 ,修正pagebase事件收集器，修正$watch引起的流程问题
*    v569   2014.4.28 修正视觉差判断BUG,增加新的精灵动画机制,css3关键帧
*    v570   2014.4.28 升级iscroll4 为5.1.1,调整content与toolbar中包含iscroll部分
*    v571   2014.4.29 处理母版数据空的情况下，引起的死循环
*    v572   2014.4.30 维持PC上的横竖模式切换
*    v573   2014.5.4  修正下一页的内容会出现一部分在上一页
*    v574   2014.5.6  升级hammer.js 修正同时触发多个事件的问题
*    v575   2014.5.6  iscroll 目标滑块必须是一个整体，故当以文本碎片填充时需加一层div包住
*    v576   2014.5.7  增加ios收费模式,增加swipe的灵敏度, 修正零件的所有前缀GetPagePrefix，非线性页码索引从0开始，但是页面前缀是按chpaterId排列
*    v577   2014.5.7  修正播放视频时暂停所有的音频
*    v578   2014.5.9  修正打开wiget时没有关闭视频
*    v579   2014.5.10  android上杂志在读库中播放时如果杂志没加载完就点击back键会因此卡主，修改为在杂志加载完再注册back事件
*    v580   2014.5.12 优化data数据,增加deferred结构，处理音频的优化问题
*    v581   2014.5.13 应用收费设置，修正读酷中的杂志第一页无法退出,swipe换成EventDrive
*    v582   2014.5.16 代码优化 只保留一个场景类去掉主场景（大改造）,
*                     视觉差异步创建失败修正，
*                     翻页事件默认行为修正
*    v583   2014.5.17 增加购买失败提示，忙碌光标添加提示文字,改为非模式框。
*    v584   2014.5.19 修正非正常退出购买产生的错误。
*                     修正解锁中，显示隐藏的可设
*    v585   2014.5.20 修正关闭场景按钮重复点击问题
*    v586   2014.5.21 重写场景的顺序编号,用于记录最后一次跳转的问题
*    v587   2014.5.22 兼容空content行为处理 isRreRun
*    v588   2014.5.23 showNote提示框修正
*    v589   2014.5.27 添加消息接受 供读库平台主动关闭杂志
*    v590   2014.5.29 增加动态创建功能，优化结构, 兼容content数据库为空处
*    v591   2014.6.3  修正PC svg数据读取失败的问题,增加左右键盘控制翻页
*    v592   2014.6.4  修正快速翻页卡死BUG
*    v593   2014.6.5  VideoActivityIds合并音频数据查找
*    v594   2014.6.6  禁止文字、图片等元素被鼠标拖拽选择 ,增加已收费接口
*    v595   2014.6.14 增强母版对象，数据处理,修正翻页按钮的显示隐藏
*    v596   2014.6.16 场景内页面切换,带有卷滚条闪屏问题修正,修正动画音频数据查找错误,修正兼容动画事件,增加IOS推广插件
*    v597   2014.6.17 修正安卓上场景内跳转白板
*    v598   2014.6.18 修正场景模式翻页按钮不自动隐藏
*    v599   2014.6.19 支持文档模式，翻页，直接跳转，修正场景模式翻页按钮不隐藏
*    v600   2014.6.20 修复安卓上精灵动画不运行,合并零件处理类
*    v601   2014.6.23 修改表查询
*    v602   2014.6.23 开启读库下杂志的预加载视频
*    v603   2014.6.24 移除读酷返回按钮
*    v604   2014.6.25 母版增强，代码优化，修正数据兼容错误
*    v605   2014.6.26 母版增强基本完善
*    v606   2014.6.27 母版增强优化
*    v607   2014.6.28 如果content是页面零件类型，创建伪数据
*    v608   2014.6.30 修正场景跳转没有销毁ifarme的bug，完善浮动对象滑动
*    v609   2014.7.1  如果有浮动对象，才计算偏移量，修正
*    v610   2014.7.2  transformOffset修正
*    v611   2014.7.3  增加读酷调用接口
*    v612   2014.7.4  IOS升级处理，重新拷贝数据，增加唯一UUID appid+生成时间用于升级不缓存数据
*    v613   2014.7.7  节点坐标转成整数
*    v614   2014.7.8  GetPageWidgetData数据查询修正，可能是钩子数据
*    v615   2014.7.11 611版本的错误，修正读酷调用接口报错
*    v616   2014.7.12 去掉614的蛋疼的iframestart空接口,导致与成功冲突，数据去重增加应用缓存池
*    v617   2014.7.16 修正content算法结构
*    v618   2014.7.17 修正视觉差引用拷贝问题,初始化位置不对,整理content数据结构
*    v619   2014.7.24 杂志在线版本支持.按钮的视觉反馈,修正部分结构，替换最新的事件库Hammer
*    v620   2014.7.28 给元素打上标记运行中，用来处理在运行中的错误交互
*    v621   2014.7.30 快速翻页修复,完成事件传参 EmitterProto.emit 参数丢失,取消触摸产生的背景
*    v622   2014.7.31 分离content scope构建文件,修正滚动文本框失效,修正互斥stopAnims接口
*    v623   2014.8.1  增加Xut.accessAssign 合并参数调用,合并AssignRecovery
*    v624   2014.8.4  合并母版与页面的接口调用 大改动
*    v625   2014.8.6  修正强制直接切换模式,合并母版接口处理
*    v626   2014.8.7  分离跳转逻辑,修正母版转化ID错误
*    v627   2014.8.8  修改互斥为display处理
*    v628   2014.8.12 母版对象接口的完善,母版跳转逻辑错误修正,修正动画抖动,增加苹果音频问题
*    v629   2014.8.13 增加母版过滤器类，CreateFilter，TransformFilter
*    v630   2014.8.14 去除StoreQuery,合并数据取值,升级svg库
*    v631   2014.8.18 针对母版浮动对象的特殊优化，增加母版容器，母版生命周期只做一次激活处理
*                     重置卷滚元素默认行为
*    v632   2014.8.19 母版自动运行修正，母版音频处理
*    v633   2014.8.21 base类接口修正,分离多事件模块,合并类似功能接口
*    v634   2014.8.26 拖动层级的处理,LaunchApp启动方法被覆盖逻辑错误
*    v635   2014.8.29 兼容feedbackBehavior数据错误,修正音频自然结束后的状态获取错误
*    v636   2014.9.2  增加广告数据接口 Xut.Presentation.AdsId,修正动画接口StopAni
*    v637   2014.9.3  优化database数据查询，针对所有的动画对象都提供回调函数
*                     修正读酷PC版不能滑的问题
*    v638   2014.9.4  Media层级修正
*    v639   2014.9.9  反馈，单击触发修正
*    v640   2014.9.10 解决手势控制翻页重置问题
*    v641   2014.9.15 读酷中，content重复出现的问题，强制类型转化去重
*    v642   2014.9.16 修正视差上下滑动溢出
*    v643   2014.9.24 增加跳转模式多线程优化，修正tap事件触发多次的问题
*    v644   2014.9.25 修正音频切换有时不播放的问题，优化tap事件
*    v645   2014.9.25 针对软件培训的操作行为下光标状态需求
*    v646   2014.9.30 处理content的动画回调captureAnimComplete错误
*    v647   2014.10.11 增加搜索功能与书签功能
*    v648   2014.10.13 数据查询修正
*    v649   2014.10.14 预知性动画后脚本修复
*    v650   2014.10.17 更换图标名,直接邦定事件,修正书签在当前页跳转没效果
*    v651   2014.10.21 统一书签和搜索的字段名
*    v652   2014.10.24 增加canvas支持canvasRelated
*    v653   2014.11.3  修正书签在母板上不可用的bug
*    v654   2014.11.4  增加阅读回退控制recordHistory，增加页面canvas模式控制contentMode
*    v655   2014.11.5  修正OverrideApi模块报错,增加canvas zIndex修正处理
*    v656   2014.11.6  img 2px的时候图片不显示，加position:absolute处理
*    v657   2014.11.7  增加页面浮动对象
*    v658   2014.11.10 修改pagebase结构，修正Hooks注册,show,hide的问题
*    v659   2014.11.13 修正一处变量引用错误，增加数据库命名文件
*    v660   2014.11.14 动态指定数据库名
*    v661   2014.11.17 StopAnim动画名修正，增加事件处理范围
*    v662   2014.11.18 修正应用启动逻辑LaunchApp方法,修正历史记录recordHistory,修正canvas模式单个对象支持
*    v663   2014.11.19 增加视频等待加载处理
*    v664   2014.11.20 全局事件监听修复 data-behavior', 'disable'
*    v665   2014.11.21 拖拽的data-behavior默认行为处理,修正历史记录在ios上失效
*    v666   2014.11.21 增加flash视频
*    v667   2014.11.24 视频优化，增加关闭按钮，播放错误时不闪现播放界面
*                      增加类型所属data-belong
*    v668   2014.11.26 阻止元素的默认行为,在火狐下面image带有href的行为,会自动触发
*                      修正视频位置，修正下拉菜单与页面联动
*    v669              Safari必须依赖quicktime
*    v670   2014.11.27 修正跳转与GotoSlide同时执行的问题
*    v671   2014.11.28 增加读酷pc端的视频判断top.EduStoreClient,简化videojs皮肤
*    v672   2014.11.28 window.innerWidth在iframe1366下面获取失败,用$(document).width代替
*    v673   2014.11.29 修正兼容重复创建测试createRepeat ,修正IE报错
*    v674   2014.11.29 视频音频样式，兼容火狐音乐，给翻页后加setTimeout延长渲染时间
*    v675   2014.11.30 修正IE隐藏下无法播放视频, 修改新的pageFlip页面切花模式
*    v676   2014.11.30 ie10下面mouse事件怪异.
*    v677              isIE10判断处理
*    v678   2014.12.1  修正同音轨的音频交互点击时引用不正确,修正动画音频没有销毁
*    v679   2014.12.4  动画互斥修正
*    v680   2014.12.8  修正音频挂起错误
*    v681   2014.12.15 修正视频点击没有播放
*    v682   2014.12.24 应用加载状态修正
*    v683   2014.12.30 升级2.4->phonegap3.7  大改动
*    v684   2014.12.31 修正平台判断错误



* v685   2015.1.6 降级3.7->phonegap2.4 , 增加自定义翻页按钮
* v686   2015.1.7 升级2.4->phonegap3.7,修正自定义按钮错误
* v687   2015.1.7 修正安卓上不能自动播放视频
* v688   2015.1.8 为浮动对象增加pointer-events属性
* v689   2015.1.9 多事件修正
* v690   2015.1.9 isscroll
* v691   2015.1.12 pg 3.7修正
* v692   2015.1.13 数据过滤category条件错误
* v693   2015.1.14 content默认是显示的数据的content.visible = 0 如果为1 就隐藏改成hidden
* v694   2015.1.15 Activity.category类型处理修正
* v695   2015.1.16 pointer-events:none修正
* v696   2015.1.21 修正背景没有自动缩放
* v697   2015.1.26 修正音轨没有打断的问题
* v698   2015.1.27 修正音频错误，增加canvas精灵
* v699   2015.1.29 修正iphone,touch上因音频产生的错误不能跳转
* v700   2015.2.5  修改视频的播放方式为html5优先
* v701   2015.2.9  修正ie8下面平台判断出错
* v702   2015.3.4  增加横版画轴模式,修正安卓音频问题
* v703   2015.3.5  修正动画pid传递问题
* v704   2015.3.9  修正视觉差与动画冲突的问题
* v705   2015.3.13 修正ios声音错位
* v706   2015.3.16 兼容苗苗学模式，安卓在线版处理，增加MMXCONFIG标记，topmost去除为0的判断
* v707   2015.3.16 $(window).width() =》document->window 在视网膜屏下获取错误
* v708   2015.3.17 增加阅读模式工具栏,修正了canvas的传参宽高处理
* v709   2015.3.18 优化了word工具栏
* v710   2015.3.20 floatPages设置的content溢出后处理在非视区增加overflow:hidden可视区域overflow:
* v711   2015.3.24 Surface设备双事件支持
* v712   2015.3.36 top.parent搜索2层作用域,增加word工具栏
* v713   2015.3.31 修正ipad设备上touch mouse事件都触发的问题
* v714   2015.3.31 修正pad设备上virtualMode出错的问题
* v715   2015.4.7  floatPages增加floatMaters的overflow控制，因为width,height为0 都隐藏了
* v716   2015.4.17 优化精灵动画，翻页返回调用实例方法
* v717   2015.4.20 修正word模式下，滑动容易溢出的问题
* v718   2015.4.22 读库快速退出模式下报错修正
* v719   2015.4.29 修复ios浏览器不能自动播放音频的问题
* v720   2015.5.5  修复pad ios8.3setItem出问题,私有模式的错误
* v721   2015.5.11 增加动画音频字幕
* v722   2015.5.13 修正audio传参判断错误
* v723   2015.5.18 修正字幕注释节点被选择的问题
* v724   2015.5.20 修正字幕文字跟随处理
* v725   2015.5.22 修正字幕显示位置
* v726   2015.5.28 优化缩放比的浮点类型问题
* v727   2015.6.5  修正字幕文字显示比例问题与SVG不一致
* v728   2015.6.11 修正字幕文字间隔问题
* v729   2015.6.12 plus ipad行高问题修正
* v730   2015.6.24 读库去掉预加载处理视频
* v731   2015.7.5  处理Media发生错误回调
* v732   2015.7.6  检测下scenarioId的正确性
* v733   2015.7.6  修正了virtualMode,svg宽度算法,正常
* v734   2015.7.10 修复音频没有释放的问题
* v735   2015.7.29 妙妙学移动版支持pageFlip模式处理
* v736   2015.7.30 去掉浮动对象层级关系
* v737   2015.8.19 支持精灵图自适应分辨率
* v738   2015.8.20 修正精灵图
* v739   2015.8.26 去掉播放视频时停止所有的音频
* v740   2015.9.9  支持跳转到app市场
* v741   2015.9.24 增加视频动作，支持图片切换，支持调用辅助对象
* v742   2015.9.25 重构video结构，增加音频重复支持
* v743   2015.9.25 修正content单击触发音频问题
* v744   2015.10.20 增加epub支持，静态编译文件
* v745   2015.11.12 处理svg样式增加问题
* v746   2015.11.13 IBOOKSCONFIG.svg错误修正,svgsheet修正
* v747   2015.11.13 去掉floatLI的ul，改成div,符合xhtml规范，ul必须嵌套li
* v748   2015.11.16 svg检测错误，修正多余的;号
* v749   2015.11.24 修正video str结构引起的xml报错
* v750   2015.11.25 增加IBooks模式中tmp.innerHTML try处理，检测报错
* v751   2015.11.30 针对content中的html文本框.js转化html
* v752   2015.12.9 针对IBOOS模式删除cover.jpg底图
* v753   2015.12.14 ibooks模式视频修正
* v754   2015.12.15 修正ibooks数据压缩的问题
* v755   2015.12.16 ibooks确保音频数据分离
* v756   2015.12.17 增加ibooks跳转页面行为
* v757   2015.12.23 在html5 audio失败的情况下，增加falsh的支持
* v758   2015.12.24 编译epub,video检测报错问题
* v759   2016.1.4 修正audio flash的支持问题
* v760   2016.1.7 增加文本框功能
* v761   2016.1.8 优化文本框
* v762   2016.1.9 修正苗苗学问题 确保createPage不是undefined\
* v763   2016.1.27 修正移动ios 安卓视频音频不自动播放问题
* v764   2016.2.1 增加ios行内播放器
* v765   2016.2.1 修正在线播放器支持
* v766   2016.2.2 音频全部用html5支持
* v767   2016.2.2 音轨处理
* v768   2016.2.3 在线音频处理
* v769   2016.2.4 妙妙学客户端模式，用插件
* v770   2016.2.22 妙妙学客户端改用直接js调用底层代码处理音频播放
* v771   2016.2.23 增加妙妙学 退出接口
* v772   2016.2.26 妙妙学音频音频没有回调不释放问题修正
* v773   2016.3.3 canvas修改引起精灵动画消失问题处理
* v774            视频开始时，主动清理音频
* v775   2016.3.4 视频自动播放不能重复点击的处理
* v776            修改视频与音频能同时播放
* v777            修正播放视频的时候,音频被关闭的问题
* v778   2016.3.7 处理快速翻页content动画自动播放，不销毁的问题
* v779   2016.3.18 妙妙学 滚动插件默认行为被阻止
* v780   2016.4.18 编译epub文件出错
* v781   2016.4.19 delete IBOOKSCONFIG[name]
* v782   2016.5.15 增加压缩css的测试
* v783   2016.5.16 基于es6的全新代码
* v784   daiceshi
* v785   修正妙妙学手机版地址
*
/