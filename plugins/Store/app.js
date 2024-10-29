exports.run = {
   usage: ['app'],
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
               title: 'DAFTAR MENU APLIKASI',
               sections: [{
                  highlight_label: 'BEST SELLING',
                  rows: [{
                     title: 'NETFLIX',
                     id: `${isPrefix}prod1`
                  }, {
                     title: 'CANVA',
                     id: `${isPrefix}prod2`
                  }, {
                     title: 'CAPCUT',
                     id: `${isPrefix}prod3`
                  }, {
                     title: 'YOUTUBE',
                     id: `${isPrefix}prod5`,
                     highlight_label: 'BEST SELLING',
                  }, {
                     title: 'DISNEY',
                     id: `${isPrefix}-`
                  }, {
                     title: 'PRIME VIDEO',
                     id: `${isPrefix}amzpr`
                  }, {
                     title: 'VIDIO',
                     id: `${isPrefix}vidkuy`
                  }, {
                     title: 'SPOTIFY',
                     id: `${isPrefix}stipi`
                  }, {
                     title: 'VIU',
                     id: `${isPrefix}viuszx`
                  }, {
                     title: 'DISCORD',
                     id: `${isPrefix}discord`
                  }, {
                     title: 'CHAT GPT',
                     id: `${isPrefix}chtgpt`
                  }]
               }]
            })
         }]
         client.sendIAMessage(m.chat, buttons, m, {
            header: '',
            content: '🤖 *Silahkan ketuk tombol dibawah untuk melihat Daftar menu Aplikasi Premium*:',
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
