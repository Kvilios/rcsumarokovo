<?php
  $servername = '5.187.6.30';
  $username = 'rcsumarokovo';
  $password = '4J1b0E7r';
  $dbname = 'rcsumarokovo';

  $conn = new mysqli($servername, $username, $password, $dbname);

  $conn->set_charset("utf8");

  if ($conn->connect_error) {
      die('Connection failed: ' . $conn->connect_error);
  }
?>
