var nick = document.getElementById("nick");

if (nick) {
	nick.addEventListener("input", function() {
		document.cookie = "slitherNick=" + nick.value;
	});

	var cookies = document.cookie.split(";");
	cookies.map(function(cookie) {
		var keyVal = cookie.split("=");
		return {name: keyVal[0], value: keyVal[1]};
	}).filter(function(entry) {
		return entry.name == "slitherNick";
	}).forEach(function(entry) {
		nick.value = entry.value;
	});
}
