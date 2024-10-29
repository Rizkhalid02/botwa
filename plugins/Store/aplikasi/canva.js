exports.run = {
   usage: ['prod2'],
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
               title: 'PILIHAN',
               sections: [{
                  rows: [{
                     title: '1 Bulan',
                     // description: `X`,
                     id: `${isPrefix}cv1`
                  }, {
                     title: '2 Bulan',
                     // description: `Y`,
                     id: `${isPrefix}cv2`
                  }, {
                     title: '3 Bulan',
                     // description: `Y`,
                     id: `${isPrefix}cv3`
                  }]
               }]
            })
         }]
         client.sendIAMessage(m.chat, buttons, m, {
            header: '',
            content: `▎🛍️ *CANVA*
━━━━━━━━━━━━━━━━━━
╭ 👥 *1 BULAN*
┝ 💵 Rp10.000
┝ ⏳30 Hari
╰  _INVITE_
━━━━━━━━━━━━━━━━━━
╭ 👥 *2 BULAN*
┝ 💵 Rp15.000
┝ ⏳30 Hari
╰  _INVITE_
━━━━━━━━━━━━━━━━━━
╭ 👥 *3 BULAN*
┝ 💵 Rp25.000
┝ ⏳30 Hari
╰  _INVITE_
━━━━━━━━━━━━━━━━━━
💡 _Ketuk tombol dibawah untuk memilih durasi_`,
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
