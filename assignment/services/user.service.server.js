module.exports = function (app) {

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

  function findUserById(req, res) {
    const userId = req.params['uid'];
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x]._id === userId) {
        res.json(this.users[x]);
      }
    }
  }

  function findUsers(req, res) {
    const username = req.query['username'];
    const password = req.query['password'];
    if(username && password) {
      const user = users.find(function (user)  {
        return user.username === username && user.password === password;
      });
      if(user) {
        res.json(user);
      } else {
        res.json({});
      }
      return;
    } else if(username) {
      const user = users.find(function (user)  {
        return user.username === username;
      });
      if(user) {
        res.json(user);
      } else {
        res.json({});
      }
      return;
    }
    res.json(this.users);
  }

  function createUser(req, res) {
    const user = req.body;
    user._id = Math.random();
    this.users.push(user);
    res.json(user);
  }

  function updateUser(req, res) {
    const userId = req.params['uid'];
    const user = req.body;
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x]._id === userId) {
        this.users[x]._id = user.id;
        this.users[x].firstName = user.firstName;
        this.users[x].lastName = user.lastName;
        this.users[x].password = user.password;
        this.users[x].username = user.username;
        res.json(this.users[x]);
      }
    }
  }

  function deleteUser(req, res) {
    const userId = req.params['uid'];
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x]._id === userId) {
        this.users.splice(x, 1);
      }
    }
  }

};
