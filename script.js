$('.accordion__title').click(function () {
    $(this).closest('.accordion__item').siblings().removeClass('active').find('.accordion__content').slideUp(400);
    $(this).closest('.accordion__item').toggleClass('active').find('.accordion__content').slideToggle(400);
    return false;
});

// Mobile Footer


var mainListDiv = document.getElementById("mainListDiv"),
mediaButton = document.getElementById("mediaButton");

mediaButton.onclick = function () {

"use strict";

mainListDiv.classList.toggle("show_list");
mediaButton.classList.toggle("active");

};

$('.navTrigger').click(function () {
$(this).toggleClass('active');
console.log("Clicked menu");
$("#mainListDiv").toggleClass("show_list");
$("#mainListDiv").fadeIn();

});

