	
	//alert("generate function");
	
	let qut,aut,btn;
	
	qut=document.getElementById("quote");
	aut=document.getElementById("author");
	btn=document.getElementById("newquote");

	function generate(){
	
	// fetch('https://api.quotable.io/random')
	fetch('https://quoteslate.vercel.app/api/quotes/random')
	 
        
       .then(response => response.json())
       .then(data => {
		// qut=document.getElementById("quote");
	    qut.innerHTML= data.quote;
	    // aut=document.getElementById("author");
		aut.innerHTML= "Author-"+data.author;
		
	
	});
}
		btn.addEventListener('click',generate);
		

		generate();
