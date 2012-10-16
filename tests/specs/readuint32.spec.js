var B = require("src/b");

describe("readUInt32", function() {
  describe("BE", function() {
    it("should be the same as a Node buffer", function() {      
      expect(new B([1, 2, 3, 4]).readUInt32BE(0)).toBeLike(new Buffer([1, 2, 3, 4]).readUInt32BE(0));
    });
  });
  describe("LE", function() {
    it("should be the same as a Node buffer", function() {      
      expect(new B([1, 2, 3, 4]).readUInt32LE(0)).toBeLike(new Buffer([1, 2, 3, 4]).readUInt32LE(0));
    });
  });
});