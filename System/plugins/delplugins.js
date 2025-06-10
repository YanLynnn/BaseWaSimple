const fs = require("fs")

let handler = async (m, { YLine, isCreator, text, reply2, example }) => {
if (!isCreator) return reply2(global.mess.owner)
if (!text) return reply2(example("namafile plugins"))
if (!text.endsWith(".js")) return reply2("Nama file harus berformat .js")
if (!fs.existsSync("./plugins/" + text.toLowerCase())) return reply2("File plugins tidak ditemukan!")
await fs.unlinkSync("./plugins/" + text.toLowerCase())
return reply2(`Berhasil menghapus file plugins *${text.toLowerCase()}*`)
}

handler.command = ["delplugins", "delplugin"]

module.exports = handler