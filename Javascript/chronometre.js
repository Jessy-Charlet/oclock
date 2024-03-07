$(document).ready(function () {
    let chrono = document.getElementById("chronometreGeneral");
    let resetBtn = document.getElementById("chronometreReset");
    let tourBtn = document.getElementById("chronometreTours");
    let startBtn = document.getElementById("chronometrePlay");


    let secondes = 0;
    let minutes = 0;
    let heures = 0;
    let tours = 0;

    let timeout;

    let estArrete = true;

    $("#chronometreTours").hide();
    $("#chronometreReset").hide();

    function affichage(secondes, minutes, heures){
        if (secondes < 10) {
            secondes = "0" + secondes;
        }

        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        if (heures < 10) {
            heures = "0" + heures;
        }
    }



    $("#chronometrePlay").on("click", function(){
        $(this).hide();
        $("#chronometreTours").show();
        $("#chronometreReset").show();
        chrono.textContent = "00:00:00";
        tours = 0;
        heures = 0;
        minutes = 0;
        secondes = 0;
        $("#chronometreGeneral").css("font-size", "20vh");
        $("#chronometreSave").text("");
    })

    $("#chronometreReset").on("click", function(){
        $(this).hide();
        $("#chronometreTours").hide();
        $("#chronometrePlay").show();
    })


    const demarrer = () => {
        if (estArrete) {
            estArrete = false;
            defilerTemps();
        }
    };

    const tour = () => {

        if (secondes < 10) {
            secondes = "0" + secondes;
        }

        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        if (heures < 10) {
            heures = "0" + heures;
        }
        affichage(secondes, minutes, heures);
        $("#chronometreGeneral").css("font-size", "10vh");
        tours++;
        $("#chronometreSave").prepend(
            "<div class='tours'><img src='./Pictures/tours.png'> Tour " + tours + " - " +heures + ":" + minutes + ":" + secondes);
    };

    const defilerTemps = () => {
        if (estArrete) return;

        secondes = parseInt(secondes);
        minutes = parseInt(minutes);
        heures = parseInt(heures);

        if (secondes == 60) {
            minutes++
            secondes = 0;
        }

        if (minutes == 60) {
            heures++
            minutes = 0;
        }

        //   affichage
        if (secondes < 10) {
            secondes = "0" + secondes;
        }

        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        if (heures < 10) {
            heures = "0" + heures;
        }

        chrono.textContent = `${heures}:${minutes}:${secondes}`;

        secondes++;

        timeout = setTimeout(defilerTemps, 1000);
    };

    const reset = () => {
        estArrete = true;
        clearTimeout(timeout);
    };

    startBtn.addEventListener("click", demarrer);
    tourBtn.addEventListener("click", tour);
    resetBtn.addEventListener("click", reset);

})