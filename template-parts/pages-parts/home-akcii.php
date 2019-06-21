<!-- Акции на главной -->
<div class="bestOffersContainer">

						<?php 
            $posts = get_posts( array(
            'category_name'    => 'best-offers-main-page',
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
<!-- Акции на главной -->


