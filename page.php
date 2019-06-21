<?php
/*
Template Name: Шаблон текстовых страниц
Template Post Type: page, post
*/

?>

<?php get_header(); ?>

<div class="singlePageContainer">

	<!-- заголовок блока -->
	<div class="t-Header">
		<h1><?php echo get_the_title(); ?></h1>
	</div> <!-- pageHeader -->
	<!-- END заголовок блока -->
	
	<div class="singlePageContent">
		<!-- Выводим контент -->
		<?php if ( have_posts() ) : while ( have_posts() ) : the_post();
		the_content();
		endwhile; else: ?>
		<p>Ничего не найдено</p>
		<?php endif; ?>

	</div> <!-- singlePageContent -->

</div> <!-- singlePageContainer -->	



</div> <!-- pageContainer -->

<!-- футер -->
<?php get_footer(); ?>
<!-- END футер --> 
