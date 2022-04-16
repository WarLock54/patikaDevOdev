var uzunluklist=document.getElementsByTagName("LI");
var i;
for(let i=0;i<uzunluklist.length;i++){
    var ayrıntı = document.createElement("SPAN");
  var yazı = document.createTextNode("\u00D7");
  ayrıntı.className = "close";
  ayrıntı.appendChild(yazı);
  uzunluklist[i].appendChild(ayrıntı);
}
var kapa=document.getElementsByClassName("kapat");
for(var i=0;i<kapa.length;i++){
    kapa[i].onclick=function(){
    var div=this.parentElement;
    div.style.display="none";
    }
}
var liste=document.querySelector("ul");
liste.addEventListener("click",function (yeter){
if(yeter.target.tagName==="LI"){
    yeter.target.classList.toggle("yapıldı");
}

},false);

function yeniGörev(){
    var li=document.createElement("li");
    var yapıldı=document.getElementById("giris");
    var x=document.createTextNode(giris);
    li.appendChild(x);
    if(yapıldı===""){
        alert("TO DO LİST BOŞ BIRAKILAMAZ.");
        
    }
    else{
        document.getElementById("BenimSıra").appendChild(li);
    }
document.getElementById("giris").value="";

var ayrıntı=document.getElementById("SPAN");
var yazı=document.createTextNode("\u00D7");
ayrıntı.className="kapat";
ayrıntı.appendChild(yazı);
li.appendChild(ayrıntı);
for(i=0;i<kapa.length;i++){
    kapa[i].onclick=function(){
        var div=this.parentElement;
        div.style.display="none";
    }
}
}
