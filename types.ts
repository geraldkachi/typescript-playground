// tsc types.ts  this will craete a js file
// tsc types.tc -w  thisi is to run on complie mode

let myString: string;
let myNum: number;
let myBoo: boolean
let myVal: any;

// let strArr: string[] or let strArr: Array<string>
// let numArr: number[]  or let numArr: Array<string>
// let booArr: boolean[] or let booArr: Array<string>

let strArr: Array<string>
let numArr: Array<number>
let booArr: Array<boolean>

// a tuple.. an array with a define number of elements
//  void undefined and null

let strNumTuple: [string , number] 
let myVoid: void = null 
let myVoidOne: void = undefined 

myString = "hello kachi"
myNum = 22
myBoo = false
myVal = 'ejdh'

strArr = ['kah', 'jweygqfjh']
numArr = [1,3]
booArr = [true, false, true]

strNumTuple = ['hello', 6]

console.log(myString);

