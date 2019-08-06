<?php require_once('header.php'); ?>

<div class="wrapper">
    <!--=== Header v2 ===-->
    <div class="header-v2 header-sticky">
        <div class="container container-space">
            <!-- Topbar v2 -->
            <div class="topbar-v2" >
                <div class="row">
                    <div class="col-sm-8">
                        <!--                        <ul class="list-inline top-v2-contacts">-->
                        <!--                            <li>Email: <a href="mailto:info@htmlstream.com">info@htmlstream.com</a></li>-->
                        <!--                            <li>Call Us: +70 396 4587 99</li>-->
                        <!--                            <li>-->
                        <!--                                <div class="language-bar">-->
                        <!--                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">-->
                        <!--                                        <span class="heading">Languages</span>-->
                        <!--                                    </a>-->
                        <!--                                    <ul class="languages-dropdown" role="menu">-->
                        <!--                                        <li class="active">-->
                        <!--                                            <a href="#">English</a> -->
                        <!--                                        </li>-->
                        <!--                                        <li><a href="#">Spanish</a></li>-->
                        <!--                                        <li><a href="#">Russian</a></li>-->
                        <!--                                        <li><a href="#">German</a></li>-->
                        <!--                                    </ul>-->
                        <!--                                </div>-->
                        <!--                            </li>    -->
                        <!--                        </ul>-->
                    </div>
                    <div class="col-sm-4">
                        <div class="topbar-buttons pull-right">
                        </div>
                    </div>
                </div>
            </div>
            <!-- End Topbar v2 -->
        </div>

        <!-- Navbar -->
        <div class="navbar navbar-default mega-menu" role="navigation">
            <div class="container container-space">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-responsive-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="fa fa-bars"></span>
                    </button>
                    <a class="navbar-brand brand-style" href="index.html">
                        <img id="logo-header" src="assets/img/logo1-default.png" width="85" height="32" alt="Logo">
                    </a>
                </div>

                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse navbar-responsive-collapse">
                    <ul class="nav navbar-nav">
                        <!-- Home -->
                        <li class="active">
                            <a href="index.php">Home</a>
                        </li>
                        <!-- End Home -->

                        <!-- Pages -->
                        <li class="">
                            <a href="about-us.php">About</a>
                        </li>
                        <!-- End About Pages -->

                        <!-- Service Pages -->
                        <li class="">
                            <a href="help.php">Help</a>
                        </li>
                        <li class="">
                            <a href="trick.php">Trick</a>
                        </li>
                        <!-- End Service Pages -->
                    </ul>
                </div><!--/navbar-collapse-->
            </div>
        </div>
        <!-- End Navbar -->
    </div>

    <!--=== End Header v2 ===-->

    <!-- Image Gradient -->
    <div class="interactive-slider-v2">
        <div class="container">
            <h1>Welcome to Wouptube</h1>
            <p>Youtube Downloader & Youtube to MP3 converter.</p>
            <p>(also works with Vimeo, Dailymotion)</p>
        </div>
        <div class="container content">
            <div class="stars-cream"></div>
        </div>
    </div>
    <div class="container">
        <div class="arrow"></div>
    </div>
    <!-- End Image Gradient -->

    <!--=== Content ===-->
    <div class="content" style="padding-bottom: 0px">
        <div class="container">
            <!-- Service Box -->
            <div class="row text-center margin-bottom-60">
<!--                <h2 class="margin-bottom-25">Search Form</h2>-->
                <div class="col-md-6 col-sm-6 col-xs-12 col-md-offset-3 col-sm-offset-3">
                    <div class="form-group margin-bottom-25">
                        <input type="text" class="form-control" name="url" id="url" placeholder="Past URL or search here">
                    </div>
                    <div class="form-group">
                        <button class="btn-u btn-u-red" style="width: 100%; font-size: 20px; background: #ee352a">Go</button>
                    </div>
                </div>
            </div>
            <!-- End Service Box -->
        </div><!--/container -->

        <!-- Flat Background Block -->
        <div class="flat-bg-block-v1 parallaxBg1">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-sm-6 col-xs-12  margin-bottom-40 col-md-offset-3 col-sm-offset-3">
                        <div class="contactUsDiv text-center"><h2 class="contactUsDivH2">Contact Us</h2></div>
                        <form action="assets/php/sky-forms-pro/demo-contacts-process.php" method="post" id="sky-form3" class="sky-form contact-style">
                            <fieldset class="no-padding">
                                <label>Name <span class="color-red">*</span></label>
                                <div class="row sky-space-20">
                                    <div class="col-md-7 col-md-offset-0">
                                        <div>
                                            <input type="text" name="name" id="name" class="form-control">
                                        </div>
                                    </div>
                                </div>

                                <label>Email <span class="color-red">*</span></label>
                                <div class="row sky-space-20">
                                    <div class="col-md-7 col-md-offset-0">
                                        <div>
                                            <input type="text" name="email" id="email" class="form-control">
                                        </div>
                                    </div>
                                </div>

                                <label>Message <span class="color-red">*</span></label>
                                <div class="row sky-space-20">
                                    <div class="col-md-11 col-md-offset-0">
                                        <div>
                                            <textarea rows="8" name="message" id="message" class="form-control"></textarea>
                                        </div>
                                    </div>
                                </div>

                                <p><button type="submit" class="btn-u btn-u-red">Send Message</button></p>
                            </fieldset>
                            <div class="message">
                                <i class="rounded-x fa fa-check"></i>
                                <p>Your message was successfully sent!</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div><!--/end container-->
        </div>

    </div>
    <!--=== End Content ===-->

    <!-- Image Mouse -->
    <!-- End Image Mouse -->

</div>
<!--=== Footer Version 1 ===-->
<div class="footer-v1">
    <div class="footer">
        <div class="container">
            <div class="row">
                <!-- About -->
                <div class="col-md-3 md-margin-bottom-40">
                    <a href="index.html"><img id="logo-footer" class="footer-logo" src="assets/img/logo2-default.png" alt=""></a>
                    <p>About Unify dolor sit amet, consectetur adipiscing elit. Maecenas eget nisl id libero tincidunt sodales.</p>
                    <p>Duis eleifend fermentum ante ut aliquam. Cras mi risus, dignissim sed adipiscing ut, placerat non arcu.</p>
                </div><!--/col-md-3-->
                <!-- End About -->

                <!-- Latest -->
                <div class="col-md-3 md-margin-bottom-40">
                    <div class="posts">
                        <div class="headline"><h2>Latest Posts</h2></div>
                        <ul class="list-unstyled latest-list">
                            <li>
                                <a href="#">Incredible content</a>
                                <small>May 8, 2014</small>
                            </li>
                            <li>
                                <a href="#">Best shoots</a>
                                <small>June 23, 2014</small>
                            </li>
                            <li>
                                <a href="#">New Terms and Conditions</a>
                                <small>September 15, 2014</small>
                            </li>
                        </ul>
                    </div>
                </div><!--/col-md-3-->
                <!-- End Latest -->

                <!-- Link List -->
                <div class="col-md-3 md-margin-bottom-40">
                    <div class="headline"><h2>Useful Links</h2></div>
                    <ul class="list-unstyled link-list">
                        <li><a href="#">About us</a><i class="fa fa-angle-right"></i></li>
                        <li><a href="#">Portfolio</a><i class="fa fa-angle-right"></i></li>
                        <li><a href="#">Latest jobs</a><i class="fa fa-angle-right"></i></li>
                        <li><a href="#">Community</a><i class="fa fa-angle-right"></i></li>
                        <li><a href="#">Contact us</a><i class="fa fa-angle-right"></i></li>
                    </ul>
                </div><!--/col-md-3-->
                <!-- End Link List -->

                <!-- Address -->
                <div class="col-md-3 map-img md-margin-bottom-40">
                    <div class="headline"><h2>Contact Us</h2></div>
                    <address class="md-margin-bottom-40">
                        25, Lorem Lis Street, Orange <br />
                        California, US <br />
                        Phone: 800 123 3456 <br />
                        Fax: 800 123 3456 <br />
                        Email: <a href="mailto:info@anybiz.com" class="">info@anybiz.com</a>
                    </address>
                </div><!--/col-md-3-->
                <!-- End Address -->
            </div>
        </div>
    </div><!--/footer-->

    <div class="copyright">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <p>
                        2015 &copy; All Rights Reserved.
                        <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
                    </p>
                </div>

                <!-- Social Links -->
                <div class="col-md-6">
                    <ul class="footer-socials list-inline">
                        <li>
                            <a href="#" class="tooltips" data-toggle="tooltip" data-placement="top" title="" data-original-title="Facebook">
                                <i class="fa fa-facebook"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="tooltips" data-toggle="tooltip" data-placement="top" title="" data-original-title="Skype">
                                <i class="fa fa-skype"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="tooltips" data-toggle="tooltip" data-placement="top" title="" data-original-title="Google Plus">
                                <i class="fa fa-google-plus"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="tooltips" data-toggle="tooltip" data-placement="top" title="" data-original-title="Linkedin">
                                <i class="fa fa-linkedin"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="tooltips" data-toggle="tooltip" data-placement="top" title="" data-original-title="Pinterest">
                                <i class="fa fa-pinterest"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="tooltips" data-toggle="tooltip" data-placement="top" title="" data-original-title="Twitter">
                                <i class="fa fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="tooltips" data-toggle="tooltip" data-placement="top" title="" data-original-title="Dribbble">
                                <i class="fa fa-dribbble"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <!-- End Social Links -->
            </div>
        </div>
    </div><!--/copyright-->
</div>
<!--=== End Footer Version 1 ===-->
</div><!--/wrapper-->

<!-- JS Global Compulsory -->
<?php require_once('footer.php'); ?>
<script type="text/javascript">
    jQuery(document).ready(function() {
        App.init();
        App.initParallaxBg();
        FancyBox.initFancybox();
        OwlCarousel.initOwlCarousel();

    });
</script>

<!--[if lt IE 9]>

<![endif]-->

</body>
</html>