//document.getElementById("imgId_two").style.transform="perspective(500px) translateZ(0px) RotateX(45deg)";

var anqelX = 0;
function RotateOnAxsisX_Plus(){
    if(anqelX==360){anqelX=0;}
    anqelX+=10;
   //document.getElementById("imgId_two").style.transform=`perspective(500px) translateZ(0px) RotateX(${anqelX}deg)`;
   //document.getElementById("imgId_one").style.transform=`perspective(500px) translateZ(0px) RotateX(${anqelX}deg)`;
   document.getElementById("contentTwoImage").style.transform=`perspective(500px) translateZ(-100px) RotateX(${anqelX}deg)`;
 
}