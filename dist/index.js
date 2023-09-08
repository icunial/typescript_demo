"use strict";
// Basic Types
// let id:number = 5
let company = "Traversy Media";
let isPublished = true;
let x = "Hello";
let age;
age = 30;
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, "Hello"];
// Tuple
let person = [1, "Hello", true];
// Tuple Array
let employee;
employee = [
    [1, "Name 1"],
    [2, "Name 2"]
];
// Union
let id;
id = 22;
id = "Hello";
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Left);
const user = {
    id: 1,
    name: "Name 1"
};
// Type Assertion
let cid = 1;
//let customerId = <number>cid
let customerId = cid;
// Functions; 
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 2));
function log(message) {
    console.log(message);
}
log("Message");
log(1);
const log2 = (message) => {
    console.log(message);
};
log2("New Message");
const user1 = {
    id: 1,
    name: "Name 1"
};
const p1 = 2;
const add = (x, y) => {
    return x + y;
};
const sub = (x, y) => {
    return x - y;
};
// Classes -> Es6
class Person {
    constructor(id, name) {
        this.id = id,
            this.name = name;
    }
    register() {
        return `${this.name} is now registered!`;
    }
}
const person1 = new Person(1, "Name 1");
console.log(person1);
console.log(person1.register());
// Extending Classes -> subclasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const e1 = new Employee(2, "Employee 1", "Chief");
console.log(e1);
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let stringArray = getArray(["1", "2", "3", "4"]);
// numArray.push("Hello")
numArray.push(5);
console.log(numArray);
