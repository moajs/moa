/**
 * Created by sang on 01/06/14.
 */

var {{entity}} = require('../models/{{model}}');

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
  
  {{entity}}.getById(id, function(err, {{model}}){
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
  
  {{entity}}.getById(id, function(err, {{model}}){
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
  
    {{entity}}.create({{keypair}}, function(err, {{model}}){
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
  
    {{entity}}.updateById(id,{{keypair}}, function(err, {{model}}){
      console.log({{model}});
    
      res.json({
        data:{
          redirect : '/{{models}}/' + id
        },
        status:{
          code : 0,
          msg  : 'delete success!'
        }
      });
    });
};

exports.destroy = function (req, res, next) {
  console.log(req.method + ' /{{models}}/:id => destroy, query: ' + JSON.stringify(req.query) + 
    ', params: ' + JSON.stringify(req.params) + ', body: ' + JSON.stringify(req.body));
  var id = req.params.id;
  {{entity}}.deleteById(id, function(err){
    console.log(err);
    res.json({
      data:{},
      status:{
        code : 0,
        msg  : 'delete success!'
      }
    });
  });
};