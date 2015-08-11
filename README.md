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


![](doc/moa.jpg)

> "Lost, like the Moa is lost" - Maori proverb

## Requirement 

- nodejs v0.10 + 
- nvm    v0.25 +
- gulp   v3.90 +

## Install

    npm install --save moajs
    
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