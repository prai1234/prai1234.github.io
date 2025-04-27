function setup() {
  createCanvas(400, 400); // Create a 400x400 canvas
  background(255); // Set the background to white
}

function draw() {
  // Pikachu's body
  fill(255, 204, 0); // Yellow color
  noStroke();
  ellipse(200, 250, 150, 200); // Main body

  // Pikachu's face
  fill(255, 204, 0);
  ellipse(200, 180, 100, 100); // Face

  // Eyes
  fill(0); // Black color for the eyes
  ellipse(175, 170, 20, 30); // Left eye
  ellipse(225, 170, 20, 30); // Right eye

  // Nose
  fill(0);
  triangle(200, 190, 195, 210, 205, 210); // Nose

  // Mouth
  noFill();
  stroke(0);
  strokeWeight(2);
  arc(200, 215, 50, 20, 0, PI); // Smile

  // Cheeks
  fill(255, 0, 0); // Red for cheeks
  noStroke();
  ellipse(150, 200, 30, 30); // Left cheek
  ellipse(250, 200, 30, 30); // Right cheek

  // Ears
  fill(0); // Black for the ears
  triangle(130, 110, 170, 70, 170, 130); // Left ear
  triangle(270, 110, 230, 70, 230, 130); // Right ear

  // Pikachu's arms
  fill(255, 204, 0); // Yellow arms
  ellipse(120, 250, 50, 100); // Left arm
  ellipse(280, 250, 50, 100); // Right arm

  // Pikachu's tail
  stroke(139, 69, 19); // Brown color for the tail
  strokeWeight(10);
  noFill();
  beginShape();
  vertex(180, 300); // Tail start point
  vertex(150, 350); // Tail curve
  vertex(200, 370); // Tail curve
  vertex(220, 340); // Tail curve
  vertex(250, 310); // Tail end
  endShape();
}
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
