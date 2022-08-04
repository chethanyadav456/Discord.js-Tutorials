// Bulk delete messages
channel.bulkDelete(5)
  .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
  .catch(console.error);
