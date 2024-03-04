$(document).ready(function () {

/*** Nav **/

    $("#horloge").on("click", function(){
        $(".icon").removeClass("iconActive");
        $(this).addClass("iconActive");
        $(".clock").slideDown();
        $("#navBarre").animate({
            'width': $(this).width(),
             'left': $(this).position().left}
          ,'fast')
    })
    $("#chronometre").on("click", function(){
        $(".icon").removeClass("iconActive");
        $(this).addClass("iconActive");
        $(".clock").slideUp();
        $("#navBarre").animate({
            'width': $(this).width(),
             'left': $(this).position().left}
          ,'fast')
    })
    $("#minuteur").on("click", function(){
        $(".icon").removeClass("iconActive");
        $(this).addClass("iconActive");
        $("#navBarre").animate({
            'width': $(this).width(),
             'left': $(this).position().left}
          ,'fast')
    })
    $("#reveil").on("click", function(){
        $(".icon").removeClass("iconActive");
        $(this).addClass("iconActive");
        $("#navBarre").animate({
            'width': $(this).width(),
             'left': $(this).position().left}
          ,'fast')
    })







})