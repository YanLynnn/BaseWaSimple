const fs = require("fs")
const path = require('path');

let handler = async (m, { YLine, isCreator, text, reply2, example }) => {
if (!isCreator) return reply2(global.mess.owner)
let dir = fs.readdirSync('./plugins')
if (dir.length < 1) return reply2("Tidak ada file plugins")
let teks = "\n"
for (let e of dir) {
teks += `* ${e}\n`
}
reply2(teks)
}

handler.command = ["listplugin", "listplugins"]

module.exports = handler