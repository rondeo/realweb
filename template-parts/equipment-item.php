
<!-- ОБОРУДОВАНИЕ -->
<div class="eq-ItemContainer">
				
				<div class="eq-ItemLeft">

					<div class="eq-ItemLeftImgContainer">
						<img class="eq-ItemImg" src="<?php the_field("eq-img"); ?>">
						<p class="eq-ItemPrice"><span class="eq-itemPriceNum" data-item-price="<?php the_field("eq-price"); ?>"><?php the_field("eq-price"); ?></span><span> руб.</span></p>
					</div>
					
					<div class="eq-ItemLeftTitleContainer">						
						<p class="eq-ItemTitle"><?php the_field("eq-name"); ?></p>
						<p class="eq-ItemSubtitle"><?php the_field("eq-short-text"); ?></p>
						
						<div class="iswitcherAddItem">							
							<p>Добавить</p>								
							<div class="iswitcherPlate" data-item-type="eq-item-plate"  data-item-name="<?php the_field("eq-name"); ?>">							
								<button class="ISwitch" data-item-type="eq-item-button"></button>
							</div>						
						</div>
					
					</div>

				
				</div>
				
				<div class="eq-ItemRight">
					<?php the_field("eq-text"); ?>
				</div>
			
			</div> <!-- eq-ItemContainer -->