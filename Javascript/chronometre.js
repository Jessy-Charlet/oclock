$(document).ready(function () {
    let chrono = document.getElementById("chronometreGeneral");
    let resetBtn = document.getElementById("chronometreReset");
    let tourBtn = document.getElementById("chronometreTours");
    let startBtn = document.getElementById("chronometrePlay");


    let secondesC = 0;
    let minutesC = 0;
    let heuresC = 0;
    let tours = 0;

    let timeout;

    let estArrete = true;

    $("#chronometreTours").hide();
    $("#chronometreReset").hide();
    $("#chronometreSave").hide();


    $("#chronometrePlay").on("click", function(){
        $(this).hide();
        $("#chronometreTours").show();
        $("#chronometreReset").show();
        chrono.textContent = "00:00:00";
        tours = 0;
        heuresC = 0;
        minutesC = 0;
        secondesC = 0;
        $("#chronometreGeneral").css("font-size", "20vh");
        $("#chronometreSave").hide();
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
        secondesC = parseInt(secondesC);
        minutesC = parseInt(minutesC);
        heuresC = parseInt(heuresC);

        if (secondesC < 10) {
            secondesC = "0" + secondesC;
        }

        if (minutesC < 10) {
            minutesC = "0" + minutesC;
        }

        if (heuresC < 10) {
            heuresC = "0" + heuresC;
        }
        $("#chronometreSave").show();
        $("#chronometreGeneral").css("font-size", "10vh");
        tours++;
        secondesmC = secondesC-1;
        $("#chronometreSave").prepend(
            "<div class='tours'><img src='./Pictures/tours.png'> Tour " + tours + " - " + heuresC + ":" + minutesC + ":" + secondesmC);
    };

    const defilerTemps = () => {
        if (estArrete) return;

        secondesC = parseInt(secondesC);
        minutesC = parseInt(minutesC);
        heuresC = parseInt(heuresC);

        if (secondesC == 60) {
            minutesC++
            secondesC = 0;
        }

        if (minutesC == 60) {
            heuresC++
            minutesC = 0;
        }

        //   affichage
        if (secondesC < 10) {
            secondesC = "0" + secondesC;
        }

        if (minutesC < 10) {
            minutesC = "0" + minutesC;
        }

        if (heuresC < 10) {
            heuresC = "0" + heuresC;
        }

        chrono.textContent = `${heuresC}:${minutesC}:${secondesC}`;

        secondesC++;

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