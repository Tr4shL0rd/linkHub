<?php
    function getDog() {
        $json = file_get_contents("https://random.dog/woof.json");
        $data = json_decode($json, true);
        $dogImg = "url";
        $extImgArray = array("png", "PNG", "jpg", "JPG", "gif", "jpeg");
        $extVidArray = array("mp4");
        $ext = pathinfo($data[$dogImg], PATHINFO_EXTENSION);
        $img = "<img src='$data[$dogImg]' title='click for next image.' style='cursor: pointer;' onClick='onClick()' type='image' loop=true autoplay=true></img>";
        $vid = "<video src='$data[$dogImg]' title='click for next image.'  style='cursor: pointer;' onClick='onClick()' type='video/$ext' loop=true autoplay=true></video>";
        if (in_array($ext, $extImgArray)) : //if statement for ext 
            echo $img;
        elseif (in_array($ext, $extVidArray)) :
            echo $vid;
        endif;
    }