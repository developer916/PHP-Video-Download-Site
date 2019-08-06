<?php
    include_once('youtube/config.php');
    ob_start();
    $data = array();
    function clean($string) {
        $string = str_replace(' ', '-', $string); // Replaces all spaces with hyphens.
        return preg_replace('/[^A-Za-z0-9\-]/', '', $string); // Removes special chars.
    }

    function formatBytes($bytes, $precision = 2) {
        $units = array('B', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB');
        $bytes = max($bytes, 0);
        $pow = floor(($bytes ? log($bytes) : 0) / log(1024));
        $pow = min($pow, count($units) - 1);
        $bytes /= pow(1024, $pow);
        return round($bytes, $precision) . '' . $units[$pow];
    }
    function is_chrome(){
        $agent=$_SERVER['HTTP_USER_AGENT'];
        if( preg_match("/like\sGecko\)\sChrome\//", $agent) ){	// if user agent is google chrome
            if(!strstr($agent, 'Iron')) // but not Iron
                return true;
        }
        return false;	// if isn't chrome return false
    }
if(isset($_REQUEST['youtubeID'])) {
    $my_id = $_REQUEST['youtubeID'];

    if(strlen($my_id)>11){
        $url   = parse_url($my_id);
        $my_id = NULL;
        if( is_array($url) && count($url)>0 && isset($url['query']) && !empty($url['query']) ){
            $parts = explode('&',$url['query']);
            if( is_array($parts) && count($parts) > 0 ){
                foreach( $parts as $p ){
                    $pattern = '/^v\=/';
                    if( preg_match($pattern, $p) ){
                        $my_id = preg_replace($pattern,'',$p);
                        break;
                    }
                }
            }
            if( !$my_id ){
                $data['result'] = "error";
                $data['message'] = "No video id passed in";
                header('Content-Type: application/json');
                echo json_encode($data);
                exit();
            }
        }else{
            $data['result'] = "error";
            $data['message'] = "Invalid url";
            header('Content-Type: application/json');
            echo json_encode($data);
            exit();
        }
    }
}else {
    $data['result'] = "error";
    $data['message'] = "No video id passed in";
    header('Content-Type: application/json');
    echo json_encode($data);
    exit();
}
$my_video_info = 'http://www.youtube.com/get_video_info?&video_id='. $my_id.'&asv=3&el=detailpage&hl=en_US';
$my_video_info = curlGet($my_video_info);
$thumbnail_url = $title = $url_encoded_fmt_stream_map = $type = $url = '';
parse_str($my_video_info);
$my_title = $title;

$changeTitle = $title;

$listTitle =str_replace('/','-',$changeTitle );
$listTitle_empty = str_replace(' ','-',$listTitle);
$data['title'] = $listTitle_empty;
$cleanedtitle = clean($title);

if(isset($url_encoded_fmt_stream_map)) {
    $my_formats_array = explode(',',$url_encoded_fmt_stream_map);
} else {
    $data['result'] = "error";
    $data['message'] = "No encoded format stream found.<br>Here is what we got from YouTube:";
    header('Content-Type: application/json');
    echo json_encode($data);
    exit();
}
if (count($my_formats_array) == 0) {
    $data['result'] = "error";
    $data['message'] = "No format stream map found - was the video id correct?";
    header('Content-Type: application/json');
    echo json_encode($data);
    exit();
}
$i = 0;
$avail_formats[] = '';
$ipbits = $ip = $itag = $sig = $quality = '';
$expire = time();
foreach($my_formats_array as $format) {
    parse_str($format);
    $avail_formats[$i]['itag'] = $itag;
    $avail_formats[$i]['quality'] = $quality;
    $type = explode(';',$type);
    $avail_formats[$i]['type'] = $type[0];
    $avail_formats[$i]['url'] = urldecode($url) . '&signature=' . $sig;
    parse_str(urldecode($url));
    $avail_formats[$i]['expires'] = date("G:i:s T", $expire);
    $avail_formats[$i]['ipbits'] = $ipbits;
    $avail_formats[$i]['ip'] = $ip;
    echo $avail_formats[$i]['url'] ;
    echo "<br>";
    $i++;
}
exit();
for ($i = 0; $i < count($avail_formats); $i++) {
    if($avail_formats[$i]['type'] == "video/mp4" && $avail_formats[$i]['quality'] == "hd720" && formatBytes(get_size($avail_formats[$i]['url'])) != "0B"){
        $data['result'] = "success";
        $data['url'] ="youtube/download.php?mime=" . $avail_formats[$i]['type'] ."&title=". urlencode($my_title) ."&token=".base64_encode($avail_formats[$i]['url']);
        header('Content-Type: application/json');
        echo json_encode($data);
        exit();
    }
}
for ($i = 0; $i < count($avail_formats); $i++) {
    if($avail_formats[$i]['type'] == "video/mp4" && $avail_formats[$i]['quality'] == "medium" && formatBytes(get_size($avail_formats[$i]['url'])) != "0B"){
        $data['result'] = "success";
        $data['url'] ="youtube/download.php?mime=" . $avail_formats[$i]['type'] ."&title=". urlencode($my_title) ."&token=".base64_encode($avail_formats[$i]['url']);
        header('Content-Type: application/json');
        echo json_encode($data);
        exit();
    }
}

for ($i = 0; $i < count($avail_formats); $i++) {
    if($avail_formats[$i]['type'] == "video/x-flv" && $avail_formats[$i]['quality'] == "small" && formatBytes(get_size($avail_formats[$i]['url'])) != "0B"){
        $data['result'] = "success";
        $data['url'] ="youtube/download.php?mime=" . $avail_formats[$i]['type'] ."&title=". urlencode($my_title) ."&token=".base64_encode($avail_formats[$i]['url']);
        header('Content-Type: application/json');
        echo json_encode($data);
        exit();
    }
}
for ($i = 0; $i < count($avail_formats); $i++) {
    if($avail_formats[$i]['type'] == "video/3gpp" && $avail_formats[$i]['quality'] == "small" && formatBytes(get_size($avail_formats[$i]['url'])) != "0B"){
        $data['result'] = "success";
        $data['url'] ="youtube/download.php?mime=" . $avail_formats[$i]['type'] ."&title=". urlencode($my_title) ."&token=".base64_encode($avail_formats[$i]['url']);
        header('Content-Type: application/json');
        echo json_encode($data);
        exit();
    }
}
for ($i = 0; $i < count($avail_formats); $i++) {
    if($avail_formats[$i]['type'] == "video/webm" && $avail_formats[$i]['quality'] == "medium" && formatBytes(get_size($avail_formats[$i]['url'])) != "0B"){
        $data['result'] = "success";
        $data['url'] ="youtube/download.php?mime=" . $avail_formats[$i]['type'] ."&title=". urlencode($my_title) ."&token=".base64_encode($avail_formats[$i]['url']);
        header('Content-Type: application/json');
        echo json_encode($data);
        exit();
    }
}


$data['result'] = 'empty';
$data['youtubeID'] = $my_id;

header('Content-Type: application/json');
echo json_encode($data);

?>