var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//require('./config/mongoose.config');
var index = require('./routes/index');
var users = require('./routes/users');
var multer = require('multer');
var cors = require('cors')
//var dest = multer({ dest: 'upload/'});
var uploaddest = multer({ dest: './upload' }).single('photo');
var app = express();
trello_router = require('./routes/trello.router');
app.use(cors());
app.use(function (req, res, next) {
  //set headers to allow cross origin request.
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization");
  next();
});
// view engine setup
//app.use(express.static(path.join(__dirname, 'dist')));
//app.use(express.static(path.join(__dirname, 'dist')));
//app.get('*', (req, res) => {
//res.sendFile('index.html');
//});
//app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// app.get('/new',(req,res)=>{
//    res.json("hello world");
// })
//app.use('/trello/api',trello_router);
router = require('express').Router();

app.post('/uploads',(req, res, next) => {
  var path = '';
  uploaddest(req, res, function (err) {
    if (err) {
      // An error occurred when uploading
      console.log(err);
      return res.status(422).send("an Error occured")
    }
    // No error occured.
    path = req.file.path;
    console.log(path);
    return res.send("Upload Completed for " + path);
  });
});
// app.post('/uploads',(req,res)=>{
//   console.log("in uploads post");
//   res.send("in upload");
// })
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', index);
//app.use('/users', users);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(3000, (error, success) => {
  if (error) {
    console.log("Error while connecting server");
  }
  console.log("server connected");
})
module.exports = app;
