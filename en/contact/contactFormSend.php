<?php
require_once 'class.phpmailer.php';
$name =$_POST['name'];
$email = $_POST['email'];
$content = $_POST['message'];
$result ="success";
$data = array();

if($name == "" || $email == "" || $content == "") { 
	$result = "failed"; 
	$message = "You have to insert correct information for contact form.";
	$data['result'] = $result;
	$data['message'] = $message;
header('Content-Type: application/json');
	echo json_encode($data);
   	exit();

}else{
	$confirm = "Contact Form Message";
	$usermessage ="<html>
				<body>
					<table style='width:100%'>
						<tr>
							<td>
								Sender Name: 
							</td>
							<td>".$name."</td>
						</tr>
						<tr>
							<td>
								Sender Email: 
							</td>
							<td>".$email."</td>
						</tr>
						<tr>
							<td>
								Sender Message: 
							</td>
							<td>".$content ."</td>
						</tr>
					
					</table>
				</body>
			</html>";
	$mailList[0]="forestfuture89@gmail.com";
	$mail= new PHPMailer();
       $mail->IsSMTP();
       $mail->Host       = "secure162.servconfig.com";        // sets GMAIL as the SMTP server
       $mail->SMTPDebug = 1;
       $mail->SMTPAuth   = true;                    // enable SMTP authentication
       $mail->SMTPSecure = "ssl";
       $mail->Port       = 465;

$mail->Username   = "noreply@wouptube.com";
$mail->Password   = "forest9164974";
$mail->From =       "noreply@wouptube.com";
$mail->FromName =   "noreply@wouptube.com";
foreach ($mailList as $to_add){
	$mail->AddAddress($to_add,"Firstname  Lastname");
}
$mail->Subject    = $confirm;
$mail->AltBody    = "To view the message, please use an HTML compatible email viewer!";
$mail->MsgHTML($usermessage);
if(!$mail->Send()) {
	$result ="failed";
	$message = "My email account has some problem, you can send me message in the later".
	$data['result'] = $result ;
	$data['message'] = $message;
}else{
	$result = "success";
	$data['result'] = $result ;
}
header('Content-Type: application/json');
echo json_encode($data);
   	 exit();

}


?>