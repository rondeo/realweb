<?php get_header(); ?>

<!-- Карусель на главной -->
<div class="mainSliderContainer">
	<?php get_template_part( "template-parts/pages-parts/carousel-bootstrap" ) ?>
</div>
<!-- END Карусель на главной -->

<!-- Акции на главной -->
<?php get_template_part( "template-parts/pages-parts/home-akcii" ) ?>
<!-- END Акции на главной -->

<!-- новости компании -->

<!-- заголовок новости -->
<div class="t-Header t-HeaderNews">
      <h1><?php the_field('news-page-title'); ?></h1>
</div> <!-- t-HeaderTariffsIPTV -->
<!-- END заголовок новости -->


	<div class="container">
		<div class="row">
			


	<?php 
	            $posts = get_posts( array(
	            'category_name'    => 'news',
	            'order' => 'DESC',
	            'numberposts' => 3,
	            'post_type'   => 'post',
	            'suppress_filters' => true, // подавление работы фильтров изменения SQL запроса
	            ) );

	            foreach( $posts as $post ){
	            setup_postdata($post);
	            ?>
							
							
							<?php get_template_part( "template-parts/news_item" ) ?>

				
							<?php
			        	}
			          	wp_reset_postdata(); // сброс

			       		?>



		</div> <!-- row -->

</div> <!-- container -->
<!-- END новости компании -->

<!-- Наши предложения - подключайтесь к RealWeb -->
<?php get_template_part( "template-parts/pages-parts/connect-to-us" ) ?>
<!-- END Наши предложения - подключайтесь к RealWeb -->

<!-- Ряд сюжетных иконок -->
<?php get_template_part( "template-parts/pages-parts/icons-row" ) ?>
<!-- END Ряд сюжетных иконок -->

<!-- Покрытие -->
<!-- заголовок блока -->
		<div class="coveringHeader">
			<h1><?php the_field('index-covering-header', 147); ?></h1>
		</div> <!-- coveringHeader -->
		<!-- END заголовок блока -->
<?php get_template_part( "template-parts/pages-parts/covering" ) ?>
<!-- END Покрытие -->

<div class="eq-wrapper">
<!-- Подключиться в один клик -->
<?php get_template_part( "template-parts/pages-parts/home-order-phonecall" ) ?>
<!-- END Подключиться в один клик -->
</div> <!-- eq-wrapper -->

</div> <!-- pageContainer -->

<!-- футер -->
<?php get_footer(); ?>
<!-- END футер -->


</body>
</html>