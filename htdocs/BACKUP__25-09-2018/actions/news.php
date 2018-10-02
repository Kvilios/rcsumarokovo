<?php
  include 'db_conf.php';

  $sql = 'SELECT id, created, image, title, short, full FROM news';
  $result = $conn->query($sql);

  $news = [];

  if ($result->num_rows > 0) {
      while($row = $result->fetch_assoc()) {
        $news[] = [
          'id'=>$row['id'],
          'created'=>$row['created'],
          'image'=>$row['image'],
          'title'=>$row['title'],
          'short'=>$row['short'],
          'fullIsActive'=>false,
          'full'=>$row['full']
        ];
      }
  }

  $conn->close();

  echo json_encode($news);
?>
