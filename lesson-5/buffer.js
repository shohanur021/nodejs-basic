var buf = Buffer.alloc(15,'d');
console.log(buf);
// console.log(typeof(buf));

var buf_2 = Buffer.allocUnsafe(10);
console.log(buf_2);

var len = Buffer.byteLength(buf);
console.log(len);


var buf1 = Buffer.from('abc');
var buf2 = Buffer.from('abc');
var x = Buffer.compare(buf1, buf2);
console.log(x);

var buf1 = Buffer.from('a');
var buf2 = Buffer.from('b');
var x = Buffer.compare(buf1, buf2);
console.log(x);

var buf1 = Buffer.from('b');
var buf2 = Buffer.from('a');
var x = Buffer.compare(buf1, buf2);
console.log(x);


var buf1 = Buffer.from('a');
var buf2 = Buffer.from('b');
var buf3 = Buffer.from('c');
var arr = [buf1, buf2, buf3];
var buf = Buffer.concat(arr);
console.log(buf);


var buf1 = Buffer.from('abcdefghijkl');
var buf2 = Buffer.from('HELLO');
buf2.copy(buf1, 2);
console.log(buf1.toString());

var buf1 = Buffer.from('abcdefghijkl');
var buf2 = Buffer.from('HELLO');
buf2.copy(buf1, 2, 0, 2);
console.log(buf1.toString());
