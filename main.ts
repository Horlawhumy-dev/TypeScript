

// custom type in tsc
type str = string
type num = number
type bool = boolean

// union operator in tsc
let anything: str | num | null;

// function in typescript
function add(num1: num, num2: num): num{
    return num1 + num2
}

console.log(add(3, 5))


// Interface

interface UserInterface {
    name: str,
    age: num,
    getMessage(): str;
    isShort?: bool,
    anything?: null
}

const user1: UserInterface = {
    name: "Arafat",
    age: 24,
    getMessage() {
        return `my name is ${user1.name} and I am ${user1.age} years`
    },
    isShort: false
}
console.log(user1.getMessage())

const user2: UserInterface = {
    name: "Olayiwola",
    age: 45,
    getMessage() {
        return user2.name + " " + user2.age
    }
}

console.log(user2)
console.log(user2.getMessage())
// four tsc data assertions are any, never, unknown, void
let vAny: any = null
let vUnknown: unknown = null

let pageNumber: string = "3"

let prevPageNumber: number = (pageNumber as unknown) as number
// void data assertion cannot read return of a function
function isTrue(yes: bool): void {
    console.log(yes ? "true" : "false")
}

isTrue(true)

// optional parameter
type MyObj = {
    first: string,
    last?: string,
    age?: number
}

function printName(obj: MyObj){
    if(obj.last !== undefined){
        console.log(obj.last.toUpperCase())
    }
    console.log(obj.last?.toUpperCase())
}

printName({first: "Arafat", last: "Olayiwola"})

// union type in tsc
let namee = prompt("Enter your name: ")

function getNameLength(n: string): string | number {
    return n.length
}

console.log(getNameLength(namee))

enum E {
    X,
    Y,
    Z,
  }
  
  function f(obj: { X: number }) {
    return obj.X;
  }
  
  // Works, since 'E' has a property named 'X' which is a number.
//   console.log(f(E));

enum LogLevel {
    ERROR,
    WARN,
    INFO,
    DEBUG,
  }
  
  /**
   * This is equivalent to:
   * type LogLevelStrings = 'ERROR' | 'WARN' | 'INFO' | 'DEBUG';
   */
  type LogLevelStrings = keyof typeof LogLevel;
  
  function printImportant(key: LogLevelStrings, message: string) {
    const num = LogLevel[key];
    if (num <= LogLevel.WARN) {
      console.log("Log level key is:", key);
      console.log("Log level value is:", num);
      console.log("Log level message is:", message);
    }
  }
// this log nothing since num > LogLevel.WARN which is 0
  printImportant("INFO", "This is a message");