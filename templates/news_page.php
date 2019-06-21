<?php
/*
Template Name: Страница отдельной новости
Template Post Type: post
*/

?>

<?php get_header(); ?>


<div class="eq-wrapper newsPageContainer">


	<section class="s-newsPageCenter">
	

			<p class="newsPage_newsLink"><a href="<?php echo get_permalink(387); ?>">Новости и объявления Realweb</a></p>
      <p class="newsPage_newsItem_date"><?php echo get_the_date('j F Y'); ?></p>
      <p class="newsPage_newsItem_title"><a href="<?php echo the_permalink(); ?>"><?php the_title(); ?></a></p>
      <img class="newsPage_newsItem_img" src="<?php the_field('news-page-illustr'); ?>" alt="<?php the_title(); ?>" >
      <p class="newsPage_newsItem_text"><?php the_field('news-page-content'); ?></p>
	
	</section> <!-- s-newsPageCenter -->
	<aside class="s-newsPageRight">

		<?php 
            $posts = get_posts( array(
            'category_name'    => 'news',
            'order' => 'DESC',
            'numberposts' => 12,
            'post_type'   => 'post',
            'suppress_filters' => true, // подавление работы фильтров изменения SQL запроса
            ) );

            foreach( $posts as $post ){
            setup_postdata($post);
            ?>
						
						
						<?php get_template_part( "template-parts/news_item_aside_list" ) ?>

			
						<?php
		        	}
		          	wp_reset_postdata(); // сброс

		       		?>

	</aside>
	
</div> <!-- eq-wrapper -->

</div> <!-- pageContainer -->


<!-- футер -->
<?php get_footer(); ?>
<!-- END футер -->
