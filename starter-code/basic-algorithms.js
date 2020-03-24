// Iteration 1: Names and Input
const hacker1 = 'Flor';
console.log(`The driver's name is ${hacker1}`);
const hacker2 = 'Juan';
console.log(`"The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
const hacker1Modified = hacker1.split('').join(' ').toUpperCase();
const hacker2Modified = hacker2.split('').reverse().join('');
console.log(hacker1Modified);
console.log(hacker2Modified);

const lexico_order = hacker1.localeCompare(hacker2);
if (lexico_order === -1) {
  console.log('The driver\'s name goes first.');
} else if (lexico_order === 1) {
  console.log('Yo, the navigator goes first definitely.');
} else {
  console.log('What?! You both have the same name?');
}

const paragraph = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos id corporis et dignissimos quos omnis deserunt eligendi excepturi et quod provident, harum, sapiente eius laborum corrupti iste culpa blanditiis eaque tempora quaerat!';

const numberOfWords = paragraph.split(' ').length;
console.log(numberOfWords);

const etTimes = (paragraph.match(/ et /g)).length;
console.log(etTimes);

const phraseToCheck = 'Amor, roma';

const checkPalindrome = (phrase) => {
  const recivedPhrase = phrase.toLowerCase().replace(/\W/gi, '');
  const reversePhrase = recivedPhrase.split('').reverse().join('');
  const isPalindrome = reversePhrase === recivedPhrase ? true : false;
  return isPalindrome;
}

checkPalindrome(phraseToCheck);

// // Names and Input
// const hacker1 = "Juan";
// console.log("The driver's name is " + hacker1);

// const hacker2 =  window.prompt("Input navigator's name");
// console.log("The navigator's name is "+ hacker2);

// if (hacker1.length > hacker2.length) {
//   console.log("The driver has the longest name, it has " + hacker1.length + " characters");
// } else if (hacker1.length < hacker2.length) {
//   console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
// } else {
//   console.log("Wow, you both got equally long names, " + hacker1.length + " characters!!");
// }


// //Conditionals
// let arrayh1 = [];
// for (let z = 0; z < hacker1.length; z++) {
//   arrayh1.push(hacker1[z]);
// }

// const stringh1 = arrayh1.toString();
// const stringh1final = stringh1.replace(/,/g, " ");
// console.log(stringh1final.toUpperCase()); 

// const rev = arrayh1.reverse().toString().replace(/,/g, "");
// console.log(rev);

// const comp = hacker1.localeCompare(hacker2);
// if (comp === -1) {
//   console.log("The driver's name goes first");
// } else if (comp === 0) {
//   console.log("What?! you both got the same name?");
// } else {
//   console.log("Yo, the navigator goes first defintely");
// }

// const palindrome = window.prompt("Input a string");
// const quitar = palindrome.replace(/[\W_]/g,"").toLowerCase();
// const reversePal = quitar.split('').reverse().join('');
// if (reversePal === quitar) {
//   console.log("It's a Palindrome");
// } else {
//   console.log("This is a shit");
// }


// // Lorem ipsum generator

// const strLorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet varius ligula, congue dictum tortor pulvinar vitae. Vestibulum vitae arcu dictum, fermentum neque eu, fringilla metus. Vestibulum at eros massa. Fusce ut elit quis augue condimentum laoreet in quis tellus. Nullam ultricies felis sit amet lacus tempor pulvinar. Maecenas gravida ipsum vel enim fringilla elementum. Proin tincidunt nisl sed tortor condimentum, sit amet viverra quam blandit. Nulla tempus dictum dolor sit amet viverra. Aliquam erat volutpat. Sed semper dictum ullamcorper. Nullam ac congue lorem, ut convallis felis. Nulla in velit a diam mollis commodo. Nulla non nibh commodo dolor semper pellentesque. Aenean non metus nunc. Ut tincidunt auctor lobortis. Integer eu cursus neque, nec auctor est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce nisl sapien, luctus ut porttitor vel, pretium eu est. Fusce ac gravida leo. Aliquam tincidunt nunc ligula, eu sollicitudin nisl egestas a. Nam elementum tempor efficitur. Duis metus ante, fringilla sed hendrerit aliquet, dignissim in odio. Fusce elementum congue enim eu accumsan. Etiam nec ante nec dolor elementum congue. Proin eros nunc, posuere in finibus et, volutpat a felis. Aenean at faucibus justo, in volutpat odio. Pellentesque sed elit mi. Praesent vitae dictum lacus.'
// const arr = strLorem.split(' ');
// console.log(arr.length);

// let count = 0;

// for(let i = 0; i < arr.length; i++){
//   if(arr[i] === 'et'){
//     count++;
//   }
// }

// console.log(count);