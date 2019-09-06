<?php

if (!isset($_POST["redirect_error"])) {
    die("There was an issue with your request :(");
}

if (!isset($_POST["message"]) || !isset($_POST["email"])) {
    header("Location: " . $_POST["redirect_error"]);
    // incase the don't get redirected somehow
    die("must have message and email");
}

$token = $_POST["g-recaptcha-response"];
if (!isset($_POST["g-recaptcha-response"]) || $token === "") {
    header("Location: " . $_POST["redirect_error"]);
    die("must fill captcha");
}
// validate captcha
echo "here";
$verify_url = "http://www.google.com/recaptcha/api/siteverify";
$secret = "6LfBEIQUAAAAAOghiv_FVFeSkTGHhjmv9zGOWMRd";
$url = "{$verify_url}?secret={$secret}&token={$token}";
echo $url;
$ch = curl_init();
echo "here2";
curl_setopt($ch, CURLOPT_URL, $url);
echo "here3";
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
echo "here4";
$resp = curl_exec($ch);
echo "here4.5";
$httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
echo "here4.75";
$errno_c = curl_errno($ch);
echo "<br>httpcode: {$httpcode}<br>erno: {$errno_c}<br>";
echo $resp;
$result = json_decode(resp, true);
echo "here5";
curl_close($ch);
echo "here6";

var_dump($result);
die("here");


// send email

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
// mail("oss@oss.rutgers.edu", $subject, $body);

if (isset($_POST["redirect"])) {
    echo "redirect";
    echo $_POST["redirect"];
    header("Location: " . $_POST["redirect"]);
}
echo "success!";
?>