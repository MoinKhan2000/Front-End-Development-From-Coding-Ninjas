function main() {
    class Person {
        constructor(name, age, gender) {
            this.name = name;
            this.age = age;
            this.gender = gender;
        }

        speak() {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        }
    }

    class Student {
        constructor(person, major, gpa) {
            this.person = person;
            this.major = major;
            this.gpa = gpa;
        }

        study() {
            console.log(`I am studying ${this.major} and my GPA is ${this.gpa}.`);
        }

        speak() {
            console.log(`Hello, my name is ${this.person.name} and I am ${this.person.age} years old. I am also a student studying ${this.major}.`);
        }
    }

    return { Person, Student };
}
const { Person, Student } = main();

const person1 = new Person("John", 20, "M");
person1.speak();

const stud1 = new Student("sachet", "CS", 9);
stud1.speak();
stud1.study();