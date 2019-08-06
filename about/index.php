<?php
    $pageNo = 2;
    require_once('../common/constant.php');
    require_once('../common/newHeader.php');
?>
<div class="wrapper " id="about-us-wrapper-1">
    <div class="bg-color-light" id="bg-color-light-1">
        <div class="container content-sm">
            <div class="headline-center margin-bottom-60">
                <h1 style="border-bottom: 0px"><span style="color: #ee352a">Wouptube</span> is the world's simplest Youtube downloader!</h1>
            </div>
            <div class="col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-12" style="font-size: 17px!important; padding-bottom: 90px ">
                <p>
                    Wouptube is the easiest way to download Youtube videos to your computer. <br>
                    Why is Wouptube better than all the other Youtube downloaders?<br>
                </p>
                <ul>
                    <li>
                        It is really fast
                    </li>
                    <li>
                        It is very simple: You just have to paste the Video URL and press the Download button
                    </li>
                    <li>
                        Wouptube is an online youtube downloader which means you don't have to install any software on your computer and run the risk of computer viruses, malware and adware.
                    </li>
                    <li>
                        It also allows you to download the MP3 of the Youtube video
                    </li>
                    <li>
                        It allows you to download the High Quality versions of Videos and MP3s
                    </li>
                    <li>
                        And the best part? It's Free!
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>


<?php require_once('../common/newFooter.php');?>
<script type="text/javascript">
    jQuery(document).ready(function() {
        App.init();
        var height = $(window).height();
        var footerheight = $('.footer-v1').outerHeight();
        var headerHeight  = $('.header ').outerHeight();
        var mainHeight = height-footerheight-headerHeight-12;
        var reallyMainHeight = $("#about-us-wrapper-1").outerHeight();
        if(reallyMainHeight < mainHeight){
            $('#about-us-wrapper-1').attr('style', 'min-height:' + mainHeight+'px');
            $('#bg-color-light-1').attr('style', 'min-height:' + mainHeight+'px');
        }


    });
</script>