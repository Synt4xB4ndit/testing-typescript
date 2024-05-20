//const sum = (a: number, b: number) => {
//   return a + b;
// };

// var answer = sum(4, 5);

// console.log(answer)


// only bc were set up with ts syntax
// we can use these values like this

//boolean
let isCool: boolean = true;

// number type
let age: number = 56;

//string

let eyeColor: string = 'brown';
let favoriteQuote: string = `I'm not old, i'm only ${age}`;

//arrays
let pets: string[] = ['cat', 'dog', 'pig']
//or
let pets2: Array<string> = ['lion', 'dragon', 'lizard']

//objects
let wizard: object = {
    a: 'John'
}

//null and undefined 
let meh: undefined = undefined;
let noooo: null = null;

// tuple 

let basket: [string, number];
basket = ['basketball', 5];

// Enum

enum Size { Small = 1, Medium = 2, Large = 3 }

let sizeName: number = Size.Small

// console.log(sizeName)

//not recommeneded , need to make sure
// we use it right 

//any 

let whatever: any = 'aaarggghhhhhh noooooooo!!!';

whatever = basket

// using this gets rid of advantages typescript
//gives us

// void

let sing = (): void => {
    console.log('lallalal')
}

// never tests 2 thing, () never returns
// varialbe under a typegruard is never true
// neither has a return point or reachable
// endpoint

let error = (): never => {
    throw Error('ooops')
}

// interface 

//interface or we can call it type Robotarmy
// but theres a difference
//  interfaces create a new name we use anywhere
// type  alias' dont create a new name 
interface RobotArmy {
    count: number,
    type: string,
    // ? says this MAY or may not be part
    magic?: string
}

let fightRobotArmy = (robots: RobotArmy) => {
    console.log('fight')
}

fightRobotArmy({ count: 1, type: 'dragon' })

let fightRobotArmy2 = (robots: { count: number, type: string, magic: string }) => {
    console.log('fight')
}
// Type Assertion
interface CatArmy {
    count: number,
    type: string,
    magic: string
}

// Says dont worry this IS a CAT army
//dangerous and be careful of usage 
let dog = {} as CatArmy
dog.count

//function 

let fightRobotArmy3 = (robots: RobotArmy): void => {
    console.log('fight')
}

let fightRobotArmy4 = (robots: RobotArmy): number => {
    console.log('fight')
    return 5
}

// Class 

class Animal {
    sing: string = 'lalalalla'
    constructor(sound: string) {
        this.sing = sound
    }


    greet() {
        return `Hello ${this.sing}`

    }
}

let lion = new Animal("RAAAARAWHAH")
lion.sing

// NEW FEATURE   
// UNION

let confused: string | number = 5

// type inferences 
// w/o using 'number' it will infer it was one
let x: number = 4
x = 4
