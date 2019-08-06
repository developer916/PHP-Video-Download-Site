<?php

$title =($_GET['title']) ;

$filePath ="vimeo/".$title;
$fileReallyPath = "vimeo/".$title;
$fileName = basename($filePath);
$fileSize = filesize($fileReallyPath);
if (strpos($_SERVER['HTTP_USER_AGENT'], 'MSIE') !== FALSE)
{
    header('Content-Type: application/force-download');
    header('Content-Disposition: attachment; filename="' . $fileName . '"');
    header('Expires: 0');
    header('Content-Length: '.$fileSize);
    header('Cache-Control: must-revalidate, post-check=0, pre-check=0');
    header("Content-Transfer-Encoding: binary");
    header('Pragma: public');
}
else
{
    header('Content-Type: application/force-download');
    header('Content-Disposition: attachment; filename="' . $fileName . '"');
    header("Content-Transfer-Encoding: binary");
    header('Expires: 0');
    header('Content-Length: '.$fileSize);
    header('Pragma: no-cache');
}

readfile($filePath);
exit;
