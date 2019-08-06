<?php 
/*$api_endpoint = 'http://vimeo.com/api/v2/';
class VideoData 
{ 
	function __construct($videoId){
	  $this->apiLink = 'http://vimeo.com/api/v2/video/' . $videoId . '.xml';
	  $this->getData();
	}

	private function getData() {
	  $curl = curl_init($this->apiLink);
	  curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
	  curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);
	  curl_setopt($curl, CURLOPT_TIMEOUT, 30);
	  $this->videoData = simplexml_load_string(curl_exec($curl));
	  curl_close($curl);
	}
 
}*/


//$result_list = new VideoData(76843270);
//print_r($result_list);
//print_r($result_list->videoData->video->title);
/*$filename = $_GET['filename'];
/usr/local/bin/youtube-dl -o "/opt/lampp/htdocs/youtube/vimeo/%(id)s.%(ext)s" --extract-audio  --audio-format mp3 $1
$result = array();
$status = "";
exec("/opt/lampp/htdocs/youtube/mp3converter.sh ".$filename,$result,$status);
print_r($result);
echo $status;*/
//
//$url = 'https://vimeo.com/113246273';
//echo $url;
//exec("/opt/lampp/htdocs/youtube/mp3converter.sh ".$url,$result,$status);
//

//print_r($result);
//echo $status;
$deletePath ="vimeo/";
$objects = scandir($deletePath);
$time=mktime();
mkdir('vimeo/'.$time,0777);
chmod('vimeo/'.$time,0777);
foreach ($objects as $object) {
    if ($object != "." && $object != "..") {
        if (filetype($deletePath."/".$object) == "dir"){
            if($time-$object >600){
                rmdir($deletePath."/".$object);
            }else{
                echo "test";
            }
        }
        else { unlink($deletePath."/".$object);}
    }
}
exit();
reset($objects);
$realVimeoID = "6370469";
$time=mktime();
mkdir('vimeo/'.$time,0777);
chmod('vimeo/'.$time,0777);
$url = "https://vimeo.com/".$realVimeoID;
$fileFolder = '"/opt/lampp/htdocs/youtube/vimeo/'.$time.'/%(id)s.%(ext)s "' .$url;
$statement =   '/opt/lampp/htdocs/youtube/vimeo1.sh  '.$fileFolder ;
$result = array();
$status = '';
exec($statement, $result, $status);
print_r($statement);
echo "<br>";
echo $status;


$url = "https://vimeo.com/".$realVimeoID;
$statement = '/opt/lampp/htdocs/youtube/vimeo.sh '.$url;
$result = array();
$status = '';
exec($statement, $result, $status);
?>
