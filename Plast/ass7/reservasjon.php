<!DOCTYPE html>
<html lang="en">
<html>
  <head>
    <meta charset="utf-8">
    <title>CLUB CORONA</title>
    <link rel="stylesheet" href="css/reservasjon.css">
    <link rel="icon" type="image/x-icon" href="pictures/virus.png">
  </head>
  <body>
    <?php

    $conn = mysqli_connect('localhost', '1zJ22', 'zghJ','dk205_1zJ22');

    if((isset($_POST["Send"])))
    {

        $res_date = ($_POST["date"]);
        $res_time = ($_POST["time"]);
        $res_name = ($_POST["name"]);
        $res_email = ($_POST["email"]);
        $res_tel = ($_POST["tel"]);

        $sql = "INSERT INTO reservations (res_date, res_time,
          res_name, res_email, res_tel) VALUES ('$res_date', '$res_time',
            '$res_name', '$res_email', '$res_tel')";

            $conn->query($sql);
            print $conn->errno;

            $conn->close();

            }
    ?>
    <main>
    <h1>RESERVASJON</h1>
    <form id="resForm" method="post" target="kontaksoss.php">
      <label for="res_name">Navn</label>
      <input type="text" required name="name"/>

      <label for="res_email">E-post</label>
      <input type="email" required name="email"/>

      <label for="res_tel">Telefon</label>
      <input type="text" required name="tel"/>

      <?php
      $mindate = date("y-m-d");
      ?>
      <label>Reservasjonsdato</label>
      <input type="date" required id="res_date" name="date"
             min="<?=$mindate?>">

      <label for="res_time">Tid</label>
      <select name="time">
        <option value="23:00">23:00</option>
        <option value="00:00">00:00</option>
        <option value="01:00">01:00</option>
        <option value="02:00">02:00</option>
      </select>

      <input type="submit" name="Send" id="Send" value="Send">
    </main>
    </form>
  </body>
</html>
