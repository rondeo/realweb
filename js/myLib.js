//ФУНКЦИИ


//Анимация кнопки "выбрать тариф"

function tButtonShrink(bWidth, units, numCercle) {
	//Сжимает кнопку
	//bWidth - изначальная ширина объекта сжатия
	//units - единица измерения (px, % и т.д.)
	//numCercle - величина до котоой нужно уменьшить ширину кнопки, чтобы та стала круглой
	let _this = this;

	let counter = +bWidth; //Счетчик для анимации кнопки. Равен 100%
	
	this.firstElementChild.style.opacity = 0; //Убираем текст кнопки

	for ( let i = counter; i > numCercle; i--) { //Сжимаем кнопку до нужного размера
			this.style.width = counter - 1 + units;
			counter--;
		}	

	//Меняем цвет кнопки и возвращаем к исходной ширине
	setTimeout( function() {
		shrink(counter);
	}, 400);

	//Добавляем новый текст кнопки 
	setTimeout( function() {
		_this.firstElementChild.innerHTML = "тариф выбран";
		_this.firstElementChild.style.opacity = 1;
	}, 700);

	//Функция возвращает кнопку к исходной ширине после сжатия
	function shrink(counter) {		
			_this.style.backgroundColor = "gray";
			for ( let i = counter; i < bWidth; i++ ) {
				_this.style.width = counter + 1 + units;
				counter++;		
			}
		}

	_this.style.cursor = "default";

}


function tButtonShrinkBack(bWidth, units, numCercle) {
	//Сжимает кнопку
	//bWidth - изначальная ширина объекта сжатия
	//units - единица измерения (px, % и т.д.)
	//numCercle - величина до котоой нужно уменьшить ширину кнопки, чтобы та стала круглой
	let _this = this;

	let counter = +bWidth; //Счетчик для анимации кнопки. Равен 100%
	
	this.firstElementChild.style.opacity = 0; //Убираем текст кнопки

	for ( let i = counter; i > numCercle; i--) { //Сжимаем кнопку до нужного размера
			this.style.width = counter - 1 + units;
			counter--;
		}	

	//Меняем цвет кнопки и возвращаем к исходной ширине
	setTimeout(function() {
		shrink(counter);
	}, 400);

	//Добавляем новый текст кнопки 
	setTimeout(function() {
		_this.firstElementChild.innerHTML = "выбрать тариф";
		_this.firstElementChild.style.opacity = 1;
	}, 700);

	//Функция возвращает кнопку к исходной ширине после сжатия
	function shrink(counter) {		
			_this.style.backgroundColor = "";
			for ( let i = counter; i < bWidth; i++ ) {
				_this.style.width = counter + 1 + units;
				counter++;		
			}
		}

	_this.style.cursor = "pointer";

}

//END Анимация кнопки "выбрать тариф"
		
//Раскрытие и сворачивание аккордиона в тарифе
		
function accordionOpen(panelHeight, padding) {

	//panelHeight - высота блока со скрытой информацией
	//padding - падинг для открывшегося блока	

	let _this = this;

	_this.style.maxHeight = panelHeight + padding + "px";
	_this.style.paddingTop = padding + "px";

}

function accordionClose(moreContainer) {
	//moreContainer - блок со скрытой информацией
	
	let _this = this;

	// _this.nextElementSibling.style.maxHeight = null;
	_this.style.maxHeight = null;
	_this.style.paddingTop = null;

}

//Сворачивание кнопки оформления заказа и отмена

function submitCanselClose(orderSubmitButton) {

	let _this = this;

	orderSubmitButton.style.maxHeight = null;
	orderSubmitButton.style.marginTop = null;

}


function iSwitcher(button, plate, classActive, data, order, plate2, data2, order2) {
	/*
	 * Переключатель кнопок стилизованных под IPhone
	 * button - элемент кнопка (обычно берется через querySelectorAll)
	 * plate - элемент основа кнопки (обычно берется через querySelectorAll в аттрибуте plate[i])
	 * classActive - название активного класса для включенной кнопки
	 * data, data2 - данные из html аттрибута data для определения того, что записываем в объект,
	 * например data-item-name - название оборудования, data-item-price - цена оборудования и т.д.
	 * order - элемент объекта, в который записывать значение, например order.items
	 * plate2 - элемент содержащий информацию о цене
	 * order2 - элемент объекта, в который записывать значение цены
	*/

	let _this = this;

	let x =	plate.offsetWidth; //Длинна основы
	let n = _this.offsetWidth; //Длинна кнопки 

	//Если кнопка не включена - не присвоен активный статус, то включить
			if ( !plate.classList.contains(classActive)) {

				_this.style.left = x - n - n/4 + "px"; //Формула универсального смещения кнопки влево вне зависимости от длинны кнопки
				plate.classList.add(classActive); //Активный класс

				order.push(plate.getAttribute(data)); //Добавляем к массиву название оборудования
				order2.push(plate2.getAttribute(data2)); //Добавляем к массиву название цены оборудования

			} else {
			
				_this.style.left = ""; //Смещаем кнопку на исходную позицию
				plate.classList.remove(classActive);

				//Убираем информацию из объекта заказа
				removeDataFromObject(order, plate, data, order2);

			}; //else

			function removeDataFromObject(order, plate, data, order2) {
				/*
				 * Убирает информацию из объекта
				 * При этом учитывает индекс элемента в объекте
				 * для корректного удаления из начала и середины.
				 * Последний элемент в удаляет стандартным методом pop.
				 *
				 * order - элемент объекта (массив)
				 * plate - html элемент из которого считывать data
				 * data - аттрибут data
				*/

				/*
				* Счетчик совпадений. Необходим для тех случаев,
				* когда есть несолько позиций с одинаковой ценой или названием.
				* Если не проверять счетчиком, то удалет сразу несколько одинаковых
				* значений вместо одного.
				*/
				let counter = 0; 

				for ( let j = 0; j < order.length; j++ ) {
					//Перебираем массив и если находим в нем нужный элемент, то удаляем

					//Если в массиве больше одного элемента
					if ( order[j] == plate.getAttribute(data) && order.length > 1 && counter == 0) {
						/*
						 * Если индекс удаляемого элемента 0, то удаляем с нулевой позиции.
						 * Такое возможно, если польщователь будет удалять элементы не по порядку.
						*/	
						if ( j == 0 ) {
							order.splice(0, 1);
							order2.splice(0, 1);
						};

						//Если индекс 1 или больше
						if (j == 1) {
							order.splice(j, j);
							order2.splice(j, j);							
						}; 
						
						//Длинна массива начинается с 1 а индексация с 0, поэтому все что больше 1 уменьшаем на 1
						if (j > 1) {
							order.splice(j, j - 1);
							order2.splice(j, j - 1);							
						}; 

						counter = 1;

					} 

					if ( order[j] == plate.getAttribute(data) && order.length == 1 ) {
						//Если в массиве всего один элемент, то просто удалем все методом pop
						order.pop();
						order2.pop();
					};
				};

				

			} //function removeDataFromObject

} //iSwitcher


function iSwitcherLightOff(button, plate, classActive) {
	/*
	 * Возвращает свитчеры в положение выкл при отмене заказа
	*/
			
	button.style.left = ""; //Смещаем кнопку на исходную позицию
	plate.classList.remove(classActive);

} //iSwitcherLightOff

function iSwitcherLightOn(button, plate, classActive) {
	/*
	 * Сохраняет положение вкл у свитчеров до тех пор пока относящиеся к ним объекты находятся в корзине.
	*/

	let x =	plate.offsetWidth; //Длинна основы
	let n = button.offsetWidth; //Длинна кнопки
	
	button.style.left = x - n - n/4 + "px"; //Формула универсального смещения кнопки влево вне зависимости от длинны кнопки
	plate.classList.add(classActive); //Активный класс

} //iSwitcherLightOn


function addPriceInObject(price, order) {
	/*
	 * Добавляет и удаляет стоимость в/из общего объекта
	*/

	//Если такой записи в указанном обекте нет, то запишем
	// for ( let i = 0; i < order.length; i++ ) {
	// 	console.log("длинна массива", order.length);
	// 	if (order[i] != price) {
			order.push(price);
		// } else {
		// 	order.push(priceContainer);
	// 	};
	// }; 

}

function showEquipment(servicesPlusContainer) {
	//Открывает аккордион с основным оборудованием для интернета в верхней части конструктора
	let container = servicesPlusContainer; //Контейнер со слайдером
	let height = container.scrollHeight; //Высота контейнера со слайдером
	accordionOpen.call(container, height, 40);

}

function showServicesEquipment(switcherPlate, servicesPlusContainer, hide) {
	//Открывает и закрывает аккордион со слайдером с оборудованием для дополнительных услуг

	let plate = switcherPlate; //Передаем массив кнопок
	let container = servicesPlusContainer; //Контейнер со слайдером
	let height = container.scrollHeight; //Высота контейнера со слайдером

	//Вспомогательный счетчик для аккордиона с оборудованием.
	//Нужен для того, чтобы не запускать функцию accordionOpen при каждом включении кнопки iSwitcher,
	//а только при первом нажатии
	let switchCounter = 0; 
	let classCounter = 0; //Счетчик наличия активного класса в switcherPlate

	//Два варианта работы: открытие и закрытие, только закрытие
	//Если третий аргумент true, то работает закрытие

	if (hide != true) {
		
		//Условие, при котором аккордион с оборудованием для этого блока октрывается и закрывается.
		//Открывается, если есть включенные кнопки, а закрывается если все кнопки выключенны
		
		function showhide() {			

				for ( let j = 0; j < plate.length; j++ ) {

					if (plate[j].classList.contains("activeSwitcherPlateOrange")) {
						//Если нашли хоть один активный класс, то есть включенную кнопку, 
						//то меняем значение счетчика classCounter на еденицу и прерываем работу цикла 
						classCounter = 1;
						switchCounter = 1;
						break;
					
					} else {
						//Если активных классов не найдено, то есть все кнопки выключены, то обнуляем счетчик classCounter 
						classCounter = 0;
					};

				};

				if (switchCounter == 1) { //Если впервые нажимают кнопку, то открываем аккордион
					accordionOpen.call(container, height, 0);
				};

				if (classCounter == 0) { //Если нет активных классов (то есть все кнопки выключили), то закрываем аккордион и обнуляем значения всех счетчиков
					accordionClose.call(container);
					switchCounter = 0;
					classCounter = 0;
				};
				
		} //showhide

		showhide();

		} else {

			function hide() {
				accordionClose.call(container);
			}
			hide();
		};

}//showServicesEquipment


function smoothNSPChange(name, nameValue, speed, speedValue, price, priceValue, timer) {
	//Плавное изменение: названия тарифа, скорости, цены

	//Плавное изменение названия тарифа
	name.style.opacity = 0;
	//Плавное изменение скорости
	speed.style.opacity = 0;
	//Плавное изменение цены
	price.style.opacity = 0;		
	
	setTimeout( function() {
		name.innerHTML = nameValue;
		name.style.opacity = 1;
		speed.innerHTML = speedValue;
		speed.style.opacity = 1;
		price.innerHTML = priceValue;
		price.style.opacity = 1;
	}, timer);

}//smoothNSPChange

function smoothATIChange(planAdvantages, planNameValue, moreText, moreTextIcons) {
	//Павное изменение: текст преимуществ, подробный текст, иконки подробного описания
	
	//Изменяем текст преимуществ и описания тарифа соответственно выбранному тарифу
	//Присвоим всем элементам display none
	for ( let i = 0; i < planAdvantages.length; i++ ) {				
	

		if ( i == 0 ) {

				planAdvantages[i].style.display = "";
				moreText[i].style.display = "";							
				moreTextIcons[i].style.display = "";

				planAdvantages[i].style.opacity = 1;
				moreText[i].style.opacity = 1;
				moreTextIcons[i].style.opacity = 1;

		} else {

				planAdvantages[i].style.opacity = 0;
				moreText[i].style.opacity = 0;
				moreTextIcons[i].style.opacity = 0;

				planAdvantages[i].style.display = "none";
				moreText[i].style.display = "none";
				moreTextIcons[i].style.display = "none";
		
		}; // if 
		 
	}; // for 

}// function smoothATIChange


function heightWatcher(containerName) {
//Фиксирует изменения высоты контенейра. Например при смене слайдов в слайдере

	//containerName - блок, высота которого изменяется (через querySelector)

	let container = containerName;
	let height = container.scrollHeight;

	return document.querySelector("." + containerName).style.maxHeight = height;
	
} //function heightWatcher



//СЛАЙДЕР

"use strict"

function slider1(id) {
	
	//Имена классов слайдера
	const ClassName = {
		MAIN_CONTAINER: "t-produtsContainer",
		INDICATOR: "sliderIndicator",
		INDICATORS: "sliderIndicators",
		INDICATOR_ACTIVE: "sliderIndicatorActive",
		ITEM: "sliderItem",
		ITEM_PREV: "sliderItemPrev",
		ITEM_NEXT: "sliderItemNext",
		ITEM_ACTIVE: "sliderItemActive",
		BUTTON: "sliderControl",
		BUTTON_BACK: "sliderControlPrev",
		BUTTON_FOWARD: "sliderControlNext"
	}		
	
		// Контейнер слайдера
		let sliderContainer = document.querySelector(id);

		//Контейнер со слайдами
		let sliderItems = sliderContainer.querySelector(".sliderItems");

		// Список чередующихся элементов слайдера - слайдов
		let sliderItem = sliderContainer.querySelectorAll("." + ClassName.ITEM);

		const sliderCount = sliderItem.length;
		
		
		function indicatorsGenerator() {

			//Генерация индикаторов - создание DOM элементов
			let ol = sliderContainer.querySelector("." + ClassName.INDICATORS);
			
			for ( let i = 0; i < sliderItem.length; i++ ) {
				let li = document.createElement("li");
				li.className = "sliderIndicator";
				ol.appendChild(li);
			};
			
		} //indicatorsGenerator

		indicatorsGenerator();

		//Получим сгенерированный список индикаторов
		let sliderIndicator = sliderContainer.querySelectorAll("." + ClassName.INDICATOR);
				sliderIndicatorStatus = true; //Вспомогательная перемнная для функции indicatorsSwitcher
				sliderIndicatorCounter = 0; //Вспомогательная перемнная для функции indicatorsSwitcher > 2
				sliderIndicatorCounterPrev = sliderIndicatorCounter; //Вспомогательная перемнная для функции indicatorsSwitcher > 2
		

		function indicatorsSwitcher(direction) {
			//Переключатель индикаторов

			//Убираем активный класс со всех индикаторов при каждом клике
			for ( let i = 0; i < sliderIndicator.length; i++ ) {
				sliderIndicator[i].classList.remove(ClassName.INDICATOR_ACTIVE);		
			};

			//Если слайдов всего два
			if (sliderCount == 2) {	

				if (sliderIndicatorStatus == true) {					
					//Устанавливаем активный класс первому индикатору
					sliderIndicator[0].classList.add(ClassName.INDICATOR_ACTIVE);
					sliderIndicatorStatus = false;
				} else {
					//Устанавливаем активный класс второму индикатору
					sliderIndicator[1].classList.add(ClassName.INDICATOR_ACTIVE);
					sliderIndicatorStatus = true;
				};

			}; //If sliderItems.length == 2

			//Если слайдов больше чем два
			if (sliderCount > 2) {				
				
				//Определяем в какую сторону крутится слайдер
				if (direction == "next") {
					
					sliderIndicatorCounter++;

					if (sliderIndicatorCounter == sliderIndicator.length) { sliderIndicatorCounter = 0; };
					
					//Устанавливаем активный класс следующему индикатору
					sliderIndicator[sliderIndicatorCounter].classList.add(ClassName.INDICATOR_ACTIVE);
				
				};
				
				if (direction == "prev") {

					//Устанавливаем счетчик в положение для возможности обратного отсчета, если счетчик равен 0
					if (sliderIndicatorCounter == 0) { sliderIndicatorCounter = sliderIndicator.length } 

					sliderIndicatorCounter--;
		
					//Устанавливаем активный класс предыдущему индикатору
					sliderIndicator[sliderIndicatorCounter].classList.add(ClassName.INDICATOR_ACTIVE);

				};

			}; //If sliderCount > 2
			
		} //function indicatorsSwitcher

		indicatorsSwitcher(); //Выставляем значения индикаторов согласно условию


		//Логика работы отличается для условий: 
		//если нет элементов, если 1 элемент, если 2, если больше 2
		
		//Если элементов нет вообще, то убираем весь блок со слайдером, включая заголовок
		//Проверка URL нужна потому, что элемент DOM mainContainer есть только на странице с конструктором
		// если этой проверки не делать, то на других страница вывод оборудования работать не будет
		if (sliderItem.length == 0 && window.location == "http://localhost:3000/internet/") {
			
			let mainContainer = sliderContainer.querySelector("." + ClassName.MAIN_CONTAINER);
			mainContainer.style.display = "none";

		}
		
		//Если всего один элемент, то делаем его активным и убираем все элементы навигации
		if (sliderItem.length == 1) {

			sliderItem[0].classList.add(ClassName.ITEM_ACTIVE);
			sliderContainer.querySelector("." + ClassName.INDICATORS).style.display = "none";
			sliderContainer.querySelector("." + ClassName.BUTTON_BACK).style.display = "none";
			sliderContainer.querySelector("." + ClassName.BUTTON_FOWARD).style.display = "none";
	
		}

		//Если всего два элемента на странице, то создаем по одному клону каждого
		//чтобы карусель корректно работала
		if (sliderItem.length == 2) {

			let clone1 = sliderItem[0].cloneNode(true);
			sliderItems.appendChild(clone1);

			let clone2 = sliderItem[1].cloneNode(true);
			sliderItems.appendChild(clone2);

			// Еще раз получим список слайдов для того, чтобы обновить длинну списка sliderItem
			sliderItem = sliderContainer.querySelectorAll("." + ClassName.ITEM);
		
		}

	function sliderStarter() {

		//Переменные с помощью которых реализуется смена слайдов
		let position = 0; //Контроль индекса текущего слайда
				nextPosition = position + 1; //Контроль индекса следующего слайда
				prevPosition = sliderItem.length - 1; //Контроль индекса предыдущего слайда
			
			
		function drawSlider(first) {
			//Отрисовываем слайдер первый раз

			//Текущему слайду добавляем класс ITEM_ACTIVE
			sliderItem[position].classList.add(ClassName.ITEM_ACTIVE);

			//Устанавливаем следующий слайд справа в положение готовности
			sliderItem[nextPosition].classList.add(ClassName.ITEM_NEXT);
			
			//Устанавливаем последний слайд в положение "предыдущий""
			sliderItem[prevPosition].classList.add(ClassName.ITEM_PREV);

			if (first == true) { //Если функция запускается впервый раз, ставим активный класс первому индикатору
				
				sliderIndicator[position].classList.add(ClassName.INDICATOR_ACTIVE);
			
			};//if first

		}//function drawSlider

		drawSlider(true);

		function clickSlider() {

		//Все setTimeout внутри следующего if нужны, для того, чтобы при количестве 
		//слайдов 3, крайние слайды незаметно перемещались на противоположные стороны
		//Это перемещение видно из-за того, что при таком количестве крайние слайды минуют
		//стадию display: none и сразу становятся в очередь: либо следующий NEXT либо предыдущий PREV  

		//Получаем стрелки назад и вперед
		let nextButton = sliderContainer.querySelector(".sliderControlNext");
		let prevButton = sliderContainer.querySelector(".sliderControlPrev");

		

		nextButton.addEventListener("click", function () {
			//Переключение слайдов влево
				
				//Убираем слайд слева
				sliderItem[prevPosition].classList.remove(ClassName.ITEM_PREV);

				//Смещаем текущий слайд влево
				sliderItem[position].classList.remove(ClassName.ITEM_ACTIVE);
				sliderItem[position].classList.add(ClassName.ITEM_PREV);

				//Смещаем следующий слайд на главную позицию
				sliderItem[nextPosition].classList.remove(ClassName.ITEM_NEXT);
				sliderItem[nextPosition].classList.add(ClassName.ITEM_ACTIVE);
	
				prevPosition = position; //Меняем индекс предыдущей позиции
				position = nextPosition; //Изменяем значение текущей позиции
				nextPosition++; //Меняем индекс следующей позиции

				//Если дошли до последнего слайда, то следующий слайд - первый слайд (с индексом 0)
				if (position == sliderItem.length - 1) {
					setTimeout(function() {
						sliderItem[0].classList.add(ClassName.ITEM_NEXT);
						nextPosition = 0;	
					}, 500);
				};

				setTimeout(function() {
					drawSlider();
				}, 500);

				
				//ДОРАБОТАТЬ С КНОПКОЙ ПОКАЗАТЬ ТЕКСТ ПОЛНОСТЬЮ И ВЫЧИСЛЯТЬ 80 А НЕ ХАРДКОДИТЬ
				//Для оптимизации высоты контейнера слайдера в зависимости от высоты каждого слайда
				// получим высоту элементов контейнера слайдера без самого слайдера - разницу
				//совокупность всех паддингов и т.д.
				//разницу получаем сразу отталкиваясь от первого слайда. Дальше пользуемся полученным числом как константой
				let productsContainer = document.querySelector(".t-productsContainer");
				let sliderOnStart = document.querySelector("#slider-1").offsetHeight;

				// productsContainer.style.maxHeight = sliderOnStart + addProductsPanelHeight + "px";

				indicatorsSwitcher("next");				


			}); //NEXT

			prevButton.addEventListener("click", function() { 
			
				//Убираем слайд справа
				sliderItem[nextPosition].classList.remove(ClassName.ITEM_NEXT);
				//Смещаем активный слайд вправо
				sliderItem[position].classList.remove(ClassName.ITEM_ACTIVE);
				sliderItem[position].classList.add(ClassName.ITEM_NEXT);
				//Смещаем левый слайд на активную позицию
				sliderItem[prevPosition].classList.remove(ClassName.ITEM_PREV);
				sliderItem[prevPosition].classList.add(ClassName.ITEM_ACTIVE);

				//Устанавливаем следующий за ним слайд слева
				//Если текущий слайд с индексом 1, то следующий слайд с индексом 0 , то есть первый
				//Устанавливаем значение переменных в исходное состояние и запускаем функцию инициализатор слайдера
				if (position == 1) {					
					position = 0;
					nextPosition = position + 1;
					prevPosition = sliderItem.length - 1;
					setTimeout(function() {
						drawSlider();
					}, 500); 
				
				} else { //Идем до конца массива
					
					setTimeout(function() {
						sliderItem[prevPosition - 1].classList.add(ClassName.ITEM_PREV);					
						nextPosition = position;//Меняем индекс следующей позиции
						position = prevPosition; //Изменяем значение текущей позиции
						prevPosition--; //Меняем индекс предыдущей позиции
					}, 500);				
				
				}		

				indicatorsSwitcher("prev");
				heightWatcher("slider-1");
			}); //PREV

		}//function clickSlider

			clickSlider();

	}	//function sliderStarter
	
	sliderStarter();

	}


function slider2(id) {
	
	//Имена классов слайдера
	const ClassName = {
		MAIN_CONTAINER: "t-produtsContainer",
		INDICATOR: "sliderIndicator",
		INDICATORS: "sliderIndicators",
		INDICATOR_ACTIVE: "sliderIndicatorActive",
		ITEM: "sliderItem",
		ITEM_PREV: "sliderItemPrev",
		ITEM_NEXT: "sliderItemNext",
		ITEM_ACTIVE: "sliderItemActive",
		BUTTON: "sliderControl",
		BUTTON_BACK: "sliderControlPrev",
		BUTTON_FOWARD: "sliderControlNext"
	}		
	
		// Контейнер слайдера
		let sliderContainer = document.querySelector(id);

		//Контейнер со слайдами
		let sliderItems = sliderContainer.querySelector(".sliderItems");

		// Список чередующихся элементов слайдера - слайдов
		let sliderItem = sliderContainer.querySelectorAll("." + ClassName.ITEM);

		const sliderCount = sliderItem.length;
		
		
		function indicatorsGenerator() {

			//Генерация индикаторов - создание DOM элементов
			let ol = sliderContainer.querySelector("." + ClassName.INDICATORS);
			
			for ( let i = 0; i < sliderItem.length; i++ ) {
				let li = document.createElement("li");
				li.className = "sliderIndicator";
				ol.appendChild(li);
			};
			
		} //indicatorsGenerator

		indicatorsGenerator();

		//Получим сгенерированный список индикаторов
		let sliderIndicator = sliderContainer.querySelectorAll("." + ClassName.INDICATOR);
				sliderIndicatorStatus = true; //Вспомогательная перемнная для функции indicatorsSwitcher
				sliderIndicatorCounter = 0; //Вспомогательная перемнная для функции indicatorsSwitcher > 2
				sliderIndicatorCounterPrev = sliderIndicatorCounter; //Вспомогательная перемнная для функции indicatorsSwitcher > 2
		

		function indicatorsSwitcher(direction) {
			//Переключатель индикаторов

			//Убираем активный класс со всех индикаторов при каждом клике
			for ( let i = 0; i < sliderIndicator.length; i++ ) {
				sliderIndicator[i].classList.remove(ClassName.INDICATOR_ACTIVE);		
			};

			//Если слайдов всего два
			if (sliderCount == 2) {	

				if (sliderIndicatorStatus == true) {					
					//Устанавливаем активный класс первому индикатору
					sliderIndicator[0].classList.add(ClassName.INDICATOR_ACTIVE);
					sliderIndicatorStatus = false;
				} else {
					//Устанавливаем активный класс второму индикатору
					sliderIndicator[1].classList.add(ClassName.INDICATOR_ACTIVE);
					sliderIndicatorStatus = true;
				};

			}; //If sliderItems.length == 2

			//Если слайдов больше чем два
			if (sliderCount > 2) {				
				
				//Определяем в какую сторону крутится слайдер
				if (direction == "next") {
					
					sliderIndicatorCounter++;

					if (sliderIndicatorCounter == sliderIndicator.length) { sliderIndicatorCounter = 0; };
					
					//Устанавливаем активный класс следующему индикатору
					sliderIndicator[sliderIndicatorCounter].classList.add(ClassName.INDICATOR_ACTIVE);
				
				};
				
				if (direction == "prev") {

					//Устанавливаем счетчик в положение для возможности обратного отсчета, если счетчик равен 0
					if (sliderIndicatorCounter == 0) { sliderIndicatorCounter = sliderIndicator.length } 

					sliderIndicatorCounter--;
		
					//Устанавливаем активный класс предыдущему индикатору
					sliderIndicator[sliderIndicatorCounter].classList.add(ClassName.INDICATOR_ACTIVE);

				};

			}; //If sliderCount > 2
			
		} //function indicatorsSwitcher

		indicatorsSwitcher(); //Выставляем значения индикаторов согласно условию


		//Логика работы отличается для условий: 
		//если нет элементов, если 1 элемент, если 2, если больше 2
		
		//Если элементов нет вообще, то убираем весь блок со слайдером, включая заголовок
		//Проверка URL нужна потому, что элемент DOM mainContainer есть только на странице с конструктором
		// если этой проверки не делать, то на других страница вывод оборудования работать не будет
		if (sliderItem.length == 0 && window.location == "http://localhost:3000/internet/") {
			
			let mainContainer = sliderContainer.querySelector("." + ClassName.MAIN_CONTAINER);
			mainContainer.style.display = "none";

		}
		
		//Если всего один элемент, то делаем его активным и убираем все элементы навигации
		if (sliderItem.length == 1) {

			sliderItem[0].classList.add(ClassName.ITEM_ACTIVE);
			sliderContainer.querySelector("." + ClassName.INDICATORS).style.display = "none";
			sliderContainer.querySelector("." + ClassName.BUTTON_BACK).style.display = "none";
			sliderContainer.querySelector("." + ClassName.BUTTON_FOWARD).style.display = "none";
	
		}

		//Если всего два элемента на странице, то создаем по одному клону каждого
		//чтобы карусель корректно работала
		if (sliderItem.length == 2) {

			let clone1 = sliderItem[0].cloneNode(true);
			sliderItems.appendChild(clone1);

			let clone2 = sliderItem[1].cloneNode(true);
			sliderItems.appendChild(clone2);

			// Еще раз получим список слайдов для того, чтобы обновить длинну списка sliderItem
			sliderItem = sliderContainer.querySelectorAll("." + ClassName.ITEM);
		
		}

	function sliderStarter() {

		//Переменные с помощью которых реализуется смена слайдов
		let position1 = 0; //Контроль индекса текущего слайда
				nextPosition1 = position1 + 1; //Контроль индекса следующего слайда
				prevPosition1 = sliderItem.length - 1; //Контроль индекса предыдущего слайда
			
			
		function drawSlider(first) {
			//Отрисовываем слайдер первый раз

			//Текущему слайду добавляем класс ITEM_ACTIVE
			sliderItem[position1].classList.add(ClassName.ITEM_ACTIVE);

			//Устанавливаем следующий слайд справа в положение готовности
			sliderItem[nextPosition1].classList.add(ClassName.ITEM_NEXT);
			
			//Устанавливаем последний слайд в положение "предыдущий""
			sliderItem[prevPosition1].classList.add(ClassName.ITEM_PREV);

			if (first == true) { //Если функция запускается впервый раз, ставим активный класс первому индикатору
				
				sliderIndicator[position1].classList.add(ClassName.INDICATOR_ACTIVE);
			
			};//if first

		}//function drawSlider

		drawSlider(true);

		function clickSlider() {

		//Все setTimeout внутри следующего if нужны, для того, чтобы при количестве 
		//слайдов 3, крайние слайды незаметно перемещались на противоположные стороны
		//Это перемещение видно из-за того, что при таком количестве крайние слайды минуют
		//стадию display: none и сразу становятся в очередь: либо следующий NEXT либо предыдущий PREV  

		//Получаем стрелки назад и вперед
		let nextButton = sliderContainer.querySelector(".sliderControlNext");
		let prevButton = sliderContainer.querySelector(".sliderControlPrev");

		nextButton.addEventListener("click", function () {
			//Переключение слайдов влево
				
				//Убираем слайд слева
				sliderItem[prevPosition1].classList.remove(ClassName.ITEM_PREV);

				//Смещаем текущий слайд влево
				sliderItem[position1].classList.remove(ClassName.ITEM_ACTIVE);
				sliderItem[position1].classList.add(ClassName.ITEM_PREV);

				//Смещаем следующий слайд на главную позицию
				sliderItem[nextPosition1].classList.remove(ClassName.ITEM_NEXT);
				sliderItem[nextPosition1].classList.add(ClassName.ITEM_ACTIVE);
	
				prevPosition1 = position1; //Меняем индекс предыдущей позиции
				position1 = nextPosition1; //Изменяем значение текущей позиции
				nextPosition1++; //Меняем индекс следующей позиции

				//Если дошли до последнего слайда, то следующий слайд - первый слайд (с индексом 0)
				if (position1 == sliderItem.length - 1) {
					setTimeout(function() {
						sliderItem[0].classList.add(ClassName.ITEM_NEXT);
						nextPosition1 = 0;	
					}, 500);
				};

				setTimeout(function() {
					drawSlider();
				}, 500);

				indicatorsSwitcher("next");

			}); //NEXT

			prevButton.addEventListener("click", function() { 
			
				//Убираем слайд справа
				sliderItem[nextPosition1].classList.remove(ClassName.ITEM_NEXT);
				//Смещаем активный слайд вправо
				sliderItem[position1].classList.remove(ClassName.ITEM_ACTIVE);
				sliderItem[position1].classList.add(ClassName.ITEM_NEXT);
				//Смещаем левый слайд на активную позицию
				sliderItem[prevPosition1].classList.remove(ClassName.ITEM_PREV);
				sliderItem[prevPosition1].classList.add(ClassName.ITEM_ACTIVE);

				//Устанавливаем следующий за ним слайд слева
				//Если текущий слайд с индексом 1, то следующий слайд с индексом 0 , то есть первый
				//Устанавливаем значение переменных в исходное состояние и запускаем функцию инициализатор слайдера
				if (position1 == 1) {					
					position1 = 0;
					nextPosition1 = position1 + 1;
					prevPosition1 = sliderItem.length - 1;
					setTimeout(function() {
						drawSlider();
					}, 500); 
				
				} else { //Идем до конца массива
					
					setTimeout(function() {
						sliderItem[prevPosition1 - 1].classList.add(ClassName.ITEM_PREV);					
						nextPosition1 = position1;//Меняем индекс следующей позиции
						position1 = prevPosition1; //Изменяем значение текущей позиции
						prevPosition1--; //Меняем индекс предыдущей позиции
					}, 500);				
				
				}		

				indicatorsSwitcher("prev");

			}); //PREV

		}//function clickSlider

			clickSlider();

	}	//function sliderStarter
	
	sliderStarter();

}//function slider2

//НЕ ОТНОСЯЩИЙСЯ К КОНСТРУКТОРУ КОД

function clearIswitchersServicesPlus() {
	/*
	 * Переводит свитчеры в положение выкл на странице дополнительных сервисов (не на конструкторе)
	*/

		//Получим основной контейнер
		let mainContainer = document.querySelector("#js_clearIswitchersServicesPlus");
		//Получим свитчеры сервисов
		let switcherPlate = mainContainer.querySelectorAll(".iswitcherPlate");
		let switcherButton = mainContainer.querySelectorAll(".ISwitch");

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

} //function clearIswitchersServicesPlus()

function clearIswitchersTV() {
	/*
	 * Переводит свитчеры в положение выкл на странице ТВ тарифов (не на конструкторе)
	*/

		//Получим основной контейнер
		mainContainer = document.querySelector("#js_clearIswitchersTV");	
		//Получим свитчеры дополнительных услуг
		let switcherPlate = mainContainer.querySelectorAll(".iswitcherPlate");
		let switcherButton = mainContainer.querySelectorAll(".ISwitch");

		//Перебираем switcherPlate на предмет поиска активного класса, то есть - кнопка включена
		for ( let i = 0; i < switcherPlate.length; i++ ) {
			if (switcherPlate[i].classList.contains("activeSwitcherPlateOrange")) {
				//Отключаем все кнопки с активным классом
				iSwitcherLightOff(switcherButton[i], switcherPlate[i], "activeSwitcherPlateOrange");
			};
		};

}
	
function clearSwitchersEq() {
	/*
	 * Переводит свитчеры в положение выкл на странице оборудование (не на конструкторе)
	*/

		//Получим основной контейнер
		let mainContainer = document.querySelector("#js_clearSwitchersEq");
		//Получим свитчеры оборудования
		switcherButton = mainContainer.querySelectorAll(".ISwitch");
		switcherPlate = mainContainer.querySelectorAll(".iswitcherPlate");
		//Перебираем switcherPlate на предмет поиска активного класса, то есть - кнопка включена
		for ( let i = 0; i < switcherPlate.length; i++ ) {
			if (switcherPlate[i].classList.contains("activeSwitcherPlateOrange")) {
				//Отключаем все кнопки с активным классом
				iSwitcherLightOff(switcherButton[i], switcherPlate[i], "activeSwitcherPlateOrange");
			};
		};
}