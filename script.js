let turn="X"
let fiche=document.querySelector("div.op")
let square=[]

function uno(num1,num2,num3){
    fiche.innerHTML=`${square[num1]} winnner`;
    document.getElementById("item"+num1).style.backgroundColor="black";
    document.getElementById("item"+num2).style.backgroundColor="black";
    document.getElementById("item"+num3).style.backgroundColor="black";
    setInterval(function(){
        fiche.innerHTML +="."
    },1000);
  setTimeout(function(){
    location.reload()
  },4000)
}
function winner(){
for(i=1;i<10;i++){
    square[i]=document.getElementById('item' + i).innerHTML
}
if(square[1]==square[2]&& square[2]==square[3] && square[1]!=""){
uno(1,2,3)

}else if(square[4]==square[5]&& square[5]==square[6] && square[6]!=""){
    uno(4,5,6)
}else if(square[7]==square[8]&& square[8]==square[9] && square[9]!=""){
    uno(7,8,9)
}else if(square[1]==square[4]&& square[4]==square[7] && square[4]!=""){
    uno(1,4,7)
}else if(square[2]==square[5]&& square[5]==square[8] && square[8]!=""){
    uno(2,5,8)
}else if(square[3]==square[6]&& square[6]==square[9] && square[6]!=""){
    uno(3,6,9)
}else if(square[1]==square[5]&& square[5]==square[9] && square[9]!=""){
    uno(1,5,9)
}else if(square[3]==square[5]&& square[5]==square[7] && square[7]!=""){
    uno(3,5,7)
}else{
    if(square[1]!="" && square[2]!="" && square[3]!="" && square[4]!="" &&
    square[5]!="" && square[6]!="" && square[7]!="" && square[8]!="" && square[9]!=""){
        document.getElementById("item1").style.backgroundColor="black";
        document.getElementById("item2").style.backgroundColor="black";
        document.getElementById("item3").style.backgroundColor="black";
        document.getElementById("item4").style.backgroundColor="black";
        document.getElementById("item5").style.backgroundColor="black";
        document.getElementById("item6").style.backgroundColor="black";
        document.getElementById("item7").style.backgroundColor="black";
        document.getElementById("item8").style.backgroundColor="black";
        document.getElementById("item9").style.backgroundColor="black";
        fiche.innerHTML="No one wins";
        setInterval(function(){
            fiche.innerHTML +="."
        },1000);
      setTimeout(function(){
        location.reload()
      },4000)
    }
}
}
function game(id){
    let span=document.getElementById(id)
    if (turn==="X" && span.innerHTML===""){
        fiche.innerHTML="O"
        span.innerHTML="X";
        turn="O"
    }else if(turn==="O" && span.innerHTML===""){
        fiche.innerHTML="X"
        span.innerHTML="O"
        turn="X"
    }
    winner()
}
console.log(location==window)