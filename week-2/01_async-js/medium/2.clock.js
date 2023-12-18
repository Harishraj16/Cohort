// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)


//IN 24 HOURS FORMAT

function printClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
  
    const formattedTime = `Time: ${hours}:${minutes}:${seconds}   `;
    process.stdout.write('\033c'); // Clears the terminal
    process.stdout.write(`${formattedTime}`);
  }
  
  setInterval(printClock, 1000);
  printClock(); // Display immediately without waiting for the first second interval



//IN 12 HOURS FORMAT

// function printClock() {
//     const now = new Date();
//     const hours = now.getHours();
//     const ampm = hours >= 12 ? 'PM' : 'AM';
//     const formattedHours = String(hours % 12 || 12).padStart(2, '0');
//     const minutes = String(now.getMinutes()).padStart(2, '0');
//     const seconds = String(now.getSeconds()).padStart(2, '0');
  
//     const formattedTime = `Time: ${formattedHours}:${minutes}:${seconds} ${ampm} `;
//     process.stdout.write('\033c'); // Clears the terminal
//     process.stdout.write(formattedTime);
//   }
  
//   setInterval(printClock, 1000);
//   printClock(); // Display immediately without waiting for the first second interval
  
  
