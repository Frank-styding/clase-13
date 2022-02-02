let btnRandomAnimation = $("#btn-random-animation");
let player = $("#player");

function randomNumber(max, min) {
  return Math.random() * (max - min) + min;
}
function randomInt(max, min) {
  return Math.floor(randomNumber(max, min));
}
function randomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
function playerIsInViewport() {
  const rect = player[0].getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function GenerateAnimation() {
  let properties = [
    "width",
    "height",
    "left",
    "background",
    "borderRadius",
    "width",
    "top",
    "background",
    "height",
    "left",
    "background",
    "opacity",
    "top",
    "borderRadius",
    "opacity",
  ];

  let duration = randomInt(1000, 200);
  let randomProperties = [];
  let randomPropertiesAnimation = {};
  for (let i = 0; i < randomInt(properties.length, 2); i++) {
    const idx = randomInt(properties.length, 0);
    if (
      randomProperties.filter((item) => item == properties[idx]).length == 0
    ) {
      if (properties[idx] != "background") {
        randomProperties.push(properties[idx]);
        randomPropertiesAnimation[properties[idx]] =
          properties[idx] == "opacity" ? randomNumber(1, 0) : randomInt(200, 0);
      }
      player.css("background", randomColor());
    }
  }

  return player.animate(randomPropertiesAnimation, duration, () => {
    if (!playerIsInViewport()) {
      player.css({
        width: "100px",
        height: "100px",
        left: "0",
        top: "0",
        borderRadius: "0",
        opacity: "1",
      });
    }
  });
}

btnRandomAnimation.click(() => {
  GenerateAnimation();
});
