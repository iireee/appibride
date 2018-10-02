/*Calcoli per la app sul BMI*/
function calcolo(){
//idntificare i dati del form
var peso=document.forms.bmi.peso.valueAsNumber;
var altezza=document.forms.bmi.altezza.valueAsNUmber;
var sesso=document.forms.bmi.sesso.value;
//verifico se l'utente è M o F
if(sesso='m'){
	//applico la formula BMI per maschi
	var totale= peso/(altessa*altezza);
	/*Math.pow(base,exp)
	 *Math.pow(altezza,2)*/
	document.getElementById('calcola').innerHTML="bmi ="+totale;
	}
	else if(sesso="f"){
	//applico formula BMI per femmine
	var totale= peso/(altessa*altezza))*0.9;
	document.getElementById('calcola').innerHTML="bmi ="+totale;
	}
	
}
function cancella(){
document.getElementById('calcola').innerHTML=" ";
}
