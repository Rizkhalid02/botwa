exports.run = {
   usage: ['prod1'],
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
                     title: '1P2U',
                     // description: `X`,
                     id: `${isPrefix}2p`
                  }, {
                     title: '1P1U',
                     // description: `Y`,
                     id: `${isPrefix}1p`
                  }]
               }]
            })
         }]
         client.sendIAMessage(m.chat, buttons, m, {
            header: '',
            content: `*NETFLIX SHARING* \n
💵 1P2U : Rp20.000 
💵 1P1U : Rp25.000\n 
💡 *PENJELASAN* \n 
👥 = 1P2U : Didalam Profile terdapat kamu dan pembeli lain
👤 = 1P1U : Hanya kamu di dalam profile \n
*SILAHKAN PILIH JENIS AKUN:*`,
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