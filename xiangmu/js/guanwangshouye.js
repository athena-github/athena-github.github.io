//window.onload = function(){
	//top选项卡
		var title = document.getElementsByClassName("top_title");
		var div = document.getElementsByClassName("top_link_div");
		
//		alert(div.length)

		for(var i=0; i<title.length; i++){
			title[i].index=i;
			div[i].index=i;
			title[i].onmouseover = function(){
				div[this.index].style.display="block";
				
				if(this.index==0){
					div[this.index].style.width="158px";
					move2(div[this.index],{height:280},10);
					
				}
				if(this.index==1){
					div[this.index].style.width="238px";
					move2(div[this.index],{height:140});
				}
				if(this.index==2){
					div[this.index].style.width="173px";
					move2(div[this.index],{height:310});
				}
				if(this.index==3){
					div[this.index].style.width="172px";
					move2(div[this.index],{height:115});
				}

			}
			
			title[i].onmouseout = function(){
				move2(div[this.index],{height:0},15)
			}
			
			div[i].onmouseover = function(){
				if(this.index==0){
					move2(div[this.index],{height:280});
				}
				if(this.index==1){
					move2(div[this.index],{height:140});
				}
				if(this.index==2){
					div[this.index].style.width="174px";
					move2(div[this.index],{height:310});
				}
				if(this.index==3){
					div[this.index].style.width="172px";
					move2(div[this.index],{height:115});
				}
			}
			
			div[i].onmouseout = function(){
				move2(div[this.index],{height:0});				
			}
		}

	
	//搜索框
		var inputText = document.getElementById("inputText");
		var btn = document.getElementById("sousuo");
		var sousuoul = document.getElementById("sousuoul");
		btn.onmouseover = function(){
			inputText.style.borderColor = "black";
		}
		btn.onmouseout = function(){
			inputText.style.borderColor = "#d2d2d2";
		}
		inputText.onfocus = function(){
			sousuoul.style.display="none";
		}
	//banner_left
		var bannerIfa = document.getElementsByClassName("banner_lfa");
		var listCont = document.getElementsByClassName("list_cont");
		for(var i=0; i<bannerIfa.length;i++){
			bannerIfa[i].index=i;
			listCont[i].index = i;
			bannerIfa[i].onmouseover = function(){
				bannerIfa[this.index].style.background="#f7f7f7";
				bannerIfa[this.index].style.width="156px";	
				listCont[this.index].style.display="block";
			}
			bannerIfa[i].onmouseout = function(){
				bannerIfa[this.index].style.background="white";
				bannerIfa[this.index].style.width="155px";	
				listCont[this.index].style.display="none";
			}
			listCont[i].onmouseover = function(){
				listCont[this.index].style.display="block";
			}
			listCont[i].onmouseout = function(){
				listCont[this.index].style.display="none";
			}
		}
		
		
		
		
	//轮播图
		var num=0;//旧
		var index;//新
		var bannerCenter = document.getElementsByClassName("banner_center")[0];
		var bannerCenterImg = document.getElementsByClassName("banner_center")[0].getElementsByTagName("img");
		var bannerCenterNum = document.getElementsByClassName("banner_center_num")[0].getElementsByTagName("em");
		var bannerCenterSpan = document.getElementsByClassName("banner_center")[0].getElementsByTagName("span");
		
		var timer = setInterval(autoMove,1000);
		function autoMove(){
			index = num + 1;
			if(index===bannerCenterImg.length){index=0;}
			move();
		}
		for(var i=0; i<bannerCenterImg.length; i++){
			bannerCenterNum[i].index = i;
			bannerCenterNum[i].onmouseover = move;
		}
		function move(){
			bannerCenterImg[num].className = "";
			bannerCenterImg[this.index].className = "banner_center_img";
			bannerCenterNum[num].className = "";
			bannerCenterNum[this.index].className = "banner_center_num1";
			num = this.index;
		}
		//移上去两个按钮出现
		bannerCenter.onmouseover = function(){
			bannerCenterSpan[0].style.display = "block";
			bannerCenterSpan[1].style.display = "block";
			clearInterval(timer);
		}
		bannerCenter.onmouseout = function(){
			bannerCenterSpan[0].style.display = "none";
			bannerCenterSpan[1].style.display = "none";
			timer = setInterval(autoMove,1000);
		}
		bannerCenterSpan[0].onclick = function(){
			index = num-1;
			if(index<0){index=bannerCenterImg.length-1;}
			move();
		}
		bannerCenterSpan[1].onclick = function(){
			autoMove();
		}
		
	//小广播
		var hornContLi1 = document.getElementsByClassName("horn_cont_li1");
			var hornH = hornContLi1[0].offsetHeight;
//				setInterval(function(){
//			for(var i=0; i<hornContLi1[0].offsetHeight; i--){
//					hornContLi1[0].style.top =i+"px"; 
//			}
//				},500);
//		
		
		
	//pic_box手动播

		var picBoxDiv = document.getElementsByClassName("pic_box_div")[0];
		var picBoxSpan1 = document.getElementsByClassName("pic_box_span1")[0];
		var picBoxSpan2 = document.getElementsByClassName("pic_box_span2")[0];
		var imgDiv = document.getElementsByClassName("img_div")[0];
		picBoxDiv.onmouseover = function(){
			picBoxSpan1.style.display="block";
			picBoxSpan2.style.display="block";
		}
		picBoxDiv.onmouseout = function(){
			picBoxSpan1.style.display="none";
			picBoxSpan2.style.display="none";
		}
		var l=0;
		picBoxSpan1.onclick = function(){
			if(l>-3192){
				l-=228;
				move2(imgDiv,{left:l},50);
			}
			
		}
		picBoxSpan2.onclick = function(){
				if(l<0){
				l+=228;
				move2(imgDiv,{left:l},50);
			}
		}
		



		

		
		
		
		
		
	
	//鼠标移到图片上
		var floorImg = document.getElementsByClassName("img");
		for(var i=0; i<floorImg.length; i++){
			floorImg[i].index = i;
			floorImg[i].onmouseover = function(){
				move2(floorImg[this.index],{left:15},40);
			}
			floorImg[i].onmouseout = function(){
				move2(floorImg[this.index],{left:0},40);
			}
		}
		

		
//		//底部
		var flag=document.getElementById('foot_f');
		var over=document.getElementById('foot_over');
		function mode(o){
			over.style.display=o;
		}
		flag.onmouseover=function(){
			mode('block');
		}
		flag.onmouseout=function(){
			mode('none');
		}
		over.onmouseover=function(){
			mode('block');
		}
		over.onmouseout=function(){
			mode('none');
		}
		
//右边固定条(budui)

var rightBarLi = document.getElementsByClassName("right_bar_li");
var rightBarShow = document.getElementsByClassName("right_bar_show");
var rightBarLiSpan = document.getElementsByClassName("right_bar_li_span");
console.log(rightBarShow.length)
for(var i=0; i<rightBarLi.length; i++){
	rightBarLi[i].index = i;
//	rightBarShow[i].index = i;
//	rightBarLiSpan[i].index = i;(没必要)
	rightBarLi[i].onmouseover = function(){
		if(this.index<2){
			rightBarShow[this.index].style.display = "block";
		}
		rightBarLiSpan[this.index].style.display = "block"
	}
	rightBarLi[i].onmouseout = function(){
		if(this.index<2){
			rightBarShow[this.index].style.display = "none";
		}
		rightBarLiSpan[this.index].style.display = "none";
		
	
	}
}
//点击回到顶部
var rightBarA = document.getElementById("right_bar_a");
rightBarA.onclick = function(){moveBar(0)}
var setInter;
function moveBar(iTarget){
	setInter=setInterval(function(){
		var speed = (iTarget-document.body.scrollTop)/6;
		speed = speed>0? Math.ceil(speed):Math.floor(speed);
		if(document.body.scrollTop==iTarget){clearInterval(setInter);}
		else{document.body.scrollTop+=speed}
	},50);
}

//左边固定条
var leftBar = document.getElementsByClassName("left_bar")[0];
var leftBarSpan = document.getElementsByClassName("left_bar_span");
var leftBarA = document.getElementsByClassName("left_bar_a");
var leftBarLi = document.getElementsByClassName("left_bar_li");
//移上去变字
for(var i=0; i<leftBarLi.length; i++){
	leftBarLi[i].index = i;
	leftBarLi[i].onmouseover = function(){
		leftBarSpan[this.index].style.display = "none";
		leftBarA[this.index].style.display = "block";
		leftBarA[this.index].style.color = "black";
	}
	leftBarLi[i].onmouseout = function(){
		leftBarSpan[this.index].style.display = "block";
		leftBarA[this.index].style.display = "none";
	}
}



//自动滚动
	document.onscroll = function(){
		if(document.body.scrollTop>900){
			leftBar.style.display ="block"; 
		}
		else{
			leftBar.style.display ="none"; 
			
		}

		scroll(900,1100,0);
		scroll(1100,1500,1);
		scroll(1500,2100,2);
		scroll(2100,2700,3);
		scroll(2700,3300,4);
		scroll(3300,4000,5);
		scroll(4000,4700,6);
		scroll(4700,5000,7);


//		console.log(document.body.scrollTop)
	}
	function scroll(a,b,i){
		if(document.body.scrollTop>a && document.body.scrollTop<b){
			leftBarA[i].style.display="block";
			leftBarA[i].style.color="blue";
			leftBarSpan[i].style.display="none";
		}else{
			leftBarA[i].style.display="none";
			leftBarSpan[i].style.display="block";
		}
	}





	
	
//}	
	
