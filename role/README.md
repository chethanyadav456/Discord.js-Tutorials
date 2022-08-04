# Discord.js Role

# Add a role to a user
```js
const role = message.guild.roles.cache.find(r => r.id === "Role ID");

// The member you want to add the role to
const member = message.mentions.members.first();

// Add role to the member
member.roles.add(role);
```

# Add a role to yourself

```js
const role = message.guild.roles.cache.find(r => r.id === "Role ID");

message.author.roles.add(role);
```
# Get all members with role
```js
//outputs the IDs of all members with the specified role as an array

message.guild.roles.cache.get('ROLE-ID').members.map(m=>m.user.id);
```
# Find role by name
```js
const role = message.guild.roles.cache.find(role => role.name === "Rolename");
```
# Give role to all members
```js
// find the role with the name "Community"
const role = message.guild.roles.find(r => r.name == 'Community')

// if role doesn't exist, notify the author of command that the role couldn't be found
if (!role) return message.channel.send(`**${message.author.username}**, role not found`)

// find all guild members that aren't bots, and add the "Community" role to each
message.guild.members.filter(m => !m.user.bot).forEach(member => member.addRole(role))

// notify the author of the command that the role was successfully added to all members
message.channel.send(`**${message.author.username}**, role **${role.name}** was added to all members`)
```
# Set role permissions for all channels
```js
message.guild.channels.cache.forEach(channel => 
{
if(channel.type == "text")
  channel.overwritePermissions([
  {
     id: muteRole.id,
     deny: ['SEND_MESSAGES'],
  },
], 'Needed to change permissions');
})
```
# Set role permissions for one channel
```js
message.channel.permissionOverwrites.set([
  {
     id: message.author.id,
     deny: [Permissions.FLAGS.VIEW_CHANNEL],
  },
], 'Needed to change permissions');
```

