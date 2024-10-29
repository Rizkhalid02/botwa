exports.run = {
   usage: ['tolong'],
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
               title: 'BANTUAN',
               sections: [{
                  rows: [{
                     title: 'MASALAH AKUN',
                     id: `${isPrefix}malkun`
                  },{
                     title: 'PERPANJANG LAYANAN',
                     id: `${isPrefix}lanjut`
                  },{
                     title: 'CARA BELI',
                     id: `${isPrefix}gestun`
                  },{
                     title: 'CHAT ADMIN',
                     id: `${isPrefix}confess 6289653898291 | Customer`
                  },]
               }]
            })
         }]
         
         client.sendIAMessage(m.chat, buttons, m, {
            header: '',
            content: `*🧑‍🔧 SILAHKAN TAP TOMBOL DIBAWAH UNTUK BANTUAN*\n`,
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