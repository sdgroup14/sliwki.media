<?php Header("Content-Type: text/html; charset=utf-8"); ?>

<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="format-detection" content="telephone=no">
  <meta name="viewport" content="width=device-width, maximum-scale=1.0">
  <meta http-equiv="cleartype" content="on">
  <!-- build:remove -->
  <link href="../css/style.css" rel="stylesheet">
  <!-- /build -->

  <!-- build:include ../templates/css-link.html -->
  <!-- /build -->


  <!--[if lt IE 9]><script src="js/html5.js"></script><![endif]-->
  <title>Case</title>

  <div id="fb-root"></div>
  <script>(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.8&appId=353192111732266";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
  </script>
</head>
<body>

  <?php include __DIR__ . '/../views/checklist.php'; ?>
  <?php include __DIR__ . '/../views/permanents/footer-1.php'; ?>
  
  <div class="modal-tint">
    <div class="modal-tint-wrapeer">
   		<?php include __DIR__ . '/../views/popups/politics.php'; ?>
      <?php include __DIR__ . '/../views/popups/compl.php'; ?>
      <?php include __DIR__ . '/../views/popups/respon.php'; ?>
    </div>
  </div>

  
<!--   <div class="prev-project"><a class="" href=""></a></div>
  <div class="next-project"><a class="" href=""></a></div>
  <span class="slide-up"></span> -->
  <script async src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script async src="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.12/js/intlTelInput.min.js"></script>
  <script async src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA3va0LSuMHbA2917lZv6-iGw15mRkoKOg" type="text/javascript"></script>
  <script async src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.2/js/swiper.min.js"></script>
  <!-- build:remove -->
  <script async src="../js/lib/modules/jquery.circliful.min.js"></script>
  <script async type="text/javascript" src="../js/events.js"></script>
  <!-- /build -->
  <!-- build:include ../templates/js-script.html -->
  <!-- /build -->
</body>

</html>
