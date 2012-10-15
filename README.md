# BufferJS

[![Build Status](https://secure.travis-ci.org/gladiusjs/bufferjs.png?branch=develop)](http://travis-ci.org/gladiusjs/bufferjs)

BufferJS provides a portable binary buffer implementation for JavaScript environments that support typed arrays. It's designed to be useful in high-performance computing or low-level programming applications. It's also compatible with Node.js buffers.

## API

The API is almost identical to the [Buffer API](http://nodejs.org/api/buffer.html) in Node.js, with a few key differences.

* Access to the underlying buffer is done through get() and set() methods, or alternatively by accessing the __buffer__ property directly.
* At this time, only UTF-8 strings are supported. Values passed into optEncoding parameters are ignored, and UTF-8 is assumed. If you need other encodings, please submit a pull request!
* BufferJS buffers are zero-filled on creation, but Node.js buffers are not.

## Examples

1. Create a buffer and store a unicode string

        var buffer = new Buffer("\u00bd + \u00bc = \u00be");

2. Write a string into a buffer and read the first byte

        buffer.write("Hello world!");
        buffer.readUInt8(0);

## Reference

 I haven't written pretty docs yet; Sorry.