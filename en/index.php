<?php
$pageNo =1;
require_once('common/constant.php');
require_once('common/languages.php');
require_once('newHeader.php');

?>
<div class="content" id="homeContent">
    <div class="container">
        <!-- Service Box -->
        <div class="row text-center margin-bottom-60">
            <div class="col-md-6 col-sm-6 col-xs-12 col-md-offset-3 col-sm-offset-3">
                <div class="form-group margin-bottom-25">
                    <div class="alert alert-danger" id="alertDiv" >
                        <a href="javascript:void(0)" class="close"  onclick="resetMainForm()"><img src="images/close icon.png" style="width: 15px"></a>
                        <p id="dangerAlertText"> This is my test</p>
                    </div>
                    <div class="site-notifications">
                    </div>
                    <input type="text" class="form-control" name="url" id="url" placeholder="Paste URL or search here">
                </div>
                <div class="form-group">
                    <a class="btn-u btn-u-red buttons"  href="javascript:void(0)" onclick="processSearchString()" id="go-button"><?php echo $language_go;?></a>
                    <a href ="javascript:void(0)" class="btn-u btn-u-orange download-video" style="display: none" id="download-video"><?php echo $language_download_video;?></a>
                    <a href ="javascript:void(0)" class="btn-u btn-u-orange download-mp3" style="display: none" id="download-mp3" onclick="downloadMp3()"><?php echo $language_download_mp3;?></a>
                    <a href ="javascript:void(0)" class="btn-u btn-u-orange download-vimeo" style="display: none" id="download"><?php echo $language_download;?></a>
                </div>
                <input type="hidden" name="youtubeID" id="youtubeID">
                <input type="hidden" name="youtubeTitle" id="youtubeTitle">
                <a href="" id="downloadReallyMp3"></a>
            </div>
        </div>
        <!-- End Service Box -->
    </div><!--/container -->
</div>

<?php  require_once('newFooter.php');?>
<script type="text/javascript" src="http://code.jquery.com/ui/1.11.4/jquery-ui.min.js"></script>
<script type="text/javascript" src="js/jquery.timeago.js"></script>
<script type="text/javascript" src="js/index.js"></script>

<script type="text/javascript" src="js/spin.js"></script>

<script type="text/javascript">
    var languageList = array();
    jQuery(document).ready(function() {
        App.init();
        App.initParallaxBg();
        FancyBox.initFancybox();
        OwlCarousel.initOwlCarousel();

        /****height ******/
        var height = $(window).height();
        var footerheight = $('.footer-v1').outerHeight();
        var headerHeight  = $('.header ').outerHeight();
        var bodyHeaderHeight = $('.interactive-slider-v2').outerHeight();
        var mainHeight = height-footerheight-headerHeight-bodyHeaderHeight;
        var reallyMainHeight = $("#homeContent").outerHeight();
        if(reallyMainHeight < mainHeight){
            $('#homeContent').attr('style', 'min-height:' + mainHeight+'px');
        }
        /********/
        $("#url").keyup( function(event){
            if( event.keyCode == 13  && select_list == 0){
                processSearchString();
            }
        });
        $("#url").bind("paste",function(){
            $("#go-button").show();
            $("#download-video").hide();
            $("#download-mp3").hide();
            $("#download").hide();
            onGetVideoID();
            $("#url").autocomplete( "disable" );
            $("#alertDiv").hide();
        });
        $("#url").bind("keydown", function (event) {
            if(event.keyCode == 46 || event.keyCode == 8){
                var tr= searchbox_contains_url();
                if(tr  == !1){
                    resetMainForm();
                }
            }
        });
        $("#url").autocomplete({source:function(n,e,event){
            $.getJSON("http://suggestqueries.google.com/complete/search?callback=?",{hl:"en",ds:"yt",jsonp:"suggestCallBack",q:n.term,client:"youtube"}),
                suggestCallBack=function(n){
                    var t=[];$.each(n[1],function(n,e){t.push({value:e[0]
                    })
                    }),
                    t.length>YT_AUTOCOMPLETE_SUGGESTIONS&&(t.length=YT_AUTOCOMPLETE_SUGGESTIONS),e(t)
                }
        },
            messages:{
                noResults:"",results:function(){}
            },
            position:{at:"left bottom+6"},
            select:function(event){

                if( event.keyCode != 13){
                    select_list = 1;
                    setTimeout(function() {
                        processSearchString();
                    },300);
                }
            }
        })
        $("#bodyContent").find('iframe').remove();
    });

</script>

</body>
</html>