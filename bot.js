const TeleBot = require('telebot');
const bot = new TeleBot('841592893:AAE2DSI6dVtHOR0dZ6BAPmj9K8DDVLtylrE');


bot.on('/comandodubersin', (msg)=> {
    return msg.reply.text("/start ou /oi = Oi, sou Bersinho ------ /melhorlinguagem = retorna foto da melhor linguagem ----- /oibersin = Olá, seu nome" )
})

bot.on(['/start', '/oi'], (msg) =>{
    return msg.reply.text('Oi, Sou Bersinho :D!')
});

bot.on('/melhorlinguagem', (msg) => {
    return msg.reply.photo('https://cdn.vox-cdn.com/thumbor/_AobZZDt_RVStktVR7mUZpBkovc=/0x0:640x427/1200x800/filters:focal(0x0:640x427)/cdn.vox-cdn.com/assets/1087137/java_logo_640.jpg');
});

bot.on('/melhorcelular', (msg) => {
    return msg.reply.photo('https://i.pinimg.com/736x/db/e3/2d/dbe32dab6d7f7a1fe09d56a1a979e1e0.jpg');
});


bot.on('/oibersin', (msg) => {
    return bot.sendMessage(msg.from.id, `Olá, ${ msg.from.first_name } ${msg.from.last_name}!`);
});

bot.on(/^\/diz (.+)$/, (msg, props) => {
    const text = props.match[1];
    return bot.sendMessage(msg.from.id, text);
})


bot.on('/marvetepira', (msg) => {
    return msg.reply.photo('https://cdn.vox-cdn.com/thumbor/WmL8_VpInoIW7gzRroUp06oiKUI=/0x564:1988x3056/1200x800/filters:focal(861x1516:1179x1834)/cdn.vox-cdn.com/uploads/chorus_image/image/60042713/image1.1528905658.jpeg')
});


bot.on('/casa', (msg) => {
    return bot.sendLocation(msg.from.id, [-10.1648181,-48.3371943])
});

bot.on('/localurpay', (msg) => {
    return bot.sendLocation(msg.from.id, [-10.184982,-48.327784,16])
});

bot.on('local', (msg) => {
    return msg.reply.text('https://viacep.com.br/ws/77022348/json/');
});

bot.start();