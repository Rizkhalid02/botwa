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
   usage: ['fullver'],
   hidden: ['fullver'],
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
📑 *DAFTAR HARGA LENGKAP*
━━━━━━━━━━━━━━━━━━
➲ *NETFLIX SHARING*

▸ 1P2U : Rp20.000
▸ 1P1U : Rp25.000
 
  • Durasi 30 Hari
  • Full Garansi
  • No VPN
━━━━━━━━━━━━━━━━━━
➲ *YOUTUBE PREMIUM*

▸ 1 Bulan Invite : Rp7.000
▸ 3 Bulan Individu : Rp25.000

  • Full Garansi
  • Invite : Akun pembeli
  • Individu : Akun penjual
━━━━━━━━━━━━━━━━━━
➲ *CANVA PREMIUM*

▸ 1 Bulan Invite : Rp5.000
▸ 2 Bulan Invite : Rp8.000
▸ 3 Bulan Invite : Rp10.000

  • Full Garansi
  • Via Invite
━━━━━━━━━━━━━━━━━━
➲ *CAPCUT PRO*

▸ 1 Bulan : Rp10.000
▸ 2 Bulan : Rp17.000
▸ 1 Tahun : Rp25.000

  • Full Garansi
  • Sharing
  • Akun Pembeli
━━━━━━━━━━━━━━━━━━
➲ *PRIME VIDEO*

▸ 1 Bulan : Rp18.000

  • Full Garansi
  • Private
  • Akun Penjual
━━━━━━━━━━━━━━━━━━
➲ *HBO GO*

▸ 1 Bulan : Rp20.000

  • Full Garansi
  • Sharing
  • Akun Penjual
━━━━━━━━━━━━━━━━━━
➲ *VIDIO PREMIUM*

▸ 1 Bulan : Rp30.000 ( PLATINUM )
▸ 1 Bulan : Rp65.000 ( DIAMOND )

  • Full Garansi
  • Private
  • Akun Penjual
  • Diamond Khusus Hp & Tablet
━━━━━━━━━━━━━━━━━━
➲ *CHAT GPT*

▸ 1 Bulan : Rp50.000 ( SHARING )
▸ 1 Bulan : Rp210.000 ( PRIVATE )

  • Full Garansi
  • Akun Penjual
━━━━━━━━━━━━━━━━━━
➲ *VIU PREMIUM*

▸ 3 Bulan : Rp5000
▸ 6 Bulan : Rp7000
▸ 1 Tahun : Rp15.000

  • Full Garansi
  • Akun Penjual
━━━━━━━━━━━━━━━━━━

👀 *INI BELUM SEMUA YA, MASIH MAGER*`
}
