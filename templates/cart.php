<?php
/*
Template Name: Страница корзина
Template Post Type: page
*/

?>

<?php get_header(); ?>

<!-- заголовок оформление заказа -->
<div class="t-Header t-HeaderCart">
      <h1>Оформление заказа</h1>
      <p id="js_cartPageInfo"></p>
</div> <!-- t-HeaderTariffsIPTV -->
<!-- END заголовок оформление заказа -->

<div class="cartPageOrderContainer">
	
	<div class="cartPageOrderInfo">
		
		<div class="tarifContainer">

			<div class="cartPageOrder-container">
				<p class="cartPageOrder-location-title">Тип строения:</p>
				<p class="cartPageOrder-location-text"></p>
			</div>

			<div class="cartPageOrder-tarifname">
				<p class="cartPageOrder-tarifname-title">Название тарифа:</p>
				<p class="cartPageOrder-tarifname-text"></p>
			</div>

			<div class="cartPageOrder-tarifspeed">
				<p class="cartPageOrder-tarifspeed-title">Скорость:</p>
				<p class="cartPageOrder-tarifspeed-text"><span></span><span> Mb/s</span></p>
			</div>

			<div class="cartPageOrder-tarifprice">
				<p class="cartPageOrder-tarifprice-title">Цена тарифа:</p>
				<p class="cartPageOrder-tarifprice-text"><span></span><span> руб./мес.</span></p>
			</div>
		
		</div> <!-- tarifContainer -->

	</div> <!-- cartPageOrderInfo -->

		<div class="cartPageOrder-eq">
			<p class="cartPageOrder-eqtitle">Оборудование:</p>
			<div id="cart-eq-block"><!-- js --></div>
		</div>
		
		<div class="cartPageOrder-services">
			<p class="cartPageOrder-servicestitle">Дополнительные услуги:</p>
				<div id="cart-services-block"><!-- js --></div>
		</div>

		<div class="cartPageOrder-servicesplus">
			<p class="cartPageOrder-servicesplustitle">Дополнительные сервисы:</p>
				<div id="cart-services_plus-block"><!-- js --></div>
		</div>

	
	
	<!-- Cart total summ -->
	<div class="cartTotalContainer">
		<p class="cartTotal-title">Итого:</p>
		<p class="cartTotal-num"><span id="cart-total"><!-- js --></span><span> руб.</span></p>
	</div> <!-- cartTotalContainer -->

	<div class="orderPhoneCallFormContainer">
	
	<form id="cartForm" onsubmit="submitCartForm(); return false;">
			<input id="tarif-location" type="text" style="display: none;">
			<input id="tarif-name" type="text" style="display: none;">
			<input id="tarif-speed" type="text" style="display: none;">
			<input id="tarif-price" type="text" style="display: none;">
			<textarea id="order-eq" type="text" style="display: none;"></textarea>
			<textarea id="order-services" type="text" style="display: none;"></textarea>
			<textarea id="order-services-plus" type="text" style="display: none;"></textarea>
			<input id="order-total" type="text" style="display: none;">

			<input id="n" type="text" placeholder="Ваше имя" required>
			<span class="formNameLable">Обязательное поле</span>
			<input id="p" type="tel" placeholder="Номер телефона" 
										pattern="[0-9]{11}" required>
			<span class="formTelLable">Обязательное поле. Только цифры без пробелов.</span>
			<input id="e" type="Email" placeholder="Электронная почта" required>
			<span class="formEmailLable">Обязательное поле</span>
			<input id="a" type="text" placeholder="Адрес подключения">
			<textarea id="t" type="text" name="text" placeholder="Комментарии"></textarea>
			<input id="cart_form_button" class="formButton" type="submit" value="Отправить заявку">
			<span id="cart_form_status" style="color: #FF6C00;"></span>
		</form>
	
	</div>

</div> <!-- cartPageOrderContainer -->


</div> <!-- pageContainer -->


<!-- футер -->
<?php get_footer(); ?>
<!-- END футер -->