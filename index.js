const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const flash = require("connect-flash");
const compression = require("compression");

const crypto = require("crypto");
const path = require("path");
const fs = require("fs");
const http = require("http");
const https = require("https");

const passport = require("passport");
const session = require("express-session");
let express = require("express");
const socket = require("socket.io");

const passportSetup = require('./config/passport-setup')
let app = express();


// let key = fs.readFileSync("/etc/letsencrypt/live/magicunbox.com/privkey.pem");
// let cert = fs.readFileSync("/etc/letsencrypt/live/magicunbox.com/cert.pem");
// let ca = fs.readFileSync("/etc/letsencrypt/live/magicunbox.com/chain.pem");
// let creds = {
//   key,
//   cert,
//   ca
// };


const httpServer = http.createServer(app);
// const httpsServer = https.createServer(creds, app);

// function ensureSecure(req, res, next){
//   if(req.secure){
//     // OK, continue
//     return next();
//   };
  
//   res.redirect('https://'+req.host+":"+(process.env.SSLPORT || 443)+req.url); // handle port numbers if non 443
// };

// app.all('*', ensureSecure);

const exphbs = require("express-handlebars");
app.set("views", path.join(__dirname, "views"));
app.engine(
  "handlebars",
  exphbs({
    helpers: {
      toJSON: function(object) {
        return JSON.stringify(object);
      },
      toString: function(object) {
        return object.toString();
      },
      ifEquals:function(arg1, arg2, options){
        return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
      },
      isSold:function(item, options){
        return item.sold === true ? options.fn(this) : options.inverse(this);
      },
      isWon:function(item, options){
        return item.sold === false && item.shippingStatus === 0 ? options.fn(this) : options.inverse(this);
      },
      isShipped:function(item, options){
        return item.shippingStatus > 0 ? options.fn(this) : options.inverse(this);
      },
      fullShippingStatus:function(id){
        let status = ['', 'PROCESSING', 'SHIPPED']
        return status[id]
      },
      formatDate:function(date){
        return date.toString().substring(0,21)
      },
      formatUsername:function(username){
        if(username.length > 7)
          return username.substring(0,7)+"..."
        else  
          return username
      }
    },
    partialsDir: './views/partials'
  })
);

app.use(compression())

app.set("view engine", "handlebars");
//Handlebars.registerPartial('navbar', './views/partials/navbar')
// Set static folder
app.use(express.static(path.join(__dirname, "public")));

// BodyParse Middleware
var rawBodySaver = function (req, res, buf, encoding) {
  if (buf && buf.length) {
    req.rawBody = buf.toString(encoding || 'utf8');
  }
}

app.use(bodyParser.json({ verify: rawBodySaver }));
app.use(bodyParser.urlencoded({ verify: rawBodySaver, extended: true }));
app.use(bodyParser.raw({ verify: rawBodySaver, type: function () { return true } }));

app.use(cookieParser());

// Express session
app.use(
  session({
    secret: "hahuofoono",
    saveUninitialized: true,
    resave: true
  })
);

// Passport init
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());

// Global vars
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  res.locals.uri = req.path;
  next();
});

// Express Validator
app.use(
  expressValidator({
    errorFormatter: (params, msg, value) => {
      var namespace = params.split(".");
      var root = namespace.shift();
      var formParam = root;
      while (namespace.length) {
        formParam += `[${namespace.shift()}]`;
      }
      return {
        param: formParam,
        msg: msg,
        value: value
      };
    }
  })
);

let router = require("./src/router");
router.forEach(route => {
  app.use(route.path, route.handler);
});

const PORT = process.env.PORT || 8111;
const SSLPORT = process.env.SSLPORT || 443;
// app.listen(PORT, () => console.info(`Server has started on ${PORT}`))
// let server = httpServer.listen(PORT, () => console.info(`Server has started on ${PORT}`));
httpServer.listen(PORT, () =>
  console.info(`Server has started on ${PORT}`)
);

//var io = require('./utils/socket').listen(server)

const io = socket(httpServer, { origins: '*:*'});

let ips = [];

io.set('authorization', function (handshake, callback) {
  let ip = handshake.connection.remoteAddress 

  if(ips[ip] && ips[ip] > 4) {
    callback(null, false);
  }
  else {
    if(ips[ip] !== undefined) ips[ip]++
    else ips[ip] = 1
    callback(null, true);
  }
});


let connections = 300;
io.on('connection', function(client) {

  let ip = client.request.connection.remoteAddress 
  if(ips[ip] === 1)
    connections++
  io.sockets.emit('online', connections);

  client.on('disconnect', function(){
    ips[ip]--
    if(ips[ip] === 0)
      connections--
    io.sockets.emit('online', connections);
  })

})
module.exports = io