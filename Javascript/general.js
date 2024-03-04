$(document).ready(function () {

    $("#minuteurCont, #chronometreCont, #reveilCont").slideUp(0);

/*** Nav **/

    $("#horloge").on("click", function(){
        $(".icon").removeClass("iconActive");
        $(this).addClass("iconActive");
        $("#minuteurCont, #chronometreCont, #reveilCont").slideUp();
        $("#horlogeCont").slideDown();
        $("#navBarre").animate({
            'width': $(this).width(),
             'left': $(this).position().left}
          ,'fast')
    })
    $("#chronometre").on("click", function(){
        $(".icon").removeClass("iconActive");
        $(this).addClass("iconActive");
        $("#minuteurCont, #horlogeCont, #reveilCont").slideUp();
        $("#chronometreCont").slideDown();
        $("#navBarre").animate({
            'width': $(this).width(),
             'left': $(this).position().left}
          ,'fast')
    })
    $("#minuteur").on("click", function(){
        $(".icon").removeClass("iconActive");
        $(this).addClass("iconActive");
        $("#chronometreCont, #horlogeCont, #reveilCont").slideUp();
        $("#minuteurCont").slideDown();
        $("#navBarre").animate({
            'width': $(this).width(),
             'left': $(this).position().left}
          ,'fast')
    })
    $("#reveil").on("click", function(){
        $(".icon").removeClass("iconActive");
        $(this).addClass("iconActive");
        $("#chronometreCont, #horlogeCont, #minuteurCont").slideUp();
        $("#revilCont").slideDown();
        $("#navBarre").animate({
            'width': $(this).width(),
             'left': $(this).position().left}
          ,'fast')
    })







})