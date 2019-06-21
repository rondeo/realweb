

<div class="topMenuWrapper">
	<div class="topMenuContainer">
		
		<!-- Бизнес -->
		<div class="topMenuBusiness">
			для бизнеса
		</div> <!-- topMenuBusiness -->
		
		<!-- Общее меню -->
		<div class="topMenuBlock">
		
		<?php 
					wp_nav_menu( array(
							'theme_location' => 'primary',
							'items_wrap' => '<ul id="%1$s" class="%2$s">%3$s</ul>',
							'menu_class' => 'topMenu', //стилизуем элементы меню через класс ul
							'menu_id' => '',
							'depth' => 0
					));
				?>

	<!-- 		<ul class="topMenu">
				<li class="topMenuItem"><a href=""></a></li>
			</ul> -->

		</div> <!-- topMenuBlock -->
		<!-- END Общее меню -->
		
		<!-- Мобильное общее меню --> 
		<div class="topMenuBlockMobile">
		
			<div class="topMenuBlockMobileLink">
				<p class="topMenuBlockMobileLinkText">информация</p>
				<p class="topMenuBlockMobileLinkArrow">&#9662</p>
			</div> <!-- topMenuBlockLink -->
			
			<div class="topMenuBlockMobileSub">
				
		<?php 
					wp_nav_menu( array(
							'theme_location' => 'primary',
							'items_wrap' => '<ul id="%1$s" class="%2$s">%3$s</ul>',
							'menu_class' => 'topMenuMobile', //стилизуем элементы меню через класс ul
							'menu_id' => '',
							'depth' => 0
					));
				?>

			</div> <!-- topMenuBlockMobileSub -->
	<!-- 		<ul class="topMenu">
				<li class="topMenuItem"><a href=""></a></li>
			</ul> -->

		</div> <!-- topMenuBlock -->
		<!-- END Мобильное общее меню -->

		<!-- Телефон -->
		<div class="topMenuPhone">
			<i class="icon-smartphone-call"></i>
			<p class="topMenuPhoneText"><?php the_field('top-menu-phone-text', 147); ?>&nbsp;</p>
			<p><a href="tel:<?php the_field('top-menu-phone', 147); ?>"><?php the_field('top-menu-phone', 147); ?></a></p>
		</div> <!-- topMenuPhone -->

	</div> <!-- topMenuContainer -->	
</div> <!-- topMenuWrapper -->

