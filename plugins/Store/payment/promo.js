exports.run = {
   usage: ['pokto'],
   async: async (m, { client, isPrefix, command, Func }) => {
      try {
         const buttons = [{
            name: 'quick_reply',
            buttonParamsJson: JSON.stringify({
               display_text: '💳 PAYMENT', // Menambahkan ikon kartu kredit
               id: `${isPrefix}payment`
            })
         }];
         client.sendIAMessage(m.chat, buttons, m, {
            header: '',
            content: `*PROMO OKTOBER* \n
*YOUTUBE PREMIUM*
💵 3 BULAN : Rp20.000 (1x Replace)
💵 3 BULAN : Rp25.000 (Full Garansi)\n 
💡 *PENJELASAN* \n 
- 3 Bulan 1x Replace : Ketika akun youtube terkena nonaktif, maka akan diberikan ganti 1x
- 3 Bulan Full Garansi\n 
*NETFLIX SHARING*
💵 1P2U : Rp15.000
💵 1P1U : Rp20.000\n 

💡 _Saat perpanjang, harga mengikuti harga normal_`,
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
