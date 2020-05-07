<?php

    $servername = "172.18.0.1";
    $username = "root";
    $password = "claveroot";
    $dbname = "practicaAjax";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    $acentos = $conn->query("SET NAMES 'utf8'");

    // Check connection
    if ($conn->connect_error) {

        die("Connection failed: " . $conn->connect_error);
    }

    $peli = $_GET['peli'];
    $sql = "SELECT * FROM `Pelis` WHERE `títol` LIKE '%".$peli."%' OR `genere` LIKE '%".$peli."%'";
    $result = $conn->query($sql);
    

    if ($result->num_rows > 0){

        while ($row = $result->fetch_assoc()){

            print " <ul>
                        <li>
                            <b>Títol: </b>".$row['títol']."
                        </li>
                        <li>
                            <b>Descripció: </b>".$row['descripció']."
                        </li>
                        <li>
                            <img src='".$row['imatge']."' width='200px' height='260px' alt='cartell'>
                        </li>
                    </ul>";
        }
    }
    else{
        
        print "1";
    }
    
    $conn->close();
?>