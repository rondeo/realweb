<!-- Наши предложения - подключайтесь к RealWeb -->


	<div class="connectToUsContainer">
		
		<!-- заголовок блока -->
		<div class="connectToUsHeader">
			<h1 class="mainHeader">подключайтесь к <span style="color: #FF6C00;">real</span><span style="color: #009FDF;">web</span></h1>
		</div> <!-- connectToUsHeader -->
		<!-- END заголовок блока -->
		
		<!-- переключатель для дома/для бизнеса -->
		<div class="connectToUsSwitcherContainer">
			
			<div class="connectToUsSwitcherButton connectToUsSwitcherButtonOn">
				<p>Для дома</p>
			</div>
			
			<div class="connectToUsSwitcherButton">
				<p>Для бизнеса</p>
			</div>		
		
		</div> <!-- connectToUsSwitcher -->
		<!-- END переключатель для дома/для бизнеса -->
		
	<div class="connectToUsWrapperMain"> <!-- Контейнер для слайдера -->

		<!-- Блок с информаций о подключении дома -->
		<div class="connectToUsWrapper connectToUsActive">
	
						<?php 
            $posts = get_posts( array(
            'category_name'    => 'connect-to-us-home',
            'order' => 'ASC',
            'numberposts' => 0,
            'post_type'   => 'post',
            'suppress_filters' => true, // подавление работы фильтров изменения SQL запроса
            ) );

            foreach( $posts as $post ){
            setup_postdata($post);
            ?>

		<!-- Блоки с предложениями -->
		<div class="connectToUsOfferContainer">
			
			<div class="connectToUsOfferLeft">
				<h2><?php the_field('connect-to-us-title'); ?></h2>
				<p><?php the_field('connect-to-us-text'); ?></p>
			</div> <!-- connectToUsOfferLeft -->
			

			<div class="connectToUsIcon">
				<?php the_field('connect-to-us-icon'); ?>
			</div> <!-- connectToUsIcon -->
			
			<div class="connectToUsPrice connectToUsPriceHome" data-name="mediaNot">
				<span class="connectToUsPriceFrom">от</span>
				<span class="connectToUsPriceNumber"><?php the_field('connect-to-us-price'); ?></span>
				<span class="connectToUsPriceMesure">
					<span class="connectToUsPriceMesureTop">Руб.</span><br>
					<span class="connectToUsPriceMesureDown">Мес.</span>
				</span>
			</div> <!-- connectToUsPrice -->

			<div class="connectToUsButton" data-name="mediaNot">
				<a href="<?php the_field('connect-to-us-link'); ?>">подробнее</a>
				<i class="icon-right-arrow"></i>
			</div> <!-- connectToUsButton -->

			<div class="connectToUs480Media" style="display: none;">
				
				<!-- Отображаем этот блок при ширине меньше 480px. 
						При этом выклуючаем верхние два аналогичных -->
				
						<div class="connectToUsPrice">
							<span class="connectToUsPriceFrom">от</span>
							<span class="connectToUsPriceNumber"><?php the_field('connect-to-us-price'); ?></span>
							<span class="connectToUsPriceMesure">
								<span class="connectToUsPriceMesureTop">Руб.</span><br>
								<span class="connectToUsPriceMesureDown">Мес.</span>
							</span>
						</div> <!-- connectToUsPrice -->

						<div class="connectToUsButton">
							<a href="<?php the_field('connect-to-us-link'); ?>">подробнее</a>
							<i class="icon-right-arrow"></i>
						</div> <!-- connectToUsButton -->				

			</div> <!-- connectToUs480Media -->

		</div> <!-- connectToUsOfferContainer -->

		<!-- END Блоки с предложениями -->
	
						<?php
	        	}
	          	wp_reset_postdata(); // сброс

	       		?>
	</div> <!-- connectToUsWrapper -->
	

	<!-- Блок с информаций о подключении бизнес -->
		<div class="connectToUsWrapper connectToUsWrapperNext connectToUsWrapperBusiness">
	
						<?php 
            $posts = get_posts( array(
            'category_name'    => 'connect-to-us-business',
            'order' => 'ASC',
            'numberposts' => 0,
            'post_type'   => 'post',
            'suppress_filters' => true, // подавление работы фильтров изменения SQL запроса
            ) );

            foreach( $posts as $post ){
            setup_postdata($post);
            ?>

		<!-- Блоки с предложениями -->
		<div class="connectToUsOfferContainer">
			
			<div class="connectToUsOfferLeft">
				<h2><?php the_field('connect-to-us-title'); ?></h2>
				<p><?php the_field('connect-to-us-text'); ?></p>
			</div> <!-- connectToUsOfferLeft -->
			

			<div class="connectToUsIcon">
				<?php the_field('connect-to-us-icon'); ?>
			</div> <!-- connectToUsIcon -->
			
			<div class="connectToUsPrice connectToUsPriceBusiness" data-name="mediaNot">
				<span class="connectToUsPriceFrom">от</span>
				<span class="connectToUsPriceNumber"><?php the_field('connect-to-us-price'); ?></span>
				<span class="connectToUsPriceMesure">
					<span class="connectToUsPriceMesureTop">Руб.</span><br>
					<span class="connectToUsPriceMesureDown">Мес.</span>
				</span>
			</div> <!-- connectToUsPrice -->

			<div class="connectToUsButton" data-name="mediaNot">
				<a href="<?php the_field('connect-to-us-link'); ?>">подробнее</a>
				<i class="icon-right-arrow"></i>
			</div> <!-- connectToUsButton -->

			<div class="connectToUs480Media" style="display: none;">
				
				<!-- Отображаем этот блок при ширине меньше 480px. 
						При этом выклуючаем верхние два аналогичных -->
				
						<div class="connectToUsPrice">
							<span class="connectToUsPriceFrom">от</span>
							<span class="connectToUsPriceNumber"><?php the_field('connect-to-us-price'); ?></span>
							<span class="connectToUsPriceMesure">
								<span class="connectToUsPriceMesureTop">Руб.</span><br>
								<span class="connectToUsPriceMesureDown">Мес.</span>
							</span>
						</div> <!-- connectToUsPrice -->

						<div class="connectToUsButton">
							<a href="<?php the_field('connect-to-us-link'); ?>">подробнее</a>
							<i class="icon-right-arrow"></i>
						</div> <!-- connectToUsButton -->				

			</div> <!-- connectToUs480Media -->

		</div> <!-- connectToUsOfferContainer -->

		<!-- END Блоки с предложениями -->
	
						<?php
	        	}
	          	wp_reset_postdata(); // сброс

	       		?>
	</div> <!-- connectToUsWrapper -->

<!-- END Блок с информаций о подключении бизнес -->

</div> <!-- connectToUsWrapperMain -->

<!-- END Контейнер для слайдера -->

</div> <!-- connectToUsContainer -->

<!-- END Блок с информаций о подключении дома -->

<!-- END Наши предложения - подключайтесь к RealWeb -->
