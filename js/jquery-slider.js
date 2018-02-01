




$(function ($) {					    //чтобы $ не конфликтовал с другими библиотеками, которые тоже могут использовать символ доллара, оборачиваем объект
	$.fn.carousel = function(options) {	//jQuery в непосредственно выполняемую функцию-выражение , которое связывает объект jQuery с символом "$", 
									    //чтобы он не был переопределён другой библиотекой во время выполнения. 
		


		var settings = $.extend({//указываем настройки по умолчанию(если не заданы пользователем) и перезаписываем их если такие были заданы
			duration: 500,
			fontSize: '18px',
			fontColor: 'black',
			wrap: ''
		}, options);	

		var paragraph = $('.carousel-list p');//применяем настройки
			paragraph.css('font-size', settings.fontSize);
			paragraph.css('color', settings.fontColor);

		var pixelOffset = $('.carousel-element').width();//ширина одного елемента карусели(картинка с падингом)
		var curentLeftValue = 0;

		var $leftButton = $('.left');
		var $rightButton = $('.right');
		var $carouselList = $('.carousel-list');
		var elementsCount = $carouselList.find('li').length;//количество элементов в карусели
		var minimumOffset = -((elementsCount - 3)*pixelOffset);//максимальный отступ влево
		var maximumOffset = 0;//максимальный отступ вправо




		$leftButton.on('click', function() {

			if (curentLeftValue != minimumOffset) {//если левый отступ не достиг максимального значения
				curentLeftValue -=pixelOffset;//уменьшаем переменную на размер одного елеммента карусели
				$carouselList.animate({	left : curentLeftValue + "px"}, settings.duration, 'linear');//сдвигаем карусель влево на один элемент

			} else if(settings.wrap == 'circular') {//если пользователь захотел "замкнутую" карусель
						curentLeftValue = curentLeftValue - minimumOffset;
						$carouselList.animate({	left : curentLeftValue + "px"}, settings.duration, 'linear');//возвращаем в ноль когда отступ доходит до максимального значения
					};
		});



		$rightButton.on('click', function() {
			if (curentLeftValue != maximumOffset) {
				curentLeftValue += pixelOffset;
				$carouselList.animate({	left : curentLeftValue + "px"}, settings.duration, 'linear');
			} else if(settings.wrap == 'circular') {
						curentLeftValue = curentLeftValue + minimumOffset;
						$carouselList.animate({	left : curentLeftValue + "px"}, settings.duration, 'linear');						
					};

		});


		return this;		




	};
}) (jQuery);
