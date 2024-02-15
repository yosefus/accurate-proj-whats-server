const { Client, LocalAuth } = require('whatsapp-web.js')
const qrcode = require('qrcode-terminal')
const cron = require('node-cron')
const numbers = '+972545894480'

const client = new Client({
    authStrategy: new LocalAuth
})
client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true })
})
client.on('ready', () => {
    console.log('client is ready');


})
const num = '+972545894480'
const listNum = ['+972544370508']
function dispatchTimingMessages(time, numbers) {
    cron.schedule(time,
        () => {
            console.log('cron work');
            for (const i of numbers) {
                const chatId = i.substring(1) + '@c.us'
                setTimeout(() => {
                    client.sendMessage(chatId, 'work')
                }, 8000)
            }


        }

    )
}
dispatchTimingMessages('41 12 15 2 4', listNum)

client.on('message', async (message) => {
    try {
        const contact = await message.getContact()
        const chat = await message.getChat()
        if (message.from !== 'status@broadcast') {
            if (message.body) {
                setTimeout(() => {

                    client.sendMessage(message.from, `מה קורה?${contact.shortName}😊`)
                }, 3000)
            }
        }

    } catch (error) {
        console.log(error);
    }
})


client.on('message_ack', async (message) => {
    console.log('contact', await message);

})


module.exports = { client }