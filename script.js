$(document).ready(function() {
	$('button').click(function() {
		console.log("the button clicks");
		var input = $('input').val();
		console.log("var input = " + input);

		var initial_address = "http://ycpi.api.flickr.com/services/rest/";
		var method = "?method=flickr.photos.search"
		var api_key = "&api_key=c904513c572bbf2c0b0c6fc63832b46d";
		var tags = "&tags=" + input;
		var format = "&format=json&nojsoncallback=1";
		var my_url = initial_address + method + api_key + tags + format;
		console.log(my_url);

		$.get(
			//make sure it gives back JSON
			my_url,
			function(data) {					
				console.log(data);


				$("div#data").text(data.photos.photo[0].id);
				console.log("getJSON has recieved" + input);
			}
		);

	});
});