<?php
    include 'db_conf.php';

    $_POST = json_decode(file_get_contents('php://input'), true);
    $id = $_POST['id'];

    if ($id) {

      $sql = "DELETE FROM `news` WHERE `id` = '$id'";
      $result = $conn->query($sql);

      $conn->close();

      echo ($result) ? 'success' : 'error';
    }
    else echo 'error';
?>
