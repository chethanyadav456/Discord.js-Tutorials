//outputs the IDs of all members with the specified role as an array

// === discord.js v11 ===
message.guild.roles.get('ROLE-ID').members.map(m=>m.user.id);

// === discord.js v12 ===
message.guild.roles.cache.get('ROLE-ID').members.map(m=>m.user.id);