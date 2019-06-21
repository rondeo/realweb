<div class="t-subContainer1" name="tarif-name">
			
				<p class="t-plan">Тарифный план</p>
				
				<!-- ACF repeater loop -->
				<?php if ( have_rows('tarif-name') ):
					
				while ( have_rows('tarif-name') ) : the_row(); ?>

				<h2 class="t-planName" style="display: none;"><?php the_sub_field('tarif-name'); ?></h2>	
				
				<?php endwhile;

				else :
    		// no rows found
				endif; ?>				

		</div> <!-- t-subContainer1 -->


		<div class="t-subContainer2 hidden" name="speed-price">	
				
			<div class="t-annotation">
			
			<!-- ACF repeater loop -->
			<?php if ( have_rows('tarif-name') ):
				
			while ( have_rows('tarif-name') ) : the_row(); ?>

				<p class="t-advantages" style="display: none;" data-plan-name="<?php the_sub_field('tarif-name'); ?>"><?php the_sub_field('tarif-advantages'); ?></p>
			
			<?php endwhile;

			else :
  		// no rows found
			endif; ?>

			</div> <!-- t-annotation -->
				
			<div class="t-main">
				
				<div class="t-speed">
					<i class="icon-dashboard"></i>
					<p class="t-speedValue">
						
						<!-- ACF repeater loop -->
						<?php if ( have_rows('tarif-name') ):
				
						while ( have_rows('tarif-name') ) : the_row(); ?>

						<span class="t-speedValueNum" style="display: none;"><?php the_sub_field('tarif-speed'); ?></span>

						<?php endwhile;

						else :
		    		// no rows found
						endif; ?>

						<span class="t-speedValueMesure">Mbit/s</span>
					</p>
				</div>
			
				<div class="t-period">
				
				<!-- ACF repeater loop -->
				<?php if ( have_rows('tarif-name') ):
				
					while ( have_rows('tarif-name') ) : the_row(); ?>
					
					<div class="t-periodRadio">
							
							<span class="t-periodRadioMonth"><?php the_sub_field('tarif-speed'); ?>Mb/s</span>

							<div class="t-periodRadioContainer">
								<span class="t-periodCheckmark"></span>
								<input class="t-periodInput" type="radio" name="payment-period" data-plan-name="<?php the_sub_field('tarif-name'); ?>" data-speed="<?php the_sub_field('tarif-speed'); ?>" data-price="<?php the_sub_field('tarif-price'); ?>" data-discount="0">
							</div>

						</div>        

		  <?php endwhile;

			else :
  		// no rows found
			endif; ?>

			<!-- END ACF repeater loop -->

			</div> <!-- t-period -->
					

				<!-- t-price -->
				<div class="t-price">

					<?php if ( have_rows('tarif-name') ):
				
					while ( have_rows('tarif-name') ) : the_row(); ?>

					<span class="t-priceNumber" style="display: none;" data-price="<?php the_sub_field('tarif-price'); ?>"><?php the_sub_field('tarif-price'); ?></span>
					
					<?php endwhile;

					else :
	    		// no rows found
					endif; ?>

					<span class="t-priceMesure">
						<span class="t-priceMesureTop">Руб.</span><br>
						<span class="t-priceMesureDown">Мес.</span>
					</span>															
				</div>

			</div> <!-- t-main -->
				
			<div class="t-selectButtonContainer">
				<button class="t-selectButton" value="text"><span>выбрать тариф</span></button>
			</div>

		</div> <!-- t-SubContainer2 --> 

		<!-- Блок с описаниями и иконками к ним к каждому тарифу.		
		Вывожу с помощью ACF репитера-->

		<div class="t-subContainer3" name="more-info">
				
				<div class="t-moreContainerHeader">
					<i class="icon-more"></i>
				</div>
				
				<div class="t-moreContainerContent">

					<div class="t-moreTextIconsContainer">
					
					<!-- С помощью цикла ACF репитера вывожу тексты описания к каждому тарифу -->
					
					<!-- ACF repeater loop -->
					
					<?php if ( have_rows('tarif-name') ): 
					
					while ( have_rows('tarif-name') ) : the_row(); ?>
					
						<p class="t-moreContainerText" style="display: none;" data-plan-name="<?php the_sub_field('tarif-name'); ?>">
							<?php the_sub_field('tarif-text'); ?>
						</p>							

						<!-- С помощью вложенного цикла ACF репитера вывожу к каждому тексту группу иконок -->

						<?php if ( have_rows('tarif-icons') ): ?>

						<div class="t-moreContainerIcons" style="display: none;" data-plan-name="<?php the_sub_field('tarif-name'); ?>">
					
						<?php while ( have_rows('tarif-icons') ) : the_row(); ?>

							<div class="t-moreContainerIconsItem">
								<?php the_sub_field('tarif-text-icon'); ?>								
								<p class="t-moreContainerIconsItemText">
									<?php the_sub_field('tarif-text-icon-text'); ?>
								</p>
							</div>

						<?php endwhile; ?>

						</div> <!-- t-moreContainerIcons -->				 
			    
			    <?php else :
							    		// no rows found
			    endif; ?>
					
					<!-- END С помощью вложенного цикла ACF репитера вывожу к каждому тексту группу иконок -->
					
					<?php endwhile;
			    else :
							    		// no rows found
			    endif; ?>
					<!-- END ACF repeater loop -->
					
					<!-- END С помощью цикла ACF репитера вывожу тексты описания к каждому тарифу -->

					</div> <!-- t-moreTextIconsContainer --> 						

				</div> <!-- t-moreContainerContent -->

</div> <!-- t-subContainer3 -->