<?php

$data = file_get_contents('./src/data/final.json');
$data = json_decode($data, 1);

$curr = file_get_contents('https://freecurrencyapi.net/api/v2/latest?apikey=e436c410-30dc-11ec-8f84-df3fe201c0fd');
$curr = json_decode($curr, 1);

foreach ($data as $key => $value) {

    $data[$key]['conversion'] = $curr['data'][$value['currency_code']];
}

print_r(json_encode($data, 1));
