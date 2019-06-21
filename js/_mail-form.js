/*

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


