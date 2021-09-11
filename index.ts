// const isOpen: boolean = false;
// const isOpen: boolean = string; // Throws an error.

// const name: string = "Javier"; // name is a reserved word.
// let name: string = "Javier"; // let doesn't work either.
const myName: string = "Javier";

const myAge: number = 31.04;

const list: number[] = [0, 1, 2, 3];

const me: [string, number, boolean] = ["Javier", 31, false]; // Type according to item position in array.

// const Job {
//     WebDev, 
//     WebDesigner, 
//     PM,
// };

// const job: Job = Job.WebDev;

const phone: any = "iphone"; // Any lets pass any type through;
const tablet: any = 3;

// const laptop: never; // This variable won't be assignable

// 5 - Functions in TypeScript
// const sayWord = (word: string): string => {
//     console.log(word);
//     return word;
// }

// sayWord(); // Without specifying anything, TS detects it has a missing argument
// sayWord(3); // Parameters can be typed specifiying it in the type;
// The return value can be typed adding it afther the arguments outside the parentheses.

// 6 - Optional, default and Rest Params

// ? for optional params
// const sayWord = (word?: string): string => {
//   console.log(word);
//   return word;
// };

// Adding a default value to parameter
// sayWord(); // Adding ? before : removes the TS error on missing argument as it's made optional
// const sayWord = (word = "Hello"): string => {
//   console.log(word);
//   return word;
// };

// sayWord(); // Another way to make it optional is giving the parameter a default value.
// There's no need to type it as TS detects the type automatically.

// Typing rest parameters
// const sayWord = (word?: string, ...otherStuff: [string, number]) => {
//   console.log(otherStuff);
//   return word;
// };

// sayWord("Javier", "Hello", 3);

// 7 - Implicit Types in TS
// Justl like in the previous lesson with default parameters, TS automatically recognizes the value type
let newName = "Javier";
newName = "HelloWorld";
newName = 10;
console.log("newName", newName);

// Gets type from initial declaration
let newNameTwo = newName;
newNameTwo = 10;
console.log("newNameTwo", newNameTwo)