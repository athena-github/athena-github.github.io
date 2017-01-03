//点击待付款、代发货
var tabTitleA = document.getElementsByClassName("tab_title")[0].getElementsByTagName("a");
var tabList = document.getElementsByClassName("tab_list");

var num=0;
for(var i=0; i<tabTitleA.length; i++){
	tabTitleA[i].index = i;
	tabTitleA[i].onclick = function(){
		tabTitleA[this.index].style.borderLeft = "1px solid #d9d8d6";
		tabTitleA[this.index].style.borderRight = "1px solid #d9d8d6";
		tabTitleA[this.index].style.marginLeft = "-1px";
		tabTitleA[this.index].style.background = "white";
		tabTitleA[num].style.borderLeft = "0";
		tabTitleA[num].style.borderRight = "0";
		tabTitleA[num].style.borderBottom = "1px solid white";
		tabTitleA[num].style.marginLeft = "0";
		tabTitleA[num].style.background = "#eee";
		tabList[this.index].className +=" list_show";
		tabList[num].className = "tab_list";
		num = this.index;
	}
}
//点击我的评价，左边对应变红
//var pjsd = document.getElementById("pjsd");
//var pjsdA = document.getElementById("pjsd").getElementsByTagName("a")[0];
//var mydd = document.getElementById("mydd");
//var myddA = document.getElementById("mydd").getElementsByTagName("a")[0];
//tabTitleA[4].onclick = function(){
//	mydd.style.background="#d62f26";
//	myddA.style.color="white";
//	pjsd.style.background = "white";
//	 pjsdA.style.color = "#6f7170";
//}














