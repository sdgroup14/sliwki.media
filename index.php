<?php Header("Content-Type: text/html; charset=utf-8"); ?>

<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="format-detection" content="telephone=no">
  <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1">
  <meta id="view" name="viewport" content="">
  <meta http-equiv="cleartype" content="on">


  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.2/css/swiper.min.css">
  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.12/css/intlTelInput.css">
  <!-- build:remove -->
  <link rel="stylesheet" type="text/css" href="css/libs/jquery.circliful.css">
  <link href="css/style.css" rel="stylesheet">
  <!-- /build -->

  <!-- build:include ../templates/css-link.html -->
  <!-- /build -->


  <!--[if lt IE 9]><script src="js/html5.js"></script><![endif]-->
  <title>Case</title>
</head>
<body>

  <?php include __DIR__ . '/views/case-2.php'; ?>
  
  <div class="modal-tint">
    <div class="modal-tint-wrapeer">
      <?php include __DIR__ . '/views/popups/calc.php'; ?>
      <?php include __DIR__ . '/views/popups/calc1.php'; ?>
      <?php include __DIR__ . '/views/popups/statem.php'; ?>
      <?php include __DIR__ . '/views/popups/download-file.php'; ?>
      <?php include __DIR__ . '/views/popups/details.php'; ?>
      <?php include __DIR__ . '/views/popups/subsc.php'; ?>
      <?php include __DIR__ . '/views/popups/call.php'; ?>
      <?php include __DIR__ . '/views/popups/politics.php'; ?>
      <?php include __DIR__ . '/views/popups/compl.php'; ?>
      <?php include __DIR__ . '/views/popups/respon.php'; ?>
      <?php include __DIR__ . '/views/popups/mobile-menu.php'; ?>
    </div>
  </div>

  
<!--   <div class="prev-project"><a class="" href=""></a></div>
  <div class="next-project"><a class="" href=""></a></div>
  <span class="slide-up"></span> -->

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.12/js/intlTelInput.min.js"></script>
  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA3va0LSuMHbA2917lZv6-iGw15mRkoKOg" type="text/javascript"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.2/js/swiper.min.js"></script>

  <!-- build:remove -->
  <script src="js/lib/modules/jquery.circliful.min.js"></script>
  <script type="text/javascript" src="js/events.js"></script>
  <!-- /build -->
  <!-- build:include ../templates/js-script.html -->
  <!-- /build -->
</body>

</html>
