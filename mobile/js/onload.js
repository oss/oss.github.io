$(document).ready(function() {
	
	// Configure the navigation tabs
	$('#content').tabs({
		fxSlide: false, 
		fxFade: true, 
		fxSpeed: 'fast'
	});
	
	// Activate Tipsy tooltip effect
	$('#buy, #phone a').tipsy({
		gravity: 's',
		fade: false,
		html: true,
		// Text on the buy button tooltip:
		fallback: "$1.99 on the App Store <span>Version 1.4 requires iOS 4.3 or later. Works on iPhone and iPod Touch.</span>"
	});

	// Newsletter default text
	$('#email').focus(function() {
		if($(this).val()=="Enter your email address"){
			$(this).val("");
		}
		}).blur(function(){
			if($(this).val()==""){
			$(this).val("Enter your email address");
		}
	});
	
	// Wrap the headers in the sidebar in span tags for styling purposes
	$('#sidebar h3').wrapInner('<span>');

	// Fade effect on the listed items (not for IE because it is buggy)
	if (!$.browser.msie) {
		$('#buy, #phone a, #social a, ul.screenshots li img').hover(function() {
			$(this).stop().animate({opacity: .7});
		},
			function(){
			$(this).stop().animate({opacity: 1});
		});
	}
	
	// Form validation in the contact form
	$("#contactForm").validate();
	
	// Clear every fourth screenshot to keep the layout intact
	$("ul.screenshots li:nth-child(4n)").css({'clear' : 'both'});

	// Activate and configure the FancyBox lightbox plugin
	$(".fancybox").fancybox({
		'titlePosition'		: 'over',
		'transitionIn'		: 'fade',
		'transitionOut'		: 'fade',
		'speedIn'			: 300, 
		'speedOut'			: 100, 
		'overlayShow'		: true,
		'overlayOpacity'	: 0.6,
		'overlayColor'		: 'black'
	});
	
	// FancyBox lightbox plugin for videos
	$(".video").click(function() {
		$.fancybox({
			'padding'		: 0,
			'autoScale'		: false,
			'transitionIn'	: 'fade',
			'transitionOut'	: 'fade',
			'speedIn'		: 300, 
			'speedOut'		: 100, 
			'overlayShow'	: true,
			'overlayOpacity': 0.6,
			'overlayColor'	: 'black',
			'title'			: this.title,
			// 'width'		: 680,
			// 'height'		: 495,
			'href'			: this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
			'type'			: 'swf',
			'swf'			: {
			'wmode'			: 'transparent',
			'allowfullscreen': 'true'
			}
		});
		return false;
	});
});