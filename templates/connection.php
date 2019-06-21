<?php
/*
Template Name: Страница подключение
Template Post Type: page
*/

?>

<?php get_header(); ?>


<!-- Акции на странице интернет -->
<div class="bestOffersContainer">

						<?php 
            $posts = get_posts( array(
            'category_name'    => 'best-offers-internet',
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

<!-- END Акции на странице интернет -->
				

<!-- Конструктор тарифа -->

<!-- Заголовок конструктора -->

<div class="t-Header t-HeaderConstructor">
      <h1><?php the_field('constructor-page-title'); ?></h1>
      <p><?php the_field('constructor-page-text'); ?></p>
</div> <!-- t-HeaderConstructor -->

<!-- END Заголовок конструктора -->

<!-- переключатель многоэтажки частный сектор -->
		<div class="t-SwitcherContainer">
			
			<div class="t-SwitcherButton t-SwitcherButtonOn">
				<p>Многоэтажные дома</p>
			</div>
			
			<div class="t-SwitcherButton">
				<p>Частный сектор</p>
			</div>		
		
		</div> <!-- connectToUsSwitcher -->
		<!-- END переключатель многоэтажки частный сектор -->

<div class="eq-wrapper">

<div class="t-wrapper">

	<?php 
            $posts = get_posts( array(
            'category_name'    => 'internet',
            'order' => 'ASC',
            'numberposts' => 0,
            'post_type'   => 'post',
            'suppress_filters' => true, // подавление работы фильтров изменения SQL запроса
            ) );

            foreach( $posts as $post ){
            setup_postdata($post);
            ?>

		<!-- Блок с информацией для многоэтажных домов -->
		
		<div class="t-container">
			
			<div id="multifloor"> 
			
			<!-- Информация для многоэтажек -->
			<?php get_template_part( "template-parts/constructor-parts/multifloor" ) ?>
			<!-- END Информация для многоэтажек -->

			</div>


			<div id="privateHouse" class="hidden"> 
			
			<!-- Информация для многоэтажек -->
			<?php get_template_part( "template-parts/constructor-parts/private-sector" ) ?>
			<!-- END Информация для многоэтажек -->

			</div> <!-- id="privateHouse" -->


			<div class="t-subContainer4">
				
				<!-- Add products section -->
			
				<div class="t-productsContainer">				

						<div class="t-productsContainerHeader">
							<h3 class="t-productsHeader">Добавить к тарифу оборудование для интернета</h3>
						</div>
						
						
							<!-- Слайдер товаров -->

							<div id="slider-1" class="slider slider-1">

								<ol class="sliderIndicators">
									<!-- li генерируется яваскриптом -->
								</ol>
								
								<div class="sliderItems">
									
									
									<?php 
							            $posts = get_posts( array(
							            'category_name'    => 'equipment-internet',
							            'order' => 'ASC',
							            'numberposts' => 0,
							            'post_type'   => 'post',
							            'suppress_filters' => true, // подавление работы фильтров изменения SQL запроса
							            ) );

							            foreach( $posts as $post ){
							            setup_postdata($post);
							            ?>


									<div class="sliderItem">

										<?php get_template_part('template-parts/equipment-item') ?>			
									
									</div> <!-- sliderItem -->
									
									
									<?php
								        	}
								          	wp_reset_postdata(); // сброс

								       		?>


								</div> <!-- sliderItems -->

								<div class="sliderControl sliderControlNext" role="button"></div>
								<div class="sliderControl sliderControlPrev" role="button"></div>

							</div> <!-- slider -->

							<!-- END Слайдер товаров -->


				</div> <!-- t-produtsContainer -->
				
				
				<!-- Add services section -->

				<div class="t-servicesContainer">				

						<div class="t-servicesContainerHeader">
							<h3 class="t-servicesHeader">Добавить к тарифу дополнительные услуги</h3>
						</div>
						
						<div class="t-servicesContainerContent">

				<!-- блок с IPTV			 -->
	<?php 
            $posts = get_posts( array(
            'category_name'    => 'interactive-tv',
            'order' => 'ASC',
            'numberposts' => 0,
            'post_type'   => 'post',
            'suppress_filters' => true, // подавление работы фильтров изменения SQL запроса
            ) );

            foreach( $posts as $post ){
            setup_postdata($post);
            ?>

						
						<?php get_template_part('template-parts/tv-item') ?>
	<!-- Блок с кинотеатрами -->
	<?php
	        	}
	          	wp_reset_postdata(); // сброс

	       		?> 

	       		<?php 
            $posts = get_posts( array(
            'category_name'    => 'online-cinema',
            'order' => 'ASC',
            'numberposts' => 0,
            'post_type'   => 'post',
            'suppress_filters' => true, // подавление работы фильтров изменения SQL запроса
            ) );

            foreach( $posts as $post ){
            setup_postdata($post);
            ?>

                                    
            <?php get_template_part('template-parts/online-cinema-item') ?>
      
      <?php
                  }
                  wp_reset_postdata(); // сброс

                        ?> 
			<!-- блок с кабельным -->
			<?php 
            $posts = get_posts( array(
            'category_name'    => 'cable-tv',
            'order' => 'ASC',
            'numberposts' => 0,
            'post_type'   => 'post',
            'suppress_filters' => true, // подавление работы фильтров изменения SQL запроса
            ) );

            foreach( $posts as $post ){
            setup_postdata($post);
            ?>

                                    
            <?php get_template_part('template-parts/cable-tv-item') ?>
      
      <?php
                  }
                  wp_reset_postdata(); // сброс

                        ?>

						</div>		

				</div> <!-- t-servicesContainer -->

				<!-- t-servicesEquipment -->
				
				<div class="t-servicesEquipmentContainer">
					
					<div class="t-servicesEquipmentContainerHeader">
						<h3 class="t-servicesEquipmentHeader">Добавить оборудование</h3>
					</div>

					<!-- Слайдер товаров -->

							<div id="slider-2" class="slider">

								<ol class="sliderIndicators">
									<!-- li генерируется яваскриптом -->
								</ol>
								
								<div class="sliderItems">
									
				
									<?php 
							            $posts = get_posts( array(
							            'category_name'    => 'equipment-tv',
							            'order' => 'ASC',
							            'numberposts' => 0,
							            'post_type'   => 'post',
							            'suppress_filters' => true, // подавление работы фильтров изменения SQL запроса
							            ) );

							            foreach( $posts as $post ){
							            setup_postdata($post);
							            ?>


									<div class="sliderItem">

										<?php get_template_part('template-parts/equipment-item') ?>		
									
									</div> <!-- sliderItem -->
									
									
											<?php
				        	}
				          	wp_reset_postdata(); // сброс

				       		?> 


								</div> <!-- sliderItems -->

								<div class="sliderControl sliderControlNext" role="button"></div>
								<div class="sliderControl sliderControlPrev" role="button"></div>

							</div> <!-- slider -->

							<!-- END Слайдер товаров -->

				</div> <!-- t-servicesEquipmentContainer -->

				<!-- END t-servicesEquipment -->

				<!-- END Add services section -->

				<!-- Services plus -->

				<div class="t-servicesPlusContainer">				

						<div class="t-servicesPlusContainerHeader">
							<h3 class="t-servicesPlusHeader">Добавить к тарифу дополнительные сервисы</h3>
						</div>
						
						<div class="t-servicesPlusContainerContent">					
							
							<?php 
            $posts = get_posts( array(
            'category_name'    => 'addition-services-basic',
            'order' => 'ASC',
            'numberposts' => 0,
            'post_type'   => 'post',
            'suppress_filters' => true, // подавление работы фильтров изменения SQL запроса
            ) );

            foreach( $posts as $post ){
            setup_postdata($post);
            ?>

							<!-- С помощью вложенного цикла ACF репитера вывожу группу кнопок дополнительных сервисов-->

							<?php if ( have_rows('service-plus') ): 
					
							while ( have_rows('service-plus') ) : the_row(); ?>

								<?php get_template_part('template-parts/services-plus-item') ?>
			
							<?php endwhile; ?>

							<?php else :
												    		// no rows found
						    endif; ?>
										
						<!-- END С помощью вложенного цикла ACF репитера вывожу группу кнопок дополнительных сервисов-->
						
						<?php
	        	}
	          	wp_reset_postdata(); // сброс

	       		?>

						</div>		

				</div>

				<!-- END services plus -->
		

				<!-- Submit & cansel section -->
				<div class="t-submitContainer">

					<div class="t-submitButtonContainer">					
						<button class="t-submitButton"><span>оформить заявку</span></button>
					</div>

					<div class="t-canselButtonContainer">					
						<button class="t-canselButton"><span>отмена</span></button>
					</div>

				</div>

			</div> <!-- t-subContainer4 -->
		
		</div> <!-- t-container-->
		
		<!-- END Блок с информацией для многоэтажных домов -->


		

						<?php
	        	}
	          	wp_reset_postdata(); // сброс

	       		?> 

</div> <!-- wrapper -->

<!-- Подключиться в один клик -->
<?php get_template_part( "template-parts/pages-parts/home-order-phonecall" ) ?>
<!-- END Подключиться в один клик -->

</div> <!-- eq-wrapper -->

</div> <!-- pageContainer -->

<!-- футер -->
<?php get_footer(); ?>
<!-- END футер --> 
