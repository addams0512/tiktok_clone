/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			"scontent.xx.fbcdn.net",
			"lh3.googleusercontent.com",
			"p16-sign-va.tiktokcdn.com",
		],
	},
}

module.exports = nextConfig
