const fs = require('fs');
const chalk = require('chalk');
const { version } = require("./package.json")

// ====== DATABASE GITHUB ======
global.githubname = "pkiindonesia1945-cmyk"
global.githubRepo = "Hellnah-just-trying"
global.githubFile = "db.json"
global.TokenGithub = "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"
global.databaseURL = "https://raw.githubusercontent.com/pkiindonesia1945-cmyk/Hellnah-just-trying/main/db.json"


// -----------------------------[ SETTING ]------------------------------
global.owner = '6283177320909'
global.versi = version
global.namaOwner = "kayzennotdev"
global.packname = 'kayzennotdev'
global.botname = '𝗞𝗔𝗬𝗭𝗘𝗡 𝗩𝗘𝗥𝗦𝗜𝗢𝗡 𝟭𝟬'
global.botname2 = '𝗞𝗔𝗬𝗭𝗘𝗡 𝗩𝗘𝗥𝗦𝗜𝗢𝗡 𝟭𝟬'
//=====================================//
global.linkOwner = "https://wa.me/6283177320909"
global.linkGrup = "https://chat.whatsapp.com/IXN3UXsKkqG0cr6eIfGqj0"

//=====================================//
global.delayJpm = 3500
global.delayPushkontak = 6000

//=====================================//
global.linkSaluran = "https://whatsapp.com/channel/0029VbBb2SS65yDC5OvajY22"
global.idSaluran = "120363423292825072@newsletter"
global.namaSaluran = "Update Script Kayzen"

//=====================================//
global.dana = "0882007195252"
global.ovo = "-"
global.gopay = "0882007195252"

//=====================================//
global.image = {
menu: "https://img1.pixhost.to/images/11309/677849371_kayzennotdev.jpg", //Ubah aja jdi image lu
reply: "https://img1.pixhost.to/images/11309/677849371_kayzennotdev.jpg", 
logo: "https://img1.pixhost.to/images/11309/677849371_kayzennotdev.jpg"//Ubah aja jdi foto qris lu
}
global.prefa = ['','!','.',',','🐤','🗿'] // Prefix // Not Change
//=====================================//
global.mess = {
	owner: `╭━━〔 𝐀𝐤𝐬𝐞𝐬 𝐃𝐢 𝐓𝐨𝐥𝐚𝐤 ❌ 〕━⬣
┃ Fitur Ini Khusus Kayzenn ⚠️
╰━━━━━━━━━━━━━━━━━⬣`,
	admin: `╭━━〔 𝐀𝐤𝐬𝐞𝐬 𝐃𝐢 𝐓𝐨𝐥𝐚𝐤 ❌ 〕━⬣
┃ Fitur Ini Khusus Admin Group ⚠️
╰━━━━━━━━━━━━━━━━━⬣`,
	botAdmin: `╭━━〔 𝐀𝐤𝐬𝐞𝐬 𝐃𝐢 𝐓𝐨𝐥𝐚𝐤 ❌ 〕━⬣
┃ Bot Harus Jadi Admin Terlebih dahulu ⚠️
╰━━━━━━━━━━━━━━━━━⬣`,
	group: `╭━━〔 𝐀𝐤𝐬𝐞𝐬 𝐃𝐢 𝐓𝐨𝐥𝐚𝐤 ❌ 〕━⬣
┃ Fitur Ini Hanya berlaku di Group ⚠️
╰━━━━━━━━━━━━━━━━━⬣`,
	private: `╭━━〔 𝐀𝐤𝐬𝐞𝐬 𝐃𝐢 𝐓𝐨𝐥𝐚𝐤 ❌ 〕━⬣
┃ Fitur Ini Hanya dapat di lakukan di private cht ⚠️
╰━━━━━━━━━━━━━━━━━⬣`,
	prem: `╭━━〔 𝐀𝐤𝐬𝐞𝐬 𝐃𝐢 𝐓𝐨𝐥𝐚𝐤 ❌ 〕━⬣
┃ Fitur Ini Hanya Untuk User Premium ⚠️
╰━━━━━━━━━━━━━━━━━⬣`,
	wait: 'Loading...',
	error: 'Error!',
	done: 'Done'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})