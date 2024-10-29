exports.run = {
   usage: ['malkun'],
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
               title: 'PILIHAN',
               sections: [{
                  rows: [{
                     title: '🗝️ GET KODE',
                     id: `${isPrefix}account`
                  },{
                     title: '☎️ CHAT ADMIN',
                     id: `${isPrefix}confess 6289653898291 | Request Password`
                  }]
               }]
            })
         }];
          // Mengirim pesan dengan gambar yang ditambahkan ke menu tanpa footer dan media dari db
         client.sendIAMessage(m.chat, buttons, m, {
            header: '',
            content: `*PERMASALAHAN PADA AKUN*\n
━━━━━━━━━━━━━━━━━━
☰ *NETFLIX*

◧ *HOUSEHOLD* 
   ● Muncul pesan "TV/Perangkatmu bukanlah bagian dari Rumah akun"
   ● _Solusi_ : Silahkan pilih "Saya sedang bepergian" (Untuk TV) atau "Tonton Sementara" (Untung perangkat lain)
   
> - Kemudian Tap tombol dibawah dan pilih "GET KODE"
> - _Dibaca pesan pada menu tersebut_

◧ *SCREEN LIMIT*
   ● Muncul pesan "Terlalu banyak layar pada akunmu"
   ● _Solusi_ : 
   
> - Jika kamu membeli *1P2U* silahkan tunggu hingga bisa.
> - Jika kamu membeli *1P1U* silahkan tinggalkan pesan.
   
⤱ Terjadi karena terlalu banyak orang yg sedang menonton diwaktu tersebut.

> - 1P2U : Terdapat 2 Pembeli pada 1 Profile ( Max 10 orang )
> - 1P1U : Terdapat 1 Pembeli pada 1 Profile ( Max 5 Orang )
> - Batas Layar Netflix : 4

◧ *AKUN TIDAK BISA DIGUNAKAN*
   ● Terlogout dan Password salah
   ● _Solusi_ :
   
> - Silahkan chat untuk meminta password baru 
━━━━━━━━━━━━━━━━━━`,
            footer: '', // Menghapus footer dari global.db
            media: '',
         });
      } catch (e) {
         client.reply(m.chat, Func.jsonFormat(e), m);
      }
   },
   error: false,
   cache: true,
   location: __filename
};
