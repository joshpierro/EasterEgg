(function () {
var head = document.getElementsByTagName('head')[0];

var jQuery = document.createElement('script');
jQuery.type = 'text/javascript';
jQuery.charset = 'utf-8';
jQuery.id = 'testing';
jQuery.defer = true;
jQuery.async = true;
jQuery.setAttribute('src','http://code.jquery.com/jquery-2.1.4.min.js');
jQuery.onload = function () {
	 loadBootstrap(); 
  }
  
 head.appendChild(jQuery);
 
 function loadBootstrap(){
	 
	 var bootstrap = document.createElement('script');
	 bootstrap.type = 'text/javascript';
	 bootstrap.charset = 'utf-8';
	 bootstrap.id = 'testing';
	 bootstrap.defer = true;
	 bootstrap.async = true;
	 bootstrap.setAttribute ('src','https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js');
	 bootstrap.onload = function () { 
       loadBootstrapCSS(); 
	  }
	  
	 head.appendChild(bootstrap);
 }
 
 function loadBootstrapCSS(){
	 var bootStrapCss = document.createElement("link"); 
	 bootStrapCss.setAttribute("rel", "stylesheet")
     bootStrapCss.setAttribute("type", "text/css")
     bootStrapCss.setAttribute("href", 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css'); 
	 head.appendChild(bootStrapCss);
	 bootStrapCss.onload = function () {
		

	 }
	 
	 
	 var aHole = []; 
	 var asshole = ''; 
	 addEventListener("keydown", keyDownTextField, false);

	 
	 function keyDownTextField(e) {
		
		console.log(aHole);
	    console.log(aHole.length);
	    console.log(e.keyCode);
		aHole.push(e.keyCode); 
		console.log(aHole);
		console.log(aHole.length);
		console.log(aHole[0])
		
		
	    if (aHole[0] != 18) {
             aHole = [];
			}
	   //a	
		if (aHole.length === 2 && aHole[1] != 65) {
        aHole = [];
		}
		//s
		if (aHole.length === 3 && aHole[2] != 83) {
        aHole = [];
		}
		//s
		if (aHole.length === 4 && aHole[3] != 83) {
          aHole = [];
		}
		//h
		if (aHole.length === 5 && aHole[4] != 72) {
          aHole = [];
		}
		//o
		if (aHole.length === 6 && aHole[5] != 79) {
          aHole = [];
		}
		//l
		if (aHole.length === 7 && aHole[6] != 76) {
          aHole = [];
		}
		//e
		if (aHole.length === 8 && aHole[7] != 69) {
          aHole = [];
		}
		
		 if (aHole.length > 8) {
           aHole = [];
		 }
		
		if (aHole.length ===8) {
		 $("body").append(
	 "<div class='modal fade' id='modal-content'>"+ 
    "<div class='modal-dialog'>"+
     "<div class='modal-content'>"+
       "<div class='modal-header'>"+
         "<h4 class='modal-title'>You Have Been Convicted of Assholeism!</h4>"+
       "</div>"+
       "<div class='modal-body'>"+
	   "<p><iframe width='560' height='315' src='https://www.youtube.com/embed/rEFKH9KzJEE?autoplay=1' frameborder='0' allowfullscreen></iframe></p>"+
       "</div>"+
       "<div class='modal-footer'>"+
         "<button type='button' class='btn btn-default' data-dismiss='modal'>Close</button>"+
   "</div>"+
  "</div><!-- /.modal-content -->"+
  "</div><!-- /.modal-dialog -->"+
  "</div><!-- /.modal -->'");
		
           $("#modal-content").modal('show');
		     console.log('asshole'); 
		  }
		  
		
	 }
	 
 }
})();
