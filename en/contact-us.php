<?php
    $pageNo = 5;
    require_once('newHeader.php');
?>
    <div class="flat-bg-block-v1 parallaxBg1">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-sm-6 col-xs-12  margin-bottom-40 col-md-offset-3 col-sm-offset-3">
                    <div class="contactUsDiv text-center"><h2 class="contactUsDivH2">Contact Us</h2></div>
			<div class="alert alert-danger" id ="error" style="display:none">
				
  			</div>
			<div class="alert alert-success" id="success" style="display:none">
			   Your message has been sent successfully.
			</div>
                    <form action="contactFormSend.php" method="post" id="sky-form3" class="sky-form contact-style">
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

                            <p>
					<button type="button" class="btn-u btn-u-red" onclick="onContactSend()">Send Message</button>
					<div id="spin" style="display:none"></div>	
				</p>
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

<?php require_once('newFooter.php');?>
	<script type="text/javascript" src="js/jquery.form.js"></script>
	<script type="text/javascript" src="js/spin.js"></script>
    <script type="text/javascript">
        jQuery(document).ready(function() {
            App.init();
        });

	function onContactSend(){
	$("#error").hide();
	$("#success").hide();

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
		
		$("#sky-form3").ajaxForm({
			success: function(data){
			  
			   if(data.result == "success"){
				$("#success").show();
				$("#spin").hide();

				
			}else if(data.result =="failed"){
				$("#error").text(data.message);
				$("#error").show();
				$("#spin").hide();
	
			}
			}
		}).submit();
	}
    </script>