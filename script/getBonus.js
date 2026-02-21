document.getElementById("bonus-btn").addEventListener("click", function () {
  const bonusNumber = document.getElementById("bonus-number").value;

  const balance = document.getElementById("balance").innerText;

  const balanceAmount = Number(balance);

  if (bonusNumber.length != 11) {
    alert("Invalid Bonus Number");
    return;
  }

  const newBalance = balanceAmount + 500;

  document.getElementById("balance").innerText = newBalance;

  alert("Bonus Successful");
});
