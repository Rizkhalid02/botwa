exports.run = {
   usage: ['b2'],
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
               display_text: 'KONFIRMASI', // Menambahkan ikon kartu kredit
               id: `${isPrefix}n6`
            })
         }];
         client.sendIAMessage(m.chat, buttons, m, {
            header: '',
            content: `*DETAIL PEMBELIAN*

*Aplikasi* : _NETFLIX SHARING_
*Durasi* : _30 HARI_
*Tanggal* : _${formattedDate}_
*Jam* : _${formattedTime}_
━━━━━━━━━━━━━━━━━━
*KETUK TOMBOL DIBAWAH UNTUK MENDAPATKAN AKUN*`,
            footer: global.footer,
            media: global.db.setting.cover
         });
      } catch (e) {
         client.reply(m.chat, Func.jsonFormat(e), m);
      }
   },
   error: false,
   owner: true,
   cache: true,
   location: __filename
}
