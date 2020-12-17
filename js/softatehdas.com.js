// If the page is inside a frame, get rid of the frame
if (top.location != document.location){
	top.location = document.location;
}


function generateLink(str) {
        if (str.indexOf("(a)") != -1 )
            var parts = str.split("(a)");
        else
            return str;

        if (parts.length == 2) {
            for (var j = 0; j < 2; j++) {
                parts[j] = parts[j].replace(" piste ", ".");
                parts[j] = parts[j].replace(" dot ", ".");
                parts[j] = parts[j].replace(" ", "");
            }
        }
		return "<a href=\"mailto:" + parts[0] + "@" + parts[1] + "\">" + parts[0] + "@" + parts[1] + "</a>";
}

function generateMailLinks() {
	$("span.meili").each(
		function(index) {
			$(this).html(generateLink($(this).html()));
		}
	);
}
$(function(){
	generateMailLinks();

});

$(document).ready(function() {
    $("a.fancybox").fancybox({
        'transitionIn'  :   'elastic',
        'transitionOut' :   'elastic',
        'speedIn'       :   600, 
        'speedOut'      :   200, 
        'hideOnContentClick' : true,
        'overlayShow'   :   true,
        'padding'       :   0,
        'titleShow'     :   false
    });
});

function slideSwitch() {
	var $active = $('#referenceShots div.active');

	if ( $active.length == 0 ) $active = $('#referenceShots div:last');

	var $next =  $active.next().length ? $active.next()
		: $('#referenceShots div:first');
	
	$active.addClass('last-active');

	$next.css({opacity: 0.0})
		.addClass('active')
		.animate({opacity: 1.0}, 700, function() {
			$active.removeClass('active last-active');
		});
}
