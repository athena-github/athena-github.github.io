//$(function(){
	//top2
	$(".top2_a").each(function(index){
		$(this).mouseover(function(){
			$(".top2_a").eq(index).next().show(400);
		})
		$(this).mouseout(function(){
			$(".top2_a").eq(index).next().hide(600);
		})
		$(".top2_ul").eq(index).mouseover(function(){
			$(this).show();
		})
		$(".top2_ul").eq(index).mouseout(function(){
			$(this).hide();
		})
	}) 
//	 $(".top2_ul").each(function(index){
//	 	$(".top2_ul").mouseover(function(){
//	 		$(this).css("display","block")
//	 	})
//	 	$(".top2_ul").mouseout(function(){
//	 		$(this).css("display","none");
//	 	})
	 	
//	 })
	
	//banner（用的 插件）
	
	
	//section1
	$(window).scroll(function(){
				console.log($("body").scrollTop())
			if($("body").scrollTop()>300 && $("body").scrollTop()<500){
				$("a.stimg1>img").animate({top:0},800);
				$("a.stimg2>img").animate({top:300},800);
				$("a.stimg3>img").animate({left:405},800);
				$("a.stimg4>img").animate({right:0},800);
				$("a.stimg5>img").animate({top:300},800);
			}
	})

	 	
 	//自动出现字section2
	// transition effect
		style = 'easeOutQuart';
		$('.photo').hover(
			function() {
				//显示
				$(this).children('div:first').stop(false,true).animate({top:0},400);
				$(this).children('div:last').stop(false,true).animate({bottom:0},400);
			},

			function() {
				//隐藏
				$(this).children('div:first').stop(false,true).animate({top:-161},300);
				$(this).children('div:last').stop(false,true).animate({bottom:-139},300);
			}
		)
	
	//自动不全插件
    $("#up").AutoComplete({
        'data': ['北京', '石家庄', '济南', '郑州', '武汉', '广州', '深圳', '厦门', '上海', '杭州'],
         "minChars": 0,     //双击空白文本框时显示全部提示数据
          'listDirection': 'up'    //列表会显示在输入框的下方。 
    }).AutoComplete('show');
	
	
	//
//	setInterval(function(){
//		$(".country").animate({"opacity","0.3"},1000)
//	},1000)
	
	
	
	
	
	
	
	
	
//})
