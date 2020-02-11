require("dotenv").config();
const foo = require("foo.js");

let hue: number = 0;
console.log(foo.bar);

function main() {
  $("#js-main-span").css("color", `hsl(${hue}, 100%, 50%)`);

  hue = ++hue % 360;

  requestAnimationFrame(main);
}

$("#my-button").click(function() {
  $("h1").text("Hello world!");
});

main();
