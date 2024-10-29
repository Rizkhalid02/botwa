const moment = require('moment-timezone');

// Fungsi untuk menghasilkan kombinasi huruf dan angka acak
const generateRandomID = (length) => {
   const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'; // Huruf dan angka
   let result = '';
   for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length)); // Ambil karakter acak
   }
   return result;
};

exports.run = {
   usage: ['rule'],
   hidden: ['rule'],
   category: 'app',
   async: async (m, {
      client,
      blockList,
      setting,
      Func
   }) => {
      try {
         // Abaikan statistik lainnya, dan langsung kirim template pesan yang diminta
         client.sendMessageModify(m.chat, netflixSharingTemplate(), m, {
            largeThumb: true,
            thumbnail: setting.cover
         })
      } catch (e) {
         client.reply(m.chat, Func.jsonFormat(e), m)
      }
   },
   error: false,
   cache: true,
   location: __filename
}

// Template informasi Netflix Sharing
const netflixSharingTemplate = () => {
   // Dapatkan tanggal real-time sesuai zona waktu (misalnya Asia/Jakarta)
   const currentDate = moment().tz('Asia/Jakarta').format('DD-MM-YYYY');
   
   // Membuat ID acak dengan huruf dan angka (contoh: 8 karakter)
   const randomID = generateRandomID(8);

   return `━━━━━━━━━━━━━━━━━━
📃 *ATURAN PENGGUNAAN NETFLIX*
━━━━━━━━━━━━━━━━━━
➲ *ATURAN DASAR*

● Dilarang mengubah pengaturan akun dalam bentuk apapun!
● Dilarang melakukan perubahan pada keanggotaan Netflix!
● Dilarang membagikan akses akun kepada orang lain!
● Dilarang menggunakan akun pada lebih dari satu perangkat secara bersamaan (double device)!
━━━━━━━━━━━━━━━━━━
➲ *PERPANJANGAN*

● Perpanjangan langganan Netflix maksimal dilakukan H-1 sebelum masa aktif berakhir.
● Kamu akan menerima notifikasi atau broadcast pengingat untuk memperpanjang langganan.
━━━━━━━━━━━━━━━━━━
➲ *HOUSEHOLD (Layar Rumah)*

● Jika akun terkena fitur "Household" dan kamu masih dapat memilih:
  • Saya sedang bepergian (untuk TV) atau
  • Tonton sementara (untuk Handphone)
Silakan hubungi admin untuk mendapatkan kode verifikasi.
● Jika hanya terdapat opsi Perbarui alamat rumah, jangan klik opsi tersebut!
━━━━━━━━━━━━━━━━━━
➲ *PENGGUNAAN DOUBLE DEVICE*
● Dilarang menggunakan akun pada dua perangkat secara bersamaan (double streaming), karena dapat menyebabkan akun terkena batasan layar (screen limit) yang akan mengganggu pengguna lain.
● Untuk paket 1P1U, kamu dapat meminta nama profil dan PIN khusus sesuai keinginanmu!`
}
