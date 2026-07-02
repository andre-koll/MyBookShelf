import type { NextConfig } from "next";
// const withImages = require('next-images');

const nextConfig: NextConfig = {
  /* config options here */

};

module.exports = {
	reactStrictMode: true,
	images: {
		domains: ['books.google.com'],
	},
}

// }
// module.exports = {

// 	images: {
// 		localPatterns: [
// 		{
// 			pathname: '/assets/images/**',
// 			search: '',
// 		},
// 		],
// 		remotePatterns: [new URL('http://books.google.com/')],
// 	},
// }


export default nextConfig;
