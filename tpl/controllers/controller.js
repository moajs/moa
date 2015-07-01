/**
 * Created by Moajs on {{created_at}}.
 */

var $models = require('mount-models')(__dirname);

var {{entity}} = $models.{{model}};

exports.list = function (req, res, next) {
  console.log(req.method + ' /{{models}} => list, query: ' + JSON.stringify(req.query));
  
  {{entity}}.getAll(function(err, {{models}}){
    console.log({{models}});
    res.render('{{models}}/index', {
      {{models}} : {{models}}
    })
  });
};

exports.new = function (req, res, next) {
  console.log(req.method + ' /{{models}}/new => new, query: ' + JSON.stringify(req.query));
  
  res.render('{{models}}/new', {
    {{model}} : {
      "_action" : "new"
    }
  })
};

exports.show = function (req, res, next) {
  console.log(req.method + ' /{{models}}/:id => show, query: ' + JSON.stringify(req.query) + 
    ', params: ' + JSON.stringify(req.params));
  var id = req.params.id;
  
  {{entity}}.getById(id, function(err, {{model}}) {
    console.log({{model}});
    res.render('{{models}}/show', {
      {{model}} : {{model}}
    })
  });
};

exports.edit = function (req, res, next) {
  console.log(req.method + ' /{{models}}/:id/edit => edit, query: ' + JSON.stringify(req.query) + 
    ', params: ' + JSON.stringify(req.params));
    
  var id = req.params.id; 
  
  {{entity}}.getById(id, function (err, {{model}}) {
    console.log({{model}});
    {{model}}._action = 'edit';
    
    res.render('{{models}}/edit', {
      {{model}} : {{model}}
    })
  });
};

exports.create = function (req, res, next) {
  console.log(req.method + ' /{{models}} => create, query: ' + JSON.stringify(req.query) + 
    ', params: ' + JSON.stringify(req.params) + ', body: ' + JSON.stringify(req.body));
  
  {{entity}}.create({{keypair}}, function (err, {{model}}) {
    console.log({{model}});
    res.render('{{models}}/show', {
      {{model}} : {{model}}
    })
  });
};

exports.update = function (req, res, next) {
  console.log(req.method + ' /{{models}}/:id => update, query: ' + JSON.stringify(req.query) + 
    ', params: ' + JSON.stringify(req.params) + ', body: ' + JSON.stringify(req.body));
    
  var id = req.params.id; 

  {{entity}}.updateById(id,{{keypair}}, function (err, {{model}}) {
    console.log({{model}});
  
    res.json({
      data: {
        redirect : '/{{models}}/' + id
      },
      status: {
        code : 0,
        msg  : 'delete success!'
      }
    });
  });
};

exports.destroy = function (req, res, next) {
  var id = req.params.id;
  {{entity}}.deleteById(id, function (err) {
    if (err) {
      throw new Error(err);
    }
    
    res.json({
      data: {},
      status: {
        code : 0,
        msg  : 'delete success!'
      }
    });
  });
};

// -- custom api

exports.api = {
  list: function (req, res, next) {
    var user_id = req.api_user._id;
    
    {{entity}}.query({}, function (err, {{models}}) {
      if (err) {
        return res.api_error(err);
      }
      
      res.api({
        {{models}} : {{models}}
      })
    });
  },
  show: function (req, res, next) {
    var user_id = req.api_user._id;
    var id = req.params.{{model}}_id;
    
    {{entity}}.getById(id, function (err, {{model}}) {
      if (err) {
        return res.api_error(err);
      }
      
      res.api({
        {{model}} : {{model}}
      });
    }); 
  },
  create: function (req, res, next) {
    var user_id = req.api_user._id;
  
    {{entity}}.create({{keypair}}, function (err, {{model}}) {
      if (err) {
        return res.api_error(err);
      }
      
      res.json({
        {{model}} : {{model}}
      })
    });
  },
  update: function (req, res, next) {
    var user_id = req.api_user._id;
    var id = req.params.{{model}}_id; 
    {{entity}}.updateById(id, {{keypair}}, function (err, {{model}}) {
      if (err) {
        return res.api_error(err);
      }
  
      res.api({
        {{model}} : {{model}},
        redirect : '/{{models}}/' + id
      })
    });
  },
  delete: function (req, res, next) {
    var user_id = req.api_user._id;
    var id = req.params.{{model}}_id; 
    
    {{entity}}.deleteById(id, function (err) {
      if (err) {
        return res.api_error(err);
      }
    
      res.api({id: id})
    });
  }
}
