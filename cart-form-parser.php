<?php

	if( isset($_POST['n']) && isset($_POST['p']) ) {
		$tarif_location = $_POST['tarif-location'];
		$tarif_name = $_POST['tarif-name'];
		$tarif_speed = $_POST['tarif-speed'];
		$tarif_price = $_POST['tarif-price'];
		$order_eq = $_POST['order-eq'];
		$order_services = $_POST['order-services'];
		$order_services_plus = $_POST['order-services-plus'];
		$order_total = $_POST['order-total'];
		$n = $_POST['n'];
		$p = $_POST['p'];
		$e = $_POST['e'];
		$a = $_POST['a'];
		$t = $_POST['t'];
		$to = "johnnybegreen@yandex.ru";
		$subject = "Сообщение с сайта Realweb отправленное через быструю форму";
		$message = '<b>Имя: </b> '.$n.' <br><b>Телефон: </b> '.$p. ' <br><b>Электронная почта: </b> ' .$e.
		' <br><b>Адрес: </b> ' .$a. '<br>
		<br><b>Тип постройки: </b> ' .$tarif_location. ' <br><b>Название тарифа: </b> ' .$tarif_name. ' 
		<br><b>Скорость: </b> ' .$tarif_speed. '<span> Mb./s.</span>
		<br><b>Стоимость тарифа: </b> ' .$tarif_price. '<span> руб./мес.</span><br>
		<br><b>Оборудование: </b><br>' .$order_eq. '<br><br><b>Дополнительные услуги: </b><br>' .$order_services. '
		<br><br><b>Сервисы: </b><br>' .$order_services_plus. '
		<br><b>Комментарий: </b> ' .$t. '
		<br><br><b>Итого: ' .$order_total. '<span> руб.</span><br><br>';
		$headers = "MIME-Version: 1.0\n";
		$headers = "Content-type: text/html; charset=utf-8";
		if( mail($to, $subject, $message, $headers) ) {
			echo "success";
		} else {
			echo "Ошибка отправки";
		}
	}

?>