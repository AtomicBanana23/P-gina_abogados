<?php
    $connect = mysqli_connect('localhost', 'root', '', 'test', 3306);
  
    $fecha = $_POST['datepicker-input'];
    
    $sql = "INSERT INTO cita VALUES($fecha);";
    
    mysqli_query($connect,$sql);

   
    //$fecha = mysqli_real_escape_string($connect, $_POST['fecha']);

