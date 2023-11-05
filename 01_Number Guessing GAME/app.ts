#!usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation"

let sleep = () => {
  return new Promise((res) => {
    setTimeout (res, 2000);
  })
}

async  function sloop (){
  let anmimated = chalkAnimation.rainbow(`Are You Ready To Play This Game `)
  await sleep()
  anmimated.stop 
}
await sloop()
let score:number = 0

async function Game_Problem (){
  let decimal = Math.floor(Math.random() *10);
  
  let Tip;
  if(decimal% 2==0){
  Tip = chalk.yellow(`Tip: Number Is Even`)
}else{
  Tip =chalk.yellow (`Tip: Number is Odd`)
}
  let askques = await inquirer. prompt([
    {
      name:"UserGuess",
      type:"number",
      message: `Select your Guess Between 1 to 10 ${Tip}`,
    },
  ])
  console.log(chalk.green(`Your Guess ${askques.UserGuess} And System Generated Number IS ${decimal}`))
  if(askques.UserGuess === decimal){
  score++;
  console.log (chalk.blue(`Congratulations Your Guess Is Correct.Your Score Is ${score} `));
  }else{
    console.log(`Try Again Later Wrong...! Guess. 'Your Score Is ${score}`);
  }
};


async function start_Loop (){
  do{
    await Game_Problem()
    var again = await inquirer.prompt({
      type:  "list",
      name : "restart",
      message : "do You Want To Continue ? Yes Or No",
      choices : ["Yes", "No"]
    })
  }while(again.restart ==="Yes")
}

await start_Loop()

