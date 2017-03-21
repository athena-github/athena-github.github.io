//菜单栏
var bool=true;
$(".icon-zhucaidanlan").click(function(){
	if(bool){
		$(".home-menu").animate({height:"9.2rem",width:"3rem"});
		
		bool=false;
	}else{
		$(".home-menu").animate({width:0,height:0});		
		bool=true;
	}


//	$(".home-menu").toggleClass("block");
//	$(".home-menu").toggle();         //切换显示与隐藏
})



//新闻中心
$(".center-change1").click(function(){
	var index = $(this).index();
	
	$(".center-body1").hide();
	$(".centerBtn").removeClass("centerBtn");
	$("div.center-body1:eq("+index+")").show();
	$(this).addClass("centerBtn");
}) 


//2全部商品
$(".productions>li").click(function(){
	var index = $(this).index();
	$(".productions>li>p,.productions>li>div>span,.productions>li>div>del").css("color","#323232");
	$(".productions>li:eq("+index+")>p,.productions>li:eq("+index+")>div>span,.productions>li:eq("+index+")>div>del").css("color","#3d85fe");
	
})

//3体验馆





