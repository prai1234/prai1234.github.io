function setup() {
  // Create the canvas
  createCanvas(710, 400);
  
  // Create a reset button with styling
  let resetButton = createButton('Reset Canvas');
  resetButton.position(10, height - 40); // Position at bottom-left
  resetButton.mousePressed(resetCanvas);
  
  // Style the button
  resetButton.style('padding', '8px 16px');
  resetButton.style('background-color', '#333');
  resetButton.style('color', 'white');
  resetButton.style('border', 'none');
  resetButton.style('border-radius', '4px');
  resetButton.style('font-family', 'sans-serif');
  
  // Set initial background to black
  resetCanvas();
  
  // Set width of the lines
  strokeWeight(10);
  
  // Set color mode to hue-saturation-brightness (HSB)
  colorMode(HSB);
  
  // Set screen reader accessible description
  describe('A blank canvas where the user draws by dragging the mouse. There is a reset button at the bottom.');
}

function mouseDragged() {
  // Set the color based on the mouse position, and draw a line
  // from the previous position to the current position
  let lineHue = mouseX - mouseY;
  stroke(lineHue, 90, 90);
  line(pmouseX, pmouseY, mouseX, mouseY);
}

function resetCanvas() {
  background(0); // Clear the canvas
}
