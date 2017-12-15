teammodel = require('../models/trello.model');
module.exports = {
    teamsList : function(req, res){
         teammodel.find((error,data)=>{
             if(!data){
                 res.send("no data found");
             }
             res.json(data);
         });
    }
};