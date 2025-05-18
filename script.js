//your JS code here. If required.
function manipulateArray() {
  const initialArray = [1, 2, 3, 4];
  const outputDiv = document.getElementById("output");

  // Step 1: Return initial array after 3 seconds
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(initialArray);
    }, 3000);
  })
  // Step 2: Filter even numbers after 1 second
  .then((arr) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const evenNumbers = arr.filter(num => num % 2 === 0);
        outputDiv.textContent = evenNumbers.toString(); // Display [2, 4]
        resolve(evenNumbers);
      }, 1000);
    });
  })
  // Step 3: Multiply even numbers by 2 after 2 more seconds
  .then((evenNumbers) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const doubled = evenNumbers.map(num => num * 2);
        outputDiv.textContent = doubled.toString(); // Display [4, 8]
        resolve(doubled);
      }, 2000);
    });
  });
}

// Run the function on page load
manipulateArray();

