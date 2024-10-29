exports.run = {
  usage: ['wodono'],
  async: async (m, { client, isPrefix, command, Func }) => {
    try {
      const buttons = [{
        name: 'quick_reply',
        buttonParamsJson: JSON.stringify({
          display_text: 'CHAT CS',
          id: `${isPrefix}confess 6289653898291 | Customer`
        })
      }];
      client.sendIAMessage(m.chat, buttons, m, {
        header: '',
        content: `*TAP TOMBOL DIBAWAH UNTUK CHAT ADMIN*`,
        footer: global.footer,
        media: global.db.setting.cover
      });
    } catch (e) {
      client.reply(m.chat, Func.jsonFormat(e), m);
    }
  },
  error: false,
  cache: true,
  location: __filename
}
