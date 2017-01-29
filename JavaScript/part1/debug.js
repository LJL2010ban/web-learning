//print debug info in special area, if this area is not existed, please create it.
function debug(msg){
	var log = document.getElementById("debuglog");

    //if not exist, created it.
	if(!log){
		log = document.createElement("div");
		log.id = "debuglog";
		log.innerHTML = "<h1>Debug log</h1>";
		document.body.appendChild(log);//将其添加到文档的末尾
	}
		    	
	//将消息包装到<pre>中，并添加到log中。
	var pre = document.createElement("pre");
	var text = document.createTextNode(msg);//将msg包装到一个文本节点中
	pre.appendChild(text);
	log.appendChild(pre);
}