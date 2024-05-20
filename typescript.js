//const sum = (a: number, b: number) => {
//   return a + b;
// };
// var answer = sum(4, 5);
// console.log(answer)
// only bc were set up with ts syntax
// we can use these values like this
//boolean
var isCool = true;
// number type
var age = 56;
//string
var eyeColor = 'brown';
var favoriteQuote = "I'm not old, i'm only ".concat(age);
//arrays
var pets = ['cat', 'dog', 'pig'];
//or
var pets2 = ['lion', 'dragon', 'lizard'];
//objects
var wizard = {
    a: 'John'
};
//null and undefined 
var meh = undefined;
var noooo = null;
// tuple 
var basket;
basket = ['basketball', 5];
// Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var sizeName = Size.Small;
// console.log(sizeName)
//not recommeneded , need to make sure
// we use it right 
//any 
var whatever = 'aaarggghhhhhh noooooooo!!!';
whatever = basket;
// using this gets rid of advantages typescript
//gives us
// void
var sing = function () {
    console.log('lallalal');
};
// never tests 2 thing, () never returns
// varialbe under a typegruard is never true
// neither has a return point or reachable
// endpoint
var error = function () {
    throw Error('ooops');
};
var fightRobotArmy = function (robots) {
    console.log('fight');
};
fightRobotArmy({ count: 1, type: 'dragon' });
var fightRobotArmy2 = function (robots) {
    console.log('fight');
};
// Says dont worry this IS a CAT army
//dangerous and be careful of usage 
var dog = {};
dog.count;
//function 
var fightRobotArmy3 = function (robots) {
    console.log('fight');
};
var fightRobotArmy4 = function (robots) {
    console.log('fight');
    return 5;
};
// Class 
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.sing = 'lalalalla';
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "Hello ".concat(this.sing);
    };
    return Animal;
}());
var lion = new Animal("RAAAARAWHAH");
lion.sing;
// NEW FEATURE   
// UNION
var confused = 5;
// type inferences 
// w/o using 'number' it will infer it was one
var x = 4;
x = 4;
