						
						<div class="newsItem">
							<p class="newsItem_sign" style="display: none;">
								<a href="http://localhost:3000/news/">Документы Realweb</a>
							</p>
							<p class="newsItem_date"><?php echo get_the_date('j F Y'); ?></p>
							<p class="newsItem_title"><a href="<?php echo the_permalink() ?>"><?php the_title(); ?></a></p>
						</div> <!-- newsBlockContainer -->
			