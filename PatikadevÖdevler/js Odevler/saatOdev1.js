var isim=prompt("İsminizi giriniz:");
document.getElementById("isim").innerHTML=isim;
function fonk(){
       var tarih=new Date();
       var dk=tarih.getMinutes();
       var sn=tarih.getSeconds();
       var sa=tarih.getHours();
       var haftagünleri=["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"];
       var gün=haftagünleri[tarih.getDay()];
   

    
       var x=sa+":"+dk+":"+sn+" "+ gün;
      document.getElementById("zaman").innerText=x;
      document.getElementById("zaman").textContent=x;
    setTimeout(fonk,1000);




}
fonk();

