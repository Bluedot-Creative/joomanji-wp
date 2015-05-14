<?php

// Exit if accessed directly
if ( !defined('ABSPATH')) exit;

/*
**	Home Page Blog Template
**
**  Template Name: Blog Home Page
*/
get_header(); 

global $post;

$current_post = $post;

$args = array( 
  'posts_per_page' => 4, 
  'post_type' => 'post', 
  'order' => 'ASC',
  'orderby' => 'date',
  'paged' =>  (get_query_var('paged')) ? get_query_var('paged') : 1 
  );

$posts = new WP_Query($args);

?>
<!-- #wrapper -->

	<!-- #container -->
	<div class="page" id="home">

		<section class="bg-opaque padding-1 flex">
				
			<div class="blog-feed">	
				<?php if( $posts->have_posts() ) : while ( $posts->have_posts() ) : $posts->the_post(); // begin loop ?>  

				<div class="blog-entry">
				  <?php //echo get_the_post_thumbnail($post->ID, array(220, 180), array('class' => 'tile_image')); ?>
				  <div class="blog-entry-title">
				    <h3>
				    	<?php echo the_title(); ?>
				    </h3>
				    <div class="blog-entry-excerpt">
				        <?php echo the_excerpt(); ?>
				    </div>
				    <div class="blog-entry-meta">
				        <a href="<?php echo $post->guid; ?>">Read full</a>
				    </div>
				  </div>
				</div>

				<?php endwhile; wp_reset_postdata(); else: ?>

				<p>Sorry, no posts matched your criteria.</p>

				<?php endif; // end loop ?>
			</div>

			<div class="right-sidebar">
				<?php sidebar_display('right-home-sidebar'); ?>
			</div>

		</section>
	
	</div>
	<!-- end #container -->

<!-- end #wrapper -->
<?php get_footer(); ?>