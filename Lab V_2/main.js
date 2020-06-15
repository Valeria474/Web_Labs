
	function run2(){

if (!isNaN(parseFloat(t_field.value)) && isFinite(parseFloat(t_field.value))) {
   alert('Ви ввели '+t_field.value+ ' Що э числом')}
 else {
 	alert('Ви вели '+t_field.value+' не є числом');}
}
function disne(){
	if ( parseInt( t_field.value ) != t_field.value ){
		alert('Є дійсним числом');}
	else{
		alert('НЕ є дійсним числом')
	}
 }
 	function disnediap(){
		var first=document.getElementById("f_first");
		var second=document.getElementById("f_second");
	if(t_field.value>=parseInt(f_first.value) && t_field.value<=parseInt(f_second.value))
       {alert('Дійсне число з діапазоном, ціла частина якого = '+Math.floor(t_field.value)+', а дробова частина = '+(t_field.value%1).toFixed(2));}
    else    
    {   alert('Число НЕ входить до діапазону, ціла частина якого = '+Math.floor(t_field.value)+', а дробова частина ='+(t_field.value%1).toFixed(2));}

}

	function cilediap(){
		var first=document.getElementById("d_first");
		var second=document.getElementById("d_second");
	if(t_field.value>=parseInt(d_first.value) && t_field.value<=parseInt(d_second.value))
           {  alert('Данне ціле число попадає в діапазон');}
      else
            { alert('Данне ціле число Не попадає в діапазон');}	

}
function cile(){
	if (Number.isInteger(parseFloat(t_field.value))) {
   alert('Ви ввели '+t_field.value+ ' Що є цілим числом')}
 else {
 	alert('Ви вели '+t_field.value+' не є цілим числом');}
 }