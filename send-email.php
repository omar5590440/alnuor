<!-- filepath: f:\wep al nour\send-email.php -->
<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $to_email = "alnwrlmwadalbnasalhhsny@gmail.com"; // البريد الإلكتروني المستلم
    $name = htmlspecialchars($_POST['name']);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars($_POST['message']);

    $mail = new PHPMailer(true);

    try {
        // إعدادات SMTP
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com'; // خادم SMTP
        $mail->SMTPAuth = true;
        $mail->Username = 'alnourgroup0o@gmail.com'; // بريدك الإلكتروني
        $mail->Password = '01005590440omarsalih'; // كلمة المرور
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // إعدادات البريد
        $mail->setFrom($email, $name);
        $mail->addAddress($to_email);
        $mail->Subject = "رسالة جديدة من موقع النور جروب";
        $mail->Body = "الاسم: $name\nالبريد الإلكتروني: $email\n\nالرسالة:\n$message";

        $mail->send();
        echo "تم إرسال رسالتك بنجاح!";
    } catch (Exception $e) {
        echo "حدث خطأ أثناء إرسال الرسالة: {$mail->ErrorInfo}";
    }
} else {
    echo "طلب غير صالح.";
}
?>