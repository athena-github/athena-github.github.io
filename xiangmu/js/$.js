function $(str){
				if(str.substring(0,1)=="#"){		//判断ID
					return document.getElementById(str.substring(1));	
				}else if(str.substring(0,1)==="."){		//判断CLASS
					//解决兼容性问题
					if(document.getElementsByClassName){	
						return document.getElementsByClassName(str.substring(1));
					}else{
						var arr=[];
						var all = document.getElementsByTagName("*");	//通标签名获取所有元素
						for(var i=0; i<all.length; i++){
							//当元素class名与传进来的class名相等，就相当于找到了此元素，并将其放入数组中，一起返回
							if(all[i].className===str.substring(1)){				
								arr[arr.length]=all[i];
							}	
						}
						return arr;	
					}
				}else{
					return document.getElementsByTagName(str);
				}
}