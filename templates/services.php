<?php
/*
Template Name: Страница дополнительные сервисы
Template Post Type: page
*/

?>

<?php get_header(); ?>

<!-- заголовок сервисы -->
<div class="t-Header t-HeaderServicesPlus">
      <h1><?php the_field('services-plus-title'); ?></h1>
      <p><?php the_field('services-plus-text'); ?></p>
</div> <!-- t-HeaderServicesPlus -->
<!-- END заголовок сервисы -->

<div class="eq-wrapper">

	<div id="js_clearIswitchersServicesPlus" class="eq-subWrapper">

		<?php 
            $posts = get_posts( array(
            'category_name'    => 'adress',
            'order' => 'ASC',
            'numberposts' => 0,
            'post_type'   => 'post',
            'suppress_filters' => true, // подавление работы фильтров изменения SQL запроса
            ) );

            foreach( $posts as $post ){
            setup_postdata($post);
            ?>
	
	<!-- С помощью вложенного цикла ACF репитера вывожу группу кнопок дополнительных сервисов-->

		<?php if ( have_rows('service-plus') ): 
					
			while ( have_rows('service-plus') ) : the_row(); ?>

				<?php get_template_part('template-parts/services-plus-item') ?>
			
			<?php endwhile; ?>

		<?php else :
							    		// no rows found
	    endif; ?>
					
	<!-- END С помощью вложенного цикла ACF репитера вывожу группу кнопок дополнительных сервисов-->
					
					<?php
	        	}
	          	wp_reset_postdata(); // сброс

	       		?> 
	</div>

<div class="marginBlock"></div> <!-- connectToUsHeader -->


<!-- Подключиться в один клик -->
<?php get_template_part( "template-parts/pages-parts/home-order-phonecall" ) ?>
<!-- END Подключиться в один клик -->

</div>

</div> <!-- pageContainer -->

<!-- футер -->
<?php get_footer(); ?>
<!-- END футер -->
