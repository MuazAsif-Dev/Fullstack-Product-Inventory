<?php

include 'includes/autoloader.inc.php';
include 'includes/cors.inc.php';

// ***************** Automated adding product class names **************

$class_dir = "classes";

// List of classes we don't want to instantiate
$base_class_arr = array("DbConnect","Product");

$class_arr = [];

foreach(glob($class_dir.'/*.*') as $file) {
    $className = explode('.',substr($file,8));
    array_push($class_arr, $className[0]);
}

$class_arr = array_diff($class_arr, $base_class_arr);

// *********************************************************************

$result = [];

foreach($class_arr as $class) 
{
    $class_obj = new $class();
    $obj_data = $class_obj->getValues();
    foreach($obj_data as $obj)
    {
        array_push($result, $obj);
    }
}

$json_result = json_encode($result);
echo $json_result;