function imove(obj,json,fn)
{			//fn用来传继续的函数    json指的是自定义对象{opacity:10,width:200,height:50}等
console.log('1123');
	clearInterval(obj.timer);
	var flag=true;		//解决缩回去没有回复原状的问题
	obj.timer=setInterval(function()
	{
		for(var attr in json)
		{
			if(attr==='opacity')
			{		//透明度0-100
				var icur=parseInt(getStyle(obj,attr)*100);	
				//icur用来获取当前样式 
				//getStyle(obj,attr)得到的透明度都是0-1之间的数，在执行下面的iTarget-icur时，若iTarget=100，得到的97.7远大于1，所以现将icur*100变为1-100之间的数
			}
			else
			{
				var icur=parseInt(getStyle(obj,attr));
			}
			var speed=(json[attr]-icur)/10;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			if(icur!==json[attr])
			{
				flag=false;	//只要是false就不会清除定时器
			}
			
			if(attr==='opacity')
			{
				obj.style.opacity=(icur+speed)/100;
				console.log(obj.style.opacity);
				obj.style.filter='alpha(opacity:'+(icur+speed)+')';
			}
			else
			{
				obj.style[attr]=icur+speed+'px';
			}
			if(flag)
			{
				clearInterval(obj.timer);
				if(fn){fn()}
			}
		}	
			
	},30);
}

//用来获取当前样式
function getStyle(obj,attr){
	if(obj.currentStyle){      //IE的写法
		return obj.currentStyle[attr];	
		//不能写成obj.currentStyle.attr,.代表传入的是字符串，所以  .改为[]写法
	}else{
		return getComputedStyle(obj,false)[attr]; //false是为了兼容Firefox老版本
	}
}