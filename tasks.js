const tasks = [
  // RELIGIOSE
  { category: "Religiose", icon: "📖", text: "Di che cosa parla pagina [123]?" },
  { category: "Religiose", icon: "🔎", text: "In che pagina si trova [versetto]?" },
  { category: "Religiose", icon: "🕵️", text: "Indovina il personaggio." },
  { category: "Religiose", icon: "❤️", text: "Di’ 3 cose positive della tua famiglia." },
  { category: "Religiose", icon: "🫶", text: "Elenca 4 caratteristiche del tuo migliore amico." },
  { category: "Religiose", icon: "💌", text: "Scrivi un messaggio di ringraziamento a qualcuno." },
  { category: "Religiose", icon: "🗣️", text: "Predica lampo: parla per 30 secondi su una parola pescata." },
  { category: "Religiose", icon: "🎵", text: "Canta un inno, includendo la parte che contiene una parola data." },
  { category: "Religiose", icon: "📸", text: "Foto simbolica: trova un oggetto che rappresenti un principio del Vangelo." },
  { category: "Religiose", icon: "🤝", text: "Fai un complimento sincero a qualcuno." },

  // INTELLETTUALI
  { category: "Intellettuali", icon: "🔢", text: "Metti in ordine gli elementi. Puoi farlo mentalmente o scrivendo." },
  { category: "Intellettuali", icon: "🧠", text: "Ricorda la sequenza. Puoi annotarla solo dopo averla memorizzata." },
  { category: "Intellettuali", icon: "🔐", text: "Decifra il codice usando la legenda." },
  { category: "Intellettuali", icon: "🧩", text: "Completa il pattern. Puoi risolverlo mentalmente." },
  { category: "Intellettuali", icon: "➗", text: "Risolvi il calcolo. Carta e penna sono facoltative." },
  { category: "Intellettuali", icon: "🌀", text: "Risolvi il labirinto tracciando il percorso." },
  { category: "Intellettuali", icon: "🔤", text: "Completa la parola senza scrivere." },
  { category: "Intellettuali", icon: "🧐", text: "Trova l’intruso. Puoi risolverlo mentalmente." },
  { category: "Intellettuali", icon: "🔍", text: "Trova le differenze sulla carta stampata." },
  { category: "Intellettuali", icon: "❓", text: "Risolvi il mini-enigma e dai la risposta." },

  // SOCIALI
  { category: "Sociali", icon: "😂", text: "Fai ridere qualcuno." },
  { category: "Sociali", icon: "🤝", text: "Trova qualcuno che ha qualcosa in comune con te." },
  { category: "Sociali", icon: "👋", text: "Presentati a qualcuno con cui hai parlato poco." },
  { category: "Sociali", icon: "🕵️", text: "Caccia fotografica: trova e fotografa qualcosa seguendo l’indizio ricevuto." },
  { category: "Sociali", icon: "🤫", text: "Confidati con qualcuno. Puoi anche mentire." },
  { category: "Sociali", icon: "📢", text: "Di’ al pulpito che stai facendo un task." },
  { category: "Sociali", icon: "✋", text: "Stringi la mano a 10 persone." },
  { category: "Sociali", icon: "👀", text: "Segui qualcuno per 20 secondi." },
  { category: "Sociali", icon: "🚨", text: "Ferma una persona e dille che è “SuS”." },
  { category: "Sociali", icon: "🪞", text: "Mettiti accanto a qualcuno e imita quello che fa per 15 secondi." },

  // FISICHE
  { category: "Fisiche", icon: "🏀", text: "Fai 5 canestri." },
  { category: "Fisiche", icon: "🗿", text: "Rimani perfettamente fermo per 30 secondi." },
  { category: "Fisiche", icon: "🏃", text: "Porta il testimone in una stanza." },
  { category: "Fisiche", icon: "🥚", text: "Porta un uovo sodo su un cucchiaio senza farlo cadere." },
  { category: "Fisiche", icon: "🎈", text: "Tieni il palloncino in aria andando avanti e indietro." },
  { category: "Fisiche", icon: "🪑", text: "Prova 3 sedie diverse." },
  { category: "Fisiche", icon: "🧹", text: "Pulisci la stanza con la scopa." },
  { category: "Fisiche", icon: "🏃‍♂️", text: "Completa un piccolo percorso a ostacoli." },
  { category: "Fisiche", icon: "🌬️", text: "Vai fuori a prendere un po’ d’aria." },
  { category: "Fisiche", icon: "🎶", text: "Fai un salto, fanne un altro, fai una giravolta, falla un’altra volta, guarda in su, guarda in giù… niente bacio!" }
];

const categoryClass = {
  "Religiose": "religiose",
  "Intellettuali": "intellettuali",
  "Sociali": "sociali",
  "Fisiche": "fisiche"
};

const cards = document.querySelector("#cards");

tasks.forEach((task, index) => {
  const card = document.createElement("article");
  card.className = "card " + categoryClass[task.category];
  card.innerHTML =
    '<div class="card-top">' +
      '<span class="category">' + task.category + '</span>' +
      '<span class="number">#' + String(index + 1).padStart(2, "0") + '</span>' +
    '</div>' +
    '<div class="task-icon" aria-hidden="true">' + task.icon + '</div>' +
    '<div class="task-text">' + task.text + '</div>' +
    '<div class="footer">AMONG US · TASK</div>';

  cards.appendChild(card);
});
