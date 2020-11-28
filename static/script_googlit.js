var getParams = function (url) {
	var params = {};
	var parser = document.createElement('a');
	parser.href = url;
	var query = parser.search.substring(1);
	var vars = query.split('&');
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split('=');
		params[pair[0]] = decodeURIComponent(pair[1]);
	}
	return params;
};
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
img = new Image();
img.src = "/static/googleit_logo.png";
img.onload = function(){
	document.querySelector('#googlitimg').src = img.src;
};
window.onload = async function(){
	qwerty = getParams(window.location.href);
	console.log(qwerty['q']);
	if (!qwerty['q']) 
	{
		qwerty['q'] = "kardandon.github.io";
	}
	param = document.querySelector('input');
	param.value = "";
	for (let i = 0; i < qwerty['q'].length; i++)
	{
		param.value += qwerty['q'][i];
		await sleep(200);
	}
	document.querySelector('form').submit();
};
