var B = require("src/buffer");

describe("length", function() {
  beforeEach(function() {
    this.buffer = new B([1, 2, 3, 4]);
  });
  it("should have length defined", function() {
    expect(this.buffer.length).toBeDefined();
  });
  it("should return the size of this buffer", function() {
    expect(this.buffer.length()).toEqual(this.buffer.__bytes__.length);
  });
});