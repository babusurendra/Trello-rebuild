let mongoose = require('mongoose');
let schema = mongoose.Schema;
let teamsschema = new schema({
 
});
module.exports = mongoose.model('teams',teamsschema);