export default async function displayLoadingScreen(conn, from) {
    const loadingStages = [
      "𝙼𝙰𝙳𝚄𝚆𝙰-ᴠ1ʟᴏᴀᴅɪɴɢ 《 █▒▒▒▒▒▒▒▒▒▒▒》10%,",
      "𝙼𝙰𝙳𝚄𝚆𝙰-ᴠ1ʟᴏᴀᴅɪɴɢ 《 ████▒▒▒▒▒▒▒▒》30%,",
      "𝙼𝙰𝙳𝚄𝚆𝙰-ᴠ1ʟᴏᴀᴅɪɴɢ 《 ███████▒▒▒▒▒》50%,",
      "𝙼𝙰𝙳𝚄𝚆𝙰-ᴠ1ʟᴏᴀᴅɪɴɢ 《 ██████████▒▒》80%,",
      "𝙼𝙰𝙳𝚄𝚆𝙰-ᴠ1ʟᴏᴀᴅɪɴɢ 《 ████████████》100%,",
      "𝙼𝙰𝙳𝚄𝙼𝙰𝙻 ʜᴀs ʟᴏᴀᴅᴇᴅ ᴄᴏᴍᴘʟᴇᴛʟʏ"
    ];
  
    try {
      const { key } = await conn.sendMessage(from, { text: 'ʟᴏᴀᴅɪɴɢ...' });
  
      for (let i = 0; i < loadingStages.length; i++) {
        await conn.relayMessage(from, {
          protocolMessage: {
            key: key,
            type: 14,
            editedMessage: {
              conversation: loadingStages[i]
            }
          }
        }, {});
      }
    } catch (error) {
      console.error('Error displaying loading screen:', error);
    }
  }
  
