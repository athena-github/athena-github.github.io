var h3= document.getElementsByClassName("h3");
var hidden= document.getElementsByClassName("hidden");

for(var i=0; i<h3.length; i++){
	h3[i].index = i;
	hidden[i].index = i;
	h3[i].onclick = function(){
		hidden[this.index].style.position="absolute";
		hidden[this.index].style.display = "block";
		
	}
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