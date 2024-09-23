// Buttons
const donationBtn = document.getElementById("donation-btn");
const donationHistoryBtn = document.getElementById("donation-history-btn");
// Forms
const noakhaliForm = document.getElementById("noakhali-form");
const feniForm = document.getElementById("feni-form");
const quotaForm = document.getElementById("quota-form");

// Button Events
donationBtn.addEventListener("click", (e) =>
  toggleBtn(e.target.id, "donation-cards")
);
donationHistoryBtn.addEventListener("click", (e) =>
  toggleBtn(e.target.id, "donation-history")
);

// Form Events
noakhaliForm.addEventListener("submit", (e) =>
  addToDonations(e, "noakhali-amount-input", "noakhali-amount")
);

feniForm.addEventListener("submit", (e) =>
  addToDonations(e, "feni-amount-input", "feni-amount")
);

quotaForm.addEventListener("submit", (e) =>
  addToDonations(e, "quota-amount-input", "quota-amount")
);
