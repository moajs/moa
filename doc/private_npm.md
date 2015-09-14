# 你一定要知道的private npm

私有模块的好处是必须是模块拥有者才能下载，

## Why？

以后js大一统，npm就不再只是nodejs package manager的，而是js package manager

首先看一下npm的好处

- 易于使用，下载，开发，发布，测试等
- 管理模块依赖
- 模块化，易于拆分
- npm提供足够多的hook，可以定制很多功能
- 安装版本，可随意指定，可以干坏事儿的

私有npm的好处

- 继承了所有npm的好处
- 只有模块拥有者才可以下载，具有私密性

目前情况

- nodejs世界里都是npm，一统江湖
- 前端js世界，正在向npm靠拢，npm的种种好处，只比bower强，不弱。

举个例子，眼下最火的reactjs的组件，推荐就是webpack打包，然后发布都npm上。目前做的比较好的是ant.design，它的tab组件里的package.json

https://github.com/react-component/tabs/blob/master/package.json

我们再看一下它的用法

```
var Tabs = require('rc-tabs');
var TabPane = Tabs.TabPane;

var callback = function(key){

}

React.render(
  (
    <Tabs defaultActiveKey="2" onChange={callback}>
      <TabPane tab='tab 1' key="1">first</TabPane>
      <TabPane tab='tab 2' key="2">second</TabPane>
      <TabPane tab='tab 3' key="3">third</TabPane>
    </Tabs>
  ),
  document.getElementById('t2'));
```

一样的require，一样的调用，是不是感觉很亲切啊？

## Moajs的插件机制：它可以做的更多

核心代码如下

```
  "scripts": {
    "start": "npm publish .",
    "test": "echo \"Error: no test specified\" && exit 1",
    "postinstall": "node ./node_modules/nmm-link/link.bin.js"
  },
  "dependencies": {
    "nmm-link": "^1.0.2"
  },
```

说明：

- postinstall是npm的hook，当安装完成之后的回调，这里只想nmm-link里的一个脚本
- nmm-link是一个生产软连接的工具

其实整个插件机制异常简单

- 通过npm安装后的回调postinstall来执行脚本
- 根据当前npm目录信息来创建对应的逻辑处理，比如这里的创建link

是不是很简单？

更多参见：https://docs.npmjs.com/misc/scripts

npm supports the "scripts" property of the package.json script, for the following scripts:

- prepublish: Run BEFORE the package is published. (Also run on local npm install without any arguments.)
- publish, postpublish: Run AFTER the package is published.
- preinstall: Run BEFORE the package is installed
- install, postinstall: Run AFTER the package is installed.
- preuninstall, uninstall: Run BEFORE the package is uninstalled.
- postuninstall: Run AFTER the package is uninstalled.
- preversion, version: Run BEFORE bump the package version.
- postversion: Run AFTER bump the package version.
- pretest, test, posttest: Run by the npm test command.
- prestop, stop, poststop: Run by the npm stop command.
- prestart, start, poststart: Run by the npm start command.
- prerestart, restart, postrestart: Run by the npm restart command. Note: npm restart will run the stop and start scripts if no restart script is provided.

这么多hook，是不是想干啥都够？

扯了这么多，我的目的是讲npm的好处，其实这就衍生出私有npm的重要性，很多时候，公司的东西不能开发，就算是一个插件，开发出来也不合适，于是大家都行要私有的npm，于是这帮货就想了个办法，给npm增加scope功能，即所谓的private npm。

## 自建npm源的技术选项

实现private npm有2种办法

- 自建
- 付费购买


我参照的是

https://github.com/cnpm/cnpmjs.org/wiki/Deploy-a-private-npm-registry-in-5-minutes

目前没有成功，有成功的可以分享一下

搭建私有仓库的可选方案

- https://github.com/npm/npm-registry-couchapp
- https://github.com/cnpm/cnpmjs.org

上面2种方式，一个推荐couchdb，一个推荐mysql，总是每个1G内存，甭想玩，而且同步能否限制还不好说。

## 付费方案

npmjs上是7美元/月，可以无限量的上传。私有模块无法被其他源copy，所以要保证源是`registry=https://registry.npmjs.org/`或者`nrm use npmjs`.

破财省得麻烦，也算值得了

## npm私有模块在服务器安装不上？

1） 更新npm版本，必须在2.11以上

    npm install -g npm
 
2） 用户登录，注意是该模块的拥有者

    npm login
    
3） 检查~/.npmrc,是否存在_authToken，如无，请更新npm版本去

```
[deploy@iZ251uvtr2bZ moajs]$ cat ~/.npmrc 
registry=https://registry.npmjs.org/
//registry.npmjs.org/:_authToken=fc83b39-7bfa-47b7-9f8c-ed91652613
```

4） 安装你的私有插件吧，下面这句是安装不上的，就是给大家看看

    npm install @i5ting/wms-plugin-warehouse
    
    