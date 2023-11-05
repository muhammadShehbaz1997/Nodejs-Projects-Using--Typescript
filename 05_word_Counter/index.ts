
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

let sleep = () =>{
  return new Promise ((resolve) => {
    setTimeout (resolve, 5000)
  })
}

 let design   = async() =>{
  let animation  =chalkAnimation.pulse(`Simple Word Counter--||--Created By Typescript And Nodejs`)
   await sleep()
  animation.stop() 
}
await design()

interface default_values {
  Counter : string
} 

  let answers: default_values = await inquirer . prompt([
    {
      name :"Counter",
      type  :"input",
      message :chalk.green.bold( "Please Input Any Sentence"),
    }
  ])
  let result =  answers.Counter.trim().split (" ")
  console.log(result);
  
  console.log(chalk.blue(`Your Sentence Length is ${result.length}`));
  

