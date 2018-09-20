<?php
  include 'db_conf.php';

  $_POST = json_decode(file_get_contents('php://input'), true);

  if (isset($_POST['create'])) { // создать новость
    $sql = "INSERT INTO `news` (`image`, `title`, `short`, `full`, `hidden`) VALUES ('', '', '', '', 1)";

    $data = $conn->query($sql);

    $result = 'error';

    if ($data) {
      $sql = 'SELECT LAST_INSERT_ID()';

      $data = $conn->query($sql);

      if ($data && intval($data->num_rows)) {
        $row = $data->fetch_assoc();

        $id = $row['LAST_INSERT_ID()'];

        $sql = "SELECT `created`, `updated`, `image`, `title`, `short`, `full`, `hidden` FROM `news` WHERE `id` = $id";

        $data = $conn->query($sql);

        if ($data) {
          $result = [];

          if (intval($data->num_rows)) {
            $row = $data->fetch_assoc();

            $result = [
              'id' => $id,
              'created' => $row['created'],
              'updated' => $row['updated'],
              'image' => $row['image'],
              'title' => $row['title'],
              'short' => $row['short'],
              'full' => $row['full'],
              'hidden' => $row['hidden']
            ];

            $result = json_encode($result);
          }
        }
      }
    }

    $conn->close();

    echo $result;

    die();
  }

  if (isset($_POST['remove']) && isset($_POST['id'])) { // удалить новость
    $id = $_POST['id'];

    $sql = "DELETE FROM `news` WHERE `id` = $id";

    $data = $conn->query($sql);

    $result = 'error';

    if ($data) {
      $result = [];

      $result = json_encode($result);
    }

    $conn->close();

    echo $result;

    die();
  }

  if (isset($_POST['toggleHidden']) && isset($_POST['id'])) { // показать/скрыть новость
    $id = $_POST['id'];

    $sql = "UPDATE `news` SET `hidden` = !`hidden` WHERE `id` = $id";

    $data = $conn->query($sql);

    $result = 'error';

    if ($data) {
      $result = [];

      $result = json_encode($result);
    }

    $conn->close();

    echo $result;

    die();
  }

  if (isset($_POST['save']) && isset($_POST['item'])) { // сохранить новость
    $item = $_POST['item'];

    $id = $item['id'];

    $image = $item['image'];

    $title = $item['title'];

    $short = $item['short'];

    $full = $item['full'];

    $sql = "UPDATE `news` SET `image` = '$image', `title` = '$title', `short` = '$short', `full` = '$full'  WHERE `id` = $id";

    $data = $conn->query($sql);

    $result = 'error';

    if ($data) {
      $result = [];

      $result = json_encode($result);
    }

    $conn->close();

    echo $result;

    die();
  }

  if (isset($_POST['all'])) $sql = 'SELECT `id`, `created`, `updated`, `image`, `title`, `short`, `full`, `hidden` FROM `news` ORDER BY `created` DESC'; // получить новости
  else $sql = 'SELECT `id`, `created`, `updated`, `image`, `title`, `short`, `full` FROM `news` WHERE `hidden` = 0 ORDER BY `created` DESC';

  $data = $conn->query($sql);
  
  $result = 'error';

  if ($data) {
    $result = [];
  
    if (intval($data->num_rows)) {
      while ($row = $data->fetch_assoc()) {

        $result[] = [
          'id' => $row['id'],
          'created' => $row['created'],
          'updated' => $row['updated'],
          'image' => $row['image'],
          'title' => $row['title'],
          'short' => $row['short'],
          'full' => $row['full'],
          'hidden' => boolval($row['hidden'])
        ];
      }
    }

    $result = json_encode($result);
  }

  $conn->close();

  echo $result;
?>

