//提交订单
HiTao.currentOrder = {};

HiTao.executeOrder = function() {
	var subOrderId = $('input[name="hitao_selectd_order"]:checked').val();
	$.each(HiTao.subOrderInfo, function(i,order){
		console.log(subOrderId +" : " + order.subOrderId);
		if (subOrderId==order.subOrderId) {
			if ((order.orderId==null || order.orderId=="") && order.subOrderPayState=="已付款未发货") {
				$.each(HiTao.factoryInfo, function(i,f){
					if (order.product==f.index) {
						HiTao.currentOrder = order;
						order.url = f.url;
						if (chrome.tabs.url!=f.url){
							HiTao.executeJS("document.location.href='" + order.url + "';");
						} else {
							HiTao.fillForm();
						}
					}
				});
			} else {
				alert('订单[' + order.subOrderId + ']未付款或已经处理过!');
				return "";
			}
		}
	});
}
//开始填充网页表单
HiTao.fillForm = function() {
	HiTao.executeJS(HiTao.fillColorSizeJS(HiTao.currentOrder));
}
HiTao.fillAddress = function() {
	HiTao.executeJS(HiTao.fillAddressJS(HiTao.currentOrder));
}
