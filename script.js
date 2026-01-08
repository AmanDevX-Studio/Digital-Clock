setInterval(() => {
  
a = new Date();
let date = a.toLocaleDateString();
let time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
document.getElementById("date").innerHTML = date;
document.getElementById("time").innerHTML = time;
},1000);