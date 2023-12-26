
//il codice è stato elaborato da me durante il laboratorio e rielaborato per questo progetto 

//associamo ad ogni membro la sua descrizione
 
var nodoMurdoc;
var nodoStuart;
var nodoNoodle;
var nodoRussel;
var nodoTesto;
var tabellaDescrizioni;




function gestoreLoad(){
	try{
    nodoMurdoc=document.getElementById("murdoc");
	nodoStuart=document.getElementById("stuart");
    nodoNoodle=document.getElementById("noodle");
	nodoRussel=document.getElementById("russel");
    nodoTesto=document.getElementById("testo");
	nodoMurdoc.onclick=gestoreDescrizione;
	nodoStuart.onclick=gestoreDescrizione;
	nodoNoodle.onclick=gestoreDescrizione;
	nodoRussel.onclick=gestoreDescrizione;

    tabellaDescrizioni={
		murdoc: "Murdoc è il frontman del gruppo, nato il 6 giugno 1966 a Stroke-on-Trent, in Inghilterra, da madre sconosciuta e Sebastian Niccals. Ha vissuto un’infanzia difficile, segnata da abusi da parte del padre; queste terribili esperienze hanno avuto un impatto significativo sul suo stato psicologico da adulto. Da adolescente, Murdoc si interessò al satanismo, si convertì, arrivando addirittura a fare un patto con il diavolo: gli diede la sua anima per diventare una rock star. Da quel momento il suo secondo nome diventò proprio Faust. Dopo aver conosciuto 2D decide di creare una band, immediatamente acquistò uno studio, dandogli il nome Kong Studios.",
		stuart: "2D è il cantante e tastierista. Il suo vero nome è Stuart. È nato nell'Hertfordshire, Inghilterra, e cresciuto a Crawley. Non era un ragazzo molto intelligente, ma era conosciuto per il suo grande interesse per la musica. Batté la testa cadendo da un albero a undici anni, il colpo gli causò una totale perdita dei capelli, quando questi ricrebbero, erano di un blu elettrico. A 19 anni conobbe Murdoc Niccals: quest’ultimo irruppe volontariamente con la sua macchina attraverso il muro del negozio di musica dove Stuart era solito lavorare, in un tentativo di rapinare il negozio e rubare i sintetizzatori. Il parafanghi di Murdoc andò a finire contro la testa di 2D, lasciandolo con un ifema (rottura dei vasi sanguigni permanente) agli occhi. Fu dopo di ciò che Murdoc lo soprannominò 2D ",
		noodle: "Noodle è la chitarrista della band. Nulla si sa della sua vita prima dei Gorillaz: a 10 anni, la bimba fu recapitata ai Kong Studios in una scatola di cartone, rispondendo all'annuncio messo dai tre membri su Internet, i quali erano in cerca di un chitarrista per la band nascente. Non sapendo dire altro che noodle (pasta) questo fu il soprannome che le fu dato. Nel 2003, approfittando della pausa che la band aveva deciso di concedersi, Noodle decise di tornare in Giappone per scoprire qualcosa del suo misterioso passato. Scoprì di essere l'unica sopravvissuta dei 23 prototipi di super-soldato creati segretamente dal governo giapponese; fu proprio il governo a conferirle l'arma della musica, con cui avrebbe dovuto difendere il Paese. Per questo la ragazza era così brava ad usare la chitarra elettrica. ",
		russel: "Russel è il batterista. Nato a Brooklyn, New York ed educato con sani principi dai propri genitori. Tuttavia, il giovane cominciò a dare problemi: venne espulso dal liceo che frequentava per aver malmenato alcuni studenti, in seguito ad una possessione diabolica dopo la quale i suoi occhi diventarono completamente bianchi. Una sera, mentre tornava a casa in macchina con amici, Russel fu vittima di una sparatoria, dalla quale uscì malridotto ma salvo, mentre tutti gli amici che erano con lui vennero uccisi. I loro spiriti, tuttavia, vennero assorbiti dal corpo del batterista, dove si rifugiarono, potendo però uscire in qualsiasi momento. La particolarità sta anche nel fatto che questi amici erano tutti ottimi musicisti, dunque con cotanto talento latente nel proprio corpo, Russel acquisì un’incredibile abilità musicale alla batteria e nel rap. Dopo questa nuova e violenta svolta degli eventi, la famiglia di Russel decise di spedirlo in Inghilterra nella speranza che questo lo aiutasse a superare i suoi traumi, non sapendo di averlo così condotto ad incrociare le aspirazioni da superstar di Murdoc."
	}
		
		var nodoTitolo= document.createElement("p");
		nodoTesto.appendChild(nodoTitolo);
		var nodoTestoVuoto=document.createTextNode(" ");
		nodoTitolo.appendChild(nodoTestoVuoto);
		nodoMurdoc.onmouseover=gestoreCursore;
		nodoStuart.onmouseover=gestoreCursore;
		nodoNoodle.onmouseover=gestoreCursore;
		nodoRussel.onmouseover=gestoreCursore;

	
	}
	
	catch(e){
	 alert("gestoreLoad"+e);
	}
}

window.onload=gestoreLoad;

//visualizza la descrizione dei membri a seconda dell'immagine cliccata
function gestoreDescrizione(){
	try{
		
		var idMembri = this.id;
		var testo = tabellaDescrizioni[idMembri];
		nodoTesto.firstChild.nodeValue = testo;
		
	}
	catch (e){
		alert("gestoreDescrizione"+e);
	}
}


//cambio cursore al passaggio del mouse
function gestoreCursore (){
	try{
		this.style.cursor="pointer";
	}
	catch (e){
	alert ("gestoreCursore"+e);
	}
}


