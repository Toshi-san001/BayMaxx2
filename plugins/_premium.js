let handler = m => m
export async function all(m) {
let user = global.db.data.users[m.sender]
if (m.chat.endsWith('broadcast')) return
if (user.premiumTime != 0 && user.premium) {
if (new Date() * 1 >= user.premiumTime) {
await m.reply(`*@${m.sender.split`@`[0]} Β‘ππ΄ π°π²π°π±πΎ ππ ππΈπ΄πΌπΏπΎ π³π΄ πΏππ΄πΌπΈππΌ!*\nππΈ πππΈπ΄ππ΄π πΎπ±ππ΄π½π΄π ππ½ π½ππ΄ππΎ πΏπ°ππ΄ πππ° π΄π» π²πΎπΌπ°π½π³πΎ\n*#pase premium*`, false, { mentions: [m.sender] })
user.premiumTime = 0
user.premium = false 
}}}
