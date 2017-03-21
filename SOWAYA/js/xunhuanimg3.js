jQuery.iCarousel = {
	build : function(options)
	{
		return this.each(
			function()
			{
			  var el = this;
	      var flag = 1;
				var increment = 2*Math.PI/360;
				var maxRotation = 2*Math.PI;
				if(jQuery(el).css('position') != 'relative' && jQuery(el).css('position') != 'absolute') {
					jQuery(el).css('position', 'relative');
				}
				el.carouselCfg = {
					items : jQuery(options.items, this),
					itemWidth : options.itemWidth,
					itemHeight : options.itemHeight,
					itemMinWidth : options.itemMinWidth,
					maxRotation : maxRotation,
					size : jQuery.iUtil.getSize(this),
					position : jQuery.iUtil.getPosition(this),
					start : Math.PI/2,
					rotationSpeed : options.rotationSpeed,
					reflectionSize : options.reflections,
					reflections : [],
          shadows : [],
					protectRotation : false,
					increment: 2*Math.PI/360,
          leftbutton: options.itemLeft,
          rightbutton: options.itemRight
				};
				el.carouselCfg.radiusX = (el.carouselCfg.size.w - el.carouselCfg.itemWidth)/2;
				el.carouselCfg.radiusY =  (el.carouselCfg.size.h - el.carouselCfg.itemHeight - el.carouselCfg.itemHeight * el.carouselCfg.reflectionSize)/2;
				el.carouselCfg.step =  2*Math.PI/el.carouselCfg.items.size();
				el.carouselCfg.paddingX = el.carouselCfg.size.w/2;
				el.carouselCfg.paddingY = el.carouselCfg.size.h/2 - el.carouselCfg.itemHeight * el.carouselCfg.reflectionSize;
				var reflexions = document.createElement('div');
				jQuery(reflexions)
					.css(
						{
							position: 'absolute',
							zIndex: 1,
							top: 0,
							left: 0
						}
					);
				jQuery(el).append(reflexions);

//阴影容器
        var shadows = document.createElement('div');
        jQuery(shadows)
          .css(
            {
              position: 'absolute',
              top: 0,
              left: 0
            }
          );
        jQuery(el).append(shadows);
//阴影容器结束
				el.carouselCfg.items
					.each(
						function(nr)
						{
							image = jQuery('img', this).get(0);
              if(jQuery(image).attr('class')=='roll'){
                height = parseInt(el.carouselCfg.itemHeight*el.carouselCfg.reflectionSize);
                if (jQuery.browser.msie) {
                  this.style.filter = 'progid:DXImageTransform.Microsoft.Shadow(enabled=true, color=#707070, direction=135, strength=4)';
                  canvas = document.createElement('img');
                  jQuery(canvas).css('position', 'absolute');
                  jQuery(canvas).css('border','1px solid #c3c3c3');
                  canvas.src = image.src;				
                  canvas.style.filter = 'flipv progid:DXImageTransform.Microsoft.Alpha(opacity=60, style=1, finishOpacity=0, startx=0, starty=0, finishx=0,finishy=90)';
                } else {
  //阴影
                  shadow = document.createElement('canvas');
                  if(shadow.getContext){
                    thewidth = el.carouselCfg.itemWidth + 5;
                    theheight = el.carouselCfg.itemHeight + 5;
                    ct = shadow.getContext("2d");
                    shadow.style.position = 'absolute';
                    shadow.style.width = thewidth + 'px';
                    shadow.style.height = theheight + 'px';
                    shadow.width = thewidth;
                    shadow.height = theheight;
                    ct.save();
                    ct.beginPath();
                    ct.moveTo(thewidth,5);
                    ct.lineTo(thewidth,theheight);
                    ct.lineTo(thewidth-5,theheight-5);
                    ct.lineTo(thewidth-5,0);
                    ct.closePath();
                    var gradientH = ct.createLinearGradient(thewidth-5,0,thewidth,0);
                    gradientH.addColorStop(0,"rgba(112,112,112,1)");
                    gradientH.addColorStop(1,"rgba(112,112,112,0)");
                    ct.fillStyle = gradientH;
                    ct.fill();
                    ct.beginPath();
                    ct.moveTo(0,theheight-5);
                    ct.lineTo(thewidth-5,theheight-5);
                    ct.lineTo(thewidth,theheight);
                    ct.lineTo(5,theheight);
                    ct.closePath();
                    var gradientV = ct.createLinearGradient(0,theheight-5,0,theheight);
                    gradientV.addColorStop(0,"rgba(112,112,112,1)");
                    gradientV.addColorStop(1,"rgba(112,112,112,0)");
                    ct.fillStyle = gradientV;
                    ct.fill();
                  }
                  el.carouselCfg.shadows[nr] = shadow;
                  jQuery(shadows).append(shadow);
  //阴影结束
                  canvas = document.createElement('canvas');
                  if (canvas.getContext ) {
                    thewidth = el.carouselCfg.itemWidth + 4;
                    context = canvas.getContext("2d");
                    canvas.style.position = 'absolute';
                    canvas.style.height = height +'px';
                    canvas.style.width = thewidth +'px';
                    canvas.height = height;
                    canvas.width = thewidth;
                    context.save();
              
                    context.translate(0,height);
                    context.scale(1,-1);
                    context.drawImage(
                      image, 
                      0, 
                      0, 
                      thewidth, 
                      height
                    );
            
                    context.restore();
                    context.fillStyle = 'rgb(135, 135, 135)';
                    context.beginPath();
                    context.moveTo(1,0);
                    context.lineTo(1,height);
                    context.lineTo(2,height);
                    context.lineTo(2,0);
                    context.closePath();
                    context.fill();
                    context.beginPath();
                    context.moveTo(thewidth,0);
                    context.lineTo(thewidth,height);
                    context.lineTo(thewidth-1,height);
                    context.lineTo(thewidth-1,0);
                    context.closePath();
                    context.fill();
                    context.globalCompositeOperation = "destination-out";
                    var gradient = context.createLinearGradient(
                      0, 
                      0, 
                      0, 
                      height
                    );
                    
                    gradient.addColorStop(1, "rgba(255, 255, 255, 1)");
                    gradient.addColorStop(0, "rgba(255, 255, 255, 0.6)");
              
                    context.fillStyle = gradient;
                    if (navigator.appVersion.indexOf('WebKit') != -1) {
                      context.fill();
                    } else {
                      context.fillRect(
                        0, 
                        0, 
                        thewidth, 
                        height
                      );
                    }
                  }
                }
                el.carouselCfg.reflections[nr] = canvas;
                jQuery(reflexions).append(canvas);
							}
						}
					)
					.bind(
						'mouseover',
						function(e)
						{
              if(jQuery(this).css("z-index")>165){
                divtop = parseInt(jQuery(this).css("top"))+parseInt(jQuery(this).css("height"))/2-55;
                divleft = parseInt(jQuery(this).css("left"))+parseInt(jQuery(this).css("width"))/2-55;
                divid = "carousel_viewdiv";
                divimg = jQuery("#"+divid+" div.mall_hot_mo_pic");
                divtext = jQuery("#"+divid+" div.mall_hot_mo_text");
                divprice = jQuery("#"+divid+" div.mall_hot_mo_price");
                thehref = jQuery(this).attr("href");
                theimg = jQuery(this).children().attr("src");
                thestring = jQuery(this).attr("name");
                arr = thestring.split("`|`");
                productname = arr[0];
                productnames = arr[1];
                productprice = arr[2];
                divimg.html("<a href=\""+thehref+"\" target=\"_blank\" title=\""+productname+"\"><img src=\""+theimg+"\"/></a>");
                divtext.html(productnames);
                divprice.html("￥"+productprice);
                jQuery("#"+divid).css({
                    "position":"absolute",
                    "top": divtop+"px",
                    "left": divleft+"px",
                    "z-index":"500"
                });
                jQuery("#"+divid).show();
                return false;
              }
						}
					);
        //增加方向导航按钮
        var dir = document.createElement('div');
        myheight = parseInt(jQuery(el).css("height"))-36;
        jQuery(dir).css(
          {
            'height':'20px',
            'font-size':'12px',
            'padding-top':myheight+'px',
            'padding-right':'10px',
            'float':'right'
          }
        );
        jQuery(dir).html('<span id="carouselLeft" title="按住顺时针旋转">'+el.carouselCfg.leftbutton+'</span>&nbsp;&nbsp;<span id="carouselRight" title="按住逆时针旋转">'+el.carouselCfg.rightbutton+'</span>');
        jQuery(dir).css("cursor","pointer");
        jQuery(el).append(dir);
        //增加方向导航按钮完毕
        //方向加速
        jQuery('#carouselLeft').mousedown(function(){
          el.carouselCfg.speed = el.carouselCfg.rotationSpeed * el.carouselCfg.increment * (el.carouselCfg.size.w/2 - 200) / (el.carouselCfg.size.w/2);;
        }).bind('mouseup',function(){
          el.carouselCfg.speed = el.carouselCfg.speed1;
        }).bind('mouseover',function(){
          $(".mall_hot_mo").hide();
        }).bind('mouseout',function(){
          el.carouselCfg.speed = el.carouselCfg.speed1;
        });
        jQuery('#carouselRight').mousedown(function(){
          el.carouselCfg.speed = el.carouselCfg.rotationSpeed * el.carouselCfg.increment * (el.carouselCfg.size.w/2 - 400) / (el.carouselCfg.size.w/2);;
        }).bind('mouseup',function(){
          el.carouselCfg.speed = el.carouselCfg.speed1;
        }).bind('mouseover',function(){
          $(".mall_hot_mo").hide();
        }).bind('mouseout',function(){
          el.carouselCfg.speed = el.carouselCfg.speed1;
        });
        //方向加速完毕
				jQuery.iCarousel.positionItems(el);
				el.carouselCfg.speed = 0;
        el.carouselCfg.speed1 = el.carouselCfg.speed;
				el.carouselCfg.rotationTimer = window.setInterval(
					function()
					{
						el.carouselCfg.start += el.carouselCfg.speed;
						if (el.carouselCfg.start > maxRotation)
							el.carouselCfg.start = 0;
						jQuery.iCarousel.positionItems(el);
					},
					20
				);
			}
		);
	},

	positionItems : function(el)
	{
		el.carouselCfg.items.each(
			function (nr)
			{
        image = jQuery('img', this).get(0);
        if(jQuery(image).attr('class')=='roll'){
          angle = el.carouselCfg.start+nr*el.carouselCfg.step;
          x = el.carouselCfg.radiusX*Math.cos(angle);
          y = el.carouselCfg.radiusY*Math.sin(angle) ;
          itemZIndex = parseInt(100*(el.carouselCfg.radiusY+y)/(2*el.carouselCfg.radiusY))+100;
          parte = (el.carouselCfg.radiusY+y)/(2*el.carouselCfg.radiusY);
          
          width = parseInt((el.carouselCfg.itemWidth - el.carouselCfg.itemMinWidth) * parte + el.carouselCfg.itemMinWidth);
          height = parseInt(width * el.carouselCfg.itemHeight / el.carouselCfg.itemWidth);
          this.style.top = el.carouselCfg.paddingY + y - height/2 + "px";
          this.style.left = el.carouselCfg.paddingX + x - width/2 + "px";
          this.style.width = width + "px";
          this.style.height = height + "px";
          this.style.zIndex = itemZIndex;
          el.carouselCfg.reflections[nr].style.left = parseInt(el.carouselCfg.paddingX + x - width/2) + "px";
          if (jQuery.browser.msie){
            el.carouselCfg.reflections[nr].style.top = parseInt(el.carouselCfg.paddingY + y + height - 1 - height/2) + "px";
            el.carouselCfg.reflections[nr].style.width = width + "px";
          }else{
            el.carouselCfg.reflections[nr].style.top = parseInt(el.carouselCfg.paddingY + y + height - 1 - height/2+7) + "px";
            el.carouselCfg.reflections[nr].style.width = (width+4) + "px";
          }
          el.carouselCfg.reflections[nr].style.height = parseInt(height * el.carouselCfg.reflectionSize) + "px";

          if(!jQuery.browser.msie){
            el.carouselCfg.shadows[nr].style.width = (width + 5) + "px";
            el.carouselCfg.shadows[nr].style.height = (width + 5) + "px";
            el.carouselCfg.shadows[nr].style.top = el.carouselCfg.paddingY + y - height/2 + "px";
            el.carouselCfg.shadows[nr].style.left = el.carouselCfg.paddingX + x - width/2 + "px";
            el.carouselCfg.shadows[nr].style.zIndex = itemZIndex-1;
          }
        }
			}
		);
	}
};
jQuery.fn.Carousel = jQuery.iCarousel.build;
