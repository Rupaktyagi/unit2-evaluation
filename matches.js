// write js code here corresponding to matches.html
var disdata = JSON.parse(localStorage.getItem("schedule"));

display(disdata);


var favratedata = [] || JSON.parse(localStorage.getItem("favourites"));

    function display(disdata){

    disdata.forEach(function(elem){

         var tr = document.createElement("tr");


         var td1 = document.createElement("td");
         td1.innerText = elem.matchnum;

         var td2 = document.createElement("td");
         td2.innerText = elem.teama;

         var td3 = document.createElement("td");
         td3.innerText = elem.teamb;

         var td4 = document.createElement("td");
         td4.innerText = elem.date;

         var td5 = document.createElement("td");
         td5.innerText = elem.matchvnu;


         var td6 = document.createElement("td");
         td6.innerText = "Favourites";
         td6.style.color = "green";
         td6.style.cursor = "pointer";
         td6.addEventListener("click",function(){
             favfunction(elem);
         })


         tr.append(td1,td2,td3,td4,td5,td6);

         document.querySelector("tbody").append(tr);
    });
    }

function favfunction(elem){
favratedata.push(elem);
localStorage.setItem("favourites",JSON.stringify(favratedata));
}

