/*
	Корзина
*/

const ClassName = {
		CART_WRAPPER: "cartWrapper",
		CART: "cartContainer",
		CART_TITLE: "cartTitle",
		CART_TARIF_NAME: "cartTarifName",
		CART_TARIF_SPEED: "cartTarifSpeed",
		CART_TARIF_PRICE: "cartTarifPrice",
		CART_EQUIPMENT_INTERNET: "cartEquipmentInternet",
		CART_ADDITIONAL_SERVICES: "cartAdditionalServices",
		CART_ADDITIONAL_SERVICES_EQUIPMENT: "cartAdditionalServicesEquipment",
		CART_SERVICES_PLUS: "cartServicesPlus",

		MINI_CART_RIGHT: "miniCartRightContainer",
		MINI_CART_LEFT: "miniCartLeftContainer",
		MINI_CART_MIDDLE: "miniCartMiddleContainer",
		MINI_CART_PRICE: "miniCartPrice",
		MINI_CART_SUBMIT: "miniCartSubmit",
		MINI_CART_CANSEL: "miniCartCansel",

		MINI_CART_ICONS_CONTAINER: "miniCartIconsContainer",

		MINI_CART_EQ_ICO: "icon-router",
		MINI_CART_TV_ICO: "icon-tv-monitor",
		MINI_CART_SERV_ICO: "icon-maintenance"
	}

function _(name) { return document.querySelector(name); }


function putObjectInCart(key, orderItem) {
	/*
	 * Помещает тариф и выбранные услуги в корзину
	 * и сохраняет их в localstorage. 
	 *
	 * Атрибут orderItem - помещаемая в корзину услуга.
	 * Передаем объект order соответсвующий услуге, например:
	 * order.plan_name или order.items с соотвествующим ключом "Название тарифа" и т.д.
	*/

	localStorage.setItem(key, orderItem);

} //function putInCart

function miniCartCreate() {
	/*
	 * Создает основу миникорзины:
	 * поднимает плашку, генерирует кнопки
	*/

	let cartContainer = _("." + ClassName.CART);

	cartAccordionOpen.call(cartContainer, 50, 0);

	cartContainer.innerHTML = "<div class='miniCartLeftContainer'></div><div class='miniCartMiddleContainer'></div>\
														 <div class='miniCartRightContainer'>\
														 <div class='miniCartIconsContainer'></div>\
														 <div class='miniCartSubmit'>оформить</div>\
														 <div class='miniCartSubmitMobile'><i class='icon-chevron-arrow-up'></i></div>\
														 <div class='miniCartCansel'>отмена</div>\
														 <div class='miniCartCanselMobile'><i class='icon-delete'></i></div>\
														 </div>";

}


function putInMiniCart() {
	/*
	 * Отображает корзину с минимальным
	 * количеством информации: название тарифа, цена.
	 * Также пишет базовые данные о тарифе в localStorage
	*/

	let cartContainerLeft = _("." + ClassName.MINI_CART_LEFT);
	let cartContainerMiddle = _("." + ClassName.MINI_CART_MIDDLE);

	let tarifName = localStorage.getItem("Название тарифа");
	let tarifPrice = localStorage.getItem("Стоимость");

 	cartAccordionOpen.call(cartContainer, 50, 0);


	let tarifInfo = "<p class='miniCartTarifName'>Название тарифа</p><h4>" 
								+ tarifName + "</h4></div>";

	let priceInfo = "<div class='miniCartPrice'><p>" 
	 							+ tarifPrice + "</p></div><span class='t-priceMesure'><span class='t-priceMesureTop'>Руб.</span><br>\
	 							<span class='t-priceMesureDown'>Мес.</span></span>";

	cartContainerLeft.innerHTML = tarifInfo;
	cartContainerMiddle.innerHTML = priceInfo;
	


}


function showInternetEquipmentInMiniCart() {
 /*
  * Отображает иконку оборудования для интернет
  * в миникорзину.
 */
 		const node = _("." + ClassName.MINI_CART_ICONS_CONTAINER);
		
		let ico = document.createElement("i");
		ico.classList.add("icon-router");		
		ico.setAttribute("title", "Добавленно оборудование");

		node.appendChild(ico);

}//function putInternetEquipmentInMiniCart

function removeInternetEquipmentInMiniCart() {
	/*
	 * Удаляет элемент DOM с иконкой оборудования из миникорзины
	*/

	let target = _("." + ClassName.MINI_CART_EQ_ICO);
	const node = _("." + ClassName.MINI_CART_ICONS_CONTAINER);
	node.removeChild(target);

}//function removeInternetEquipmentInMiniCart

function showTvInMiniCart() {
 /*
  * Отображает иконку ТВ
  * в миникорзине.
 */

		const node = _("." + ClassName.MINI_CART_ICONS_CONTAINER);

		let ico = document.createElement("i");
		ico.classList.add("icon-tv-monitor");
		ico.setAttribute("title", "Добавлен ТВ тариф");
		
		node.appendChild(ico);

}//function putInternetEquipmentInMiniCart

function removeTvInMiniCart() {
	/*
	 * Удаляет элемент DOM с иконкой оборудования из миникорзины
	*/

	let target = _("." + ClassName.MINI_CART_TV_ICO);
	const node = _("." + ClassName.MINI_CART_ICONS_CONTAINER);
	node.removeChild(target);

}//function removeInternetEquipmentInMiniCart

function showServiceInMiniCart() {
 /*
  * Отображает иконку дополнительных услуг
  * в миникорзине.
 */

		const node = _("." + ClassName.MINI_CART_ICONS_CONTAINER);

		let ico = document.createElement("i");
		ico.classList.add("icon-maintenance");
		ico.setAttribute("title", "Добавленны дополнительные сервисы");
		
		node.appendChild(ico);

}//function putInternetEquipmentInMiniCart

function removeServiceInMiniCart() {
	/*
	 * Удаляет элемент DOM с иконкой оборудования из миникорзины
	*/

	let target = _("." + ClassName.MINI_CART_SERV_ICO);
	const node = _("." + ClassName.MINI_CART_ICONS_CONTAINER);
	node.removeChild(target);

}//function removeInternetEquipmentInMiniCart

function clearCart() {
	/*
	 * Полностью очистит корзину
	*/

	localStorage.clear();

	let cartContainer = _("." + ClassName.CART);
	cartContainer.innerHTML = "";

	cartAccordionClose.call(cartContainer);

}//function clearCart




//Работа корзины на всех страницах сайта
if (localStorage.getItem("order") != null) {
	//Если localStorage не пустой
	miniCartCreate();
	// putInMiniCart();

}


function cartAccordionOpen(panelHeight, padding) {
	/*
	 * Плавно открывает корзину
	*/

	let _this = this;

	_this.style.height = panelHeight + "px";
	_this.style.paddingTop = padding + "px";

}

function cartAccordionClose(container) {
	/*
	 * Плавно закрывает корзину
	*/

	let _this = this;

	_this.style.height = null;
	_this.style.paddingTop = null;

}


function miniCartBlink() {
	/*
	 * Эффект мерцания корзины при добавление товара/услуги
	*/

	let cartWrapper = _("." + ClassName.CART_WRAPPER);


}

function objToJSON(order) {
	/*
	 * Преобразует текущее состояние объекта в JSON формат
	*/

	let _this = this;

	_this.convertedObj = JSON.stringify(order);
	localStorage.setItem("order", convertedObj);

}

function objReset(order) {
	//Сбрасывает значения в объекте после отмены заказа
	
		order.type = "internet";
		// order.number = objNumber;
		order.name = undefined;
		order.period = undefined;
		order.speed = undefined;
		order.price = undefined;
		order.prestatus = false; 
		order.status = false;
		order.items = [];
		order.items_price = [];
		order.services = [];
		order.services_price = [];
		order.services_plus = [];
		order.services_plus_price = [];
}

function cartPageInfo() {
	/*
	 * Пишет текст под заголовком страницы корзины.
	 * Если корзина пуста один текст, если есть заказ, то другой.
	*/	

	let container = _("#js_cartPageInfo");

	if (localStorage.getItem("order") == null) {
		container.innerHTML = "На данный момент ваша корзина пуста.";		
	} else {
		container.innerHTML = "Перед оформлением заявки, проверьте свой заказ и введите корректные контактные данные."
	};

}

if (window.location == "http://localhost:3000/cart/") {
	cartPageInfo();	
}

function cartPageOrderGenerator() {
	/*
	 * Отображает на странице корзины информацию о заказе 
	*/

	const ClassName = {

		PAGE_CONTAINER: "cartPageOrderContainer",
		ORDER_INFO: "cartPageOrderInfo",

		TARIF_CONTAINER: "tarifContainer",
		LOCATION: "cartPageOrder-location-text",
		TARIF_NAME: "cartPageOrder-tarifname-text",
		TARIF_SPEED: "cartPageOrder-tarifspeed-text",
		TARIF_PRICE: "cartPageOrder-tarifprice-text",

		EQUIPMENT: "cartPageOrder-eq",
		EQUIPMENT_BLOCK: "cart-eq-block",//id
		EQUIPMENT_TITLE: "cartPageOrder-eqtitle",
		EQUIPMENT_NAME: "cartPageOrder-eqptext",
		EQUIPMENT_PRICE: "cartPageOrder-eqprice",

		SERVICES: "cartPageOrder-services",
		SERVICES_BLOCK: "cart-services-block",//id

		SERVICES_PLUS: "cartPageOrder-servicesplus",
		SERVICES_PLUS_BLOCK: "cart-services_plus-block",//id
		SERVICES_PLUS_NAME: "cartPageOrder-servicesplustext",
		SERVICES_PLUS_PRICE: "cartPageOrder-servicesplusprice",

		CART_TOTAL: "cart-total",//id

		CART_FORM_LOCATION: "tarif-location",
		CART_FORM_TARIF_NAME: "tarif-name",
		CART_FORM_TARIF_SPEED: "tarif-speed",
		CART_FORM_TARIF_PRICE:"tarif-price",
		CART_FORM_EQ: "order-eq",
		CART_FORM_SERVICES: "order-services",
		CART_FORM_SERVICES_PLUS: "order-services-plus",

		ORDER_TOTAL: "order-total"//id

	};

	let total = 0; //Итого руб. в корзине

	order = JSON.parse(localStorage.getItem("order"));

	//Скрываем контейнер если в корзине пусто
	if (order == null) {
		_("." + ClassName.PAGE_CONTAINER).style.display = "none";
	};
	//Скрываем контейнер с информацией о тарифе если в корзине нет подключения к интернет
	if (order.location == null) {
		_("." + ClassName.ORDER_INFO).style.display = "none";
	};

	//Выводим на экран данные о выбранном тарифе

	let location = _("." + ClassName.LOCATION);
	let name = _("." + ClassName.TARIF_NAME);
	let speed = _("." + ClassName.TARIF_SPEED);
	let price = _("." + ClassName.TARIF_PRICE);

	if (order.location != "") {
		location.innerHTML = order.location;
	};
	if (order.plan_name != "") {
		name.innerHTML = order.plan_name;
	};
	if (order.plan_speed != "") {
		speed.firstChild.innerHTML = order.plan_speed;
	};
	if (order.plan_price != "") {
		price.firstChild.innerHTML = order.plan_price;
	};	

	//Передаем базовые данные о тарифе в форму
	_("#" + ClassName.CART_FORM_LOCATION).value = order.location;
	_("#" + ClassName.CART_FORM_TARIF_NAME).value = order.plan_name;
	_("#" + ClassName.CART_FORM_TARIF_SPEED).value = order.plan_speed;
	_("#" + ClassName.CART_FORM_TARIF_PRICE).value = order.plan_price;

	//Выводим на экран данные об оборудовании

	let equipment_container = _("." + ClassName.EQUIPMENT);
	let equipment_block = _("#" + ClassName.EQUIPMENT_BLOCK);

	//Скрываем контейнер с информацией об оборудовании если в корзине нет оборудования
	if (order.items == "") {
		equipment_container.style.display = "none";
	} else {
		//Выводим данные о названии и цене
		for ( let i = 0; i < order.items.length; i++ ) {
			equipment_block.innerHTML += "<div>\
																		<p class='cartPageOrder-eqptext'>" + order.items[i] + "</p>\
																		<p class='cartPageOrder-eqprice'><span>&nbsp;- " + order.items_price[i] + "</span><span> руб.</span></p>\
																		<div class='delete'><span>удалить</span></div></div>";
			total += Number(order.items_price[i]);//Суммируем стоимость и кладем в total

			_("#" + ClassName.CART_FORM_EQ).value += order.items[i] + " - " + order.items_price[i] + " руб." + "<br>";

		};
	};

	//Выводим на экран данные ТВ (дополнительные услуги)

	let services_container = _("." + ClassName.SERVICES);
	let services_block = _("#" + ClassName.SERVICES_BLOCK);

	//Скрываем контейнер с информацией о дополнительных услугах если в корзине нет доп.услуг
	if (order.services == "") {
		services_container.style.display = "none";
	} else {
		//Выводим данные о названии и цене
		for ( let i = 0; i < order.services.length; i++ ) {
			services_block.innerHTML += "<div>\
																	 <p class='cartPageOrder-servicestext'>" + order.services[i] + "</p>\
																	 <p class='cartPageOrder-servicesprice'><span>&nbsp;- " + order.services_price[i] + "</span><span> руб.</span></p>\
																	 <div class='delete'><span>удалить</span></div></div>";
			total += Number(order.services_price[i]);//Суммируем стоимость и кладем в total

			_("#" + ClassName.CART_FORM_SERVICES).value += order.services[i] + " - " + order.services_price[i] + " руб." + "<br>";

		};
	};

	//Выводим на экран данные дополнительные сервисы

	let services_plus_container = _("." + ClassName.SERVICES_PLUS);
	let services_plus_block = _("#" + ClassName.SERVICES_PLUS_BLOCK);

	//Скрываем контейнер с информацией о дополнительных сервисах если в корзине нет доп.сервисов
	if (order.services_plus == "") {
		services_plus_container.style.display = "none";
	} else {
		//Выводим данные о названии и цене
		for ( let i = 0; i < order.services_plus.length; i++ ) {
			services_plus_block.innerHTML += "<div>\
																	 <p class='cartPageOrder-servicesplustext'>" + order.services_plus[i] + "</p>\
																	 <p class='cartPageOrder-servicesplusprice'><span>&nbsp;- " + order.services_plus_price[i] + "</span><span> руб.</span></p>\
																	 <div class='delete'><span>удалить</span></div></div>";
			total += Number(order.services_plus_price[i]);//Суммируем стоимость и кладем в total

			_("#" + ClassName.CART_FORM_SERVICES_PLUS).value += order.services_plus[i] + " - " + order.services_plus_price[i] + " руб." + "<br>";

		};
	};

	if (order.plan_price != null) {
		total += Number(order.plan_price);		
	};



	_("#" + ClassName.CART_TOTAL).innerHTML = total; //Выводим общую стоимость заказа
	_("#" + ClassName.ORDER_TOTAL).value = total;

} //function cartPageOrderGenerator

if (window.location == "http://localhost:3000/cart/") {
	cartPageOrderGenerator();
};

//Проверка объекта localStorage на пустоту. Если все значения ключей пустые, то удалять объект и закрывать миникорзину.

function isEmptylocalStorageOrderObj() {

	if ( localStorage.getItem("Название тарифа") == null && localStorage.getItem("Оборудование") == null && localStorage.getItem("Тариф ТВ") == null && localStorage.getItem("Дополнительные сервисы") == null) {
		clearCart();
	};

}//function localStorageObjectCheck

if (window.location == "http://localhost:3000/success/") {
	clearCart();
};