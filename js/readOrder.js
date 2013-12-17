//��ȡ���ζ���,Ϊ�Զ�ȥ�����µ���׼��.
HiTao.subOrderInfo = {};
HiTao.readSubOrderInfo = function(reload) {
	if (reload) {
		xmlDocContent = HiTao.readXML("conf/customerOrderInfo.xml");
		$.each(xmlDocContent, function(i,n){
			HiTao.subOrderInfo[i] = HiTao.readSubOrderInfo.handlerOrder(n);
		});
		HiTao.storeSet({"HiTao_subOrderInfo":HiTao.subOrderInfo});
		HiTao.log("order info from xml file!");
		HiTao.popupSubOrderInfo();
	} else {
		HiTao.storeGet("HiTao_subOrderInfo", function(result){
			HiTao.subOrderInfo = ( typeof(result.HiTao_subOrderInfo)=="undefined" ? HiTao.subOrderInfo : result.HiTao_subOrderInfo );
			if ($.isEmptyObject(result.subOrderInfo)) {
				HiTao.readSubOrderInfo(true);
			} else {
				HiTao.log("order info from storage!");
			}
			HiTao.popupSubOrderInfo();
		});
	}
}
HiTao.readSubOrderInfo.handlerOrder = function (obj) {
	var order  = {};
	order.product = $('product',obj).text();
	order.orderId = $('orderId', obj).text();// ȥ�ϼ��µ�������Ķ���id ���Բ��� 
	order.subOrderId = $('subOrderId', obj).text();// ���οͻ��Ķ���id 
	order.subOrderBuyCount = $('subOrderBuyCount', obj).text();// �������� 
	order.subOrderBuySize = $('subOrderBuySize', obj).text();// ������� 
	order.subOrderBuyColor = $('subOrderBuyColor', obj).text();// ������ɫ 
	order.subOrderPayState = $('subOrderPayState', obj).text();// ���οͻ��Ķ����ĸ���״̬ 
	order.subOrderCustomer = $('subOrderCustomer', obj).text();// ���οͻ��Ķ������ջ��� 
	order.subOrderAddrPhone = $('subOrderAddrPhone', obj).text();// ��ϵ�绰 
	order.subOrderWayType = $('subOrderWayType', obj).text();// ���ͷ�ʽ 
	order.subOrderMsg = $('subOrderMsg', obj).text();// ���οͻ����� 
	//���οͻ��ջ���ַ  
	order.subOrderAddrProv = $('subOrderAddrProv', obj).text();// ʡ 
	order.subOrderAddrCity = $('subOrderAddrCity', obj).text();// �� 
	order.subOrderAddrCounty = $('subOrderAddrCounty', obj).text();// ��/�� 
	order.subOrderAddrStreet = $('subOrderAddrStreet', obj).text();// �ֵ�
	order.subOrderAddrPostCode = $('subOrderAddrPostCode', obj).text();// �ʱ� 
	return order;
}

HiTao.popupSubOrderInfo = function() {
	var html = "<div style='overflow:auto;'><table width=950px;>";
	html += "<thead>";
	html += "<th>ѡ��</th>";
	html += "<th>��������</th>";//�µ���,������id������ֵ.
	html += "<th>��Ʒ</th>";
	html += "<th>�ͻ�������</th>";
	html += "<th>����</th>";
	html += "<th>����</th>";
	html += "<th>��ɫ</th>";
	html += "<th>����״̬</th>";
	html += "<th>�ջ���</th>";
	html += "<th>��ϵ�绰</th>";
	html += "<th>���ͷ�ʽ</th>";
	html += "<th>�ͻ�����</th>";
	html += "<th>������ַ</th>";
	html += "<th>�ʱ�</th>";
	html += "</thead><tbody>";
	$.each(HiTao.subOrderInfo, function(i,order){
		html += "<tr>";
		html += "<td><input name='hitao_selectd_order' value='"+order.subOrderId+"' " + (i==0? "checked" : "") +" type='radio'/></td>";
		html += "<td>"+order.orderId+"</td>";//�µ���,������id������ֵ.
		html += "<td>"+order.product+"</td>";
		html += "<td>"+order.subOrderId+"</td>";
		html += "<td>"+order.subOrderBuyCount+"</td>";
		html += "<td>"+order.subOrderBuySize+"</td>";
		html += "<td>"+order.subOrderBuyColor+"</td>";
		html += "<td>"+order.subOrderPayState+"</td>";
		html += "<td>"+order.subOrderCustomer+"</td>";
		html += "<td>"+order.subOrderAddrPhone+"</td>";
		html += "<td>"+order.subOrderWayType+"</td>";
		html += "<td>"+order.subOrderMsg+"</td>";
		html += "<td>" + order.subOrderAddrProv + "&nbsp;"
				+ order.subOrderAddrCity + "&nbsp;"
				+ order.subOrderAddrCounty + "&nbsp;"
				+ order.subOrderAddrStreet + "</td>";
		html += "<td>"+order.subOrderAddrPostCode+"</td>";
		html += "</tr>";
	});
	html += "</tbody></table></div>";
	$("#suborder_list").html(html);
}