<div class="orderPhoneCallContainer">
	
	<div class="orderPhoneCallFormContainer">
		
		<h3>Подключиться в один клик</h3>
		
		<form id="quickForm" onsubmit="submitForm(); return false;">
			<input id="n" type="text" name="name" placeholder="Ваше имя" required>
			<input id="p" type="tel" name="phone" placeholder="Номер телефона" 
										pattern="[0-9]{11}" required>
			<input id="form_button" class="formButton" type="submit" value="Отправить заявку">
			<span id="quick_form_status" style="color: #FF6C00;"></span>
		</form>

	</div> <!-- orderPhoneCallFormContainer -->

	<div class="orderPhoneCallTermsContainer">
		<h3>Как подключиться?</h3>
		<p>Выберите услугу и оставьте заявку на сайте.</p>
		<p>С вами свяжется менеджер и поможет подобрать тариф.</p>
		<p>В удобное вам время техник оформит договор, 
			проведет кабель и настроит оборудование.</p>

	</div> <!-- orderPhoneCallTermsContainer -->

</div> <!-- orderPhoneCallContainer -->