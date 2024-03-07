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
          ,'fast');
        $("#navBarre").css("background-color", "#00b894");
    })
    $("#chronometre").on("click", function(){
        $(".icon").removeClass("iconActive");
        $(this).addClass("iconActive");
        $("#minuteurCont, #horlogeCont, #reveilCont").slideUp();
        $("#chronometreCont").slideDown();
        $("#navBarre").animate({
            'width': $(this).width(),
             'left': $(this).position().left}
          ,'fast');
          $("#navBarre").css("background-color", "#0984e3");
    })
    $("#minuteur").on("click", function(){
        $(".icon").removeClass("iconActive");
        $(this).addClass("iconActive");
        $("#chronometreCont, #horlogeCont, #reveilCont").slideUp();
        $("#minuteurCont").slideDown();
        $("#navBarre").animate({
            'width': $(this).width(),
             'left': $(this).position().left}
          ,'fast');
          $("#navBarre").css("background-color", "#e84393");
    })
    $("#reveil").on("click", function(){
        $(".icon").removeClass("iconActive");
        $(this).addClass("iconActive");
        $("#chronometreCont, #horlogeCont, #minuteurCont").slideUp();
        $("#reveilCont").slideDown();
        $("#navBarre").animate({
            'width': $(this).width(),
             'left': $(this).position().left}
          ,'fast');
          $("#navBarre").css("background-color", "#e17055");
    })

})