const Telegraf = require('telegraf');
const bot = new Telegraf('1180066234:AAE-60wGLiA3dCjPQhQWOCV1hnvDglYk5vE');

const helpMessage = `
say something to me 
/start - start the bot
/help - command refrence
`;

bot.start((ctx)=>{
  ctx.reply("Hi i am an echo Bot");
  ctx.reply(helpMessage);
})
bot.help((ctx)=>{
    ctx.reply(helpMessage);
})

bot.command('echo', (ctx)=>{
    let input = ctx.message.text; //get input from the usser 
    let inputArray = input.split(" "); //split input by spaces



    let message = ""; //creates variable for message to output to user
    if (inputArray.length == 1) {  //check if arrays just contain "/echo"
        message = "You said echo";
        
    } else{
        inputArray.shift();//remove element in an array - "/echo"
        message = inputArray.join(" "); //join all elements into a string by spaces
    }
    ctx.reply(message); //reply message to user
})


bot.launch();