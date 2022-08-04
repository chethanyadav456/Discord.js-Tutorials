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
