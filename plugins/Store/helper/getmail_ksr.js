const imaps = require('imap-simple');
const { simpleParser } = require('mailparser');
const moment = require('moment-timezone');

// Konfigurasi IMAP untuk Gmail
const config = {
   imap: {
      user: 'ksrcloud2@gmail.com', // Ganti dengan email kamu
      password: 'otlv sprf krjp epae', // Ganti dengan password kamu
      host: 'imap.gmail.com',
      port: 993,
      tls: true,
      authTimeout: 3000
   }
};

// Fungsi untuk mengambil email dengan subjek "Kode sementara Netflix-mu"
const ambilEmailNetflix = async () => {
   try {
      const connection = await imaps.connect({ imap: config.imap });
      await connection.openBox('INBOX');

      // Dapatkan tanggal hari ini
      const today = moment().startOf('day').toDate(); // Mengambil awal hari ini sebagai objek Date

      // Cari email dengan subjek "Kode sementara Netflix-mu" dan tanggal hari ini
      const searchCriteria = [
         ['HEADER', 'SUBJECT', 'Kode akses sementara Netflix-mu'],
         ['SINCE', today] // Ambil email yang diterima sejak awal hari ini
      ];

      // Ambil seluruh isi email
      const fetchOptions = {
         bodies: ['HEADER.FIELDS (FROM TO SUBJECT DATE)', 'TEXT'],
         markSeen: false
      };

      const results = await connection.search(searchCriteria, fetchOptions);

      if (results.length === 0) {
         console.log('Tidak ada email dengan subjek "Kode sementara Netflix-mu" yang diterima hari ini.');
         return null; // Kembalikan null jika tidak ada email
      }

      // Ambil email terbaru yang ditemukan
      const latestMail = results[results.length - 1]; // Ambil email paling baru
      const emailBody = latestMail.parts.find(part => part.which === 'TEXT'); // Temukan bagian teks dari email

      if (emailBody) {
         const parsedMail = await simpleParser(emailBody.body);
         const fullText = parsedMail.text; // Ambil isi teks email

         // Memotong isi email hingga kalimat "Jaga keamanan akunmu:"
         const startPhrase = "Kode ini digunakan";
         const endPhrase = "Jaga keamanan akunmu";

         const startIndex = fullText.indexOf(startPhrase);
         const endIndex = fullText.indexOf(endPhrase);

         // Memastikan bahwa kedua frasa ditemukan dalam teks
         if (startIndex !== -1 && endIndex !== -1) {
            // Mengambil teks mulai dari "Diminta oleh" hingga "Jaga keamanan akunmu"
            const limitedText = fullText.substring(startIndex, endIndex + endPhrase.length);
            return limitedText; // Kembalikan teks yang dibatasi
         } else {
            console.log('Frasa yang diinginkan tidak ditemukan dalam email.');
            return null; // Kembalikan null jika frasa tidak ditemukan
         }
      } else {
         console.log('Tidak ada bagian teks dalam email.');
         return null; // Kembalikan null jika tidak ada bagian teks
      }
   } catch (error) {
      console.error('Terjadi kesalahan saat mengambil email:', error);
      return null;
   }
};

exports.run = {
   usage: ['kode_ksr'],
   hidden: ['kode_ksr'],
   category: 'app',
   async: async (m, { client, isPrefix, command, Func }) => {
      try {
         // Panggil fungsi untuk mengambil email Netflix
         const emailNetflix = await ambilEmailNetflix();

         // Pesan yang akan dikirim
         const pesanEmail = emailNetflix ? emailNetflix : '🔴 *Tidak ada email, Silahkan refresh!*\n\n_*Jika tetap tidak muncul* :_ \n\n 📺 *PADA TV* : \n• _*TV-mu bukan bagian dari Rumah dengan Akun Netflix untuk akun ini*_\n• Dan terdapat pilihan *Saya sedang bepergian* kemudian pilih *Kirim email*\n\n 📱 *PADA PERANGKAT LAIN* \n• _*Perangkatmu bukan bagian dari Rumah dengan Akun Netflix untuk akun ini*_\n• Dan terdapat pilihan *Tonton sementara* kemudian pilih *Kirim email*.';

         // Tombol refresh
         const buttons = [{
            name: 'quick_reply', // Tombol refresh
            buttonParamsJson: JSON.stringify({
               display_text: '🔄 Refresh', // Menampilkan teks pada tombol
               id: `${isPrefix}kode_build` // ID untuk tombol (menjalankan ulang command ini)
            })
         }];

         // Mengirim pesan ke chat
         await client.sendIAMessage(m.chat, buttons, m, {
            header: '',
            content: `📧  *KODE AKSES SEMENTARA NETFLIX-MU*
━━━━━━━━━━━━━━━━━━
*Catatan : Jika link tidak valid silahkan refresh!*
━━━━━━━━━━━━━━━━━━
${pesanEmail}

🔄 *Tap tombol Refresh untuk mencari email terbaru*`,
            footer: '', // Menghapus footer
            media: ''   // Menghapus media
         });
      } catch (e) {
         console.error('Terjadi kesalahan saat mengirim pesan:', e); // Tambahkan log kesalahan
         client.reply(m.chat, Func.jsonFormat(e), m);
      }
   },
   error: false,
   cache: true,
   location: __filename
};
