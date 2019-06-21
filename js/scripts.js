//Realweb Javascript
window.onload = function() {



//Объект заказ
function Order(number) {
	this.type = undefined;
	// this.number = null;
	this.location = undefined;
	this.plan_name = undefined;
	this.plan_advantages = undefined;
	this.plan_speed = undefined;
	this.period = undefined;
	this.plan_price = undefined;
	this.discountPrice = undefined;
	this.items = [];//оборудование для интернет
	this.items_price = [];
	this.services = [];//Дополнительные услуги
	this.services_price = [];
	this.services_items = [];//Обрудование к дополнительным услугам
	this.services_items_price = [];
	this.services_plus = [];//Дополнитлеьные сервисы
	this.services_plus_price = [];
	this.prestatus = undefined;
	this.status = undefined
};

//объект в JSON для корзины
let convertedObj = "привет";
/*
 * Устанавливаем статус корзины для того, чтобы знать когда она сгенерированна а когда нет.
 * Статус меняется при генерации корзины.
 * Это необходимо, если пользователь обращается к корине не через конструктор, а например просто кладет оборудование
 * без работы в конструкторе.
 * false - корзина не сгенерированна.
*/
let cartStatus = false;

let order = new Order();

let localStorageChecker = (function() {

if (localStorage.getItem("order") != "" && localStorage.getItem("order") != null) {
	/*
	 * В данном случае проверяем есть ли в localStorage ключ order и если есть, то создаем новый объект на его основе.
	 * Это необходимо для того, чтобы корректно добавлять товары и услуги на разных страницах в течение одной сессии. 
	*/
	order = JSON.parse(localStorage.getItem("order"));

	// //Получаем контейнер отдельного оборудования
	
	if (window.location == `${homeUrl}/tv/`) {

		//ТАРИФЫ ТВ
		button = document.querySelectorAll(".ISwitch");
		plate = document.querySelectorAll(".iswitcherPlate");
		itemName = document.querySelectorAll(".tv-itemName");		
			
		for (let i = 0; i < button.length; i++) {
			for (let j = 0; j < button.length; j++) {
				if (itemName[i].innerHTML == order.services[j]) {
					iSwitcherLightOn(button[i], plate[i], "activeSwitcherPlateOrange");
				};
			};
		};

	};

	if (window.location == `${homeUrl}/equipment/`) {

		//ОБОРУДОВАНИЕ
		let button = document.querySelectorAll(".ISwitch");
		let plate = document.querySelectorAll(".iswitcherPlate");
		let itemName = document.querySelectorAll(".eq-ItemTitle");		

		for (let i = 0; i < button.length; i++) {
			for (let j = 0; j < button.length; j++) {
				//Сравниваем значения (название в теге и в объекте). Если есть совпадение то кнопку включаем.
				if (itemName[i].innerHTML == order.items[j]) {
					iSwitcherLightOn(button[i], plate[i], "activeSwitcherPlateOrange");
				};
			};
		};

	};

	if (window.location == `${homeUrl}/services/`) {

		//ДОПОЛНИТЕЛЬНЫЕ СЕРВИСЫ	
		button = document.querySelectorAll(".ISwitch");
		plate = document.querySelectorAll(".iswitcherPlate");
		itemName = document.querySelectorAll(".servicesPlusText");

		for (let i = 0; i < button.length; i++) {
			for (let j = 0; j < button.length; j++) {
				if (itemName[i].innerHTML.trim() == order.services_plus[j]) {
					iSwitcherLightOn(button[i], plate[i], "activeSwitcherPlateOrange");
					
					//Подсветка блока с сервисом
					let target = button[i];
					//Всплытие до корневого узла
					while (!target.classList.contains("t-servicesPlusContainerContent")) {
						//Определяем корневой элемент отдельного блока сервиса - он перед корневым узлом
						if (target.classList.contains("servicesPlus-container")) {
							break;											
						}; 
						target = target.parentNode;
					}; 
							
					target.classList.toggle("servicesPlusSelected");// Подкраска плашки

				};
			};
		};

	};

};

}());

if (window.location == `${homeUrl}/internet/` || `${homeUrl}/tv/` || `${homeUrl}/services/` || `${homeUrl}/equipment/`) {

let t_cnode = document.querySelectorAll(".t-container");//Формируем список из нужных элементов. Это необходимо, если конструкторов будет несколько на странице


//КОНСТРУКТОР ТАРИФА

// let tarifBlock = ( function() {

orderGenerator(t_cnode.length);

function orderGenerator(length) {
	//Генератор всего функционала блока с тарифом

	//С помощью цикла работаем отдельно с каждым узлом - блоком с тарифом, то есть собираем в отдельные списки 
	//все необходимые элементы внутри данного узла
	for ( let i = 0; i < length; i++ ) {

	//Получаем основные сведения
	order.type = "internet";
	// order.number = i;
	order.location = "Многоэтажный дом";

	let objNumber = order.number;

	//Разные блоки с базовой инфрмацией от тарифе: для многоэтажек и для частных домов
	let t_cnode_multifloor = t_cnode[i].querySelector("#multifloor");
	let t_cnode_privateHouse = t_cnode[i].querySelector("#privateHouse");

	tarifTypeSelector(t_cnode_multifloor);

	/*
	 * Переключение кнопок на странице интернет "многоэтажные дома - частный сектор".
	 * Впроцессе переключения, нужный блок "показываем", а ненужный "прячем" классом hidden
	 * Так же, каждый раз при клике на кнопку запускаем функцию tarifTypeSelector
	 * с нужным парметром
	*/

	let locationSpecific = (function() {

		const ClassName = {
			BUTTON: "t-SwitcherButton",
			BUTTON_ON: "t-SwitcherButtonOn"
		}

		//Получим кнопку
		let button = document.querySelectorAll("." + ClassName.BUTTON);
		//Переключение кнопки
		for ( let i = 0; i < button.length; i++ ) {

		buttonOnOff();

		function buttonOnOff() {
			//Вешаем на обе кнопки функцию по клику
				button[i].addEventListener("click", function(event) {

					//Убираем активный класс у всех кнопок
					for ( let i = 0; i < button.length; i++ ) {
						button[i].classList.remove(ClassName.BUTTON_ON);
					}; //for

					//Присвоим активный класс кнопке на которой клинули
					this.classList.toggle(ClassName.BUTTON_ON);

					if ( i == 0 ) {
						t_cnode_privateHouse.classList.add("hidden");
						t_cnode_multifloor.classList.remove("hidden");
						tarifTypeSelector(t_cnode_multifloor);
						order.location = "Многоэтажный дом";
					}; 

					if ( i == 1 ) {				
						t_cnode_multifloor.classList.add("hidden");
						t_cnode_privateHouse.classList.remove("hidden");
						tarifTypeSelector(t_cnode_privateHouse);
						order.location = "Частный дом";
					};
					

				}); //addEventListener

			}

		};//for

	}()); //locationSpecific



	function tarifTypeSelector(location) {
	/*
	 * Для реализации переключения между типами тарифов: многоэтажки и частный сектор
	 * весь функционал блока с тарифом помещаем в отдельную функцию,
	 * которая взаимодействует с узлами и элементами DOM в зависимости от того,
	 * какой параметр location в качестве отправной точки в нее передали.
	 * Эти парметры определены выше как: t_cnode_multifloor и t_cnode_privateHouse 
	*/

	//Название тарифного плана
	let planName = location.querySelectorAll(".t-planName"); 
	//Выставим первое название в списке видимым по умолчанию
	planName[0].style.display = "";
	planName[0].style.display = 1;
	//Запишем в объект заказа
	order.plan_name = planName[0].innerHTML;

	//Преимущества
	let planAdvantages = location.querySelectorAll(".t-advantages"); 
	//Отобразим первый элемент как видимый
	planAdvantages[0].style.display = "";	
	planAdvantages[0].style.opacity = 1;	
	//Запишем в объект заказа
	order.plan_advantages = planAdvantages[0].innerHTML;

	//Скорость
	let planSpeed = location.querySelectorAll(".t-speedValueNum");
	//Отобразим первый элемент как видимый
	planSpeed[0].style.display = "";
	planSpeed[0].style.opacity = 1;
	//Запишем в объект заказа
	order.plan_speed = planSpeed[0].innerHTML;

	//Стоимость
	let planPrice = location.querySelectorAll(".t-priceNumber");
	//Отобразим первый элемент как видимый
	planPrice[0].style.display = "";
	planPrice[0].style.opacity = 1;
	//Запишем в объект
	order.plan_price = Number(planPrice[0].innerHTML);


	order.status = false;//Устанавливаем флаг "заказ не выбран" 
	order.prestatus = false;//Устанавливаем флаг состояние предзаказа (пока под вопросом)

	//ФУНКЦИОНАЛ БЛОКА С ТАРИФОМ

	//ПЕРЕКЛЮЧАТЕЛЬ РАДИОКНОПОК
	
	let period = location.querySelector(".t-period"); //Контейнер с радио для делегирования события
	let periodArr = location.querySelectorAll(".t-periodCheckmark"); //Все элементы, которые нужно будет подсвечивать - делать активными
	let periodValues = location.querySelectorAll("input"); //Все радиокнопки. Нужны для получения значения value
	let periodSpeed = location.querySelectorAll(".t-periodRadioMonth"); //Все элементы содержащие информацию о периоде

	let speedNum = location.querySelector(".t-speedValueNum");//Контейнер со скоростью

	let moreText = location.querySelectorAll(".t-moreContainerText");//Контейнер с подробной информацией
	//Отобразим первый элемент: видимый
	moreText[0].style.display = "";
	moreText[0].style.opacity = 1;

	let moreTextIcons = location.querySelectorAll(".t-moreContainerIcons"); //Контейнер с иконками к каждому тексту с подробной информацией
	//Отобразим первый элемент: видимый
	moreTextIcons[0].style.display = "";
	moreTextIcons[0].style.opacity = 1;


	let radioInput = location.querySelector(".t-periodInput");
	radioInput.checked = true;
	radioInput.previousElementSibling.classList.add("t-radioChecked");


	//Общие переменные для аккордиона и переключателя радио кнопок
	let moreButton = location.querySelector(".t-moreContainerHeader"); //Получаем кнопку развертывания и схлопывания аккордиона
	let moreContainer = location.querySelector(".t-moreContainerContent"); //Получаем контейнер с информацией для аккордиона
	let moreContainerPad = 30; //Паддинг внутреннего контейнера с текстом
	let panelHeight = moreButton.nextElementSibling.scrollHeight;//Высота скрытой панели
	
	period.onclick = function(event) {
		//Метод реализует переключение кастомных радиокнопок		
		
		//Определяем елемент на котором сделан клик	
		let target = event.target;

		//Если клик на нужном элементе,
		//а нам нужен input для получения значения его value
		if (target.tagName === "INPUT") {
			//Убираем у всех элементов активный класс  
			for ( let i = 0; i < periodArr.length; i++ ) {
				periodArr[i].classList.remove("t-radioChecked");
				periodSpeed[i].classList.remove("t-periodRadioMonthActive");
			}

			//Добавляем активный класс элементу, котрый расположен в DOM узле над целевым input.
			target.previousElementSibling.classList.toggle("t-radioChecked");
			target.parentNode.previousElementSibling.classList.toggle("t-periodRadioMonthActive");
			
			order.plan_speed = target.getAttribute("data-speed"); //Запишем в объект новое значение скорости

			let priceValue = Number(target.getAttribute("data-price"));//Получаем стоимость из атрибута тега
			let speedValue  = Number(target.getAttribute("data-speed"));//Получаем скорость из атрибута тега
			let planNameValue  = target.getAttribute("data-plan-name");//Получаем название плана

			order.plan_price = priceValue;
			order.plan_speed = speedValue;
			order.plan_name = planNameValue; 

			//Ищем циклом элемент DOM, текст в котором сопадает с названием плана в атрибуте
			function matchSearch(name, value) {
				//name - название элемента, например planName (название тарифа)
				//value - значение value элемента на котором кликнул пользователь, например planNameValue

				for ( let i = 0; i < name.length; i++ ) {
					if ( name[i] == value) {
						//Если совпадение есть, то прерываем цикл
						return name[i];
						break;
					};
				};

			} //function matchSearch 

			matchSearch(planName, planNameValue);
			matchSearch(planSpeed, speedValue);
			matchSearch(planPrice, priceValue);
			
			//Плавное изменение: названия тарифа, скорости, цены
			smoothNSPChange(planName[i], planNameValue, planSpeed[i], speedValue, planPrice[i], priceValue, 300);

			//Изменяем текст преимуществ и описания тарифа соответственно выбранному тарифу
			//Присвоим всем элементам display none
			for ( let i = 0; i < planAdvantages.length; i++ ) {				
			

				if ( planAdvantages[i].getAttribute("data-plan-name") == planNameValue && moreText[i].getAttribute("data-plan-name") == planNameValue ) {
						//Если название тарифа и название тарифа в аттрибуте элементов совпадают то отобразить
						planAdvantages[i].style.display = "";
						moreText[i].style.display = "";
						
						//Отображение иконок к тексту
						moreTextIcons[i].style.display = "";

						//Новая высота для изменения высоты раскрывшегося аккордиона						
						let newPanelHeight = moreText[i].scrollHeight + moreTextIcons[i].scrollHeight + moreContainerPad; 
						panelHeight = newPanelHeight; //Обновляем высоту глобальной переменной
						
						//Изменение высоты срабатывает только, если аккордион открыт, иначе будет открываться при клике на радиобатон, что неправильно 
						if ( moreButton.classList.contains("t-moreActive")) {
							accordionOpen.call(moreContainer, panelHeight, moreContainerPad); //Меняем высоту функцией аккордиона							
						};

						setTimeout( function() { //Задержка для заметной работы transition: opacity
							planAdvantages[i].style.opacity = 1;
							moreText[i].style.opacity = 1;
							moreTextIcons[i].style.opacity = 1;
						}, 300);						


				} else {

					setTimeout( function() {
						planAdvantages[i].style.opacity = 0;
						moreText[i].style.opacity = 0;

						moreTextIcons[i].style.opacity = 0;
					}, 300);

						planAdvantages[i].style.display = "none";
						moreText[i].style.display = "none";
						//Скрытие иконок к тексту
						moreTextIcons[i].style.display = "none";
				
				} // if 
				 
			} // for 


		}// if (target.tagName === "INPUT")

		//Пишем в корзину
		if (order.prestatus == true) {
			/*
			 * Изменения значений скорости, цены и названия тарифа,
			 * которые происходят при переключении радиокнопок, 
			 * пишем в корзину только в том случае, если до этого 
			 * была нажата кнопка "выбрать тариф". То есть, в том случае,
			 * когда пользователь решил изменить тариф после выбора одного из тарифов. 
			 * Нажатие кнопки фиксируется записью в объект order.prestatus
			*/

			putObjectInCart("Тип строения", order.location);
			putObjectInCart("Название тарифа", order.plan_name);
			putObjectInCart("Скорость", order.plan_speed);
			putObjectInCart("Стоимость", order.plan_price);	

			// miniCartCreate();
			putInMiniCart();	

		};

	} //period.onclick = function
	//Тут заканчивается переключатель радиокнопок в блоке тарифов

	//АККОРДИОН В БЛОКЕ ТАРИФА

	moreButton.onclick = function(event) {
		//Открытие и закрытие аккордиона при нажатии на кнопку активации аккордиона
		
		//panelHeight = moreButton.nextElementSibling.scrollHeight;//Высота скрытой панели
		panelHeight = location.querySelector(".t-moreContainerContent").scrollHeight;

		this.classList.toggle("t-moreActive");
		
		//Если стиль активной кнопки присвоен, то открываем блок
		if (this.classList.contains("t-moreActive")) {
			
			accordionOpen.call(moreContainer, panelHeight, moreContainerPad);
			
		} else { //Если стиля активной кнопки нет, то закрываем блок

			accordionClose.call(moreContainer, moreContainer);
			// order.status = false;	
		}

	}//moreButton.onclick = function
	//Тут заканчивается аккордион в блоке тарифа


	//ВЫБРАТЬ ТАРИФ

	//Получаем кнопку "выбрать тариф"
	let orderButton = location.querySelector(".t-selectButton");

	//Получаем блок с кнопкой оформления заказа
	let orderSubmitButton = t_cnode[i].querySelector(".t-submitContainer");
	let submitButtonPanel = t_cnode[i].querySelector(".t-submitButton");
	let submitButtonPanelHeigth = submitButtonPanel.scrollHeight;

	//Получаем блок с дополнительным оборудованием для отображения в аккордионе
	let addProducts = t_cnode[i].querySelector(".t-productsContainer");
	const addProductsPanelHeight = addProducts.scrollHeight;//Высота скрытого блока

	//Получаем блок с дополнительными услугами для отображения в аккордионе
	let addServices = t_cnode[i].querySelector(".t-servicesContainer");
	let addServicesPanelHeight = addServices.scrollHeight;//Высота скрытого блока
	
	//Получаем блок с дополнительными сервисами для отображения в аккордионе
	let addServicesPlus = t_cnode[i].querySelector(".t-servicesPlusContainer");
	let addServicesPlusPanelHeight = addServicesPlus.scrollHeight;//Высота скрытого блока

	
	chooseTarif();		


	function chooseTarif(saveData) {
		/*
		 * savedData может быть true и false. Если true то в корзину пишем базовые данные тарифа,
		 * если false то не пишем (это случай если человек возвращается на страницу конструктора 
		  * с другой страницы, после того как выбрал в нем тариф)
		*/
			orderButton.addEventListener("click", function() {

					//Анимация кнопки (отличается десктопная и мобильная версия по ширине)
					if (document.documentElement.clientWidth > 480) {
						tButtonShrink.call(orderButton, 100, "%", 26);				
					} else {
						tButtonShrink.call(orderButton, 100, "%", 0);
					};
					
					panelHeight += moreContainerPad;  

					//С задержкой запускаем раскрытие аккордиона
					setTimeout( function() {
						accordionOpen.call(moreContainer, panelHeight, moreContainerPad);
						moreButton.classList.add("t-moreActive");//Делаем кнопку активации активной
					}, 800);

					//Затем открываем блок с оборудованием
					setTimeout( function() {
						showEquipment(addProducts);
						// accordionOpen.call(addProducts, addProductsPanelHeight, 20);		
					}, 900);

					//Затем блок с дополнительными услугами
					setTimeout( function() {
						accordionOpen.call(addServicesPlus, addServicesPlusPanelHeight, 40);		
					}, 900);

					//Затем блок с дополнительными сервисами
					setTimeout( function() {
						accordionOpen.call(addServices, addServicesPanelHeight, 40);		
					}, 1000);
					
					//И отображаем кнопку оформления заказа и отмены
					setTimeout( function() {
						accordionOpen.call(orderSubmitButton, submitButtonPanelHeigth, 0);
					}, 1100);

					
					order.prestatus = true;
					
						//Пишем в корзину
						putObjectInCart("Тип строения", order.location);
						putObjectInCart("Название тарифа", order.plan_name);
						putObjectInCart("Скорость", order.plan_speed);
						putObjectInCart("Стоимость", order.plan_price);

						miniCartCreate();
						putInMiniCart();
						cartStatus = true;

						//Запишем текущее состояние объекта в формате JSON в localStorage для работы с ним на других страницах
						objToJSON(order);	


						/*
						 * ПРОВЕРКА КОРЗИНЫ И ВКЛЮЧЕНИЕ КНОПОК 
						 *
						 * Переводим кнопки в положение вкл если объекты есть в корзине
						*/

						//ОБОРУДОВАНИЕ
						let container = document.querySelector("#slider-1");
						let button = container.querySelectorAll(".ISwitch");
						let plate = container.querySelectorAll(".iswitcherPlate");
						let itemName = container.querySelectorAll(".eq-ItemTitle");		
						let counter = 0;//Для подсчета совпадений. Нужно для отображения иконок в мини корзине
						for (let i = 0; i < button.length; i++) {
							for (let j = 0; j < button.length; j++) {
								//Сравниваем значения (название в теге и в объекте). Если есть совпадение то кнопку включаем.
								if (itemName[i].innerHTML == order.items[j]) {
									iSwitcherLightOn(button[i], plate[i], "activeSwitcherPlateOrange");
									counter++;
									if (counter == 1) {										
										showInternetEquipmentInMiniCart();
									};
								};
							};
						};
						//ТАРИФЫ ТВ
						container = document.querySelector(".t-servicesContainerContent");
						button = container.querySelectorAll(".ISwitch");
						plate = container.querySelectorAll(".iswitcherPlate");
						itemName = container.querySelectorAll(".tv-itemName");		
						counter = 0;					
						for (let i = 0; i < button.length; i++) {
							for (let j = 0; j < button.length; j++) {
								if (itemName[i].innerHTML == order.services[j]) {
									iSwitcherLightOn(button[i], plate[i], "activeSwitcherPlateOrange");
									counter++;
									if (counter == 1) {
										showTvInMiniCart();
									};
								};
							};
						};
						//ДОПОЛНИТЕЛЬНЫЕ СЕРВИСЫ	
						container = document.querySelector(".t-servicesPlusContainerContent");
						button = container.querySelectorAll(".ISwitch");
						plate = container.querySelectorAll(".iswitcherPlate");
						itemName = container.querySelectorAll(".servicesPlusText");
						counter = 0;
						for (let i = 0; i < button.length; i++) {
							for (let j = 0; j < button.length; j++) {
								if (itemName[i].innerHTML.trim() == order.services_plus[j]) {
									iSwitcherLightOn(button[i], plate[i], "activeSwitcherPlateOrange");
									counter++;
									if (counter == 1) {
										showServiceInMiniCart();
									};
					
									//Подсветка блока с сервисом
									let target = button[i];
									//Всплытие до корневого узла
									while (!target.classList.contains("t-servicesPlusContainerContent")) {
										//Определяем корневой элемент отдельного блока сервиса - он перед корневым узлом
										if (target.classList.contains("servicesPlus-container")) {
											break;											
										}; 
										target = target.parentNode;
									}; 
											
									target.classList.toggle("servicesPlusSelected");// Подкраска плашки

								};
							};
						};	


		});//orderButton.addEventListener
	
	} //function orderButton


	//РАБОТА КНОПКИ ОФОРМЛЕНИЯ И ОТМЕНЫ ЗАКАЗА

	let submitButton = t_cnode[i].querySelector(".t-submitButton");//Получаем кнопку оформления
	let canselButton = t_cnode[i].querySelector(".t-canselButton");//Получаем кнопку отмены


	//Запускаем функцию отмены заказа при клике на кнопку отмены заказа
	canselButton.addEventListener("click", function() {
		orderCansel();
	});


	//Запускаем функцию оформления заказа при клике на кнопку оформления заказа
	submitButton.addEventListener("click", function() {
		location.href = "http://localhost:3000/cart/";
	});

	/*
	 * При переключении типа тарифа с многоэтажек
	 * на частные дома, также запускаем функцию отмены заказа
	*/
	let switcherButton = document.querySelectorAll(".t-SwitcherButton");

	for ( let i = 0; i < switcherButton.length; i++ ) {
		switcherButton[i].addEventListener("click", function() {
			orderCansel();
		});		
	};//for


	let cartContainer = document.querySelector(".cartContainer");
	//Запускаем функцию отмены заказа при клике на кнопку отмены в миникорзине
	cartContainer.addEventListener("click", function(event) {
		if (event.target.classList.contains("miniCartCansel") || event.target.classList.contains("miniCartCanselMobile") || 
			event.target.classList.contains("icon-delete")) {			
			orderCansel();
			clearCart();
		};

		if (event.target.classList.contains("miniCartSubmit") || event.target.classList.contains("miniCartSubmitMobile") || 
			event.target.classList.contains("icon-chevron-arrow-up")) {
			location.href = "http://localhost:3000/cart/";
		};


	});


	//Оформление закза
	function orderSubmit() {		
		
		
		// localStorage.setItem("order", JSON.stringify(order));

	}


	//Отмена заказа
	function orderCansel() {

		//ЗАКРЫВАЕМ БЛОК ДОПОЛНИТЕЛЬНЫЕ СЕРВИСЫ
		accordionClose.call(addServicesPlus, addServicesPlus) 
		//Выключаем все кнопки в блоке
		//Получим основной контейнер с сервисами
		let mainContainer = document.querySelector(".t-servicesPlusContainer");
		//Получим свитчеры сервисов через атрибут data-
		let switcherPlate = mainContainer.querySelectorAll('[data-item-type="servPlus-item-plate"]');
		let switcherButton = mainContainer.querySelectorAll('[data-item-type="servPlus-item-button"]');

		//Перебираем switcherPlate на предмет поиска активного класса, то есть, кнопка включена
		for ( let i = 0; i < switcherPlate.length; i++ ) {
			if (switcherPlate[i].classList.contains("activeSwitcherPlateOrange")) {
				
				iSwitcherLightOff(switcherButton[i], switcherPlate[i], "activeSwitcherPlateOrange");
				
				//Снятие подсветки блока с сервисом
				let target = switcherPlate[i];
				//Всплытие до корневого узла
				while (!target.classList.contains("t-servicesPlusContainerContent")) {
					//Определяем корневой элемент отдельного блока сервиса - он перед корневым узлом
					if (target.classList.contains("servicesPlus-container")) {
						break;											
					}; 
					target = target.parentNode;
				}; 
						
				target.classList.toggle("servicesPlusSelected");// Снимаем подсветку плашки

			};
		}; //for

		//ЗАКРЫВАЕМ БЛОК ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ
		accordionClose.call(addServices, addServices)
		//Выключаем все кнопки в блоке
		//Получим основной контейнер дополнитлеьных услуг
		mainContainer = document.querySelector(".t-servicesContainer");	
		//Получим свитчеры дополнительных услуг через атрибут data-
		switcherPlate = document.querySelectorAll('[data-item-type="serv-item-plate"]');
		switcherButton = document.querySelectorAll('[data-item-type="serv-item-button"]');

		//Перебираем switcherPlate на предмет поиска активного класса, то есть - кнопка включена
		for ( let i = 0; i < switcherPlate.length; i++ ) {
			if (switcherPlate[i].classList.contains("activeSwitcherPlateOrange")) {
				//Отключаем все кнопки с активным классом
				iSwitcherLightOff(switcherButton[i], switcherPlate[i], "activeSwitcherPlateOrange");
			};
		};

		//Сворачиваем слайдер дополнительных услуг
		let servicesEquipmentContainer = document.querySelector(".t-servicesEquipmentContainer");
		showServicesEquipment(switcherPlate, servicesEquipmentContainer, true);

		//Выключаем все кнопки в слайдере
		mainContainer = document.querySelector("#slider-2");
		switcherButton = mainContainer.querySelectorAll(".ISwitch");
		switcherPlate = mainContainer.querySelectorAll(".iswitcherPlate");
		//Перебираем switcherPlate на предмет поиска активного класса, то есть - кнопка включена
		for ( let i = 0; i < switcherPlate.length; i++ ) {
			if (switcherPlate[i].classList.contains("activeSwitcherPlateOrange")) {
				//Отключаем все кнопки с активным классом
				iSwitcherLightOff(switcherButton[i], switcherPlate[i], "activeSwitcherPlateOrange");
			};
		};

		//ЗАКРЫВАЕМ БЛОК ОБОРУДОВАНИЕ
		accordionClose.call(addProducts, addProducts);

		//Сворачиваем все каналы если открыты
		
		//Получаем основной контейнер
		let servicesContainer = document.querySelector(".t-servicesContainer");
		let channelsContainer = servicesContainer.querySelectorAll(".tv-itemChannelsListContainer");
	
		for ( let i = 0; i < channelsContainer.length; i++ ) {
		 	if (channelsContainer[i].classList.contains("activeChannelsButton")) {
		 		//Сворачиваем все аккордионы
				accordionClose.call(channelsContainer[i], channelsContainer[i]);
		 	}; 
		};


		//Выключаем все кнопки в слайдере
		mainContainer = document.querySelector("#slider-1");
		switcherButton = mainContainer.querySelectorAll(".ISwitch");
		console.log("кнопка", switcherButton);
		switcherPlate = mainContainer.querySelectorAll(".iswitcherPlate");
		//Перебираем switcherPlate на предмет поиска активного класса, то есть - кнопка включена
		for ( let i = 0; i < switcherPlate.length; i++ ) {
			if (switcherPlate[i].classList.contains("activeSwitcherPlateOrange")) {
				//Отключаем все кнопки с активным классом
				iSwitcherLightOff(switcherButton[i], switcherPlate[i], "activeSwitcherPlateOrange");
			};
		};

		//ЗАКРЫВАЕМ БЛОК С ОПИСАНИЕМ
		accordionClose.call(moreContainer, moreContainer);

		//ЗНАЧЕНИЯ: РАДИОБАТТОН, ИМЯ ТАРИФА, СКОРОСТЬ, ЦЕНА, ПРЕИМУЩЕСТВА И ОПИСАНИЕ ПОУМОЛЧАНИЮ

		//Радиобатон в исходное - первое значение
		for ( let i = 0; i < periodArr.length; i++ ) {		
			periodArr[i].classList.remove("t-radioChecked");
			periodSpeed[i].classList.remove("t-periodRadioMonthActive");			
		};
			periodArr[0].classList.add("t-radioChecked");
			periodSpeed[0].classList.add("t-periodRadioMonthActive");			

		//Имя тарифа, скорости и цены в исходное - первое значение
		//Получаем массив радиокнопок
		let radioList = location.querySelectorAll(".t-periodInput");
		//Берем из массиво значения первого элемента
		let planNameValue  = radioList[0].getAttribute("data-plan-name");//Получаем название плана
		let speedValue  = Number(radioList[0].getAttribute("data-speed"));//Получаем скорость из атрибута тега
		let priceValue = Number(radioList[0].getAttribute("data-price"));//Получаем стоимость из атрибута тега
		//Вставляем значения в функцию плавного изменения значений
		smoothNSPChange(planName[0], planNameValue, planSpeed[0], speedValue, planPrice[0], priceValue, 300);
		//Вставляем значения в функцию возварта к исходному значению преимуществ, описания и иконок
		smoothATIChange(planAdvantages, planNameValue, moreText, moreTextIcons);


		//ДЕЛАЕМ КНОПКУ АКТИВАЦИИ НЕАКТИВНОЙ
		moreButton.classList.remove("t-moreActive");


		submitCanselClose.call(orderButton, orderSubmitButton);//Сворачиваем блок с кнопками оформить заказ/отменить
		tButtonShrinkBack.call(orderButton, 100, "%", 26);//Возвращаем кнопку выбрать заказ к состоянию по умолчанию

		objReset(order);
		clearCart();
		
	} //function orderCansel()
	//Заканчивается функция отмены заказа

	} //function tarifTypeSelector

	} //Тут заканчивается главный цикл

} //Тут заканчивается orderGenerator


// }());


//ОБОРУДОВАНИЕ

let equipment = (function() {

	//Имена классов свитчера
	const ClassName = {
		SWITCH_BUTTON: "ISwitch",
		SWITCH_PLATE: "iswitcherPlate",
		SWITCHER_ACTIVE: "activeSwitcherPlateOrange"
	};

	if (window.location == `${homeUrl}/internet/`) {
		//Слайдер 1
		slider1("#slider-1");		
		addEquipmentInternet();
	};



function addEquipmentInternet() {

		//Добавляет обрудование в объект заказа - кнопка iSwitcher в слайдере
		let mainContainer;

		//Получаем контейнер отдельного оборудования
		if (window.location == `${homeUrl}/internet/`) {
			let container = document.querySelector("#slider-1");
			mainContainer = container.querySelectorAll(".eq-ItemContainer");
		} else {
			mainContainer = document.querySelectorAll(".eq-ItemContainer");
		};


		for ( let i = 0; i < mainContainer.length; i++ ) {			

			
			mainContainer[i].addEventListener("click", function() {

				//Получим стоиомость оборудования
				let eq_price = mainContainer[i].querySelector(".eq-itemPriceNum");
				

				if (event.target.classList.contains("ISwitch")) {

					//Переключатель кнопок стилизованных под IPhone
					//button - элемент кнопка (обычно берется через querySelectorAll)
					//plate - элемент основа кнопки (обычно берется через querySelectorAll в аттрибуте plate[i])
					//classActive - название активного класса для включенной кнопки
					//order - элемент объекта в который записывать значение, например order.items
					iSwitcher.call(event.target, event.target, event.target.parentNode,
					 "activeSwitcherPlateOrange", "data-item-name", order.items, eq_price, "data-item-price", order.items_price);
					
					//Узнаем, есть ли хоть одна запись в localStorage (нужно для showInternetEquipmentInMiniCart() чтобы не отрисовывать лишний раз)
					let savedData_0 = localStorage.getItem("Название тарифа");
					let savedData_1 = localStorage.getItem("Оборудование");
					let savedData_2 = localStorage.getItem("Тариф ТВ");
					let savedData_3 = localStorage.getItem("Дополнительные сервисы");

					putObjectInCart("Оборудование", order.items);
					putObjectInCart("Стоимость оборудования", order.items_price);

					//Запишем текущее состояние объекта в формате JSON в localStorage для работы с ним на других страницах
					objToJSON(order);

					
					//Проверим есть ли запись в localStorage, есл инет, то рисуем корзину и иконку.
					if (savedData_0 == null && savedData_1 == null && savedData_2 == null && savedData_3 == null) {
						miniCartCreate();						
					};
					//Проверим есть ли запись в localStorage, если инет, то рисуем иконку.
					if (savedData_1 == null) {							
						showInternetEquipmentInMiniCart();						
					};


					let checkData = localStorage.getItem("Оборудование");
					//Если в localStorage не содержит записей (все свитчеры в положении выкл.)
					//то полность удаляем ключи из localStorage и иконку
					if (checkData == "") {
						localStorage.removeItem("Оборудование");
						localStorage.removeItem("Стоимость оборудования");
						removeInternetEquipmentInMiniCart();
					};

					//Закрывает микрокарзину, если оттуда удалили последний объект
					isEmptylocalStorageOrderObj();
					
				};//If 

			});//addEventListener

		};//for

	};//function addEquipmentInternet

}());

//Блоки Internet TV

let tv = (function() {

	const ClassName = {
		TV_BLOCK: "tv-container",
		TV_CHANNELS_BUTTON: "tv-itemChannels",
		TV_CHANNELS_BLOCK: "tv-itemChannelsListContainer",
		TV_CHANNEL: "tv-channelBrick"
	}

	if (window.location == `${homeUrl}/internet/`) {
		slider2("#slider-2");
		addEquipmentServices();		
	}

	else  {
		addEquipmentServices();
	};


	function addEquipmentServices() {

		//Добавляет обрудование в объект заказа - кнопка iSwitcher в слайдере

		//Получаем контейнер отдельного оборудования
		if (window.location == `${homeUrl}/internet/`) {
			let container = document.querySelector("#slider-2");
			mainContainer = container.querySelectorAll(".eq-ItemContainer");
			
		} else {
			mainContainer = document.querySelectorAll(".eq-ItemContainer");
		};

		for ( let i = 0; i < mainContainer.length; i++ ) {

			mainContainer[i].addEventListener("click", function(event) {

				//Получим стоиомость оборудования
				let eq_price = mainContainer[i].querySelector(".eq-itemPriceNum");
	
				if (event.target.classList.contains("ISwitch")) {
	
					/*
					 * Переключатель кнопок стилизованных под IPhone
					 * button - элемент кнопка (обычно берется через querySelectorAll)
					 * plate - элемент основа кнопки (обычно берется через querySelectorAll в аттрибуте plate[i])
					 * classActive - название активного класса для включенной кнопки
					 * order - элемент объекта в который записывать значение, например order.items
					*/
					iSwitcher.call(event.target, event.target, event.target.parentNode,
					 "activeSwitcherPlateOrange", "data-item-name", order.items, eq_price, "data-item-price", order.items_price);

					//Узнаем, есть ли хоть одна запись в localStorage (нужно для showInternetEquipmentInMiniCart() чтобы не отрисовывать лишний раз)
					let savedData_0 = localStorage.getItem("Название тарифа");
					let savedData_1 = localStorage.getItem("Оборудование");
					let savedData_2 = localStorage.getItem("Тариф ТВ");
					let savedData_3 = localStorage.getItem("Дополнительные сервисы");

					putObjectInCart("Оборудование", order.items);
					putObjectInCart("Стоимость оборудования", order.items_price);

					//Запишем текущее состояние объекта в формате JSON в localStorage для работы с ним на других страницах
					objToJSON(order);


					//Проверим есть ли запись в localStorage, есл инет, то рисуем корзину и иконку.
					if (savedData_0 == null && savedData_1 == null && savedData_2 == null && savedData_3 == null) {
						miniCartCreate();
					};
					//Проверим есть ли запись в localStorage, если инет, то рисуем иконку.
					if (savedData_1 == null) {							
						showInternetEquipmentInMiniCart();						
					};


					let checkData = localStorage.getItem("Оборудование");
					//Если в localStorage не содержит записей (все свитчеры в положении выкл.)
					//то полность удаляем ключи из localStorage и иконку
					if (checkData == "") {
						localStorage.removeItem("Оборудование");
						localStorage.removeItem("Стоимость оборудования");
						removeInternetEquipmentInMiniCart();
					};

					//Закрывает микрокарзину, если оттуда удалили последний объект
					isEmptylocalStorageOrderObj();

				};//If 


			});//addEventListener		

		}; //for

	} //function addEquipmentService


	let tvContainer = document.querySelectorAll("." + ClassName.TV_BLOCK);

	//Совокупная высота только раскрытых блоков с каналами*
	let channelsSumHeight = 0;
		

	//Для работы отдельно с каждым блоком, перебираем блоки циклом
	for ( let i = 0; i < tvContainer.length; i++ ) {
		
		//Текстовая кнопка открытия и закрытия списка каналов 
		let channelsButton = tvContainer[i].querySelector("." + ClassName.TV_CHANNELS_BUTTON);
		//Скрытый блок со списком каналов
		let channelsContainer = tvContainer[i].querySelector("." + ClassName.TV_CHANNELS_BLOCK);
		
		//Преобразуем текст из скрытого блока в массив.
		let channelsList = channelsContainer.firstElementChild.innerHTML;

		//Если список есть
		if (channelsList != "") {


		channelsButton.innerHTML = "показать список каналов";	

		let chArr = channelsList.split(",");
		//После чего удалим текст из блока
		channelsContainer.firstElementChild.innerHTML = "";

				//Создадим HTML элементы <div><p>...</p></div>
				//и в каждый поместим по одному значению из массива.
				//Последовательно добавим элементы внутрь скрытого контейнера.
				for ( let j = 0; j < chArr.length; j++ ) {
					
					let div = document.createElement("div");
					let p = document.createElement("p");
					div.className = ClassName.TV_CHANNEL;
					div.innerHTML = "<p>" + chArr[j] + "</p>";
					channelsContainer.appendChild(div);

				};

				//Реалиация аккордиона с каналами
				let panelHeight = channelsContainer.scrollHeight;
				let padding = 15;


				//Необходимо для того, чтобы добавить дополнительную высоту к основному контейнеру 
				//при раскрытии блоков с каналами. Если этого не делать, высота останется фиксированной и каналы не будут видны 
				//Получаем основной контейнер
				let servicesContainer = tvContainer[i].parentNode.parentNode;
				
				//Высота основного контейнера
				let servicesContainerHeight = servicesContainer.scrollHeight;

				//Кликаем по кнопке "показать список каналов"
				channelsButton.addEventListener("click", function() {
					
					channelsContainer.classList.toggle("activeChannelsButton");
					
					if ( channelsContainer.classList.contains("activeChannelsButton") ) {//Если нажали показать - присвоен класс актив
													
						//Добавляем высоту открытого блока к общей высоте открытых блоков с каналами
						//тем самым решаем проблему исчезающих каналов
						channelsSumHeight += servicesContainerHeight + panelHeight + padding;

						accordionOpen.call(channelsContainer, panelHeight, padding);

						if (window.location == `${homeUrl}/internet/`) {
							accordionOpen.call(servicesContainer, channelsSumHeight, padding);//Проблема будет видна, если удалить эту строку	
						}

						channelsButton.innerHTML = "скрыть список каналов";

					} else {
						
						accordionClose.call(channelsContainer, channelsContainer);

						//Убираем высоту закрытого блока из общей высоты открытых блоков с каналами
						channelsSumHeight -= panelHeight; 

						channelsButton.innerHTML = "показать список каналов";

					};

				});// END аккордион	
			

			} else {
				channelsButton.style.display = "none";
			};//if (channelsList != "") {


};//for END Для работы отдельно с каждым блоком, перебираем блоки циклом




if ( window.location == `${homeUrl}/internet/` || window.location == `${homeUrl}/tv/` ) {

	let servicesAddButtons = (function() {
	//Получим основной контейнер дополнитлеьных услуг
	let mainContainer = document.querySelectorAll(".tv-container");

	//Получим свитчеры дополнительных услуг через атрибут data-
	let switcherPlate = document.querySelectorAll('[data-item-type="serv-item-plate"]');
	let switcherButton = document.querySelectorAll('[data-item-type="serv-item-button"]');


	//Данные для аккордиона с оборудованием для дополнительныех услуг
	let servicesEquipmentContainer = document.querySelector(".t-servicesEquipmentContainer");
	
	for ( let i = 0; i < mainContainer.length; i++ ) {

		mainContainer[i].addEventListener("click", function() {


				//Получим стоиомость оборудования
				let tv_price = mainContainer[i].querySelector(".tv-itemPriceNumber");
				
				if (event.target.classList.contains("ISwitch")) {
				
						//Переключатель кнопок стилизованных под IPhone
						//button - элемент кнопка (обычно берется через querySelectorAll)
						//plate - элемент основа кнопки (обычно берется через querySelectorAll в аттрибуте plate[i])
						//classActive - название активного класса для включенной кнопки
						//order - элемент объекта в который записывать значение, например order.items
						iSwitcher.call(event.target, event.target, event.target.parentNode, "activeSwitcherPlateOrange", 
							"data-item-name", order.services, tv_price, "data-price", order.services_price);

						//Узнаем, есть ли хоть одна запись в localStorage (нужно для showTvInMiniCart() чтобы не отрисовывать лишний раз)
						let savedData_0 = localStorage.getItem("Название тарифа");
						let savedData_1 = localStorage.getItem("Оборудование");
						let savedData_2 = localStorage.getItem("Тариф ТВ");
						let savedData_3 = localStorage.getItem("Дополнительные сервисы");

						putObjectInCart("Тариф ТВ", order.services);
						putObjectInCart("Стоимость тарифа ТВ", order.services_price);

						//Запишем текущее состояние объекта в формате JSON в localStorage для работы с ним на других страницах
						objToJSON(order);
						
						//Проверим есть ли запись в localStorage, если инет, то рисуем корзину.
						if (savedData_0 == null && savedData_1 == null && savedData_2 == null && savedData_3 == null) {
							miniCartCreate();
						};
						//Проверим есть ли запись в localStorage, если инет, то рисуем иконку.
						if (savedData_2 == null) {
							showTvInMiniCart();							
						};


						let checkData = localStorage.getItem("Тариф ТВ");
						//Если в localStorage не содержит записей (все свитчеры в положении выкл.)
						//то полность удаляем ключи из localStorage и иконку
						if (checkData == "") {
							localStorage.removeItem("Тариф ТВ");
							localStorage.removeItem("Стоимость тарифа ТВ");
							removeTvInMiniCart();
						};

						//Закрывает микрокарзину, если оттуда удалили последний объект
						isEmptylocalStorageOrderObj();

						//Открывает и закрывает аккордион со слайдером с оборудованием для дополнительных услуг
						
						if ( window.location == `${homeUrl}/internet/` ) {
								showServicesEquipment(switcherPlate, servicesEquipmentContainer);				
							}

					}//If

			});//addEventListener

	}//for

	}());//servicesAddButtons
	
	}

}()); //tv


//Блоки дополнительные сервисы servicesPlus


if ( window.location == `${homeUrl}/internet/` || window.location == `${homeUrl}/services/` ) {

	let servicesPlusAddButtons = (function() {

		//Получим основной контейнер с сервисами
		let mainContainer = document.querySelectorAll(".servicesPlus-container");

		//Для переключения цвета фона плашки с сервисом получим эту плашку

		for ( let i = 0; i < mainContainer.length; i++ ) {

			mainContainer[i].addEventListener("click", function() {
				
				//Получим стоиомость оборудования
				let eq_price = mainContainer[i].querySelector(".servicesPlus-itemPriceNumber");

				if (event.target.classList.contains("ISwitch")) {

					//Переключатель кнопок стилизованных под IPhone
					//button - элемент кнопка (обычно берется через querySelectorAll)
					//plate - элемент основа кнопки (обычно берется через querySelectorAll в аттрибуте plate[i])
					//classActive - название активного класса для включенной кнопки
					//order - элемент объекта в который записывать значение, например order.items
					iSwitcher.call(event.target, event.target, event.target.parentNode, "activeSwitcherPlateOrange", 
						"data-item-name", order.services_plus, eq_price, "data-price", order.services_plus_price);

					//Узнаем, есть ли хоть одна запись в localStorage (нужно для showServiceInMiniCart() чтобы не отрисовывать лишний раз)
					let savedData_0 = localStorage.getItem("Название тарифа");
					let savedData_1 = localStorage.getItem("Оборудование");
					let savedData_2 = localStorage.getItem("Тариф ТВ");
					let savedData_3 = localStorage.getItem("Дополнительные сервисы");

					putObjectInCart("Дополнительные сервисы", order.services_plus);
					putObjectInCart("Стоимость дополнительных сервисов", order.services_plus_price);

					//Запишем текущее состояние объекта в формате JSON в localStorage для работы с ним на других страницах
					objToJSON(order);


					//Проверим есть ли запись в localStorage, если инет, то рисуем корзину.
					if (savedData_0 == null && savedData_1 == null && savedData_2 == null && savedData_3 == null) {
						miniCartCreate();
					};
					//Проверим есть ли запись в localStorage, если инет, то рисуем иконку
					if (savedData_3 == null) {
						showServiceInMiniCart();
					};


					let checkData = localStorage.getItem("Дополнительные сервисы");
						//Если в localStorage не содержит записей (все свитчеры в положении выкл.)
						//то полность удаляем ключи из localStorage и иконку
						if (checkData == "") {
							localStorage.removeItem("Дополнительные сервисы");
							localStorage.removeItem("Стоимость дополнительных сервисов");
							removeServiceInMiniCart();
						};

						//Закрывает микрокарзину, если оттуда удалили последний объект
						isEmptylocalStorageOrderObj();

					//Подсветка блока с сервисом
					let target = event.target;
					//Всплытие до корневого узла
					while (!target.classList.contains("t-servicesPlusContainerContent")) {
						//Определяем корневой элемент отдельного блока сервиса - он перед корневым узлом
						if (target.classList.contains("servicesPlus-container")) {
							break;											
						}; 
						target = target.parentNode;
					}; 
							
					target.classList.toggle("servicesPlusSelected");// Подкраска плашки
				
				} //if

			});

		}//for

	}()); //servicesPlusAddButtons 

}//if window.location


//Корзина

/*
 * Создает обект order при перезагрузке страницы.
 * Это нужно для того, чтобы элементы в корзине не перезаписывались 
 * при добавлении новых на другой странице. Например добавив в конструкторе роутер X 
 * перейдя на страницу оборудования, выбрав там оборудование роутер X будет перезаписан новым,
 * а не новый добавлен к нему в строку.
*/


//Обеспечивает работу кнопки отмена на всех страницах кроме конструктора
if (window.location != `${homeUrl}/internet/`) {
	let cartContainer = document.querySelector(".cartContainer");
		//Запускаем функцию отмены заказа при клике на кнопку отмены в миникорзине
		cartContainer.addEventListener("click", function(event) {
			if (event.target.classList.contains("miniCartCansel") || event.target.classList.contains("miniCartCanselMobile") || event.target.classList.contains("icon-delete")) {			
				clearCart();
				//Переводим свитчеры в положение выкл на страницах
				if (window.location == `${homeUrl}/services/`) {
					clearIswitchersServicesPlus();
				};
				if (window.location == `${homeUrl}/tv/`) {
					clearIswitchersTV();
				};
				if (window.location == `${homeUrl}/equipment/`) {
					clearSwitchersEq();
				};
			};


		});

};

let cartContainer = document.querySelector(".cartContainer");
cartContainer.addEventListener("click", function(event) {
	if (event.target.classList.contains("miniCartSubmit") || event.target.classList.contains("miniCartSubmitMobile") || event.target.classList.contains("icon-chevron-arrow-up")) {
		location.href = "http://localhost:3000/cart/";
	};
});

//Отрисовывает иконки в корзине, если что-то есть в заказе
if (localStorage.getItem("Название тарифа") != null) {
	putInMiniCart();
};
if (localStorage.getItem("Оборудование") != null) {
	showInternetEquipmentInMiniCart();
};
if (localStorage.getItem("Тариф ТВ") != null) {
	showTvInMiniCart();
};
if (localStorage.getItem("Дополнительные сервисы") != null) {
	showServiceInMiniCart();	
};

//END КОРЗИНА

//Выпдающее мобильное меню с информацией
let infoMobileMenu = (function(){

let infoHiddenMenuLink = document.querySelector(".topMenuBlockMobileLink");
let infoHiddenMenu = document.querySelector(".topMenuBlockMobileSub");
let panelHeight = infoHiddenMenu.scrollHeight;
let hiddenMenuStatus = true;

document.addEventListener("click", function(event) {

	let target = event.target;

	if (hiddenMenuStatus == true && target.classList.contains("topMenuBlockMobileLinkText")) {

		if (hiddenMenuStatus == true) {

				accordionOpen.call(infoHiddenMenu, panelHeight, 0);				
				hiddenMenuStatus = false;			
		
		};

 	} else if (hiddenMenuStatus == false && target.classList.contains("topMenuBlockMobileLinkText")) {
		//Для закрытия при нажатии на кнопку
				accordionClose.call(infoHiddenMenu);
				hiddenMenuStatus = true;

	} else if (hiddenMenuStatus == false) {
 		//Для закрытия при нажатии в любом месте окноа но не на меню
				accordionClose.call(infoHiddenMenu);
				hiddenMenuStatus = true;

		};


});

}()); //infoMobileMenu
//END Выпдающее мобильное меню с информацией

//Модальное окно для мобильного меню
let subMobileMenu = (function(){

	let button = document.querySelector(".topMobileMenuContainer");
	let popup = document.querySelector(".topMobilePopupMenuContainer");
	let close = document.querySelector(".topMobilePopupMenuClose");
	let hiddenMenuStatus = true;

	document.addEventListener("click", function(event){

		let target = event.target;

		if (hiddenMenuStatus == true && target.classList.contains("topMobileMenuButton") || target.classList.contains("icon-list-menu")) {

			//Откроет окно
			popup.classList.toggle("topMobilePopupMenuContainerShow");
			hiddenMenuStatus = false;
		
		} else if (hiddenMenuStatus == false && target.classList.contains("topMobilePopupMenuClose")) {

			//Закроет окно
			popup.classList.toggle("topMobilePopupMenuContainerShow");
			hiddenMenuStatus = true;

		} else if (hiddenMenuStatus == false && !!target.classList.contains("topMobilePopupMenuContainer")) {

			//Закроет окно
			popup.classList.toggle("topMobilePopupMenuContainerShow");
			hiddenMenuStatus = true;

		};//if


	});

}()); //subMobileMenu
//END Модальное окно для мобильного меню

// window.onresize = function(event) {

//Скрытие элементов DOM для адаптивной верстки блоков "Подключайтесь к RealWeb" на главной
let connectToUs650 = (function() {
//При определенной ширине окна убираем одни элементы DOM и отображаем другие
//Нужно для более удобного позиционирования блока с ценой и кнопки перехода на страницу

	let priceEl = document.querySelectorAll(".connectToUsPrice");
	let buttonEl = document.querySelectorAll(".connectToUsButton");
	let media = document.querySelectorAll(".connectToUs480Media");

	if (document.documentElement.clientWidth < 650) {

		for ( let i = 0; i < priceEl.length; i++ ) {
			if ( priceEl[i].hasAttribute("data-name", "mediaNot")) {
				priceEl[i].style.display = "none";
			};
			if ( buttonEl[i].hasAttribute("data-name", "mediaNot")) {
				buttonEl[i].style.display = "none";
			};
		};//for

		for ( let i = 0; i < media.length; i++ ) {
			media[i].style.display = "";
		};

	};

	if (document.documentElement.clientWidth > 650) {

		for ( let i = 0; i < priceEl.length; i++ ) {
			if ( priceEl[i].hasAttribute("data-name", "mediaNot")) {
				priceEl[i].style.display = "";
			};
			if ( buttonEl[i].hasAttribute("data-name", "mediaNot")) {
				buttonEl[i].style.display = "";
			};
		};//for

		for ( let i = 0; i < media.length; i++ ) {
			media[i].style.display = "none";
		};

	};


}()); //connectToUs650

// }//window.onresize

//Делаем ширину блока с ценой в контенере "Подключайтесь к Realweb" одинаковую 
// относительно самого широкого во всех блоках
//необходимо для того, чтобы выровнять иконки друг под другом. Иначе они смещаются вправо

let connectToUsEqualWidth = (function() {

	let priceHome = document.querySelectorAll(".connectToUsPriceHome");
	let priceBusiness = document.querySelectorAll(".connectToUsPriceBusiness");
	let homeWidth = 0;
	let businessWidth = 0;

	for ( let i = 0; i < priceHome.length; i++ ) {
		//Определим максимальную ширину для каждого элемента 
		//в отдельном блоке ( для дома)
		if ( priceHome[i].offsetWidth > homeWidth ) {
			homeWidth = priceHome[i].offsetWidth;
		};
	
	};//for priceHome

	for ( let i = 0; i < priceBusiness.length; i++ ) {
		//Определим максимальную ширину для каждого элемента 
		//в отдельном блоке (для бизнеса)
		if ( priceBusiness[i].offsetWidth > businessWidth ) {
			businessWidth = priceBusiness[i].offsetWidth;
		};

	};//for priceBusiness

	//Присвоим всем контейнерам одинаковую - максимальную ширину
	for ( let i = 0; i < priceHome.length; i++ ) {
		priceHome[i].style.width = homeWidth + "px";
		console.log(priceHome[i].offsetWidth);		
	};

	for ( let i = 0; i < priceBusiness.length; i++ ) {
		priceBusiness[i].style.width = businessWidth + "px";
	};

}()); //connectToUsEqualWidth

//Переключение кнопок в блоке "Подключайтесь к RealWeb"
//и реализация сдвига информации в блоке: для дома - для бизнеса

let connectToUs = (function() {
	
	const ClassName = {
		BUTTON_ON: "connectToUsSwitcherButtonOn",
		WRAPPER_ACTIVE: "connectToUsWrapperActive",
		WRAPPER_NEXT: "connectToUsWrapperNext",
		WRAPPER_PREV: "connectToUsWrapperPrev"
	}

	//Получим кнопку
	let button = document.querySelectorAll(".connectToUsSwitcherButton");
	//Получим блоки-контейнеры с информацией о ценах и др.
	let block = document.querySelectorAll(".connectToUsWrapper");

	//Переключение кнопки
	for ( let i = 0; i < button.length; i++ ) {

	//Вешаем на обе кнопки функцию по клику
		button[i].addEventListener("click", function(event) {

			//Убираем активный класс у всех кнопок
			for ( let i = 0; i < button.length; i++ ) {
				button[i].classList.remove(ClassName.BUTTON_ON);
			}; //for

			//Присвоим активный класс кнопке на которой клинули
			this.classList.toggle(ClassName.BUTTON_ON);

			//Смещение блоков по клику на кнопке
			if ( i == 1 ) {
			/*
			*	Если у блока индекс i = 1 (что соотвествует индексу нажатой кнопки)
			* то у блока с индексом 0 убираем активный класс,
			* а к общему контейнеру с элементами добавляем класс WRAPPER_PREV
			* что сдвигает блок в нужную сторону
			*/
			block[0].classList.remove(ClassName.WRAPPER_ACTIVE);
			block[0].classList.add(ClassName.WRAPPER_PREV);
			/*
			* С блоком с индексом 1 делаем все наоборот
			* присваиваем активный класс и убираем класс WRAPPER_NEXT,
			* что сдвигает блок в центр
			*/ 
			block[1].classList.remove(ClassName.WRAPPER_NEXT);
			block[1].classList.add(ClassName.WRAPPER_ACTIVE);

			} else if ( i == 0 ) { //Аналогично

			block[1].classList.remove(ClassName.WRAPPER_ACTIVE);
			block[1].classList.add(ClassName.WRAPPER_NEXT);

			block[0].classList.remove(ClassName.WRAPPER_PREV);
			block[0].classList.add(ClassName.WRAPPER_ACTIVE);

			}; //if

		}); //addEventListener

	};//for

	//Сдвиг блока


}()); //connectToUs


function makesConstructorShortTextEqualHeight() {
	/*
	 * Определяет максимальную высоту краткого текста под тарифом
	 * и присваевает это значение высоте общего контейнера с этими текстами 
	*/

	let container = location.querySelector(".t-annotation");
	let shortTexts = location.querySelectorAll(".t-advantages");

	let max = 0;

	for ( let i = 0; i < shortTexts.length; i++ ) {
		if ( shortTexts[i].offsetHeight > max ) {
			max = shortTexts[i].offsetHeight;
		}; 
	}; 

	container.style.height = max + "px";

}//function makesConstructorShortTextEqualHeight


function speedPriceFontSizeChanger() { //Не применил!!!!
/*
 * Уменьшает размер шрифта в конструкторе для цены и скорости,
 * если число равно 1000 или больше
*/
	
	let speed = document.querySelectorAll(".t-speedValueNum");
	let price = document.querySelectorAll(".t-priceNumber");

	for ( let i = 0; i < speed.length; i++ ) {
		let a = Number(speed[i].innerHTML);
		if ( a >= 60 ) {
			speed[i].classList.add("t-speedValueNumSmall");
		};
	};

} //function speedPriceFontSizeChanger

//Проверка URL и замена активного класса на странице оборудования при
//переключении кнопок фильтра

let equipmentPageFilter = (function() {

	if (document.location.href.indexOf("equipment") >= 0) {

		let buttons = document.querySelectorAll(".equipmentFilterButton");
		buttons[0].classList.add("equipmentFilterButtonOn");


		if(document.location.href.indexOf("equipment-internet") >= 0) { 

			for (let i = 0; i < buttons.length; i++) {
				
				buttons[i].classList.remove("equipmentFilterButtonOn");
				
				if (buttons[i].value == "equipment-internet") {
					buttons[i].classList.add("equipmentFilterButtonOn");
				};

			};

		};//if(document.location.href.indexOf("equipment-internet")

		if (document.location.href.indexOf("equipment-tv") >= 0) {
			
			for (let i = 0; i < buttons.length; i++) {

				buttons[i].classList.remove("equipmentFilterButtonOn");
				
				if (buttons[i].value == "equipment-tv") {
					buttons[i].classList.add("equipmentFilterButtonOn");
				};

			};

		}; //if (document.location.href.indexOf("equipment-tv")

	};//if

}()); //equipmentPageFilter

//FAQ Accordion

let accordion = (function() {


//Получаем данные из DOM
let button = document.querySelectorAll(".questionTitle"); //Имя класса кнопки
let panel = document.querySelectorAll(".questionText"); //Имя класса блока с текстом
let button_icon = document.querySelectorAll(".icon-chevron-arrow-up");

let n = button.length;

let active = "faqActiveTitle"; //Класс активной кнопки
let icon_active = "faqActiveIco"; //Класс активной иконки
let text_active = "faqActiveText"; //Класс для раскрывшегося блока с текстом

//Вешаем на каждый елемент button функцию accordion
for ( let i = 0; i < button.length; i++ ) {
	button[i].addEventListener("click", function(){
		accordion(button[i], panel[i], button_icon[i], true); //true - false меняет стиль работы аккордиона 
	}, false);
};


function accordion(b, p, i, style) {
		/* 
		 * Функция реализует работу переключения вкладок 
		 * в стиле "аккордион" на странице FAQ для
		 * html структуры следующего вида:
		
		 * <button class="accordion">Long long title</button>
		 * <div class="panel">
		 * <p>Lorem ipsum dolor sit amet...</p>
		 * </div>
		*/


		//Получаем высоту скрытого элемента для последующего
		//использования этой величины в стилях для раскрытия блока
		let panelHeight = p.scrollHeight;

		//Проверяем открыта ли с прошлого раза вкладка, на которой кликнули
		if (b.classList.contains(active)) {
			//Если да, то закрываем её
			b.classList.toggle(active);
			i.classList.toggle(icon_active);
			p.classList.toggle(text_active);
			p.style.maxHeight = null;
		
		} else {
			//Если вкладка не открыта
			for ( let j = 0; j < n; j++ ) {
				
				 /* 
				  * Проверяем настройки принципа работы аккордиона
				  * Если true, то закрываем все вкладки перед открытием новой
				  * если false, то просто открываем нужную вкладку и не закрываем открытые
				*/
				
				if ( style == true ) {
					//Переводим все элементы в неактивное состояние			
					button[j].classList.remove(active);
					button_icon[j].classList.remove(icon_active);
					panel[j].classList.remove(text_active);
					panel[j].style.maxHeight = null;
				};

			}; //for
			
			//Добавляем нужные классы для раскрытия блока
			b.classList.add(active); //Цвет активной кнопки
			i.classList.toggle(icon_active);
			p.classList.toggle(text_active);			
			p.style.maxHeight = panelHeight + "px";
		}; //if else

}


}());//FAQ accordion

 }

} //End

//Карусель
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({

  	items: 1,
  	loop: true,
  	nav: true,
  	dots: true,
  	autoplay:
  		{
  			autoplayTimout: 10000
  		},
  	navClass: ["owl-prev-my","owl-next-my"],
  	navText: ["",""],
  	// stagePadding: 20
  	margin: 20

  });
});

