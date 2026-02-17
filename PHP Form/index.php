<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Form Submit to Send Email</title>

  <link rel="stylesheet" href="CSS/style.css">
</head>
<body>
<?php
    if(!empty($_POST["send"])) {
      $userName = $_POST["userName"];
      $userEmail = $_POST["userEmail"];
      $userPhone = $_POST["userPhone"];
      $userMessage = $_POST["userMessage"];
      $toEmail = $_POST["biruk.ayele.birhanu@gmail.com"];

      $mailHeaders = "Name: " . $userName .
      "\r\n Email:" . $userEmail .
      "\r\n Phone:" . $userPhone .
      "\r\n Message:" . $userMessage . "\r\n";

      if (mail($toEmail, $userName, $mailHeaders)) {
        $message = "Your Infonrmation is Received Successfully.";
      }

    }
?>

  <div class="form-container">
    <form method="post" name="emailContact">
      <div class="input-row">
        <label>Name <em>*</em></label>
        <input type="text" name="userName" required>
      </div>

      <div class="input-row">
        <label>Email <em>*</em></label>
        <input type="email" name="userEmail" required>
      </div>

      <div class="input-row">
        <label>Phone <em>*</em></label>
        <input type="tel" name="userPhone" required>
      </div>

      <div class="input-row">
        <label>Message <em>*</em></label>
        <textarea name="userMessage" required></textarea>
      </div>
      
      <div class="input-row">
        <input type="submit" name="send" value="Submit">
        <?php if (!empty($message)) { ?>
        <div class="success">
          <strong><?php echo $message; ?></strong>
        </div>
        <?php } ?>
      </div>
    </form>
  </div>
</body>
</html>