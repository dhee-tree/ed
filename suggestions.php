<?php

if (isset($_POST['submit'])) {
  $name = $_POST['name'];
  $subject = $_POST['subject'];
  $mailFrom = $_POST['mail'];
  $details = $_POST['details'];

  $mailTo = "contact@codebowl.co.uk";
  $headers = "From: ".$mailFrom;
  $txt = "[Suggestion form mail] \n From: ".$name."\n Email address: ".$mailFrom."\n\n".$details;

  mail($mailTo, $subject, $txt, $headers);
  header("Location: suggestions.html?mailsend");
}
