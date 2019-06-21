(function() {

function _(id) { return document.getElementById(id) }

	let btnBlock = _('buttonBlock');
	let btn = _('btn-all');
	let btnInternet = _('btn-internet');
	let btnTV = _('btn-tv');
	let container = _('js_clearSwitchersEq');

	btnBlock.addEventListener('click', function({target}) {

		container.innerHTML = '';

		let cat = 0;

		let xhr = new XMLHttpRequest();

		if (target.id === 'btn-all') {
			cat = 11;
		} else if (target.id === 'btn-internet') {
			cat = 15;
		} else if (target.id === 'btn-tv') {
			cat = 16;
		}

		xhr.open('GET', `http://localhost:3000/wp-json/wp/v2/posts?categories=${cat}`);

		xhr.onload = function() {
			if (this.status === 200) {
				let data = JSON.parse(this.responseText);

				data.forEach((item, index) => {
					container.innerHTML +=
					`
					<div class="eq-subWrapper">

					<div class="eq-ItemContainer">

					<div class="eq-ItemLeft">

					<div class="eq-ItemLeftImgContainer">
					<img class="eq-ItemImg" src="${data[index].acf['eq-img']}">
					<p class="eq-ItemPrice"><span class="eq-itemPriceNum" data-item-price="${data[index].acf['eq-price']}">${data[index].acf['eq-price']}</span><span> руб.</span></p>
					</div>
					
					<div class="eq-ItemLeftTitleContainer">						
					<p class="eq-ItemTitle">${data[index].acf['eq-name']}</p>
					<p class="eq-ItemSubtitle">${data[index].acf['eq-short-text']}</p>

					<div class="iswitcherAddItem">							
					<p>Добавить</p>								
					<div class="iswitcherPlate" data-item-type="eq-item-plate"  data-item-name="${data[index].acf['eq-name']}">							
					<button class="ISwitch" data-item-type="eq-item-button"></button>
					</div>						
					</div>
					
					</div>


					</div>

					<div class="eq-ItemRight">
					${data[index].acf['eq-text']}
					</div>

					</div>
					</div>
					`;

				});
	
			} else {
				console.error('error');	
			}
		}  

		xhr.send();
	});
		

}());