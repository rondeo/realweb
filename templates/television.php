<?php
/*
Template Name: Страница телевидение
Template Post Type: page
*/

?>

<?php get_header(); ?>



<!-- Акции на странице TV -->
<div class="bestOffersContainer bestOffersTV">

                                    <?php 
            $posts = get_posts( array(
            'category_name'    => 'best-offers-tv',
            'order' => 'ASC',
            'numberposts' => 0,
            'post_type'   => 'post',
            'suppress_filters' => true, // подавление работы фильтров изменения SQL запроса
            ) );

            foreach( $posts as $post ){
            setup_postdata($post);
            ?>
      
                                    <?php get_template_part( "template-parts/pages-parts/best-offer" ) ?>

            <?php
                  }
                  wp_reset_postdata(); // сброс

                        ?>

</div> <!-- bestOffersContainer -->

<!-- END Акции на странице TV -->

<!-- заголовок блока с IPTV -->
<div class="t-Header t-HeaderTariffsIPTV">
      <h1><?php the_field('iptv-title', 81); ?></h1>
      <p><?php the_field('iptv-text', 81); ?></p>
</div> <!-- connectToUsHeader -->
<!-- END заголовок блока с IPTV -->


<div id="js_clearIswitchersTV" class="eq-wrapper">
	
	<?php 
            $posts = get_posts( array(
            'category_name'    => 'interactive-tv',
            'order' => 'ASC',
            'numberposts' => 0,
            'post_type'   => 'post',
            'suppress_filters' => true, // подавление работы фильтров изменения SQL запроса
            ) );

            foreach( $posts as $post ){
            setup_postdata($post);
            ?>

						
						<?php get_template_part('template-parts/tv-item') ?>
	
	<?php
	        	}
	          	wp_reset_postdata(); // сброс

	       		?> 



<!-- заголовок онлайн кинотеатр -->
<div class="t-Header t-HeaderTariffsIPTV">
      <h1><?php the_field('cinema-title', 81); ?></h1>
      <p><?php the_field('cinema-text', 81); ?></p>
</div> <!-- t-HeaderTariffsIPTV -->
<!-- END заголовок онлайн кинотеатр -->


<?php 
            $posts = get_posts( array(
            'category_name'    => 'online-cinema',
            'order' => 'ASC',
            'numberposts' => 0,
            'post_type'   => 'post',
            'suppress_filters' => true, // подавление работы фильтров изменения SQL запроса
            ) );

            foreach( $posts as $post ){
            setup_postdata($post);
            ?>

                                    
                                    <?php get_template_part('template-parts/online-cinema-item') ?>
      
      <?php
                  }
                  wp_reset_postdata(); // сброс

                        ?> 


<!-- заголовок кабельное TV -->
<div class="t-Header t-HeaderTariffsIPTV">
      <h1><?php the_field('cable-title', 81); ?></h1>
      <p><?php the_field('cable-text', 81); ?></p>
</div> <!-- t-HeaderTariffsIPTV -->
<!-- END заголовок кабельное TV -->


<?php 
            $posts = get_posts( array(
            'category_name'    => 'cable-tv',
            'order' => 'ASC',
            'numberposts' => 0,
            'post_type'   => 'post',
            'suppress_filters' => true, // подавление работы фильтров изменения SQL запроса
            ) );

            foreach( $posts as $post ){
            setup_postdata($post);
            ?>

                                    
                                    <?php get_template_part('template-parts/cable-tv-item') ?>
      
      <?php
                  }
                  wp_reset_postdata(); // сброс

                        ?> 


<div class="marginBlock"></div> <!-- connectToUsHeader -->


<!-- Подключиться в один клик -->
<?php get_template_part( "template-parts/pages-parts/home-order-phonecall" ) ?>
<!-- END Подключиться в один клик -->

</div> <!-- eq-wrapper -->

</div> <!-- pageContainer -->


<!-- футер -->
<?php get_footer(); ?>
<!-- END футер -->
