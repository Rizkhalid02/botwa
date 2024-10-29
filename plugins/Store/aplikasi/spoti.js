exports.run = {
   usage: ['stipi'],
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
                     // description: `X`,
                     id: `${isPrefix}s1b`
                  }, {
                     title: '2 Bulan',
                     // description: `Y`,
                     id: `${isPrefix}s2b`
                  }]
               }]
            })
         }]
         client.sendIAMessage(m.chat, buttons, m, {
            header: '',
            content: `▎🛍️ *SPOTIFY PREMIUM*
━━━━━━━━━━━━━━━━━━
╭ ⏳ *1 BULAN*
┝ 💵 Rp.16.000
╰ _VIA INVITE_
━━━━━━━━━━━━━━━━━━
╭ ⏳ *2 BULAN*
┝ 💵 Rp30.000
╰ _INDIVIDU_
━━━━━━━━━━━━━━━━━━
💡 _Tap tombol dibawah untuk memilih jenis akun_`,
            footer: global.footer,
            media: global.db.setting.cover
         })
      } catch (e) {
         client.reply(m.chat, Func.jsonFormat(e), m)
      }
   },
   error: false,
   cache: true,
   location: __filename
}