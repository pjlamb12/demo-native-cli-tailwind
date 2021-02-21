module.exports = {
	prefix: '',
	purge: {
		content: ['./src/**/*.{html,ts}'],
	},
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			fontSize: {
				xxs: '.625rem',
			},
			colors: {
				'wes-bos': '#ffc600',
				'brand-color': 'var(--brand-color)',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
	// plugins: [require('@tailwindcss/forms')],
};
