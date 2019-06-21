//Accordion

let accordion = (function() {


console.log("test");
//Настройки

//Получаем данные из DOM
var button = document.querySelectorAll("questionTitle"); //Имя класса кнопки
var panel = document.querySelectorAll("questionText"); //Имя класса блока с текстом

var n = button.length; //Длинна массивов для счетчиков

var active = "faqActive"; //Класс активной кнопки

//****************

setFunc(); //Запускаем работу аккордеона

function setFunc() {
		
		//Вешаем на каждый елемент button функцию accordion
		for ( var i = 0; i < button.length; i++ ) {
			button[i].addEventListener("click", function(){
				accordion(event, true); //true - false меняет стиль работы аккордиона 
			}, false);
		}

}

function accordion(e, style) {
		/* 
		 * Функция реализует работу переключения вкладок 
		 * в стиле "аккордион" для
		 * html структуры следующего вида:
		
		 * <button class="accordion">Long long title</button>
		 * <div class="panel">
		 * <p>Lorem ipsum dolor sit amet...</p>
		 * </div>
		*/

		//Получаем высоту скрытого элемента для последующего
		//использования этой величины в стилях для раскрытия блока
		var panelHeight = event.target.nextElementSibling.scrollHeight;

		//Проверяем открыта ли с прошлого раза вкладка, на которой кликнули
		if (event.target.classList.contains(active)) {
			//Если да, то закрываем её
			event.target.classList.toggle(active);
			event.target.nextElementSibling.style.maxHeight = null;
		
		} else {
			//Если вкладка не открыта
			for ( var i = 0; i < n; i++ ) {
				/*
				 * Проверяем настройки принципа работы аккордиона
				 * Если true, то закрываем все вкладки перед открытием новой
				 * если false, то просто открываем нужную вкладку и не закрываем открытые
				*/
				
				if ( style ) {
					//Переводим все элементы в неактивное состояние			
					button[i].classList.remove(active);
					panel[i].style.maxHeight = null;
				};

			}; //for
			
			//Добавляем нужные классы для раскрытия блока
			event.target.classList.add(active); //Цвет активной кнопки			
			event.target.nextElementSibling.style.maxHeight = panelHeight + "px";
		
		}; //if else

}


}());//accordion

