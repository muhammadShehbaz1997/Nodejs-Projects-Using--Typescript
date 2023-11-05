#! /usr/bin/env node
import inquirer from "inquirer";

let todos: string[] = [];
let loop: boolean = true;

interface types {
  TODO: string;
  addmore: boolean;
}

while (loop) {
  let answer: types = await inquirer.prompt([
    {
      name: "TODO",
      type: "input",
      message: "Add Todos..",
    },
    {
      name: "addmore",
      type: "confirm",
      message: "Do You Want To Add More Todos",
      default: false,
    },
  ]);
  let { TODO, addmore } = answer;
  loop = addmore;

  if (TODO) {
    todos.push(TODO);
  } else {
    console.log("Enter Your Valid Input");
  }
}

if (todos.length > 0) {
  console.log("Your Todos List: ");
  todos.forEach((value) => {
    console.log(value);
  });
} else {
  console.log("No Todos found");
}

