/*
 Контактная форма
*/

function submitContactForm() {
	
	function _(id) { return document.getElementById(id); }

	_("contact-form-button").disabled = true;
	_("contact-form-status").innerHTML = 'отправка...';
	
	let formdata = new FormData();
	
	formdata.append("c-n", _("c-n").value);
	formdata.append("c-e", _("c-e").value);
	formdata.append("c-p", _("c-p").value);
	formdata.append("c-t", _("c-t").value);

	let ajax = new XMLHttpRequest();
	ajax.open("POST", "/wp-content/themes/McehRealweb/contact-form-parser.php");
	ajax.onreadystatechange = ()=> {
		if( ajax.readyState == 4 && ajax.status == 200 ) {
			setTimeout( ()=> {
				if ( ajax.responseText == "success") {
						
						_("contact-form-status").style.color = "#009FDF";
						_("contact-form-status").innerHTML = "Сообщение отправленно";

						setTimeout(()=> {
							_("c-n").value = "";
							_("c-e").value = "";
							_("c-p").value = "";
							_("c-t").value = "";
						}, 4000);

						setTimeout(()=> { _("contact-form-status").innerHTML = "";}, 6000);

				} else {
					_("contact-form-status").innerHTML = ajax.responseText;
					_("contact-form-status").disabled = false;
				}
			}, 2000);
		}
	}
	ajax.send (formdata);
}

/*
	Форма в корзине
*/

function submitCartForm() {

	function _(id) { return document.getElementById(id); }

	_("cart_form_button").disabled = true;
	_("cart_form_status").innerHTML = 'отправка...';
	
	let formdata = new FormData();
	
	formdata.append("tarif-location", _("tarif-location").value);
	formdata.append("tarif-name", _("tarif-name").value);
	formdata.append("tarif-speed", _("tarif-speed").value);
	formdata.append("tarif-price", _("tarif-price").value);
	formdata.append("order-eq", _("order-eq").value);
	formdata.append("order-services", _("order-services").value);
	formdata.append("order-services-plus", _("order-services-plus").value);
	formdata.append("order-total", _("order-total").value);
	formdata.append("n", _("n").value);
	formdata.append("p", _("p").value);
	formdata.append("e", _("e").value);
	formdata.append("a", _("a").value);
	formdata.append("t", _("t").value);
	
	let ajax = new XMLHttpRequest();
	ajax.open("POST", "/wp-content/themes/McehRealweb/cart-form-parser.php");
	ajax.onreadystatechange = ()=> {
		if( ajax.readyState == 4 && ajax.status == 200 ) {
			setTimeout(()=> {
				if ( ajax.responseText == "success") {
						
						_("cart_form_status").style.color = "#009FDF";
						_("cart_form_status").innerHTML = "Сообщение отправленно";

						setTimeout(()=> {
							window.location.href = `${homeUrl}/success/`;
						}, 4000);

				} else {
					_("cart_form_status").innerHTML = ajax.responseText;
					_("cart_form_button").disabled = false;
				}
			}, 2000);
		}
	}
	ajax.send (formdata);
}


/*
	Подключение в один клик
*/


function submitForm() {

	function _(id) { return document.getElementById(id); }

	_("form_button").disabled = true;
	_("quick_form_status").innerHTML = 'отправка...';
	
	let formdata = new FormData();
	
	formdata.append("n", _("n").value);
	formdata.append("p", _("p").value);
	
	let ajax = new XMLHttpRequest();
	ajax.open("POST", "/wp-content/themes/McehRealweb/mail-parser.php");
	ajax.onreadystatechange = ()=> {
		if( ajax.readyState == 4 && ajax.status == 200 ) {
			setTimeout( ()=> {
				if ( ajax.responseText == "success") {
						
						_("quick_form_status").style.color = "#009FDF";
						_("quick_form_status").innerHTML = "Сообщение отправленно";


						setTimeout(()=> {
							_("n").value = "";
							_("p").value = "";
						}, 4000);

						setTimeout(()=> { _("quick_form_status").innerHTML = "";}, 6000);

				} else {
					_("quick_form_status").innerHTML = ajax.responseText;
					_("form_button").disabled = false;
				}
			}, 2000);
		}
	}
	ajax.send (formdata);
}


