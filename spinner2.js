let timer = 100; 
let arr = ['\r|   ','\r/   ', '\r-   ', '\r\\', '\r|\n' ];
for (let element of arr) {
  setTimeout(() => {
    process.stdout.write(element);
  }, timer);
  timer += 200;
};






// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\'); 
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|\n');
// }, 900);