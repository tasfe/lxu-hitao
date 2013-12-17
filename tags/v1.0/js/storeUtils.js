//∂¡»°xml
HiTao.readXML = function(filePath) {
	try{
		var xmlHttp = new window.XMLHttpRequest();
		xmlHttp.open("GET", filePath, false);
		xmlHttp.send(null);
		var xmlDoc = xmlHttp.responseXML.documentElement;
		return xmlDoc.children;
	} catch (ex) {
		console.error(ex.message);
	}
}
//±æµÿ¥Ê¥¢
HiTao.storeGet = function (str, callback) {
	chrome.storage.local.get(str, callback);
}
HiTao.storeSet = function (obj) {
	chrome.storage.local.set(obj, function(){});
}
