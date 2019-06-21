<?php
/*
Template Name: Страница контакты
Template Post Type: page, post
*/

?>

<?php get_header(); ?>

<!-- заголовок сервисы -->
<div class="t-Header t-HeaderServicesPlus">
      <h1><?php the_field('contacts-page-title'); ?></h1>
      <p><?php the_field('contacts-page-text'); ?></p>
</div> <!-- t-HeaderServicesPlus -->
<!-- END заголовок сервисы -->

<div class="eq-wrapper contactFormContainer">

<div class="container">
	<div class="row flex-column-reverse flex-lg-row">
			
		<div class="col-md-7 col-sm-12">
			
			<h4 class="cf-adressFormHeader">Форма обратной связи</h4>
		
		<div class="orderPhoneCallFormContainer">
			<form id="quickForm" onsubmit="submitContactForm(); return false;">
				<input id="c-n" type="text" name="name" placeholder="Ваше имя" required>
				<input id="c-e" type="email" name="email" placeholder="Электронный адрес" required>
				<input id="c-p" type="tel" name="phone" placeholder="Номер телефона" 
											pattern="[0-9]{11}">
				<textarea id="c-t" class="" name="text" placeholder="Текст сообщения"></textarea>
				<input id="contact-form-button" class="formButton" type="submit" value="Отправить заявку">
				<span id="contact-form-status" style="color: #FF6C00;"></span>
			</form>
		</div>

		</div> <!-- col-md-7 col-12 -->
		
		<div class="col-md-5 col-sm-12 order-1 order-sm-12">
			
			<h4 class="cf-adressPhoneHeader">Адреса и телефоны</h4>
			
			<div class="contactFormAdressBlock">
				
				<?php 
            $posts = get_posts( array(
            'category_name'    => 'adress',
            'order' => 'ASC',
            'numberposts' => 0,
            'post_type'   => 'post',
            'suppress_filters' => true, // подавление работы фильтров изменения SQL запроса
            ) );

            foreach( $posts as $post ){
            setup_postdata($post);
            ?>
				
				<p class="cf-adress">Адрес</p>
				
				<p class="cf-adress-text"><?php the_field('contacts-page-adress'); ?></p>
				
				<p class="cf-phones">Телефоны</p>

				<!-- репитер -->
				<?php if ( have_rows('contacts-page-phones') ): 
					
				while ( have_rows('contacts-page-phones') ) : the_row(); ?>
				
				<div class="cf-div">
					<p><?php the_sub_field('contacts-page-phones-department'); ?>:</p>
					<p><?php the_sub_field('contacts-page-phones-phone'); ?></p>
				</div>

				<?php endwhile; ?>

				<?php else :
							    		// no rows found
	    	endif; ?>
				
				<p class="cf-tech">Техническая поддержка</p>
				
				<!-- репитер -->
				<?php if ( have_rows('contacts-page-tech') ): 
					
				while ( have_rows('contacts-page-tech') ) : the_row(); ?>
				
				<div class="cf-div">
					<p><?php the_sub_field('contacts-page-phones-type'); ?>:</p>
					<p><?php the_sub_field('contacts-page-phones-phone'); ?></p>
				</div>

				<?php endwhile; ?>

				<?php else :
							    		// no rows found
	    	endif; ?>

					
				<?php
	      	 	}
	          	wp_reset_postdata(); // сброс

	      ?> 
				<!-- репитер -->

				
			
			</div> <!-- contactFormAdressBlock -->
		
		</div> <!-- col-md-7 col-12 -->

	</div> <!-- row -->
</div> <!-- container -->



</div>

</div> <!-- pageContainer -->

<!-- футер -->
<?php get_footer(); ?>
<!-- END футер -->
