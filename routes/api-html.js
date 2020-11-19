// Copying this from class activity 23

var path = require("path");

module.exports = function(app) {
  app.get("/", function(req, res) {
      //Changed the location of route and file name
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
  app.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });
  app.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });
};