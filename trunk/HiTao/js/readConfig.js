
HiTao.userInfo = {};

//读取用户信息,并将读取到的用户信息显示到列表中
//通过reload指定是否重新读取.
HiTao.readUserInfo = function(reload) {
	if (reload) {
		xmlDocContent = HiTao.readXML("conf/userInfo.xml");
		$.each(xmlDocContent, function(i,n){
			HiTao.userInfo[i] = {};
			var user = HiTao.userInfo[i];
			user.index = $(n.children[0]).text();
			user.name = $(n.children[1]).text();
			user.pwd = $(n.children[2]).text();
		});
		HiTao.storeSet({"HiTao_userInfo":HiTao.userInfo});
		HiTao.log("user info from xml file!");
		HiTao.popupUserInfo();
	} else {
		HiTao.storeGet("HiTao_userInfo", function(result){
			HiTao.userInfo = ( typeof(result.HiTao_userInfo)=="undefined" ? HiTao.subOrderInfo : result.HiTao_userInfo );
			if ($.isEmptyObject(result.userInfo)) {
				HiTao.readUserInfo(true);
			} else {
				HiTao.log("user info from storage!");
			}
			HiTao.popupUserInfo();
		});
	}
}
HiTao.popupUserInfo = function() {
	var html = "<table>";
	$.each(HiTao.userInfo, function(i,user){
		html += "<tr>";
		html += "<td><input name='hitao_selectd_user' value='"+user.index+"' " + (i==0? "checked" : "") +" type='radio'/></td>";
		html += "<td>"+user.name+"</td>";
		html += "<td>"+user.pwd+"</td>";
		html += "</tr>";
	});
	html += "</table>";
	$("#user_list").html(html);
}
//-------------------------------------------------------------------------------------------------------------------
HiTao.factoryInfo = {};

//读取上家产品信息,并将产品信息显示到列表中
//通过reload指定是否重新读取.
HiTao.readFactoryInfo = function(reload) {
	if (reload) {
		xmlDocContent = HiTao.readXML("conf/factoryInfo.xml");
		$.each(xmlDocContent, function(i,n){
			HiTao.factoryInfo[i] = {};
			var item = HiTao.factoryInfo[i];
			item.index = $(n.children[0]).text();
			item.name = $(n.children[1]).text();
			item.url = $(n.children[2]).text();
		});
		HiTao.storeSet({"HiTao_factoryInfo":HiTao.factoryInfo});
		HiTao.log("factory info from xml file!");
		HiTao.popupFactoryInfo();
	} else {
		HiTao.storeGet("HiTao_factoryInfo", function(result){
			HiTao.factoryInfo = ( typeof(result.HiTao_factoryInfo)=="undefined" ? HiTao.subOrderInfo : result.HiTao_factoryInfo );
			if ($.isEmptyObject(result.factoryInfo)) {
				HiTao.readFactoryInfo(true);
			} else {
				HiTao.log("factory info from storage!");
			}
			HiTao.popupFactoryInfo();
		});
	}
}
HiTao.popupFactoryInfo = function() {
	var html = "<div style='overflow:auto;'><table width='950'>";
	$.each(HiTao.factoryInfo, function(i,item){
		html += "<tr>";
		html += "<td width='60'><input name='hitao_selectd_factory' value='"+item.index+"' " + (i==0? "checked" : "") +" type='radio'/>"+item.index+"</td>";
		html += "<td width='200'>"+item.name+"</td>";
		html += "<td style='text-decoration: underline;color: #1e0fbe;'>"+item.url+"</td>";
		html += "</tr>";
	});
	html += "</table></div>";
	$("#factory_list").html(html);
}