  <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>
          <?php
            // Set $pageTitle in each page before including head.php
            echo isset($pageTitle) ? $pageTitle . " - PaseoPay Admin Dashboard" : "PaseoPay Admin Dashboard";
            ?>
      </title>
      <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet" />
      <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css" />
      <link rel="stylesheet" href="assets/css/styles.css" />
  </head>