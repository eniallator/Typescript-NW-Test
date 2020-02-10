require("dotenv").config();

let hue: number = 0;

function main() {
  $("#js-main-span").css("color", `hsl(${hue}, 100%, 50%)`);

  hue++;
  hue %= 360;

  requestAnimationFrame(main);
}

main();
