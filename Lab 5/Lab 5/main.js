var a = new Date();
var obj = new Object();
obj["Year"] = a.getFullYear();
obj["Month"] = a.getMonth()+1;
obj["Date"] = a.getDate();
obj["Day"] = a.getDay();



var out = document.getElementById("out");
var s = "";
for (var i in obj) { s += i + " = " + obj[i] + "<br>"};
//alert (s);
out.innerHTML = s;
