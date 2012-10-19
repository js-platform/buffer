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
    it("should have the array elements", function() {
      expect(b.__bytes__).toBeLike([1, 2, 3, 4]);
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
    it("should have the typed array elements", function() {
      expect(b.__bytes__).toBeLike([1, 2, 3, 4]);
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
    it("should contain the initialization string", function() {
      expect(b.toString()).toBeLike("Hello world!");
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
    it("should be initially zero-filled", function() {
      expect(b.__bytes__).toBeLike([0, 0, 0, 0]);
    });
  });
});