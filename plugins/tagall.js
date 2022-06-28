let handler = async(m, { conn, text, participants }) => {
  let teks = `
\n *${text ? text : '😮'}*\n\n`
		      	for (let mem of participants) {
		            teks += ` @${mem.id.split('@')[0]}\n`
				}
                teks += `\n`
                conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <pesan>']
handler.tags = ['owner']
handler.command = /^(tagall)$/i

handler.group = true
handler.admin = false
handler.owner = true

module.exports = handler
