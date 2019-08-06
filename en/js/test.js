function openInNewTab(n){
    var e=window.open(n,"_blank");
    e.focus()
}
function validURL(n){
    var e=new RegExp("^(?:(?:https?|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:/\\S*)?$","i");
    return e.test(n)?!0:!1
}
function shake_element(n){
    move(n).to(0,0).duration("0s").then(move(n).to(10,0).duration("0.01s").then(move(n).to(-10,20).duration("0.03s").then(move(n).to(10,0).duration("0.05s").then(move(n).to(-10,0).duration("0.1s"))))).end()
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
function share_on_twitter(n){
    window.SHARED_ON_TWITTER=parseInt($.cookie("shared_on_twitter")),
        window.SHARED_ON_TWITTER?window.SHARED_ON_TWITTER+=1:window.SHARED_ON_TWITTER=1,
        $.cookie("shared_on_twitter",window.SHARED_ON_TWITTER);
    var e,t,o="scrollbars=yes,resizable=yes,toolbar=no,location=yes",
        i=550,a=420,d=screen.height,r=screen.width;e=Math.round(r/2-i/2),
        t=0,d>a&&(t=Math.round(d/2-a/2));var s,l,c;l="https://twitter.com/intent/tweet?",
        c=[];
    var w=window.TWITTER_SHARE_MSG;
    c.push("text="+encodeURIComponent(w)),
        c.push("url="+encodeURIComponent(n)),
        s=l+c.join("&");
    var u="intent_twitter",
        p=window.open(s,u,o+",width="+i+",height="+a+",left="+e+",top="+t);
    p.focus()
}
function share_on_gp(n){
    window.SHARED_ON_GP=parseInt($.cookie("shared_on_gp")),
        window.SHARED_ON_GP?window.SHARED_ON_GP+=1:window.SHARED_ON_GP=1,
        $.cookie("shared_on_gp",window.SHARED_ON_GP);
    var e,t,o="scrollbars=yes,resizable=yes,toolbar=no,location=yes",
        i=550,a=420,d=screen.height,r=screen.width;e=Math.round(r/2-i/2),
        t=0,d>a&&(t=Math.round(d/2-a/2));
    var s;s="https://plus.google.com/share?url="+encodeURIComponent(n);
    var l="intent_gp",
        c=window.open(s,l,o+",width="+i+",height="+a+",left="+e+",top="+t);
    c.focus()
}
function share_on_facebook(n){
    window.SHARED_ON_FB=parseInt($.cookie("shared_on_fb")),
        window.SHARED_ON_FB?window.SHARED_ON_FB+=1:window.SHARED_ON_FB=1,
        $.cookie("shared_on_fb",window.SHARED_ON_FB);
    var e,t,o="scrollbars=yes,resizable=yes,toolbar=no,location=yes",
        i=550,a=420,d=screen.height,r=screen.width;e=Math.round(r/2-i/2),
        t=0,d>a&&(t=Math.round(d/2-a/2));
    var s;s="https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(n);
    var l="intent_fb",
        c=window.open(s,l,o+",width="+i+",height="+a+",left="+e+",top="+t);
    c.focus()
}
function loaderOn(n){
    n?$(".loader-msg").removeClass("hidden"):$(".loader-msg").addClass("hidden"),
        $("#loader").css("display","block")
}
function loaderOff(n){
    $("#loader").css("display","none"),
    n||setTimeout(hideNotification,500)
}
function getVideoID(n){
    var e=/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/,t=n.match(e);return t&&t[2].length>=8&&t[2].length<=15?t[2]:null
}
function hideNotification(n){
    $(".site-notification").fadeOut("fast",function(){
        $(".btn-close-notification").off("click"),$(".site-notifications").html(""),n&&n()
    })
}
function showNotification(n){
    $(".site-notifications").html("\n      <div class='site-notification'>\n        <div class='site-notification-body'>"+n+"</div>\n        <div class='btn-close-notification'><span class='glyphicon glyphicon-remove' aria-hidden='true'></span></div>\n      </div>\n    "),
        $(".btn-close-notification").click(function(){resetMainForm()})
}
function fixedEncodeURIComponent(n){
    return encodeURIComponent(n).replace(/[!'()]/g,escape).replace(/\*/g,"%2A")
}
    if(window.LB_DOMAIN="lb."+window.DOMAIN,
            window.DOWNLOAD_LINK_DOMAIN="www."+window.DOMAIN,
            window.API_SERVER=null,window.PRODUCT_NAME="VideoGrabby",
            window.OPTIMIZE_FOR_QUALITY=!0,
            window.FETCHED_VIDEO=null,
            window.ASK_SOCIAL_SEQUENCE=[4,11,20,30,40],
            window.ASK_SOCIAL_EVERY=50,
            window.SOCIAL_CYCLE=["likeOnGP","likeOnFB","followOnGP","shareOnFB","shareOnGP"],
            window.NUM_SOCIAL_PROMPTS=parseInt($.cookie("num_social_prompts")),
        window.NUM_SOCIAL_PROMPTS||(window.NUM_SOCIAL_PROMPTS=0),
            window.INQUIRY_SHOWN=parseInt($.cookie("inquiry_shown")),
        window.INQUIRY_SHOWN||(window.INQUIRY_SHOWN=0),
            window.SHARED_ON_FB=parseInt($.cookie("shared_on_fb")),
        window.SHARED_ON_FB||(window.SHARED_ON_FB=0),
            window.SHARED_ON_TWITTER=parseInt($.cookie("shared_on_twitter")),
        window.SHARED_ON_TWITTER||(window.SHARED_ON_TWITTER=0),
            window.SHARED_ON_GP=parseInt($.cookie("shared_on_gp")),
        window.SHARED_ON_GP||(window.SHARED_ON_GP=0),
            window.LIKED_ON_FB=parseInt($.cookie("liked_on_fb")),
        window.LIKED_ON_FB||(window.LIKED_ON_FB=0),
            window.LIKED_ON_TWITTER=parseInt($.cookie("liked_on_twitter")),
        window.LIKED_ON_TWITTER||(window.LIKED_ON_TWITTER=0),
            window.LIKED_ON_GP=parseInt($.cookie("liked_on_gp")),
        window.LIKED_ON_GP||(window.LIKED_ON_GP=0),
            window.FOLLOWED_ON_GP=parseInt($.cookie("followed_on_gp")),
        window.FOLLOWED_ON_GP||(window.FOLLOWED_ON_GP=0),
            window.VID=$.cookie("vid"),!window.VID){
        for(var result="",length=64,chars="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",i=length;i>0;--i)
            result+=chars[Math.round(Math.random()*(chars.length-1))];$.cookie("vid",result,{expires:3650}),
            window.VID=result
    }
    window.YT_AK="AIzaSyBQkzsXxwDzcNhSzBwFLwYENTDowvM9MIE",
        window.YT_MAX_RESULTS=15,
        window.YT_MAX_D=900,
        window.YT_AUTOCOMPLETE_SUGGESTIONS=6,
        window.MAX_DESCRIPTION_LENGTH=150,
        window.STAT_VIDEO_WAS_PASTED=!1,
        window.OPTION="1",
        window.DISABLE_DYNAMIC_ADS=!0,
        window.AD_CODE_GOOGLE='<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>\n                <!-- VideoGrabby -->\n                <ins class="adsbygoogle"\n                style="display:block"\n                data-ad-client="ca-pub-8336015070667552"\n                data-ad-slot="1475136623"\n                data-ad-format="auto"></ins>\n                <script>\n                (adsbygoogle = window.adsbygoogle || []).push({});\n                </script>',
        window.AD_CODE_POPADS="<script type='text/javascript'>\n  var _pop = _pop || [];\n  _pop.push(['siteId', 699976]);\n  _pop.push(['minBid', 0.000000]);\n  _pop.push(['popundersPerIP', 0]);\n  _pop.push(['delayBetween', 0]);\n  _pop.push(['default', 'PHNjcmlwdCB0eXBlPSJ0ZXh0L2phdmFzY3JpcHQiPg0KdmFyIHVpZCA9ICc1NjA1Nic7DQp2YXIgd2lkID0gJzEwMjgyNyc7DQo8L3NjcmlwdD4NCjxzY3JpcHQgdHlwZT0idGV4dC9qYXZhc2NyaXB0IiBzcmM9Imh0dHA6Ly9jZG4ucG9wY2FzaC5uZXQvcG9wLmpzIj48L3NjcmlwdD4=']);" +
        "\n  _pop.push(['defaultPerDay', 0]);\n  _pop.push(['topmostLayer', false]);\n  (function() {\n    var pa = document.createElement('script'); pa.type = 'text/javascript'; pa.async = true;\n    var s = document.getElementsByTagName('script')[0]; \n    pa.src = '//c1.popads.net/pop.js';\n    pa.onerror = function() {\n      var sa = document.createElement('script'); sa.type = 'text/javascript'; sa.async = true;\n      sa.src = '//c2.popads.net/pop.js';\n      s.parentNode.insertBefore(sa, s);\n    };\n    s.parentNode.insertBefore(pa, s);\n  })();\n</script>",
        window.AD_EDOMZ='<script type="text/javascript"><!--\ndocument.write(\'<s\'+\'cript type="text/javascript" src="http://cpm.edomz.com/show.php?z=63&pl=28810&j=1&code=\'+new Date().getTime()+\'"></s\'+\'cript>\'); \n// --></script>\n<noscript>\n<iframe src="http://cpm.edomz.com/show.php?z=63&pl=28810" width="468" height="60" marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no"></iframe>\n</noscript>',
        window.AD_ADK2="<script type='text/javascript'>\nvar adParams = {a: '70013948', size: '468x60',serverdomain: 'ads.adsrvmedia.net'  ,context:'c70013950' };\n</script>\n<script type='text/javascript' src='http://cdn.adsrvmedia.net/adsrvmedia/scripts/smart/smart.js'></script>",
        window.AD_CODE_CRITEO="",window.AD_CODE_PROPELLER='<script src="//go.padstm.com/?id=330169"></script>',
        window.AD_CODE_TSHIRT='<a class="tshirt-banner" target="_blank" href="http://'+window.DOWNLOAD_LINK_DOMAIN+'/buy"><img src="http://'+window.DOWNLOAD_LINK_DOMAIN+'/static/images/store/tshirtbanner.png" /></a>',
        window.AD_EDOMZ='<script type="text/javascript"><!--\nps_aid = 44555;\nps_website_id = 45094;\nps_ad_cap = 0;\nps_ad_open = 2;\nps_ad_type = 3;\nps_page_url = document.location;\n-->\n</script>\n<script type="text/javascript" src="http://www.edomz.net/popup.js"></script>\n<noscript><a href="http://www.edomz.com">online marketing</a></noscript>',
        window.AD_CODE_DEFAULT=window.AD_CODE_TSHIRT,
        window.AD_CODE_RESTRICTED=window.AD_CODE_TSHIRT,
    "function"!=typeof String.prototype.endsWith&&(String.prototype.endsWith=function(n){return-1!==this.indexOf(n,this.length-n.length)}),
    "function"!=typeof String.prototype.startsWith&&(String.prototype.startsWith=function(n){return 0==this.indexOf(n)});
var ITAG_CONTAINER={5:"FLV",17:"3GP",18:"MP4",22:"MP4",36:"3GP",43:"WEBM",82:"MP4",83:"MP4",84:"MP4",85:"MP4",100:" WEBM",133:"MP4",134:"MP4",135:"MP4",136:"MP4",137:"MP4",160:"MP4",242:"WEBM",243:"WEBM",244:"WEBM",247:"WEBM",248:"WEBM",264:"MP4",266:"MP4",271:"WEBM",272:"WEBM",278:"WEBM",298:"MP4",299:"MP4",302:"WEBM",303:"WEBM",313:"WEBM",139:"MP4",140:"MP4",141:"MP4",171:"WEBM",172:"WEBM",92:"TS",93:"TS",94:"TS",95:"TS",96:"TS",127:"TS",128:"TS",132:"TS",151:"TS"},
    SUPPORTED_ITAGS={5:!0,17:!0,18:!0,22:!0,36:!0,43:!0},
    ITAG_BY_QUALITY=[22,18,5,43,36,17],
    ITAG_BY_SPEED=[18,22,5,43,36,17];
window.getHostnameFromURL=function(n){
    var e=null;
    if(n.toLowerCase().startsWith("http://")||n.toLowerCase().startsWith("https://")||(n="http://"+n),!validURL(n))return"";
    try{
        e=getHost(n).toLowerCase()
    }catch(t){}
    var o=!1;
    return("youtu.be"==e||"youtube.com"==e||e.endsWith(".youtube.com")||e.endsWith(".youtu.be"))&&(o=!0),o?"youtube.com":e.toLowerCase()
},
    window.selectAd=function(n){if(!window.DISABLE_DYNAMIC_ADS){
        var e=window.getHostnameFromURL(n);
        if("youtube.com"!=e)return $(".site-ads").html()!=AD_CODE_DEFAULT&&$(".site-ads").html(AD_CODE_DEFAULT),
            void(window.GA_ENABLE&&ga("send","event","licensedContent","false"));
        var t=getVideoID(n);if(!t)return $(".site-ads").html()!=AD_CODE_DEFAULT&&$(".site-ads").html(AD_CODE_DEFAULT),
            void(window.GA_ENABLE&&ga("send","event","licensedContent","false"));{
    var o="https://www.googleapis.com/youtube/v3/videos?id="+t+"&part=snippet%2CcontentDetails&key="+window.YT_AK;
    $.getJSON(o,function(n){var e=n.items;contents="";
        for(var t=0;t<e.length;t++){
            var o=e[t].contentDetails.licensedContent;
            if(o)return $(".site-ads").html()!=AD_CODE_RESTRICTED&&$(".site-ads").html(AD_CODE_RESTRICTED),
                void(window.GA_ENABLE&&ga("send","event","licensedContent","true"))}
        $(".site-ads").html()!=AD_CODE_DEFAULT&&$(".site-ads").html(AD_CODE_DEFAULT),
        window.GA_ENABLE&&ga("send","event","licensedContent","false")
    }).error(function(){
        $(".site-ads").html()!=AD_CODE_DEFAULT&&$(".site-ads").html(AD_CODE_DEFAULT),
        window.GA_ENABLE&&ga("send","event","licensedContent","false")})}}},
    window.base64url_encode=function(n){return btoa(n).replace("+","-").replace("/","_")},
    window.base64url_decode=function(n){return atob(n.replace("-","+").replace("_","/"))},
    window.visitPage=function(n){
        window.location.href=n,
        window.location.reload()
    },
    window.searchbox_contains_url=function(){
        return $(".input-url").data("contains-url")?!0:!1
    },function(n){
    var e=/([^&=]+)=?([^&]*)/g,t=function(n){
        return decodeURIComponent(n.replace(/\+/g," "))
    };
    n.parseParams=function(o){function i(e,t,o){
        if(t+="",-1!==t.indexOf(".")){
            var a=t.split("."),d=t.split(/\.(.+)?/)[1];e[a[0]]||(e[a[0]]={}),""!==d?i(e[a[0]],d,o):console.warn('parseParams :: empty property in key "'+t+'"')}else if(-1!==t.indexOf("[")){var a=t.split("[");t=a[0];var a=a[1].split("]"),r=a[0];""==r?(e||(e={}),e[t]&&n.isArray(e[t])||(e[t]=[]),e[t].push(o)):(e||(e={}),e[t]&&n.isArray(e[t])||(e[t]=[]),e[t][parseInt(r)]=o)}else e||(e={}),e[t]=o}o+="",""===o&&(o=window.location+"");
        var a,d={};if(o){if(-1!==o.indexOf("#")&&(o=o.substr(0,o.indexOf("#"))),
            -1===o.indexOf("?"))return{};if(o=o.substr(o.indexOf("?")+1,o.length),""==o)return{};
        for(;a=e.exec(o);){var r=t(a[1]),s=t(a[2]);i(d,r,s)}}return d}}(jQuery),
    window.updateServer=function(){
        $.post("http://"+window.LB_DOMAIN+"/api/server").done(function(n){
            window.API_SERVER=n
        })
    },
    window.getParameterByName=function(n,e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var t=new RegExp("[\\?&]"+e+"=([^&#]*)"),o=t.exec(n);return null===o?"":decodeURIComponent(o[1].replace(/\+/g," "))},jQuery.fn.alertPopover=function(n,e){var t=this[0];"undefined"==typeof e&&(e="top");var o="<span style='float:left; color: #d9534f; line-height:0px; width:0px; margin-top:11px;' class='glyphicon glyphicon-exclamation-sign'></span><div style='line-height:22px; margin-bottom:10px; margin-left:22px; float:right;'>"+n+"</div>";$(t).popover({trigger:"manual",placement:e,content:o,html:!0}),$(t).popover("show"),setTimeout(function(){$(t).popover("destroy")},3500)},window.getOptimalStream=function(n){if(!n)return!1;for(var e={},t=0;t<n.length;t++)n[t].itag in SUPPORTED_ITAGS&&(e[n[t].itag]=n[t]);if(e.length<1)return!1;if(window.OPTIMIZE_FOR_QUALITY){for(var t=0;t<ITAG_BY_QUALITY.length;t++)if(ITAG_BY_QUALITY[t]in e)return e[ITAG_BY_QUALITY[t]]}else for(var t=0;t<ITAG_BY_SPEED.length;t++)if(ITAG_BY_SPEED[t]in e)return e[ITAG_BY_SPEED[t]];return!1},window.extractStreamsFromVideoInfo=function(n){var e=[];if(!("status"in n))return!1;if("ok"!=n.status)return!1;for(var t=n.url_encoded_fmt_stream_map.split(","),o=0;o<t.length;o++)e.push($.parseParams("?"+t[o]));for(var i=n.adaptive_fmts.split(","),o=0;o<i.length;o++)e.push($.parseParams("?"+i[o]));return e},
    window.fetchVideoDirectLinks=function(){
        return window.API_SERVER?window.fetchDirectLinks(0,!0):void setTimeout(window.fetchVideoDirectLinks,2e3)
    },
    window.fetchAudioDirectLinks=function(){
        return window.API_SERVER?window.fetchDirectLinks(1,!0):void setTimeout(window.fetchAudioDirectLinks,2e3)},
    window.fetchDefaultAudioDirectLinks=function(){
        return window.API_SERVER?window.fetchDirectLinks(2,!0):void setTimeout(window.fetchDefaultAudioDirectLinks,2e3)
    },
    window.fetchLongAudioDirectLinks=function(n){
        return window.API_SERVER?void renderLongAudioButtonForYT(n):void setTimeout(function(){window.fetchLongAudioDirectLinks(n)},2e3)
    },
    window.fetchGenericDirectLinks=function(){
        return window.API_SERVER?window.fetchDirectLinks(0,!1):void setTimeout(window.fetchGenericDirectLinks,2e3)
    },
    window.dontOpenLink=function(n){n.preventDefault()
    },
    window.showSaveAsPopup=function(n){
        var e="Save Link As...";
        bowser.firefox||bowser.mozilla?e="Save Link As...":bowser.safari?e="Download Linked File As...":bowser.msie&&(e="Save Target As...");
        var t='Right click <a class="right-click-link" onclick="dontOpenLink(event);" href="'+n+'">here</a> ';
        t+="and then '"+e+"'",
            $("#saveasModal .modal-body").html(t),
            $("#saveasModal").modal("show")
    },
    window.renderLongAudioButtonForYT=function(n){
        $(".btn-download-audio").html("<h1>Download Audio</h1>");
        var e=window.API_SERVER;window.updateServer();
        {
            var t="http://www.youtube.com/watch?v="+n,o="http://"+e+"/api/audio_link/high/default/"+window.OPTION+"/"+window.base64url_encode(t);
            $.post(o,{vid:window.VID}).done(function(n){
                var t=$.parseJSON(n);
                if(!t.success)
                    return void $(".input-url:first").alertPopover(t.errorMessage);var o=t.link;"/"==o[0]&&(o="http://"+e+o);
                var i=t.title,a=t.filename;i&&(o+="&title="+encodeURIComponent(i)),
                    $(".btn-download-audio").attr("href",o),i?bowser.chrome||bowser.opera?$(".btn-download-audio").attr("download",i):$(".btn-download-audio").removeAttr("download"):$(".btn-download-audio").attr("download",a),
                    l=$(".btn-download-audio").attr("href"),a?$(".btn-download-audio").removeAttr("target"):($(".btn-download-audio").attr("target","_blank"),
                bowser.chrome||bowser.opera||$(".btn-download-audio").data("saveas",!0)),
                    $(".btn-download-audio").data("format","default")}).always(function(){loaderOff(!0)})
        }
    },
    window.showSociaPrompt=function(n){
        var e=!1;
        if(max_seq=Math.max.apply(Math,window.ASK_SOCIAL_SEQUENCE),
                n>max_seq?(n-max_seq)%window.ASK_SOCIAL_EVERY==0&&(e=!0):-1!=window.ASK_SOCIAL_SEQUENCE.indexOf(n)&&(e=!0),e){
            for(var t=window.NUM_SOCIAL_PROMPTS%window.SOCIAL_CYCLE.length,o=null;null==o;){
                t>=window.SOCIAL_CYCLE.length&&(t=0);
                var i=window.SOCIAL_CYCLE[t];
                if("likeOnGP"==i){
                    if(!window.NETWORK_STATUS.GooglePlus||window.LIKED_ON_GP>0){
                        t+=1;continue
                    }
                    o=t;break
                }
                if("followOnGP"==i){
                    if(!window.NETWORK_STATUS.GooglePlus||window.FOLLOWED_ON_GP>0){
                        t+=1;continue
                    }o=t;break
                }
                if("likeOnFB"==i){
                    if(window.LIKED_ON_FB>0){
                        t+=1;continue}o=t;break
                }
                if("shareOnFB"==i){
                    o=t;break
                }
                if("shareOnGP"==i){
                    o=t;break
                }o=t;break
            }
            var a=window.SOCIAL_CYCLE[o];
            window.INQUIRY_SHOWN?setTimeout(function(){$("#"+a+"-Modal").modal("show")},1e3):($("#inquiry-submit-yes").off("click"),
                $("#inquiry-submit-yes").bind("click",function(){
                    window.GA_ENABLE&&ga("send","event","button","inquiry-submit-yes"),
                        $("#inquiryModal").on("hidden.bs.modal",function(){
                            $("#inquiryModal").off("hidden.bs.modal"),
                                $("#"+a+"-Modal").modal("show")
                        })
                }),
                setTimeout(function(){
                    window.INQUIRY_SHOWN+=1,
                        $.cookie("inquiry_shown",window.INQUIRY_SHOWN),
                        $("#inquiryModal").modal("show")},1e3))
        }
    },
    window.fetchDirectLinks=function(n,e){
        var t="video",o=null;1==n?(t="audio",o="mp3"):2==n&&(t="audio",o="default"),
            window.FETCHED_VIDEO=null;
        var i=$(".input-url:first").val(),
            a="normal";$(".hq").hasClass("enabled")&&(a="high"),
            window.updateServer();
        var d=window.API_SERVER,
            r=null;
        r="video"==t?"http://"+d+"/api/"+t+"_link/"+a+"/"+window.OPTION+"/"+window.base64url_encode(i):"http://"+d+"/api/"+t+"_link/"+a+"/"+o+"/"+window.OPTION+"/"+window.base64url_encode(i);
        $.post(r,{vid:window.VID}).done(function(n){
            var o=$.parseJSON(n);
            if(!o.success)
                return void $(".input-url:first").alertPopover(o.errorMessage);
            var a=o.link;"/"==a[0]&&(a="http://"+d+a);
            var r=o.title,
                s=o.filename;window.FETCHED_VIDEO={url:i,directLink:a,title:r,filename:s};
            var l=null;
            if(e?(r?($(".btn-download-"+t).attr("href",FETCHED_VIDEO.directLink+"&title="+encodeURIComponent(FETCHED_VIDEO.title)),
                    $(".btn-download-"+t).attr("download",FETCHED_VIDEO.title)):($(".btn-download-"+t).attr("href",FETCHED_VIDEO.directLink),
                    $(".btn-download-"+t).attr("download",FETCHED_VIDEO.filename)),l=$(".btn-download-"+t).attr("href"),
                    $("#downloader").prop("src",l)):($(".btn-download-generic").attr("href",FETCHED_VIDEO.directLink),
                    r?(bowser.chrome||bowser.opera?$(".btn-download-generic").attr("download",FETCHED_VIDEO.title):$(".btn-download-generic").removeAttr("download"),
                        showNotification(r)):(
                        $(".btn-download-generic").attr("download",FETCHED_VIDEO.filename),
                            showNotification(s)),
                    l=$(".btn-download-generic").attr("href"),
                    s?$(".btn-download-generic").removeAttr("target"):($(".btn-download-generic").attr("target","_blank"),
                    bowser.chrome||bowser.opera||$(".btn-download-generic h1").html(bowser.firefox||bowser.mozilla?"Right click here, 'Save Link As...'":bowser.safari?"Right click here, 'Download Linked File As...'":bowser.msie?"Right click here, 'Save Target As...'":"Right click here, 'Save Link As...'"))),
                    window.GA_ENABLE){
                l.indexOf("s3.amazonaws.com")>-1?ga("send","event","transfer","proxied"):ga("send","event","transfer","direct"),
                    ga("send","event","download-type",t);
                var c="false";
                window.STAT_VIDEO_WAS_PASTED&&(c="true"),
                    ga("send","event","video_was_pasted",c)
            }
            var w=parseInt($.cookie("num_successful_downloads"));
            w?w+=1:w=1,$.cookie("num_successful_downloads",w),
            window.GA_ENABLE&&(10>=w?ga("send","event","download-num",w.toString()):ga("send","event","download-num","> 10")),
                window.showSociaPrompt(w),e&&resetMainForm()}).fail(function(){
            $(".input-url:first").alertPopover("Could not download this video. Please choose another one.")}).always(function(){loaderOff(!e)})
    },
    window.extractParamsFromHash=function(n){
        var e,t=/\+/g,o=/([^&=]+)=?([^&]*)/g,i=function(n){
            return decodeURIComponent(n.replace(t," "))
        },
            a=n;for(urlParams={};
                    e=o.exec(a);)
            urlParams[i(e[1])]=i(e[2]);
        return urlParams
    },
    window.getYoutubeID=function(n){
        var e=n.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);return null!=e?e[1]:null
    },
    window.escapeHtmlEntities=function(n){
        return"undefined"!=typeof jQuery?jQuery("<div/>").text(n).html():n.replace(/&/g,"&amp;").replace(/>/g,"&gt;").replace(/</g,"&lt;").replace(/"/g,"&quot;")
    },
    window.generateDownloadHTMLCode=function(){
        $(".preview-note").addClass("hidden"),
            $(".shareable-link").addClass("hidden");
        var n=$.trim($("#gn-video-url").val());
        if(!n)return-1;
        var e=window.getYoutubeID(n);
        if((!e||e.length<5)&&(e=null),e){
            $(".option-youtube").removeClass("hidden");
            var t="http://"+window.DOWNLOAD_LINK_DOMAIN+"/#id="+e,
                o="https://www.youtube.com/watch?v="+e
        }else{
            $(".option-youtube").addClass("hidden");
            var t="http://"+window.DOWNLOAD_LINK_DOMAIN+"/#url="+encodeURIComponent(n),o=n
        }
        var i=$("[name='optionLinkQuality']:checked").val(),
            a="";
        "high"==i&&(a="&q=2"),
            t+=a;
        var d=$("[name='optionLinkType']:checked").val();
        "thumbnail"!=d||e||($("#optionLinkType1").prop("checked",!0),d=$("[name='optionLinkType']:checked").val());
        var r="Download Video using VideoGrabby",
            s="border-radius: 7px; font-size:90%;  padding: 1px 20px 1px 5px; color: #438570; text-decoration: none; background: url(http://"+window.DOWNLOAD_LINK_DOMAIN+"/static/images/dl1-13x11.png) right 4px center no-repeat #FBDD49;",l="<a style='"+s+"' href='"+t+"' target='_blank' alt='"+r+"' title='"+r+"'>"+o+"</a>";if("icon_only"==d)s="text-decoration: none;",l="<a style='"+s+"' href='"+t+"' target='_blank' alt='"+r+"' title='"+r+"'><img src='http://"+window.DOWNLOAD_LINK_DOMAIN+"/static/images/dl1-16x16.png' /></a>";else if("thumbnail"==d&&e)imgStyle="padding: 0; width: 100px; height: 100px; display: block; clear:left; float:left;",l="<a href='"+t+"' target='_blank' alt='"+r+"' title='"+r+"'><img style='"+imgStyle+"' src='http://img.youtube.com/vi/"+e+"/0.jpg' /><img style='padding: 0; display:block; float:left; clear:left;' src='http://"+window.DOWNLOAD_LINK_DOMAIN+"/static/images/dl1-100x19.png' /></a><div style='clear:both;'></div>";
else if("custom_text"==d){
            var c="Download with VideoGrabby";
            $("#gn-custom-text").val()&&$("#gn-custom-text").val().length>=1&&(c=$("#gn-custom-text").val());
            var l="<a style='"+s+"' href='"+t+"' target='_blank' alt='"+r+"' title='"+r+"'>"+c+"</a>"}
    var w=escapeHtmlEntities(l),
    u=escapeHtmlEntities(t);
    $(".code-snippet").html("<pre>"+w+"</pre>"),
    $(".link-snippet").html("<pre>"+u+"</pre>"),
    $(".preview-snippet").html(l),
    $(".preview-note").removeClass("hidden"),
    $(".shareable-link").removeClass("hidden")},
    window.resetMainForm=function(){
        window.STAT_VIDEO_WAS_PASTED=!1,
    $(".input-url").data("contains-url",!1),
    $(".input-url").val(""),
    hideNotification(),
    $(".btn-download-video").addClass("hidden"),
    $(".btn-download-audio").addClass("hidden"),
    $(".btn-download-generic").addClass("hidden"),
    $(".btn-download-audio").html("<h1>Download MP3</h1>"),
    $(".btn-download-audio").data("format","mp3"),
    $(".btn-download-audio").data("saveas",!1),
        $(".btn-search").removeClass("hidden"),
    $(".input-url").autocomplete("enable"),
        $(".btn-download-generic h1").html("Download"),
        changeHashLocation("")
    },
    window.getHost=function(n){var e=document.createElement("a");return e.href=n,e.hostname},
    window.processSearchString=function(){
        var n=$(".input-url").val();
        if(!n)return!1;
        {
            var e="https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&q="+fixedEncodeURIComponent(n)+"&maxResults="+window.YT_MAX_RESULTS+"&key="+window.YT_AK;
                $.getJSON(e,function(n){
                    var e=n.items;
                    if(e.length<1)
                        $("#searchResultsModal .modal-body").html("No videos found."),
                        $("#searchResultsModal").modal("show"),
                        setTimeout(function(){
                            $("#searchResultsModal").data("bs.modal").handleUpdate()},200);
                    else{
                        for(var t=e[0].id.videoId,o=1;o<e.length;o++)
                            t+=","+e[o].id.videoId;{
                                var i="https://www.googleapis.com/youtube/v3/videos?id="+t+"&part=snippet%2Cstatistics%2CcontentDetails&key="+window.YT_AK;
                                $.getJSON(i,function(n){
                                    var e=n.items;contents="";
                                    for(var t=0;t<e.length;t++){
                                        var o=e[t].id,
                                        i=convert_yt_duration(e[t].contentDetails.duration),
                                        a=(e[t].contentDetails.licensedContent,e[t].snippet.description);
                                        a.length>window.MAX_DESCRIPTION_LENGTH&&(a=a.substring(0,window.MAX_DESCRIPTION_LENGTH)+"..."),
                                        contents+="<a onclick='visitPage(\"http://"+window.DOWNLOAD_LINK_DOMAIN+"/#id="+o+"\");" +"return false;' href='#'>",
                                        contents+="<div class='video-result' title='Click to download'>",
                                        contents+="  <div class='video-result-top'>",
                                        contents+="    <div class='video-result-thumbnail'><img src='"+e[t].snippet.thumbnails.medium.url+"' /><div class='vrd-duration'>"+i+"</div></div>",
                                        contents+="    <div class='video-result-details'>",
                                        contents+="      <div class='vrd-title'>"+e[t].snippet.title+"</div>",
                                        contents+="      <div class='vrd-part'>"+$.timeago(e[t].snippet.publishedAt)+" &bull; "+parseInt(e[t].statistics.viewCount).toLocaleString()+" views &bull; ",
                                        contents+="        <span class='glyphicon glyphicon-thumbs-up' aria-hidden='true'></span> "+parseInt(e[t].statistics.likeCount).toLocaleString(),
                                        contents+="        &nbsp; <span class='glyphicon glyphicon-thumbs-down' aria-hidden='true'></span> "+parseInt(e[t].statistics.dislikeCount).toLocaleString(),
                                        contents+="      </div>",
                                        contents+="      <div class='vrd-description'>"+a+"</div>",
                                        contents+="    </div><div style='clear:both'></div>",
                                        contents+="  </div>",
                                        contents+="</a>",
                                        contents+="</div>\n"
                                    }
                                    $("#searchResultsModal .modal-body").html(contents),
                                    $("#searchResultsModal").modal("show"),setTimeout(function(){
                                        $("#searchResultsModal").data("bs.modal").handleUpdate()},200)})
                        }
                    }
                })
        }
    },
    window.changeHashLocation=function(n){
        var e,t;e=document.body.scrollTop,t=document.body.scrollLeft,location.hash="#"+n,document.body.scrollTop=e,document.body.scrollLeft=t
    },
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
            return i?"id="+i:""
        }
        return"url="+encodeURIComponent(n)
    },
    window.updateBasedOnURL=function(){
        var n=$(".input-url").val(),
            e=n;
        window.selectAd(e),
            $(".btn-download-generic").attr("href","#");
           var t=null;
         if(e.toLowerCase().startsWith("http://")||e.toLowerCase().startsWith("https://")||(e="http://"+e),!validURL(e))
             return resetMainForm(),
                 void(""!=n&&$(".input-url:first").alertPopover("This is not a valid URL"));
                $(".input-url").data("contains-url",!0);
            try{
                t=getHost(e).toLowerCase()
            }catch(o){

            }
        var i=!1;
        if(("youtu.be"==t||"youtube.com"==t||t.endsWith(".youtube.com")||t.endsWith(".youtu.be"))&&(i=!0),i)
            {
                if($(".btn-download-video").removeClass("hidden"),
                        $(".btn-download-audio").removeClass("hidden"),
                        $(".btn-download-generic").addClass("hidden"),
                        $(".btn-search").addClass("hidden"),
                        $(".input-url").val())
                    {
                        var a=getVideoID($(".input-url").val());
                        if(a){
                            var d="https://www.googleapis.com/youtube/v3/videos?id="+a+"&part=snippet%2CcontentDetails&key="+window.YT_AK;
                            $.getJSON(d,function(n){
                                var e=n.items;
                                if(1==e.length){
                                    var t=e[0].snippet.title,o=convert_yt_duration_to_seconds(e[0].contentDetails.duration);
                                    o>window.YT_MAX_D&&(loaderOn(),window.fetchLongAudioDirectLinks(a)),
                                        showNotification(t)
                                }
                            })
                        }
                    }
            }else $(".btn-download-video").addClass("hidden"),$(".btn-download-audio").addClass("hidden"),
                  $(".btn-search").addClass("hidden"),
                  $(".btn-download-generic").removeClass("hidden"),
                  loaderOn(),
                  setTimeout(fetchGenericDirectLinks,500)
    },
                window.updateBasedOnHash=function(){
                    var n=window.location.hash.substring(1);
                    p=window.extractParamsFromHash(n);
                    var e=!1;"id"in p?(propVideoID=p.id,
                        $(".input-url").val("http://www.youtube.com/watch?v="+propVideoID),e=!0):"url"
                    in p&&(propURL=decodeURIComponent(p.url),
                        $(".input-url").val(propURL),e=!0),
                    "q"in p&&"2"==p.q&&$(".hq").addClass("enabled"),
                    e||$(".input-url").val(""),
                        window.updateBasedOnURL()
                },
                $(document).ready(function(){
                    $("#ads-above-anchor").length&&setTimeout(function(){
                        $(document.body).animate({scrollTop:$("#ads-above-anchor").offset().top},2e3)},500),
                        window.updateServer(),
                        window.SHARED_ON_TWITTER=parseInt($.cookie("shared_on_twitter")),
                        window.SHARED_ON_TWITTER||(window.SHARED_ON_TWITTER=0),
                        window.SHARED_ON_GP=parseInt($.cookie("shared_on_gp")),
                        window.SHARED_ON_GP||(window.SHARED_ON_GP=0),
                        window.SHARED_ON_FB=parseInt($.cookie("shared_on_fb")),
                        window.SHARED_ON_FB||(window.SHARED_ON_FB=0),
                        $("#linkOptions .radio").click(function(){
                            generateDownloadHTMLCode()
                        }),
                        $("#gn-video-url").change(function(){
                            generateDownloadHTMLCode()
                        }),
                        $("#gn-video-url").bind("paste",function(){
                            setTimeout(generateDownloadHTMLCode,200)
                        }),
                        $("#gn-custom-text").bind("mousedown",function(){
                            $("#optionLinkType4").prop("checked",!0),generateDownloadHTMLCode()
                        }),
                        $("#gn-custom-text").bind("keyup",function(){
                            generateDownloadHTMLCode()
                        }),
                        $("#gn-custom-text").bind("paste",function(){
                            setTimeout(generateDownloadHTMLCode,200)
                        }),
                        window.DISABLE_DYNAMIC_ADS||$(".site-ads").html()!=AD_CODE_DEFAULT&&$(".site-ads").html(AD_CODE_DEFAULT),
                        window.location.hash&&updateBasedOnHash(),
                        $(".tshirt-banner").click(function(n){
                            n.preventDefault(),window.GA_ENABLE&&ga("send","event","button","tshirt-banner"),
                                openInNewTab("http://www."+window.DOMAIN+"/buy")}),
                                $(".hq").click(function(n){n.preventDefault(),
                                    $(this).hasClass("enabled")?$(this).removeClass("enabled"):$(this).addClass("enabled")}),
                        $(".btn-share-fb").click(function(n){n.preventDefault();
                            var e=document.URL;
                            window.GA_ENABLE&&ga("send","event","button","btn-share-fb"),
                                share_on_facebook(e)}),
                        $(".btn-share-twitter").click(function(n){
                            n.preventDefault();
                            var e=document.URL;
                            window.GA_ENABLE&&ga("send","event","button","btn-share-twitter"),
                                share_on_twitter(e)
                        }),
                        $(".btn-share-gp").click(function(n){
                            n.preventDefault();
                            var e=document.URL;
                            window.GA_ENABLE&&ga("send","event","button","btn-share-gp"),
                                share_on_gp(e)
                        }),
                        $(".input-url").bind("paste",function(){
                            hideNotification(),
                                $(".btn-download-generic h1").html("Download"),
                                setTimeout(function(){
                                    var n=$(".input-url:first").val();
                                    $(".input-url").data("contains-url",!1),
                                        $(".input-url").autocomplete("enable"),
                                    n&&validURL(n)&&($(".input-url").autocomplete("disable"),
                                        $(".input-url").data("contains-url",!0),
                                        window.STAT_VIDEO_WAS_PASTED=!0,
                                        changeHashLocation(getHashFromURL(n)))},300)
                        }),
                        $(".input-url:first").click(function(){
                            if(searchbox_contains_url()){
                                var n=$(this);n.select()}
                        }),
                        $(".input-url:first").keydown(function(n){
                            var e=$(".input-url:first").selection();
                            if(searchbox_contains_url()||13!=n.keyCode||processSearchString(),
                                8==n.keyCode||46==n.keyCode){
                                if(!searchbox_contains_url())
                                    return;changeHashLocation("")
                            }
                            return n.metaKey||n.altKey||n.ctrlKey||!searchbox_contains_url()||e!=$(".input-url:first").val()?n.metaKey||n.altKey||n.ctrlKey||!searchbox_contains_url()?void 0:void n.preventDefault():void changeHashLocation("")}),
                        $(".btn-download-audio").click(function(n){
                            return $(".input-url").val()?void("default"!=$(".btn-download-audio").data("format")?(n.preventDefault(),loaderOn(!0),
                        setTimeout(fetchAudioDirectLinks,500)):$(".btn-download-audio").data("saveas")?(n.preventDefault(),
                        showSaveAsPopup($(".btn-download-audio").attr("href"))):setTimeout(function(){
                            resetMainForm()
                    },500)):void n.preventDefault()}),
                        $(".btn-download-generic").click(function(n){
                            return"#"==$(".btn-download-generic").attr("href")?void n.preventDefault():void resetMainForm()
                        }),
                                    $(".btn-download-video").click(function(n){
                                        return $(".input-url").val()?(n.preventDefault(),loaderOn(),void setTimeout(fetchVideoDirectLinks,500)):
                                            void n.preventDefault()}),$("#likeOnGP-Modal").on("shown.bs.modal",function(){
                                                    window.LIKED_ON_GP=window.LIKED_ON_GP+1,
                                                    $.cookie("liked_on_gp",window.LIKED_ON_GP),
                                                    window.NUM_SOCIAL_PROMPTS+=1,
                                                        $.cookie("num_social_prompts",window.NUM_SOCIAL_PROMPTS)
                                                    }),
                        $("#followOnGP-Modal").on("shown.bs.modal",
        function(){
            window.FOLLOWED_ON_GP=window.FOLLOWED_ON_GP+1,$.cookie("followed_on_gp",window.FOLLOWED_ON_GP),
                window.NUM_SOCIAL_PROMPTS+=1,$.cookie("num_social_prompts",window.NUM_SOCIAL_PROMPTS)}),
            $("#shareOnGP-Modal").on("shown.bs.modal",function(){
                window.NUM_SOCIAL_PROMPTS+=1,
                $.cookie("num_social_prompts",window.NUM_SOCIAL_PROMPTS)}),
                        $("#shareOnGP-submit-yes").bind("click",function(){
                            window.GA_ENABLE&&ga("send","event","button","shareOnGP-submit-yes"),
                                window.SHARED_ON_GP=window.SHARED_ON_GP+1,
                                $.cookie("shared_on_gp",window.SHARED_ON_GP),
                                share_on_gp("http://www.videograbby.com")}),
                        $("#shareOnGP-submit-no").
                            bind("click",function(){
                                window.GA_ENABLE&&ga("send","event","button","shareOnGP-submit-no")}),
                        $("#likeOnFB-Modal").on("shown.bs.modal",function(){
                            window.LIKED_ON_FB=window.LIKED_ON_FB+1,
                                $.cookie("liked_on_fb",window.LIKED_ON_FB),window.NUM_SOCIAL_PROMPTS+=1,
                                $.cookie("num_social_prompts",window.NUM_SOCIAL_PROMPTS)}),
                        $("#shareOnFB-submit-yes").bind("click",function(){
                            window.GA_ENABLE&&ga("send","event","button","shareOnFB-submit-yes"),
                                window.SHARED_ON_FB=window.SHARED_ON_FB+1,
                                $.cookie("shared_on_fb",window.SHARED_ON_FB),
                                share_on_facebook("http://www.videograbby.com")}),
                        $("#shareOnFB-submit-no").bind("click",function(){
                            window.GA_ENABLE&&ga("send","event","button","shareOnFB-submit-no")}),
                        $("#shareOnFB-Modal").on("shown.bs.modal",function(){
                            window.NUM_SOCIAL_PROMPTS+=1,$.cookie("num_social_prompts",window.NUM_SOCIAL_PROMPTS)}),
                        $("#inquiry-submit-no").bind("click",function(){
                            window.GA_ENABLE&&ga("send","event","button","inquiry-submit-no")}),
                        $("#saveasModal").on("hidden.bs.modal",function(){resetMainForm()}),
                        $(".contact").bind("click",function(n){
                            window.GA_ENABLE&&ga("send","event","button","btn-contact"),
                                n.preventDefault(),
                                $("#contact-name").val(""),
                                $("#contact-email").val(""),
                                $("#contact-message").val(""),
                                $("#contactModal").modal("show")}),
                        $("#contact-submit").bind("click",function(n){
                            window.GA_ENABLE&&ga("send","event","button","btn-contact-submit"),
                                n.preventDefault(),
                                $("#contactModal").on("hidden.bs.modal",function(){
                                    $("#contactModal").off("hidden.bs.modal"),
                                        $.ajax({
                                            type:"POST",
                                            url:"http://"+window.API_SERVER+"/contact",
                                            data:{email:$("#contact-email").val(),
                                                name:$("#contact-name").val(),
                                                message:$("#contact-message").val()
                                            },
                                            success:function(){
                                                $("#genericModalLabel").html("Awesome!"),
                                                    $("#genericModal .modal-body").html($("#contact-success").html()),
                                                    $("#genericModal").modal("show")
                                            },
                                            error:function(n){
                                                var e;try{
                                                    e="Could not send your message because "+JSON.parse(n.responseText).message
                                                }catch(t){
                                                    e="An error occured. Please try again after a few minutes!"}
                                                $("#genericModalLabel").html("Error"),
                                                    $("#genericModal .modal-body").html("<div>"+e+"</div>"),
                                                    $("#genericModal").modal("show")
                                            }
                                        })
                                }),
                                $("#contactModal").modal("hide")}),
                        $(".btn-search").bind("click",function(){
                            processSearchString()
                        }),
                        $(window).on("hashchange",function(){
                            updateBasedOnHash()
                        }),
                        $(".input-url").autocomplete({source:function(n,e){
                            $.getJSON("http://suggestqueries.google.com/complete/search?callback=?",{hl:"en",ds:"yt",jsonp:"suggestCallBack",q:n.term,client:"youtube"}),
                                suggestCallBack=function(n){
                                    var t=[];$.each(n[1],function(n,e){t.push({value:e[0]
                                    })
                                    }),
                                    t.length>window.YT_AUTOCOMPLETE_SUGGESTIONS&&(t.length=window.YT_AUTOCOMPLETE_SUGGESTIONS),e(t)
                                }
                        },
                            messages:{
                                noResults:"",results:function(){}
                            },
                            position:{at:"left bottom+6"},
                            select:function(){
                                processSearchString()
                            }
                        })
                });
