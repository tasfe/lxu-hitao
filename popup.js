function click(e) {
  var bg = chrome.extension.getBackgroundPage();
  chrome.tabs.executeScript({
	file: 'js/executeJS.js'
  });
}

document.addEventListener('DOMContentLoaded', function () {
	HiTao.readUserInfo(false);
	$('#up_userinfo_btn').click([true], HiTao.readUserInfo);
	$('#hitao_login').click(HiTao.login);
	
	HiTao.readFactoryInfo(false);
	$('#up_factoryinfo_btn').click([true], HiTao.readFactoryInfo);
	
	HiTao.readSubOrderInfo(false);
	$('#up_custorder_btn').click([true], HiTao.readSubOrderInfo);
	$('#hitao_execute').click(HiTao.executeOrder);
	
	$('#clear_log').click(HiTao.clearLog);
});