const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_39_12_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjA1LFxuICAgICAgICA2MixcbiAgICAgICAgMTkzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzksXG4gICAgICAgIDEzMixcbiAgICAgICAgMjEwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjEzLFxuICAgICAgICA4OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NixcbiAgICAgICAgMTY5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDcxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDc1LFxuICAgICAgICA3MCxcbiAgICAgICAgODksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjAyLFxuICAgICAgICAzNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDM5LFxuICAgICAgICA1LFxuICAgICAgICAzLFxuICAgICAgICA2LFxuICAgICAgICA1MyxcbiAgICAgICAgODQsXG4gICAgICAgIDg5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDU2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTY1LFxuICAgICAgICAzMixcbiAgICAgICAgMjAyLFxuICAgICAgICAyMixcbiAgICAgICAgMTkyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDM3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTExLFxuICAgICAgICA3OSxcbiAgICAgICAgMTU5LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjEyLFxuICAgICAgICA5MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDc1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQwLFxuICAgICAgICA4OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDMxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDMxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyLFxuICAgICAgICA1NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDYyLFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA4MixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDksXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyLFxuICAgICAgICAzMyxcbiAgICAgICAgNjksXG4gICAgICAgIDY3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQ4LFxuICAgICAgICAzMixcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMixcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDk4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjAxLFxuICAgICAgICA5NCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDUyLFxuICAgICAgICAyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTkzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQxLFxuICAgICAgICA1OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA4M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDQzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDUsXG4gICAgICAgIDMwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDcyLFxuICAgICAgICAxODcsXG4gICAgICAgIDAsXG4gICAgICAgIDYzLFxuICAgICAgICA3NixcbiAgICAgICAgMTYxLFxuICAgICAgICAyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTczLFxuICAgICAgICAyNDIsXG4gICAgICAgIDU5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDg4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNixcbiAgICAgICAgMTEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTAwLFxuICAgICAgICA4NyxcbiAgICAgICAgMjA0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIm5sTXBxZHc4U3Q1ZnViL1BxcmxOWW02OWNkdDRCUzhrbHFYK3Z4YUlFQ3c9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMixcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMixcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkZZN2VSMnZyVFpTT1pYM3owcFZsNFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTk5YWNlNWYtMzI0NS00N2ViLTlhNWUtMzYwNWJlMWNjMTUyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU4LFxuICAgICAgNzAsXG4gICAgICAxNjAsXG4gICAgICAyNyxcbiAgICAgIDIxNSxcbiAgICAgIDEzMixcbiAgICAgIDY4LFxuICAgICAgNTAsXG4gICAgICAxOTIsXG4gICAgICAxMjUsXG4gICAgICA4NyxcbiAgICAgIDIwLFxuICAgICAgMjYsXG4gICAgICAyOCxcbiAgICAgIDIzNyxcbiAgICAgIDExNCxcbiAgICAgIDIzMyxcbiAgICAgIDIwOSxcbiAgICAgIDYxLFxuICAgICAgMjIwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzLFxuICAgICAgMTQzLFxuICAgICAgMTk4LFxuICAgICAgMTE5LFxuICAgICAgNixcbiAgICAgIDU0LFxuICAgICAgODMsXG4gICAgICA5NyxcbiAgICAgIDI0NCxcbiAgICAgIDI0NCxcbiAgICAgIDI0OCxcbiAgICAgIDExLFxuICAgICAgOTAsXG4gICAgICA0NSxcbiAgICAgIDIzNCxcbiAgICAgIDk0LFxuICAgICAgMjI0LFxuICAgICAgMjI5LFxuICAgICAgODcsXG4gICAgICAyMjFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiN000MTY5R1RcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMzQzMjQwNDQ6NDlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJQZG9sbGFyXCIsXG4gICAgXCJsaWRcIjogXCI2ODk3NzU2MDY1NDA0ODo0OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLMjY1M1FRdGZheXVnWVlCQ0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImU1Y2g5ZVY4RTdsYjdoeTZFNGRPUHJJUCtiOE9OUHNnUzZGcDBiTTN2MG89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibWRHR1hvVktCWVlmM3FicVpnMGdveUtwUTkyNFg1TWJoWnBod0NmaG9Qa1MrSGgzRWRKdDR1SmdlQjdRWm45NnA5MTdOd2JNQlJkYnZMQzhsQW1kQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTGdrajF4V1NucmhFU1htMWdCWGpFZU5Ccjh3RnEvS21lOFZUaUZKNk9VSDRvRDdSYmQ3dldCN3N1ZzZJYm5QeU04YStHYllyMFllWVBaaC92bUlMaEE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTEzNDMyNDA0NDo0OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDc0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzMwODE5MTNcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
