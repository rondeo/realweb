<?php
/*
Template Name: Страница списка акций
Template Post Type: page
*/

?>

<?php get_header(); ?>

<!-- заголовок оборудование -->
<div class="t-Header t-HeaderServicesPlus">
      <h1>Акции Realweb</h1>
      <!-- <p>Внимание. Для подкдючения услуги онлайн кинотеатр у вас должен быть проведен Realweb интернет. 
      Если вы еще не подключены к нашей сети, то можете сделать это на странице выбора тарифа.</p> -->
</div> <!-- t-HeaderTariffsIPTV -->
<!-- END заголовок оборудование -->

<div class="bestOffersContainer">

						<?php 
            $posts = get_posts( array(
            'category_name'    => 'best-offers',
            'order' => 'ASC',
            'numberposts' => 0,
            'post_type'   => 'post',
            'suppress_filters' => true, // подавление работы фильтров изменения SQL запроса
            ) );

            foreach( $posts as $post ){
            setup_postdata($post);
            ?>
						
						<div class="bestOffer" style="background-color: <?php the_field('best-offer-bgc'); ?>;">

		<div class="bestOfferContent" style="color: <?php the_field('best-offer-tcolor'); ?>;">
			
			<h3 class="bestOfferTitle"><?php the_field('best-offer-title'); ?></h3>
			<p class="bestOfferText"><?php the_field('best-offer-text'); ?></p>
			<div class="bestOfferButton" style="border-color: <?php the_field('best-offer-tcolor'); ?>;">
				<a href="<?php echo get_permalink(); ?>"><?php the_field('best-offer-button-text'); ?></a>		
			</div>

		</div> <!-- bestOfferContent -->
		
		<div class="bestOfferImg">
			
			<img src="<?php the_field('best-offer-img'); ?>">

		</div>
	
	</div> <!-- bestOffer -->

            <?php
	        	}
	          	wp_reset_postdata(); // сброс

	       		?>

</div>

</div> <!-- pageContainer -->

<!-- футер -->
<?php get_footer(); ?>
<!-- END футер -->