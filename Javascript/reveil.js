$(document).ready(function () {

    /*** Au click sur Ajouter une alarme */
    $("#reveilAjout").on("click", function(){
        reveilAjout();
    });
   // function Reveil(heure) {
    //    this.heure = reveilHeureInput;

    //}

    /*** Fonction principale */
    function reveilAjout() {
        var reveilHeureInput = document.getElementById("reveilHeure");
        var reveilMessageInput = document.getElementById("reveilMessage");
        const reveilTR = document.getElementById("reveilTR");

        var reveilHeure = reveilHeureInput.value;
        var reveilMessage = reveilMessageInput.value;

        if (reveilHeure && reveilMessage) {
            var now = new Date();
            var userTime = new Date(now.toDateString() + " " + reveilHeure);

            var timeDiff = userTime - now;

            if (timeDiff > 0) {
                var reveilListeItem = document.createElement("li");
                reveilListeItem.className = "alarmItem";
                reveilListeItem.innerHTML = `<img src="./Pictures/reveil-petit.png"><div>${reveilHeure}</div><div>${reveilMessage}</div>`;
                document.getElementById("reveilListe").appendChild(reveilListeItem);
    //            setInterval(function () {
    //                now = new Date();
    //                timeDiff = userTime - now;
    //                $("#reveilTR").html(`Dans ${formatTime(timeDiff)}`);
   //                 console.log(timeDiff);
    //            }, 1000)

                setTimeout(function () {
                    alert(reveilMessage);
                    reveilListeItem.classList.add("passee");
                    document.getElementById("countdown").innerHTML = "Passée";
                }, timeDiff);
                alert(`Le réveil se déclenchera dans ${formatTime(timeDiff)}`);
            } else {
                alert("L'heure du réveil est déjà passée.");
            }

            // Effacer les champs après avoir ajouté l'alarme
            reveilHeureInput.value = "";
            reveilMessageInput.value = "";
        } else {
            alert("Veuillez entrer une heure et un message pour le réveil.");
        }
    }
    
    function formatTimeMAJ(formatTime, timeDiff) {
        timeDiff = timeDiff - 1000;
        setInterval(formatTime, 1000)
    }

    function formatTime(milliseconds) {
        var secondsR = Math.floor(milliseconds / 1000);
        var minutesR = Math.floor(secondsR / 60);
        var hoursR = Math.floor(minutesR / 60);

        var formattedTime = "";
        if (hoursR > 0) {
            formattedTime += hoursR + "h ";
        }
        if (minutesR > 0) {
            formattedTime += minutesR % 60 + "m ";
        }
        formattedTime += secondsR % 60 + "s";

        return formattedTime;
    }


})