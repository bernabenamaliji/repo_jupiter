<?php
    header("Content-type: application/json; charset=utf-8");

    $data = json_decode(file_get_contents("php://input"),true);
    $inp = file_get_contents('http://localhost/angularjs/contactos.json');
    $tempArray = json_decode($inp);
    array_push($tempArray, $data);
    $jsonData = json_encode($tempArray);
    file_put_contents('contactos.json', $jsonData);
?>


