<?php
    include 'db_conf.php';

    $_POST = json_decode(file_get_contents('php://input'), true);
    $image = $_POST['image'];
    $title = $_POST['title'];
    $short = $_POST['short'];
    $full = $_POST['full'];

    $created = date('Y-m-d H:i:s');

    $sql = "INSERT INTO `news` (`created`, `updated`, `image`, `title`, `short`, `full`) VALUES ('$created', '$created', '$image', '$title', '$short', '$full')";
    $result = $conn->query($sql);

    $conn->close();

    echo ($result) ? 'success' : 'error';
?>
