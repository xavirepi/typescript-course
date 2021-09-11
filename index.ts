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

const laptop: never = 3; // This variable won't be assignable