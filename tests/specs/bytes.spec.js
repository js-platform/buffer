var B = require("src/buffer");

describe("bytes", function() {
  beforeEach(function() {
    this.buffer = new B([1, 2, 3, 4]);
  });
  it("should have bytes defined", function() {
    expect(this.buffer.bytes).toBeDefined();
  });
  it("should return a Uint8Array for this buffer", function() {
    expect(this.buffer.bytes()).toBe(this.buffer.__bytes__);
    expect(this.buffer.bytes() instanceof Uint8Array).toBe(true);
  });
});