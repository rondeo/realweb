<div class="owl-carousel">

  <!-- Циклом WP вывоже слайды -->    

    <?php 
            $posts = get_posts( array(
            'category_name'    => 'carousel-home',
            'order' => 'ASC',
            'numberposts' => 0,
            'post_type'   => 'post',
            'suppress_filters' => true, // подавление работы фильтров изменения SQL запроса
            ) );

            foreach( $posts as $post ){
            setup_postdata($post);
            ?>

      <div>
        <a href="<?php the_permalink(); ?>">
          <img src="<?php the_field('home-carousel-img'); ?>" data-name="desktop">
          <img src="<?php the_field('home-carousel-img-mobile'); ?>" data-name="mobile">
        </a>
      </div>


      <?php
            }
              wp_reset_postdata(); // сброс

            ?>

  <!-- Циклом WP вывоже слайды -->                

</div>