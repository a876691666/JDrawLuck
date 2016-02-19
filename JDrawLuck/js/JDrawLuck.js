/***
 *
	 * "JavaScript Draw Luck"
	 * This is a "Draw Luck" JavaScript , Named him JDrawLuck for JDL
	 * Current version v0.1.1
	 * Der produzent IST Mark · Coco
	 * 
	 * Note : Part of the code is based on MTools
 * 
 ***/


!(function(w){
	w.JLuckDraw = {
		Data : function (dataObj,PdataObj){
			for (var name in PdataObj) {

				if(dataObj[name]){
					PdataObj[name] = dataObj[name];
				}else{
					console.info(1);
				}
			};
			return PdataObj;
		},
		Scratch : function(option){
			var defaultData = {
				canvasDOM : undefined,
				canvasWidth : undefined,
				canvasHeight : undefined,
				canvasText:"请刮开此层",
				borderWidth : 15,
				Bf : 0.7,
				BfShowDOM : undefined,
				Bfcallback: undefined
			}
			O = this.Data(option,defaultData);
			var that = {
				end:1
			}
			var myCanvas = O.canvasDOM;
			var gray = myCanvas.getContext('2d');
			gray.beginPath();
			gray.fillStyle = "#999";
			gray.fillRect(0,0,O.canvasWidth,O.canvasHeight);


			gray.fillStyle="#666";
			gray.font=" 20px sans-serif";
			gray.textAlign='center';//文本水平对齐方式
			gray.textBaseline='middle';//文本垂直方向，基线位置 
			gray.fillText(O.canvasText,O.canvasWidth/2,O.canvasHeight/2);

			gray.closePath();
			gray.globalCompositeOperation="destination-out";
			function move(e){
				gray.beginPath();
				gray.fillStyle = "#f00";
				if(e.type == "mousemove"){
					gray.arc(e.offsetX, e.offsetY, O.borderWidth, 0, Math.PI*2);
				}else if(e.type == "touchmove"){
					gray.arc(
						e.targetTouches[0].clientX-$(O.canvasDOM).getOffset().left,
						e.targetTouches[0].clientY-$(O.canvasDOM).getOffset().top, 
						O.borderWidth, 
						0, 
						Math.PI*2);
				}
				gray.fill();
				gray.closePath();
			}
			function end(c){
				var num = 0;
				var datas = gray.getImageData(0,0,O.canvasWidth,O.canvasHeight);
				for (var i = 0; i < datas.data.length; i++) {
					if (datas.data[i] == 0) {
						num++;
					};
				};
				if(O.BfShowDOM){
					O.BfShowDOM.innerHTML= ((num / datas.O.length)*100).toFixed(2) + "%";
				}
				if (num >= datas.data.length * O.Bf) {
					Ucallback();
					c();
				};
			}

			function Ucallback(){
				 gray.fillRect(0,0,O.canvasWidth,O.canvasHeight);
				 that.end = 0;
			}

			myCanvas.addEventListener('touchstart', function (e) {
				myCanvas.addEventListener('touchmove', move);

				window.addEventListener('touchend', function(e){
					myCanvas.removeEventListener('touchmove', move);
					if(that.end){
						end(O.Bfcallback ? O.Bfcallback : function(){console.info("无callback方法");});
					}
				});
			});
			myCanvas.addEventListener('mousedown', function (e) {
				myCanvas.addEventListener('mousemove', move);

				window.addEventListener('mouseup', function(e){
					myCanvas.removeEventListener('mousemove', move);
					if(that.end){
						end(O.Bfcallback ? O.Bfcallback : function(){console.info("无callback方法");});
					}
				});
			})
		}
	}
})(window);
var JLD = JLuckDraw;


/**
 * 作者的英语并不好，非常非常非常非常非常非常非常非常烂。
 * The author's English is not good, very very …… very bad。
 */