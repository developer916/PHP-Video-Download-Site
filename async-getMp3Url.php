<?php
$data = array();
$deletePath = "mp3";

$time=mktime();
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
mkdir('mp3/'.$time,0777);
chmod('mp3/'.$time,0777);

$filename = $_POST['youtubeID'];
$title = ($_POST['youtubeTitle']);
$listTitle =str_replace('/','-',$title);
$listTitle_empty = str_replace(' ','-',$listTitle);
$listTitle_empty =  preg_replace('/[^A-Za-z0-9\-]/', '', $listTitle_empty );

$reallyName=$listTitle_empty.".mp3";
$name = "http://www.youtube.com/watch?v=".$filename;
$result = array();
$status = "";
$fileFolder = '"/opt/lampp/htdocs/youtube/mp3/'.$time.'/%(id)s.%(ext)s --extract-audio  --audio-format mp3 "' .$name;
$statement =   '/opt/lampp/htdocs/youtube/mp3converter1.sh  '.$fileFolder ;

exec($statement,$result,$status);
if($status == 0) {
    $files= scandir($deletePath."/".$time,1);
    $convertFileName = $files[0];
    rename("mp3/".$time.'/'.$convertFileName ,"mp3/".$time.'/'.$reallyName);
    $fileUrl =  "http://" . $_SERVER['SERVER_NAME']."/youtube/mp3Download.php?title=".$time.'/'.$reallyName;
    $data['filename']	 = $reallyName;
    $data['url'] = $fileUrl;
    $data['result'] ="success";
}else{
    $data['result'] ="failed";
}
echo json_encode($data);
exit();
?>