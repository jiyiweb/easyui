$(function () {

	
	$('#box').form({
		url : 'content.php',
		onSubmit : function (param) {
			param.code = '320902';
            return $(this).form('validate');
		},
		success : function (data) {
			alert(data);
			//var data = eval('(' + data + ')');
			//if (data.email) {
			//	alert(data.email);
			//}
		},
	});

	/*
	$('#box').form('load', {
		name : '蜡笔小新',
		email : 'xiaoxin@163.com',
	});
	
	
	$('#box').form({
		onBeforeLoad : function () {
			alert('load之前');
		},
		onLoadSuccess : function (data) {
			alert('load成功' + data.email);
		},
		onLoadError : function () {
			alert('错误');
		}
	});
	
	
	$('#box').form('load', 'load.php');

	*/
	
	$('#box').form('disableValidation');
	$('#box').form('enableValidation');
	
});



	









