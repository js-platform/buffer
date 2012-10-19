var B = require("src/buffer");

describe("read", function() {
  beforeEach(function() {
    this.buffer = new B([0xde, 0xad, 0xbe, 0xef, 0xb0, 0x0b, 0x13, 0xe5]);
  });
  it("should read the correct unsigned 8-bit value", function() {
    expect(this.buffer.readUInt8(7)).toEqual(0x0 | 229);
  });
  it("should read the correct unsigned 16-bit big endian value", function() {
    expect(this.buffer.readUInt16BE(1)).toEqual(0x0 | 44478);
  });
  it("should read the correct unsigned 16-bit little endian value", function() {
    expect(this.buffer.readUInt16LE(2)).toEqual(0x0 | 61374);
  });
  it("should read the correct unsigned 32-bit big endian value", function() {
    expect(this.buffer.readUInt32BE(0)).toEqual(0x0 | 3735928559);
  });
  it("should read the correct unsigned 32-bit little endian value", function() {
    expect(this.buffer.readUInt32LE(3)).toEqual(0x0 | 319533295);
  });
});

describe("write", function() {
  beforeEach(function() {
    this.buffer = new B(8);
  });
  it("should write the correct unsigned 8-bit value", function() {
    this.buffer.writeUInt8(0xde, 1);
    expect(this.buffer.__bytes__).toBeLike([0x0, 0xde, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]);
  });
  it("should write the correct unsigned 16-bit big endian value", function() {
    this.buffer.writeUInt16BE(0xdead, 1);
    expect(this.buffer.__bytes__).toBeLike([0x0, 0xde, 0xad, 0x0, 0x0, 0x0, 0x0, 0x0]);
  });
  it("should write the correct unsigned 16-bit little endian value", function() {
    this.buffer.writeUInt16LE(0xdead, 2);
    expect(this.buffer.__bytes__).toBeLike([0x0, 0x0, 0xad, 0xde, 0x0, 0x0, 0x0, 0x0]);
  });
  it("should write the correct unsigned 32-bit big endian value", function() {
    this.buffer.writeUInt32BE(0xdeadbeef, 1);
    expect(this.buffer.__bytes__).toBeLike([0x0, 0xde, 0xad, 0xbe, 0xef, 0x0, 0x0, 0x0]);
  });
  it("should write the correct unsigned 32-bit little endian value", function() {
    this.buffer.writeUInt32LE(0xdeadbeef, 2);
    expect(this.buffer.__bytes__).toBeLike([0x0, 0x0, 0xef, 0xbe, 0xad, 0xde, 0x0, 0x0]);
  });
});