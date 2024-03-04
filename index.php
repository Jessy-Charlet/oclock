<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./CSS/style.css">
  <link rel="stylesheet" href="./CSS/horloge.css">
  <title>oclock</title>
</head>

<body>

  <header>

    <!--Navigation-->
    <nav>
      <span>
        <img id="horloge" class="icon" src="./Pictures/horloge.png" alt="Fonction horloge" />
      </span>
      <span>
        <img id="chronometre" class="icon" src="./Pictures/chronometre.png" alt="Fonction chronometre" />
      </span>
      <span>
        <img id="minuteur" class="icon" src="./Pictures/minuteur.png" alt="Fonction minuteur" />
      </span>
      <span>
        <img id="reveil" class="icon" src="./Pictures/reveil.png" alt="Fonction reveil" />
      </span>
      <div id="navBarre"></div>
    </nav>
    <!---->

  </header>
  <main>
    <!--Horloge-->
    <div id="horlogeCont">
      <div class="wrap">
        <span class="heure"></span>
        <span class="minute"></span>
        <span class="seconde"></span>
        <span class="dot"></span>
        <div id="horlogeNum"></div>
      </div>
    </div>
      <!---->

      <!--Minuteur-->
      <div id="minuteurCont">
        <div>
          <input type="number" id="minuteurH" name="minuteurH" min="0" max="24" value="00" />
        </div>
        <input type="number" id="minuteurM" name="minuteurM" min="0" max="24" value="00" />
        <input type="number" id="minuteurS" name="minuteurS" min="0" max="24" value="00" />
      </div>
      <!---->
  </main>
  <!--Javascript-->
  <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
  <script src="./Javascript/horloge.js"></script>
  <script src="./Javascript/general.js"></script>
  <!---->
</body>

</html>