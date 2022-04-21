const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "OTY2NzQwMTYxMTg4NzUzNDI4.YmGI7w.fIJ8XMN_X-x3wXENb0mpH3UHVf8"
 
const client = new Discord.Client({
    intents:[
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if(message.content == "hi"){
        message.reply("Hello")
    }
})

client.login(process.env.TOKEN)


