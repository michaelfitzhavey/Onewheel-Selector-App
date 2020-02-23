module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
	},
	parserOptions: {
		parser: 'babel-eslint'
	},
	extends: [
		'@nuxtjs',
		'prettier',
		'prettier/vue',
		'plugin:prettier/recommended',
		'plugin:nuxt/recommended',
		'@holistic-web/eslint-config'
	],
	plugins: [
		'prettier'
	],
	// add your custom rules here
	rules: {
	}
}
