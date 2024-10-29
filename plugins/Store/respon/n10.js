const { MessageType } = require('@adiwajshing/baileys'); // Pastikan untuk mengimpor MessageType jika menggunakan Baileys
const fs = require('fs');

// URL gambar dari link yang diberikan
const coverImageUrl = 'https://i.ibb.co/LtPd8xN/Black-and-Grey-Bold-Simple-Vintage-Photo-Studio-Facebook-Event-Cover-20241012-125030-0000.png';

// ID grup dari link undangan
const groupID = '120363321044656638@g.us';

exports.run = {
   usage: ['n10'],
   hidden: ['n10'],
   category: 'app',
   async: async (m, { client }) => {
      try {
         // Mendapatkan waktu real-time
         const currentDate = new Date();

         // Memformat tanggal dan menghitung tanggal berakhir dalam 30 hari
         const formattedDate = currentDate.toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
         });
         const endDate = new Date(currentDate);
         endDate.setDate(endDate.getDate() + 30);
         const formattedEndDate = endDate.toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
         });

         // Mendapatkan jam dan detik secara terpisah
         const hours = currentDate.getHours();
         const seconds = currentDate.getSeconds();
         const formattedTime = `${hours}:${seconds}`;

         // Membuat ID transaksi acak (kombinasi angka dan huruf)
         const transactionID = Math.random().toString(36).substring(2, 10).toUpperCase();

         // Mendapatkan nomor pembeli (nomor dari orang yang di-reply)
         let nomorPembeli = m.quoted ? m.quoted.sender.split('@')[0] : 'Tidak ada nomor';

         // Mendapatkan nomor telepon pengirim perintah
         let nomorPengirim = m.sender.split('@')[0];

         // Ekstraksi informasi email, password, profil, pin, dan nomor telepon dari pesan yang di-reply
         let textMessage = m.quoted ? m.quoted.text : '';
         let emailMatch = textMessage.match(/Email\s*:\s*(\S+)/i);
         let profileMatch = textMessage.match(/Profile\s*:\s*(.+)/i);
         let pinMatch = textMessage.match(/Pin\s*:\s*(\d+)/i);
         let passwordMatch = textMessage.match(/Password\s*:\s*(\S+)/i);
         let phoneMatch = textMessage.match(/\+?\d{1,3}[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/); // Menambahkan nomor telepon

         let email = emailMatch ? emailMatch[1] : 'Tidak ada email';
         let profile = profileMatch ? profileMatch[1] : 'Tidak ada profil';
         let pin = pinMatch ? pinMatch[1] : 'Tidak ada pin';
         let password = passwordMatch ? passwordMatch[1] : 'Tidak ada password';
         let phone = phoneMatch ? phoneMatch[0] : 'Tidak ada nomor telepon'; // Menampilkan nomor telepon

         // Mengirim pesan dengan gambar dari link URL
         const message = {
            image: { url: coverImageUrl },
            caption: `*PESANAN SELESAI*
━━━━━━━━━━━━━━━━━━
📞 *Pembeli* : _${nomorPengirim}_
📧 *Email*: _ksrcloud2@gmail.com_
🔑 *Password*: _Nodame11_
👤 *Profile*: _1_
🔑 *Pin*: _1472_
━━━━━━━━━━━━━━━━━━
📅 *Tanggal*: _${formattedDate}_
📅 *Berakhir*: _${formattedEndDate}_ 
🆔 *ID Transaksi*: _${transactionID}_
━━━━━━━━━━━━━━━━━━
📝 Rules : 
• Dilarang ubah apapun!
• Dilarang membagikan akun kepada orang lain!
• Dilarang Otak-atik keanggotaan netflix!
• 1 Device!

Melanggar = Hangus!
━━━━━━━━━━━━━━━━━━
*Terima kasih!*`
         };

         // Mengirim pesan ke pengguna
         await client.sendMessage(m.chat, message);

         // Forward pesan ke grup
         await client.sendMessage(groupID, message);

      } catch (e) {
         console.error(e);
         client.reply(m.chat, 'Terjadi kesalahan saat mengirim akun.', m);
      }
   },
   error: false,
   cache: true,
   location: __filename
};