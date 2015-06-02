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

    var obj = {
        _p : __dirname,
        model: user,
        attrs:{
            username : string
            password : string
        }
    }
    
    var g = require('express-g')(obj);
    g.generate();
    
    