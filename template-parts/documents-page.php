<?php
/*
Template Name: Страница отдельного документа
Template Post Type: post
*/

?>

<?php get_header(); ?>


<div class="eq-wrapper newsPageContainer">


	<section class="s-documentsPageCenter">
	

			<p class="newsPage_newsLink"><a href="<?php echo get_permalink(126); ?>">Документы Realweb</a></p>
      <p class="newsPage_newsItem_date"><?php echo get_the_date('j F Y'); ?></p>
      <p class="newsPage_newsItem_title"><a href="<?php echo the_permalink(); ?>"><?php the_title(); ?></a></p>
      <p class="newsPage_newsItem_text"><?php the_field('documents-page-content'); ?></p>
	
	<div class="container">
		<div class="row">			

      <?php
    	//Get the images ids from the post_metadata
    	$images = acf_photo_gallery('documents-imgs', $post->ID);
    	//Check if return array has anything in it
	    if( count($images) ):
	        //Cool, we got some data so now let's loop over it
	        foreach($images as $image):
            $id = $image['id']; // The attachment id of the media
            $title = $image['title']; //The title
            $caption= $image['caption']; //The caption
            $full_image_url= $image['full_image_url']; //Full size image url
           
            $url= $image['url']; //Goto any link when clicked
            $target= $image['target']; //Open normal or new tab
            $alt = get_field('photo_gallery_alt', $id); //Get the alt which is a extra field (See below how to add extra fields)
            $class = get_field('photo_gallery_class', $id); //Get the class which is a extra field (See below how to add extra fields)
	?>
	
	<div class="col-md-6 col-12">
    <div class="documentsImgs">
        <?php if( !empty($url) ){ ?><a href="#" <?php echo ($target == 'true' )? 'target="_blank"': ''; ?>><?php } ?>
            <img src="<?php echo $full_image_url; ?>" alt="<?php echo $title; ?>" title="<?php echo $title; ?>">
        <?php if( !empty($url) ){ ?></a><?php } ?>
    </div>
	</div>

<?php endforeach; endif; ?>
	
		</div>
	</div>


	</section> <!-- s-newsPageCenter -->
	
	
</div> <!-- eq-wrapper -->

</div> <!-- pageContainer -->


<!-- футер -->
<?php get_footer(); ?>
<!-- END футер -->
