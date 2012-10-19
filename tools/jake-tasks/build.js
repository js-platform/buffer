var fs = require("fs");

module.exports = function() {
  var cmds = [
              "cd docs && make html",
              "uglifyjs --output dist/buffer.min.js src/buffer.js"
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
  if(fs.existsSync("dist/buffer.min.js")) {
    fs.unlinkSync("dist/buffer.min.js");
  }
  jake.exec( cmds, callback, opts );
};
