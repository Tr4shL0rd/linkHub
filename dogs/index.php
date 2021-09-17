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
    
    <script onload="window.mobileAndTabletCheck()" src="mobileChecker.js"></script>
    <title>LinkHub | Dogs</title>
</head>

<body>
    <!--<h3 hidden=false id="mobileText">mobile</h3>
    <h3 hidden=false id="desktopText">desktop</h3>-->
    <div class="dog-container">
        <?php
        require_once("lib.php");
        getDog()
        ?>
    </div>
    <h2 hidden=true class="loadingText">finding next video/img</h2>
    <script type="text/javascript">
        async function onClick() {
            document.getElementsByClassName("loadingText")[0].style.display = "block";
            document.getElementsByClassName("dog-container")[0].classList.add("dog-container--loading");
            await fetchDog();
            document.getElementsByClassName("dog-container")[0].classList.remove("dog-container--loading");
            document.getElementsByClassName("loadingText")[0].style.display = "none";
            
            
        }
        async function fetchDog() {
            try {
                const response = await fetch('dog.php');
                const html = await response.text();
                document.getElementsByClassName("dog-container")[0].innerHTML = html;

            } catch (err) {
                console.log('Could not fetch dog', err)
            }

        }
    </script>
</body>

</html>