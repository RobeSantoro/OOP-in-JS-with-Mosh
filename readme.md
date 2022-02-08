# Object Oriented Programming in JS with Mosh
[youtube link](https://youtu.be/PFmuCDHHpwk)


## Value Types (Primitives) in JS
- Number
- String
- Boolean
- Symbol
- undefined
- null

## Reference Types in JS
- Object
- Types
- Array

```
PRIMITIVES ARE COPIED BY THEIR VALUE
OBJECTS ARE COPIED BY THEIR REFERENCE
```
### **SCOPE**
The scope of a variable is the part of the program where it can be used.

### **CLOSURE**
Closure is when a variable or a function can access variables and functions from its parent scope.

#### **4 Concept of OOP**
- Encapsulation
- Abstraction
- Inheritance
- Polymorphism

## Encapsulation
#### Object :
- Properties -> Variables
- Methods -> Functions

```
"The best function are those with no parameters"
Uncle Bob Martin
```

## Abstraction
- Simpler Interface
- Reduce the impact of change

## Inheritance
- Eliminate redundant code

## Polymorphism
- An object derived from a class can change its form  (properties, methods) dynamically

![[Pasted image 20220208125801.png]]

## 3+1 Ways to create an object

## Object Litteral Syntax
```js
// Object Litteral Syntax
const circle = {
	radius: 1,
	location: {
		x: 1,
		y: 1
	},
	draw: function() {
		console.log('draw');
	}
};  

circle.draw();
```

## Factory Function
```js
// Factory Function
function createCircle(radius) {
  return {
    radius: radius,

    draw: function() {
      console.log('draw');
    }
  };  
}

const circle = createCircle(1);
circle.draw();
```

## Constructur Function
```js
// Constructor Function
function Circle(radius) {  
  this.radius = radius;
  this.draw = function() {
      console.log('draw');
  }  
}

const circle = new Circle(1);
circle.draw()
```

## Class
in ES6
```js
// Class
class Circle {  
  constructor(radius) {    
  this.radius = radius;
  }
  draw() {
    console.log('draw');
  }  
}

const circle = new Circle(1);
circle.draw()
```
