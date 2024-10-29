exports.run = {
   usage: ['hok1'],
   async: async (m, { client, isPrefix, command, Func }) => {
      try {
         // Mendapatkan waktu real-time
         const currentDate = new Date();

         // Memformat tanggal
         const formattedDate = currentDate.toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
         });

         // Memformat jam
         const formattedTime = currentDate.toLocaleTimeString('id-ID', {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
         });

         // Membuat ID transaksi acak (kombinasi angka dan huruf)
         const transactionID = Math.random().toString(36).substring(2, 10).toUpperCase();

         const buttons = [{
            name: 'quick_reply',
            buttonParamsJson: JSON.stringify({
               display_text: '💳 QRIS', // Menambahkan ikon kartu kredit
               id: `${isPrefix}sendqr`
            })
         }];
         client.sendIAMessage(m.chat, buttons, m, {
            header: '',
            content: `━━━━━━━━━━━━━━━━━━
   *HONOR OF KINGS*
━━━━━━━━━━━━━━━━━━
*COMING SOON* 😋
━━━━━━━━━━━━━━━━━━`,
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
