exports.run = {
   usage: ['vidkuy'],
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
                     title: 'PLATINUM',
                     // description: `X`,
                     id: `${isPrefix}vpl`
                  }, {
                     title: 'DIAMOND',
                     // description: `Y`,
                     id: `${isPrefix}vdm`
                  }]
               }]
            })
         }]
         client.sendIAMessage(m.chat, buttons, m, {
            header: '',
            content: `▎🛍️ *VIDIO PLATINUM*
━━━━━━━━━━━━━━━━━━
╭ 👥 *PRIVATE PLATINUM*
┝ 💵 Rp30.000
┝ ⏳30 Hari
╰ _PRIVATE DI SEMUA DEVICE_
━━━━━━━━━━━━━━━━━━
╭ 👥 *PRIVATE DIAMOND*
┝ 💵 Rp80.000
┝ ⏳30 Hari
╰ _KHUSUS HP & TABLET_
━━━━━━━━━━━━━━━━━━
💡 _Ketuk tombol dibawah untuk memilih jenis akun_:`,
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