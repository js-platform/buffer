var B = require("src/buffer");

describe("writeUInt32", function() {
  beforeEach(function() {
    this.buffer = new B(4);
  });
  it("should write the correct BE value", function() {
    this.buffer.writeUInt32BE(0xdeadbeef, 0);
    expect(this.buffer.__bytes__).toBeLike([0xde, 0xad, 0xbe, 0xef]);
  });
  it("should write the correct LE value", function() {
    this.buffer.writeUInt32LE(0xdeadbeef, 0);
    expect(this.buffer.__bytes__).toBeLike([0xef, 0xbe, 0xad, 0xde]);
  });
});