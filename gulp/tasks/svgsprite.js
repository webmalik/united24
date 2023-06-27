import svgSprite from "gulp-svg-sprite";

export const svgSprites = () => {
	return app.gulp.src(app.path.src.svgicons, { sourcemaps: true })
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "SVGSPRITES",
				message: "Error <%= error.message %>"
			})))
		.pipe(svgSprite({
			mode: {
				stack: {
					sprite: `../icons/icons.svg`,
					example: true
				}
			},
		}))
		.pipe(app.gulp.dest(app.path.build.images));
}