module.exports = function (app) {

  const userModel = require("../model/user/user.model.server.js");
  const passport = require('passport');
  const LocalStrategy = require('passport-local').Strategy;
  const bcrypt = require("bcrypt-nodejs");

  passport.use(new LocalStrategy(localStrategy));
  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);

  users = [
    {_id: '123', username: 'alice',    password: 'alice',    firstName: 'Alice',  lastName: 'Wonder'  },
    {_id: '234', username: 'bob',      password: 'bob',      firstName: 'Bob',    lastName: 'Marley'  },
    {_id: '345', username: 'charly',   password: 'charly',   firstName: 'Charly', lastName: 'Garcia'  },
    {_id: '456', username: 'jannunzi', password: 'jannunzi', firstName: 'Jose',   lastName: 'Annunzi' }
  ];

  app.get("/api/user/", findUsers);
  app.post("/api/user", createUser);
  app.get("/api/user/:uid", findUserById);
  app.put("/api/user/:uid", updateUser);
  app.delete("/api/user/:uid", deleteUser);
  app.post ('/api/register', register);
  app.post  ('/api/login', passport.authenticate('local'), login);
  app.post('/api/logout', logout);
  app.post ('/api/loggedin', loggedin);


  function serializeUser(user, done) {
    done(null, user);
  }

  function deserializeUser(user, done) {
    userModel
      .findUserById(user._id)
      .then(
        function(user){
          done(null, user);
        },
        function(err){
          done(err, null);
        }
      );
  }

  function localStrategy(username, password, done) {
    userModel
      .findUserByUsername(username)
      .then(
        function(user) {
          if(user.username === username &&
            ( (password === user.password) || (bcrypt.compareSync(password, user.password)) )) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        },
        function(err) {
          if (err) { return done(err); }
        }
      );
  }

  function loggedin(req, res) {
    res.send(req.isAuthenticated() ? req.user : '0');
  }

  function login(req, res) {
    const user = req.user;
    res.json(user);
  }

  function logout(req, res) {
    req.logOut();
    res.send(200);
  }

  function register (req, res) {
    const user = req.body;
    user.password = bcrypt.hashSync(user.password);
    userModel
      .createUser(user)
      .then(
        function(user){
          if(user){
            req.login(user, function(err) {
              if(err) {
                res.status(400).send(err);
              } else {
                res.json(user);
              }
            });
          }
        }
      );
  }

  function findUserById(req, res) {
    const userId = req.params['uid'];
    userModel
      .findUserById(userId)
      .then(function (user){
        res.json(user);
      });
    // for (let x = 0; x < this.users.length; x++) {
    //   if (this.users[x]._id === userId) {
    //     res.json(this.users[x]);
    //   }
    // }
  }

  function findUsers(req, res) {
    const username = req.query['username'];
    const password = req.query['password'];
    if(username && password) {
      userModel
        .findUserByCredentials(username, password)
        .then(function (user) {
          res.json(user);
        });
    //   const user = users.find(function (user)  {
    //     return user.username === username && user.password === password;
    //   });
    //   if(user) {
    //     res.json(user);
    //   } else {
    //     res.json({});
    //   }
    //   return;
    } else if(username) {
      userModel
        .findUserByUsername(username)
        .then(function (user) {
          res.json(user);
        });
    //   const user = users.find(function (user)  {
    //     return user.username === username;
    //   });
    //   if(user) {
    //     res.json(user);
    //   } else {
    //     res.json({});
    //   }
    //   return;
    }
    // res.json(this.users);
  }

  function createUser(req, res) {
    const user = req.body;
    userModel
      .createUser(user)
      .then(function (user) {
        res.json(user);
      });
    // user._id = Math.random();
    // this.users.push(user);
    // res.json(user);
  }

  function updateUser(req, res) {
    const userId = req.params['uid'];
    const user = req.body;
    userModel
      .updateUser(userId, user)
      .then(function (user) {
        res.json(user);
      });
    // for (let x = 0; x < this.users.length; x++) {
    //   if (this.users[x]._id === userId) {
    //     this.users[x]._id = user.id;
    //     this.users[x].firstName = user.firstName;
    //     this.users[x].lastName = user.lastName;
    //     this.users[x].password = user.password;
    //     this.users[x].username = user.username;
    //     res.json(this.users[x]);
    //   }
    // }
  }

  function deleteUser(req, res) {
    const userId = req.params['uid'];
    userModel
      .deleteUser(userId)
      .then(function () {
        res.json();
      });
    // for (let x = 0; x < this.users.length; x++) {
    //   if (this.users[x]._id === userId) {
    //     this.users.splice(x, 1);
    //   }
    // }
  }

};
