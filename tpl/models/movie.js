/**
 * Created by alfred on 01/06/14.
 */

var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;
var MongooseDao = require('mongoosedao');

var movieSchema = new Schema({
    name:String,
    age:String
});

var Movie = mongoose.model('Movie', movieSchema);
var MovieDao = new MongooseDao(Movie);
 
module.exports = MovieDao;