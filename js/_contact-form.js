/*

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

