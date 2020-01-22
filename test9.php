<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods: GET, OPTIONS");

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "learn";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if(isset($_GET['task']) && $_GET['task']=="all"){
         $sql = 'SELECT * FROM `question` where is_mcq=1';
         $result = mysqli_query($conn, $sql);
         $quesList = [];   
         if (mysqli_num_rows($result) > 0) {
            while($row = mysqli_fetch_assoc($result)) {
                $quesList[$row['id']] = $row;
                $optionSql = 'SELECT id, question_option FROM `question_option` where question_id='.$row['id'];
                $optionsRs = mysqli_query($conn, $optionSql);
                $option = [];
                while($optionRow = mysqli_fetch_assoc($optionsRs)) {
                    $option[] = $optionRow;  
                }
                $quesList[$row['id']]['option'] = $option;
            }
         } 
         echo json_encode($quesList);
    }

    if(isset($_GET['task']) && $_GET['task']=="check"){
        $question = $_GET['question'];
        $answer = $_GET['answer'];
        //echo $question. "---".$answer;
        $sql = "SELECT *  FROM `question_option` WHERE `is_correct` = '1' and question_id=".$question;
        $optionsRs = mysqli_query($conn, $sql);
        $data = mysqli_fetch_assoc($optionsRs);
        $response = [];
        $response['ans_status'] =  ($data['id']==$answer) ? 1 : 0;
        $response['ans_text'] = $data['question_option'];
        echo json_encode($response);


    }


?>