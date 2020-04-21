<?php
	global $con;
    $con = mysqli_connect('localhost','root','','portfolio');

        if($con == false)
        {
            echo "Connection is not done";
        } 
        else
        {
        // echo "Connection is done sucessfully";
         }
?>