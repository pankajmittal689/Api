const hello = require('./index');
const list = require('./student');
const hi = hello.Hello();
const a = 34;
const b = 34;
const result = hello.Sum(a,b);
console.log(hi);
console.log(result);
console.log(list);