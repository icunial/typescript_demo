// Basic Types
// let id:number = 5
let company:string = "Traversy Media"
let isPublished: boolean = true
let x: any = "Hello"
let age: number 

age = 30

let ids: number[] = [1,2,3,4,5]
let arr: any[] = [1, true, "Hello"]

// Tuple
let person: [number, string, boolean] = [1, "Hello", true]

// Tuple Array
let employee: [number, string][]

employee = [
    [1, "Name 1"],
    [2, "Name 2"]
]

// Union
let id: string | number

id = 22
id = "Hello"

// Enum
enum Direction1 {
    Up = 1, Down, Left, Right
}

console.log(Direction1.Up)

enum Direction2 {
    Up = "Up", Down = "Down", Left = "Left", Right = "Right"
}

console.log(Direction2.Left)

// Objects

type User = {
    id: number, 
    name: string
}

const user: User = {
    id: 1,
    name: "Name 1"
}

// Type Assertion
let cid: any = 1
//let customerId = <number>cid
let customerId = cid as number

// Functions; 
function addNum(x: number, y: number):number{
    return x + y
}

console.log(addNum(1,2))

function log(message: string | number): void{
    console.log(message)
}

log("Message")
log(1)