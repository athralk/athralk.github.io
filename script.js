// Taskbar clock. Everything else on this page (the Start menu) is plain
// HTML/CSS (<details>/<summary>) — this is the only JS the site needs.
function updateClock() {
  const el = document.getElementById("clock");
  if (!el) return;
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const mins = String(now.getMinutes()).padStart(2, "0");
  el.textContent = `${hours}:${mins}`;
}

updateClock();
setInterval(updateClock, 1000 * 30);

// Footer year, so it never goes stale.
const yearEl = document.getElementById("footer-year");
if (yearEl) yearEl.textContent = new Date().getFullYear();
