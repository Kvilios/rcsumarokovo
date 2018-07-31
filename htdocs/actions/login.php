<?php
  $_POST = json_decode(file_get_contents('php://input'), true);

  $name = $_POST['name'];
  $name = preg_replace('/\s+/', '', $name);
  $name = mb_strtolower($name, 'UTF-8');

  $password = $_POST['password'];
  $password = preg_replace('/\s+/', '', $password);

  $hash = md5('администратор+rc20_18sum');

  $result = md5($name . '+' . $password);

  echo ($hash == $result) ? 'correct' : 'incorrect';
?>
