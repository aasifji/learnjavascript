<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Constant</title>
</head>
<body>
    <h1>Constant</h1>
    <?php
    define("PI",3.14);
    echo PI;
    // define("PI",3,156);
    // echo PI;
    $r =12.45;
    $a = PI*$r*$r;
    $c = 2*PI*$r;
    echo "<br> The area is ".$a;
    echo "<br> the Circum is ".$c;
    // $a = PI*2($r);
    // echo "<br> the area is ".$a;

    ?>
</body>
</html>