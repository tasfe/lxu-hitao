//�ύ����
HiTao.currentOrder = {};

HiTao.executeOrder = function() {
	var subOrderId = $('input[name="hitao_selectd_order"]:checked').val();
	$.each(HiTao.subOrderInfo, function(i,order){
		console.log(subOrderId +" : " + order.subOrderId);
		if (subOrderId==order.subOrderId) {
			if ((order.orderId==null || order.orderId=="") && order.subOrderPayState=="�Ѹ���δ����") {
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
				alert('����[' + order.subOrderId + ']δ������Ѿ������!');
				return "";
			}
		}
	});
}
//��ʼ�����ҳ��
HiTao.fillForm = function() {
	HiTao.executeJS(HiTao.fillColorSizeJS(HiTao.currentOrder));
}
HiTao.fillAddress = function() {
	HiTao.executeJS(HiTao.fillAddressJS(HiTao.currentOrder));
}
