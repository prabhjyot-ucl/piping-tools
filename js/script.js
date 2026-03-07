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

function calcPipeWeight(){

let od = document.getElementById("od").value;
let t = document.getElementById("thk").value;
let L = document.getElementById("plen").value;

let weight = 0.02466 * (od - t) * t * L;

document.getElementById("piperesult").innerHTML =
"Pipe Weight = " + weight.toFixed(2) + " kg";

}


function calcSupportLoad(){

let W = document.getElementById("totalweight").value;
let n = document.getElementById("supports").value;

let load = W / n;

document.getElementById("supportresult").innerHTML =
"Load per Support = " + load.toFixed(2) + " kg";

}


function calcSpan(){

let w = document.getElementById("load").value;
let E = document.getElementById("E").value;
let I = document.getElementById("I").value;
let d = document.getElementById("deflection").value;

let L = Math.pow((384 * E * I * d) / (5 * w), 0.25);

document.getElementById("spanresult").innerHTML =
"Maximum Span ≈ " + L.toFixed(2) + " m";

}
