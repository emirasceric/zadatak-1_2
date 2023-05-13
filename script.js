let brojevi = [];
let nepostojeciNegativni = true;

for (let i = 0; i < 5; i++) {
  let broj = prompt("Unesite broj:");
  
  if (broj < 0) {
    brojevi.push(parseInt(broj));
    nepostojeciNegativni = false;
  } 
}
if (nepostojeciNegativni) {
  //document.write("Niste unijeli niti jedan negativni broj.");
  alert("Niste unijeli niti jedan negativni broj.");
} else {
  document.write("niz negativnih brojevi: " + brojevi.join(", "), "</br>");
}

const suma = brojevi.reduce((a, b) => a + b) ;
document.write("Suma negativnih brojeva je :" + suma, "</br>");
