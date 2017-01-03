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
/************底部国旗*************/
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

