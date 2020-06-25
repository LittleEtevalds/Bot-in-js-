const Discord = require("discord.js");
const client  = new Discord.Client();

const prefix   = ".";
const commands = require("./scripts/commandsReader")(prefix);

client.on("ready",()=>{
    console.log(`  ${client.user.tag} está online! `);
    console.log(`  
   
    ───▄▀▀▀▄▄▄▄▄▄▄▀▀▀▄───
    ───█▒▒░░░░░░░░░▒▒█───
    ────█░░█░░░░░█░░█────
    ─▄▄──█░░░▀█▀░░░█──▄▄─
    █░░█─▀▄░░░░░░░▄▀─█░░█
           
        yeeeeeeeey`)

});

client.on("message",(msg)=>{
    if(!msg.author.bot){
        console.log(`${msg.author.username}: ${msg.content}`);
        const args = msg.content.split(" ");
        if(commands[args[0]]) commands[args[0]](client,msg);
        
    }
});

client.login("NzI0NzUxNjM2OTg3Mzc5NzQy.XvNQag.WSSpWrLmUgBt_M_Myd2CkoZeoqw");
