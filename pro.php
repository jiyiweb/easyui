<?php
//sleep(3);
$pg=$_POST['page'];
$rou=$_POST['rows'];
$pgsz=$rou*($pg-1);
$sort=$_POST['sort'];
$order=$_POST['order'];
$tet=$_POST['texts'];
$mysql_server_name='localhost';
$mysql_username='root';
$mysql_password='xfxfxf';
$mysql_database='easyui';
$conn=mysql_connect($mysql_server_name,$mysql_username,$mysql_password) or die("error connecting") ; 
mysql_query("set names 'utf8'"); 
mysql_select_db($mysql_database);
$textsql='';
if(isset($tet)){
    $textsql="where text like '%".$tet."%'";
}
$sql =mysql_query("select id,text,state,iconCls from easyui_nav $textsql ORDER  BY $sort $order limit $pgsz,$rou");
$jsen='';
while($row=mysql_fetch_array($sql,MYSQL_ASSOC)){
		$jsen.=json_encode($row).',';
}
$zongshu=mysql_num_rows(mysql_query("select * from easyui_nav"));
echo '{"total":'.$zongshu.',"rows":['.substr($jsen,0,-1).'],"footer":[{"text":"zhongguo","state":"renming","iconCls":"yinhang"}]}';
mysql_close();
?>