chrome.tabs.onUpdated.addListener(function(tabId , info) {
    if (info.status == "complete") {
    	chrome.tabs.get(tabId, function(tab){
			console.log('completed! ' + tab.url);
	    	var popup = chrome.extension.getViews({"type":"popup"});
	    	if(popup!=null &&popup[0]!=null && popup[0].HiTao!=null && popup[0].HiTao.fillForm!=null ) {
	    		if (tab.url==popup[0].HiTao.currentOrder.url) { 
	    			popup[0].HiTao.fillForm();
		    		console.log("trigger fill form:"+tab.url);
	    		}
	    		if ( endWith(tab.url, 'auction/buy_now.jhtml') ) {//提交订单页面
	    			popup[0].HiTao.fillAddress();
	    		}
	    		console.log('不是商品页面,不是地址页面.');
	    	} else {
	    		console.log('fucking popup!');
	    	}
    	});
    }
});
endWith = function(src, end) {
	return src.indexOf(end) == src.length-end.length;
}