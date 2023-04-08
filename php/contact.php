<!-- Not working on github -->

<?php
// if(isset($_POST['email'])) {

//     // Change these to your email address and subject line
//     $email_to = "metoko9633@dogemn.com";
//     $email_subject = "New Message from personal website!";

//     function died($error) {
//         // Error handling
//         echo "We're sorry, but there were error(s) found with the form you submitted. ";
//         echo "These errors appear below.<br /><br />";
//         echo $error."<br /><br />";
//         echo "Please go back and fix these errors.<br /><br />";
//         die();
//     }

//     // validation expected data exists
//     if(!isset($_POST['name']) ||
//         !isset($_POST['email']) ||
//         !isset($_POST['message'])) {
//         died('We are sorry, but there appears to be a problem with the form you submitted.');       
//     }

//     $name = $_POST['name']; // required
//     $email_from = $_POST['email']; // required
//     $message = $_POST['message']; // required

//     $error_message = "";

//     // Email regex validation
//     $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/';
//   if(!preg_match($email_exp,$email_from)) {
//     $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
//   }

//     // Message validation
//   if(strlen($message) < 2) {
//     $error_message .= 'The message you entered does not appear to be valid.<br />';
//   }

//   if(strlen($error_message) > 0) {
//     died($error_message);
//   }

//     // Email message
//     $email_message = "Message details below.\n\n";

//     function clean_string($string) {
//       $bad = array("content-type","bcc:","to:","cc:","href");
//       return str_replace($bad,"",$string);
//     }

//     $email_message .= "Name: ".clean_string($name)."\n";
//     $email_message .= "Email: ".clean_string($email_from)."\n";
//     $email_message .= "Message: ".clean_string($message)."\n";


// // create email headers
// $headers = 'From: '.$email_from."\r\n".
// 'Reply-To: '.$email_from."\r\n" .
// 'X-Mailer: PHP/' . phpversion();
// @mail($email_to, $email_subject, $email_message, $headers);  
?>

<?php
// // Redirect the user to the same page
// header("Location: https://hybrid.concordia.ca/st_dang/portfolio-2023/#contact");
// exit();

// }

?> 