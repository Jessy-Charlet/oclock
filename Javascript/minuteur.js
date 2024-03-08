$(document).ready(function () {

    let heures = 0;
    let minutes = 0;
    let secondes = 0;

    $("#minuteurReset").hide();
    $("#minuteurPause").hide();
    $("#minuteurFinal").hide();


    function formatNumber(t) {
        resultat = t < 10 ? "0" + t : t;
        return resultat;
    }




    /*** Les Flèches pour modifier le temps ------------------------------------------*/


    /*** Gestion des heures */
    $("#hUp").on("click", function () {
        if (heures < 24) {
            heures++;
            if (heures < 10) {
                heures = "0" + heures;
            }
        } else { heures = 0;}
        $("#minuteurH").val(heures);
    })
    $("#hDown").on("click", function () {
        if (heures > 0) {
            heures--;
            if (heures < 10) {
                heures = "0" + heures;
            }
        } else { heures = 24;}
        $("#minuteurH").val(heures);
    })

    /*** Gestion des minutes */
    $("#mUp").on("click", function () {
        if (minutes < 59) {
            minutes++;
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
        } else { minutes = 0;}
        $("#minuteurM").val(minutes);
    })
    $("#mDown").on("click", function () {
        if (minutes > 0) {
            minutes--;
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
        } else { minutes = 59;}
        $("#minuteurM").val(minutes);
    })

    /*** Gestion des secondes */
    $("#sUp").on("click", function () {
        if (secondes < 59) {
            secondes++;
            if (secondes < 10) {
                secondes = "0" + secondes;
            }
        } else { secondes = 0;}
        $("#minuteurS").val(secondes);
    })
    $("#sDown").on("click", function () {
        if (secondes > 0) {
            secondes--
            if (secondes < 10) {
                secondes = "0" + secondes;
            }
        } else { secondes = 59;}
        $("#minuteurS").val(secondes);
    })

    /*** Les boutons Play / Pause / Reset ------------------------------------------*/

    /*** Gestion de play */
    $("#minuteurPlay").on("click", function () {
        $(this).hide();
        $(".minuteurGrid").slideUp();
        $("#minuteurFinal").slideDown();
        $("#minuteurReset").show();
        $("#minuteurPause").show();
        play = 1;
    })

    /*** Gestion de Pause */
    $("#minuteurPause").on("click", function () {
        $(this).hide();
        $("#minuteurPlay").show();
        play = 2;
    })

    /*** Gestion de Reset */
    $("#minuteurReset").on("click", function () {
        $(this).hide();
        $("#minuteurPause").hide();
        $("#minuteurPlay").show();
        $(".minuteurGrid").show();
        $("#minuteurFinal").hide();
        play = 0;
        heures = 0;
        minutes = 0;
        secondes = 0;
        $("#minuteurH").val(0);
        $("#minuteurM").val(0);
        $("#minuteurS").val(0);

    })

    /*** Compte à rebours ------------------------------------------*/


    let chrono = document.getElementById("minuteurFinal");
    let resetBtn = document.getElementById("minuteurReset");
    let stopBtn = document.getElementById("minuteurPause");
    let startBtn = document.getElementById("minuteurPlay");

    let timeout;

    let estArrete = true;

    const demarrer = () => {
        if (estArrete) {
            estArrete = false;
            defilerTemps();
        }
    };

    const arreter = () => {
        if (!estArrete) {
            estArrete = true;
            clearTimeout(timeout);
        }
    };

    const defilerTemps = () => {
        if (estArrete) return;

        secondes = parseInt(secondes);
        minutes = parseInt(minutes);
        heures = parseInt(heures);

        if (secondes == -1 && minutes >= 0) {
            minutes--
            secondes = 59;
        }

        if (minutes == -1 && heures > 0) {
            heures--
            minutes = 59;
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
        
        secondes-- ;
        if (heures ==0 && minutes == 0 && secondes == -1){
            alert("BIP BIP BIP")
            $("#minuteurReset").hide();
            $("#minuteurPause").hide();
            $("#minuteurPlay").show();
            $(".minuteurGrid").show();
            $("#minuteurFinal").hide();
            play = 0;
            heures = 0;
            minutes = 0;
            secondes = 0;
            $("#minuteurH").val("00");
            $("#minuteurM").val("00");
            $("#minuteurS").val("00");
            reset ();
            return;
        }
        
        timeout = setTimeout(defilerTemps, 1000);
    };

    const reset = () => {
        chrono.textContent = "00:00:00";
        estArrete = true;
        heures = 0;
        minutes = 0;
        secondes = 0;
        clearTimeout(timeout);
    };

    startBtn.addEventListener("click", demarrer);
    stopBtn.addEventListener("click", arreter);
    resetBtn.addEventListener("click", reset);
})