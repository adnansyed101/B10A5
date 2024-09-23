const donationBtn = document.getElementById("donation-btn");
const donationHistoryBtn = document.getElementById("donation-history-btn");

donationBtn.addEventListener("click", (e) =>
  toggleBtn(e.target.id, "donation-cards")
);
donationHistoryBtn.addEventListener("click", (e) =>
  toggleBtn(e.target.id, "donation-history")
);
