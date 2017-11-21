module.exports = function (app) {
  const db = require("./model/models.server.js");
  require("./services/comedian.service.server.js")(app);
  require("./services/critic.service.server.js")(app);
  require("./services/bit.service.server.js")(app);
  require("./services/review.service.server.js")(app);
};
