var bool=!0;$(".icon-zhucaidanlan").click(function(){bool?($(".home-menu").animate({height:"9.2rem",width:"3rem"}),bool=!1):($(".home-menu").animate({width:0,height:0}),bool=!0)}),$(".center-change1").click(function(){var i=$(this).index();$(".center-body1").hide(),$(".centerBtn").removeClass("centerBtn"),$("div.center-body1:eq("+i+")").show(),$(this).addClass("centerBtn")}),$(".productions>li").click(function(){var i=$(this).index();$(".productions>li>p,.productions>li>div>span,.productions>li>div>del").css("color","#323232"),$(".productions>li:eq("+i+")>p,.productions>li:eq("+i+")>div>span,.productions>li:eq("+i+")>div>del").css("color","#3d85fe")});