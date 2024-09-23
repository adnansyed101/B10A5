// toggle btn and Toggle Content
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

// Add to donations
function addToDonations(e, input, donated) {
  e.preventDefault();

  let currentBalance = document.getElementById("current-balance");
  let inputAmount = document.getElementById(input);
  const donatedAmount = document.getElementById(donated);

  const parsedCurrentBalance = parseFloat(currentBalance.innerText);
  const parsedDonatedAmount = parseFloat(donatedAmount.innerText);
  const parsedInputAmount = parseFloat(inputAmount.value);

  if (
    isNaN(parsedCurrentBalance) ||
    inputAmount.value === "" ||
    inputAmount.value < 0
  ) {
    alert("Please Enter a valid amount");
    return;
  } else if (parsedInputAmount > parsedCurrentBalance) {
    alert("You don't have enough balance ");
    return;
  } else {
    donatedAmount.innerText = parsedDonatedAmount + parsedInputAmount;
    currentBalance.innerText = parsedCurrentBalance - parsedInputAmount;
    document.getElementById("my_modal_1").showModal();
    inputAmount.value = "";
  }

}
