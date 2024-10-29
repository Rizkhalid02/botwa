const moment = require('moment-timezone')

exports.run = {
   usage: ['prod3'],
   hidden: ['prod3'],
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
               id: `${isPrefix}cicakpay` // ID untuk tombol
            })
         }];

         client.sendIAMessage(m.chat, buttons, m, {
            header: '',
            content:  `▎🛍️ *CAPCUT PREMIUM*
━━━━━━━━━━━━━━━━━━
╭ 👥 *SHARING*
┝ 💵 Rp30.000
┝ ⏳1 Tahun
╰ _BISA SEMUA DEVICE_
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
