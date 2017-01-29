function hide(e, reflow){
	if(reflow){
		e.style.display = "none";//隐藏这个元素，其所占的空间也随之消失
	}
	else{
		e.style.visibility = "hidden";//将e隐藏，但是保留其所占的空间
	}
}

function highlight(e){//通过设置CSS类来高亮显示e
	//简单地定义或追加HTML类属性
	//这里假设CSS样式表中已经有"hilite"类的定义
	if (!e.className)
	    e.className = "hilite";
	else
	    e.className += "hilite";
}
