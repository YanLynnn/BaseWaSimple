const fs = require("fs")

let handler = async (m, { YLine, isCreator, reply, reply2, text, example }) => {
if (!isCreator) return reply(global.mess.owner)
if (!text) return reply2(example("namafile plugins nya"))
if (!text.endsWith(".js")) return reply2("Nama file harus berformat .js")
if (!fs.existsSync("./plugins/" + text.toLowerCase())) return reply2("File plugins tidak ditemukan!")
let res = await fs.readFileSync("./plugins/" + text.toLowerCase())
return reply2(`${res.toString()}`)
}

handler.command = ["getp", "gp", "getplugins", "getplugin"]

module.exports = handler