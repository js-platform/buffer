var B = require("src/buffer");

describe("concat", function() {  
  describe("list of two buffers", function() {
    beforeEach(function() {
      this.bufferList = [
        new B([1, 2, 3, 4]),
        new B([5, 6, 7, 8])
      ];
      this.buffer = B.concat(this.bufferList);
    });
    it("should return a new buffer", function() {
      expect(this.buffer instanceof B).toBe(true);
    });
    it("should be the combined size of the buffers in the list", function() {
      expect(this.buffer.__bytes__.length).toEqual(this.bufferList[0].__bytes__.length + 
                                                   this.bufferList[1].__bytes__.length);
    });
    it("should contain the values from both buffers in the correct order", function() {
      expect(this.buffer.__bytes__.slice(0, 4)).toBeLike(this.bufferList[0].__bytes__);
      expect(this.buffer.__bytes__.slice(4, 8)).toBeLike(this.bufferList[1].__bytes__);
    });
  });
  describe("list of two buffers, with total length", function() {
    beforeEach(function() {
      this.bufferList = [
        new B([1, 2, 3, 4]),
        new B([5, 6, 7, 8])
      ];
      this.buffer = B.concat(this.bufferList, 8);
    });
    it("should return a new buffer", function() {
      expect(this.buffer instanceof B).toBe(true);
    });
    it("should be the combined size of the buffers in the list", function() {
      expect(this.buffer.__bytes__.length).toEqual(8);
    });
    it("should contain the values from both buffers in the correct order", function() {
      expect(this.buffer.__bytes__.slice(0, 4)).toBeLike(this.bufferList[0].__bytes__);
      expect(this.buffer.__bytes__.slice(4, 8)).toBeLike(this.bufferList[1].__bytes__);
    });
  });
});