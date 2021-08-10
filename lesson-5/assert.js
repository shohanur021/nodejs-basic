var assert = require('assert');

function add(a,b){
   return a+b;
}

var expected_1 = add(7,3)
assert(expected_1 === 10, "this is not 10");

var expected_2 = add(6,9)
assert.ok(expected_2 === 15, "expected-2 is wrong");

var assert = require('assert');
var x = { a : { n: 0 } };
var y = { a : { n: 0 } };
var z = { a : { n: 1 } };
assert.deepEqual(x, y); 
// assert.deepEqual(x, z,'x & z are not deep equal (!=)');

var assert = require('assert');
var x_2 = { a : { n: 0 } };
var y_2 = { a : { n: 0 } };
var z_2 = { a : { n: '0' } };
assert.deepStrictEqual(x_2, y_2); 
// assert.deepStrictEqual(x_2, z_2,'x & z are not deep equal (!==)');


assert.equal(50, 50); 
assert.equal(50, "50"); 
// assert.strictEqual(50, "50","checks like (50 !== '50')"); 

assert.notStrictEqual(50, 70); 
// assert.notEqual(50, "50","works like (50 != '50')");
assert.notStrictEqual(50, "50");