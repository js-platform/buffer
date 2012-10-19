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
    var b, i; 
    beforeEach(function() {
      i = new Uint8Array([1, 2, 3, 4]);
      b = new B(i);      
    });
    it("should create a new buffer", function() {
      expect(b).toBeDefined();
    });
    it("should have the typed array elements", function() {
      expect(b.__bytes__).toBeLike([1, 2, 3, 4]);
    });
    it("should be backed by a new array buffer", function() {
      expect(b.__bytes__.buffer).not.toBe(i.buffer);
    });
  });
  describe("from array buffer", function() {
    var b, i;
    beforeEach(function() {      
      i = new Uint8Array([1, 2, 3, 4]);
      b = new B(i.buffer);
    });
    it("should create a new buffer", function() {
      expect(b).toBeDefined();
    });
    it("should have the typed array elements", function() {
      expect(b.__bytes__).toBeLike([1, 2, 3, 4]);
    });
    it("should be backed by a new array buffer", function() {
      expect(b.__bytes__.buffer).toBe(i.buffer);
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