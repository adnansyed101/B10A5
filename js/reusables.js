function toggleBtn(id, sectionId) {
  // Toggle Btn
  document.getElementById("donation-btn").classList.remove("bg-[#B4F461]");
  document
    .getElementById("donation-history-btn")
    .classList.remove("bg-[#B4F461]");
  document.getElementById(id).classList.add("bg-[#B4F461]");

  //   Toggle content
  document.getElementById("donation-history").classList.add("hidden");
  document.getElementById("donation-cards").classList.add("hidden");
  document.getElementById(sectionId).classList.remove("hidden");
}
