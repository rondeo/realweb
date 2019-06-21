<?php 

// правильный способ подключить стили и скрипты
add_action( 'wp_enqueue_scripts', 'brendiruy_scripts' );
add_action( 'wp_enqueue_scripts', 'theme_name_styles' );
function theme_name_styles() {
	// wp_enqueue_style( 'bootstrap-reboot', get_template_directory_uri() . '/libs/bootstrap/scss/bootstrap-reboot.scss');
	// wp_enqueue_style( 'bootstrap-css', get_template_directory_uri() . '/libs/bootstrap/dist/css/bootstrap.min.css');
	wp_enqueue_style( 'bootstrap-grid', get_template_directory_uri() . '/libs/bootstrap/dist/css/bootstrap-grid.css');
	// wp_enqueue_style( 'bootstrap-sizing', get_template_directory_uri() . '/dist/libs/bootstrap/scss/utilities/_sizing.scss');
	// wp_enqueue_style( 'fontawesome', get_template_directory_uri() . '/libs/fontawesome-free-5.6.3-web/css/all.css');
	wp_enqueue_style( 'owl', get_template_directory_uri() . '/libs/owl.carousel/dist/assets/owl.carousel.min.css');
	wp_enqueue_style( 'owl-theme', get_template_directory_uri() . '/libs/owl.carousel/dist/assets/owl.theme.default.min.css');
	// wp_enqueue_style( 'hamburgers', get_template_directory_uri() . '/libs/hamburgers/dist/hamburgers.css');
	// wp_enqueue_style( 'magnific-popup', get_template_directory_uri() . '/libs/magnific-popup/dist/magnific-popup.css');
	// wp_enqueue_style( 'selectize', get_template_directory_uri() . '/libs/selectize.js-master/dist/css/selectize.css');
	// wp_enqueue_style( 'mmenu', get_template_directory_uri() . '/libs/jquery.mmenu/dist/jquery.mmenu.all.css');
	// wp_enqueue_style( 'mmenu', get_template_directory_uri() . '/libs/photoswipe/dist/photoswipe.css');
	// wp_enqueue_style( 'animate.css', get_template_directory_uri() . '/dist/libs/animate.css-master/animate.min.css');
	// wp_enqueue_style( 'fotorama', get_template_directory_uri() . '/dist/libs/fotorama/fotorama.css');
	wp_enqueue_style( 'main-style', get_stylesheet_uri() );
}

function brendiruy_scripts() {
	add_action( 'wp_enqueue_scripts', 'my_scripts_method', 11 );
	function my_scripts_method() {
	wp_deregister_script( 'jquery' );
	wp_register_script( 'jquery', get_template_directory_uri() . '/libs/jquery/dist/jquery.min.js', true);
	wp_enqueue_script( 'jquery' );

	// wp_enqueue_script( 'bootstrap-js', get_template_directory_uri() . '/libs/bootstrap/dist/js/bootstrap.js', array('jquery'), null, true );
	// wp_enqueue_script( 'match-height', get_template_directory_uri() . '/dist/libs/jquery-match-height/jquery.matchHeight.js', array('jquery'), null, true );
	// wp_enqueue_script( 'selectize', get_template_directory_uri() . '/libs/selectize.js-master/dist/js/standalone/selectize.min.js', array('jquery'), null, false );
	// wp_enqueue_script( 'mixitup', get_template_directory_uri() . '/libs/mixitup/dist/mixitup.min.js', array('jquery'), null, false );
	// wp_enqueue_script( 'magnific-popup', get_template_directory_uri() . '/libs/magnific-popup/dist/jquery.magnific-popup.js', array('jquery'), null, false );
	// wp_enqueue_script( 'mmenu', get_template_directory_uri() . '/libs/jquery.mmenu/dist/jquery.mmenu.all.js', array('jquery'), null, false );
	// wp_enqueue_script( 'mmenufixed', get_template_directory_uri() . '/libs/jquery.mmenu/dist/addons/fixedelements/jquery.mmenu.fixedelements.js', array('jquery'), null, false );
	// wp_enqueue_script( 'countup', get_template_directory_uri() . '/libs/countup.js/countUp.js', array('jquery'), null, false );
	// wp_enqueue_script( 'waypoints', get_template_directory_uri() . '/libs/waypoints/lib/noframework.waypoints.min.js', array('jquery'), null, false );
	// wp_enqueue_script( 'fotorama', get_template_directory_uri() . '/libs/fotorama/fotorama.js', array('jquery'), null, true );
	//wp_enqueue_script( 'waypoints', get_template_directory_uri() . '/libs/waypoints/lib/noframework.waypoints.js', array('jquery'), null, true );
	// wp_enqueue_script( 'page-scroll-to-id', get_template_directory_uri() . '/libs/page-scroll-to-id/jquery.malihu.PageScroll2id.js', array('jquery'), null, true );
	//wp_enqueue_script( 'animate.css', get_template_directory_uri() . '/dist/libs/animate.css/animate-css.js', array('jquery'), null, true );
	//wp_enqueue_script( 'jquery.waypoints', get_template_directory_uri() . '/dist/libs/waypoints/lib/jquery.waypoints.min.js', array('jquery'), null, true );
	wp_enqueue_script( 'owl.js', get_template_directory_uri() . '/libs/owl.carousel/dist/owl.carousel.min.js', array('jquery'), null, false );
	// wp_enqueue_script( 'owl.js', get_template_directory_uri() . '/libs/photoswipe/dist/photoswipe.min.js', array('jquery'), null, false );
	// wp_enqueue_script( 'owl.js', get_template_directory_uri() . '/libs/photoswipe/dist/photoswipe-ui-default.min.js', array('jquery'), null, false );
	wp_enqueue_script( 'news', get_template_directory_uri() . '/js/news.js', array('jquery'), null, true );
	wp_enqueue_script( 'cart', get_template_directory_uri() . '/js/cart.js', array('jquery'), null, true );
	wp_enqueue_script( 'forms', get_template_directory_uri() . '/js/forms.js', array('jquery'), null, true );
	// wp_enqueue_script( 'cart-form', get_template_directory_uri() . '/js/contact-form.js', array('jquery'), null, false );
	// wp_enqueue_script( 'cart-form', get_template_directory_uri() . '/js/cart-form.js', array('jquery'), null, false );
	// wp_enqueue_script( 'mail-form', get_template_directory_uri() . '/js/mail-form.js', array('jquery'), null, false );
	// wp_enqueue_script( 'accordion', get_template_directory_uri() . '/js/accordion.js', array('jquery'), null, false );
	wp_enqueue_script( 'myLib', get_template_directory_uri() . '/js/myLib.js', array('jquery'), null, false );
	wp_enqueue_script( 'scripts', get_template_directory_uri() . '/js/scripts.js', array('jquery'), null, false );
	}
}

add_theme_support( 'custom-logo' );
add_theme_support( 'post-thumbnails' );

add_action( 'after_setup_theme', 'theme_register_nav_menu' );
	function theme_register_nav_menu() {
	register_nav_menu( 'primary', 'Primary Menu' );
	register_nav_menu( 'submenu-fzl', 'Submenu fizlica' );
	register_nav_menu( 'submenu-bs', 'Submenu business' );
	register_nav_menu( 'footermenu', 'Footer Menu' );
}

add_action( 'widgets_init', 'register_my_widgets' );
function register_my_widgets(){
	register_sidebar( array(
		'name'          => sprintf(__('Sidebar %d'), $i ),
		'id'            => "sidebar-$i",
		'description'   => '',
		'class'         => '',
		'before_widget' => '<li id="%1$s" class="widget %2$s">',
		'after_widget'  => "</li>\n",
		'before_title'  => '<h2 class="widgettitle">',
		'after_title'   => "</h2>\n",
	) );

	register_sidebar( array(
		'name'          => sprintf(__('Brendiruy Sidebar'), $i ),
		'id'            => "sidebar-$i",
		'description'   => '',
		'class'         => '',
		'before_widget' => '<li id="%1$s" class="widget %2$s">',
		'after_widget'  => "</li>\n",
		'before_title'  => '<h2 class="widgettitle">',
		'after_title'   => "</h2>\n",
	) );

}
