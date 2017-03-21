$(function(){
	$('#dowebok').fullpage({
//		sectionsColor: ['#1bbc9b', '#3BBFf0', '#7BAABE', '#eee'],
		easing:"easeInOutBack",//滚动动画的方式
//		easing:"easeInQuart",
		css3:false,
		loopBottom:true,//是否滚回顶部
		loopTop:true,//是否滚回底部
//		autoScrolling:false,//出现浏览器自带的滚动条
//		paddingTop:"100px",		//距离顶部距离
//		keyboardScrolling:true,
		afterRender:function(){//afterRender	页面结构生成后的回调函数，或者说页面初始化完成后的回调函数
			$('.section1').find('.section_zi').fadeIn(3000);
				$('.section1').find('.banner-grid2').delay(200).animate({
					left: '0'
				}, 1500, 'easeOutExpo');
				$('.section1').find('.banner-grid3').delay(200).animate({
					left: '-2'
				}, 1500, 'easeOutExpo');
				$('.section1').find('.navbar').animate({
					top: '95'
				}, 1500, 'easeOutExpo');
		},
		afterLoad: function(anchorLink, index){
			if(index == 1){
				$('.section1').find('.section_zi').fadeIn(3000);
				$('.section1').find('.banner-grid2').delay(200).animate({
					left: '0'
				}, 1500, 'easeOutExpo');
				$('.section1').find('.banner-grid3').delay(200).animate({
					left: '-2'
				}, 1500, 'easeOutExpo');
				$('.section1').find('.navbar').animate({
					top: '95'
				}, 1500, 'easeOutExpo');

			}
			if(index==2){
				$('.section2').find('.top-text>h4').animate({
					left: '200'
				}, 1500, 'easeOutExpo');
				$('.section2').find('.top-text>p').animate({
					right: '170'
				}, 1500, 'easeOutExpo');
				$('.section2').find('.img-responsive').animate({
					width: '140%',height:"140%"
				}, 1500, 'easeOutExpo').animate({
					width: '80%',height:"80%"
				}, 1500, 'easeOutExpo');
				$('.section2').find('.work-details').delay(3000).animate({
					bottom: '0'
				}, 1500, 'easeOutExpo');
				
			}
			if(index==3){
				$(".section3").animate({background:"white"},1000)
				$('.section3').find('h3.m_1').animate({
				left:"260",top:"190"
				}, 1000, 'easeOutExpo').animate({
				left:"80",top:"30"
				}, 1000, 'easeOutExpo');
				$('.section3').find('.col-bottom:first-child').animate({
					left:"700"
				}, 1000, 'easeOutExpo');
				$('.section3').find('.col-bottom:nth-child(2)').animate({
					left:"700"
				}, 2000, 'easeOutExpo');
				$('.section3').find('.col-bottom:nth-child(3)').animate({
					left:"700"
				}, 3000, 'easeOutExpo');
				$('.section3').find('.col-news-top:first-child').animate({
					left:"700"
				}, 1000, 'easeOutExpo');
				$('.section3').find('.col-news-top:nth-child(2)').animate({
					left:"700",top:"150"
				}, 2000, 'easeOutExpo');
				$('.section3').find('.col-news-top:nth-child(3)').animate({
					left:"700",top:"370"
				}, 3000, 'easeOutExpo');
			}
			if(index==4){
				$(".section4").find(".footer").animate({
					bottom:"0"
				},2000);
				$(".section4").find(".loction").animate({
					left:"170"
				},1000);
				$(".section4").find(".custom").animate({
					right:"155"
				},1000);
				$(".section4").find(".information").animate({
					opacity:"1"
				},2000);
			}
		},
		onLeave: function(index, direction){
			if(index == 1){
				$('.section1').find('.section_zi').fadeOut(3000);
				$('.section1').find('.banner-grid2').animate({
					left: '-240'
				},1500);
				$('.section1').find('.banner-grid3').animate({
					left: '-480'
				},1500);
				$('.section1').find('.navbar').animate({
					top: '-60'
				}, 1500, 'easeOutExpo');
			}
			if(index==2){
				$('.section2').find('.top-text>h4').animate({
					left: '-950'
				}, 1500, 'easeOutExpo');
				$('.section2').find('.top-text>p').animate({
					right: '-1300'
				}, 1500, 'easeOutExpo');
				$('.section2').find('.img-responsive').animate({
					width: '80%',height:"80%"
				}, 1500, 'easeOutExpo');
				$('.section2').find('.work-details').delay(3000).animate({
					bottom: '70'
				}, 1500, 'easeOutExpo');
			}
			if(index==3){
				$(".section3").animate({background:"#eee"},1000)
				
				$('.section3').find('h3.m_1').animate({
					left:"-300",top:"-40"
				}, 1000, 'easeOutExpo');
				
				$('.section3').find('.col-bottom:first-child').animate({
					left:"-700"
				}, 1000, 'easeOutExpo');
				$('.section3').find('.col-bottom:nth-child(2)').animate({
					left:"-700"
				}, 1000, 'easeOutExpo');
				$('.section3').find('.col-bottom:nth-child(3)').animate({
					left:"-700"
				}, 1000, 'easeOutExpo');
				$('.section3').find('.col-news-top:first-child').animate({
					left:"-700"
				}, 1000, 'easeOutExpo');
				$('.section3').find('.col-news-top:nth-child(2)').animate({
					left:"-700",top:"150"
				}, 1000, 'easeOutExpo');
				$('.section3').find('.col-news-top:nth-child(3)').animate({
					left:"-700",top:"370"
				}, 1000, 'easeOutExpo');
			}
			if(index==4){
				$(".section4").find(".loction").animate({
					left:"-350"
				},1000);
				$(".section4").find(".custom").animate({
					right:"-350"
				},1000);
				$(".section4").find(".information").animate({
					opacity:"0.3"
				},2000);
			}
		}
	});
	
	$(".ul img").each(function(index){
		$(this).mouseover(function(){
			$(this).animate({width:"100%",height:"100%"});
		})
		$(this).mouseout(function(){
			$(this).animate({width:"200%",height:"200%"});
		})
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});
