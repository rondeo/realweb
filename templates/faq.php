<?php
/*
Template Name: Страница FAQ
Template Post Type: page
*/

?>

<?php get_header(); ?>

<!-- заголовок оборудование -->
<div class="t-Header t-HeaderFaq">
      <h1><?php the_field('faq-page-title'); ?></h1>
      <p><?php the_field('faq-page-title-text'); ?></p>
</div> <!-- t-HeaderTariffsIPTV -->
<!-- END заголовок оборудование -->

<div class="eq-wrapper">

	<div class="faqContainer">
		
		<!-- С помощью вложенного цикла ACF репитера вывожу группу кнопок дополнительных сервисов-->

		<?php if ( have_rows('faq') ): 
					
			while ( have_rows('faq') ) : the_row(); ?>

				<?php get_template_part('template-parts/faq-item') ?>
			
			<?php endwhile; ?>

		<?php else :
							    		// no rows found
	    endif; ?>
					
	<!-- END С помощью вложенного цикла ACF репитера вывожу группу кнопок дополнительных сервисов-->
		

	</div> <!-- faqContainer -->

</div> <!-- eq-wrapper -->

</div> <!-- pageContainer -->

<!-- футер -->
<?php get_footer(); ?>
<!-- END футер -->
