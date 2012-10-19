var B = require("src/buffer");

describe("Buffer", function() {
  describe("from array", function() {
    beforeEach(function() {
      this.buffer = new B([1, 2, 3, 4]);
    });
    it("should create a new buffer", function() {
      expect(this.buffer).toBeDefined();
    });
    it("should have the array elements", function() {
      expect(this.buffer.__bytes__).toBeLike([1, 2, 3, 4]);
    });
  });
  describe("from typed array", function() {
    beforeEach(function() {
      this.initializer = new Uint8Array([1, 2, 3, 4]);
      this.buffer = new B(this.initializer);  
    });
    it("should create a new buffer", function() {
      expect(this.buffer).toBeDefined();
    });
    it("should have the typed array elements", function() {
      expect(this.buffer.__bytes__).toBeLike([1, 2, 3, 4]);
    });
    it("should be backed by a new array buffer", function() {
      expect(this.buffer.__bytes__.buffer).not.toBe(this.initializer.buffer);
    });
  });
  describe("from array buffer", function() {
    beforeEach(function() {      
      this.initializer = new Uint8Array([1, 2, 3, 4]);
      this.buffer = new B(this.initializer.buffer);
    });
    it("should create a new buffer", function() {
      expect(this.buffer).toBeDefined();
    });
    it("should have the typed array elements", function() {
      expect(this.buffer.__bytes__).toBeLike([1, 2, 3, 4]);
    });
    it("should be backed by a new array buffer", function() {
      expect(this.buffer.__bytes__.buffer).toBe(this.initializer.buffer);
    });
  });
  describe("from string", function() {
    beforeEach(function() {
      this.buffer = new B("Hello world!");
    });
    it("should create a new buffer", function() {
      expect(this.buffer).toBeDefined();
    });
    it("should contain the initialization string", function() {
      expect(this.buffer.__bytes__).toBeLike([0x48, 0x65, 0x6c, 0x6c, 0x6f, 0x20, 0x77, 0x6f, 0x72, 0x6c, 0x64, 0x21]);
    });
  });
  describe("from initial size", function() {
    beforeEach(function() {
      this.buffer = new B(4);
    });
    it("should create a new buffer", function() {
      expect(this.buffer).toBeDefined();
    });
    it("should be initially zero-filled", function() {
      expect(this.buffer.__bytes__).toBeLike([0, 0, 0, 0]);
    });
  });
});