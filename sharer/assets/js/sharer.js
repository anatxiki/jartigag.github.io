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
	var hubzilla  = localStorage.getItem('Hubzilla');
	var diaspora  = localStorage.getItem('Diaspora');
	var gnusocial = localStorage.getItem('Gnusocial');
	var mastodon  = localStorage.getItem('Mastodon');
	
	if(hubzilla != null) { 
		$('#hostHubzilla').val(hubzilla);
		$('.hubzilla').removeAttr('disabled');
	}
	if(diaspora != null) { 
		$('#hostDiaspora').val(diaspora);
		$('.diaspora').removeAttr('disabled');
	}
	if(gnusocial != null) { 
		$('#hostGnusocial').val(gnusocial);
		$('.gnusocial').removeAttr('disabled');
	}
	if(mastodon != null) { 
		$('#hostMastodon').val(mastodon);
		$('.mastodon').removeAttr('disabled');
	}
	
	$('.host').keyup(function() {
		var service = $(this).closest("form").attr('data-service');
		
		if(service == 'Hubzilla') {
			$('.hubzilla').removeAttr('disabled');	
		}
		if(service == 'Diaspora') {	
			$('.diaspora').removeAttr('disabled');	
		}
		if(service == 'Gnusocial') {	
			$('.gnusocial').removeAttr('disabled');	
		}
		if(service == 'Mastodon') {	
			$('.mastodon').removeAttr('disabled');	
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
		
			if(service == 'Hubzilla') {
				action = host+'/rpost?body='+encodeURIComponent(text)+'&url='+encodeURIComponent(url);	
				$('.hubzilla').removeAttr('disabled');					
			}
			if(service == 'Diaspora') {
				action = host+'/bookmarklet?url='+encodeURIComponent(url)+'&title='+encodeURIComponent(text)+'&jump=doclose';	
				$('.diaspora').removeAttr('disabled');	
			}
			if(service == 'Gnusocial') {
				action = host+'/?action=newnotice&status_textarea='+encodeURIComponent(text);
				$('.gnusocial').removeAttr('disabled');	
			}
			if(service == 'Mastodon') {
				action = host+'/share?text='+encodeURIComponent(text)+'&url='+encodeURIComponent(url);	
				$('.mastodon').removeAttr('disabled');	
			}		
	  	}
		
		var left = Number((screen.width/2)-(w/2));
		var top  = Number((screen.height/2)-(h/2));

		window.open(action, '_blank', 'width='+w+',height='+h+',left='+left+',top='+top+'');	
	});
});
