import request from "requestv2/index";

export default function sendToDiscord(webhookLink, title, description, thumbnailURL, avatarIcon, username, embedColor, footer) {
	request({
		url: webhookLink,
		method: "POST",
		headers: {
			"Content-type": "application/json",
			"User-Agent": "Mozilla/5.0",
		},
		body: {
			username: username,
			avatar_url:
				avatarIcon,
			content: " ",
			embeds: [
				{
					title: title,
					color: 16777215,
					thumbnail: {
						url: thumbnailURL
					},
					description: description,
					footer: {
						text: footer,
					},
					fields: [],
				},
			],
		},
	}).catch((err) => {
		ChatLib.chat("&cAn error occured!")
		ChatLib.chat(err)
		console.log("sendToDiscord error:", err);
	});
}