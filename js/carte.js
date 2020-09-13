var carte = document.querySelector('#carte')
var paths = carte.querySelectorAll('.carte_image a')
var links = carte.querySelectorAll('.carte_list a')


//Polyfill du forEach
if (NodeList.prototype.forEach == undefined){
	NodeList.prototype.forEach = function(callback){
		[].forEach.call(this, callback)
	}
}

var activeSpace = function (id){
	carte.querySelectorAll('.l-active').forEach(function(item){
			item.classList.remove('l-active')
		})
	if(id != undefined){
		document.querySelector('#list_'+ id).classList.add('l-active')	
		document.querySelector('#_'+ id).classList.add('l-active')
	}
	
}

paths.forEach( function(path){
	path.addEventListener('mouseenter', function(){
		var id = this.id.replace('_','')
		activeSpace(id)
	})
})

links.forEach(function(link){
	link.addEventListener('mouseenter', function(){
		var id = this.id.replace('list_','')
		activeSpace(id)
	})
})


carte.addEventListener('mouseover', function(){
	activeSpace()
})