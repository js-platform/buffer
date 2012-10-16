var Benchmark = require("benchmark");
var B = require("src/b");

var suite = new Benchmark.Suite();

var b1 = new B(4);
var b2 = new Buffer(4);
var value = 0xDEADBEEF;

suite.add("BufferJS read", function() {
  for(var i = 0; i < 1000; ++ i) {}
  b1.readUInt32BE(0);
});

suite.add("Node read", function() {
  b2.readUInt32BE(0);
});

suite.on("cycle", function(event) {
  console.log(String(event.target));
});

suite.on("complete", function() {
  console.log("Fastest is " + this.filter("fastest").pluck("name"));
});

suite.run({"async": true});