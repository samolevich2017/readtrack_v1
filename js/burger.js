'use strict'

let burger_btn = document.getElementById("btn_burger"); // кнопка бургер
let block_menu = document.getElementById("block_burger-menu"); // блок содержащий меню

// добавляем обработчик события *клика* кнопке *бургер*
burger_btn.addEventListener("click", function(){
   
    // проверяем состояние меню (открыто или скрыто), чтобы либо открыть его, либо скрыть
    if(block_menu.classList.contains('opened')){
        // закрываем
        block_menu.classList.replace('opened', 'hidden');
        block_menu.style.animationName = 'anim-burger-close';
    }
    else{
        // открываем
        block_menu.classList.replace('hidden', 'opened');
        block_menu.style.animationName = 'anim-burger-open';
    }

});