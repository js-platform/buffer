var B = require("src/buffer");

describe("slice", function() {
  beforeEach(function() {
    this.buffer = new B([1, 2, 3, 4]);    
  });
  describe("with no arguments", function() {
    it("should be the same size as the original", function() {
      expect(this.buffer.slice().length()).toEqual(this.buffer.length());
    });
    it("should have the same array buffer as the original", function() {
      expect(this.buffer.slice().__bytes__.buffer).toBe(this.buffer.__bytes__.buffer);
    });
  });
  describe("with start offset", function() {
    it("should have the correct size", function() {
      expect(this.buffer.slice(1).length()).toEqual(this.buffer.length()-1);
    });
    it("should have the same array buffer as the original", function() {
      expect(this.buffer.slice(2).__bytes__.buffer).toBe(this.buffer.__bytes__.buffer);
    });
  });
  describe("with start and end offsets", function() {
    it("should have the correct size", function() {
      expect(this.buffer.slice(1, 2).length()).toEqual(1);
    });
    it("should have the same array buffer as the original", function() {
      expect(this.buffer.slice(1, 3).__bytes__.buffer).toBe(this.buffer.__bytes__.buffer);
    });
  });
});