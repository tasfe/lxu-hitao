HiTao.log = function(msg) {
	var has_log = $("#hitao_loger").html();
	has_log = has_log!=null && has_log!="" ? has_log +"<br/>" : "";
	$("#hitao_loger").html( has_log + msg );
}
HiTao.clearLog = function() {
	$("#hitao_loger").html("");
}
//同步日志
//HiTao.log = function(msg) {
//	HiTao.storeGet("hitao_loger", function(result){
//		var hitao_loger = ( typeof(result.hitao_loger)=="undefined" ? {} : result.hitao_loger );
//		hitao_loger = $.isEmptyObject(hitao_loger) ? "" + msg : hitao_loger +"<br/>" + msg;
//		$("#hitao_loger").html( hitao_loger );
//		HiTao.storeSet({"hitao_loger":hitao_loger});
//	});
//}
//HiTao.clearLog = function() {
//	$("#hitao_loger").html( "" );
//	HiTao.storeSet( { "hitao_loger":{} } );
//}
