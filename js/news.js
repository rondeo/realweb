
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

	container.forEach( item => item.scrollHeight > max ? max = item.offsetHeight : false );

	container.forEach( item => item.style.height = max + 'px' ); 
}

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

	img.forEach(item => { item.style.display = "none" });

	sign.forEach(item => { item.style.display = "" });
}

newsIndexPageNotHome();
newsEqualHeightStarter();
