const car = {
    getDetails(name) {
        console.log(`Your car is ${name}`);
    }
}

const car1 = Object.create(car)
console.log(car1);
car1.getDetails("Toyota"); // Your car is Toyota


// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };

// const result = Object.assign(target, source);

// console.log(target); // Output: { a: 1, b: 4, c: 5 }
// console.log(result); // Output: { a: 1, b: 4, c: 5 }

const target = { a: 1, b: 2, e: '234' };
const source = { b: 4, c: 5, f: '2342', e: '21114' };

const result = Object.assign({}, target, source);

console.log(target); // Output: { a: 1, b: 2 }
console.log(result); // Output: { a: 1, b: 4, c: 5 }



let parent = { name: "parent", children: [] }
let child1 = Object.create(parent)
child1.name = 'child1'
console.log(child1.name);
console.log(child1.__proto__.name);

child1.children.push(child1.name)
console.log();


//! Object.freeze
const obj = {
    property1: 42,
    property2: 'foo'
};

Object.freeze(obj);

// Attempting to modify the properties of a frozen object will result in an error or silently fail in strict mode.
obj.property1 = 99; // This will not change the property value
obj.property3 = 'bar'; // This will not add a new property
delete obj.property2; // This will not remove the property

console.log(obj); // Output: { property1: 42, property2: 'foo' }
