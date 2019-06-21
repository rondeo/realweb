<?php

	if( isset($_POST['c-n']) && isset($_POST['c-e']) ) {
		$n = $_POST['name'];
		$e = $_POST['email'];
		$p = $_POST['phone'];
		$t = $_POST['text'];
		
		$to = "johnnybegreen@yandex.ru";
		$subject = "Сообщение с сайта Realweb со страницы контакты";
		$message = '<b>Имя: </b> ' .$n. ' <br><b>Электронная почта: </b> ' .$e.
		' <br><b>Телефон: </b> ' .$p. '<br><b>Комментарий: </b> ' .$t.
		$headers = "MIME-Version: 1.0\n";
		$headers = "Content-type: text/html; charset=utf-8";
		if( mail($to, $subject, $message, $headers) ) {
			echo "success";
		} else {
			echo "Ошибка отправки";
		}
	}

?>