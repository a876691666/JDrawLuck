/**
 * 
 * This is a Mark·coco to tools
 * Plug - in - Kurz "MTools"
 * Current version v1.0.2
 * 
 */
!(function(w){
	w.MTools = {
		getStyle : function (dom,attr){
			var u = dom.currentStyle ? dom.currentStyle[attr] : getComputedStyle(dom, false)[attr];
			if(u == "auto"){
				u = 0;
			}else{
				u = u.replace("px","");
			}
			return u
		},
		getOffset : function(dom){
			var top=0,left=0;
			for(var u in dom.parentNode){
				if(dom != document){
					top += dom.clientTop + dom.offsetTop;
					left += dom.clientLeft + dom.offsetLeft;
					dom = dom.parentNode
				}
			}
			return {
				top:top,
				left:left,
			}
		}
	}
})(window);

/**
 * 作者的英语并不好，非常非常非常非常非常非常非常非常烂。
 * The author's English is not good, very very …… very bad。
 */