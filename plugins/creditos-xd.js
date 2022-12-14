import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
let locale = 'es'
let d = new Date(new Date + 3600000)
let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    }) 
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length

let pp = './Menu2.jpg'
wm = global.wm
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
 
const sections = [
{
title: `๐๐๐ฆ๐ง๐ ๐๐ ๐ ๐๐ก๐จ๐ฆ`,
rows: [
      {title: "๊จ๏ธ๐ฆ๐๐๐ญ๐จ-๐๐จ๐๊จ๏ธ", description: '๐๐ข๐ก๐ง๐๐๐ง๐ข ๐๐๐ ๐๐ฅ๐๐๐๐ข๐ฅ', rowId: `${usedPrefix}donar`},
      {title: "โช๐๐๐ฅ๐ขโช ", description: '๐๐ผ๐ป๐๐ฎ๐ฐ๐๐ผ', rowId: `${usedPrefix}hiro`},
      {title: "โช๐๐๐ ๐๐๐กโช", description: '๐๐ผ๐ป๐๐ฎ๐ฐ๐๐ผ', rowId: `${usedPrefix}damian`},
      {title: "<๐๐>", description: '๐๐ผ๐ป๐๐ฎ๐ฐ๐๐ผ', rowId: `${usedPrefix}xd`},
]}, ] 
let name = await conn.getName(m.sender)
const listMessage = {
text: `*ใ๐ ๐๐ข๐๐ _${name}_ ๐ๅฝก*
Contacto: +52 1 33 1702 0532
Gmail: ////
PayPal: w8706525@gmail.com`, footer: `${wm}`, pp,
title: null,
buttonText: "๐๐๐ฆ๐ง๐ ๐๐ ๐๐ข๐๐๐๐ข๐ฅ๐๐๐ข๐ฅ๐๐ฆ", 
sections }

conn.sendMessage(m.chat, listMessage)
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(xd|\?)$/i
handler.exp = 50
handler.register = true
export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
