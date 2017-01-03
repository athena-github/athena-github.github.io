/***********删除弹出框***********/
window.alert=function(){
	//灰色区域	 追加在body上
	var bgDiv=document.createElement('div');
		bgDiv.id='bgDiv';
		bgDiv.style.position='fixed';
		bgDiv.style.left='0px';
		bgDiv.style.top='0px';
		bgDiv.style.width='100%';
		//兼容
		var h=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;
		bgDiv.style.height=h+'px';	
		if(document.all){
			bgDiv.style.background='#000';
			bgDiv.style.filter='alpha(opacity=50)';  	//filter滤镜
			//IE的写法,但IE10不兼容filter
		}else{
			bgDiv.style.background='rgba(0,0,0,0.5)';	//IE10兼容
		}
		bgDiv.style.zIndex='300';
		document.body.appendChild(bgDiv);
	//整个弹出框    追加到body上
	var cenDiv=document.createElement('div');
		cenDiv.id='cenDiv';
		cenDiv.style.width='458px';
		cenDiv.style.height='232px';
		cenDiv.style.backgroundColor='#fff';
		cenDiv.style.border='6px solid #a0a0a0';
		cenDiv.style.zIndex='400';
		cenDiv.style.position='fixed';
		cenDiv.style.top='50%';
		cenDiv.style.left='50%';
		cenDiv.style.marginLeft='-235px';
		cenDiv.style.marginTop='-123px';
		cenDiv.style.overflow='hidden';
	document.body.appendChild(cenDiv);
	//最上面的一条    追加到cenDiv上
	var boxTop=document.createElement('div');
		boxTop.id='box_top';
		boxTop.style.width='440px';
		boxTop.style.margin='0px auto';
		boxTop.style.height='50px';
		boxTop.style.lineHeight='46px';
		boxTop.style.position='relative';
		boxTop.style.fontSize='16px';
		boxTop.style.color='#000';
//		boxTop.style.backgroundColor='red';
		/*box.style.backgroundRepeat='repeat-x';
		box.style.backgroundImage='url';*/
	cenDiv.appendChild(boxTop);
	//删除操作     span追加到最上面一条boxTop上
	var del=document.createElement('span');
	del.innerHTML='删除操作';
	boxTop.appendChild(del);
	//关闭窗口   a追加到boxTop上
	var close=document.createElement('a');
		close.style.width='16px';
		close.style.height='16px';
		close.style.position='absolute';
		close.style.right='0px';
		close.style.top='15px';
		close.style.cursor='pointer';
		close.onclick=function(){
			document.body.removeChild(bgDiv);
			document.body.removeChild(cenDiv);
		}
	boxTop.appendChild(close);
	//关闭窗口的图片   追加到关闭窗口的a上
	var imge=document.createElement('img');
		imge.src='img/buycart/close.jpg';
		imge.style.marginBottom='20px';
	close.appendChild(imge);
	//中间部分		追加到cenDiv上
	var boxMid=document.createElement('div');
		boxMid.style.paddingLeft='125px';
		boxMid.style.paddingTop='30px';
	cenDiv.appendChild(boxMid);
	//警示图片追加到boxMid上
	var wrn=document.createElement('img');
		wrn.src='img/buycart/warn.png';
		wrn.float='left';
		wrn.marginRight='15px';
		wrn.style.verticalAlign='top';
	boxMid.appendChild(wrn);
	//警示图片右边的字追加到boxMid上
	var tip=document.createElement('div');
		tip.style.marginLeft='15px';
		tip.style.display='inline-block'
	boxMid.appendChild(tip);
	//提示两个字追加到tip上
	var tips=document.createElement('p');
		tips.innerHTML='提示';
		tips.style.fontSize='22px';
		tips.style.color='#E2231A';
	tip.appendChild(tips);
	//确认删除吗追加到tip上
	var tips1=document.createElement('p');
		tips1.innerHTML='确认删除吗？';
		tips1.style.fontSize='14px';
		tips1.style.color='#6f7170';
		tips1.style.lineHeight='30px';
	tip.appendChild(tips1);
	//最下两个按钮
	var tijiao=document.createElement('div');
		tijiao.style.textAlign='center';
		tijiao.style.marginTop='28px';
	cenDiv.appendChild(tijiao);
	//确认按钮
	var cfm=document.createElement('a');
		cfm.innerHTML='确&nbsp;认';
		cfm.style.cursor='pointer';
		cfm.style.color='#fff';
		cfm.style.background='#e3231e';
		cfm.style.border='1px solid #e3231e'
		cfm.style.display='inline-block';
		cfm.style.width='98px';
		cfm.style.height='22px';
		cfm.style.lineHeight='22px';
		cfm.style.textAlign='center';
		cfm.style.marginLeft='5px';
		cfm.style.borderRadius='2px';
		cfm.onclick=function(){
			delRow($('.delete')[0]);
			document.body.removeChild(bgDiv);
			document.body.removeChild(cenDiv);
		}
	tijiao.appendChild(cfm);
	//取消按钮
	var cel=document.createElement('a');
		cel.innerHTML='取&nbsp;消';
		cel.style.cursor='pointer';
		cel.style.color='#000';
		cel.style.background='#eee';
		cel.style.border='1px solid #d9d8d6'
		cel.style.display='inline-block';
		cel.style.width='98px';
		cel.style.height='22px';
		cel.style.lineHeight='22px';
		cel.style.textAlign='center';
		cel.style.marginLeft='5px';
		cel.style.borderRadius='2px';
		cel.onclick=function(){
			document.body.removeChild(bgDiv);
			document.body.removeChild(cenDiv);
		}
	tijiao.appendChild(cel);
}
/*******删除********/
function delRow(obj)
{
	var Row=obj.parentNode; //tr
	Row.removeChild(obj); //删除行
}
