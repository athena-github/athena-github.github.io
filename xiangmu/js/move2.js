function move2(obj,json,time,fn){
				clearInterval(obj.timer);
				var flag = true;
				obj.timer=setInterval(function(){
					for(var attr in json){
						if(attr==="opacity"){
							var icur = parseFloat(getStyle(obj,attr))*100;		//attr==opacity
						}else{
							var icur = parseInt(getStyle(obj,attr));			//attr==其他
						}
						
						var speed=(json[attr]-icur)/10;
						speed = speed>0? Math.ceil(speed):Math.floor(speed);
						
						
						if(attr==="opacity"){
							obj.style.opacity = (icur + speed)/100;
							obj.style.filter = "alpha(opacity:"+(icur + speed)+")";
						}else{
							obj.style[attr] = icur+speed+"px";
						}
						
						//解决回不到原来高度的问题（因为json对象中的三个属性争clearInterval()）：
						//定义flag=true,只有当三个属性全执行完才执行clearInterval()
						if(icur!=json[attr]){
							flag=false;
						}

						if(flag){
							clearInterval(obj.timer);
							if(fn){fn()}
						}
					}
				},time);
			}
			function getStyle(obj,attr){
					if(obj.currentStyle){
						return obj.currentStyle[attr];
					}else{
						return getComputedStyle(obj,false)[attr];
					}
			}
			


//只执行一个变化：move(obj,{width:200px,height:40px})
//链式调用：move(obj,{width:200px,height:40px},function(){
//			move(obj,{opacity:0.3});
//			})









