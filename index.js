const express = require("express");
const app = express();

// todo 1: require modules
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const keys = require("./config/keys");
// todo 2: infor passport how to use the strategy
// 1. config -> customize how strategy behave inside of our app
// 2. teach passport how to use this strategy
// todo 3: enable google OAuth API to get clientID, clientSecret
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.GOOGLE_CLIENT_ID,
      clientSecret: keys.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    (accessToken) => {
      console.log(accessToken);
    }
  )
);

app.listen(5000);
