  let matrixVisible = false; // Variable to track matrix visibility

function displayCards() {
  const cardPopup = document.getElementById('cardPopup');
  
  if (!matrixVisible) {
    cardPopup.style.display = 'flex'; // Show the popup
    matrixVisible = true;
    createCards();
  } else {
    closePopup();
  }
}

function createCards() {
  const cardMatrix = document.querySelector('.cardMatrix');
  cardMatrix.innerHTML = ''; // Clear previous cards if any

  // Array containing card data (replace this with your card data)
  const cards = [
    { name: 'Card 1', suit: 'Hearts', value: 'A' },
    // Add more card data here for all 52 cards
  ];

  // Create and display cards in the matrix
  cards.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.textContent = `${card.name} - ${card.suit} ${card.value}`;
    cardMatrix.appendChild(cardElement);
  });
}

function closePopup() {
  const cardPopup = document.getElementById('cardPopup');
  cardPopup.style.display = 'none'; // Hide the popup
  matrixVisible = false;
}

// Event listener for key press
document.addEventListener('keydown', function(event) {
  if (event.key === 'm' || event.key === 'M') {
    displayCards();
  }
});


 
  