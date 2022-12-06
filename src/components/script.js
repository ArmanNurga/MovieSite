//import wednesdayl from "./img/Wednesday.jpg";

document.body.onload = function(){
    setTimeout(function() {
        var preloader = document.getElementById("pageloader");
        if (!preloader.classList.contains('done')) {
            preloader.classList.add('done')
        }
    }, 1000);
    
}





/*wednesday.addEventListener("click", function(){
	
	document.querySelector(".modalstyle").style.opacity = 1;
    document.querySelector(".modalstyle").style.pointerEvents = 'auto';
   	
});


document.querySelector(".modalwindow").addEventListener("click", function(){
	
    document.querySelector(".modalstyle").style.opacity = 0;
    document.querySelector(".modalstyle").style.pointerEvents = 'none';
		
});*/













