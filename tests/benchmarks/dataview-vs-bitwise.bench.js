var Benchmark = require("benchmark");
var suite = new Benchmark.Suite();

var buffer1 = new Uint8Array(4);
var buffer2 = new ArrayBuffer(4);
var dataview = new DataView(buffer2);
var value = 0xDEADBEEF;

suite.add("Bitwise operations", function() {
  buffer1[0] = value>>24 & 0xFF;
  buffer1[1] = value>>16 & 0xFF;
  buffer1[2] = value>>8 & 0xFF;
  buffer1[3] = value & 0xFF;
});

suite.add("Dataview", function() {
  dataview.setUint32(0, value, false);
});

suite.on("cycle", function(event) {
  console.log(String(event.target));
});

suite.on("complete", function() {
  console.log("Fastest is " + this.filter("fastest").pluck("name"));
});

suite.run({"async": true});