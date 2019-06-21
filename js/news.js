
/*
 * Одинаковая высота новостных блоков
*/

function newsEqualHeightStarter() {
	if (window.location == `${homeUrl}/` || window.location == `${homeUrl}/news/`) {
		newsEqualHeight();
	}
}

function newsEqualHeight() {

	

	let container = document.querySelectorAll(".newsItem");
	let max = 0;

	for (let i = 0; i < container.length; i++) {
		if (container[i].scrollHeight > max) {
			max = container[i].offsetHeight;
		};
	};

	for (let i = 0; i < container.length; i++) {
		container[i].style.height = max + "px";
	};



}//function newsEqualHeight



/*
 * Убираем изображение, если новости грузятся на главной
 * и показываем надпись "новости иобъявления realweb над датой" (sign)
*/

function newsIndexPageNotHome() {
	if (window.location != `${homeUrl}/news/`) {
		newsIndexPage();
	};
}

function newsIndexPage() {

	let img = document.querySelectorAll(".newsItem_img");
	let sign = document.querySelectorAll(".newsItem_sign");

	for (let i = 0; i < img.length; i++ ) {
		img[i].style.display = "none";
		sign[i].style.display = "";
	};

}//function newsIndexPage



newsEqualHeightStarter();

newsIndexPageNotHome();