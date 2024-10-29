exports.run = {
   usage: ['viuszx'],
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
               title: 'DURASI',
               sections: [{
                  rows: [{
                     title: '3 Bulan',
                     // description: `X`,
                     id: `${isPrefix}pbviu3b`
                  }, {
                     title: '6 Bulan',
                     // description: `Y`,
                     id: `${isPrefix}pbviu6b`
                  }, {
                     title: '1 Tahun',
                     // description: `Y`,
                     id: `${isPrefix}pbviu1t`
                  }]
               }]
            })
         }]
         client.sendIAMessage(m.chat, buttons, m, {
            header: '',
            content: `➲ *VIU PREMIUM*
━━━━━━━━━━━━━━━━━━
▸ 3 Bulan : Rp5000
▸ 6 Bulan : Rp7000
▸ 1 Tahun : Rp15.000

  • Full Garansi
  • Akun Penjual
━━━━━━━━━━━━━━━━━━`,
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