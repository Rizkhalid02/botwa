exports.run = {
   usage: ['taglis'],
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
               title: 'NOMINAL',
               sections: [{
                  rows: [{
                     title: '200K',
                     // description: `X`,
                     id: `${isPrefix}t200`
                  }, {
                     title: '500K',
                     // description: `Y`,
                     id: `${isPrefix}t500`
                  },]
               }]
            })
         }]
         client.sendIAMessage(m.chat, buttons, m, {
            header: '',
            content: `▎⚡ TOKEN/TAGIHAN LISTRIK
———————————————————
⚡ 200K = Rp192.000
⚡ 500K = Rp480.000
———————————————————
⚡ TAGIHAN LISTRIK
> Nominal - 5% = Jumlah Bayar
———————————————————
📝 NOTE
- Pembelian TOKEN/TAGIHAN Harus di H-1 , Karena proses bisa lama .
- Disarankan untuk tidak membeli secara mendadak atau ketika listrik sudah berbunyi, Proses tidak bisa cepat!`,
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