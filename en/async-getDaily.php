<?php
require_once('common/languages.php');
$data = array();
$dailyMotionID = $_POST['dailyMotionID'];
$url = $_POST['url'];
$time = mktime();
$deletePath = "../daily";
function rrmdir($dir) {
    foreach(glob($dir . '/' . '*') as $file) {
        if(is_dir($file)){
            rrmdir($file);
        }else{
            unlink($file);
        }
    }
    rmdir($dir);
}

if(is_dir($deletePath)){

    $objects = scandir($deletePath);
    foreach ($objects as $object) {
        if ($object != "." && $object != "..") {
            if (filetype($deletePath."/".$object) == "dir"){
                if($time-$object >600){
                rrmdir($deletePath."/".$object);
                }
            }
            else { unlink($deletePath."/".$object);}
        }
    }
    reset($objects);
}
mkdir('../daily/'.$time,0777);
chmod('../daily/'.$time,0777);
$hash = json_decode(file_get_contents("http://www.dailymotion.com/services/oembed?format=json&url=http://www.dailymotion.com/embed/video/$dailyMotionID"), true);
$title = $hash['title'];
if($title  == ""){
    $data['result'] ="failedRead";
    $data['message'] =$language_could_not_download;
    echo json_encode($data);
    exit();
}
$fileFolder = '"/opt/lampp/htdocs/youtube/daily/'.$time.'/%(id)s.%(ext)s "' .$url;
$statement =   '/opt/lampp/htdocs/youtube/daily.sh  '.$fileFolder ;
$result = array();
$status = '';
exec($statement, $result, $status);
//$statement = '/opt/lampp/htdocs/youtube/daily.sh '.$url;

$result = array();
$status = '';
exec($statement, $result, $status);

$reallyName = "";
$urlList = explode('/',$url);
if(isset($urlList[4])){
    $real = explode('_',$urlList[4]);
    if(isset($real[1])){
        $reallyName = $real[1].".mp4";
    }
}




if($status == 0) {
    $files= scandir($deletePath."/".$time,1);
    $convertFileName = $files[0];
    if(isset($reallyName)){
        rename("../daily/".$time."/".$convertFileName ,"../daily/".$time."/".$reallyName);
        $fileUrl =  "http://" . $_SERVER['SERVER_NAME']."/youtube/dailyDownload.php?title=".$time."/".$reallyName;
    }else{
        $fileUrl =  "http://" . $_SERVER['SERVER_NAME']."/youtube/dailyDownload.php?title=".$time."/".$convertFileName;
    }
    $data['result'] ="success";
    $data['title'] = $title;
    $data['dailyMotionID'] = $dailyMotionID;
    $data['url'] = $fileUrl;
    $data['dailyUrl'] =$url;
}else{
    $data['result'] ="failed";
    $data['title'] = $title;
    $data['dailyMotionID'] = $dailyMotionID;
    $data['dailyUrl'] =$url;
}
echo json_encode($data);
exit();
?>