exports.run = {
   usage: ['mlbb1'],
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
               display_text: '💳 Pembayaran', // Menambahkan ikon kartu kredit
               id: `${isPrefix}paymn`
            })
         }];
         client.sendIAMessage(m.chat, buttons, m, {
            header: '',
            content: `━━━━━━━━━━━━━━━━━━
   *DAFTAR HARGA MLBB 1*
━━━━━━━━━━━━━━━━━━
85 💎: Rp22.866
170 💎: Rp45.526
240 💎: Rp64.478
284 💎: Rp76.632
296 💎: Rp78.795
408 💎: Rp108.665
568 💎: Rp149.350
738 💎: Rp194.876
875 💎: Rp227.630
1171 💎: Rp306.425
1750 💎: Rp455.260
2010 💎: Rp493.370
3500 💎: Rp910.520
4830 💎: Rp1.174.200
6840 💎: Rp1.667.570
━━━━━━━━━━━━━━━━━━
*Note* : Harga bisa berubah sewaktu-waktu!`,
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
