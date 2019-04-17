module.exports = [
  {
    path: "/boxes",
    handler: require("./routes/box")
  },
  {
    path: "/login",
    handler: require("./routes/login")
  },
  {
    path: "/register",
    handler: require("./routes/register")
  },
  {
    path: "/",
    handler: require("./routes/index")
  },
  {
    path: "/inventory",
    handler: require("./routes/inventory")
  },
  {
    path: "/coinbase",
    handler: require("./routes/coinbase")
  },
  {
    path: "/user",
    handler: require("./routes/user")
  },
  {
    path: "/paypal",
    handler: require("./routes/paypal")
  },
  {
    path: "/admin",
    handler: require("./routes/admin")
  },
  {
    path: "/recovery",
    handler: require("./routes/recovery")
  },
  {
    path: "/cards",
    handler: require("./routes/card")
  }
];
