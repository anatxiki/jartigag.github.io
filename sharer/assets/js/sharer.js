/*! sharer v1.2.2 | (c) Copyleft 2018 | GNU/GPL v3 */ 

//configuration
var w = 650; //modal window width
var h = 500; //modal window height
		
function GetURLParameter(sParam)
{
	var sPageURL = window.location.search.substring(1);
	var sURLVariables = sPageURL.split('&');
	for (var i = 0; i < sURLVariables.length; i++)
	{
		var sParameterName = sURLVariables[i].split('=');
		if (sParameterName[0] == sParam)
		{
		    return sParameterName[1];
		}
	} 
}

$(document).ready(function() {

	//get version from manifest
	$.getJSON('manifest.webmanifest', function(data) {
		$.each(data, function(index, element) {
		    $('#version').html(data.version);
		});
	});
	
	//get url parameter
	var varText = GetURLParameter('text');
	var varUrl  = GetURLParameter('url');
	$('.text').val(decodeURIComponent(varText));
	$('.url').val(decodeURIComponent(varUrl));
	
	//get browser database
	var twitter  = localStorage.getItem('Twitter');
	var reddit = localStorage.getItem('Reddit');
	var mastodon  = localStorage.getItem('Mastodon');
	
	if(twitter != null) { 
		$('#hostTwitter').val(twitter);
		$('.twitter').removeAttr('disabled');
	}
	if(reddit != null) { 
		$('#hostReddit').val(reddit);
		$('.reddit').removeAttr('disabled');
	}
	if(mastodon != null) { 
		$('#hostMastodon').val(mastodon);
		$('.mastodon').removeAttr('disabled');
	}
	
	$('.host').keyup(function() {
		var service = $(this).closest("form").attr('data-service');
		
		if(service == 'Twitter') {
			$('.twitter').removeAttr('disabled');	
		}
		if(service == 'Mastodon') {	
			$('.mastodon').removeAttr('disabled');	
		}
		if(service == 'Reddit') {	
			$('.reddit').removeAttr('disabled');	
		}
	});
	
	//open new window
	$('.send').click(function(e) {
		e.preventDefault();
		
		var site  = $(this).attr('data-site');
		var check = $('#remember'+site);
		
		if(check.is(':checked')) {  
			var host = $('#host'+site).val();
			localStorage.setItem(site, host);
		}
		
	  	var text    = $('#text'+site).val();
	  	var host    = $('#host'+site).val();
	  	var url     = $('#url'+site).val();
	  	var action  = '';
	  	var service = $(this).closest("form").attr('data-service');

	  	if(host != '' && text != '') {
	  	
	  		//add protocol https
	  		var prefix = 'https://';
			if (host.substr(0, prefix.length) !== prefix)
			{
				host = prefix + host;
			}
		
			if(service == 'Twitter') {
				action = host+'intent/tweet?text='+encodeURIComponent(text);
			}
			if(service == 'Mastodon') {
				action = host+'/share?text='+encodeURIComponent(text)+'&url='+encodeURIComponent(url);
				$('.mastodon').removeAttr('disabled');	
			}	
			if(service == 'Reddit') {
				action = host+'/submit?title='+encodeURIComponent(text)+'&url='+encodeURIComponent(url);
				$('.Reddit').removeAttr('disabled');	
			}	
	  	}
		
		var left = Number((screen.width/2)-(w/2));
		var top  = Number((screen.height/2)-(h/2));

		window.open(action, '_blank', 'width='+w+',height='+h+',left='+left+',top='+top+'');	
	});
});
