// Initialize the game board as a 3x3 matrix filled with zeros
var moves = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

// Define the colors for the players
const colors2 = ["lightgreen", "lightblue"];
var color_count = 0;

// Define the letters for the players
const leterrs = ["X", "O"];
var letter_count = 0;

// Define the numbers for the players
const numbers = [1, 5];

// Function to handle a click on a cell
function click3(element) {
  // Set the background color of the clicked cell
  element.style.backgroundColor = colors2[color_count % colors2.length];
  color_count++;

  // Set the inner HTML of the clicked cell
  element.innerHTML = leterrs[letter_count % leterrs.length];
  letter_count++;

  // Update the game board
  var row = Math.floor(element.id / 3);
  var col = element.id % 3;
  moves[row][col] = numbers[letter_count % leterrs.length];
  console.log(moves);

  // Check if the current move wins the game
  chack_winner(element);
}

// Function to check if a player has won the game
function chack_winner() {
  // Check rows for win
  for (let i = 0; i < 3; i++) {
    console.log(i);
    if (moves[i][0] + moves[i][1] + moves[i][2] === 3) {
      lose_msg();
    } else if (moves[i][0] + moves[i][1] + moves[i][2] === 15) {
      win_msg();
    }
  }

  // Check columns for win
  for (let i = 0; i < 3; i++) {
    console.log(i);
    if (moves[0][i] + moves[1][i] + moves[2][i] === 3) {
      lose_msg();
    } else if (moves[0][i] + moves[1][i] + moves[2][i] === 15) {
      win_msg();
    }
  }

  // Check diagonals for win
  if (moves[0][0] + moves[1][1] + moves[2][2] === 3) {
    lose_msg();
  } else if (moves[0][0] + moves[1][1] + moves[2][2] === 15) {
    win_msg();
  }

  if (moves[0][2] + moves[1][1] + moves[2][0] === 3) {
    lose_msg();
  } else if (moves[0][2] + moves[1][1] + moves[2][0] === 15) {
    win_msg();
  }
}

// Function to display a win message
function win_msg() {
  setTimeout(function () {
    window.alert("You won");
  }, 1000);
}

// Function to display a lose message
function lose_msg() {
  setTimeout(function () {
    window.alert("You lose");
  }, 1000);
}
