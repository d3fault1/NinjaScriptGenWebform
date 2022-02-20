<?php
    $data = json_decode($_POST["formData"], true);

    if (!isset($data['Inputs']) || (isset($data['Inputs']) && $data['Inputs'] == null)) $data['Inputs'] = [];
    if (!isset($data['Variables']) || (isset($data['Variables']) && $data['Variables'] == null)) $data['Variables'] = [];
    foreach ($data as $key => $value) {
        if ($key == 'ConditionSets') {
            foreach ($data[$key] as $k => $conditionSet) {
                if (!isset($conditionSet['Compares']) || (isset($conditionSet['Compares']) && $conditionSet['Compares'] == null)) {
                    $data[$key][$k]['Compares'] = [];
                }
            }
        }
    }
    
    $myfile = fopen("../api/data.json", "w") or die("Unable to open file!");
    fwrite($myfile, json_encode($data, JSON_PRETTY_PRINT));
    fclose($myfile);

    
    $answer = shell_exec("cd ../api/ & NinjaScriptGenerator.exe 2>&1");


    $files = glob("../api/*.cs");

    if (count($files) != 1){
        http_response_code(500);
    }
    else {
        header($_SERVER["SERVER_PROTOCOL"] . " 200 OK");
        header("Cache-Control: public"); // needed for internet explorer
        header("Content-Description: File Transfer");
        header("Content-Type: application/octet-stream");
        header("Content-Transfer-Encoding: Binary");
        header("Content-Length:".filesize($files[0]));
        header("Content-Disposition: attachment; filename=\"".basename($files[0])."\"");
        readfile($files[0]);
        unlink("../api/data.json");
        unlink($files[0]);
    }
?>