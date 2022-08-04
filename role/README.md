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

message.author.roles.add(role);```