<?php
/*
Template Name: Страница покрытие
Template Post Type: page
*/

?>

<?php get_header(); ?>

<!-- заголовок оборудование -->
<div class="t-Header t-HeaderCovering">
      <h1><?php the_field('covering-page-title'); ?></h1>
      <p><?php the_field('covering-page-title-text'); ?></p>
</div> <!-- t-HeaderTariffsIPTV -->
<!-- END заголовок оборудование -->

<div class="eq-wrapper">

	<!-- Покрытие -->
		<?php get_template_part( "template-parts/pages-parts/covering" ) ?>
	<!-- END Покрытие -->

</div> <!-- eq-wrapper -->

</div> <!-- pageContainer -->

<!-- футер -->
<?php get_footer(); ?>
<!-- END футер -->
