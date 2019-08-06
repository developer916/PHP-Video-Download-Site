<?php
$filename = $_GET['filename'];
$result = array();
$status = "";
exec("/opt/lampp/htdocs/youtube/mp3converter.sh ".$filename,$result,$status);
print_r($result);
echo $status;
?>
