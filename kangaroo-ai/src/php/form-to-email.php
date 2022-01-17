<?php

// This page should not be accessed directly. Need to submit the form.
if(!isset($_POST['submit']) || empty($_POST['submit']))
{
	echo "Error -- You must submit the form!";
}

// Get the POST values
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message_title = $_POST['subject'];
$message_body = $_POST['message'];

// Validate first
if(empty($name)||empty($visitor_email)) 
{
    echo "Name and email are mandatory!";
    exit;
}

if(IsInjected($visitor_email))
{
    echo "Bad email value!";
    exit;
}

// Prepare email parameters
if(empty($message_title))
{
	$message_title = "New Form submission";
}
    
$to = "kangaroo.ai@kangaroo-ai.fr";
$headers = "From: $visitor_email \r\n";
$headers .= "Reply-To: $visitor_email \r\n";

//Send the email
$result = mail($to,$message_title,$message_body,$headers);


if(!$result) {
	?>
  	<script language="javascript" type="text/javascript">
   		alert('Message failed. Please, send an email to kangaroo.ai@kangaroo-ai.fr');
   		window.location.href = 'index.html';
  	</script>
 	<?php  
} else {
	?>
	<script language="javascript" type="text/javascript">
  		alert('Thank you for the message. We will contact you shortly.');
	  	window.location.href = 'http://www.kangaroo-ai.fr/index.html';
 	</script>
 	<?php
}

//Check status and redirect to thank-you page.
/*if ($mail_status) { 
 }else {  } ?>*/


// Function to validate against any email injection attempts
function IsInjected($str)
{
  $injections = array('(\n+)',
              '(\r+)',
              '(\t+)',
              '(%0A+)',
              '(%0D+)',
              '(%08+)',
              '(%09+)'
              );
  $inject = join('|', $injections);
  $inject = "/$inject/i";
  if(preg_match($inject,$str))
    {
    return true;
  }
  else
    {
    return false;
  }
}
   
?> 