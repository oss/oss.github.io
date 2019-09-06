<?php
if (!isset($_POST["redirect_error"])) {
    die("There was an issue with your request :(");
}

if (!isset($_POST["message"]) || !isset($_POST["email"])) {
    header("Location: " .$_POST["redirect_error"]);
    // incase the don't get redirected somehow
    die("must have message and email");
}

$message = $_POST["message"];
$email = $_POST["email"];
$channel = $_POST["channel"];
$name = $_POST["name"];

$subject = "mobile feedback form";
if (isset($_POST["channel"]) && $channel !== "") {
    $subject = "mobile feedback form: " . $channel;
}

$body = "from: " . $email . "\n";
if (isset($_POST["channel"]) && $channel !== "") {
    $body .= "channel: " . $channel . "\n"; 
}

if (isset($_POST["name"]) && $name !== "") {
    $body .= "name: " . $name . "\n"; 
}

$body .= $message;
$body .= "\n-----------------------\n";
$body .= "this message was sent from rumobile@toolbox by the page oss.rutgers.edu/mobile/";

// try to slow spam without slowing down responses too much
usleep(200000);
mail("oss@oss.rutgers.edu", $subject, $body);

if (isset($_POST["redirect"])) {
    echo "redirect";
    echo $_POST["redirect"];
    header("Location: " . $_POST["redirect"]);
}
echo "success!";
?>