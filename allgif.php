<?php

$files=glob("./img/allgif/*.{jpg,png,gif}", GLOB_BRACE);
//print_r($files);
$list=[];
foreach ($files as $file) {
    $list[]=basename($file);
}

$json=json_encode($list, JSON_PRETTY_PRINT);
header('Content-Type: application/json');
echo $json;
