exports.run = {
   usage: ['gme'],
   async: async (m, {
      client,
      isPrefix,
      command,
      Func
   }) => {
      try {
         const buttons = [{
            name: 'single_select',
            buttonParamsJson: JSON.stringify({
               title: 'TOP UP GAME',
               sections: [{
                  rows: [{
                     title: 'MOBILE LEGENDS 1',
                     id: `${isPrefix}mlbb1`
                  }, {
                     title: 'HONOR OF KINGS',
                     id: `${isPrefix}hok1`
                  }, {
                     title: 'WDP MLBB',
                     id: `${isPrefix}wdpml1`
                  }, {
                     title: 'STARLIGHT MLBB',
                     id: `${isPrefix}slml1`
                  }]
               }]
            })
         }]
         client.sendIAMessage(m.chat, buttons, m, {
            header: '',
             content: `*🎮 MENU TOP UP GAME*\n
*📄NOTE* :       
> ⌛ Proses Order masih manual
> 🔨 Proses 1-10 Menit (Bisa lebih lama jika ada kendala)


Terima kasih!`,
            footer: global.footer,
            media: global.db.setting.cover
         })
      } catch (e) {
         client.reply(m.chat, Func.jsonFormat(e), m)
      }
   },
   error: false,
   cache: true,
   location: __filename,
   async onButtonPress(buttonId, m, client) {
      if (buttonId === `${isPrefix}netflix`) {
         const message = `
▎🛍️ *NETFLIX SHARING*
━━━━━━━━━━━━━━━━━━
╭ 👥 *1P2U*
┝ 💵 Rp20.000
┝ ⏳30 Hari
╰ _Terdapat 2 Orang Dalam Profile_
━━━━━━━━━━━━━━━━━━
╭ 👥 *1P1U*
┝ 💵 Rp25.000
┝ ⏳30 Hari
╰ _Hanya kamu di dalam profile_
━━━━━━━━━━━━━━━━━━
💡 _Untuk melihat metode pembayaran silahkan balas *.Payment*_`;
         await client.reply(m.chat, message, m);
      } else if (buttonId === `${isPrefix}canva`) {
         const message = `
▎🛍️ *CANVA*
━━━━━━━━━━━━━━━━━━
╭ 👥 *1 BULAN*
┝ 💵 Rp10.000
┝ ⏳30 Hari
╰ _INVITE_
━━━━━━━━━━━━━━━━━━
╭ 👥 *2 BULAN*
┝ 💵 Rp15.000
┝ ⏳60 Hari
╰ _INVITE_
━━━━━━━━━━━━━━━━━━
╭ 👥 *3 BULAN*
┝ 💵 Rp25.000
┝ ⏳90 Hari
╰ _INVITE_
━━━━━━━━━━━━━━━━━━
💡 _Untuk melihat metode pembayaran silahkan balas *.Payment*_`;
         await client.reply(m.chat, message, m);
      } else if (buttonId === `${isPrefix}capcut`) {
         const message = `
▎🛍️ *CAPCUT PREMIUM*
━━━━━━━━━━━━━━━━━━
╭ 👥 *SHARING*
┝ 💵 Rp30.000
┝ ⏳1 Tahun
╰ _BISA SEMUA DEVICE_
━━━━━━━━━━━━━━━━
💡 _Untuk melihat metode pembayaran silahkan balas *.Payment*_`;
         await client.reply(m.chat, message, m);
      } else if (buttonId === `${isPrefix}youtube`) {
         const message = `
▎🛍️ *YOUTUBE PREMIUM*
━━━━━━━━━━━━━━━━━━
╭ 👥 *1 BULAN*
┝ 💵 Rp7.000
┝ ⏳30 Hari
╰ _VIA INVITE_
━━━━━━━━━━━━━━━━━━
╭ 👥 *3 BULAN MIXPLAN*
┝ 💵 Rp30.000
┝ ⏳3 Bulan
╰ _AKUN DARI PENJUAL_
━━━━━━━━━━━━━━━━━━
💡 _Untuk melihat metode pembayaran silahkan balas *.Payment*_`;
         await client.reply(m.chat, message, m);
      } else if (buttonId === `${isPrefix}disney`) {
         const message = `
▎🛍️ *DISNEY PREMIUM*
━━━━━━━━━━━━━━━━━━
╭ 👥 *1 BULAN*
┝ 💵 Rp30.000
┝ ⏳30 Hari
╰  _SHARING AKUN_
━━━━━━━━━━━━━━━━━━
💡 _Untuk melihat metode pembayaran silahkan balas *.Payment*_`;
         await client.reply(m.chat, message, m);
      } else if (buttonId === `${isPrefix}prime`) {
         const message = `
▎🛍️ *PRIME VIDEO*
━━━━━━━━━━━━━━━━━━
╭ 👥 *1 BULAN*
┝ 💵 Rp20.000
┝ ⏳30 Hari
╰  _INVITE_
━━━━━━━━━━━━━━━━━━
💡 _Untuk melihat metode pembayaran silahkan balas *.Payment*_`;
         await client.reply(m.chat, message, m);
      } else if (buttonId === `${isPrefix}vidio`) {
         const message = `
▎🛍️ *VIDIO PLATINUM*
━━━━━━━━━━━━━━━━━━
╭ 👥 *PRIVATE PLATINUM*
┝ 💵 Rp30.000
┝ ⏳30 Hari
╰ _PRIVATE DI SEMUA DEVICE_
━━━━━━━━━━━━━━━━━━
╭ 👥 *PRIVATE DIAMOND*
┝ 💵 Rp80.000
┝ ⏳30 Hari
╰ _KHUSUS HP & TABLET_
━━━━━━━━━━━━━━━━━━
💡 _Untuk melihat metode pembayaran silahkan balas *.Payment*_`;
         await client.reply(m.chat, message, m);
      }
   }
}
