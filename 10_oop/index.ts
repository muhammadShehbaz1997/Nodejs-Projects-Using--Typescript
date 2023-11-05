import inquirer from "inquirer";
import chalk from "chalk";
class Student {
  name: string;

  constructor (n: string){
    this.name = n;
  }
};

class Person {
  students: Student[] = [];

  addStudent (obj: Student){
    this.students.push(obj);
  }
};

const person = new Person()
console.log(person);

 const programme_start = async(person: Person) => {
 do{
  console.log("Welcome Guest");
  
  const ans = await inquirer.prompt({
    name: "select",
    type: "list",
    message : (chalk.red.bold("Who do you want to talk to?.")),
    choices :["By Myself", "Students"]
  })
  if(ans.select === "By Myself"){
    console.log("Hi, I'm talking to myself");
    console.log("I am in good health");
  }
  if(ans.select === "Students"){
    let ans = await inquirer.prompt({
      name: "student",
      message: "Which student do you want to talk to?",
      type: "input",
    })
    const student = person.students.find(val => val.name === ans.student)
    if(!student){
      const name = new Student(ans.student)
      person.addStudent(name)
      console.log(`Hello iam ${chalk.yellow.bold(name.name)}, And I'm fine.`);
      console.log(person.students);
    }
    if(student){
      console.log(`Hello iam ${chalk.green.bold(student.name)}, And I'm fine..........`);
      console.log(person.students);
    }
  }
 }while(true)
}
programme_start(person)