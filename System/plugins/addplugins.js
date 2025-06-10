const fs = require("fs")

let handler = async (m, { YLine, isCreator, text, reply, reply2, example }) => {
if (!isCreator) return reply(global.mess.owner)
if (!text) return reply2(example("namafile & reply code"))
if (!m.quoted || !m.quoted.text) return reply2(example("namafile & reply code"))
if (!text.endsWith(".js")) return reply2("Nama file harus berformat .js")
let kondisi = "menambah"
if (fs.existsSync("./plugins/" + text)) return reply2("Nama file plugins sudah terdaftar di dalam folder plugins!")
let teks = m.quoted.text
await fs.writeFileSync("./plugins/" + text, teks)
return reply2(`Berhasil ${kondisi} file plugins *${text}*`)
}

handler.command = ["addplugins", "addplugin", "addp", "addplug"]

module.exports = handler