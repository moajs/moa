# Moajs

Moajs is a open-source web framework based expressjs、mongoose、bluebird、mocha that’s optimized
for programmer happiness and sustainable productivity. It lets you
write beautiful code by favoring convention over configuration.

[![gitter][gitter-image]][gitter-url]
[![NPM version][npm-image]][npm-url]

* Modular && Plugable
* Scaffold
* Model-View-Controller (MVC) pattern
* Restful Api
* Auto mount routes
* Mongoosedao for data access
* Gulp as task management
* Live reload
* Runtime Server 


![](doc/moa.jpg)

> "Lost, like the Moa is lost" - Maori proverb

## Requirement 

- nodejs v0.10 + 
- nvm    v0.25 +
- gulp   v3.90 +

## Install

    [sudo] npm install -g moajs
    
## Usage

### help

    ➜  moajs git:(master) moa
    Moajs HELP:

    moan: 【创建新项目】 moan new_project_name
    moag: 【创建脚手架】 moag user name:string password:string uid:object
    moad: 【移除脚手架】 moad user
    moas: 【启动服务器】 moas

    Have a good day! Moaer

### new a project in cli

    moan new_project
    
or force update with moa-seed latest version

    moan new_project -f
    
### create scaffold user

    moag user name:string password:object
    
    
mongoose支持的data type基本如下：

- String -> string
- Number-> number
- Date -> date
- Boolean -> boolean
- Buffer -> buffer
- ObjectId -> object
- Mixed  -> mixed
- Array -> array

### destroy scaffold user,this will move user to `~/.moajs/xxxx`

    moad user

### moas

moas = moa server, runtime for test plugin

解决单个插件模块测试问题

使用`nmm init`初始化moa插件，然后使用moag来生成代码，并编写里面的功能。如果需要测试插件功能，可以使用moas来模拟moa运行时环境。


```
cd wms-plugin-warehouse
moalink
moas
```

如果使用自定义端口，可以这样

```
export PORT=3009 && moas
```

## Test

    npm run moag
    npm run moad
    npm run moan
    
## Components

- [x] Scaffold
- [x] Restful
  - 7 methods for render view
  - 5 methods for render api
- [x] MongooseDao
- [x] Middlewares
  - session
  - token-based api
- [x] Task(gulp-based)
- [x] Plugin(implement)
- [ ] Test
- [ ] Migration
- [ ] Deployments
- [ ] Docs(http://github.com/andy0323/api-test)
- [ ] refact api to router.api('get', middlewares, $.api.update) 在考虑要不要做

## FAQ

### moa官方模块

https://github.com/moa-modules/

目前只有2个插件

- moa-plugin-user
- moa-plugin-wechat

如果你开发了moa插件，开源的，请邮件或者issue通知我 shiren1118@126.com

### npm私有模块在服务器安装不上？

私有模块的好处是必须是模块拥有者才能下载，npmjs上是7美元/月，可以无限量的上传。私有模块无法被其他源copy，所以要保证源是`registry=https://registry.npmjs.org/`或者
`nrm use npmjs`.

1） 更新npm版本，必须在2.11以上

    npm install -g npm

2) 用户登录，注意是该模块的拥有者

    npm login
    
3）检查~/.npmrc,是否存在_authToken，如无，请更新npm版本去

```
[deploy@iZ251uvtr2bZ moajs]$ cat ~/.npmrc 
registry=https://registry.npmjs.org/
//registry.npmjs.org/:_authToken=fc83b39-7bfa-47b7-9f8c-ed91652613
```

4） 安装你的私有插件吧，下面这句是安装不上的，就是给大家看看

    npm install @i5ting/wms-plugin-warehouse
    

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## History

- v1.0.21 add nmm plugin
- v1.0.17 add api generator
- v1.0.16 add controller api export
- v1.0.4 add exd to destroy it
- v1.0.2 rename index to /
- v1.0.0 init


## Welcome fork and feedback

- write by `i5ting` shiren1118@126.com

如有建议或意见，请在issue提问或邮件

## License

this repo is released under the [MIT
License](http://www.opensource.org/licenses/MIT).


[npm-image]: https://img.shields.io/npm/v/moajs.svg?style=flat-square
[npm-url]: https://npmjs.org/package/moajs
[gitter-image]: https://badges.gitter.im/Join%20Chat.svg
[gitter-url]: https://gitter.im/i5ting/moajs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge