# express-g

express-g is a generator based expressjs


## Feature

create

```
app/controllers/movies_controller.js
app/models/movie.js
app/routes/movies.js
app/movies
    - edit.jade  
    - index.jade 
    - movie.jade 
    - new.jade   
    - show.jade
```



## Install


    npm install --save express-g
    
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

    exg user name:string password:object
    
    
mongoose支持的data type基本如下：

• String -> string
• Number-> number
• Date -> date
• Boolean -> boolean
• Buffer -> buffer
• ObjectId -> object
• Mixed  -> mixed
• Array -> array

    
    
2.destroy scaffold user,this will move user to `~/.express-g/xxxx`

    exd user
    
3.new a project in cli

    exn new_project

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request


## 版本历史

- v1.0.4 add exd to destroy it
- v1.0.2 rename index to /
- v1.0.0 初始化版本


## 欢迎fork和反馈

- write by `i5ting` shiren1118@126.com

如有建议或意见，请在issue提问或邮件

## License

this repo is released under the [MIT
License](http://www.opensource.org/licenses/MIT).


[npm-image]: https://img.shields.io/npm/v/mount-routes.svg?style=flat-square
[npm-url]: https://npmjs.org/package/mount-routes
[gitter-image]: https://badges.gitter.im/Join%20Chat.svg
[gitter-url]: https://gitter.im/i5ting/mount-routes?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge