//npm init-- create a nodejs project
//npmi--- install libraries

const cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: "I'm a moooodule",
    e: "00",
    T: "U ",
  })
);
function square(x) {
  // local variable x
  return x + x;
}
console.log(square(10));
