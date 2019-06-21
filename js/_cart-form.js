/*

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
							window.location.href = "http://localhost:3000/success/";
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


