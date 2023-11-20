import { fibs, fibsRec } from "./fibonacci";
import mergeSort from "./mergeSort";

console.log(fibs(20));
console.log(fibs(1));
console.log(fibs(0));
console.log(fibsRec(20));
console.log(fibsRec(1));
console.log(fibsRec(0));

console.log(mergeSort([4, 8, 6, 2, 1, 7, 5, 3]));
console.log(mergeSort([4, 8, 6, 2, 1, 7, 5, 3, 9]));
