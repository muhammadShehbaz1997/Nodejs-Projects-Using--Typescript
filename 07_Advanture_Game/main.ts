import chalk from "chalk";
import inquirer from "inquirer";

class Player {
  name: string;
  fuel: number = 100;

  constructor(name: string) {
    this.name = name;
  }
  fuelDecrease() {
    let fuel = this.fuel - 25;
    this.fuel = fuel;
  }
  fuelIncrease() {
    this.fuel = 100;
  }
}

class Opponent {
  name: string;
  fuel: number = 100;

  constructor(name: string) {
    this.name = name;
  }
  fuelDecrease() {
    let fuel = this.fuel - 25;
    this.fuel = fuel;
  }
}

let round1 = await inquirer.prompt({
  name: "name",
  type: "input",
  message: "Enter Your Name",
});

let round2 = await inquirer.prompt({
  name: "Select",
  type: "list",
  message: "Select Your Game Type",
  choices: ["Skekleton", "Assasin", "Zombie"],
});

let p1 = new Player(round1.name);
let o1 = new Opponent(round2.Select);

do {
  if (round2.Select === "Skekleton") {
    console.log(chalk.bgCyan.underline(`${p1.name} VS ${o1.name}`));
    let user_choice = await inquirer.prompt({
      name: "choice",
      type: "list",
      choices: ["Attack", "Drink Portion", "Exit"],
    });
    if (user_choice.choice === "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fuelDecrease();
        console.log(chalk.green.bold(`${p1.name} Fuel Is ${p1.fuel}`));
        console.log(chalk.red.bold(`${o1.name} Fuel Is  ${o1.fuel}`));
        if (p1.fuel <= 0) {
          console.log(
            chalk.italic.underline.blue("You Loss.. Better Luck Next Time!")
          );
          process.exit();
        }
      }
      if (num <= 0) {
        o1.fuelDecrease();
        console.log(chalk.green.bold(`${p1.name} Fuel Is  ${p1.fuel}`));
        console.log(chalk.red.bold(`${o1.name} Fuel Is  ${o1.fuel}`));
        if (o1.fuel <= 0) {
          console.log(chalk.bgYellow.bold("You Win.."));
          process.exit();
        }
      }
      if (user_choice.choice === "Drink Portion") {
        p1.fuelIncrease();
        console.log(chalk.blue.bold.underline(`Your Health Is ${p1.fuel}`));
      }
    }
    if (user_choice.choice === "Exit") {
      console.log(chalk.white.bold("You Exit"));
      process.exit();
    }
  }

  if (round2.Select === "Assasin") {
    console.log(chalk.bgCyan.underline(`${p1.name} VS ${o1.name}`));
    let user_choice = await inquirer.prompt({
      name: "choice",
      type: "list",
      choices: ["Attack", "Drink Portion", "Exit"],
    });
    if (user_choice.choice === "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fuelDecrease();
        console.log(chalk.green.bold(`${p1.name} Fuel Is ${p1.fuel}`));
        console.log(chalk.red.bold(`${o1.name} Fuel Is  ${o1.fuel}`));
        if (p1.fuel <= 0) {
          console.log(
            chalk.italic.underline.blue("You Loss.. Better Luck Next Time!")
          );
          process.exit();
        }
      }
      if (num <= 0) {
        o1.fuelDecrease();
        console.log(chalk.green.bold(`${p1.name} Fuel Is  ${p1.fuel}`));
        console.log(chalk.red.bold(`${o1.name} Fuel Is  ${o1.fuel}`));
        if (o1.fuel <= 0) {
          console.log(chalk.bgYellow.bold("You Win.."));
          process.exit();
        }
      }
      if (user_choice.choice === "Drink Portion") {
        p1.fuelIncrease();
        console.log(chalk.blue.bold.underline(`Your Health Is ${p1.fuel}`));
      }
    }
    if (user_choice.choice === "Exit") {
      console.log(chalk.white.bold("You Exit"));
      process.exit();
    }
  }

  if (round2.Select === "Zombie") {
    console.log(chalk.bgCyan.underline(`${p1.name} VS ${o1.name}`));
    let user_choice = await inquirer.prompt({
      name: "choice",
      type: "list",
      choices: ["Attack", "Drink Portion", "Exit"],
    });
    if (user_choice.choice === "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fuelDecrease();
        console.log(chalk.green.bold(`${p1.name} Fuel Is ${p1.fuel}`));
        console.log(chalk.red.bold(`${o1.name} Fuel Is  ${o1.fuel}`));
        if (p1.fuel <= 0) {
          console.log(
            chalk.italic.underline.blue("You Loss.. Better Luck Next Time!")
          );
          process.exit();
        }
      }
      if (num <= 0) {
        o1.fuelDecrease();
        console.log(chalk.green.bold(`${p1.name} Fuel Is  ${p1.fuel}`));
        console.log(chalk.red.bold(`${o1.name} Fuel Is  ${o1.fuel}`));
        if (o1.fuel <= 0) {
          console.log(chalk.bgYellow.bold("You Win.."));
          process.exit();
        }
      }
    }
    if (user_choice.choice === "Drink Portion") {
      p1.fuelIncrease();
      console.log(chalk.blue.bold.underline(`Your Health Is ${p1.fuel}`));
    }
    if (user_choice.choice === "Exit") {
      console.log(chalk.white.bold("You Exit"));
      process.exit();
    }
  }
} while (true);
