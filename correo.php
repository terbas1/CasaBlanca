<?php

        $nombre=$_POST['nombre'];
        $telefono=$_POST['telefono'];
        $correo=$_POST['correo'];
        $fecha=$_POST['fecha'];
        $horario=$_POST['horario'];
        $numPersonas=$_POST['numPersonas'];
        $header= "From: " .$correo . "\r\n";
        $header .="X-Mailer: PHP/" . phpversion()."\r\n";
        $header .="Content-Type: text/plain";

        $mensaje="Este mensaje fue enviado por :".$nombre.",\r\n";
        $mensaje.="Su telefono es: ".$telefono.",\r\n";
        $mensaje.="Su correo es: ".$correo.",\r\n";
        $mensaje.="La fecha para reservar : ".$fecha.",\r\n";
        $mensaje.="Horario en que se desea reservar : ".$horario.",\r\n";
        $mensaje.="Cantidad de personas : ".$numPersonas.",\r\n";

        $para="edwinbaltazar1996@gmail.com";
        $asunto="Reserva".$nombre;

        if(mail($para,$asunto,utf8_decode($mensaje),$header)){
            die("Muchas gracias, su mensaje fue enviado correctamente"); 

        }else{ //Si el mensaje no se envía muestra el mensaje de error 

        die("Error: Su mensaje no pudo ser enviado, intente más tarde");
     }


?>