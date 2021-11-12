//главное меню и слайдер Интерьер/Кухня

const list = document.querySelectorAll('.menu__item-link');
const active = document.querySelector('.menu__item-link--active');
const activeSlider = document.querySelector('.slider__items--active');
const activeItem = document.querySelectorAll('.slider__item--active');
const sliderItem = document.querySelectorAll('.slider__item');
const interiorSlider = document.querySelector('.slider__interior');
const interiorItem = document.querySelectorAll('.slider__interior-item');
const cookingSlider = document.querySelector('.slider__cooking');
const cookingItem = document.querySelectorAll('.slider__cooking-item');

///красная черта при клике на позицию меню
list.forEach(item =>{ 
  item.addEventListener('click', (e) =>{
  e.preventDefault(); 
  list.forEach(el=>{ el.classList.remove('menu__item-link--active'); });
  item.classList.add('menu__item-link--active')

  const id = item.id;
  console.log(id)

  if (id == "menu" || id == "wine") {
  sliderItem.forEach(el=>{ el.classList.add('slider__item--opacity'); });
  } else {
  sliderItem.forEach(el=>{ el.classList.remove('slider__item--opacity'); }); 
  }
})
})


//замена слайдов при клике на позицию меню Кухня
const cooking = document.querySelector('#cooking');

cooking.addEventListener('click', (e) =>{
  e.preventDefault(); 
  cookingSlider.classList.add('slider__items--active')
  cookingItem.forEach(el=>{ el.classList.add('slider__item--active'); });
  activeSlider.classList.remove('slider__items--active')
  activeItem.forEach(el=>{ el.classList.remove('slider__item--active'); });
  menuPage.classList.remove('menu__page--active')
  menuPageWine.classList.remove('menu__wine--active')

////смена слайдов по кнопкам при активной позиции Кухня

  const buttons = document.querySelectorAll(".slider__button");
const slider = document.querySelector(".slider__items--active");
const items = document.querySelectorAll(".slider__item--active");


const sliderFunction = (duration, itemWidth, itemSWidth) => {
  const currentLeft = 
  window.getComputedStyle(slider).left.split('px') [0] * 1 || 0
  const lengthEnd = 
  itemSWidth + window.getComputedStyle(slider).left.split('px') [0] * 1 || 0
  let left = 0;

  if(duration == "right") {
 
    if(lengthEnd > itemWidth) {
      console.log(lengthEnd)
      console.log(itemWidth)
      left = currentLeft - itemWidth;
    } else {
      left = 0;
    }
    slider.style.left = left + "px";
  } else {
    if(lengthEnd == itemSWidth) {
      left = itemWidth - itemSWidth;
      slider.style.left = left + "px";
    } else {
      left = currentLeft + itemWidth;
    }
    slider.style.left = left + "px";
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const itemWidth = items[0].offsetWidth;
    const itemSWidth = items.length * itemWidth;
    let duration = '';

    if(e.currentTarget.classList.contains('slider__button--left')) {
     duration = 'left'
    } else {
     duration = 'right'
    }
    sliderFunction(duration, itemWidth, itemSWidth)
  });
});

})


//замена слайдов при переключении с Кухни на Интерьер 
const interior = document.querySelector('#interior');

interior.addEventListener('click', (e) =>{
e.preventDefault();  
interiorSlider.classList.add('slider__items--active')
interiorItem.forEach(el=>{ el.classList.add('slider__item--active'); });
cookingSlider.classList.remove('slider__items--active')
cookingItem.forEach(el=>{ el.classList.remove('slider__item--active'); });
menuPage.classList.remove('menu__page--active')
menuPageWine.classList.remove('menu__wine--active')
});


  //открытие блока с меню при клике на позицию Меню
  const menuMenu = document.querySelector('#menu');
  const menuPage = document.querySelector('.menu__page');
  const menuPageWine = document.querySelector('.menu__wine');

  menuMenu.addEventListener('click', (e) =>{
    e.preventDefault(); 
    menuPage.classList.add('menu__page--active')
    menuPageWine.classList.remove('menu__wine--active')
  })

 //открытие блока с меню при клике на позицию Вина по бокалам
   const menuWine = document.querySelector('#wine');

 
   menuWine.addEventListener('click', (e) =>{
     e.preventDefault(); 
     menuPage.classList.remove('menu__page--active')
     menuPageWine.classList.add('menu__wine--active')
   })


  

  ///открытая позиция Меню - выбор позиций

const menuPageItem = document.querySelectorAll('.menu__page-item');
const menuPageItemBlock = document.querySelectorAll('.menu__page-item-block');

menuPageItem.forEach(item =>{ 
  item.addEventListener('click', (e) =>{
  e.preventDefault(); 
  menuPageItem.forEach(el=>{ el.classList.remove('menu__page-item--active'); });
  item.classList.add('menu__page-item--active') 
  console.log(item.children)

  const menuPageItemBlockActive = item.children;
  for(var i=0; i < menuPageItemBlockActive.length; i++) {
    menuPageItemBlock.forEach(el=>{ el.classList.remove('menu__page-item-block--active'); });
    menuPageItemBlockActive[i].classList.add('menu__page-item-block--active')
  }
  })
})

 ///открытая позиция Вина по бокалам - выбор позиций

 const menuWineItem = document.querySelectorAll('.menu__wine-item');
 const menuWineItemBlock = document.querySelectorAll('.menu__wine-item-block');
 
 menuWineItem.forEach(item =>{ 
   item.addEventListener('click', (e) =>{
   e.preventDefault(); 
   menuWineItem.forEach(el=>{ el.classList.remove('menu__wine-item--active'); });
   item.classList.add('menu__wine-item--active') 
   console.log(item.children)
 
   const menuWineItemBlockActive = item.children;
   for(var i=0; i < menuWineItemBlockActive.length; i++) {
    menuWineItemBlock.forEach(el=>{ el.classList.remove('menu__wine-item-block--active'); });
    menuWineItemBlockActive[i].classList.add('menu__wine-item-block--active')
   }
   })
 })




//смена слайдов по кнопкам 

const buttons = document.querySelectorAll(".slider__button");
const slider = document.querySelector(".slider__items--active");
const items = document.querySelectorAll(".slider__item--active");


const sliderFunction = (duration, itemWidth, itemSWidth) => {
  const currentLeft = 
  window.getComputedStyle(slider).left.split('px') [0] * 1 || 0
  const lengthEnd = 
  itemSWidth + window.getComputedStyle(slider).left.split('px') [0] * 1 || 0
  let left = 0;

  if(duration == "right") {
 
    if(lengthEnd > itemWidth) {
      console.log(lengthEnd)
      console.log(itemWidth)
      left = currentLeft - itemWidth;
    } else {
      left = 0;
    }
    slider.style.left = left + "px";
  } else {
    if(lengthEnd == itemSWidth) {
      left = itemWidth - itemSWidth;
      slider.style.left = left + "px";
    } else {
      left = currentLeft + itemWidth;
    }
    slider.style.left = left + "px";
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const itemWidth = items[0].offsetWidth;
    const itemSWidth = items.length * itemWidth;
    let duration = '';

    if(e.currentTarget.classList.contains('slider__button--left')) {
     duration = 'left'
    } else {
     duration = 'right'
    }
    sliderFunction(duration, itemWidth, itemSWidth)
  });
});




  


/* Локализация datepicker */
 $.datepicker.regional['ru'] = {
	closeText: 'Закрыть',
	prevText: 'Предыдущий',
	nextText: 'Следующий',
	currentText: 'Сегодня',
	monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
	monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
	dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
	dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
	dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
	weekHeader: 'Не',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''
};
$.datepicker.setDefaults($.datepicker.regional['ru']);

/* подключение datepicker для поля ввода даты в Бронировании*/
 $( function() {
  $("#datepicker").datepicker({
    showOn: "both",
		buttonImage: "https://snipp.ru/demo/437/calendar.gif",
		buttonImageOnly: true,
		buttonText: "Выбрать дату",
    minDate: 0});
});

$(function(){
	$("#datepicker").datepicker({
		onSelect: function(date){
			$('#datepicker_value').val(date)
		}
	});
	$("#datepicker").datepicker("setDate", $('#datepicker_value').val());
});


////открытие и закрытие окна бронирования
const buttonBooking = document.querySelector('.button--booking');
const booking = document.querySelector('.booking');
 
  buttonBooking.addEventListener('click', (e) =>{
   e.preventDefault(); 
   booking.classList.add('booking--active')
   buttonBooking.classList.remove('button--booking--active')
  });

const bookingClose = document.querySelector('.booking__close');

  bookingClose.addEventListener('click', (e) =>{
    e.preventDefault(); 
    booking.classList.remove('booking--active')
    buttonBooking.classList.add('button--booking--active')
   });


   ////открытие и закрытие главного меню mobile
const hamburger = document.querySelector('.hamburger');
const menuMobile = document.querySelector('.menu-mobile');
const sliderMobile = document.querySelector('.slider');
 
hamburger.addEventListener('click', (e) =>{
   e.preventDefault(); 

   if (hamburger.classList.contains("hamburger--active")) {
    menuMobile.classList.remove('menu-mobile--active')
    sliderMobile.classList.remove('slider--mobile')
    hamburger.classList.remove('hamburger--active')

    const menuPage = document.querySelector('.menu__page');
    const menuPageItem = document.querySelectorAll('.menu__page-item');
    const menuPageItemBlock = document.querySelectorAll('.menu__page-item-block');
    const activeItem = document.querySelectorAll('.slider__item--active');

    menuPage.classList.remove('menu__page--active');
    menuPageItem.forEach(el=>{ el.classList.remove('menu__page-item--active')});
    menuPageItemBlock.forEach(el=>{ el.classList.remove('menu__page-item-block--active')});
    activeItem.forEach(el=>{ el.classList.remove('slider__item--opacity')});


    const menuWine = document.querySelector('.menu__wine');
    const menuWineItem = document.querySelectorAll('.menu__wine-item');
    const menuWineItemBlock = document.querySelectorAll('.menu__wine-item-block');
     menuWine.classList.remove('menu__wine--active');
     menuWineItem.forEach(el=>{ el.classList.remove('menu__wine-item--active')});
     menuWineItemBlock.forEach(el=>{ el.classList.remove('menu__wine-item-block--active')});


   } else {
    menuMobile.classList.add('menu-mobile--active')
    sliderMobile.classList.add('slider--mobile')
    hamburger.classList.add('hamburger--active')
   } 
 });


 //// Клик по позиции меню Бронирование на мобильном 

const bookingMobile = document.querySelector('#booking-mobile');

bookingMobile.addEventListener('click', (e) =>{
   e.preventDefault(); 
   const booking = document.querySelector('.booking');
   booking.classList.add('booking--active')
  });





 

///Клик по позиции меню Кухня на мобильном 


const cookingMobile = document.querySelector('#cooking-mobile');

cookingMobile.addEventListener('click', (e) =>{ 
     e.preventDefault(); 
     menuMobile.classList.remove('menu-mobile--active')
     sliderMobile.classList.remove('slider--mobile')
     hamburger.classList.remove('hamburger--active')
     activeSlider.classList.remove('slider__items--active')
     activeItem.forEach(el=>{ el.classList.remove('slider__item--active'); });
     cookingSlider.classList.add('slider__items--active')
     cookingItem.forEach(el=>{ el.classList.add('slider__item--active'); });
  

 
    }
 )


 //открытие блока с меню на мобильном при клике на позицию Меню


 const menuMenuMobile = document.querySelector('#menu-mobile');

 menuMenuMobile.addEventListener('click', (e) => {
   e.preventDefault();
   
   const menuPage = document.querySelector('.menu__page');
   const menuPageItem = document.querySelectorAll('.menu__page-item');
   const menuPageItemBlock = document.querySelectorAll('.menu__page-item-block');
   const activeItem = document.querySelectorAll('.slider__item--active');
  menuMobile.classList.remove('menu-mobile--active')
  sliderMobile.classList.remove('slider--mobile')
  hamburger.classList.add('hamburger--active')
  menuPage.classList.add('menu__page--active');
  menuPageItem.forEach(el=>{ el.classList.add('menu__page-item--active')});
  menuPageItemBlock.forEach(el=>{ el.classList.add('menu__page-item-block--active')});
  activeItem.forEach(el=>{ el.classList.add('slider__item--opacity')});
 })


 //открытие блока на мобильном при клике на позицию Вина по бокалам


 const menuWineMobile = document.querySelector('#wine-mobile');

 menuWineMobile.addEventListener('click', (e) => {
   e.preventDefault();
   
   const menuWine = document.querySelector('.menu__wine');
   const menuWineItem = document.querySelectorAll('.menu__wine-item');
   const menuWineItemBlock = document.querySelectorAll('.menu__wine-item-block');
   const activeItem = document.querySelectorAll('.slider__item--active');
  menuMobile.classList.remove('menu-mobile--active')
  sliderMobile.classList.remove('slider--mobile')
  hamburger.classList.add('hamburger--active')
  menuWine.classList.add('menu__wine--active');
  menuWineItem.forEach(el=>{ el.classList.add('menu__wine-item--active')});
  menuWineItemBlock.forEach(el=>{ el.classList.add('menu__wine-item-block--active')});
  activeItem.forEach(el=>{ el.classList.add('slider__item--opacity')});
 })




