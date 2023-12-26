// Codice ideato da Sara Rossi Esame di Progettazione e Programmazione web
// versione software v.1.15 del 25 agosto 2022


var CanzoniSelezionate = new Array("","","","","","","","");
var ListaFileCanzoni = new Array("canzoni/c1.mp3","canzoni/c2.mp3","canzoni/c3.mp3","canzoni/c4.mp3","canzoni/c5.mp3","canzoni/c6.mp3","canzoni/c7.mp3","canzoni/c8.mp3");
var Indice;
var IndicePlay;
var Jbox;
var FlagPausa;
var playlist = document.getElementById("playlist");
var canzoni = document.getElementById("canzoni");


//la funzione inizializza le variabile e crea una connessione con il file HTML per i bottoni

function start (){
	try{
		Indice = 0;
		IndicePlay = 0;
		FlagPausa = false;

		var spostas = document.getElementsByClassName("js-sposta");
		for (var i = 0; i < spostas.length; i++) {
			spostas[i].addEventListener("click", sposta)
		}
		
		var spostaIndietros = document.getElementsByClassName("js-spostaIndietro")
		for (var i = 0; i < spostaIndietros.length; i++) {
			spostaIndietros[i].addEventListener("click", spostaIndietro)
		}
	
		var play = document.getElementsByClassName("js-play")[0];
		play.addEventListener("click",jBoxPlay)

		var pause = document.getElementsByClassName("js-pause")[0];
		pause.addEventListener("click",jBoxPause)

		var abort = document.getElementsByClassName("js-abort")[0];
		abort.addEventListener("click",jBoxAbort)
	} catch(e){
		alert("start" + e);
	}

}

//funzione che sposta la canzone scelta all'interno della playlist e la inserisce all'interno di un array

function sposta (e){
	try {

		var canzone= e.target.parentNode.parentNode;
		canzone.remove();
		canzone.getElementsByClassName("js-sposta")[0].style= "display: none"; //span js sposta
		canzone.getElementsByClassName("js-spostaIndietro")[0].style= "display: inline";

		playlist.appendChild(canzone);
		
		CanzoniSelezionate[Indice]=canzone.id;
		Indice++;

		//console.log(canzone);
	} catch(e){
		alert("sposta " + e);
	}

}

//funzione che sposta indietro la canzone che era stata precedentemente scelta e aggiunta alla playlist e quindi la toglie dall'array

function spostaIndietro (e){
	try {

		var canzone= e.target.parentNode.parentNode;
		canzone.remove();
		canzone.getElementsByClassName("js-sposta")[0].style= "display: inline"; //span js sposta
		canzone.getElementsByClassName("js-spostaIndietro")[0].style= "display: none";
		canzoni.appendChild(canzone);
	
		var ind = canzone.id;
		console.log(ind);
		for (var i = 0 ; i<8 ; i++) {
			if (CanzoniSelezionate[i] == ind) {
				break;
			}
		}
		console.log(i);
		CanzoniSelezionate[i]="";
		Indice--;
		//console.log(canzone);
	} catch(e){
		alert("spostaIndietro " + e);
	}

}

//la funzione che viene chiamata quando si preme il tasto play

async function jBoxPlay (){
	try {
		if (FlagPausa == true ){
			FlagPausa = false;
			Jbox.play();
			return;
		}
		 IndicePlay = 0; 		
		 PlayFiles();
		}
		
		 catch(e){
			alert("jboxPlay " + e);
		}
	}
	
	//funzione che fa suonare le canzonu


	function PlayFiles (){
		try {
			if (IndicePlay >= 8) return;		
			if (CanzoniSelezionate[IndicePlay] != "") {
				Jbox= new Audio(ListaFileCanzoni[CanzoniSelezionate[IndicePlay] - 1]);
				Jbox.onended= function(){ //evento dell'oggetto Audio che viene richiamato tutte le volte che termina una canzone, richiama se stessa per passare alla canzone successiva
					if (IndicePlay >= 8) return;		
					PlayFiles()
					}
				Jbox.play();
				IndicePlay++;
			}
			else {
				IndicePlay++;
				PlayFiles()
			}
			}	
	
	catch(e){
			alert("PlayFiles " + e);
			}

	
	}
	
// funzione che mette in pausa la canzone e mi riporta all'indice 0, ovvero alla prima canzonee dell'array

	function jBoxAbort(e){
		try {
			if (Jbox == undefined) return;	
			Jbox.pause();
			FlagPausa = false;
			IndicePlay=0;
			
	} catch(e){
			alert("jBoxAbort" + e);
		}
	
	}

	//funzione che mette in pausa la playlist

	function jBoxPause(e){
		try {
			if (Jbox == undefined) return;	
			Jbox.pause();
			FlagPausa = true;
	
	} catch(e){
			alert("jboxPause " + e);
		}
	
	}




start()

window.onload=start;
