function work() {
  const satz = document.getElementById("satz").value;
  const wort = document.getElementById("wort").value;
  const befor = document.getElementById("vorderer");
  const after = document.getElementById("hinterer");
  const radio1 = document.getElementById("davor");
  if (radio1.checked) {
    var wort1 = satz.indexOf(wort);
    befor.innerHTML += " " + satz.slice(0, wort1);
    after.innerHTML += " " + satz.slice(wort1);
  } else if (satz.includes(wort) === false) {
    document.getElementById("vorderer").innerHTML +=
      "(" + " Das zeichen konnte leider nicht gefunden werden " + ") ";
    document.getElementById("hinterer").innerHTML += satz;
  } else {
    var wort1 = satz.search(wort);
    befor.innerHTML += " " + satz.slice(0, wort1) + wort;
    after.innerHTML += " " + satz.slice(wort1).split(wort).join(" ");
  }
}
