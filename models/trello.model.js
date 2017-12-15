let mongoose = require('mongoose');
let schema = mongoose.Schema;
let teamsschema = new schema({
 department : String,
 product : String
});
module.exports = mongoose.model('teams',teamsschema);