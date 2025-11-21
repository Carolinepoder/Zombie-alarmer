console.log("loaded instructions...");

instruction.js;

console.log("Loaded instructions");

document.querySelector("#Hjernehotspot").addEventListener("click", hjerneF);

function hjerneF() {
  console.log("hjerneF er trykket paa");

  document.querySelector(".info-text h2").textContent = "Hjerne";
  document.querySelector(".info-text p").textContent =
    "Alarm-zombiens hjerne fungerer som et defekt alarmsystem, der hele tiden sender forstyrrede impulser rundt, hvilket får zombien til at hyle, bippe eller ringe uden stop. Når man giver den et let, blødt bonk på hovedet, bliver signalerne kortsluttet et øjeblik, og lyden stopper som regel med det samme. Nogle typer, især vækkeurs-zombien, kan dog gå i snooze og starte igen, så her kræves ofte flere bonks i træk. Det handler ikke om at slå hårdt, men om at ramme præcist med et blødt redskab, så alarmen bliver “nulstillet”, og zombien igen falder til ro.";
}

document.querySelector("#Håndhotspot").addEventListener("click", håndF);

function håndF() {
  console.log("håndF er trykket paa");
  document.querySelector(".info-text h2").textContent = "Hånd";
  document.querySelector(".info-text p").textContent =
    "Alarm-zombiens hænder er ofte stive og misfarvede, og deres negle kan være skarpe og flossede efter at have skrabet mod overflader i timevis. Når de bevæger sig, bruger de hænderne til at føle sig frem, og negleroden kan bære spor af den samme elektriske uro, der driver deres alarmlyde. Selvom de ikke angriber med vilje, kan et uheldigt riv fra en zombie være nok til at overføre den svage, men ustabile bioimpuls, der giver dem deres karakteristiske adfærd. Bliver man revet, skal såret straks renses og overvåges, og man bør indberette hændelsen med det samme, så beredskabet kan vurdere risikoen og give de nødvendige forholdsregler.";
}

document.querySelector("#Mundhotspot").addEventListener("click", mundF);

function mundF() {
  console.log("mundF er trykket paa");
  document.querySelector(".info-text h2").textContent = "Mund";
  document.querySelector(".info-text p").textContent =
    "Alarm-zombiens mund er ofte halvåben, fordi deres ansigtsmuskler reagerer på de samme elektriske forstyrrelser, der får dem til at udsende høje alarmsignaler. Læberne kan virke tørre eller sprukne, og når de bevæger sig, forstærkes lydene gennem mundhulen som et ekko. Selvom de sjældent bider, kan selv en lille skade omkring munden bære rester af den bioimpuls, der styrer deres adfærd. Kommer man i tæt kontakt, bør man holde afstand, undgå direkte berøring og altid indberette episoden, så beredskabet kan vurdere smitte- og risikoniveauet.";
}
