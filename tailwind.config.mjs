/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: 'rgb(var(--color-primary) / <alpha-value>)',
				'primary-dark': 'rgb(var(--color-primary-dark) / <alpha-value>)',
				secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
				'secondary-dark': 'rgb(var(--color-secondary-dark) / <alpha-value>)',
				accent: 'rgb(var(--color-accent) / <alpha-value>)',
			},
			spacing: {
				'128': '32rem',
			}
		},
		fontSize: {
			sm: '0.750rem',
			base: '1rem',
			lg: '1.1rem',
			xl: '1.333rem',
			'2xl': '1.777rem',
			'3xl': '2.369rem',
			'4xl': '3.158rem',
			'5xl': '4.210rem'
		},
		fontFamily: {
			'sans': ['noto sans', ...defaultTheme.fontFamily.sans],
		}
	},
	plugins: [],
}
