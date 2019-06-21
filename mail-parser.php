<?php

	if( isset($_POST['n']) && isset($_POST['p']) ) {
		$n = $_POST['n'];
		$p = $_POST['p'];
		$to = "johnnybegreen@yandex.ru";
		$subject = "Сообщение с сайта Realweb отправленное через быструю форму";
		$message = '<b>Имя: </b> '.$n.' <br><b>Телефон: </b> '.$p.
		$headers = "MIME-Version: 1.0\n";
		$headers = "Content-type: text/html; charset=utf-8";
		if( mail($to, $subject, $message, $headers) ) {
			echo "success";
		} else {
			echo "Ошибка отправки";
		}
	}

?>