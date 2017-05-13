<?php Header("Content-Type: text/html; charset=utf-8"); ?>

<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="format-detection" content="telephone=no">
  <meta name="viewport" content="width=device-width">
  <meta http-equiv="cleartype" content="on">
 <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.12/css/intlTelInput.css">
  <!-- build:remove -->
  <link href="../css/style.css" rel="stylesheet">
  <!-- /build -->

  <!-- build:include ../templates/css-link.html -->
  <!-- /build -->


  <!--[if lt IE 9]><script src="js/html5.js"></script><![endif]-->
  <title>Case</title>
</head>
<body>

  <?php include __DIR__ . '/../views/oto.php'; ?>
  <?php include __DIR__ . '/../views/permanents/footer-1.php'; ?>
  
  <div class="modal-tint">
    <div class="modal-tint-wrapeer">
   		<?php include __DIR__ . '/../views/popups/politics.php'; ?>
      <?php include __DIR__ . '/../views/popups/compl.php'; ?>
      <?php include __DIR__ . '/../views/popups/respon.php'; ?>
      <?php include __DIR__ . '/../views/popups/payment.php'; ?>
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
  <script src="../js/lib/modules/jquery.circliful.min.js"></script>
  <script type="text/javascript" src="../js/events.js"></script>
  <!-- /build -->
  <!-- build:include ../templates/js-script.html -->
  <!-- /build -->


  <script>
          day = 0; hour= 0; minute= 29; sec= 59;
      function CountBox() {
          dateNow = new Date;
          amount = dateFuture - dateNow.getTime() + 5;
          delete dateNow;
          if (amount < 0) {
              out = "<div class='countbox-days'><span></span>0<div class='countbox-days-text'>дней</div></div>" + "<div class='countbox-hours'><span></span>0<div class='countbox-hours-text'>часов</div></div>" + "<div class='countbox-mins'><span></span>0<div class='countbox-mins-text'>минут</div></div>" + "<div class='countbox-secs'><span></span>0<div class='countbox-secs-text'>секунд</div></div>";
              var list = document.getElementsByClassName("countbox");
              for (var i = 0; i < list.length; i++) {
                  list[i].innerHTML = out;
              }
          } else {
              days = 0;
              hours = 0;
              mins = 0;
              secs = 0;
              out = "";
              amount = Math.floor(amount / 1e3);
              days = Math.floor(amount / 86400);
              amount = amount % 86400;
              hours = Math.floor(amount / 3600);
              amount = amount % 3600;
              mins = Math.floor(amount / 60);
              amount = amount % 60;
              secs = Math.floor(amount);
              out = "<div class='countbox-days'>0<span></span>" + days + "<div class='countbox-days-text'>дней</div></div>" + "<div class='countbox-hours'>0<span></span>" + hours + "<div class='countbox-hours-text'>часов</div></div>" + "<div class='countbox-mins'><span></span>" + mins + "<div class='countbox-mins-text'>минут</div></div>" + "<div class='countbox-secs'><span></span>" + secs + "<div class='countbox-secs-text'>секунд</div></div>";
              var list = document.getElementsByClassName("countbox");
              for (var i = 0; i < list.length; i++) {
                  list[i].innerHTML = out;
              }
              setTimeout("CountBox()", 1e3)
          }
      }
      dateFuture = new Date().getTime() + ((day*24 + hour)*60*60 + minute*60 + sec)*1000;
      window.onload = function () {
          CountBox();
      }
  </script>
</body>

</html>
