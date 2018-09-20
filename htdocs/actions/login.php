<?php
  include 'db_conf.php';

  $_POST = json_decode(file_get_contents('php://input'), true);

  if (isset($_POST['token'])) $token = $_POST['token'];
  else {
    $email = $_POST['email'];

    $email = preg_replace('/\s+/', '', $email);

    $email = mb_strtolower($email, 'UTF-8');
  
    $password = $_POST['password'];

    $password = preg_replace('/\s+/', '', $password);
  
    $token = md5($email . ' + ' . $password . ' = ' + md5($email . ' + ' . $password));
  }

  $sql = "SELECT `id`, `name`, `surname` FROM `admin` WHERE `token` = '$token'";

  $data = $conn->query($sql);

  $result = 'error';

  if ($data) {
    $result = [];
  
    if (intval($data->num_rows)) {
      $row = $data->fetch_assoc();

      $result = [
        'id' => $row['id'],
        'name' => $row['name'],
        'surname' => $row['surname'],
        'token' => $token
      ];
    }

    $result = json_encode($result);
  }

  $conn->close();

  echo $result;
?>
