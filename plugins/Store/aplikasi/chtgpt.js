const moment = require('moment-timezone')

exports.run = {
   usage: ['Chtgpt'],
   hidden: ['chtgpt'],
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
               display_text: '💳 QR', // Menampilkan teks pada tombol
               id: `${isPrefix}sendqr` // ID untuk tombol
            })
         }];

         client.sendIAMessage(m.chat, buttons, m, {
            header: '',
            content:  `▎🛍️ *CHAT GPT*
━━━━━━━━━━━━━━━━━━
💵 Rp50.000 / Bulan ( SHARING )
💵 Rp210.000/ Bulan ( PRIVATE )

• Full Ganransi
━━━━━━━━━━━━━━━━━━
💡 _Silahkan melakukan Transfer ke rekening dibawah :_

💳 BCA : 7621224151
💳 Seabank : 901986572462
💳 Dana : 089653898271
💳 Gopay : 085156971094`
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
