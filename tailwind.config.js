module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		screens: {
			sm: '640px',
			md: '760px',
			lg: '1024px',
			xl: '1200px',
			'2xl': '1536px',
		},
		fontFamily: {
			ubuntu: 'Ubuntu, sans-serif',
		},
		extend: {},
	},
	plugins: [
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/line-clamp'),
		require('@tailwindcss/typography'),
	],
};
