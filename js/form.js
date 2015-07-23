$(function(){
	var k=($("#fomo").serializeArray());
	/*$.each(k,function(i,zhi){
			alert(zhi.name+"---"+i);
	});*/
		$("#fomo").form({
		url:'load.php',
		success:function(data){
			//alert(eval('('+data+')').zhong);	
		},
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
		("#fomo").form('disableValidation');
		//$("#fomo").form("load","load.php");
		//$("#fomo").form("load",{email:'hhhhhh@163.com',name:'hell'});



		
});