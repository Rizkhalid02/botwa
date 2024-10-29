exports.run = {
   usage: ['prod5'],
   async: async (m, {
      client,
      isPrefix,
      command,
      Func
   }) => {
      try {
         const buttons = [{
            name: 'single_select',
            buttonParamsJson: JSON.stringify({
               title: 'JENIS AKUN',
               sections: [{
                  rows: [{
                     title: '1 Bulan',
                     id: `${isPrefix}y1b`
                  }, {
                     title: '3 Bulan',
                     id: `${isPrefix}y3b`
                  }]
               }]
            })
         }]
         client.sendIAMessage(m.chat, buttons, m, {
            header: '',
            content: `▎🛍️ *YOUTUBE PREMIUM*
━━━━━━━━━━━━━━━━━━
╭ 👥 *1 BULAN*
┝ 💵 Rp7.000
┝ ⏳30 Hari
╰ _VIA INVITE_
━━━━━━━━━━━━━━━━━━
╭ 👥 *3 BULAN MIXPLAN*
┝ 💵 Rp25.000
┝ ⏳3 Bulan
╰ _AKUN DARI PENJUAL_
━━━━━━━━━━━━━━━━━━
💡 _Tap tombol dibawah untuk memilih jenis akun_`
         })
      } catch (e) {
         client.reply(m.chat, Func.jsonFormat(e), m)
      }
   },
   error: false,
   cache: true,
   location: __filename
}
