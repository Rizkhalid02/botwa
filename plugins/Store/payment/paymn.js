const { MessageType } = require('@adiwajshing/baileys'); // Pastikan untuk mengimpor MessageType jika menggunakan Baileys

// URL gambar QRIS
const qrisImageUrl = 'https://i.ibb.co/JK73XYX/photo-2024-10-15-11-08-59.jpg'; // Ganti dengan URL gambar QRIS yang sebenarnya

exports.run = {
   usage: ['paymn'],
   hidden: ['paymn'],
   category: 'app',
   async: async (m, { client }) => {
      try {
         // Mengirimkan gambar QRIS
         const message = {
            image: { url: qrisImageUrl },
            caption: `*PEMBAYARAN*
━━━━━━━━━━━━━━━━━━
💳 BCA : 7621224151
💳 Seabank : 901986572462
💳 Dana : 089653898271
💳 Gopay : 085156971094

*KIRIM BUKTI TRANSFER KE DALAM CHAT*`,
            mimetype: 'image/jpeg' // Tentukan mimetype gambar
         };

         await client.sendMessage(m.chat, message, { quoted: m });

      } catch (e) {
         console.error(e);
         client.reply(m.chat, 'Terjadi kesalahan saat mengirim gambar.', m);
      }
   },
   error: false,
   cache: true,
   location: __filename
};
