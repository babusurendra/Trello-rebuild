let express = require('express');
let router = express.Router();
let trello_controller = require('../controllers/trellodept.controller');
router.get('/getteams',trello_controller.teamsList);
module.exports = router;