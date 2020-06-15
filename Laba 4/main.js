var blinking = true;
var mypos = 0;
var dpos = 25;
var a = 1;
var b = 1;

//Масив з готовим наповненням
stringm = new Array(10);
       stringm[1] = "⊚";
       stringm[2] = "Ѿ";
       stringm[3] = "◔";
       stringm[4] = "◑";
       stringm[5] = "◕";
       stringm[6] = "◐";
       stringm[7] = "◓";
       stringm[8] = "◒";
       stringm[9] = "◖";
       stringm[10] = "◗";


function ablink() {
if (b==1) {
 document.forms[0].abutton.value = stringm[a]
   b-- ;
    a++;
  if (a>10) {a = 1};}
else {
 //document.forms[0].abutton.value = "";
   b++ }
}


function myblink() {
 if (dpos > 13) {
   mypos++}
 if (dpos > 48) {
   mypos = 0;
   dpos = 25;
                 }
 else {dpos++}
ianID = setTimeout ("myblink(); ablink()", 300);
}


function stopit() {
if (blinking==true) {
 clearTimeout(ianID);
  document.forms[0].abutton.value = "▶";
  blinking = false;
}
else {
    myblink();
 document.forms[0].abutton.value = "▷" ;
 blinking = true;
}
}


document.write("<form name=\"pajjs\">");
document.write("<input type=\"button\"class=\"knop\" name=\"abutton\" value=\" ЗАЧЕКАЙ \"style=\"width:200px; height:150px;\" size=\"18\" onclick=\"stopit()\">");
document.write("</form>");
myblink();
