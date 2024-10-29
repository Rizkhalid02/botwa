exports.run = {
   usage: ['account'],
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
               title: 'PILIH AKUN',
               sections: [{
                  rows: [{
                     title: 'buildefigy@gmail.com',
                     id: `${isPrefix}kode_build`
                  },{
                     title: 'ksrcloud2@gmail.com',
                     id: `${isPrefix}kode_ksr`
                  },{
                     title: 'minerale5@ksrcloud.site',
                     id: `${isPrefix}kode_ksr`
                  },{
                     title: 'khalidabyss5@ksrcloud.site',
                     id: `${isPrefix}kode_ksr`
                  },{
                     title: 'john.smith@ksrcloud.site',
                     id: `${isPrefix}kode_cloud`
                  },{
                     title: 'william.moore@ksrcloud.shop',
                     id: `${isPrefix}kode_cloud`
                  },{
                     title: 'mia.lewis@ksrcloud.dev',
                     id: `${isPrefix}kode_cloud`
                  },{
                     title: 'sarah.davis@ksrcloud.site',
                     id: `${isPrefix}kode_cloud`
                  },{
                     title: 'emily.johnson@ksrcloud.site',
                     id: `${isPrefix}kode_cloud`
                  },{
                     title: 'michael.brown@ksrcloud.site',
                     id: `${isPrefix}kode_cloud`
                  },{
                     title: 'sophia.wilson@ksrcloud.site',
                     id: `${isPrefix}kode_cloud`
                  },{
                     title: 'david.jones@ksrcloud.site',
                     id: `${isPrefix}kode_cloud`
                  },{
                     title: 'ava.jackson@ksrcloud.shop',
                     id: `${isPrefix}kode_cloud`
                  },{
                     title: 'ethan.thomas@ksrcloud.shop',
                     id: `${isPrefix}kode_cloud`
                  },{
                     title: 'isabella.white@ksrcloud.shop',
                     id: `${isPrefix}kode_cloud`
                  },{
                     title: 'benjamin.harris@ksrcloud.dev',
                     id: `${isPrefix}kode_cloud`
                  },{
                     title: 'olivia.miller@ksrcloud.site',
                     id: `${isPrefix}kode_cloud`
                  }]
               }]
            })
         }];

         // Mengirim pesan IAMessage dengan gambar dari link yang disediakan
         const coverImageUrl = 'https://i.ibb.co/LtPd8xN/Black-and-Grey-Bold-Simple-Vintage-Photo-Studio-Facebook-Event-Cover-20241012-125030-0000.png'; // Gambar yang baru

         // Mengirim pesan dengan gambar yang ditambahkan ke menu tanpa footer dan media dari db
         client.sendIAMessage(m.chat, buttons, m, {
            header: '',
            content: `*GET KODE SEMENTARA NETFLIX*\n
*Perhatikan* : Kode ini diperlukan jika pada akun muncul 

   📺 *PADA TV* :
   • _*TV-mu bukan bagian dari Rumah dengan Akun Netflix untuk akun ini*_ 
   • Dan terdapat pilihan *Saya sedang bepergian*
   
   📱 *PADA PERANGKAT LAIN*
   • _*Perangkatmu bukan bagian dari Rumah dengan Akun Netflix untuk akun ini*_ 
   • Dan terdapat pilihan *Tonton sementara*
   
⚠️ *PERINGATAN KERAS* : Jika tidak muncul pilihan seperti diatas, silahkan minta akun baru!

💡 Pilih *Saya sedang bepergian* atau *Tonton sementara* lalu pilih *Kirim Email* pada akun terlebih dahulu sebelum memilih email pada tombol dibawah ini : `,
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
