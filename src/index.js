// let str:string;
// str = "10";
// function fun(op1: number, op2: number): number{
//     return op1*op2;
// }
// let a  = fun(2,2);
// a = 10; //  a = "10" will give an error
// let b = 10; 
// let d:number  = b + +'10' // +'10' is giving a number from  string
// function fun1 (s:string): boolean{
//     return !!s; // return s  - will give an error since 's' is a string but not boolean
// }
// let vf: (n1: number, n2: number)=>string;
// function fun4(op1: number, op2: number): string {
//     return op1+op2+''; //'' makes the whole return  expression as a string
// }
// vf  = fun4;
// console.log(vf(2,3))
// function sum(ar: number[]): number{
//     return ar.reduce((res, cur)=> res+cur, 0)
// }
// let  ar: Array<number>= [1,2,3,10];
// ar.push(12);
// console.log(sum(ar));
// let set = new Set<number>([1,1,1,2,2,3,3]);
// console.log(set); // will  show only unique numbers: Set(3) { 1, 2, 3 },  set can't have the same entry values
// set.forEach(e=> console.log(e));
// set.add(10);
// const ar1 = Array.from(set.values()); // ar1 is an array from the 'set' ("Array.from(set)" will  still  work)
// console.log(sum(ar1)); // we can only pass an  array into function 'sum', it won't accept a set as it has to  be [] type
// console.log (set.has(10)); 
//// +++++++++++   HW 32 (sets) ++++++++++++++++++++++++++++
function intersection(set1, set2) {
    //TODO write function returning array of common numbers between two sets
    //that are  the numbers existing in both sets
    return [];
}
function subtract(set1, set2) {
    //TODO write function returning array of numbers from set1 that don't exist in the 
    //set2
    return [];
}
function getSortedOccurences(array) {
    //write function returning array of occurrences 
    //each occurrency contains a string from the given array and how many times it occures in the array
    // a result array should be sorted in the descending order of the occurrences and ascending order of the strings
    //example: the given array is ['lmn', 'ab', 'a', 'cd', 'lmn', 'cd', 'lmn']
    //result: [{str: 'lmn', count: 3}, {str: 'cd', count: 2}, {str: 'a', count:1}, {str: 'ab', count:1}]
    //implementation notes: to use Map<string, number>
    return [];
}
//+++++++++++++++++++++++++++++++++++++
// (MAPS)
const mapMonths = new Map([
    [1, 'Jan'], [2, 'Feb'], [3, 'Mar'] // ['GG', 'YY'] wil  give an  error
]);
mapMonths.set(4, 'Apr');
mapMonths.set(1, 'JAN'); // 'set' method will change(add) prevous(new) entry
// console.log(mapMonths);//         --> Map(4) { 1 => 'JAN', 2 => 'Feb', 3 => 'Mar', 4 => 'Apr' }
// console.log(mapMonths.get(1));//  --> "JAN"
// console.log(mapMonths.has(2));//  --> 'true'
const arEntries = Array.from(mapMonths); // creating an array of entries
// console.log(arEntries); //        --> [ [ 1, 'JAN' ], [ 2, 'Feb' ], [ 3, 'Mar' ], [ 4, 'Apr' ] ]
const arKeys = Array.from(mapMonths.keys()); // getting an  array of keys
// console.log(arKeys); //           -->[ 1, 2, 3, 4 ]
arEntries.push([5, 'May']); // has to  pass in the same format:  [num, 'str']
// console.log(arEntries); //        -->  [[ 1, 'JAN' ],[ 2, 'Feb' ],[ 3, 'Mar' ],[ 4, 'Apr' ],[ 5, 'May' ]]
const arValues = Array.from(mapMonths.values());
arValues.push('10'); // arValues.push(10) will  give an error since mapMonths key values are string type
function createPerson(id, name) {
    return { id, name };
}
// console.log(createPerson(10, 'kuku')); // --> { id: 10, name: 'kuku' }
let person = { id: 100, name: 'Alex', age: 40, city: "Haifa" };
let persons = []; // HAVE TO  DEFINE ARRAY THIS WAY  !!!!!!!!!
persons.push(person);
// console.log(persons); // --> [ { id: 100, name: 'Alex', age: 40, city: 'Haifa' } ]
function strLength(str) {
    return str.length;
}
// console.log(strLength(person.city));  //  -->  5
