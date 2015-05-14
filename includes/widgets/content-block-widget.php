<?php

//
//	Content Block Widget

add_action( 'widgets_init', 'content_block_widget' );

function content_block_widget() {
	register_widget('Content_Block_Widget');
}

class Content_Block_Widget extends WP_Widget {

	function Content_Block_Widget() {
		
		// Settings
		$widget_ops = array('classname' => 'content-block-widget', 'description' => 'Render a Content Block');
		
		// Control Settings
		$control_ops = array( 'width' => 300, 'height' => 350, 'id_base' => 'content-block-widget'	);
		
		// Create //
		$this->WP_Widget('content-block-widget','Content Block', $widget_ops, $control_ops );
	}
	
	function widget( $args, $instance ) {
		extract( $args );
		
		// User selected options
		$title	= apply_filters('widget_title', $instance['title'] );
		$id	= $instance['id'];
				
		echo $before_widget;
		
		// Title of Widget
		
		if ($title)
		
			echo $before_title . $title . $after_title;
		
		// Call the woo_featured function
		
			$block     =   get_post($id);

			$r .=   '<section id="'.$id.'" class="content-block '.$class.'">';
	    $r .=   do_shortcode($block->post_content);
	    $r .=   '</section>';

	    echo $r;
		
		
		echo $after_widget;
	
	}
	
	function update( $new_instance, $old_instance ) {
	
		$instance = $old_instance;
		
		// Strip tags and update widget settings
		$instance['title']	= strip_tags( $new_instance['title'] );
		$instance['id']	= strip_tags( $new_instance['id'] );
		
		return $instance;
	}
	
	function form( $instance ) {
		
		$defaults	= array( 'title' => 'Featured Products', 'category' => '', 'number' => 4 );
		$instance	= wp_parse_args( (array) $instance, $defaults ); ?>
		
		<p>
			<label for="<?php echo $this->get_field_id('title'); ?>">Title:</label>
			<input id="<?php echo $this->get_field_id('title'); ?>" name="<?php echo $this->get_field_name( 'title' ); ?>" value="<?php echo $instance['title']; ?>" style="widget:100%" />
		</p>	

		<p>
			<label for="<?php echo $this->get_field_id('id'); ?>">Content Block:</label>
			<select id="<?php echo $this->get_field_id('id'); ?>" name="<?php echo $this->get_field_name( 'id' ); ?>" class="widefat" style="widget:100%">
				<?php
					$args = array( 
				  'posts_per_page' => -1, 
				  'post_type' => 'content-block', 
				  'order' => 'ASC',
				  'orderby' => 'date',
				  );
				$posts = get_posts( $args );
				foreach ( $posts as $post ) {
					var_dump($post);
					echo 	'<option ';
					if ( $post->name == $instance['post'] ) 
						echo 'selected="selected"';
					echo ' value="' . $post->ID .'">' . $post->post_title . '</option>';
				}
				?>
			</select>
		</p>	

		
	<?php
	
	}
}

?>