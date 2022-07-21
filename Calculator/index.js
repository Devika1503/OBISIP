
function clearScreen() {
    document.getElementById("output").value = "";
    document.getElementById("history").value = "";
}
function diaplay(value){
    document.getElementById("history").value +=value ;
    // console.log(value);
}
function calculate() {
    var p = document.getElementById("history").value;
    var q = eval(p);
    document.getElementById("output").value = q;
}
function del(){
    var d = document.getElementById("history").value.slice(0,-1);
    document.getElementById("history").value = d;
    
}