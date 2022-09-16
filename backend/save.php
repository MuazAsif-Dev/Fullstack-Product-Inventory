<?php

include 'includes/autoloader.inc.php';
include 'includes/cors.inc.php';

$data = json_decode(file_get_contents("php://input"), true);
// print_r($data);


$classType = $data['type'];

$obj = new $classType();
// var_dump($obj);

$check = $obj->checkSKU($data['sku']);

if(!$check)
{
    $obj->setValues($data);
}