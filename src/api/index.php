<?php
//header("Access-Control-Allow-Origin: http://marcel-schmager.com/contact");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if (empty($_POST['firstName']) && empty($_POST['lastName']) && empty($_POST['mail']) && empty($_POST['text'])) die();

if ($_POST)
	{

	// set response code - 200 OK
	http_response_code(200);
	$subject = $_POST['firstName'];
	$to = "schmager29@gmail.com";
	$from = $_POST['mail'];

	// data
	$msg = $_POST['phone'] . $_POST['text'];

	// Headers
	$headers = "MIME-Version: 1.0\r\n";
	$headers.= "Content-type: text/html; charset=UTF-8\r\n";
	$headers = 'From: contact@marcel-schmager.com' . "\r\n" .
	'Reply-To: '.$this->getFrom() . "\r\n" .
	'X-Mailer: PHP/' . phpversion();
	mail($to, $subject, $msg, $headers);

	// echo json_encode( $_POST );
	echojson_encode(array(
		"sent" => true
	));
	}
  else
	{

	// tell the user about error

	echojson_encode(["sent" => false, "message" => "Something went wrong"]);
	}

?>