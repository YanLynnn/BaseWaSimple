//===================[ OWNER ]=====================\\
global.owner = [
  "6285956337454", 
  "6287836588882"
]
global.onwer = "6285956337454"
global.ownername = "YannRzy Tech"

//===================[ FUNCTION BOT ]=====================\\
global.botname = "X-Sistine"
global.botver = "V 1.2.0"
global.idchnel = "120363307516770910@newsletter"

//===================[ FUNCTION STICKER ]=====================\\
global.packname = "- Call Me"
global.author = "V-YannRzy Tech"

//===================[ MESS ]=====================\\
global.mess = {
    success: "Successfully",
    admin: "Not funny, only group admins use this feature💢",
    botAdmin: "This Command Can Only Be Used When Bot Becomes Group Admin💢",
    owner: "Wow! You're not my owner🗣️",
    group: "It's not funny, this feature is only for groups💢",
    private: "This Command Can Only Be Used In Private Chat💢",
    premium: "You are not a premium user",
    seller: "You don't have access as a seller yet",
    wait: "Please just wait ngab",
    endLimit: "Your Daily Limit Has Been Used Up, The Limit Will Be Reset Every 00:00 WIB"
}

let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})