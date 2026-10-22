let video;
const gridSize = 12; // Controls the density of the grid (lower = finer detail, higher = larger dots)

function setup() {
  createCanvas(640, 480);
  
  // Load the video file
  video = createVideo(['assets/video.mp4'], videoLoaded);
  video.size(width, height);
  video.hide(); // Hide the raw HTML video element
}

function videoLoaded() {
  video.loop();
  video.volume(0); // Mute video for autoplay compatibility
}

function draw() {
  background(255); // White background for the halftone effect
  
  // Load the current video frame pixel data into video.pixels array
  video.loadPixels();
  
  if (video.pixels.length > 0) {
    fill(0); // Black dots
    noStroke();

    // Loop through the video in steps defined by gridSize
    for (let y = 0; y < height; y += gridSize) {
      for (let x = 0; x < width; x += gridSize) {
        
        // Calculate the starting index in the 1D pixel array for (x, y)
        // Array layout: [R, G, B, A, R, G, B, A, ...]
        let index = (x + y * width) * 4;
        
        let r = video.pixels[index];
        let g = video.pixels[index + 1];
        let b = video.pixels[index + 2];
        
        // Calculate relative brightness using standard perceptual weights
        let brightness = 0.299 * r + 0.587 * g + 0.114 * b;
        
        // Map brightness (0 = black, 255 = white) to dot diameter (max size down to 0)
        let dotSize = map(brightness, 0, 255, gridSize * 1.2, 0);
        
        // Draw the dot at the center of the grid cell
        ellipse(x + gridSize / 2, y + gridSize / 2, dotSize, dotSize);
      }
    }
  }
}