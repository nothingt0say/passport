const config = {};

config.port = 3000;

config.mongoose = {
  uri: "mongodb://localhost:27017/passport-demo",
  options: {
    keepAlive: 1,
    autoIndex: false,
    useNewUrlParser: true,
    poolSize: 10,
  },
};

config.session = {
  secret: "BlondieCode",
  key: "sid",
  cookie: {
    path: "/",
    httpOnly: true,
    maxAge: null,
  },
};

config.oauth = {
  facebookAuth: {
    clientID: "your_client_id",
    clientSecret: "your_client_secret",
    callbackURL: "/registration/facebook/callback",
  },
  googleAuth: {
    clientID:
      "390397857553-3so5mpjj9ldujoc7nulj96rf8dg5nn9s.apps.googleusercontent.com",
    clientSecret: "C-eYHq61mqjaV7pCuPENmYMi",
    callbackURL: "/registration/google/callback",
  },
  vkontakteAuth: {
    clientID: "your_client_id",
    clientSecret: "your_client_secret",
    callbackURL: "/registration/vkontakte/callback",
  },
};

module.exports = config;
