function work() {
  const satz = document.getElementById("satz").value;
  const wort = document.getElementById("wort").value;
  var wort1 = satz.indexOf(wort);
  const cut = wort.length;
  if (document.getElementById("danach").checked) {
    wort1 = wort1 + cut;
  }
  document.getElementById("vorderer").innerHTML +=
    " " + satz.slice(0, wort1) + " ";
  document.getElementById("hinterer").innerHTML +=
    " " + satz.slice(wort1) + " ";
  console.log("working");
}
