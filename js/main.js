// onload - событие загрузки страницы
window.onload = function () {

    // Прелоадер 
    setTimeout(function () {
        var preloader = document.getElementById('page-preloader');

        if (!preloader.classList.contains("done")) {
            preloader.classList.add("done"); // Если нету класса "done" у элемента, то мы его добавляем
        }
    }, 1000)

    // Кнопка прокрутки страницы вверх
    var btn = document.querySelector(".to-top");
    var toTop = document.querySelector(".header")

    window.addEventListener('scroll', function showScroll() {
        var scroll = (innerHTML = pageYOffset);
        if (scroll > 300) {
            btn.classList.add("top") //Добавление класса к элементу 
        } else {
            btn.classList.remove("top") //Удаление класса с элемента 
        }


    });

    // Плавная прокрутка вверх
    var scrolled;
    var timer;

    btn.onclick = function () {
        scrolled = window.pageYOffset; // на какое кол-во px прокручена страница
        scrollToTop() // вызов функции
    };

    function scrollToTop() {
        if (scrolled > 0) {
            window.scrollTo(0, scrolled)
            scrolled = scrolled - 1500;  //1500 - скрость прокрутки
            timer = setTimeout(scrollToTop, 100); // 100 - промежуток (между запуском) в милисекундах 
        } else {
            clearTimeout(timer);
            window.scrollTo(0, 0); // Скролл до начала страницы scrollTo(x, y)
        }
    };

    //burger menu 
    var burger = document.querySelector('.burger');
    var hederMenu = document.querySelector('.header__menu');
    var cross = document.querySelector('.cross');

    burger.onclick = function () {
        burger.classList.add('active');        //Добавление класса при нажатии на бургер меню 
        hederMenu.classList.add('active');
        document.body.classList.add('no__scroll');
    };

    cross.onclick = function () {
        burger.classList.remove('active');      //Удаление класса при нажатии на крестик
        hederMenu.classList.remove('active');
        document.body.classList.remove('no__scroll');
    };

};