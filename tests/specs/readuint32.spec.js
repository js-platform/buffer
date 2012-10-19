var B = require("src/buffer");

describe("readUInt32", function() {
  beforeEach(function() {
    this.buffer = new B([1, 2, 3, 4]);
  });
  it("should read the correct BE value", function() {
    expect(this.buffer.readUInt32BE(0)).toEqual(16909060);
  });
  it("should read the correct LE value", function() {
    expect(this.buffer.readUInt32LE(0)).toEqual(67305985);
  });
});