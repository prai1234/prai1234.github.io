// Define reset function first
function resetCanvas() {
  background(0); // Clear the canvas
}

function setup() {
  // Create the canvas
  createCanvas(710, 400);
  
  // Create reset button
  let resetButton = createButton('Reset');
  resetButton.position(width - 350, height - 5); // Position right of canvas
  resetButton.mousePressed(resetCanvas);
  
  // Style the button (sleek modern look)
  resetButton.style('padding', '8px 16px');
  resetButton.style('background-color', '#4CAF50'); // Green color
  resetButton.style('color', 'white');
  resetButton.style('border', 'none');
  resetButton.style('border-radius', '4px');
  resetButton.style('font-family', 'sans-serif');
  resetButton.style('cursor', 'pointer');
  resetButton.style('box-shadow', '0 2px 5px rgba(0,0,0,0.2)');
  
  // Set initial background
  resetCanvas();
  
  // Drawing settings
  strokeWeight(10);
  colorMode(HSB);
  
  // Accessibility
  describe('Drawing canvas with reset button in bottom right');
}

function mouseDragged() {
  // Color-changing drawing
  let lineHue = mouseX - mouseY;
  stroke(lineHue, 90, 90);
  line(pmouseX, pmouseY, mouseX, mouseY);
}
