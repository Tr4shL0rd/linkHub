<!DOCTYPE html>
<html>
<!--
    * TODO  
    * implement ajax for dynamic image/video reloading
-->

<head>
    <meta name="viewport" content="width=device-width" />
    <meta charset="utf-8" />
    <meta name="description" content="I'm Tr4shL0rd and this is my LinkHub Page." />
    <meta name="keyword" content="link, hub,trash, lord, tr4sh, l0rd, page, html, js, css" />
    <meta name="author" content="Tr4shL0rd" />
    <link rel="stylesheet" href="../style.css" />
    <link rel="icon" href="../assets/imgs/favicon_io/faviconMoon.ico" type="image/x-icon" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script onload="window.mobileAndTabletCheck()" src="mobileChecker.js"></script>
    <title>LinkHub | Dogs</title>
</head>

<body>
    <!--<h3 hidden=false id="mobileText">mobile</h3>
    <h3 hidden=false id="desktopText">desktop</h3>-->
    <?php
    function getDog()
    {
        $json = file_get_contents("https://random.dog/woof.json");
        $data = json_decode($json, true);
        $dogImg = "url";
        $extImgArray = array("png", "PNG", "jpg", "JPG", "gif", "jpeg");
        $extVidArray = array("mp4");
        $ext = pathinfo($data[$dogImg], PATHINFO_EXTENSION);
        $img = "<img src='$data[$dogImg]' title='click for next image.' style='cursor: pointer;' onClick='reloadPage()' type='image' width='500' height='500' loop=true autoplay=true></img>";
        $vid = "<video src='$data[$dogImg]' title='click for next image.'  style='cursor: pointer;' onClick='reloadPage()' type='video/$ext' width='500' height='500' loop=true autoplay=true></video>";
        if (in_array($ext, $extImgArray)) : //if statement for ext 
            echo $img;
        elseif (in_array($ext, $extVidArray)) :
            echo $vid;
        endif;
    }
    getDog();
    ?>
    <script type="text/javascript">
        function reloadPage() {
            location.reload();

        }
    </script>
</body>

</html>