function volume_sphere() {
  // Prevent form from refreshing
  event.preventDefault();

  // Get radius value
  let radius = document.getElementById("radius").value;

  // Convert to number
  radius = parseFloat(radius);

  // Calculate volume if valid radius
  let volume;
  if (isNaN(radius) || radius < 0) {
    volume = NaN;
  } else {
    volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    volume = volume.toFixed(4); // Round to 4 decimal places
  }

  // Display result
  document.getElementById("volume").value = volume;

  return false;
}

window.onload = function () {
  document.getElementById("MyForm").onsubmit = volume_sphere;
};
