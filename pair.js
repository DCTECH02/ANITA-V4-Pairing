const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Maher_Zubair,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function SIGMA_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_Maher_Zubair = Maher_Zubair({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_Maher_Zubair.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_Maher_Zubair.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_Maher_Zubair.ev.on('creds.update', saveCreds)
            Pair_Code_By_Maher_Zubair.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
                await Pair_Code_By_Maher_Zubair.sendMessage(Pair_Code_By_Maher_Zubair.user.id, { text: `▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❶  || *ᴡʜᴀᴛsᴀᴘᴘ ᴄʜᴀɴɴᴇʟ* = https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❷ || *ᴛᴇʟᴇɢʀᴀᴍ* = https://t.me/davidcyriltech 
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
➌ || *ʏᴏᴜᴛᴜʙᴇ* = https://www.youtube.com/@DavidCyril_TECH 
▬▬▬▬▬▬▬▬▬▬▬▬▬▬

\n> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀᴠɪᴅ ᴄʏʀɪʟ ᴛᴇᴄʜ™` });
            await delay(1000 * 2) 
             const classic = await  Pair_Code_By_Maher_Zubair.sendMessage(Pair_Code_By_Maher_Zubair.user.id, { document: data, mimetype: `application/json`, fileName: `creds.json` })
               Pair_Code_By_Maher_Zubair.groupAcceptInvite("");
                Pair_Code_By_Maher_Zubair.groupAcceptInvite("")
             await Pair_Code_By_Maher_Zubair.sendMessage(Pair_Code_By_Maher_Zubair.user.id, { text: `
┌─❖
│ ⚠️Do not share this file with anybody⚠️
└┬❖  
┌┤✑  ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀᴠɪᴅ ᴄʏʀɪʟ ᴛᴇᴄʜ
│└────────────┈ ⳹        
│©2024-2099 David Cyril  
└─────────────────┈ ⳹\n\n ` }, {quoted: classic });

        await delay(100);
        await Pair_Code_By_Maher_Zubair.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    SIGMA_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await SIGMA_MD_PAIR_CODE()
});
module.exports = router
