const id = interaction.guild.channels.create({
	name: 'new-general', 
	reason: 'creating a channel for the new order', 
	parent: `category-id`,
	permissionOverwrites: [
		{
			id: interaction.user.id,
			allow: [PermissionFlagsBits.ViewChannel],
		},
	],
})
