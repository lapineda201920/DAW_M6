<?php

    $servername = "172.18.0.1";
    $username = "root";
    $password = "claveroot";
    $dbname = "practicaAjax";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {

        die("Connection failed: " . $conn->connect_error);
    }

    $dni = $_GET['dni'];
    $sql = "SELECT * FROM Persona WHERE DNI LIKE '".$dni."'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0){

        while ($row = $result->fetch_assoc()){

            print "0";
        }
    }
    else{
        
        print "1";
    }
    
    $conn->close();
?>