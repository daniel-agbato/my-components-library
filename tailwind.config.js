module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				heading: 'var(--font-heading)',
				base: 'var(--font-base)',
				code: 'var(--font-code)',
			},
			colors: {
				'nav-bg': 'var(--color-nav-bg)',
				title: 'var(--color-title)',
				link: 'var(--color-link)',
				'link-active': 'var(--color-link-active)',
				'code-text': 'var(--color-code-text)',
				'btn-text-gray': 'var(--color-btn-text-gray)',

				/* Btns bg */
				default: 'var(--color-bg-default)',
				'default-hover': 'var(--color-bg-default-hover)',
				'light-blue': 'var(--color-bg-light-blue)',
				primary: 'var(--color-bg-primary)',
				'primary-hover': 'var(--color-bg-primary-hover)',
				secondary: 'var(--color-bg-secondary)',
				'secondary-hover': 'var(--color-bg-secondary-hover)',
				danger: 'var(--color-bg-danger)',
				'danger-hover': 'var(--color-bg-danger-hover)',
			},
			boxShadow: {
				'btn-shadow': '0px 2px 3px rgba(51, 51, 51, 0.2)',
			},
		},
	},
	plugins: [],
};

/* 
    --color-nav-bg: #fafbfd;
		--color-title: #4f4f4f;
		--color-link: #9e9e9e;
		--color-link-active: #090f31;
		--color-code-text: #333;
		--color-btn-text-gray: #3f3f3f;
*/