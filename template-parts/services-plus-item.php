
<!-- Services plus -->

	
	<div class="servicesPlus-container" data-item-type="servPlus-item-container">
	
		<div class="servicesPlusText" data-item-name="<?php the_sub_field("service-plus-name"); ?>">
			<?php the_sub_field("service-plus-name"); ?>
		</div>
		
		<div class="servicesPlusPriceButtonContainer">
		
			<div class="servicesPlusPriceContainer">
				
				<div class="servicesPlus-itemPrice">
					<span class="servicesPlus-itemPriceNumber" data-price="<?php the_sub_field("service-plus-price"); ?>"><?php the_sub_field("service-plus-price"); ?></span>
					<span class="servicesPlus-itemPriceMesure">
						<span class="servicesPlus-itemPriceMesureTop">Руб.</span>
					</span>															
				</div>

			</div>

			<div class="iswitcherAddItem">
						
				<p>Добавить</p>

				<div class="iswitcherPlate" data-item-type="servPlus-item-plate" data-item-name="<?php the_sub_field("service-plus-name"); ?>">							
					<button class="ISwitch" data-item-type="servPlus-item-button"></button>
				</div>
			
		</div>

		</div> <!-- servicesPlusPriceButtonContainer -->

	</div> <!-- servicesPlus-container -->

<!-- End services plus -->