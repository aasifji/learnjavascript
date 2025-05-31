<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Operator</title>
</head>
<body>
    <?php
    $a = 50;
    $b = "50";
    $c = 15;
    // echo($a===$b);
    // if($a==$b)
// if($a!==$c)
// if($a<=>$c)   #spaceship operator
if(($a===$b)==$c)
    echo "The condition ids true";
else 
echo "condition is false";
echo "<br>";
// ++$a;
++$a;
echo $a."<br>";
 $a++;
echo $a."<br>";
++$a;
echo $a."<br>";
$a++;
echo $a."<br>";
$d = ++$a;
echo "a=".$a."<br>";
echo "b= ".$d."<br>";
$e = $a++;
echo "a=".$a."<br>";
echo "b= ".$e."<br>";
$x = 10;
$y = 12;
$z = ++$x + $x++ + ++$x;
if(++$x>10)
echo "hello";
else
echo "bye";
echo "<br>";
echo "x = ".$x."<br>";
echo "z = ".$z."<br>";


    ?>

</body>
</html>