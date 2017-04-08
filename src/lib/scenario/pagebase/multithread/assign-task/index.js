 import { config } from '../../../../config/index'
 import updataCache from './sync-cache'
 import TaskContainer from './container/index'
 import TaskBackground from './background/index'
 import TaskActivitys from './activity/index'
 import TaskComponents from './component/index'
 import TaskColumns from './column/index'

 /**
  * 解析canvas配置
  * contentMode 分为  0 或者 1
  * 1 是dom模式
  * 0 是canvas模式
  * 以后如果其余的在增加
  * 针对页面chapter中的parameter写入 contentMode   值为 1
  * 针对每一个content中的parameter写入 contentMode 值为 1
  * 如果是canvas模式的时候，同时也是能够存在dom模式是
  * @return {[type]} [description]
  */
 const parseMode = function(pageData, base) {
   let parameter = pageData.parameter
   if (parameter) {
     try {
       parameter = JSON.parse(parameter)
       if (parameter) {
         if (parameter.contentMode && parameter.contentMode == 1) {
           //非强制dom模式
           if (!config.onlyDomMode) {
             //启动dom模式
             base.canvasRelated.enable = true;
           }
         }
         //如果是最后一页处理
         if (parameter.lastPage && base.pageType === 'page') {
           //运行应用运行时间
           base.runLastPageAction = function() {
             const runTime = Number(config.data.delayTime)
             let timeout
             if (runTime) {
               timeout = setTimeout(() => {
                   Xut.Application.Notify('complete')
                 }, runTime * 1000) //转成秒
             }
             return function() { //返回停止方法
               if (timeout) {
                 clearTimeout(timeout)
                 timeout = null
               }
             }
           }

         }
       }
     } catch (e) {
       console.log('JSON错误,chpterId为', base.chapterId, parameter)
     }
   }
 }

 /**
  * 分配Container构建任务
  * 1 同步数据
  * 2 构建容器
  * 3 给出构建回调,这里不能中断,翻页必须存在节点
  * 4 等待之后自动创建或者后台空闲创建之后的任务
  * @return {[type]} [description]
  */
 export default {

   /**
    * 主容器
    */
   'Container' (taskCallback, base) {
     //同步数据
     updataCache.call(base, [base.chapterIndex], () => {
       const pageData = base.baseData()
         //contentMode模式
       parseMode(pageData, base)
       TaskContainer(base, pageData, taskCallback)
     })
   },


   /**
    * 流式排版
    */
   'Column' (taskCallback, base) {
     TaskColumns(base, taskCallback)
   },


   /**
    *  分配背景构建任务
    *    1 构建数据与结构,执行中断检测
    *    2 绘制结构,执行回调
    *
    *  提供2组回调
    *    1 构建数据结构 suspendCallback
    *    2 执行innerhtml构建完毕 successCallback
    */
   'Background' (taskCallback, base) {

     if (base.checkInstanceTasks('background')) {
       return;
     }

     const data = base.baseData(base.chapterIndex)

     /**
      * 构建中断回调
      */
     const suspendCallback = (innerNextTasks, innerSuspendTasks) => {
       base.nextTasks({
         'taskName': '内部background',
         'outSuspendTasks': innerSuspendTasks,
         'outNextTasks': innerNextTasks
       });
     }

     /**
      * 获取数据成功回调
      * @return {[type]} [description]
      */
     const successCallback = () => {
       taskCallback();
     }

     base.createRelated.cacheTasks['background'] = new TaskBackground({
       data,
       $containsNode: base.getContainsNode(),
       suspendCallback,
       successCallback
     })

   },


   /**
    * 分配Components构建任务
    * @return {[type]} [description]
    */
   'Components' (taskCallback, base) {

     if (base.checkInstanceTasks('components')) {
       return;
     }

     const chapterData = base.chapterData
     const baseData = base.baseData()

     /**
      * 构建中断回调
      * @param  {[type]} innerNextTasks    [description]
      * @param  {[type]} innerSuspendTasks [description]
      * @return {[type]}                   [description]
      */
     const suspendCallback = (innerNextTasks, innerSuspendTasks) => {
       base.nextTasks({
         'taskName': '内部widgets',
         'outSuspendTasks': innerSuspendTasks,
         'outNextTasks': innerNextTasks
       });
     }

     /**
      * 获取数据成功回调
      * @return {[type]} [description]
      */
     const successCallback = () => {
       taskCallback();
     }

     base.createRelated.cacheTasks['components'] = new TaskComponents({
       '$containsNode': base.getContainsNode(),
       'nodes': chapterData['nodes'],
       'pageOffset': chapterData['pageOffset'],
       'activitys': base.baseActivits(),
       'chpaterData': baseData,
       'chapterId': baseData['_id'],
       'chapterIndex': base.chapterIndex,
       'pageType': base.pageType,
       'getStyle': base.getStyle
     }, suspendCallback, successCallback);
   },


   /**
    * 分配contetns构建任务
    * @return {[type]} [description]
    */
   'Contents' (taskCallback, base) {

     //通过content数据库为空处理
     if (Xut.data.preventContent) {
       return taskCallback();
     }

     if (base.checkInstanceTasks('contents')) {
       return;
     }

     const chapterData = base.chapterData
     const baseData = base.baseData()
     const chapterId = baseData._id
     const activitys = base.baseActivits()

     /*生成钩子*/
     const pageBaseHooks = _.extend({}, {
       /*构建中断回调*/
       suspend(taskName, innerNextTasks, innerSuspendTasks) {
         //如果是当前页面构建,允许打断一次
         let interrupt
         if (base.hasAutoRun && taskName === 'strAfter') {
           interrupt = true;
         }
         base.nextTasks({
           'interrupt': interrupt,
           'taskName': '内部contents',
           'outSuspendTasks': innerSuspendTasks,
           'outNextTasks': innerNextTasks
         });
       },
       /*获取数据成功回调*/
       success() {
         taskCallback();
       }
     }, base.collectHooks)


     base.createRelated.cacheTasks['contents'] = new TaskActivitys({
       'canvasRelated': base.canvasRelated,
       'rootNode': base.rootNode,
       '$containsNode': base.getContainsNode(),
       '$headFootNode': base.getHeadFootNode(),
       'pageType': base.pageType,
       'nodes': chapterData['nodes'],
       'pageOffset': chapterData['pageOffset'],
       'activitys': activitys,
       'chpaterData': baseData,
       'chapterId': chapterId,
       'pageIndex': base.pageIndex,
       'chapterIndex': base.chapterIndex,
       'pageBaseHooks': pageBaseHooks,
       'getStyle': base.getStyle
     });
   }
 }
