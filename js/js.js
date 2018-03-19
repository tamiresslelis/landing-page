$(document).ready(function () {
//change color navbar
$(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('.navbar').css("background-color", "#004e66")
            } else {
                $('.navbar').css("background-color", "transparent" )
            }
});

$(function() {
  $('.carousel').carousel(function(){
       interval: 300
   });
 });
});
