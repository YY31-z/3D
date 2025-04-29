let columns = 10;
let rows = 10;
let testo = "land";
//

let font;

function preload() {
  font = loadFont("./assets/InputMonoCondensed-Light.ttf");
}

//
let cam;
function setup() {
  createCanvas(windowWidth, windowHeight, "webgl");
  angleMode(DEGREES);

  textFont(font);
  textSize(height / 10);

  cam = createCamera();
  cam.setPosition(0, -550, 500);
  cam.lookAt(0, 0, 200);
}

//

function draw() {
  background("black");
  orbitControl();

  let angle = 360 / columns;
  let diameter = textSize();

  fill("pink");

  rotateY(-frameCount);
  for (let i = 0; i < columns; i++) {
    push();
    rotateY(angle * i);
    translate(diameter, 0, height / 2);
    for (let j = 0; j < rows; j++) {
      const a = cos(frameCount * 5 + j * 20);
      const m = map(a, -1, 1, 0, textSize());
      push();
      translate(m, textSize() * (j - rows / 2), 0);
      text(testo, 0, 0);
      pop();
    }
    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
