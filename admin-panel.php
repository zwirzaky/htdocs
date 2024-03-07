<!doctype html>
<html lang="pl">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Carrllix</title>
    <link rel="icon" type="image/x-icon" href="images/logo.png" />
    <!-- Font Awesome icons (free version)-->
    <script src="https://use.fontawesome.com/releases/v6.3.0/js/all.js" crossorigin="anonymous"></script>
    <!-- Google fonts-->
    <link href="https://fonts.googleapis.com/css?family=Varela+Round" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet" />
    <!-- Core theme CSS (includes Bootstrap)-->
    <link href="styl.css?v=<?php echo time() ?>" rel="stylesheet" />
    <link rel="stylesheet" href="calendar.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  </head>
  <body>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="images/logo.png" alt="" width="50" class="d-inline-block align-text-top">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor04" aria-controls="navbarColor04" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor04">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link active" href="#">Strona główna
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Wyszukiwarka</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Cennik</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">O nas</a>
        </li> 
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Separated link</a>
          </div>
        </li>
      </ul>
   
      <form class="d-flex">
        <input class="form-control me-sm-2" type="search" placeholder="Search">
        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<section class="container">
    <div class="row">
      <h2>Admin panel</h2>
        <div class="col-md-6 offset-md-3">
            <h2>Logout</h2>
            <p>Are you sure you want to logout?</p>
            <a href="logout.php"><button class="btn btn-primary">Logout</button></a>
            
        </div>
    </div>
    <div class="container">
              <div class="row  justify-content-start">

                <div class="col-lg-6 col-12">
                  <div class="container">
                    <div>
                      <h3>Rezerwacje</h3>
                      <div id="calendar-container">
                        <?php
                          require_once 'calendar.php';
                          $calendar = new Calendar();
                          echo $calendar;
                        ?>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-12">
                  <h3>Lista aut</h3>
                  <div id="carsList-container">
                  <?php
                      require_once 'functions.php';
                      $conn = connectToDatabase();
                      echo generateDivsForCarsInDatabase($conn);
                      closeConnection($conn);
                    ?>

                  </div>

                  <a href="add-event.php"><button class="btn m-2 btn-primary">Add event</button></a><br>
                  <a href="delete-event.php"><button class="btn m-2 btn-primary">Delete event</button></a><br>
                  <a href="modify-event.php"><button class="btn m-2 btn-primary">Modify event</button></a><br>
                </div>
              </div>
            </div>
</section>


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <script src="eventListeners.js?v=<?php echo time() ?>" defer></script>
  
  </body>
</html>