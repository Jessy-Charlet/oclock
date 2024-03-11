$(document).ready(function () {

    /*** Fermeture des autres modules (on laisse l'horloge qui est l'accueil) */
    $("#minuteurCont, #chronometreCont, #reveilCont").slideUp(0);
    var menuPos = 1;

    /*** Gestion du menu */

    /*** Horloge */
    $("#horloge").on("click", function () {
        horloge();
    })

    function horloge() {
        $(".icon").removeClass("iconActive");
        $("#horloge").addClass("iconActive");
        $("#minuteurCont, #chronometreCont, #reveilCont").slideUp();
        $("#horlogeCont").slideDown();
        $("#navBarre").animate({
            'width': $("#horloge").width(),
            'left': $("#horloge").position().left
        }
            , 'fast');
        $("#navBarre").css("background-color", "#00b894");
        menuPos = 1;
    }

    /*** Chronometre */
    $("#chronometre").on("click", function () {
        chrono();
    })

    function chrono() {
        $(".icon").removeClass("iconActive");
        $("#chronometre").addClass("iconActive");
        $("#minuteurCont, #horlogeCont, #reveilCont").slideUp();
        $("#chronometreCont").slideDown();
        $("#navBarre").animate({
            'width': $("#chronometre").width(),
            'left': $("#chronometre").position().left
        }
            , 'fast');
        $("#navBarre").css("background-color", "#0984e3");
        menuPos = 2;
    }

    /*** Minuteur */
    $("#minuteur").on("click", function () {
        minuteur();
    })

    function minuteur() {
        $(".icon").removeClass("iconActive");
        $("#minuteur").addClass("iconActive");
        $("#chronometreCont, #horlogeCont, #reveilCont").slideUp();
        $("#minuteurCont").slideDown();
        $("#navBarre").animate({
            'width': $("#minuteur").width(),
            'left': $("#minuteur").position().left
        }
            , 'fast');
        $("#navBarre").css("background-color", "#e84393");
        menuPos = 3;
    }

    /*** Reveil */
    $("#reveil").on("click", function () {
        reveil();
    })
    function reveil() {
        $(".icon").removeClass("iconActive");
        $("#reveil").addClass("iconActive");
        $("#chronometreCont, #horlogeCont, #minuteurCont").slideUp();
        $("#reveilCont").slideDown();
        $("#navBarre").animate({
            'width': $("#reveil").width(),
            'left': $("#reveil").position().left
        }
            , 'fast');
        $("#navBarre").css("background-color", "#e17055");
        menuPos = 4;
    }


    /*** Mouvements tactiles -------------------------------------------------------- */

    var distance = 60;

    // Au premier point de contact
    window.addEventListener("touchstart", function (evt) {
        // Récupère les "touches" effectuées
        var touches = evt.changedTouches[0];
        startX = touches.pageX;
        between = 0;
    }, false);

    // Quand les points de contact sont en mouvement
    window.addEventListener("touchmove", function (evt) {
        // Limite les effets de bord avec le tactile...
        evt.preventDefault();
        evt.stopPropagation();
    }, false);

    // Quand le contact s'arrête
    window.addEventListener("touchend", function (evt) {
        var touches = evt.changedTouches[0];
        var between = touches.pageX - startX;

        // Détection de la direction
        if (between > 0) {
            var orientation = "droite";
        } else {
            var orientation = "gauche";
        };



        if (Math.abs(between) >= distance && orientation == "gauche") {

            switch (menuPos) {
                case 1:
                    chrono();
                    break;
                case 2:
                    minuteur();
                    break;
                case 3:
                    reveil();
                    break;
                case 4:
                    break;
            }
        }
        if (Math.abs(between) >= distance && orientation == "droite") {
            switch (menuPos) {
                case 1:
                    break;
                case 2:
                    horloge();
                    break;
                case 3:
                    chrono();
                    break;
                case 4:
                    minuteur();
                    break;
            }
        }
    }, false);



})