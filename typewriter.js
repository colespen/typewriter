let str = "At last..... I have finally learned to communicate with you directly through the command line. \n";


const interval = setInterval(() => {

  process.stdout.write(str[0]);
  str = str.slice(1);
  
  if (!str.length) {
    clearInterval(interval);
  }
}, 71);

// setTimeout(() => {
//   console.log();
// }, 1500);

// let i = 0;
// const writer = () => {
//   process.stdout.write(str[i]);
//   i++;

 
//   if (i >= str.length) {
//     setTimeout(() => {
//       clearInterval(delay);
//       console.log()
//     }, 450);
//   }

  
// };

// let delay = setInterval(writer, 65);

