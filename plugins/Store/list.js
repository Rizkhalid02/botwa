exports.run = {
   usage: ['list'],
   async: async (m, {
      client,
      isPrefix,
      command,
      Func
   }) => {
      try {
         // Membuat button dengan JSON
         const buttons = [{
            name: 'single_select',
            buttonParamsJson: JSON.stringify({
               title: 'DAFTAR MENU',
               sections: [{
                  highlight_label: 'Popular',
                  rows: [{
                     title: '📱 APLIKASI PREMIUM',
                     id: `${isPrefix}app`
                  },{
                     title: '🎮 TOP UP GAME',
                     id: `${isPrefix}gme`
                  },{
                     title: '💡 TOKEN LISTRIK',
                     id: `${isPrefix}taglis`
                  },{
                     title: '📷 PAYMENT QRIS',
                     id: `${isPrefix}sendqr`
                  },{
                     title: '📄 DAPATKAN KODE',
                     id: `${isPrefix}account`
                  },{
                     title: '☎️ CHAT ADMIN',
                     id: `${isPrefix}confess 6289653898291 | Customer`
                  },{
                     title: '⌛ PERPANJANG NETFLIX',
                     id: `${isPrefix}perpanj`
                  },{
                     title: '🚩 MASALAH AKUN',
                     id: `${isPrefix}malkun`
                  }]
               }]
            })
         }];

         // Mengirim pesan IAMessage dengan gambar dari link yang disediakan
         const coverImageUrl = 'https://i.ibb.co/LtPd8xN/Black-and-Grey-Bold-Simple-Vintage-Photo-Studio-Facebook-Event-Cover-20241012-125030-0000.png'; // Gambar yang baru

         // Mengirim pesan dengan gambar yang ditambahkan ke menu tanpa footer dan media dari db
         client.sendIAMessage(m.chat, buttons, m, {
            header: '',
            content: `*Hallo Selamat Datang di KSR CLOUD*\n
*🤖 Bantuan* :      

> 📝 Untuk melihat *Price list* silahkan Tap tombol *Daftar menu*
> 💌 Untuk terhubung dengan admin silahkan pilih *CHAT ADMIN*

Terima kasih!`,
            footer: '', // Menghapus footer dari global.db
            media: { url: coverImageUrl } // Mengganti media dengan gambar dari URL
         });
      } catch (e) {
         client.reply(m.chat, Func.jsonFormat(e), m);
      }
   },
   error: false,
   cache: true,
   location: __filename
};
