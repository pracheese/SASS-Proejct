
window.onload = function(){
	var grid = document.getElementsByClassName('grid')[0];
	var hue = Math.floor(Math.random()*361);

	for(let i= 0; i<2000; i++){
		var div = document.createElement('div');
		div.className="item";
		div.id= `sq${i}`;
		// var img = document.createElement('img');
		// img.src = 'http://placehold.it/500x500'
		//div.appendChild(img);
		div.style.backgroundColor='hsla('+ hue + ',' + Math.floor(Math.random() * 80) + '% ,'+ Math.floor(Math.random() * 80) + '%,'+ Math.random() +')'
		grid.appendChild(div);
	}
	var divs = document.getElementsByClassName('item');
	Array.prototype.forEach.call(divs, (div,index) => {
		if(div.id.includes("sq")){
			this.setInterval(() =>{
				div.style.backgroundColor='hsla('+ hue + ',' + Math.floor(Math.random() * 80) + '% ,'+ Math.floor(Math.random() * 80)+'%,'+ Math.random() +')'
			},500)
		}
	});

	grid.onclick = function() {
		
	};

}



