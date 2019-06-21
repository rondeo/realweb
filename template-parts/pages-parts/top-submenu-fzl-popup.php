	<!-- Сабменю во всплыващем окне -->
	<div class="topMobilePopupMenuContainer">
		<div class="topMobilePopupMenu">
			
			<?php 
					wp_nav_menu( array(
							'theme_location' => 'submenu-fzl',
							'items_wrap' => '<ul id="%1$s" class="%2$s">%3$s</ul>',
							'menu_class' => 'topMobilePopupMenuList', //стилизуем элементы меню через класс ul
							'menu_id' => '',
							'depth' => 0
					));
				?>

		<div class="topMobilePopupMenuClose">&times;</div>
		</div>
	</div>
	<!-- END Сабменю во всплыващем окне -->