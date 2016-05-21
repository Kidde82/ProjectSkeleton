const src = "src";
const build = "build";
const wwwroot = "wwwroot";
const apps = "apps";
const assets = "assets";

const common = "common";
const main = "main";

module.exports = {
	src: {
		path: `./${src}`,
		assets: {
			images: `/${assets}/images`
		},
		common: {
			path: src,
			html: `./${src}/${apps}/${common}/**/*.html`,
			ts: `./${src}/${apps}/${common}/**/*.ts`,
			spec: `./${src}/${apps}/${common}/**/*.spec.ts`,
			scss: `./${src}/${apps}/${common}/**/*.scss`
		},
		main: {
			path: src,
			html: `./${src}/${apps}/${main}/**/*.html`,
			ts: `./${src}/${apps}/${main}/**/*.ts`,
			spec: `./${src}/${apps}/${main}/**/*.spec.ts`,
			scss: `./${src}/${apps}/${main}/**/*.scss`
		}
	},
	build: {
		path: build,
		common: {
			path: `${build}/${apps}/${common}/`,
			js: `${build}/${apps}/${common}/**/*.js`,
			spec: `${build}/${apps}/${common}/**/*.spec.js`,
			css: `${build}/${apps}/${common}/**/*.css`
		},
		main: {
			path: `${build}/${apps}/${main}/`,
			js: `${build}/${apps}/${main}/**/*.js`,
			spec: `${build}/${apps}/${main}/**/*.spec.js`,
			css: `${build}/${apps}/${main}/**/*.css`
		},
		js: `${build}/**/*.js`,
		spec: `${build}/**/*.spec.js`,
		css: `${build}/**/*.css`,
		artifacts: [
			`./${build}/**/*.css`,
			`./${build}/**/*.js`,
			`!./${build}/**/*.spec.js`
		]
	},
	wwwroot: {
		path: `${wwwroot}`,
		apps: {
			path: `./${wwwroot}/${apps}`
		},
		common: {
			templateName: "common.templates",
			path: `./${wwwroot}/${apps}/${common}`
		},
		main: {
			templateName: "main.templates",
			path: `./${wwwroot}/${apps}/${main}`
		}
	},
	cleanPaths: [
		`${build}`,
		`${wwwroot}/${apps}`
	],
	lint: {
		style: "stylelint.yml"
	},
	tsConfig: {
		module: "amd",
		target: "es5",
		noImplicitAny: false,
		removeComments: false,
		declaration: true,
		sourceMap: false
	}
};