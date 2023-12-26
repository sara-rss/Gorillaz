var nodoAvanti;
var nodoIndietro;
var nodoSlides;
var indiceSlide;
var numeroSlide;


var slides = ["img/storia/slide-1.jpg", "img/storia/slide-2.jpg", "img/storia/slide-3.jpg"];


function gestoreLoad (){
	try{
		nodoAvanti=document.getElementById("avanti");
		nodoIndietro=document.getElementById("indietro");
		nodoSlides=document.getElementById("slides");
		nodoAvanti.onclick=gestoreAvanti;
		nodoIndietro.onclick=gestoreIndietro;
        nodoAvanti.onmouseover=gestoreCursore;
		nodoIndietro.onmouseover=gestoreCursore;
		numeroSlide=slides.length;
		
		indiceSlide=0;
		cambiaSlide(0);
	}
    catch(e){
		alert("gestoreLoad"+e);
}
}

window.onload=gestoreLoad;

//funzione che fa scorrere le immagini

function cambiaSlide(x){
	indiceSlide+=x;
	if(indiceSlide==numeroSlide){
		indiceSlide=0;
	}
	if(indiceSlide<0){
		indiceSlide=numeroSlide-1;
	}
	nodoSlides.setAttribute("src", slides[indiceSlide]);
}
//funzione che fa scorrere in avanti

function gestoreAvanti(){
	try{
		cambiaSlide(+1);
	    
		}
		
	catch(e) {
		alert("gestoreAvanti"+e);
	}
}

//funzione che fa scorrere indietro

function gestoreIndietro(){
	try{
		cambiaSlide(-1);
	       
		}
	
	catch(e){
		alert("gestoreIndietro"+e);
	}
}

//funzione che cambia cursore quando si passa sopra ai button

function gestoreCursore (){
	try{
		this.style.cursor="pointer";
	}
	catch(e){
		alert("gestoreCursore"+e);
	}
}

