// const generateName = require("sillyname");

import generateName from "sillyname";
import {randomSuperhero} from "superheroes";
let sillyName = generateName();



console.log(`My name is ${sillyName}`);

console.log(`My superhero is ${randomSuperhero()}`);