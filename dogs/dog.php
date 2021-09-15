<?php
    function getDog() {
        $json = file_get_contents("https://random.dog/woof.json");
        $data = json_decode($json, true);
        $dogImg = "url";
        $extImgArray = array("png", "PNG", "jpg", "JPG", "gif", "jpeg");
        $extVidArray = array("mp4");
        $ext = pathinfo($data[$dogImg], PATHINFO_EXTENSION);
        echo "<title>'$ext'</title>";
        if (in_array($ext, $extImgArray)) : //if statement for ext 
            echo "<img src='$data[$dogImg]' id='media' title='click for next image.' style='cursor: pointer;' onClick='reloadPage()' type='image' width='500' height='500'></img>";
        elseif (in_array($ext, $extVidArray)) :
            echo "<video src='$data[$dogImg]' id='media' loop=true title='click for next image.' style='cursor: pointer;' autoplay=true onClick='reloadPage()' type='video/$ext' width='500' height='500' ></video>";
        endif;
    }
?>