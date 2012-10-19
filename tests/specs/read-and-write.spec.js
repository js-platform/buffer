var B = require("src/buffer");

describe("read", function() {
  beforeEach(function() {
    this.buffer = new B([0xde, 0xad, 0xbe, 0xef, 0xb0, 0x0b, 0x13, 0xe5]);
  });
  describe("8-bit", function() {
    describe("unsigned", function() {
      it("should be defined", function() {
        expect(this.buffer.readUInt8).toBeDefined();
      });
      it("should read the correct unsigned 8-bit value", function() {
        expect(this.buffer.readUInt8(7)).toEqual(229);
      });
      it("should assert when option is set and index is too large", function() {
        expect(this.buffer.readUInt8.bind(null, 9, true)).toThrow();
      });
      it("should assert when option is set and index is too small", function() {
        expect(this.buffer.readUInt8.bind(null, -1, true)).toThrow();
      });
    });
    describe("signed", function() {
      it("should be defined", function() {
        expect(this.buffer.readInt8).toBeDefined();
      });
      it("should read the correct unsigned 8-bit value", function() {
        expect(this.buffer.readInt8(7)).toEqual(-27);
      });
      it("should assert when option is set and index is too large", function() {
        expect(this.buffer.readInt8.bind(null, 9, true)).toThrow();
      });
      it("should assert when option is set and index is too small", function() {
        expect(this.buffer.readInt8.bind(null, -1, true)).toThrow();
      });
    });
  });
  describe("16-bit", function() {
    describe("unsigned", function() {
      describe("big endian", function() {
        it("should be defined", function() {
          expect(this.buffer.readUInt16BE).toBeDefined();
        });
        it("should read the correct unsigned 16-bit big endian value", function() {
          expect(this.buffer.readUInt16BE(1)).toEqual(44478);
        });
        it("should assert when option is set and index is too large", function() {
          expect(this.buffer.readUInt16BE.bind(null, 9, true)).toThrow();
        });
        it("should assert when option is set and index is too small", function() {
          expect(this.buffer.readUInt16BE.bind(null, -1, true)).toThrow();
        });
      });
      describe("little endian", function() {
        it("should be defined", function() {
          expect(this.buffer.readUInt16LE).toBeDefined();
        });
        it("should read the correct unsigned 16-bit little endian value", function() {
          expect(this.buffer.readUInt16LE(2)).toEqual(61374);
        });
        it("should assert when option is set and index is too large", function() {
          expect(this.buffer.readUInt16LE.bind(null, 9, true)).toThrow();
        });
        it("should assert when option is set and index is too small", function() {
          expect(this.buffer.readUInt16LE.bind(null, -1, true)).toThrow();
        });
      });
    });
    describe("signed", function() {
      describe("big endian", function() {
        it("should be defined", function() {
          expect(this.buffer.readInt16BE).toBeDefined();
        });
        it("should read the correct signed 16-bit big endian value", function() {
          expect(this.buffer.readInt16BE(1)).toEqual(-21058);
        });
        it("should assert when option is set and index is too large", function() {
          expect(this.buffer.readInt16BE.bind(null, 9, true)).toThrow();
        });
        it("should assert when option is set and index is too small", function() {
          expect(this.buffer.readInt16BE.bind(null, -1, true)).toThrow();
        });
      });
      describe("little endian", function() {
        it("should be defined", function() {
          expect(this.buffer.readInt16LE).toBeDefined();
        });
        it("should read the correct signed 16-bit little endian value", function() {
          expect(this.buffer.readInt16LE(2)).toEqual(-4162);
        });
        it("should assert when option is set and index is too large", function() {
          expect(this.buffer.readInt16LE.bind(null, 9, true)).toThrow();
        });
        it("should assert when option is set and index is too small", function() {
          expect(this.buffer.readInt16LE.bind(null, -1, true)).toThrow();
        });
      });
    });
  });
  describe("32-bit", function() {
    describe("unsigned", function() {
      describe("big endian", function() {
        it("should be defined", function() {
          expect(this.buffer.readUInt32BE).toBeDefined();
        });
        it("should read the correct unsigned 32-bit big endian value", function() {
          expect(this.buffer.readUInt32BE(0)).toEqual(3735928559);
        });
        it("should assert when option is set and index is too large", function() {
          expect(this.buffer.readUInt32BE.bind(null, 9, true)).toThrow();
        });
        it("should assert when option is set and index is too small", function() {
          expect(this.buffer.readUInt32BE.bind(null, -1, true)).toThrow();
        });
      });
      describe("little endian", function() {
        it("should be defined", function() {
          expect(this.buffer.readUInt32LE).toBeDefined();
        });
        it("should read the correct unsigned 32-bit little endian value", function() {
          expect(this.buffer.readUInt32LE(3)).toEqual(319533295);
        });
        it("should assert when option is set and index is too large", function() {
          expect(this.buffer.readUInt32LE.bind(null, 9, true)).toThrow();
        });
        it("should assert when option is set and index is too small", function() {
          expect(this.buffer.readUInt32LE.bind(null, -1, true)).toThrow();
        });
      });
    });
    describe("signed", function() {
      describe("big endian", function() {
        it("should be defined", function() {
          expect(this.buffer.readInt32BE).toBeDefined();
        });
        it("should read the correct unsigned 32-bit big endian value", function() {
          expect(this.buffer.readInt32BE(0)).toEqual(-559038737);
        });
        it("should assert when option is set and index is too large", function() {
          expect(this.buffer.readInt32BE.bind(null, 9, true)).toThrow();
        });
        it("should assert when option is set and index is too small", function() {
          expect(this.buffer.readInt32BE.bind(null, -1, true)).toThrow();
        });
      });
      describe("little endian", function() {
        it("should be defined", function() {
          expect(this.buffer.readInt32LE).toBeDefined();
        });
        it("should read the correct unsigned 32-bit little endian value", function() {
          expect(this.buffer.readInt32LE(3)).toEqual(319533295);
        });
        it("should assert when option is set and index is too large", function() {
          expect(this.buffer.readInt32LE.bind(null, 9, true)).toThrow();
        });
        it("should assert when option is set and index is too small", function() {
          expect(this.buffer.readInt32LE.bind(null, -1, true)).toThrow();
        });
      });
    });
  });
  describe("float", function() {
    describe("big endian", function() {
      it("should be defined", function() {
        expect(this.buffer.readFloatBE).toBeDefined();
      });
      it("should read the correct 32-bit float big endian value", function() {
        expect(this.buffer.readFloatBE(4)).toEqual(-5.059617724789689e-10);
      });
      it("should assert when option is set and index is too large", function() {
        expect(this.buffer.readFloatBE.bind(null, 9, true)).toThrow();
      });
      it("should assert when option is set and index is too small", function() {
        expect(this.buffer.readFloatBE.bind(null, -1, true)).toThrow();
      });
    });
    describe("little endian", function() {
      it("should be defined", function() {
        expect(this.buffer.readFloatLE).toBeDefined();
      });
      it("should read the correct 32-bit float little endian value", function() {
        expect(this.buffer.readFloatLE(2)).toEqual(6.815345799386754e-32);
      });
      it("should assert when option is set and index is too large", function() {
        expect(this.buffer.readFloatLE.bind(null, 9, true)).toThrow();
      });
      it("should assert when option is set and index is too small", function() {
        expect(this.buffer.readFloatLE.bind(null, -1, true)).toThrow();
      });
    });
  });
  describe("double", function() {
    describe("big endian", function() {
      it("should be defined", function() {
        expect(this.buffer.readDoubleBE).toBeDefined();
      });
      it("should read the correct 64-bit float big endian value", function() {
        expect(this.buffer.readDoubleBE(0)).toEqual(-1.1885958146352457e+148);
      });
      it("should assert when option is set and index is too large", function() {
        expect(this.buffer.readDoubleBE.bind(null, 9, true)).toThrow();
      });
      it("should assert when option is set and index is too small", function() {
        expect(this.buffer.readDoubleBE.bind(null, -1, true)).toThrow();
      });
    });
    describe("little endian", function() {
      it("should be defined", function() {
        expect(this.buffer.readDoubleLE).toBeDefined();
      });
      it("should read the correct 64-bit float little endian value", function() {
        expect(this.buffer.readDoubleLE(0)).toEqual(-7.717802570370669e+178);
      });
      it("should assert when option is set and index is too large", function() {
        expect(this.buffer.readDoubleLE.bind(null, 9, true)).toThrow();
      });
      it("should assert when option is set and index is too small", function() {
        expect(this.buffer.readDoubleLE.bind(null, -1, true)).toThrow();
      });
    });
  });
});
describe("write", function() {
  beforeEach(function() {
    this.buffer = new B(8);
  });
  describe("8-bit", function() {
    describe("unsigned", function() {
      it("should write the correct unsigned 8-bit value", function() {
        this.buffer.writeUInt8(0xde, 1);
        expect(this.buffer.__bytes__).toBeLike([0x0, 0xde, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]);
      });
      it("should assert when option is set and index is too large", function() {
        expect(this.buffer.writeUInt8.bind(null, 0x1, 9)).toThrow();
      });
      it("should assert when option is set and index is too small", function() {
        expect(this.buffer.writeUInt8.bind(null, 0x1, -1)).toThrow();
      });
    });
    describe("signed", function() {
      it("should write the correct signed 8-bit value", function() {
        this.buffer.writeUInt8(0xde, 1);
        expect(this.buffer.__bytes__).toBeLike([0x0, 0xde, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]);
      });
      it("should assert when option is set and index is too large", function() {
        expect(this.buffer.writeUInt8.bind(null, 0x1, 9)).toThrow();
      });
      it("should assert when option is set and index is too small", function() {
        expect(this.buffer.writeUInt8.bind(null, 0x1, -1)).toThrow();
      });
    });
  });
  describe("16-bit", function() {
    describe("unsigned", function() {
      describe("big endian", function() {
        it("should write the correct unsigned 16-bit big endian value", function() {
          this.buffer.writeUInt16BE(0xdead, 1);
          expect(this.buffer.__bytes__).toBeLike([0x0, 0xde, 0xad, 0x0, 0x0, 0x0, 0x0, 0x0]);
        });
        it("should assert when option is set and index is too large", function() {
          expect(this.buffer.writeUInt16BE.bind(null, 0x1, 9)).toThrow();
        });
        it("should assert when option is set and index is too small", function() {
          expect(this.buffer.writeUInt16BE.bind(null, 0x1, -1)).toThrow();
        });
      });
      describe("little endian", function() {
        it("should write the correct unsigned 16-bit little endian value", function() {
          this.buffer.writeUInt16LE(0xdead, 2);
          expect(this.buffer.__bytes__).toBeLike([0x0, 0x0, 0xad, 0xde, 0x0, 0x0, 0x0, 0x0]);
        });
        it("should assert when option is set and index is too large", function() {
          expect(this.buffer.writeUInt16LE.bind(null, 0x1, 9)).toThrow();
        });
        it("should assert when option is set and index is too small", function() {
          expect(this.buffer.writeUInt16LE.bind(null, 0x1, -1)).toThrow();
        });
      });
    });
  });
  describe("32-bit", function() {
    describe("unsigned", function() {
      describe("big endian", function() {
        it("should write the correct unsigned 32-bit big endian value", function() {
          this.buffer.writeUInt32BE(0xdeadbeef, 1);
          expect(this.buffer.__bytes__).toBeLike([0x0, 0xde, 0xad, 0xbe, 0xef, 0x0, 0x0, 0x0]);
        });
        it("should assert when option is set and index is too large", function() {
          expect(this.buffer.writeUInt32BE.bind(null, 0x1, 9)).toThrow();
        });
        it("should assert when option is set and index is too small", function() {
          expect(this.buffer.writeUInt32BE.bind(null, 0x1, -1)).toThrow();
        });
      });
      describe("little endian", function() {
        it("should write the correct unsigned 32-bit little endian value", function() {
          this.buffer.writeUInt32LE(0xdeadbeef, 2);
          expect(this.buffer.__bytes__).toBeLike([0x0, 0x0, 0xef, 0xbe, 0xad, 0xde, 0x0, 0x0]);
        });
        it("should assert when option is set and index is too large", function() {
          expect(this.buffer.writeUInt32LE.bind(null, 0x1, 9)).toThrow();
        });
        it("should assert when option is set and index is too small", function() {
          expect(this.buffer.writeUInt32LE.bind(null, 0x1, -1)).toThrow();
        });
      });
    });    
  });
  describe("float", function() {
    describe("big endian", function() {
      it("should write the correct 32-bit float big endian value", function() {
        this.buffer.writeFloatBE(100, 1);
        expect(this.buffer.__bytes__).toBeLike([0x0, 0x42, 0xc8, 0x00, 0x00, 0x0, 0x0, 0x0]);
      });
      it("should assert when option is set and index is too large", function() {
        expect(this.buffer.writeFloatBE.bind(null, 0x1, 9)).toThrow();
      });
      it("should assert when option is set and index is too small", function() {
        expect(this.buffer.writeFloatBE.bind(null, 0x1, -1)).toThrow();
      });
    });
    describe("little endian", function() {
      it("should write the correct 32-bit float big little value", function() {
        this.buffer.writeFloatLE(100, 2);
        expect(this.buffer.__bytes__).toBeLike([0x0, 0x0, 0x0, 0x0, 0xc8, 0x42, 0x0, 0x0]);
      });
      it("should assert when option is set and index is too large", function() {
        expect(this.buffer.writeFloatLE.bind(null, 0x1, 9)).toThrow();
      });
      it("should assert when option is set and index is too small", function() {
        expect(this.buffer.writeFloatLE.bind(null, 0x1, -1)).toThrow();
      });
    });
  });
  describe("double", function() {
    describe("big endian", function() {
      it("should write the correct 64-bit float big endian value", function() {
        this.buffer.writeDoubleBE(100, 0);
        expect(this.buffer.__bytes__).toBeLike([0x40, 0x59, 0x0, 0x00, 0x00, 0x0, 0x0, 0x0]);
      });
      it("should assert when option is set and index is too large", function() {
        expect(this.buffer.writeDoubleBE.bind(null, 0x1, 9)).toThrow();
      });
      it("should assert when option is set and index is too small", function() {
        expect(this.buffer.writeDoubleBE.bind(null, 0x1, -1)).toThrow();
      });
    });
    describe("little endian", function() {
      it("should write the correct 64-bit float big little value", function() {
        this.buffer.writeDoubleLE(100, 0);
        expect(this.buffer.__bytes__).toBeLike([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x59, 0x40]);
      });
      it("should assert when option is set and index is too large", function() {
        expect(this.buffer.writeDoubleLE.bind(null, 0x1, 9)).toThrow();
      });
      it("should assert when option is set and index is too small", function() {
        expect(this.buffer.writeDoubleLE.bind(null, 0x1, -1)).toThrow();
      });
    });
  });
});