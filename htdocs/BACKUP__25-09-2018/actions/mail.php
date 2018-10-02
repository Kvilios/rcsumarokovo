<?php
  $_POST = json_decode(file_get_contents('php://input'), true);
  $name = $_POST['name'];
  $phone = $_POST['phone'];

  $to = 'bratstvo.44@mail.ru';
  $to .= ', kvilios@yandex.ru';

  $subject = 'Новая заявка';

  // текст письма
  $message = '
  <html>
  <head>
    <title>Заявка на обратный звонок</title>
  </head>
  <body>
    <p>Данные пользователя:</p>
    <table>
      <tr>
        <td>Имя:</td><td>' . $name . '</td>
      </tr>
      <tr>
        <td>Телефон:</td><td>' . $phone . '</td>
      </tr>
    </table>
  </body>
  </html>
  ';

  $headers  = 'MIME-Version: 1.0' . "\r\n";
  $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
  $headers .= "From: rcsumarokovo.ru <mail@rcsumarokovo.ru>\r\n";

  //$headers[] = 'To: Mary <mary@example.com>, Kelly <kelly@example.com>';
  //$headers[] = 'From: rcsumarokovo.ru <mail@rcsumarokovo.ru>';
  //$headers[] = 'Cc: birthdayarchive@example.com';
  //$headers[] = 'Bcc: birthdaycheck@example.com';

  mail($to, $subject, $message, $headers);
?>
