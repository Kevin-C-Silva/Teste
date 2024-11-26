function opennav()
{
    document.getElementById("menu").style.width='100%';    
}

function closemenu()
{
    document.getElementById("menu").style.width='0%';
}

   
        
         
        
    
   

     
    /* Carrosel*/
	var contador = 1; //variável pública criada fora da function
	var img1="moto3.jpg";
	var img2="moto4.jpg";
	var img3="moto5.jpg";
	var tempo=2500; //2500(milessegundos) : 1000 (milessegundo) = 2.5s
	var exibir=setInterval("Exibindo()",tempo);
	  
	function Exibindo()
	{
	  	document.images["slide"].src=eval("img"+contador);	
						  
		if (contador<3)
			contador++;
		else
			contador=1;
	} 