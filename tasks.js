const tasks = [
  // RELIGIOSE
  { category: "Religiose", icon: "📖", text: "Di che cosa parla pagina [TBD]?" },
  { category: "Religiose", icon: "🔎", text: "In che pagina si trova Alma 32:21?" },
  { category: "Religiose", icon: "🔎", text: "In che pagina si trova 1 Nefi 3:7?" },
  { category: "Religiose", icon: "🔎", text: "In che pagina si trova Helaman 5:12?" },
  { category: "Religiose", icon: "🕵️", text: "Indovina il personaggio: si è battezzato tardi, ma insegnava bene il Vangelo." },
  { category: "Religiose", icon: "❤️", text: "Di’ 3 cose positive della tua famiglia." },
  { category: "Religiose", icon: "🫶", text: "Elenca 4 caratteristiche del tuo migliore amico." },
  { category: "Religiose", icon: "💌", text: "Scrivi un messaggio di ringraziamento a qualcuno." },
  { category: "Religiose", icon: "🗣️", text: "Predica lampo: parla per 30 secondi sulla FEDE." },
  { category: "Religiose", icon: "🗣️", text: "Predica lampo: parla per 30 secondi sul PENTIMENTO." },
  { category: "Religiose", icon: "🗣️", text: "Predica lampo: parla per 30 secondi sul BATTESIMO." },
  { category: "Religiose", icon: "🗣️", text: "Predica lampo: parla per 30 secondi sullo SPIRITO SANTO." },
  { category: "Religiose", icon: "🗣️", text: "Predica lampo: parla per 30 secondi sulla PERSEVERANZA." },
  { category: "Religiose", icon: "🎵", text: "Canta «Come vi ho amati»." },
  { category: "Religiose", icon: "🤝", text: "Fai un complimento sincero a qualcuno." },

  // INTELLETTUALI
  { category: "Intellettuali", icon: "🔢", text: "Elenca i numeri in ordine: 47, 12, 83, 26, 91, 35, 68, 14, 57, 72." },
  { category: "Intellettuali", icon: "🧠", text: "Memorizza la sequenza e ripetila correttamente: ↑ ↑ ↓ ↓ ← → ← → B A ↓ ↓ ↑ ↑ → ← → ← B A." },
  { category: "Intellettuali", icon: "🔐", text: "Decifra il codice usando la legenda: ○ ☘ ♫ ☾ ♢ ☺ ⚓" },
  { category: "Intellettuali", icon: "🔐", text: "Decifra il codice usando la legenda: ☠ ♥ ☠ ○ ♢ ☆ ⚓ ☺" },
  { category: "Intellettuali", icon: "🔐", text: "Decifra il codice usando la legenda: ♧ ○ ☾ ⚽ ○ ⚓ ⚽ ♥ □ ♫" },
  { category: "Intellettuali", icon: "🔐", text: "Decifra il codice usando la legenda: ☂ ♥ △ ✈ ♫ ◇ ♥ ☘ ♫ ✈ ☘ ♫ ☾" },
  { category: "Intellettuali", icon: "🔤", text: "Ricomponi la parola: E V I L A Z I O N E R" },
  { category: "Intellettuali", icon: "🔤", text: "Ricomponi le parole: T I N C A O  M E T S A T E N O T" },
  { category: "Intellettuali", icon: "❓", text: "Pesa di più un chilo di paglia o un chilo di ferro?" },

  // SOCIALI
  { category: "Sociali", icon: "😂", text: "Fai ridere qualcuno. (Un muto dice a un sordo, quel cieco ci spia)" },
  { category: "Sociali", icon: "🤝", text: "Trova qualcuno che ha qualcosa in comune con te." },
  { category: "Sociali", icon: "👋", text: "Presentati a qualcuno con cui hai parlato poco." },
  { category: "Sociali", icon: "🕵️", text: "Caccia fotografica: trova e fotografa qualcosa blu, qualcosa di vecchio, qualcosa di nuovo" },
  { category: "Sociali", icon: "🤫", text: "Confidati con qualcuno. Puoi anche mentire." },
  { category: "Sociali", icon: "📢", text: "Di’ al pulpito che stai facendo una task." },
  { category: "Sociali", icon: "✋", text: "Stringi la mano a 10 persone." },
  { category: "Sociali", icon: "👀", text: "Segui qualcuno per 20 secondi." },
  { category: "Sociali", icon: "🚨", text: "Ferma una persona e dille che è “SuS”." },
  { category: "Sociali", icon: "🪞", text: "Mettiti accanto a qualcuno e imita quello che fa per 15 secondi." },

  // FISICHE
  { category: "Fisiche", icon: "🏀", text: "Fai 5 canestri." },
  { category: "Fisiche", icon: "🗿", text: "Rimani perfettamente fermo per 30 secondi." },
  { category: "Fisiche", icon: "🏃", text: "Porta il testimone al piano superiore, o riportalo al piano inferiore." },
  { category: "Fisiche", icon: "🥚", text: "Porta  l'uovo sodo su un cucchiaio senza farlo cadere fino alla fine." },
  { category: "Fisiche", icon: "🎈", text: "Tocca 3 muri diversi tenendo il palloncino sempre in aria." },
  { category: "Fisiche", icon: "🪑", text: "Prova 3 sedie diverse." },
  { category: "Fisiche", icon: "🧹", text: "Pulisci la stanza con la scopa." },
  { category: "Fisiche", icon: "🏃‍♂️", text: "Completa un piccolo percorso a ostacoli." },
  { category: "Fisiche", icon: "🌬️", text: "Vai fuori a prendere un po’ d’aria, te lo meriti." },
  { category: "Fisiche", icon: "", text: "Fai un salto, fanne un altro, fai una giravolta, falla un’altra volta, guarda in su, guarda in giù… niente bacio!" }
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
