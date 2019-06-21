<!-- bestOffer -->
<div class="bestOffer" style="background-color: <?php the_field('best-offer-bgc'); ?>; background-image: url(<?php the_field('best-offer-img'); ?>);">

		<div class="bestOfferContent" style="color: <?php the_field('best-offer-tcolor'); ?>;">
			
			<h3 class="bestOfferTitle"><?php the_field('best-offer-title'); ?></h3>
			<p class="bestOfferText"><?php the_field('best-offer-text'); ?></p>
			<div class="bestOfferButton" style="border-color: <?php the_field('best-offer-tcolor'); ?>;">
				<a href="<?php echo get_permalink(); ?>"><?php the_field('best-offer-button-text'); ?></a>		
			</div>

		</div> <!-- bestOfferContent -->
		
		<div class="bestOfferImg">
			
			<img src="">

		</div>
	
	</div> 
<!-- END bestOffer -->