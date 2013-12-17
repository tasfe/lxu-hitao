//读取下游订单,为自动去上游下单做准备.
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
	order.orderId = $('orderId', obj).text();// 去上家下单后产生的订单id 可以不填 
	order.subOrderId = $('subOrderId', obj).text();// 下游客户的订单id 
	order.subOrderBuyCount = $('subOrderBuyCount', obj).text();// 购买数量 
	order.subOrderBuySize = $('subOrderBuySize', obj).text();// 购买尺码 
	order.subOrderBuyColor = $('subOrderBuyColor', obj).text();// 购买颜色 
	order.subOrderPayState = $('subOrderPayState', obj).text();// 下游客户的订单的付款状态 
	order.subOrderCustomer = $('subOrderCustomer', obj).text();// 下游客户的订单的收货人 
	order.subOrderAddrPhone = $('subOrderAddrPhone', obj).text();// 联系电话 
	order.subOrderWayType = $('subOrderWayType', obj).text();// 运送方式 
	order.subOrderMsg = $('subOrderMsg', obj).text();// 下游客户留言 
	//下游客户收货地址  
	order.subOrderAddrProv = $('subOrderAddrProv', obj).text();// 省 
	order.subOrderAddrCity = $('subOrderAddrCity', obj).text();// 市 
	order.subOrderAddrCounty = $('subOrderAddrCounty', obj).text();// 区/县 
	order.subOrderAddrStreet = $('subOrderAddrStreet', obj).text();// 街道
	order.subOrderAddrPostCode = $('subOrderAddrPostCode', obj).text();// 邮编 
	return order;
}

HiTao.popupSubOrderInfo = function() {
	var html = "<div style='overflow:auto;'><table width=950px;>";
	html += "<thead>";
	html += "<th>选择</th>";
	html += "<th>主订单号</th>";//下单后,主订单id才能有值.
	html += "<th>产品</th>";
	html += "<th>客户订单号</th>";
	html += "<th>数量</th>";
	html += "<th>尺码</th>";
	html += "<th>颜色</th>";
	html += "<th>付款状态</th>";
	html += "<th>收货人</th>";
	html += "<th>联系电话</th>";
	html += "<th>运送方式</th>";
	html += "<th>客户留言</th>";
	html += "<th>发货地址</th>";
	html += "<th>邮编</th>";
	html += "</thead><tbody>";
	$.each(HiTao.subOrderInfo, function(i,order){
		html += "<tr>";
		html += "<td><input name='hitao_selectd_order' value='"+order.subOrderId+"' " + (i==0? "checked" : "") +" type='radio'/></td>";
		html += "<td>"+order.orderId+"</td>";//下单后,主订单id才能有值.
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