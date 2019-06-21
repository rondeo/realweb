
<!-- tv container -->

<div class="tv-container">
		
		<div class="tv-item">
			
			<!-- tv-title -->
			<div class="tv-itemTitleContainer">
				<div class="tv-itemIcon">
					<i class="icon-television"></i>
				</div>
				<div class="tv-itemTitle">
					<h3 class="tv-itemName" data-item-name="<?php the_field("cable-tarif-name"); ?>"><?php the_field("cable-tarif-name"); ?></h3>
					<p><?php the_field("cable-tarif-short-text"); ?></p>
				</div>
			</div>
			
			<!-- tv-channels -->
			<div class="tv-itemChannelsContainer" >
				<p class="tv-itemChannels"></p>
			</div>

			<!-- tv-price -->
			<div class="tv-itemPriceContainer">
				
					<div class="tv-itemPrice">
						<span class="tv-itemPriceNumber" data-price="<?php the_field("cable-tarif-price"); ?>"><?php the_field("cable-tarif-price"); ?></span>
						<span class="tv-itemPriceMesure">
							<span class="tv-itemPriceMesureTop">Руб.</span><br>
							<span class="tv-itemPriceMesureDown">Мес.</span>
						</span>															
					</div>

			</div>

			<!-- tv-add -->
			<div class="tv-itemAddContainer">

				<div class="iswitcherAddItem">
					
					<p>Добавить</p>						
					<div class="iswitcherPlate" data-item-type="serv-item-plate" data-item-name="<?php the_field("cable-tarif-name"); ?>">							
						<button class="ISwitch" data-item-type="serv-item-button"></button>
					</div>

				</div>


			</div> <!-- tv-add -->

		</div> <!-- tv-item -->

		<!-- tv-item-channels -->
		<div class="tv-itemChannelsListContainer">
			<div><?php the_field("cable-tarif-video-list"); ?></div>
		</div>

	</div> 

	<!-- End tv-container -->