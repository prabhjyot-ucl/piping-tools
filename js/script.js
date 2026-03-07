function calcExpansion(){

let L = document.getElementById("length").value;
let T = document.getElementById("temp").value;
let a = document.getElementById("alpha").value;

let expansion = a * L * T;

document.getElementById("result").innerHTML =
"Thermal Expansion = " + expansion.toFixed(3) + " meters";

}


function calcHydro(){

let P = document.getElementById("pressure").value;
let D = document.getElementById("diameter").value;
let t = document.getElementById("thickness").value;

let stress = (P * D) / (2 * t);

document.getElementById("hydroresult").innerHTML =
"Hoop Stress = " + stress.toFixed(2) + " MPa";

}
