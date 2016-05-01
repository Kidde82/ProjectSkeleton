const src = "src";
const build = "build";
const wwwroot = "wwwroot";
const apps = "apps";
const assets = "assets";

const main = "main";

module.exports = {
	src: {
		path: `./${src}`,
		assets: {
			images: `/${assets}/images`
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
		path: wwwroot,
		apps: {
			path: `./${wwwroot}/${apps}`
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