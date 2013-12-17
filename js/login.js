HiTao.login = function() {
	var userIndex = $("input[name='hitao_selectd_user']:checked").val();
	$.each(HiTao.userInfo, function(i,user){
		if(user.index==userIndex) {
			HiTao.execLogin(user);
		}
	});
}
