'use strict'

let burger_btn = document.getElementById("btn_burger"); // кнопка бургер
let block_menu = document.getElementById("block_burger-menu"); // блок содержащий меню

// добавляем обработчик события *клика* кнопке *бургер*
burger_btn.addEventListener("click", function(){
   
    // проверяем состояние меню (открыто или скрыто), чтобы либо открыть его, либо скрыть
    if(block_menu.classList.contains('opened')){
        // закрываем
        block_menu.classList.replace('opened', 'hidden');

        // проверяем - не с телефона ли открыто приложение
        // если нет, то назначаем обычную анимацию, а иначе анимацию для мобилок
        if(window.screen.width > 460)
            block_menu.style.animationName = 'anim-burger-close';
        else    
            block_menu.style.animationName = 'anim-burger-mob-close';
    }
    else{
        // открываем
        block_menu.classList.replace('hidden', 'opened');

        // проверяем - не с телефона ли открыто приложение
        // если нет, то назначаем обычную анимацию, а иначе анимацию для мобилок
        if(window.screen.width > 460)
            block_menu.style.animationName = 'anim-burger-open';
        else
            block_menu.style.animationName = 'anim-burger-mob-open';
    }

});

// добавляем обработчик события *наведения* мыши на пункт меню
// показывает всплывающую подсказку
block_menu.querySelectorAll("li").forEach((el)=>{
    el.addEventListener("mouseover", function(){
        if(!block_menu.classList.contains("opened"))
            this.style.overflow = "visible";
    });

    el.addEventListener("mouseleave", function(){
        this.style.overflow = "hidden";
    });
});

let btnLogOut = document.getElementsByClassName("burger-menu__logoutbtn")[0];
btnLogOut.addEventListener("mouseover", function(){
    this.style.overflow = "visible";
});

btnLogOut.addEventListener("mouseleave", function(){
    this.style.overflow = "hidden";
});