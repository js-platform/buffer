var B = require("src/buffer");

describe("Buffer", function() {
  describe("from array", function() {
    var b;
    beforeEach(function() {
      b = new B([1, 2, 3, 4]);
    });
    it("should create a new buffer", function() {
      expect(b).toBeDefined();
    });
    it("should be the same as a Node buffer", function() {
      expect(b.__bytes__).toBeLike(new Buffer([1, 2, 3, 4]));
    });
  });
  describe("from typed array", function() {
    var b;
    beforeEach(function() {
      b = new B(new Uint8Array([1, 2, 3, 4]));
    });
    it("should create a new buffer", function() {
      expect(b).toBeDefined();
    });
    it("should be the same as a Node buffer", function() {
      expect(b.__bytes__).toBeLike(new Buffer(new Uint8Array([1, 2, 3, 4])));
    });
  });
  describe("from string", function() {
    var b;
    beforeEach(function() {
      b = new B("Hello world!");
    });
    it("should create a new buffer", function() {
      expect(b).toBeDefined();
    });
    it("should be the same as a Node buffer", function() {
      expect(b.__bytes__).toBeLike(new Buffer("Hello world!"));
    });
  });
  describe("from initial size", function() {
    var b;
    beforeEach(function() {
      b = new B(4);
    });
    it("should create a new buffer", function() {
      expect(b).toBeDefined();
    });
    it("should be the same as a Node buffer", function() {
      var nodeBuffer = new Buffer(4);
      nodeBuffer.fill(0);
      expect(b.__bytes__).toBeLike(nodeBuffer);
    });
  });
});