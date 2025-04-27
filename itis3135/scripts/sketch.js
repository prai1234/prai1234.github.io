function setup() {
  // Create the canvas
  createCanvas(710, 400);

  // Set background to black
  background(0);

  // Set width of the lines
  strokeWeight(10);

  // Set color mode to hue-saturation-brightness (HSB)
  colorMode(HSB);

  // Set screen reader accessible description
  describe('A blank canvas where the user draws by dragging the mouse');
}

function mouseDragged() {
  // Set the color based on the mouse position, and draw a line
  // from the previous position to the current position
  let lineHue = mouseX - mouseY;
  stroke(lineHue, 90, 90);
  line(pmouseX, pmouseY, mouseX, mouseY);
}
function setup() {
  // Create the canvas
  createCanvas(710, 400);

  // Create a reset button
  let resetButton = createButton('Reset Canvas');
  resetButton.position(10, 10);
  resetButton.mousePressed(resetCanvas);

  // Set initial background to black
  resettCanvas();

  // Set width of the lines
  strokeWeight(10);

  // Set color mode to hue-saturation-brightness (HSB)
  colorMode(HSB);

  // Set screen reader accessible description
  describe('A blank canvas where the user draws by dragging the mouse. There is a reset button in the top left corner.');
}

function mouseDragged() {
  // Set the color based on the mouse position, and draw a line
  // from the previous position to the current position
  let lineHue = mouseX - mouseY;
  stroke(lineHue, 90, 90);
  line(pmouseX, pmouseY, mouseX, mouseY);
}

function resettCanvas() {
  background(0);
}

  // Create a reset button with styling
  let resetButton = createButton('Reset Canvas');
  resetButton.position(10, 10);
  resetButton.mousePressed(resettCanvas);
  resetButton.style('padding', '5px 10px');
  resetButton.style('background-color', '#333');
  resetButton.style('color', 'white');
  resetButton.style('border', 'none');
  resetButton.style('border-radius', '4px');
