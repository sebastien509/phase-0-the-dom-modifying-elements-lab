// Write your code here!
// 1) Remove the 'main' node from the DOM
const mainElement = document.getElementById('main');
if (mainElement) {
    mainElement.remove(); // Removes the main element
}

// 2) Create a new <h1> element
const newHeader = document.createElement('h1');

// 3) Set the id of the new <h1> element to 'victory'
newHeader.id = 'victory';

// 4) Set the text content of the new <h1> element
newHeader.textContent = "YOUR-NAME is the champion"; // Replace YOUR-NAME with your name

// Append the new header to the body or any other appropriate element
document.body.appendChild(newHeader);
