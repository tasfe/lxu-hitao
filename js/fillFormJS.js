HiTao.fillColorSizeJS = function(order){
	var js = "";
	js += "document.getElementById('J_IptAmount').value=" + order.subOrderBuyCount + ";\n";
	js += "setTimeout(function(){\n";
	js += "var colorAndSize = document.getElementsByClassName('tb-clearfix J_TSaleProp');\n";
	js += "for (var i=0; i<colorAndSize.length; i++) {\n";
	js += "		var t = colorAndSize[i];\n";
	js += "		if (t.attributes['data-property'].value=='尺码') {\n";
	js += "			for (var k=0; k<t.children.length; k++) {\n";
	js += "				var item = t.children[k].children[0];\n";//此处已经到具体尺码项上了
	js += "				if (item.children[0].innerText.indexOf('" + order.subOrderBuySize + "')==0) {\n";//这个地方比较坑,尺码后面容易给上备注
	js += "					item.click();\n";
	js += "				}\n";
	js += "			}\n";
	js += "		}\n";
	js += "		if (t.attributes['data-property'].value=='颜色分类') {\n";
	js += "			for (var k=0; k<t.children.length; k++) {\n";
	js += "				var item = t.children[k].children[0];\n";//此处已经到具体尺码项上了
	js += "				if (item.children[0].innerText.indexOf('" + order.subOrderBuyColor + "')>=0) {\n";
	js += "					item.click();\n";
	js += "				}\n";
	js += "			}\n";
	js += "		}\n";
	js += "}\n";
	js += "	}, 2000);\n";
	js += "setTimeout(function(){\n";
	js += "		document.getElementsByClassName('J_ClickCatcher J_LinkBuy')[1].click();\n";
	js += "	}, 2000);\n";
	js += "console.log('[颜色],[尺码],[数量]选择完毕!');\n";

	js += ""
	return js;
}

