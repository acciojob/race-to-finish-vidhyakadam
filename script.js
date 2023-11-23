
// Do not change the code above this
// add your promises to the array `promises`'
window.promises = [];

// Function to create a promise with a random delay
function createPromise() {
  const randomTime = Math.floor(Math.random() * 5) + 1; // Random time between 1 and 5 seconds
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Promise resolved after ${randomTime} seconds`);
    }, randomTime * 1000);
  });
}

// Add five promises to the array
for (let i = 0; i < 5; i++) {
  window.promises.push(createPromise());
}

// Use Promise.any() to wait for the first promise to resolve
Promise.any(window.promises)
  .then((result) => {
    // Print the result to the output div
    document.getElementById('output').innerText = result;
  })
  .catch((error) => {
    // Handle errors if any of the promises fail
    console.error(error);
  });
'
