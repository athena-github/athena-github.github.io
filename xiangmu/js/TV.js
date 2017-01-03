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

	var bannerIfa = document.getElementsByClassName("banner_lfa");
		var listCont = document.getElementsByClassName("list_cont");
		for(var i=0; i<bannerIfa.length;i++){
			bannerIfa[i].index=i;
			listCont[i].index = i;
			listCont[i].onmouseover = function(){
				listCont[this.index].style.display="block";
			}
			listCont[i].onmouseout = function(){
				listCont[this.index].style.display="none";
			}
		}

/*********分享**********/
$('.share')[0].onmouseover=function(){
	$('.weibo')[0].style.display='block';
}
$('.share')[0].onmouseout=function(){
	$('.weibo')[0].style.display='none';
}
$('.weibo')[0].onmouseover=function(){
	$('.weibo')[0].style.display='block';
}
$('.weibo')[0].onmouseout=function(){
	$('.weibo')[0].style.display='none';
}
/*****分享微博*****/
var num=0;
var index;

for(var i=0;i<$('.wei').length;i++){
	$('.wei')[i].index=i;
	$('.wei')[i].onmouseover=exchange1;
	$('.wei')[i].onmouseout=exchange2;
}
function exchange1(){
	switch(this.index){
		case 0:$('.wei')[0].style.backgroundPosition='-140px -134px';break;
		case 1:$('.wei')[1].style.backgroundPosition='-206px -133px';break;
		case 2:$('.wei')[2].style.backgroundPosition='-161px -133px';break;
		case 3:$('.wei')[3].style.backgroundPosition='-231px -133px';break;
	}
}
function exchange2(){
	switch(this.index){
		case 0:$('.wei')[0].style.backgroundPosition='-140px -112px';break;
		case 1:$('.wei')[1].style.backgroundPosition='-205px -112px';break;
		case 2:$('.wei')[2].style.backgroundPosition='-163px -112px';break;
		case 3:$('.wei')[3].style.backgroundPosition='-232px -112px';break;
	}
}
/********收藏*******/
var bool=true;
$('.shoucang')[0].onclick=function(){
	if(bool){
		$('.shoucang')[0].style.backgroundPosition='-9px -84px';
		bool=false;
	}else{
		$('.shoucang')[0].style.backgroundPosition='-9px -109px';
		bool=true;
	}
}
/**********X系列***********/
var num1=1;		//旧;
function ser(index1){
	if(num1!=index1){
		$('#series'+num1).className='';
		$('#series'+index1).className='series';
		num1=index1;
	}
}
/*************有库存***************/
$('.add')[0].onclick=function(){
	var number=$('.number')[0];
	console.log(number.value);
	if(!isNaN(number.value)){
		if(number.value<5){
			number.value++;
		}else{
			alert('已达到最大购买量');
		}
	}else{
		number.value=1;
	}
}
$('.add')[1].onclick=function(){
	var number=$('.number')[0];
	console.log(number.value);
	if(!isNaN(number.value)){
		if(number.value>1){
			number.value--;
		}
	}else{
		number.value=1;
	}
}
/**********商品详情***********/
var cur1=1;		//旧
function show(num){
	if(cur1!=num){
		$('#det'+cur1).className='';
		$('#det'+num).className='curt';
		$('#comment'+num).className='';
		$('#comment'+cur1).className='box_rt_det';
		cur1=num;
	}
}
/**********好评***********/
var jiu=1;
function exhi(num){
	if(jiu!=num){
		$('#exhi'+jiu).className='';
		$('#exhi'+num).className='grey';
		jiu=num;
	}
}
/**************手动轮播*************/
var old=0;
var nw;
function slide(){
	$('.li')[nw].className='li';
	$('.li')[old].className='li showcase';
	$('.pic')[nw].nextSibling.className='';
	$('.pic')[old].nextSibling.className='op';
	old=nw;
}
$('.al')[0].onclick=function(){
	nw=old-1;
	if(nw<0){nw=$('.pic').length-1;}
	slide();
}
$('.ar')[0].onclick=function(){
	nw=old+1;
	if(nw==$('.pic').length){nw=0;}
	slide();
}
