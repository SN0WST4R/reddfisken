<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <link id="stylesheet" rel="stylesheet" href="css/kontaktoss.css">
    <title>CLUB CORONA</title>
    <link rel="icon" type="image/x-icon" href="pictures/virus.png">
  </head>
  <body>
    <div class="square"></div>
    <header>
    <nav>
      <a href="../ass4/clubcorona.php"><img alt="headerlogo" id="headerlogo" src=
      "pictures/virus.png"></a>
       <div class="navbar">
         <button type="button" onclick="location.href='reservasjon.php'">BESTILL VIP</button>
         <div class="container5 nav-container">
             <input class="checkbox" type="checkbox">
             <div class="hamburger-lines">
               <span class="line line1"></span>
               <span class="line line2"></span>
               <span class="line line3"></span>
             </div>
           <ul class="menu-items">
             <li><a href="clubcorona.php">HJEM</a></li>
             <li><a href="omoss.php">OM OSS</a></li>
             <li><a href="besokoss.php">BESØK OSS</a></li>
             <li><a href="kontaktoss.php">KONTAKT OSS</a></li>
             <li><a href="musikk.php">MUSIKK</a></li>
             <li><a href="https://www.redbubble.com/shop/ap/110454070" target="_blank">BUTIKK</a></li>
           </ul>
         </div>
       </div>
     </nav>
    </header>

    <main>
      <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      <script>
        AOS.init();
      </script>
      <h1 class="text0">KONTAKT</h1>
      <h1 class="text">OSS</h1>
      <a href="scroll:;" class="scroll-down arrows">
      <span></span>
      </a>
      <a href="scroll:;" class="scroll-down arrow">
      <span></span>
      </a>

      <div class="send">
        <div data-aos="fade-up">
          <p>SEND OSS EN MELDING</p>
        </div>
      </div>

      <div class="php">
        <div data-aos="fade-up">

          <?php

          $conn = mysqli_connect('localhost', '1zJ22', 'zghJ','dk205_1zJ22');

          if((isset($_POST["Send"])))
          {

          $txtName = ($_POST["txtName"]);
          $txtEmail = ($_POST["txtEmail"]);
          $txtPhone = ($_POST["txtPhone"]);
          $txtMessage = ($_POST["txtMessage"]);

          $sql = "INSERT INTO tbl_contact (txtName, txtEmail,
            txtPhone, txtMessage) VALUES ('$txtName', '$txtEmail',
              '$txtPhone', '$txtMessage')";

          $conn->query($sql);
          print $conn->errno;

          $conn->close();

          }
          ?>

<form method="post" action="kontaktoss.php">
<p>
<label for="txtName">Navn </label><br></br>
<input type="text" name="txtName" id="txtName" required>
</p>
<p>
<label for="txtEmail">E-post</label><br></br>
<input type="text" name="txtEmail" id="txtEmail" required>
</p>
<p>
<label for="txtPhone">Telefon</label><br></br>
<input type="text" name="txtPhone" id="txtPhone" required>
</p>
<p>
<label for="txtMessage">Melding</label><br></br>
<textarea name="txtMessage" id="txtMessage" required cols="60" rows="4"></textarea>
</p>
<p>
<input type="submit" name="Send" id="Send" value="Send">
</p>
</form>

     </div>

    </div>

    </main>
    <footer>
      <div data-aos="fade-left"
       data-aos-anchor-placement="center-bottom">
        <p>© 2022 mum015</p>
      </div>
    </footer>
  </body>

</html>
