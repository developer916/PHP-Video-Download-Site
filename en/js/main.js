$(document).ready(function () {
    /*--------------------< scrollTo anchor >--------------------*/
    /* learn how here >> http://jsfiddle.net/BjpWB/4/ */
    function scrollToAnchor(aid) {
        var aTag = $("a[name='" + aid + "']");
        $('html,body').animate({ scrollTop: aTag.offset().top }, 'slow');
    }

    $(".point-to-discover").click(function () {
        scrollToAnchor('discover');
    });
    $(".point-to-design").click(function () {
        scrollToAnchor('design');
    });
    $(".point-to-develop").click(function () {
        scrollToAnchor('develop');
    });
    $(".point-to-deploy").click(function () {
        scrollToAnchor('deploy');
    });

    /*--------------------< boxslider >--------------------*/
    /* ---- controls testimonial blockquote ---- */
    var slider = $('.bxslider').bxSlider({
        auto: true,
        mode: 'fade',
        pager: false,
        pause: 13000,
        controls: false,
        adaptiveHeight: true,
        touchEnabled: true,
        onSlideAfter: function () {
            rearrangeArrows();
        },
        onSliderLoad: function () {
            rearrangeArrows();
        }
    });

    $('#arrowNEXT').click(function () {
        slider.goToNextSlide();
    });
    $('#arrowPREV').click(function () {
        slider.goToPrevSlide();
    });

    /*--------------------< footerslider >--------------------*/
    // We initially hide the footer and set the footerCollapsed variable to TRUE
    $('#hidden-footer-container').css('display', 'none');
    var footerCollapsed = true;
    //footer-more is the div that holds the arrow - when CLICKED
    $('#footer-more').click(function () {
        //We change the arrow based on whether this is an expand or a collapse.
        if (footerCollapsed) {
            $("#footer-more span").css('background-position', '0px 0px');
            footerCollapsed = false;
        } else {
            $("#footer-more span").css('background-position', '0px -12px');
            footerCollapsed = true;
        }
        //Now we animate the div up or down
        $('#hidden-footer-container').stop(true).slideToggle({
            //'duration': 1000,
            //HERE we have to PHYSICALLY make it scroll to the bottom since we are pushing 
            //a div up from the bottom of the screen.
            'progress': function () {
                window.scrollTo(0, document.body.scrollHeight);
            }
        });
    });

    /*--------------------< inline cascader >--------------------*/
    $('#insightsCascade').on("hover", function () {
        $('#insightsExtras').width($('.head-drop').width());
        if (!$('#insightsExtras').is(':animated')) {
            $('#insightsExtras').slideToggle('slow');
            $('#headDropParent').removeClass('fadeInUp');
        }
    })
    $('#insightsCascade').click(function () {
        $('#insightsExtras').width($('.head-drop').width());
        if (!$('#insightsExtras').is(':animated')) {
            $('#insightsExtras').slideToggle('slow');
            $('#headDropParent').removeClass('fadeInUp');
        }
    });

    $('.cascadeOptions').click(function () {
        window.location.href = $(this).data('loc');
    });

    /*--------------------< emma sign-up form >--------------------*/
    //
    $('#btnContactSubmit').click(function () {
        if ($('input[name="emma_member_email"]').val() == '' || $('input[name="emma_member_email"]').val() == 'Email Address') {
            $('#contactError').html('Please provide an email');
        } else {
            var userEmail = $('input[name="emma_member_email"]').val();
            //var userLast = $('input[name="emma_member_name_last"]').val();
            //var userFirst = $('input[name="emma_member_name_first"]').val();
            //if (userFirst == '' || userFirst == 'First Name' || userFirst == undefined) {
            //    $('#contactError').html('Please enter a first name.');
            //    return false;
            //}
            //
            //if (userLast == '' || userLast == 'Last Name' || userLast == undefined) {
            //    $('#contactError').html('Please enter your last name.');
            //    return false;
            //}
            if (validateEmail(userEmail)) {
                //$('#contactError').html('<img src="img/global/loading.gif" style="height: 10px; width: 10px;" />');
                $('#contactError').html('Validating ...');
                $.ajax({
                    type: 'POST',
                    url: '../js/form-emma.php',
                    data: {
                        'email': userEmail
//                        'first_name': userFirst,
//                        'last_name': userLast
                    },
                    success: function (data) {
                        var obj = JSON.parse(data);
                        if (obj.status == 'a') {
                            $('#contactError').html('SUCCESS! THANK YOU!');
                        } else {
                            $('#contactError').html('We are sorry, there was an error with your submission.');
                        }
                    },
                    error: function (xhr) {
                        $('#contactError').html('We are sorry, but there was an error.');
                    }
                });
            } else {
                $('#contactError').html('Is this a valid email?');
            }
        }
    });
});

/*--------------------< mobile navigation >--------------------*/
/* ---- controls smartphone nav ---- */
/*!
*
*  Copyright (c) David Bushell | http://dbushell.com/
*
*/
(function (window, document, undefined) {
    // helper functions
    var trim = function (str) {
        return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
    };
    var hasClass = function (el, cn) {
        return (' ' + el.className + ' ').indexOf(' ' + cn + ' ') !== -1;
    };
    var addClass = function (el, cn) {
        if (!hasClass(el, cn)) {
            el.className = (el.className === '') ? cn : el.className + ' ' + cn;
        }
    };
    var removeClass = function (el, cn) {
        el.className = trim((' ' + el.className + ' ').replace(' ' + cn + ' ', ' '));
    };
    var hasParent = function (el, id) {
        if (el) {
            do {
                if (el.id === id) {
                    return true;
                }
                if (el.nodeType === 9) {
                    break;
                }
            }
            while ((el = el.parentNode));
        }
        return false;
    };
    // normalize vendor prefixes
    var doc = document.documentElement;
    var transform_prop = window.Modernizr.prefixed('transform'),
        transition_prop = window.Modernizr.prefixed('transition'),
        transition_end = (function () {
            var props = {
                'WebkitTransition': 'webkitTransitionEnd',
                'MozTransition': 'transitionend',
                'OTransition': 'oTransitionEnd otransitionend',
                'msTransition': 'MSTransitionEnd',
                'transition': 'transitionend'
            };
            return props.hasOwnProperty(transition_prop) ? props[transition_prop] : false;
        })();
    window.App = (function () {
        var _init = false,
            app = {};
        var inner = document.getElementById('inner-wrap'),
            nav_open = false,
            nav_class = 'js-nav';
        app.init = function () {
            if (_init) {
                return;
            }
            _init = true;
            var closeNavEnd = function (e) {
                if (e && e.target === inner) {
                    document.removeEventListener(transition_end, closeNavEnd, false);
                }
                nav_open = false;
            };
            app.closeNav = function () {
                if (nav_open) {
                    // close navigation after transition or immediately
                    var duration = (transition_end && transition_prop) ? parseFloat(window.getComputedStyle(inner, '')[transition_prop + 'Duration']) : 0;
                    if (duration > 0) {
                        document.addEventListener(transition_end, closeNavEnd, false);
                    } else {
                        closeNavEnd(null);
                    }
                }
                removeClass(doc, nav_class);
            };
            app.openNav = function () {
                if (nav_open) {
                    return;
                }
                addClass(doc, nav_class);
                nav_open = true;
            };
            app.toggleNav = function (e) {
                if (nav_open && hasClass(doc, nav_class)) {
                    app.closeNav();
                } else {
                    app.openNav();
                }
                if (e) {
                    e.preventDefault();
                }
            };
            // open nav with main "nav" button
            document.getElementById('nav-open-btn').addEventListener('click', app.toggleNav, false);
            // close nav with main "close" button
            document.getElementById('nav-close-btn').addEventListener('click', app.toggleNav, false);
            // close nav by touching the partial off-screen content
            document.addEventListener('click', function (e) {
                if (nav_open && !hasParent(e.target, 'nav')) {
                    e.preventDefault();
                    app.closeNav();
                }
            }, true);
            addClass(doc, 'js-ready');
        };
        return app;
    })();
    if (window.addEventListener) {
        window.addEventListener('DOMContentLoaded', window.App.init, false);
    }
})(window, window.document);
/* ---- end mobile navigation ---- */

/* ----------------- functions --------------------------- */
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function rearrangeArrows() {
    //DONT do any of this if the arrows are not visible.
    if ($('#arrowNEXT').is(":visible")) {
        var wrapperHeightHalved = $('.bx-wrapper').height() / 2;
        var arrowHeightHalved = $('#arrowNEXT').height() / 2;
        var arrowsTop = wrapperHeightHalved - arrowHeightHalved;
        $('#arrowNEXT').animate({
            'margin-top': arrowsTop
        }, { duration: 250 });
        $('#arrowPREV').animate({
            'margin-top': arrowsTop
        }, { duration: 250 });
    }
}