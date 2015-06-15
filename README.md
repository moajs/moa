# Moajs

Moajs is a full stack framework based expressjs、mongoose、bluebird、mocha.

[![gitter][gitter-image]][gitter-url]
[![NPM version][npm-image]][npm-url]

* Allows to configure cache size and policy.
* auto mount routes
* use mongoosedao for data access
* use gulp as task management
* live reload.

![](doc/moa.jpg)

> "Lost, like the Moa is lost" - Maori proverb

## Install


    npm install --save moajs
    
## usage


### basic 

    var current_path = process.cwd();
    var base = current_path + '/out/app'
    
    var model = {
      base_path : base,
      entity:'user',
      attr:{
        username: 'string',
        password: 'string'
      }
    }

    var Generator = require('./index');
    var g = new Generator(model,{});

    g.all();

### cli   

1.create scaffold user

    moag user name:string password:object
    
    
mongoose支持的data type基本如下：

• String -> string
• Number-> number
• Date -> date
• Boolean -> boolean
• Buffer -> buffer
• ObjectId -> object
• Mixed  -> mixed
• Array -> array

    
    
2.destroy scaffold user,this will move user to `~/.moajs/xxxx`

    moad user
    
3.new a project in cli

    moan new_project

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## History

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