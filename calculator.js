function one(){
    document.getElementById("A").value+=1;
}
function two(){
    document.getElementById("A").value+=2;
}
function three(){
    document.getElementById("A").value+=3;
}
function four(){
    document.getElementById("A").value+=4;
}
function five(){
    document.getElementById("A").value+=5;
}
function six(){
    document.getElementById("A").value+=6;
}
function seven(){
    document.getElementById("A").value+=7;
}
function eight(){
    document.getElementById("A").value+=8;
}
function nine(){
    document.getElementById("A").value+=9;
}
function zero(){
    document.getElementById("A").value+=0;
}
function dot(){
    document.getElementById("A").value+=".";
}
function plus(){
    document.getElementById("A").value+="+";
}
function minus(){
    document.getElementById("A").value+="-";
}
function into(){
    document.getElementById("A").value+="*";
}
function divide(){
    document.getElementById("A").value+="/";
}
function AC(){
    document.getElementById("A").value="";
}
function equalto(){
    var netvalue=document.getElementById("A").value;
    document.getElementById("A").value=eval(netvalue);
}

