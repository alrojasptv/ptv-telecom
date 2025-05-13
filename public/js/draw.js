let participants = [];
let winners = [];

document.getElementById("drawForm").addEventListener("submit", e => {
  e.preventDefault();
  const file = document.getElementById("drawCsv").files[0];
  const reader = new FileReader();

  reader.onload = function (event) {
    const lines = event.target.result.split("\n").slice(1);
    participants = lines.map(line => {
      const [name, lastname, phone] = line.split(",");
      return { name, lastname, phone };
    }).filter(u => u.name);
    document.getElementById("participants").innerHTML =
      participants.map(u => `<p>${u.name} ${u.lastname} - ${u.phone}</p>`).join("");
  };
  reader.readAsText(file);
});

document.getElementById("drawBtn").addEventListener("click", () => {
  if (participants.length === 0) return alert("No hay participantes");

  const display = document.getElementById("winnerDisplay");
  let i = 0;
  const interval = setInterval(() => {
    const candidate = participants[i % participants.length];
    display.textContent = `${candidate.name} ${candidate.lastname}`;
    i++;
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    const winner = participants.splice(Math.floor(Math.random() * participants.length), 1)[0];
    winners.push(winner);
    document.getElementById("winnersList").innerHTML += `<li>${winner.name} ${winner.lastname}</li>`;
  }, 3000);
});
