/**
 * Created by alfred on {{created_at}}.
 */

var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;
var MongooseDao = require('mongoosedao');

var {{model}}Schema = new Schema(
    {{{mongoose_attrs}}}
);

var {{entity}} = mongoose.model('{{entity}}', {{model}}Schema);
var {{entity}}Dao = new MongooseDao({{entity}});
 
module.exports = {{entity}}Dao;