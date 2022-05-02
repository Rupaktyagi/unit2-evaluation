// write js code here corresponding to index.html
// You should add submit event on the form



document.querySelector("#masaiForm").addEventListener("submit",myfunction);

var matchdata = [] || JSON.parse(localStorage.getItem("schedule"));


function myfunction(){
    event.preventDefault();
   
    var matchobj = {

      matchnum:masaiForm.matchNum.value,
      teama:masaiForm.teamA.value,
      teamb:masaiForm.teamB.value,
      date:masaiForm.date.value,
      matchvnu:masaiForm.venue.value,
    }
   matchdata.push(matchobj);

   localStorage.setItem("schedule",JSON.stringify(matchdata));


}
