<?php

$data = file_get_contents('https://api.worldbank.org/v2/en/country/all/indicator/PA.NUS.PPP?format=json&per_page=20000&source=2&date=2020');
$data = json_decode($data, 1)[1];

foreach($data as $key => $value){
    if($value['value']!=''){
        $new[$value['country']['id']]['name'] = $value['country']['value'];
        $new[$value['country']['id']]['value'] = $value['value'];
    }
}

print_r(json_encode($new,1));


?>