
<?php
/*
Template Name: Конструктор тарифа
Template Post Type: post
*/

?>

<!-- Конструктор тарифа -->

<div class="wrapper">

		<div class="t-container">

			<div class="t-subContainer1" name="tarif-name">
				<p class="t-plan">Тарифный план</p>
				<h2 class="t-planName">start</h2>	
			</div>

			<div class="t-subContainer2" name="speed-price">	
				
				<div class="t-annotation">
					<p>Комфортная скорость интернета.</p>
				</div>
				
				<div class="t-main">
					
					<div class="t-speed" data-speed="150">
						<i class="icon-dashboard"></i>
						<p class="t-speedValue">
							<span class="t-speedValueNum">50</span>
							<span class="t-speedValueMesure">Mbit/s</span>
						</p>
					</div>

					<div class="t-period">
						
							<div class="t-periodRadio">
								
								<span class="t-periodRadioMonth t-periodRadioMonthActive">50 Mb/s</span>

								<div class="t-periodRadioContainer">
									<span class="t-periodCheckmark"></span>
									<input type="radio" name="payment-period" value="1" data-plan-name="start" data-speed="50" data-price="150" data-discount="0">
								</div>

							</div>

							<div class="t-periodRadio">
							
								<span class="t-periodRadioMonth">150 Mb/s</span>

								<div class="t-periodRadioContainer">
									<span class="t-periodCheckmark"></span>
									<input type="radio" name="payment-period" value="3" data-plan-name="comfort" data-speed="150" data-price="250" data-discount="5">
								</div>

							</div>
							
							<div class="t-periodRadio">
							
								<span class="t-periodRadioMonth">200 Mb/s</span>

								<div class="t-periodRadioContainer">
									<span class="t-periodCheckmark"></span>
									<input type="radio" name="payment-period" value="6" data-plan-name="elite" data-speed="200" data-price="350" data-discount="10">
								</div>

							</div>
							
							<div class="t-periodRadio">
							
								<span class="t-periodRadioMonth">500 Mb/s</span>

								<div class="t-periodRadioContainer">
									<span class="t-periodCheckmark"></span>
									<input type="radio" name="payment-period" value="12" data-plan-name="absolute" data-speed="500" data-price="450" data-discount="15">
								</div>

						</div>

					</div> <!-- t-period -->

					<div class="t-price">
						<span class="t-priceNumber" data-price="150">150</span>
						<span class="t-priceMesure">
							<span class="t-priceMesureTop">Руб.</span><br>
							<span class="t-priceMesureDown">Мес.</span>
						</span>															
					</div>		
				</div>
				
				<div class="t-selectButtonContainer">
					<button class="t-selectButton" value="text"><span>выбрать тариф</span></button>
				</div>

			</div> <!-- t-SubContainer2 -->

			<div class="t-subContainer3" name="more-info">
				
				<div class="t-moreContainerHeader">
					<i class="icon-more"></i>
				</div>
				
				<div class="t-moreContainerContent">

					<div class="t-moreTextIconsContainer">
					
						<p class="t-moreContainerText">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos quaerat, 
						omnis amet accusantium accusamus quidem sequi, nam, explicabo excepturi fuga ut. 
						Dicta enim architecto dolor.
						</p>
						
						<div class="t-moreContainerIcons">
							
							<div class="t-moreContainerIconsItem">
								<i class="icon-wifi-router"></i>
								<p class="t-moreContainerIconsItemText">
									Бесплатная настройка<br> оборудования
								</p>
							</div>

							<div class="t-moreContainerIconsItem">
								<i class="icon-change"></i>
								<p class="t-moreContainerIconsItemText">
									Переподключение<br> бесплатно
								</p>
							</div>
							
						</div>

					</div>			

				</div> <!-- t-moreContainerContent -->
				
				
				<!-- Add products section -->

				<div class="t-produtsContainer">				

						<div class="t-productsContainerHeader">
							<h3 class="t-productsHeader">Добавить к тарифу оборудование для интернета</h3>
						</div>
						
						<div class="t-productsContainerContent">					
							<?php get_template_part('template-parts/slider') ?>
						</div>		

				</div>
				
				
				<!-- Add services section -->

				<div class="t-servicesContainer">				

						<div class="t-servicesContainerHeader">
							<h3 class="t-servicesHeader">Добавить к тарифу дополнительные сервисы</h3>
						</div>
						
						<div class="t-servicesContainerContent">					
							<p>Lorem ipsum dolor sit amet.</p>
						</div>		

				</div>
		

				<!-- Submit & cansel section -->
				<div class="t-submitContainer">

					<div class="t-submitButtonContainer">					
						<button class="t-submitButton"><span>оформить заявку</span></button>
					</div>

					<div class="t-canselButtonContainer">					
						<button class="t-canselButton"><span>отмена</span></button>
					</div>

				</div>

			</div> <!-- t-subContainer3 -->
			
		</div>

		

</div> <!-- wrapper -->