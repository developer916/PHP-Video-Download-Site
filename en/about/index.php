<?php
    $pageNo = 2;
    require_once('../common/constant.php');
    require_once('../common/languages.php');
    require_once('../common/newHeader.php');
?>
<div class="wrapper " id="about-us-wrapper-1">
    <div class="bg-color-light" id="bg-color-light-1">
        <div class="container content-sm">
            <div class="headline-center margin-bottom-60">
                <h1 style="border-bottom: 0px"><span style="color: #ee352a"><?php echo $language_wouptube; ?></span> <?php echo $language_is_the_world_simplest_youtube_dowmloader;?></h1>
            </div>
            <div class="col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-12" style="font-size: 17px!important; padding-bottom: 90px ">
                <p>
                   <?php echo $language_about_first;?> <br>
                    <?php echo $language_about_second;?> <br>
                </p>
                <ul>
                    <li>
                        <?php echo $language_about_third;?>
                    </li>
                    <li>
                        <?php echo $language_about_fourth;?>
                    </li>
                    <li>
                        <?php echo $language_about_fifth;?>
                    </li>
                    <li>
                        <?php echo $language_about_sixth;?>
                    </li>
                    <li>
                        <?php echo $language_about_seventh;?>
                    </li>
                    <li>
                        <?php echo $language_about_eighth;?>
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