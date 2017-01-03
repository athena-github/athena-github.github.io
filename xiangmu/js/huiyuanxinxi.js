var changeBtn = document.getElementById("change");
changeBtn.onclick=function(){
	var optioned = document.getElementsByTagName("option");
	console.log(optioned[1].value);

}
changeBtn.onclick = function(){
	if(nickName()){
		if(realName()){
			if(getIndex(0)=="请选择省份"){
				show("请选择省份");
			}
			else{
				show("修改成功");
				
			}
		}
	}
}


//验证昵称
function nickName(){
	var nickName = document.getElementById("nick_name");
	var regexp = /^[\u4e00-\u9fa5\w-]{4,20}$/;
	var regexpnum = /^\d{1,}$/;
	if(regexpnum.test(nickName.value)){
		show("会员信息不能为纯数字格式"); 
		return false;
	}else if(!regexp.test(nickName.value)){
		show("会员昵称为 4-20个字符，可由中英文、数字、“_”、“-”组成");
		return false;
	}
	else{return true;}
}
//验证真实姓名
function realName(){
	var realName = document.getElementById("real_name");
	var regexp = /^[a-zA-Z]{4,12}|[\u4e00-\u9fa5]{2,10}$/;
	if(!regexp.test(realName.value)){
		show("真实姓名应满足英文长度:4-20 ，中文长度:2-10");
		return false;
	}else{return true;}
}


var select = document.getElementsByClassName("select");
for(var i=0; i<select.length; i++){
	select[i].index = i;
	select[i].onchange = function(){
		getIndex(this.index);
	}
	function getIndex(num){
		var index = select[num].selectedIndex;
		return select[num].options[index].value;
	}	
}


















//城市自动对应选择
var citys = new Array(
	new Array("北京"),
	new Array("天津"),
	new Array("石家庄","徐州","连云港"),
	new Array("太原","运城","忻州"),
	new Array("内蒙古","运城","忻州")
);

var pro = document.getElementById("pro");
pro.addEventListener("change",selectc,false);
function selectc(pobj){
	var pro = document.getElementById("pro");
	var cobj = document.getElementById("city");
	var index =  pro.selectedIndex-1;
	cobj.innerHTML = "";
	if(index>=0){
		for(var i=0; i<citys[index].length; i++){
			var option = document.createElement("option");
			var text = citys[index][i];
			option.value=text;
			option.innerHTML = text;
			cobj.appendChild(option)
		
		}
	}else{
			var option = document.createElement("option");
			option.value="";
			option.innerHTML = "请选择城市";
			cobj.appendChild(option)
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





	


//弹框
function show(tishi){
	var div = document.createElement("div");
	div.style.position = "absolute";
	div.style.top = "0";
	div.style.left = "0";
	
	div.style.width="100%";
	div.style.height = document.body.scrollHeight +"px";
	
	div.style.background = "rgba(0,0,0,0.5)";
	div.style.zIndex = "1000";
	
	document.body.appendChild(div);
	
	div.innerHTML = "<div id='div1' style='text-align:center;width:600px;height:200px;background:white;border:10px solid #aaa;position:fixed;left:50%;top:50%;margin-top:-100px;margin-left:-300px;'></div>"
	var div1 = $("#div1");
	div1.innerHTML = "<h3 style='width:560px;height:50px;padding:10px 20px;background:url(img/title_bg.jpg) repeat-x'>提示信息</h3>"
	div1.innerHTML+="<p style='font-size:20px;'>"+tishi+"</p>"
	div1.innerHTML+="<input type='button' id='sure' onclick = 'removeDiv()' value='确定' style='width:100px;height:30px;background:#aaa;border-radius:5px;margin-top:40px;'>"
	
	this.removeDiv = function(){			//点击清除
		div.parentNode.removeChild(div);
		div1.parentNode.removeChild(div1);
	}
	
	$("#sure").focus();
	
	setTimeout(removeDiv,2000)		//2s后自动清除
}

















