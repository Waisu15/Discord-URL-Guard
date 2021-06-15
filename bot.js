const config = require("./config.json");
const Discord = require("discord.js");
const client = new Discord.Client();
const request = require("request");
const moment = require("moment");
const chalk = require("chalk");
moment.locale("tr");

// Botu Test Edebilecek 30 Boost Sunucum Olmadığı İçin Projeyi Direk Yükledim. Sistemde Hatalar Olabilir!
// Botunuzun İntentleri Açık Olmazsa Sistem Hiçbir Şekilde Çalışmaz!

client.on("ready", async () => {   
client.user.setPresence({ activity: { name: `${client.user.username} | Waisu Was Just Here!` }, status: "dnd" });
console.clear();
console.log(chalk `{greenBright [${moment().format('YYYY-MM-DD HH:mm:ss')}]} URL {green ${config.SETTİNGS.url}}`);
console.log(chalk `{greenBright [${moment().format('YYYY-MM-DD HH:mm:ss')}]} {red Waisu} | {blueBright ${client.user.username}} İsmi İle Giriş Yapıldı.`);  
});

client.on("guildUpdate", async (olds, news) => {

if(olds.vanityURLCode ==! news.vanityURLCode) {
let logs = await news.fetchAuditLogs({type: "GUILD_UPDATE"}).then(audit => audit.entries.first());
let member = newGuild.member(newGuild.members.cache.get(logs.executor.id));
if(member || member.id ==! config.BOT.admin || member.id ==! client.user.id) {

let ch = client.channels.cache.get(config.SETTİNGS.log);

const embed = new Discord.MessageEmbed()
.setColor("RED")
.setDescription(`${member} - (\`${member.id}\`) Adlı Kişi \`${moment(Date.now()).add(10, "hours").format("HH:mm:ss DD MMMM YYYY")}\` Tarihinde Sunucunun URL'sini Değiştirdiği İçin Sunucudan Banlandı ve Eski URL Geri Alınmaya Çalışıldı.`)
.setFooter("Developer Waisu")
.setTimestamp()

if(ch) { ch.send(embed); } else news.owner.send(embed).catch(err => client.user.setPresence({ activity: { name: "URL Saldırıya Uğradı!" }, status: "dnd" }));

news.members.ban(member.id, { reason: `Waisu URL Guard System` });

const conf = { url: `https://discord.com/api/v6/guilds/${news.id}/vanity-url`, body: { code: config.SETTİNGS.url }, json: true, method: "PATCH", headers: { "Authorization": `Bot ${config.BOT.token}` } };

request(conf, (err, res, body) => {
if(err) return console.log(err);
});

};
};
});

client.login(config.BOT.token);
