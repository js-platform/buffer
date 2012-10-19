var Benchmark = require("benchmark");
var B = require("src/buffer");

var suite = new Benchmark.Suite();

var b1 = new B(4);
var b2 = new Buffer(4);
var value = 0xDEADBEEF;

suite.add("BufferJS write", function() {
  b1.writeUInt32BE(value, 0);
});

suite.add("Node write", function() {
  b2.writeUInt32BE(value, 0);
});

suite.on("cycle", function(event) {
  console.log(String(event.target));
});

suite.on("complete", function() {
  console.log("Fastest is " + this.filter("fastest").pluck("name"));
});

suite.run({"async": true});