<?php
/*
Template Name: Страница документы
Template Post Type: page
*/

?>

<?php get_header(); ?>




<!-- Заголовок конструктора -->

<div class="t-Header t-HeaderConstructor">
      <h1><?php the_field('document-page-title'); ?></h1>
      <p><?php the_field('document-page-text'); ?></p>
</div> <!-- t-HeaderConstructor -->

<!-- END Заголовок конструктора -->



<div class="eq-wrapper">

<div class="container">
	<div class="row">
	<?php 
            $posts = get_posts( array(
            'category_name'    => 'documents',
            'order' => 'ASC',
            'numberposts' => 0,
            'post_type'   => 'post',
            'suppress_filters' => true, // подавление работы фильтров изменения SQL запроса
            ) );

            foreach( $posts as $post ){
            setup_postdata($post);
            ?>							
							
								<?php get_template_part('template-parts/documents-item') ?>							

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
