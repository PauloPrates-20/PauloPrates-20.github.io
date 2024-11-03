const ctx = document.getElementById('chart').getContext('2d');

// Define the function
function f(x, a) {
  const sqrtTerm = 3.3 - Math.pow(x, 2); // 3.3 - x^2
  const sinTerm = Math.sin(a * Math.PI * x); // sin(a * pi * x)

  // x^(2/3) can handle negative values correctly
  const xTerm = Math.pow(Math.abs(x), 2 / 3); // Ensure positive input for cube root

  // Calculate the function, ensuring sqrtTerm is non-negative
  return xTerm + (sqrtTerm >= 0 ? 0.9 * Math.sqrt(sqrtTerm) * sinTerm : 0);
}

// Generate x-axis points for x from -2 to 2
const xValues = [];
for (let x = -2; x <= 2; x += 0.01) {
  xValues.push(x);
}

// Set up Chart.js
const chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: xValues,
    datasets: [{
      label: 'Um coração pra você',
      data: [],
      borderColor: 'rgba(255, 90, 90, 1)', // Custom color
      borderWidth: 2,
      fill: false,
      pointRadius: 0,
      tension: 0.6 // Updated tension for smoother curves
    }]
  },
  options: {
    responsive: false, // Set to false to use fixed dimensions
    maintainAspectRatio: false, // Allows for specified height/width
    scales: {
      x: {
        type: 'linear',
        min: -2,
        max: 2,
        title: {
          display: true,
          text: 'x'
        }
      },
      y: {
        min: -1.5,
        max: 2.5,
        title: {
          display: true,
          text: 'f(x)'
        }
      }
    },
    animation: false
  }
});

// Animation function with parameter 'a' ranging from 0 to 15 and back to -15
let a = 0; // Start with a at 0
let direction = 1; // 1 for increasing, -1 for decreasing

function animate() {
  // Update the parameter a
  if (a >= 15) {
    direction = -1; // Change direction to decrease
  } else if (a <= -15) {
    direction = 1; // Change direction to increase
  }
  a += direction * 0.065; // Increment or decrement a

  const yValues = xValues.map(x => f(x, a)); // Use current 'a' in the function

  // Update the chart's dataset with new y values
  chart.data.datasets[0].data = yValues;
  chart.update();

  // Call animate function again for the next frame
  requestAnimationFrame(animate);
}

// Start the animation
animate();
