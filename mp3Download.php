<?php

$title =($_GET['title']) ;
$filePath ="mp3/".$title;
$fileReallyPath = "mp3/".$title;
$fileName = basename($filePath);
$fileSize = filesize($fileReallyPath);
//    header('Pragma: public');
//    header('Expires: 0');
//    header('Cache-Control: must-revalidate, post-check=0, pre-check=0');
//    header('Cache-Control: public');
//    header('Content-Description: File Transfer');
//    header('Content-Type: application/force-download');
//    header('Content-Disposition: attachment; filename='.$fileName);
//    header('Content-Transfer-Encoding: binary');
//    header('Content-Length: '.$fileSize);
//    readfile($fileName);
//
//    header("Cache-Control: private");
//    header("Content-Type: audio/mpeg, audio/x-mpeg, audio/x-mpeg-3, audio/mpeg3");
//    header("Content-Length: " . $fileSize);
//    header("Content-Disposition: attachment; filename=" . $fileName);
//    readfile ($filePath);
/***working Type****/
//    header('Content-Description: File Transfer');
//    header('Content-Type: audio/mpeg, audio/x-mpeg, audio/x-mpeg-3, audio/mpeg3');
//    header('Content-Disposition: attachment; filename="' . $fileName . '"');
//    header("Content-Transfer-Encoding: binary");
//    header('Expires: 0');
//
//    header('Cache-Control: must-revalidate, post-check=0, pre-check=0');
//    header('Pragma: public');
//    header('Content-Length: '.$fileSize);
//    readfile ($filePath);

if (strpos($_SERVER['HTTP_USER_AGENT'], 'MSIE') !== FALSE)
 {
     header('Content-Type: audio/mpeg, audio/x-mpeg, audio/x-mpeg-3, audio/mpeg3');
     header('Content-Disposition: attachment; filename="' . $fileName . '"');
     header('Expires: 0');
     header('Content-Length: '.$fileSize);
     header('Cache-Control: must-revalidate, post-check=0, pre-check=0');
     header("Content-Transfer-Encoding: binary");
     header('Pragma: public');
 }
 else
 {
     header('Content-Type: audio/mpeg, audio/x-mpeg, audio/x-mpeg-3, audio/mpeg3');
     header('Content-Disposition: attachment; filename="' . $fileName . '"');
     header("Content-Transfer-Encoding: binary");
     header('Expires: 0');
     header('Content-Length: '.$fileSize);
     header('Pragma: no-cache');
 }

readfile($filePath);
exit;


?>