<?php

include 'includes/autoloader.inc.php';
include 'includes/cors.inc.php';

$data = json_decode(file_get_contents("php://input"), true);
// print_r($data);

foreach($data as $class_arr) 
{
    $classType = $class_arr['type'];

    $obj = new $classType();
    // var_dump($obj);
    
    $check = $obj->checkSKU($class_arr['sku']);
    
    if($check)
    {
        $obj->deleteProduct($class_arr['sku']);
    }
}