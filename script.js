// Compte à rebours jusqu'au départ — MARCHE OU CRÈVE, 28 novembre 2026, 10h00
const RACE_START = new Date("2026-11-28T10:00:00+01:00");

const els = {
  days: document.getElementById("cd-days"),
  hours: document.getElementById("cd-hours"),
  minutes: document.getElementById("cd-minutes"),
  seconds: document.getElementById("cd-seconds"),
};

function pad(n){
  return String(n).padStart(2, "0");
}

function updateCountdown(){
  if (!els.days) return; // le script est partagé, la page inscription n'a pas de compte à rebours

  const now = new Date();
  let diff = RACE_START - now;

  if (diff <= 0){
    els.days.textContent = "00";
    els.hours.textContent = "00";
    els.minutes.textContent = "00";
    els.seconds.textContent = "00";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  diff -= days * (1000 * 60 * 60 * 24);
  const hours = Math.floor(diff / (1000 * 60 * 60));
  diff -= hours * (1000 * 60 * 60);
  const minutes = Math.floor(diff / (1000 * 60));
  diff -= minutes * (1000 * 60);
  const seconds = Math.floor(diff / 1000);

  els.days.textContent = pad(days);
  els.hours.textContent = pad(hours);
  els.minutes.textContent = pad(minutes);
  els.seconds.textContent = pad(seconds);
}

updateCountdown();
setInterval(updateCountdown, 1000);
