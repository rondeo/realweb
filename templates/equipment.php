<?php
/*
Template Name: Страница оборудование
Template Post Type: page
*/

?>

<?php get_header(); ?>




<!-- Акции на странице оборудование -->
<div class="bestOffersContainer bestOffersTV">

                                    <?php 
            $posts = get_posts( array(
            'category_name'    => 'best-offers-equipment',
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

<!-- END Акции на странице оборудование -->



<!-- заголовок оборудование -->
<div class="t-Header t-HeaderEquipment">
      <h1><?php the_field('equipment-page-title'); ?></h1>
      <p><?php the_field('equipment-page-text'); ?></p>
</div> <!-- t-HeaderTariffsIPTV -->
<!-- END заголовок оборудование -->

<?php 
      
      $eq_type = "equipment";

      if($_GET['eq_type'] && !empty($_GET['eq_type']))
      {
            $eq_type = $_GET['eq_type'];
      }
?>

<div class="equipmentFilter">
      <form action="http://localhost:3000/equipment/" method="GET">
            <button class="equipmentFilterButton" type="text" name="eq_type" value="equipment">Все</button>
            <button class="equipmentFilterButton" type="text" name="eq_type" value="equipment-internet">Для интернета</button>
            <button class="equipmentFilterButton" type="text" name="eq_type" value="equipment-tv">Для ТВ</button>
      </form>
</div>


<div id="js_clearSwitchersEq" class="eq-wrapper">


<?php 
            $posts = get_posts( array(
            'category_name'    => $eq_type,
            'order' => 'ASC',
            'numberposts' => 0,
            'post_type'   => 'post',
            'suppress_filters' => true, // подавление работы фильтров изменения SQL запроса
            ) );

            foreach( $posts as $post ){
            setup_postdata($post);
            ?>
							
							<div class="eq-subWrapper">
								<?php get_template_part('template-parts/equipment-item') ?>
							</div>

            <?php
	        	}
	          	wp_reset_postdata(); // сброс

	       		?> 


<div class="marginBlock"></div> <!-- connectToUsHeader -->


<!-- Подключиться в один клик -->
<?php get_template_part( "template-parts/pages-parts/home-order-phonecall" ) ?>
<!-- END Подключиться в один клик -->

</div>

</div> <!-- pageContainer -->

<!-- футер -->
<?php get_footer(); ?>
<!-- END футер -->
