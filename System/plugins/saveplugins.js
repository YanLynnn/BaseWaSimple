const fs = require("fs")

let handler = async (m, { YLine, isCreator, text, reply2, example }) => {
if (!isCreator) return reply2(global.mess.owner)
if (!text) return reply2(example("namafile & reply code"))
if (!m.quoted || !m.quoted.text) return reply2(example("namafile & reply code"))
if (!text.endsWith(".js")) return reply2("Nama file harus berformat .js")
let kondisi = "mengedit"
if (!fs.existsSync("./plugins/" + text.toLowerCase())) return reply2("File plugins tidak ditemukan!")
let teks = m.quoted.text
await fs.writeFileSync("./plugins/" + text, teks)
return reply2(`Berhasil ${kondisi} file plugins *${text}*`)
}

handler.command = ["sp", "svp", "saveplugins", "saveplugin"]

module.exports = handler