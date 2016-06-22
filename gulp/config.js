const src = "src";
const build = "build";
const wwwroot = "wwwroot";
const apps = "apps";
const assets = "assets";

const app = "app";
const main = "main";
const services = "services";
const startpage = "startpage";

module.exports = {
	src: {
		path: `./${src}`,
		assets: {
			images: `/${assets}/images`
		},
		app: {
			path: src,
			html: `./${src}/${apps}/${app}/**/*.html`,
			ts: `./${src}/${apps}/${app}/**/*.ts`,
			spec: `./${src}/${apps}/${app}/**/*.spec.ts`,
			scss: `./${src}/${apps}/${app}/**/*.scss`
		},
		main: {
			path: src,
			html: `./${src}/${apps}/${main}/**/*.html`,
			ts: `./${src}/${apps}/${main}/**/*.ts`,
			spec: `./${src}/${apps}/${main}/**/*.spec.ts`,
			scss: `./${src}/${apps}/${main}/**/*.scss`
		},
		services: {
			path: src,
			html: `./${src}/${apps}/${services}/**/*.html`,
			ts: `./${src}/${apps}/${services}/**/*.ts`,
			spec: `./${src}/${apps}/${services}/**/*.spec.ts`,
			scss: `./${src}/${apps}/${services}/**/*.scss`
		},
		startpage: {
			path: src,
			html: `./${src}/${apps}/${startpage}/**/*.html`,
			ts: `./${src}/${apps}/${startpage}/**/*.ts`,
			spec: `./${src}/${apps}/${startpage}/**/*.spec.ts`,
			scss: `./${src}/${apps}/${startpage}/**/*.scss`
		}
	},
	build: {
		path: build,
		app: {
			path: `${build}/${apps}/${app}/`,
			js: `${build}/${apps}/${app}/**/*.js`,
			spec: `${build}/${apps}/${app}/**/*.spec.js`,
			css: `${build}/${apps}/${app}/**/*.css`
		},
		main: {
			path: `${build}/${apps}/${main}/`,
			js: `${build}/${apps}/${main}/**/*.js`,
			spec: `${build}/${apps}/${main}/**/*.spec.js`,
			css: `${build}/${apps}/${main}/**/*.css`
		},
		services: {
			path: `${build}/${apps}/${services}/`,
			js: `${build}/${apps}/${services}/**/*.js`,
			spec: `${build}/${apps}/${services}/**/*.spec.js`,
			css: `${build}/${apps}/${services}/**/*.css`
		},
		startpage: {
			path: `${build}/${apps}/${startpage}/`,
			js: `${build}/${apps}/${startpage}/**/*.js`,
			spec: `${build}/${apps}/${startpage}/**/*.spec.js`,
			css: `${build}/${apps}/${startpage}/**/*.css`
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
		app: {
			path: `./${wwwroot}/${apps}/${app}`
		},
		main: {
			path: `./${wwwroot}/${apps}/${main}`
		},
		services: {
			path: `./${wwwroot}/${apps}/${services}`
		},
		startpage: {
			path: `./${wwwroot}/${apps}/${startpage}`
		}
	},
	cleanPaths: [
		`${build}`,
		`${wwwroot}/${apps}`
	],
	lint: {
		style: "stylelint.yml"
	}
};