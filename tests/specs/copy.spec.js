var B = require("src/buffer");

describe("copy", function() {
  beforeEach(function() {
    this.buffer = new B([1, 2, 3, 4]);
  });
  it("should have copy defined", function() {
    expect(this.buffer.copy).toBeDefined();
  });
  describe("with target buffer", function() {
    beforeEach(function() {
      this.target = new B(4);
      this.buffer.copy(this.target);
    });
    it("should have the same values as the original", function() {
      expect(this.target.__bytes__).toBeLike(this.buffer.__bytes__);
    });
    it("should not have the same array buffer", function() {
      expect(this.target.__bytes__.buffer).not.toBe(this.buffer.__bytes__.buffer);
    });
  });
  describe("with target buffer and target start offset", function() {
    beforeEach(function() {
      this.target = new B(5);
      this.buffer.copy(this.target, 1);
    });
    it("should copy entire original buffer to target offset", function() {
      expect(this.target.__bytes__[0]).toEqual(0);
      expect(this.target.__bytes__.slice(1)).toBeLike(this.buffer.__bytes__);
    });
    it("should not have the same array buffer", function() {
      expect(this.target.__bytes__.buffer).not.toBe(this.buffer.__bytes__.buffer);
    });
  });
  describe("with target buffer, target start offset and source start offset", function() {
    beforeEach(function() {
      this.target = new B(5);
      this.buffer.copy(this.target, 1, 1);
    });
    it("should copy the original buffer starting at the offset", function() {
      expect(this.target.__bytes__[0]).toEqual(0);
      expect(this.target.__bytes__.slice(1, 4)).toBeLike(this.buffer.__bytes__.slice(1, 4));
    });
    it("should not have the same array buffer", function() {
      expect(this.target.__bytes__.buffer).not.toBe(this.buffer.__bytes__.buffer);
    });
  });
  describe("with target buffer, target start offset, and source start and end offsets", function() {
    beforeEach(function() {
      this.target = new B(5);
      this.buffer.copy(this.target, 1, 1, 3);
    });
    it("should copy the original buffer starting at the offset", function() {
      expect(this.target.__bytes__[0]).toEqual(0);
      expect(this.target.__bytes__.slice(1, 3)).toBeLike(this.buffer.__bytes__.slice(1, 3));
      expect(this.target.__bytes__[4]).toEqual(0);
    });
    it("should not have the same array buffer", function() {
      expect(this.target.__bytes__.buffer).not.toBe(this.buffer.__bytes__.buffer);
    });
  });
});