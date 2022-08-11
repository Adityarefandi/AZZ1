const fs = require('fs')
const chalk = require('chalk')

// Free Apikey
global.APIs = {
	riy: 'https://api-xriy04.herokuapp.com',
}

// Other
global.owner = ['6282244877433']
global.premium = ['6282244877433']
global.youtube = 'https://youtube.com/channel/UC4c3unHcqGs4PJ5m24Q0YsQ'
global.ownername = '𝙰𝚍𝚒𝚝𝚢𝚊 𝚁𝚎𝚏𝚊𝚗𝚍𝚒☘︎'
global.botname ='D͟i͟t͟z͟_M͟d͟ꨄ︎'
global.donasi = {
    saweria: 'B͟e͟l͟u͟m͟ T͟e͟r͟s͟e͟d͟i͟a͟',
    nomor: '082244877433'
}
global.packname = 'D͟i͟t͟z͟_M͟d͟ꨄ︎'
global.author = '𝙰𝚍𝚒𝚝𝚢𝚊_𝚁𝚎𝚏𝚊𝚗𝚍𝚒☘︎'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...'
}
global.thumb = fs.readFileSync('./image/hinata.jpg')
global.vn = './sound/menu.mp3'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
