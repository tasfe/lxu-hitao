HiTao.fillAddressJS = function(order){
	var js = "";
	js += HiTao.triggerJS;
	js += HiTao.selectOptionSetJS;
	js += HiTao.triggerObjectJS;
	js += HiTao.selectCssOptionSetJS;
	js += "document.getElementsByClassName('msgtosaler')[0].value='" + order.subOrderMsg + "';\n";
	js += "setTimeout(function(){\n";
	js += "document.getElementsByClassName('J_Modify modify J_MakePoint')[0].click();\n";//找到修改地址链接
	js += " console.log('弹出修改地址完毕!');\n";
	js += " setTimeout(function(){\n";
	js += "		setOptions('n_prov_select', '" + order.subOrderAddrProv + "');\n";
	js += " 	setTimeout(function(){\n";
	js += "			setOptions('n_city_select', '" + order.subOrderAddrCity + "');\n";
	js += "			setTimeout(function(){\n";
	js += "				setOptions('n_area_select', '" + order.subOrderAddrCounty + "');\n";
	js += "				"+HiTao.$sv('J_postCode', order.subOrderAddrPostCode)+"\n";
	js += "				"+HiTao.$sv('deliverAddress', order.subOrderAddrStreet) +"\n";
	js += "				"+HiTao.$sv('deliverName', order.subOrderCustomer) +"\n";
	js += "				"+HiTao.$sv('deliverPhoneBak', order.subOrderAddrPhone) +"\n";
	js += "				document.getElementById('J_EditSure').click();\n";//保存地址修改
	js += "				setTimeout(function(){\n";
	js += "					setOptionsByCss('sub-sel J_fareGroup_sel_-100','" + order.subOrderWayType + "');\n";
	js += "					setTimeout(function(){\n";
	js += "						document.getElementsByClassName('dpl-button')[0].click();\n";
	js += "						setTimeout(function(){\n";
	js += "							var verifyImage = document.getElementById('J_verifyImageMask');\n";
	js += "							if(verifyImage!=null){alert('出现校验码!手动输入后,直接提交订单!');};\n";
	js += "						}, 2000);\n";
	js += "					}, 2000);\n";
	js += "				}, 3000);\n";
	js += "			}, 1000);\n";
	js += "		}, 1000);\n";
	js += " }, 1000);\n";
	js += "}, 3000);\n";
	console.log(js);
	return js;
}

HiTao.triggerJS = "function trigger(id, event) {\n"
	+ "		var tt_ss = document.getElementById(id);\n"
	+ "		var tt_ss_evt = document.createEvent('MouseEvents');\n"
	+ "		tt_ss_evt.initEvent(event,true,true);\n"
	+ "		tt_ss.dispatchEvent(tt_ss_evt);\n"
	+ "}\n";
HiTao.triggerObjectJS = "function triggerObj(obj, event) {\n"
	+ "		var tt_ss = obj;\n"
	+ "		var tt_ss_evt = document.createEvent('MouseEvents');\n"
	+ "		tt_ss_evt.initEvent(event,true,true);\n"
	+ "		tt_ss.dispatchEvent(tt_ss_evt);\n"
	+ "}\n";
HiTao.selectOptionSetJS = "function setOptions(selectId, value) {\n"
	+ "		var prov_opts = document.getElementById(selectId).options;\n"
	+ "		for (var i=0; i<prov_opts.length; i++) {\n"
	+ "			if(prov_opts[i].innerText==value || (prov_opts[i].innerText.indexOf(value)>=0) ) {\n"
	+ "				prov_opts[i].selected = true; break;\n"
	+ "			}\n"
	+ "		}\n"
	+ "		trigger(selectId,'change');\n"
	+ "}\n";
	
HiTao.selectCssOptionSetJS = "function setOptionsByCss(css, value) {\n"
	+ "		var obj = document.getElementsByClassName(css)[0];\n"
	+ "		var prov_opts = obj.options;\n"
	+ "		for (var i=0; i<prov_opts.length; i++) {\n"
	+ "console.log(prov_opts[i].innerText+' : ' + value + ' : eq ' +(prov_opts[i].innerText.indexOf(value)>=0));\n"
	+ "			if(prov_opts[i].innerText==value || (prov_opts[i].innerText.indexOf(value)>=0) ) {\n"
	+ "				prov_opts[i].selected = true; break;\n"
	+ "			}\n"
	+ "		}\n"
	+ "		triggerObj(obj,'change');\n"
	+ "}\n";
