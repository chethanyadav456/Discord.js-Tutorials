// Insert the Channel ID in the brackets. TO find that, right click the
// channel and select "Copy ID". Discord Developer must be on.

const channel = message.guild.channels.cache.get("channelid")

// Bulk delete messages

channel.bulkDelete(5)
  .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
  .catch(console.error);
