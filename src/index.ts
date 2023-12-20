import axios from 'axios';

fetch('https://api.discord.gx.games/v1/direct-fulfillment', {
	headers: {
		accept: '*/*',
		'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
		'content-type': 'application/json',
		'sec-ch-ua': '"Opera GX";v="105", "Chromium";v="119", "Not?A_Brand";v="24"',
		'sec-ch-ua-mobile': '?0',
		'sec-ch-ua-platform': '"Windows"',
		'sec-fetch-dest': 'empty',
		'sec-fetch-mode': 'cors',
		'sec-fetch-site': 'cross-site',
		Referer: 'https://www.opera.com/',
		'Referrer-Policy': 'strict-origin-when-cross-origin',
	},
	body: '{"partnerUserId":"97a1875ef90419ed04f4cf7f2b8443086b3f2e5195e99c818f7b70ca45b53044"}',
	method: 'POST',
})
	.then((response) => response.json())
	.then((data) => {
		const token = data.token; // Assuming the response contains a 'token' property
		console.log(token);
	})
	.catch((error) => {
		console.error('Error:', error);
	});
