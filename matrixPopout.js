let matrixVisible = false; // Variable to track matrix visibility

function displayCards() {
  const popupContainer = document.getElementById('popupContainer');
  
  if (!matrixVisible) {
    popupContainer.style.display = 'block'; // Show the popup container
    popupContainer.innerHTML = `<iframe src="index.html" width="100%" height="100%"></iframe>`; // Load index.html content into the popup container
    matrixVisible = true;
  } else {
    closePopup();
  }
}

function closePopup() {
  const popupContainer = document.getElementById('popupContainer');
  popupContainer.style.display = 'none'; // Hide the popup container
  popupContainer.innerHTML = ''; // Clear its content
  matrixVisible = false;
}

// Event listener for key press
document.addEventListener('keydown', function(event) {
  if (event.key === 'm' || event.key === 'M') {
    displayCards();
  }
});