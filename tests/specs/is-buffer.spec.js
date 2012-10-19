var B = require("src/buffer");

describe("isBuffer", function() {
  it("should have isBuffer defined", function() {
    expect(B.isBuffer).toBeDefined();
  });
  it("should return true for buffers from this library", function() {
    expect(B.isBuffer(new B(4))).toBe(true);
    expect(B.isBuffer(new B([1, 2, 3, 4]))).toBe(true);
    expect(B.isBuffer(new B("Hello world!"))).toBe(true);
  });
  it("should return false for buffers not from this library", function() {
    expect(B.isBuffer(new Buffer(4))).toBe(false);
  });
});