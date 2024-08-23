// Immidiately Invoked Function Expression

{
    (() => {
        console.log('Hi there')
    })()
}
{
    (function () {
        console.log('Hi there')
    })()
}

{
    (sum = (a, b) => {
        console.log((a + b));
    })(1, 2)
}

const userData = (function () {
    const user = {
        userName: 'moin khan',
        userAge: 23
    }

    const updateAge = (age) => {
        user.userAge += age
    }
    const getName = () => user.userName
    const getAge = () => user.userAge

    return { updateAge, getName, getAge }
})()
console.log(userData)
console.log(userData.updateAge(23))
console.log(userData.getName())
console.log(userData.getAge())


function main() {
    return (function () {
        console.log('hello user')
    })()
}

const result = main()

var x = 10;
(function () {
    console.log(x)
}())



var counter = (function () {
    var count = 0
    return {
        increment: function () {
            count += 1
        },
        getCount: function () {
            return count
        }
    }
})()
counter.increment()
counter.increment()
console.log(counter.getCount())