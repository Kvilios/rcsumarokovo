<?php
    include 'db_conf.php';

    $_POST = json_decode(file_get_contents('php://input'), true);
    $id = $_POST['id'];
    $image = $_POST['image'];
    $title = $_POST['title'];
    $short = $_POST['short'];
    $full = $_POST['full'];

    if ($id) {
      $updated = date('Y-m-d H:i:s');

      $sql = "UPDATE `news` SET `updated` = '$updated', `image` = '$image', `title` = '$title', `short` = '$short', `full` = '$full' WHERE `id` = '$id'";

      $result = $conn->query($sql);

      $conn->close();

      echo ($result) ? 'success' : 'error';
    }
    else echo 'error';
?>
