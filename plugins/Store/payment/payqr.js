const { MessageType } = require('@adiwajshing/baileys'); // Pastikan untuk mengimpor MessageType jika menggunakan Baileys
const fs = require('fs');

// URL gambar QRIS
const qrisImageUrl = 'https://i.ibb.co.com/dgmWsJ6/1728481204006.jpg'; // Ganti dengan URL gambar QRIS yang sebenarnya

exports.run = {
   usage: ['sendqr'],
   hidden: ['sendqr'],
   category: 'app',
   async: async (m, { client }) => {
      try {
         // Mengirimkan gambar QRIS
         const message = {
            image: { url: qrisImageUrl },
            caption: 'Silakan scan QRIS untuk melakukan pembayaran.'
         };

         await client.sendMessage(m.chat, message);

      } catch (e) {
         console.error(e);
         client.reply(m.chat, 'Terjadi kesalahan saat mengirim gambar.', m);
      }
   },
   error: false,
   cache: true,
   location: __filename
};