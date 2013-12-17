var HiTao = {};
HiTao.$sv = function(id, v) {
	return HiTao.$(id)+".value='" + v + "';";
}
HiTao.$click = function(id) {
	return HiTao.$(id)+".click();";
}
HiTao.$ = function(id) {
	return "document.getElementById('" + id + "')";
}
HiTao.executeJS = function(js) {
	var obj = {};
	if (js.indexOf('.js') == js.length-3) {
		obj.file = js;
	} else {
		obj.code = js
	}
	chrome.tabs.executeScript(obj);
}
HiTao.endWith = function(src, end) {
	return src.indexOf(end) == src.length-end.length;
}
HiTao.startWith = function(src, end) {
	return src.indexOf(end) == end.length-1;
}