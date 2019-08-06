<!DOCTYPE html>
<!--[if IE 8]> <html lang="en" class="ie8"> <![endif]-->
<!--[if IE 9]> <html lang="en" class="ie9"> <![endif]-->
<!--[if !IE]><!--> <html lang="en"> <!--<![endif]-->
<head>
    <title>Wouptube: Youtube Downloader & Youtube to MP3 converter - This Free Youtube video downloader online allows you to download Youtube videos / Youtube MP3 easily. Also supported: Vimeo, DailyMotion</title>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Ridiculously simple Youtube to MP3 converter and Youtube video downloader. Online. Free. Without registration. Also supports Vimeo, Soundcloud, Facebook, Youtube MP3 and others. Convert and download Youtube videos easily, with the world's best Free Youtube Downloader Online!">
    <meta name="keywords" content="download, free, converter, convert, downloader, mp3s, mp3, videos, video, save, vimeo, dailymotion">
    <meta name="author" content="Ridiculously simple Youtube to MP3 converter and Youtube video downloader. Online. Free. Without registration. Also supports Vimeo, Soundcloud, Facebook, Youtube MP3 and others. Convert and download Youtube videos easily, with the world's best Free Youtube Downloader Online!">
    <meta property="og:site_name" content="Wouptube">
    <meta property="og:description" content="Ridiculously simple Youtube to MP3 converter and Youtube video downloader. Online. Free. Without registration. Also supports Vimeo, Soundcloud, Facebook, Youtube MP3 and others. Convert and download Youtube videos easily, with the world's best Free Youtube Downloader Online!">
    <meta property="og:title" content="This Free Youtube video downloader online allows you to download Youtube videos / Youtube MP3 easily. Also supported: Vimeo, Soundcloud, Vine, Facebook and many others.">
    <meta name="twitter:title" content="Ridiculously simple Youtube to MP3 converter and Youtube video downloader. Online. Free. Without registration. Also supports Vimeo,  Youtube MP3 and others. Convert and download Youtube videos easily, with the world's best Free Youtube Downloader Online!">
    <link rel="shortcut icon" href="favicon.ico">
    <link rel='stylesheet' type='text/css' href='//fonts.googleapis.com/css?family=Open+Sans:400,300,600&amp;subset=cyrillic,latin'>
    <link rel="stylesheet" href="../css/menu/reset.css">
    <link rel="stylesheet" href="../css/menu/style.css">
    <link rel="stylesheet" href="../assets/css/forestchange.css">
    <link rel="stylesheet" href="../assets/plugins/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="../assets/css/style.css">
    <link rel="stylesheet" href="../assets/css/headers/header-v2.css">
    <link rel="stylesheet" href="../assets/css/footers/footer-v1.css">
    <link rel="stylesheet" href="../assets/plugins/animate.css">
    <link rel="stylesheet" href="../assets/plugins/line-icons/line-icons.css">
    <link rel="stylesheet" href="../assets/plugins/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="../assets/plugins/parallax-slider/css/parallax-slider.css">
    <link rel="stylesheet" href="../assets/plugins/fancybox/source/jquery.fancybox.css">
    <link rel="stylesheet" href="../assets/plugins/owl-carousel/owl-carousel/owl.carousel.css">
    <link rel="stylesheet" href="../assets/plugins/sky-forms-pro/skyforms/css/sky-forms.css">
    <link rel="stylesheet" href="../assets/plugins/sky-forms-pro/skyforms/custom/custom-sky-forms.css">
    <link rel="stylesheet" href="../assets/css/custom.css">
    <link rel="stylesheet" href="../css/jquery-ui.css">
    <script>
        window.DOMAIN = "wouptube.com";
        window.GA_ENABLE = true;
        window.TWITTER_SHARE_MSG = "Wouptube rocks! Download from YouTube, Vimeo, Soundcloud and many more!";
    </script>
</head>

<body class="header-fixed" id="bodyContent">
<div id="spin" style="display: none"></div>
<header class=" header header-mobi-ext header-change text-center">
    <div class="social"  >
        <ul class="social-grid">
            <li>
                <div class="social-info-wrap">
                    <div class="social-info">
                        <div class="social-info-front social-facebook">
                            <?php if ($pageNo == 2) {?>
                            <a href="https://www.facebook.com/sharer/sharer.php?u=<?php echo urlencode(HOST_SERVER);?>/about/" onclick="javascript:window.open(this.href,
                                        '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600'); return false;">
                            <?php }else if($pageNo == 5) {?>
                                <a href="https://www.facebook.com/sharer/sharer.php?u=<?php echo urlencode(HOST_SERVER);?>/contact/" onclick="javascript:window.open(this.href,
                                        '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600'); return false;">
                            <?php }else if($pageNo == 3) {?>
                                    <a href="https://www.facebook.com/sharer/sharer.php?u=<?php echo urlencode(HOST_SERVER);?>/how-to-download-youtube-videos-using-wouptube/" onclick="javascript:window.open(this.href,
                                        '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600'); return false;">
                                <?php }?>
                                <i class="fa fa-facebook"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="social-info-wrap">
                    <div class="social-info">
                        <div class="social-info-front social-twitter">
                            <?php if($pageNo == 2) {?>
                                 <a href="https://twitter.com/intent/tweet?url=<?php echo urlencode(HOST_SERVER);?>/about/&text=<?php echo urlencode('Wouptube rocks! Download from YouTube, Vimeo, DailyMotion and many more!')?>" onclick="javascript:window.open(this.href,
                                     '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600'); return false;">
                                <?php }else if($pageNo == 5) {?>
                                     <a href="https://twitter.com/intent/tweet?url=<?php echo urlencode(HOST_SERVER);?>/contact/&text=<?php echo urlencode('Wouptube rocks! Download from YouTube, Vimeo, DailyMotion and many more!')?> " onclick="javascript:window.open(this.href,
                                     '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600'); return false;">
                                <?php }else if($pageNo == 3) {?>
                                         <a href="https://twitter.com/intent/tweet?url=<?php echo urlencode(HOST_SERVER);?>/how-to-download-youtube-videos-using-wouptube/&text=<?php echo urlencode('Wouptube rocks! Download from YouTube, Vimeo, DailyMotion and many more!')?>" onclick="javascript:window.open(this.href,
                                     '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600'); return false;">
                                 <?php } ?>
                                <i class="fa fa-twitter"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="social-info-wrap">
                    <div class="social-info">
                        <div class="social-info-front social-google">
                            <?php if($pageNo == 2) {?>
                            <a href="https://plus.google.com/share?url=<?php echo urlencode(HOST_SERVER);?>/about/" onclick="javascript:window.open(this.href,
                      '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600'); return false;">
                                <?php }else if($pageNo == 5) {?>
                                <a href="https://plus.google.com/share?url=<?php echo urlencode(HOST_SERVER);?>/contact/" onclick="javascript:window.open(this.href,
                      '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600'); return false;">
                            <?php }else if($pageNo == 3) {?>
                                    <a href="https://plus.google.com/share?url=<?php echo urlencode(HOST_SERVER);?>/how-to-download-youtube-videos-using-wouptube/" onclick="javascript:window.open(this.href,
                      '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600'); return false;">
                                <?php }?>
                                <i class="fa fa-google-plus"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    <?php if($pageNo != 1) {?>
    <div class="headerDiv">
        <h1><a href ="../">Home</a></h1>
    </div>
    <?php } ?>
    <a id="cd-menu-trigger" href="#0"><span class="cd-menu-icon"></span></a>
</header>
<nav id="cd-lateral-nav" >
    <ul class="cd-navigation cd-single-item-wrapper header-navigation">
        <li><a <?php if($pageNo == 1) {?> class="current" <?php } ?> href="../">Home</a></li>
        <li><a <?php if($pageNo == 2) {?> class="current" <?php } ?>  href="../about/">About</a></li>
        <li><li><a <?php if($pageNo == 3) {?> class="current" <?php } ?>  href="../how-to-download-youtube-videos-using-wouptube">Help</a></li>
        <li><a <?php if($pageNo == 4) {?> class="current" <?php } ?>  href="../cool-trick-for-downloading-youtube-videos">Trick</a></li>
        <li><a <?php if($pageNo == 5) {?> class="current" <?php } ?> href="../contact/">Contact Us</a></li>
    </ul>
</nav>
<main class="cd-main-content" <?php if($pageNo == 1){?> id="index-main" <?php } else if($pageNo == 2){ ?> id="about-main" <?php }?>>
    <div class="wrapper" <?php if($pageNo == 2 || $pageNo ==3 ) {?>  id="about-us-wrapper" <?php }else if($pageNo == 5){?> id="contact-us-wrapper" <?php } ?>>
        <?php if($pageNo == 1) {?>
        <div class="interactive-slider-v2">
            <div class="container" id="homeText">
                <h1 class ="fadeInUp">Welcome to Wouptube</h1>
                <p class ="fadeInUp"><a href="index.php" style="color: white; text-decoration: none;">Youtube Downloader & Youtube to MP3 converter.</a></p>
                <p class ="fadeInUp">(also works with Vimeo, Dailymotion)</p>
            </div>
            <div class="container content">
                <div class="stars-cream fadeInUp"></div>
            </div>
        </div>
        <?php } else{?>
        <div class="interactive-slider-v2 change-padding">
        </div>
        <?php } ?>
        <div class="container">
            <div class="arrow"></div>
        </div>