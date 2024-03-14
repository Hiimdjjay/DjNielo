<?php

$name = $_POST["name"];
$from = $_POST["email"];
$phone = $_POST["phone"];
$date = $_POST["date"];
$message = $_POST["message"];
$subject = "Wiadomość z formularza na stronie Dj Nielo";
$to = "jakubrafalski96@gmail.com";

$txt = "Imię: " . $name . "\r\n" . "E-mail: " . $from . "\r\n" . "Telefon: " . $phone . "\r\n" . "Data wydarzenia: " . $date . "\r\n" . "\r\n" . "Wiadomość: " . $message;

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8" . "\r\n";
$headers .= "From: " . $from . "\r\n";
$headers .= "Reply-To: " . $from . "\r\n";

$mail_status = mail($to, $subject, $txt, $headers);

if($mail_status) {
    header("Location: /?mail_status=sent");
} else {
    header("Location: /?mail_status=error");
}