<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Datatypes</title>
</head>
<body>
    <h1>Datatypes</h1>
    <!-- int
    float
    string
    boolean
    array
    object
    null -->
    <?php
    $arr = ["indore","bhopal","delhi","mumbai"];
    print_r($arr);
   echo "<br>";
    foreach($arr as $row){
        echo $row. "<br>";
    }

    $a = 150;
    $b = 20;
    $c = 0;
    if($a>$b)
    echo "Greater number is ".$a;
   else
   echo "Greater number is ".$b;
echo "<br>";
if($c)
echo "hello ";
else
echo "bye ";
    ?>
    <script>
         console.log(a);
        let a = 20;
        // console.log(a);
    </script>
</body>
</html>