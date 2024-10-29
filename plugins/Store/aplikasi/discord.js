const moment = require('moment-timezone')

exports.run = {
   usage: ['Discord'],
   hidden: ['discord'],
   category: 'app',
   async: async (m, {
      client,
      isPrefix,
      command,
      Func
   }) => {
      try {
         const buttons = [{
            name: 'quick_reply', // Ubah jenis tombol sesuai kebutuhan
            buttonParamsJson: JSON.stringify({
               display_text: '💳 CHECKOUT', // Menampilkan teks pada tombol
               id: `${isPrefix}dcs` // ID untuk tombol
            })
         }];

         client.sendIAMessage(m.chat, buttons, m, {
            header: '',
            content:  `▎🛍️ *DISCORD NITRO*
━━━━━━━━━━━━━━━━━━
🎁 *VIA GIFT*
💵 Rp500.000
⏳1 Tahun

• Bisa untuk semua akun 
• Bisa untuk akun yg sudah nitro 
• Legal Pay Playstore
━━━━━━━━━━━━━━━━
💡 _Ketuk tombol dibawah untuk melakukan pembelian_`
,
            footer: global.footer,
            media: global.db.setting.cover
         });
      } catch (e) {
         client.reply(m.chat, Func.jsonFormat(e), m);
      }
   },
   error: false,
   cache: true,
   location: __filename
}
