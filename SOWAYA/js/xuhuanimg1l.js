$(function(){
  if($.browser.msie){
    $('#carousel').show();
    $('#carousel').Carousel({
      itemWidth: 100,
      itemHeight: 100,
      itemMinWidth: 53,
      items: 'a',
      reflections: .4,
      rotationSpeed:10,
      itemLeft: "<img src='images/last_img1.gif' border='0'/>",
      itemRight: "<img src='images/last_img2.gif' border='0'/>"
    });
  }
});

window.onload = function(){
  if(!$.browser.msie){
    $('#carousel').show();
    $('#carousel').Carousel({
      itemWidth: 100,
      itemHeight: 100,
      itemMinWidth: 53,
      items: 'a',
      reflections: .4,
      rotationSpeed:10,
      itemLeft: "<img src='images/last_img1.gif' border='0'/>",
      itemRight: "<img src='images/last_img2.gif' border='0'/>"
    });
  }
}
