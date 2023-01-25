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
let ar = [1, 2, 3, 10];
// ar.push(12);
// console.log(ar);
let set = new Set([1, 1, 1, 2, 2, 3, 3]);
// console.log(set); // will  show only unique numbers: Set(3) { 1, 2, 3 },  set can't have the same entry values
// set.forEach(e=> console.log(e));
// set.add(10);
// const ar1 = Array.from(set.values()); // ar1 is an array from the 'set' ("Array.from(set)" will  still  work)
// console.log(sum(ar1)); // we can only pass an  array into function 'sum', it won't accept a set as it has to  be [] type
// console.log (set.has(10)); 
//// +++++++++++   HW 32 (sets) ++++++++++++++++++++++++++++
function intersection(set1, set2) {
    //write function returning array of common numbers between two sets
    //that are  the numbers existing in both sets
    return Array.from(set1).filter(n => set2.has(n));
}
function subtract(set1, set2) {
    //write function returning array of numbers from set1 that don't exist in the 
    //set2
    return Array.from(set1).filter(n => !set2.has(n));
}
let set2 = new Set([1, 2, 3, 4, 5, 6]);
let set1 = new Set([1, 2, 3, 6, 7]);
function getSortedOccurences(array) {
    //write function returning array of occurrences 
    //each occurrency contains a string from the given array and how many times it occures in the array
    // a result array should be sorted in the descending order of the occurrences and ascending order of the strings
    //example: the given array is ['lmn', 'ab', 'a', 'cd', 'lmn', 'cd', 'lmn']
    //result: [{str: 'lmn', count: 3}, {str: 'cd', count: 2}, {str: 'a', count:1}, {str: 'ab', count:1}]
    //implementation notes: to use Map<string, number>
    const mapOccurence = array.reduce((map, str) => {
        var _a;
        const count = (_a = map.get(str)) !== null && _a !== void 0 ? _a : 0;
        map.set(str, count + 1);
        return map;
    }, new Map());
    return Array.from(mapOccurence)
        .map(e => ({ str: e[0], count: e[1] }))
        .sort((o1, o2) => o2.count - o1.count || o1.str.localeCompare(o2.str));
}
let arr = ['lmn', 'ab', 'a', 'cd', 'lmn', 'cd', 'lmn'];
// console.log(getSortedOccurences(arr));//--> [{ str: 'lmn', count: 3 },{ str: 'cd', count: 2 },{ str: 'a', count: 1 },{ str: 'ab', count: 1 }]
//+++++++++++++++++++++++++++++++++++++
// (MAPS)
const mapMonths = new Map([
    [1, 'Jan'], [2, 'Feb'], [3, 'Mar'] // ['GG', 'YY'] wil  give an  error
]);
mapMonths.set(4, 'Apr');
mapMonths.set(1, 'JAN'); // 'set' method will change(add) previous(new) entry
// console.log(mapMonths);//         --> Map(4) { 1 => 'JAN', 2 => 'Feb', 3 => 'Mar', 4 => 'Apr' }
// console.log(mapMonths.get(1));//  --> "JAN" --- 'get' getting the the value of the given key!
// console.log(mapMonths.has(2));//  --> 'true' -- 'has' looking at the KEY !!!
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
let person2 = { id: 101, name: 'Felix', age: 31, city: 'TA' };
let persons = []; // HAVE TO  DEFINE ARRAY THIS WAY  !!!!!!!!!
persons.push(person);
// console.log(persons); // --> [ { id: 100, name: 'Alex', age: 40, city: 'Haifa' } ]
persons.push(person2);
// console.log(persons);  // -->  [{ id: 100, name: 'Alex', age: 40, city: 'Haifa' }, { id: 101, name: 'Felix', age: 31, city: 'TA' }]
function strLength(str) {
    return str.length;
}
// console.log(strLength(person.city));  //  -->  5
/// =====  GENERICS =====
// interface Backpack<Type> {
//     add: (obj: Type)=> void;
//     get: ()=> Type;
// }
// declare const backpack: Backpack<string>;// if no 'declare' ERR -> "const' declarations must be initialized", used as a
// const obj =backpack.get();               // shutter to  TS inlline compilation
// // backpack.add(23); //since backpack variable is a string it will  pop an error
//                      // "Argument of type 'number' is not assignable to parameter of type 'string'
