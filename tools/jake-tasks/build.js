var fs = require("fs");

module.exports = function() {
  var cmds = [
              "cd docs && make html",
              "uglifyjs --output dist/b.min.js src/b.js"
              ];
  var callback = function() {
  };
  var opts = {
      stdout: true,
      stderr: true,
      breakOnError: false
  };

  if(!fs.existsSync("dist")) {
    fs.mkdirSync("dist");
  }
  if(fs.existsSync("dist/b.min.js")) {
    fs.unlinkSync("dist/b.min.js");
  }
  jake.exec( cmds, callback, opts );
};
