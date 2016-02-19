/**
 * 
 * This is a Mark·coco to tools
 * Plug - in - Kurz "MTools"
 * Current version v1.0.2
 * 
 */
(function(W,D){
	var MTools = (function(){
		var MTools = function (d,t){
			return new MTools.fn.init(d,t);
		}

		MTools.fn = MTools.prototype = {
			init : function(d,t){
				typeof d != "object"?this.DOM = document.getElementById(d):this.DOM=d;
                this.length = 0;
                this.test = function(){
                    return this.length;
                }
				return this;
			},
			getStyle : function (attr){
				var u = this.DOM.currentStyle ? this.DOM.currentStyle[attr] : getComputedStyle(this.DOM, false)[attr];			
				return u.replace("px","");
			},
			getOffset : function(){
				var top=0,left=0;
				for(var u in this.DOM.parentNode){
					if(this.DOM != document){
						top += this.DOM.clientTop + this.DOM.offsetTop;
						left += this.DOM.clientLeft + this.DOM.offsetLeft;
						this.DOM = this.DOM.parentNode
					}
				}
				return {top:top,left:left}
			}
		}

        MTools.fn.init.prototype = MTools.fn; // 使用xQuery的原型对象覆盖init的原型对象
        
        return MTools;
	})();
	W.MTools = W.$ = MTools;
})(window,document);

/**
 * 作者的英语并不好，非常非常非常非常非常非常非常非常烂。
 * The author's English is not good, very very … very bad。
 */