let handler = async (m, { conn, text }) => {

let [nomor, pesan, jumlah] = text.split('|')
if (!nomor) throw '*[ β οΈ ] πΏπΎπ π΅π°ππΎπ πΈπ½πΆππ΄ππ΄ π΄π» π½ππΌπ΄ππΎ π°π» π²ππ°π» ππ΄ π»π΄ π·π°ππ° π΄π» ππΏπ°πΌ π³π΄ πΌπ΄π½ππ°πΉπ΄π!*\n*'

let fixedNumber = nomor.replace(/[-+<>@]/g, '').replace(/ +/g, '').replace(/^[0]/g, '62') + '@s.whatsapp.net'
if (i !== 0) conn.reply(fixedNumber, pesan.trim(), m)
}}
let str = `
Hola +57 313 7903503
@+52 378 186 1489
Quiere meter a Shizu-Bot al grupo.

Apruebas la solicitud?

`.trim()
let buttons = [
{ buttonId: '#donar', buttonText: { displayText: 'β' }, type: 1 },
{ buttonId: '#owner', buttonText: { displayText: 'β' }, type: 1 }]
//{ buttonId: '#infobot', buttonText: { displayText: 'πΎ πΈπ½π΅πΎπ±πΎπ πΎ' }, type: 1 }]
let buttonMessage = {
image: imagen1,
caption: str.trim(),
mentions: [m.sender],
footer: `*${wm}*`,
buttons: buttons,
headerType: 4,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
mediaType: 'VIDEO',
mediaUrl: null,
title: 'π π¦πππ­π¨ Β» ππ’π§ π',
body: null,
thumbnail: img,
sourceUrl: `https://chat.whatsapp.com/LwPNmhUV8P76isIyFgEK8E`
}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
} catch {
conn.reply(m.chat, '*[βππππβ] π΄π» πΌπ΄π½π ππΈπ΄π½π΄ ππ½ π΄πππΎπ π π½πΎ π΅ππ΄ πΏπΎππΈπ±π»π΄ π΄π½ππΈπ°ππ»πΎ, ππ΄πΏπΎπππ΄π»πΎ π°π» πΏππΎπΏπΈπ΄ππ°ππΈπΎ π³π΄π» π±πΎπ*', m)
}}
handler.help = ['solicitar <number>']
handler.tags = ['General']
handler.command = /^solicitar$/i
handler.group = false
handler.premium = false
handler.private = true
handler.limit = true
export default handler
