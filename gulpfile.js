// Подключаем Gulp и все необходимые библиотеки
var gulp           = require('gulp'),
		sass           = require('gulp-sass'),
		browserSync    = require('browser-sync'),
		cleanCSS       = require('gulp-clean-css'),
		autoprefixer   = require('gulp-autoprefixer')
		// concat				 = require('gulp-concat')

// Обновление страниц сайта на локальном сервере
gulp.task('browser-sync', function() {
	browserSync({
		proxy: "realweb:81",
		notify: false
	});
});

// Компиляция stylesheet.css
gulp.task('sass', function() {
	return gulp.src('styles/style.sass')
		.pipe(sass({
			// includePaths: bourbon.includePaths
		}).on('error', sass.logError))
		.pipe(autoprefixer(['last 15 versions']))
		.pipe(cleanCSS())
		.pipe(gulp.dest('./'))
		.pipe(browserSync.reload({stream: true}))
});

// gulp.task('js', function() {
// 	return gulp.src([
// 		'js/scripts.js' //Always in the end
// 		])
// 	// .pipe(concat('scripts.min.js'))
// 	.pipe(gulp.dest('/js'))
// 	.pipe(browserSync.reload({ stream: true }))
// });

// Наблюдение за файлами
gulp.task('watch', function() {
	gulp.watch('styles/style.sass', gulp.parallel('sass'));
	gulp.watch('*.php', browserSync.reload);
	gulp.watch('js/*.js', browserSync.reload);
	gulp.watch('libs/**/*', browserSync.reload);
});

// Выгрузка изменений на хостинг
gulp.task('deploy', function() {
	var conn = ftp.create({
		host:      'hostname.com',
		user:      'username',
		password:  'userpassword',
		parallel:  10,
		log: gutil.log
	});
	var globs = [
	'catalog/view/theme/apple/**'
	];
	return gulp.src(globs, {buffer: false})
	.pipe(conn.dest('/path/to/folder/on/server'));
});

// gulp.task('default', ['watch']);

gulp.task('default', gulp.parallel('watch', 'sass', 'browser-sync'));

