import inquirer from "inquirer";
import chalk from "chalk";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
;
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
;
const person = new Person();
console.log(person);
const programme_start = async (person) => {
    do {
        console.log("Welcome Guest");
        const ans = await inquirer.prompt({
            name: "select",
            type: "list",
            message: (chalk.red.bold("Ap Kis Se Bat Karna Chahte Hn.")),
            choices: ["Khud Se", "Students"]
        });
        if (ans.select === "Khud Se") {
            console.log("Hello! Ma Khud Se Bat Kar Rha Hu");
            console.log("Mari Tabyat Ache Ha");
        }
        if (ans.select === "Students") {
            let ans = await inquirer.prompt({
                name: "student",
                message: "Ap ko Kis Student Se Bat Karne Ha",
                type: "input",
            });
            const student = person.students.find(val => val.name === ans.student);
            if (!student) {
                const name = new Student(ans.student);
                person.addStudent(name);
                console.log(`Hello iam ${chalk.yellow.bold(name.name)}, Or Ma Thek Hu.`);
                console.log(person.students);
            }
            if (student) {
                console.log(`Hello iam ${chalk.green.bold(student.name)}, Or Ma Thek Hu..........`);
                console.log(person.students);
            }
        }
    } while (true);
};
programme_start(person);
