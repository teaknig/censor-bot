import 'dotenv/config'
import { Client, Events, IntentsBitField  } from 'discord.js'

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ]
})

client.once(Events.ClientReady, (client) => {
  console.log('Launched!', client.user.tag)
})

client.on(Events.InteractionCreate, (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    return interaction.reply('Pong!')
  }
})

client.login(process.env.TOKEN)