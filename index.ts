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

// Functions in TypeScript

const sayWord = (word: string): string => {
    console.log(word);
    return word;
}

// sayWord(); // Without specifying anything, TS detects it has a missing argument
// sayWord(3); // Parameters can be typed specifiying it in the type;
// The return value can be typed adding it afther the arguments outside the parentheses.