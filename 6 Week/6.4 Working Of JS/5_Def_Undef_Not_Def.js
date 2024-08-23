// console.log(a)  // a is not defined.
// a = 20 



// console.log(a)  // cannot access a before initialization.
// let a = 20


// Temporal DeadZone.

let a = 10;
{
    console.log(a) // 10
}

{
    console.log(a)  // cannot access a before initialization.
    let a = 20
}


// It's not like that let and const are not hoisted they are hoisted but they are made inaccessible till the point you declare, so you define them somewhere.