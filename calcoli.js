/*Calcoli per la app sul BMI*/
function calcolo(){
//idntificare i dati del form
var peso=document.forms.bmi.peso.valueAsNumber;
var altezza=document.forms.bmi.altezza.valueAsNUmber;
var sesso=document.forms.bmi.sesso.value;
//verifico se l'utente è M o F
if(sesso= 'm'){
	//applico la formula BMI per maschi
	var totale= peso/(altessa*altezza);
	/*Math.pow(base,exp)
	 *Math.pow(altezza,2)*/
	document.getElementById('calcola').innerHTML="bmi ="+totale;
		if(totale<20.1){
		document.getElementById('spiegazione').innerHTML="sottopeso";
	 }
		else if(totale<25){
		document.getElementById('spiegazione').innerHTML="peso ottimale";
	 }
		else if (totale<29.9){
		document.getElementById('spiegazione').innerHTML="sovrappeso";
         }
		else if (totale<35){
		document.getElementById('spiegazione').innerHTML="Obesità 1°grado";
         } 
		else if (totale<40){
		document.getElementById('spiegazione').innerHTML="Obesità 2°grado";
         } 
		else{
		document.getElementById('spiegazione').innerHTML="Obesità grave";
         } 
	}
	else if(sesso= "f"){
	//applico formula BMI per femmine
	var totale= peso/(altessa*altezza))*0.9;
	document.getElementById('calcola').innerHTML="bmi ="+totale;
		if(totale<18.7){
		document.getElementById('spiegazione').innerHTML="sottopeso";
	 }
		else if(totale<23,8){
		document.getElementById('spiegazione').innerHTML="peso ottimale";
	 }
		else if (totale<28.6){
		document.getElementById('spiegazione').innerHTML="sovrappeso";
         }
		else if (totale<35){
		document.getElementById('spiegazione').innerHTML="Obesità 1°grado";
         } 
		else if (totale<40){
		document.getElementById('spiegazione').innerHTML="Obesità 2°grado";
         } 
		else{
		document.getElementById('spiegazione').innerHTML="Obesità grave";
         } 
	}
	
}
function cancella(){
document.getElementById('calcola').innerHTML=" ";
document.getElementById('spiegazione').innerHTML=" ";
}
