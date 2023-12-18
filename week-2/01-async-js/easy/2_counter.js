const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function startCounter(count) {
  if (count >= 0) {
    console.clear();
    console.log('Count: ' + count);

    // Introduce a delay by running a loop
    const start = new Date().getTime();
    while (new Date().getTime() - start < 1000) {
      // Wait for 1000 milliseconds
    }

    startCounter(count - 1);
  } else {
    rl.close();
  }
}

rl.question('Enter the initial count: ', (input) => {
  const initialCount = parseInt(input);

  if (!isNaN(initialCount)) {
    startCounter(initialCount);
  } else {
    console.error('Invalid input. Please enter a valid number.');
    rl.close();
  }
});
