/**
 * Created by Administrator on 8/7/2015.
 */

var paste_value =0;
var select_list = 0;
var YT_AUTOCOMPLETE_SUGGESTIONS= 6;
function processSearchString(){
    select_list = 0;
    var n=$("#url").val();
    var key = "AIzaSyAmuUYLJCavfVusFZB5wohWS0pRSPgbGKQ";
    var maxResult = 15;
    var DOWNLOAD_LINK_DOMAIN = "www.testcode.localhost/projectConvert/";
    var MAX_DESCRIPTION_LENGTH =150;
    if(n){
        var e="https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&q="+fixedEncodeURIComponent(n)+"&maxResults="+maxResult+"&key="+key;
        $.getJSON(e,function(n){
            var e=n.items;
            if(e.length<1){
                $("#myModaltext").html("No videos found.");
                var a = $("<a>")
                    .attr("href", "#payNowQuoteDiv")
                    .attr("data-toggle","modal")
                    .appendTo("body");

                a[0].click();

                a.remove();

            }else{
                for(var t=e[0].id.videoId,o=1;o<e.length;o++){
                    t+=","+e[o].id.videoId;
                }
                var i="https://www.googleapis.com/youtube/v3/videos?id="+t+"&part=snippet%2Cstatistics%2CcontentDetails&key="+key;
                $.getJSON(i,function(n) {
                    $("div#myModaltext").html("");

                    var e = n.items;
                    var contents = "";
                    for (var t = 0; t < e.length; t++) {
                        var o = e[t].id,
                            i = convert_yt_duration(e[t].contentDetails.duration),
                            a = (e[t].contentDetails.licensedContent, e[t].snippet.description);
                        a.length >MAX_DESCRIPTION_LENGTH && (a = a.substring(0, MAX_DESCRIPTION_LENGTH) + "..."),
                            contents+="<a onclick='visitPage(\""+o+"\");" +"return false;' href='#'>",
                            contents+="<div class='video-result' title='Click to download'>",
                            contents+="  <div class='video-result-top'>",
                            contents+="    <div class='video-result-thumbnail'><img src='"+e[t].snippet.thumbnails.medium.url+"' /><div class='vrd-duration'>"+i+"</div></div>",
                            contents+="    <div class='video-result-details'>",
                            contents+="      <div class='vrd-title'>"+e[t].snippet.title+"</div>",
                            contents+="      <div class='vrd-part'>"+jQuery.timeago(e[t].snippet.publishedAt)+" &bull; "+parseInt(e[t].statistics.viewCount).toLocaleString()+" views &bull; ",
                            contents+="        <span class='glyphicon glyphicon-thumbs-up ' aria-hidden='true'></span> "+parseInt(e[t].statistics.likeCount).toLocaleString(),
                            contents+="        &nbsp; <span class='glyphicon glyphicon-thumbs-down' aria-hidden='true'></span> "+parseInt(e[t].statistics.dislikeCount).toLocaleString(),
                            contents+="      </div>",
                            contents+="      <div class='vrd-description'>"+a+"</div>",
                            contents+="    </div><div style='clear:both'></div>",
                            contents+="  </div>",
                            contents+="</a>",
                            contents+="</div>";

                    }

                    $("div#myModaltext").html(contents);
                    //var a = $("<a>")
                    //    .attr("href", "#payNowQuoteDiv")
                    //    .attr("data-toggle","modal")
                    //    .appendTo("body");
                    //    a[0].click();
                    //    a.remove();
                    $("div#payNowQuoteDiv").modal("show");
                });
            }
        });
    }
}
function onPayNow(){
    var n=$("#url").val();
    select_list = 0;
    var key = "AIzaSyA7rNvgJ9KkUptdCcpGyrNZGUD1YffTqeU";
    var maxResult = 15;
    var DOWNLOAD_LINK_DOMAIN = "www.testcode.localhost/projectconvert/";
    var MAX_DESCRIPTION_LENGTH =150;
    if(n){
        var e="https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&q="+fixedEncodeURIComponent(n)+"&maxResults="+maxResult+"&key="+key;
        $.getJSON(e,function(n){
            var e=n.items;
            if(e.length<1){
                $("#myModaltext").html("No videos found.");
                var a = $("<a>")
                    .attr("href", "#payNowQuoteDiv")
                    .attr("data-toggle","modal")
                    .appendTo("body");

                a[0].click();

                a.remove();

            }else{
                for(var t=e[0].id.videoId,o=1;o<e.length;o++){
                    t+=","+e[o].id.videoId;
                }
                var i="https://www.googleapis.com/youtube/v3/videos?id="+t+"&part=snippet%2Cstatistics%2CcontentDetails&key="+key;
                $.getJSON(i,function(n) {
                    var e = n.items;
                    contents = "";
                    for (var t = 0; t < e.length; t++) {
                        var o = e[t].id,
                            i = convert_yt_duration(e[t].contentDetails.duration),
                            a = (e[t].contentDetails.licensedContent, e[t].snippet.description);
                        a.length >MAX_DESCRIPTION_LENGTH && (a = a.substring(0, MAX_DESCRIPTION_LENGTH) + "..."),
                            contents+="<a onclick='visitPage(\""+o+"\");" +"return false;' href='#'>",
                            contents+="<div class='video-result' title='Click to download'>",
                            contents+="  <div class='video-result-top'>",
                            contents+="    <div class='video-result-thumbnail'><img src='"+e[t].snippet.thumbnails.medium.url+"' /><div class='vrd-duration'>"+i+"</div></div>",
                            contents+="    <div class='video-result-details'>",
                            contents+="      <div class='vrd-title'>"+e[t].snippet.title+"</div>",
                            contents+="      <div class='vrd-part'>"+jQuery.timeago(e[t].snippet.publishedAt)+" &bull; "+parseInt(e[t].statistics.viewCount).toLocaleString()+" views &bull; ",
                            contents+="        <span class='glyphicon glyphicon-thumbs-up ' aria-hidden='true'></span> "+parseInt(e[t].statistics.likeCount).toLocaleString(),
                            contents+="        &nbsp; <span class='glyphicon glyphicon-thumbs-down' aria-hidden='true'></span> "+parseInt(e[t].statistics.dislikeCount).toLocaleString(),
                            contents+="      </div>",
                            contents+="      <div class='vrd-description'>"+a+"</div>",
                            contents+="    </div><div style='clear:both'></div>",
                            contents+="  </div>",
                            contents+="</a>",
                            contents+="</div>\n"

                    }
                    $("#myModaltext").html(contents);
                    var a = $("<a>")
                        .attr("href", "#payNowQuoteDiv")
                        .attr("data-toggle","modal")
                        .appendTo("body");

                    a[0].click();

                    a.remove();
                });
            }
        });
    }
}


function visitPage(n){
    $("#payNowQuoteDiv").modal('hide');
    youtubeList(n);
}
function fixedEncodeURIComponent(n){
    return encodeURIComponent(n).replace(/[!'()]/g,escape).replace(/\*/g,"%2A")
}
var i_getVideo = 0;
var i_getMp3 =0;
function onGetVideo(youtubeID){
    $("#alertDiv").css('display', 'none');
    i_getVideo ++;
    $.ajax({
        url: "./async-getVideoUrl.php",
        cache: false,
        dataType: "json",
        type: "POST",
        data: {youtubeID: youtubeID},
        success: function (data) {
            if(data.result =="success"){
                $("#download-video").attr('href',data.url);
                $("#youtubeTitle").val(data.title);
                $("#spin").hide();
            }
            else if(data.result == "empty"){
                if(i_getVideo >= 2){
                    $("#spin").hide();
                    $("#dangerAlertText").text("You can not download this video from youtube.");
                    $("#alertDiv").css('display', 'block');
                    $("#download-video").attr('href','javascript:void(0)');
                    $("#youtubeTitle").val(data.title);
                    i_getVideo =0;
                }else{
                    onGetVideo(data.youtubeID);
                }

            }else if(data.result == "error"){
                $("#spin").hide();
                $("#dangerAlertText").text(data.message);
                $("#alertDiv").css('display', 'block');
            }
        }
    });
}

function convert_yt_duration_to_seconds(n){
    var e=n.match(/\d+/g);
    return n.indexOf("M")>=0&&-1==n.indexOf("H")&&-1==n.indexOf("S")&&(e=[0,e[0],0]),
    n.indexOf("H")>=0&&-1==n.indexOf("M")&&(e=[e[0],0,e[1]]),
    n.indexOf("H")>=0&&-1==n.indexOf("M")&&-1==n.indexOf("S")&&(e=[e[0],0,0]),
        n=0,3==e.length&&(n+=3600*parseInt(e[0]),n+=60*parseInt(e[1]),n+=parseInt(e[2])),
    2==e.length&&(n+=60*parseInt(e[0]),n+=parseInt(e[1])),1==e.length&&(n+=parseInt(e[0])),n
}
function convert_yt_duration(n){
    var e=convert_yt_duration_to_seconds(n),t=Math.floor(e/3600),o="";t&&(o+=t+":"),e-=3600*t;var i=Math.floor(e/60);return num_secs=e-60*i,o+=10>i?"0"+i+":":i+":",o+=10>num_secs?"0"+num_secs:num_secs
}


function onGetTitle(youtubeID){
    if(youtubeID){
        var d="https://www.googleapis.com/youtube/v3/videos?id="+youtubeID+"&part=snippet%2CcontentDetails&key=AIzaSyA7rNvgJ9KkUptdCcpGyrNZGUD1YffTqeU";
        $.getJSON(d,function(n){
            var e=n.items;
            if(1==e.length){
                var t=e[0].snippet.title;
                showNotification(t);
            }
        })
    }
}
function searchbox_contains_url(){
    return $("#url").data("contains-url")?!0:!1
}
function onValidUrl(youtubeID){
    if(youtubeID.length >= 11){
        $("#url").val("http://www.youtube.com/watch?v="+youtubeID);
        $("#url").data("contains-url",!1);
        $("#go-button").hide();
        $("#download-video").show();
        $("#download-mp3").show();
    }
}
function showNotification(n){
    $(".site-notifications").html("\n      <div class='site-notification'>\n        <div class='site-notification-body'>"+n+"</div>\n        <div class='btn-close-notification'><img src='images/close icon.png' style='width: 15px'></div>\n      </div>\n    "),
        $(".btn-close-notification").click(function(){resetMainForm()})
}
$(".btn-close-notification").click(function(){resetMainForm()})
function resetMainForm(){
    $("#alertDiv").css('display', 'none');
    $("#url").val("");
    hideNotification();
    //changeHashLocation("");
    $("#go-button").show();
    $("#download-video").hide();
    $("#download-mp3").hide();
    $("#download").hide();
    $("#url").data("contains-url",!0);
    var select_list = 0;

}
function hideNotification(n){
    $(".site-notification").fadeOut("fast",function(){
        $(".btn-close-notification").off("click"),$(".site-notifications").html(""),n&&n()
    })
}
window.changeHashLocation=function(n){
    var e,t;e=document.body.scrollTop,t=document.body.scrollLeft,location.hash="#"+n,document.body.scrollTop=e,document.body.scrollLeft=t
}

function onGetVideoID(){
    setTimeout(function() {
        var url = $("#url").val();
        var url_list = getHashFromURL(url);
        $("#url").autocomplete( "disable" );

        // changeHashLocation(url_list);
    },500);
}

function youtubeList(n){
    $("#spin").show();
    var opts = {
        lines: 8 // The number of lines to draw
        , length: 26 // The length of each line
        , width: 6 // The line thickness
        , radius: 40 // The radius of the inner circle
        , scale: 1.25 // Scales overall size of the spinner
        , corners: 1 // Corner roundness (0..1)
        , color: '#fff' // #rgb or #rrggbb or array of colors
        , opacity: 0.5 // Opacity of the lines
        , rotate: 0 // The rotation offset
        , direction: 1 // 1: clockwise, -1: counterclockwise
        , speed: 0.5 // Rounds per second
        , trail: 62 // Afterglow percentage
        , fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
        , zIndex: 2e9 // The z-index (defaults to 2000000000)
        , className: 'spinner' // The CSS class to assign to the spinner
        , top: '50%' // Top position relative to parent
        , left: '50%' // Left position relative to parent
        , shadow: false  // Whether to render a shadow
        , hwaccel: false // Whether to use hardware acceleration
        , position: 'fixed' // Element positioning
    }
    var target = document.getElementById('spin')
    var spinner = new Spinner(opts).spin(target);
    var i =1;
    $.each($('.spinner').find('div'), function(){
        if(i%4 == 1 || i%4 == 2 ){
            $(this).attr('class','spinner-border');
        }else{
            $(this).attr('class','spinner-border1');
        }
        i++;
    });
    var youtubeID = n;
    $("#youtubeID").val(youtubeID);
    onGetTitle(youtubeID);
    onValidUrl(youtubeID);
    onGetVideo(youtubeID);
}
if (typeof String.prototype.startsWith != 'function') {
    // see below for better implementation!
    String.prototype.startsWith = function (str){
        return this.indexOf(str) === 0;
    };
}
String.prototype.endsWith = function(suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
};
window.getHashFromURL=function(n){
    var e=null;
    if(n.toLowerCase().startsWith("http://")||n.toLowerCase().startsWith("https://")||(n="http://"+n),
            !validURL(n))return"";
    try{
        e=getHost(n).toLowerCase()
    }catch(t){

    }
    var o=!1;
    if(("youtu.be"==e||"youtube.com"==e||e.endsWith(".youtube.com")||e.endsWith(".youtu.be"))&&(o=!0),o){
        var i=getVideoID(n);
        if(i == "" || i == null){
            return;
        }else{
            youtubeList(i);
        }
    }else if("vimeo" ==e || e.endsWith(".vimeo.com" ) || "vimeo.com" == e){
        var vimeoID = getVimeoId(n);

        if(vimeoID == 0){
            $vimeoID=0;
            onDownloadVimeo(vimeoID,n);
        }else{
            onDownloadVimeo(vimeoID,n);
        }

    }else if("www.dailymotion.com" == e || "dailymotion.com" == e){
        var dailyMotionID = getDailyMotionId(n);
        onDownloadDaily(dailyMotionID,n);
    }else{
        $("#dangerAlertText").text("Currently this site is not supported.");
        $("#alertDiv").css('display', 'block');
    }}
var i_getDaily =0;
function onDownloadDaily(dailyMotionID,url){
    i_getDaily++;
    $("#spin").show();
    var opts = {
        lines: 8 // The number of lines to draw
        , length: 26 // The length of each line
        , width: 6 // The line thickness
        , radius: 40 // The radius of the inner circle
        , scale: 1.25 // Scales overall size of the spinner
        , corners: 1 // Corner roundness (0..1)
        , color: '#fff' // #rgb or #rrggbb or array of colors
        , opacity: 0.5 // Opacity of the lines
        , rotate: 0 // The rotation offset
        , direction: 1 // 1: clockwise, -1: counterclockwise
        , speed: 0.5 // Rounds per second
        , trail: 62 // Afterglow percentage
        , fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
        , zIndex: 2e9 // The z-index (defaults to 2000000000)
        , className: 'spinner' // The CSS class to assign to the spinner
        , top: '50%' // Top position relative to parent
        , left: '50%' // Left position relative to parent
        , shadow: false  // Whether to render a shadow
        , hwaccel: false // Whether to use hardware acceleration
        , position: 'fixed' // Element positioning
    }
    var target = document.getElementById('spin')
    var spinner = new Spinner(opts).spin(target);
    var i =1;
    $.each($('.spinner').find('div'), function(){
        if(i%4 == 1 || i%4 == 2 ){
            $(this).attr('class','spinner-border');
        }else{
            $(this).attr('class','spinner-border1');
        }
        i++;
    });
    $.ajax({
        url: "./async-getDaily.php",
        cache: false,
        dataType: "json",
        type: "POST",
        data: {dailyMotionID: dailyMotionID, url: url},
        success: function (data) {
            if(data.result == "success"){
                $("#spin").hide();
                showNotification(data.title);
                $("#download").attr('href',data.url);
                vimeoButton();
            }else if(data.result == "failed"){
                if(i_getDaily>=2){
                    $("#spin").hide();
                    showNotification(data.title);
                    $("#dangerAlertText").text("You can not download this video from dailymotion.");
                    $("#alertDiv").css('display', 'block');
                    i_getDaily =0;
                }else{
                    onDownloadDaily(data.dailyMotionID,data.dailyUrl);
                }
            }else if(data.result == "failedRead"){
                $("#spin").hide();
                $("#dangerAlertText").text(data.message);
                $("#alertDiv").css('display', 'block');
                i_getDaily =0;
            }
        }
    });

}
function getDailyMotionId(url) {
    var m = url.match(/^.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/);
    if (m !== null) {
        if(m[4] !== undefined) {
            return m[4];
        }
        return m[2];
    }
    return null;
}
var i_getVimeo =0;
function onDownloadVimeo(vimeoID,n){
    i_getVimeo++;
    $("#spin").show();
    var opts = {
        lines: 8 // The number of lines to draw
        , length: 26 // The length of each line
        , width: 6 // The line thickness
        , radius: 40 // The radius of the inner circle
        , scale: 1.25 // Scales overall size of the spinner
        , corners: 1 // Corner roundness (0..1)
        , color: '#fff' // #rgb or #rrggbb or array of colors
        , opacity: 0.5 // Opacity of the lines
        , rotate: 0 // The rotation offset
        , direction: 1 // 1: clockwise, -1: counterclockwise
        , speed: 0.5 // Rounds per second
        , trail: 62 // Afterglow percentage
        , fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
        , zIndex: 2e9 // The z-index (defaults to 2000000000)
        , className: 'spinner' // The CSS class to assign to the spinner
        , top: '50%' // Top position relative to parent
        , left: '50%' // Left position relative to parent
        , shadow: false  // Whether to render a shadow
        , hwaccel: false // Whether to use hardware acceleration
        , position: 'fixed' // Element positioning
    }
    var target = document.getElementById('spin')
    var spinner = new Spinner(opts).spin(target);
    var i =1;
    $.each($('.spinner').find('div'), function(){
        if(i%4 == 1 || i%4 == 2 ){
            $(this).attr('class','spinner-border');
        }else{
            $(this).attr('class','spinner-border1');
        }
        i++;
    });
    $.ajax({
        url: "./async-getVimeo.php",
        cache: false,
        dataType: "json",
        type: "POST",
        data: {vimeoID: vimeoID,n:n},
        success: function (data) {
            if(data.result == "success"){
                $("#spin").hide();
                showNotification(data.title);
                $("#download").attr('href',data.url);
                vimeoButton();
                //location.href=data.url;
                //resetMainForm();
            }else if(data.result == "failed"){
                if(i_getVimeo>=2){
                    $("#spin").hide();
                    showNotification(data.title);
                    $("#dangerAlertText").text("You can not download this video from vimeo.");
                    $("#alertDiv").css('display', 'block');
                    i_getVimeo =0;
                }else{
                    onDownload(data.vimeoID);
                }
            }else if(data.result == "failedRead"){
                $("#spin").hide();
                $("#dangerAlertText").text(data.message);
                $("#alertDiv").css('display', 'block');
                i_getVimeo =0;
            }
        }
    });}
function vimeoButton(){
    $("#go-button").hide();
    $("#download").show();
}

$('#download').click(function(){
    resetMainForm();
});
function getVimeoId( url ) {
    // look for a string with 'vimeo', then whatever, then a
    // forward slash and a group of digits.
    var match = /vimeo.*\/(\d+)/i.exec( url );

    // if the match isn't null (i.e. it matched)
    if ( match ) {
        // the grouped/matched digits from the regex
        return match[1];
    }else{
        return 0;
    }
}
function validURL(n){
    var e=new RegExp("^(?:(?:https?|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:/\\S*)?$","i");
    return e.test(n)?!0:!1
}
window.getHost=function(n){var e=document.createElement("a");return e.href=n,e.hostname}
function getVideoID(n){
    var e=/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/,t=n.match(e);return t&&t[2].length>=8&&t[2].length<=15?t[2]:null
}

$('#download-video').click(function(){
    resetMainForm();
});

function downloadMp3(){
    i_getMp3 ++;
    $("#spin").show();
    var opts = {
        lines: 8 // The number of lines to draw
        , length: 26 // The length of each line
        , width: 6 // The line thickness
        , radius: 40 // The radius of the inner circle
        , scale: 1.25 // Scales overall size of the spinner
        , corners: 1 // Corner roundness (0..1)
        , color: '#fff' // #rgb or #rrggbb or array of colors
        , opacity: 0.5 // Opacity of the lines
        , rotate: 0 // The rotation offset
        , direction: 1 // 1: clockwise, -1: counterclockwise
        , speed: 0.5 // Rounds per second
        , trail: 62 // Afterglow percentage
        , fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
        , zIndex: 2e9 // The z-index (defaults to 2000000000)
        , className: 'spinner' // The CSS class to assign to the spinner
        , top: '50%' // Top position relative to parent
        , left: '50%' // Left position relative to parent
        , shadow: false  // Whether to render a shadow
        , hwaccel: false // Whether to use hardware acceleration
        , position: 'fixed' // Element positioning
    }
    var target = document.getElementById('spin')
    var spinner = new Spinner(opts).spin(target);
    var i =1;
    $.each($('.spinner').find('div'), function(){
        if(i%4 == 1 || i%4 == 2 ){
            $(this).attr('class','spinner-border');
        }else{
            $(this).attr('class','spinner-border1');
        }
        i++;
    });
    var youtubeID = $("#youtubeID").val();
    var youtubeTitle = $("#youtubeTitle").val();
    $.ajax({
        url: "./async-getMp3Url.php",
        cache: false,
        dataType: "json",
        type: "POST",
        data: {youtubeID: youtubeID,youtubeTitle: youtubeTitle},
        success: function (data) {

            if(data.result == "success"){
                $("#spin").hide();
                $("#youtubeID").val('');
                $("#youtubeTitle").val('');
                location.href=data.url;

                resetMainForm();
            }else if(data.result == "failed"){
                if(i_getMp3>=2){
                    $("#spin").hide();
                    $("#dangerAlertText").text("You can not download this mp3 from youtube.");
                    $("#alertDiv").css('display', 'block');
                    i_getMp3 =0;
                }else{
                    downloadMp3()
                }
            }
        }
    });
}

