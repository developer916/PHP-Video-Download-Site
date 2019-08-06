<?php
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

}
$result_list = new VideoData(90747156);
print_r( $result_list->videoData->video->url);

//$url = "http://vimeo.com/moogaloop/load/clip:22439234";
////$id = "22439234";
////$base = 'http://player.vimeo.com/play_redirect';
////$url = sprintf('http://player.vimeo.com/video/%s', $id);
//$my_ch = curl_init();
//curl_setopt($my_ch, CURLOPT_URL,$url);
//curl_setopt($my_ch, CURLOPT_HEADER,         true);
//curl_setopt($my_ch, CURLOPT_NOBODY,         true);
//curl_setopt($my_ch, CURLOPT_RETURNTRANSFER, true);
//curl_setopt($my_ch, CURLOPT_TIMEOUT,        10);
//$content = curl_exec($my_ch);
//curl_close( $my_ch );
//print_r($content);

class VideoController
{

    /**
     * @var array Vimeo video quality priority
     */
    public $vimeoQualityPrioritet = array('sd', 'hd', 'mobile');

    /**
     * @var string Vimeo video codec priority
     */
    public $vimeoVideoCodec = 'h264';

    /**
     * Get direct URL to Vimeo video file
     *
     * @param string $url to video on Vimeo
     * @return string file URL
     */
    public function getVimeoDirectUrl($url)
    {
        $result = '';
        $videoInfo = $this->getVimeoVideoInfo($url);
//        print_r($videoInfo);
//        exit();
        if ($videoInfo && $videoObject = $this->getVimeoQualityVideo($videoInfo->request->files))
        {
            $result = $videoObject->url;
        }
        return $result;
    }

    /**
     * Get Vimeo video info
     *
     * @param string $url to video on Vimeo
     * @return \stdClass|null result
     */
    public function getVimeoVideoInfo($url)
    {
        $videoInfo = null;
        $page = $this->getRemoteContent($url);

        $dom = new \DOMDocument("1.0", "utf-8");
        libxml_use_internal_errors(true);
        $dom->loadHTML('<?xml version="1.0" encoding="UTF-8"?>' . "\n" . $page);
        $xPath = new \DOMXpath($dom);
        $video = $xPath->query('//div[@data-config-url]');
        if ($video)
        {
            $videoObj = json_decode($this->getRemoteContent($video->item(0)->getAttribute('data-config-url')));
            if (!property_exists($videoObj, 'message'))
            {
                $videoInfo = $videoObj;
            }
        }
        return $videoInfo;
    }

    /**
     * Get vimeo video object
     *
     * @param stdClass $files object of Vimeo files
     * @return stdClass Video file object
     */
    public function getVimeoQualityVideo($files)
    {
        $video = null;
        if (!property_exists($files, $this->vimeoVideoCodec) && count($files->codecs))
        {
            $this->vimeoVideoCodec = array_shift($files->codecs);
        }
        $codecFiles = $files->{$this->vimeoVideoCodec};
        foreach ($this->vimeoQualityPrioritet as $quality)
        {
            if (property_exists($codecFiles, $quality))
            {
                $video = $codecFiles->{$quality};
                break;
            }
        }
        if (!$video)
        {
            foreach (get_object_vars($codecFiles) as $file)
            {
                $video = $file;
                break;
            }
        }
        return $video;
    }

    /**
     * Get remote content by URL
     *
     * @param string $url remote page URL
     * @return string result content
     */
    public function getRemoteContent($url)
    {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 10);
        curl_setopt($ch, CURLOPT_TIMEOUT, 20);
        curl_setopt($ch, CURLOPT_HEADER, true);
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
        curl_setopt($ch, CURLOPT_MAXREDIRS, 10);
        curl_setopt($ch, CURLOPT_USERAGENT, 'spider');
        $content = curl_exec($ch);
        return $content;
//        print_r($content);
//        exit();
//        $my_ch = curl_init();
//        curl_setopt($my_ch, CURLOPT_URL,$url);
//        curl_setopt($my_ch, CURLOPT_HEADER,         true);
//        curl_setopt($my_ch, CURLOPT_NOBODY,         true);
//        curl_setopt($my_ch, CURLOPT_RETURNTRANSFER, true);
//        curl_setopt($my_ch, CURLOPT_TIMEOUT,        10);
//        $content = curl_exec($my_ch);
//        curl_close( $my_ch );

    }

}

//$video = new VideoController;
//var_dump($video->getVimeoDirectUrl('http://vimeo.com/90747156'));
?>
