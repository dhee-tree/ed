<?php

if (isset($_POST['submit'])) {
  $name = $_POST['name'];
  $subject = $_POST['subject'];
  $mailFrom = $_POST['mail'];
  $message = $_POST['message'];

  $mailTo = "contact@codebowl.co.uk";
  $headers = "From: ".$mailFrom;
  $txt = "[Contact form mail] \n From: ".$name."\n Email address: ".$mailFrom."\n\n".$message;

  mail($mailTo, $subject, $txt, $headers);
  header("Location: contact.html?mailsend");
}
