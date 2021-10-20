<?php

$data = file_get_contents('./src/data/ppp.json');
$data = json_decode($data, 1);

$curr = file_get_contents('./src/data/currency.json');
$curr = json_decode($curr, 1);

foreach ($data as $key => $value) {

    $new[$key] = $curr[array_search($value['name'], array_column($curr, 'country'))];
    $new[$key]['PPP'] = $data[$key]['value'];
}

print_r(json_encode($new, 1));
