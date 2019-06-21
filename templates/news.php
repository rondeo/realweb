<?php
/*
Template Name: Страница новости
Template Post Type: page
*/

?>

<?php get_header(); ?>

<!-- заголовок новости -->
<div class="t-Header t-HeaderNews">
      <h1><?php the_field('news-page-title'); ?></h1>
      <p><?php the_field('news-page-text'); ?></p>
</div> <!-- t-HeaderTariffsIPTV -->
<!-- END заголовок новости -->

<div class="eq-wrapper">


<div class="container">
	<div class="row">
		


<?php 
            $posts = get_posts( array(
            'category_name'    => 'news',
            'order' => 'DESC',
            'numberposts' => 0,
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


</div> <!-- eq-wrapper -->

</div> <!-- pageContainer -->


<!-- футер -->
<?php get_footer(); ?>
<!-- END футер -->
